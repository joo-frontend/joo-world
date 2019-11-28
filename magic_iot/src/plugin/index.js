import Stomp from 'stompjs'
import SockJS from 'sockjs-client'

export default {
  install(Vue) {
    const keyPrefix = "_";
    Vue.prototype.keyPrefix = keyPrefix; // 콜백을 모니터링 하기 위한 keyPrefix 설정

    /*
      웹소캣에 데이터 전송
      invokeId: 고유 식별자
    */
    let sendWM = function(destination, body = '', invokeId, func, timeout = 3000, headers = {}) {
      if (typeof func !== 'function') {
        throw {
          name : 'Vue Stomp Error',
          message : 'The fourth argument must be a function.'
        }
      }
      if (invokeId == null) {
        throw {
          name : 'Vue Stomp Error',
          message : 'The third argument must not be null.'
        }
      }
      if (this.$stompClient == null || !this.$stompClient.connected) {
        throw {
          name : 'Vue Stomp Error',
          message : 'The connection is not established.'
        }
      }
      if (this.monitorEvents) { // 모니터링 할 명령 추가
        let key = this.keyPrefix + invokeId
        let monitorParm = {
          "cmd": body,
          "sendTime": Date.now(),
          "timeout": timeout,
          "func": func
        }
        this.monitorEvents[key] = monitorParm
      }
      this.$stompClient.send(destination, body, headers) // 웹소캣에 데이터 전송
    }
    Vue.prototype.sendWM = sendWM

    /*
      모니터 기능 지우기
    */
    let removeStompMonitor = function(invokeId) {
      if (invokeId == null) {
        throw {
          name : 'Vue Stomp Error',
          message : 'The first argument must not be null.'
        }
      }
      let key = this.keyPrefix + invokeId
      if (this.monitorEvents[key] != null) {
        delete this.monitorEvents[key]
      }
    }
    Vue.prototype.removeStompMonitor = removeStompMonitor;

    /*
      재 연결 에러 콜백
    */
    let reconnErrorCallback = function(errorEvent) {
      if(errorEvent.type == 'close' && this.stompReconnect == true) {
        console.log("reconnErrorCallback reconnect required!")
        this.reconnecting = true
        // 연결시작
        this.connetWM(this.connectParams.serverEndPoint, this.connectParams.headers,
           this.connectParams.connectCallback, this.connectParams.errorCallback)
      }
      if (this.errorCallback) this.errorCallback(errorEvent)
    }
    Vue.prototype.reconnErrorCallback = reconnErrorCallback

    /*
      웹소캣 연결
    */
    let connetWM = function(serverEndPoint, ...args) {
      // 연결되면 여러 연결을 피하기 위해 직접 돌아가도록 함
      if (this.$stompClient && this.$stompClient.connected) {
        return
      }
      let socket = new SockJS(serverEndPoint)

      let stompClient = Stomp.over(socket)
      Vue.prototype.$stompClient = stompClient

      if (this.stompReconnect == true && this.reconnecting != true) {
        switch(args.length) {
          case 3:
            if (args[1] instanceof Function) {
                let errorCallback = args[2]
                args[2] = this.reconnErrorCallback.bind(this)
                this.errorCallback = errorCallback
            }
            break
          case 4:
          default:
            let errorCallback = args[3]
            args[3] = this.reconnErrorCallback
            this.errorCallback = errorCallback
        }
        // 연결 매개 변수 저장
        let [headers, connectCallback, errorCallback] = this.$stompClient._parseConnect(...args)
        let connectParams = {
          "serverEndPoint" : serverEndPoint,
          "headers" : headers,
          "connectCallback" : connectCallback,
          "errorCallback" : errorCallback
        }
        this.connectParams = connectParams
      }
      this.reconnecting = false

      this.$stompClient.connect(...args)
      this.monitorEvents = []; // 초기 모니터링 대기열

      // 모니터링 시작
      if (this.responseMonitor == null) {
        this.responseMonitor = setInterval(() => {
          let now = Date.now();
          for (let mEventIndex in this.monitorEvents) {
            let monitorParm = this.monitorEvents[mEventIndex]
            if (monitorParm) {
              let delta = now - monitorParm.sendTime
              if (delta > monitorParm.timeout) { // 시간 초과 여부 체크
                if (typeof this.timeoutCallback == 'function' ) { // 제한 시간 콜백 처리
                  this.timeoutCallback(monitorParm.cmd)
                }
                delete this.monitorEvents[mEventIndex] // 이벤트 지우기
              }
            }
          }
        }, this.monitorIntervalTime)
      }
    }
    Vue.prototype.connetWM = connetWM

    /*
      초기 매개 변수 설정
    */
    let addListeners = function() {
      if (this.$options["stompClient"]) {
        let conf = this.$options.stompClient
        if (conf.timeout) { // 제한 시간 콜백 함수 설정
          if (typeof conf.timeout !== 'function') {
            throw {
              name : 'Vue Stomp Error',
              message : 'The argument[timeout] must be a function.'
            }
          }
          this.timeoutCallback = conf.timeout
        }
        // 폴링 시간 설정 모니터링
        let monitorIntervalTime = 100
        if (conf.monitorIntervalTime &&  typeof conf.monitorIntervalTime === 'number' && !isNaN(conf.monitorIntervalTime)) {
          monitorIntervalTime = conf.monitorIntervalTime
        }
        this.monitorIntervalTime = monitorIntervalTime
        // 다시 연결 할 지에 대한 여부 설정
        if (conf.stompReconnect) {
          this.stompReconnect = conf.stompReconnect
        }
      }
    }

    /*
      웹소캣 연결 끊기
    */
    let disconnetWM = function () {
      // 연결 끊어짐
      if (this.$stompClient && this.$stompClient.connected) {
        this.$stompClient.disconnect()
      }
      // 모니터링 된 개체 지우기
      clearInterval(this.responseMonitor)
      this.responseMonitor = null
    }
    Vue.prototype.disconnetWM = disconnetWM

    /*
      초기 매개 변수 제거
    */
    let removeListeners = function() {
      if (this.$options["stompClient"]) {
        this.disconnetWM()
        delete this.monitorEvents
        delete this.timeoutCallback
      }
    }

    Vue.mixin({
      // beforeCompile: addListeners, Vue v1.x
      beforeCreate: addListeners,
      beforeDestroy: removeListeners
    })
  }
}
