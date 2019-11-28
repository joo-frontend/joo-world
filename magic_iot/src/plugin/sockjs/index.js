import Stomp from 'stompjs'
import SockJS from 'sockjs-client'

export default {
  install (Vue, serverEndPoint, store) {
    console.log('stompjs plugin >> ')
    if (this.$stompClient && this.$stompClient.connected) {
      return
    }
    // 시작
    let socket = new SockJS(serverEndPoint)
    let stompClient = Stomp.over(socket)
    Vue.prototype.$stompClient = stompClient

    let addListeners = function () {
      if (this.$options['stompClient']) {
        console.log('addListeners')
        let conf = this.$options.stompClient
        console.log(conf)
      }
    }

    let removeListeners = function () {
      console.log('removeListener')
      // if (this.$options['stompClient']) {
      //   console.log('removeListener')
      // }
    }

    Vue.mixin({
      beforeCreate: addListeners,
      beforeDestroy: removeListeners
    })
  }
}
