/* 가전 연결 공통코드 */
import * as types from '@/vuex/common/mutation_types'
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
import Vue from 'vue'
import router from '@/router'

var socket, stmopClient

export default {
  fetchDatas: ({ commit }, info) => {
    if (typeof Vue.prototype.$stompClient === 'undefined' || Vue.prototype.$stompClient === null || Vue.prototype.$stompClient.connected === false) {
      // socket = new SockJS('/websocket')
      socket = new SockJS('/websocket')
      stmopClient = Stomp.over(socket)
      Vue.prototype.$stompClient = stmopClient
      stmopClient.debug = {}
      stmopClient.connect({'X-Authorization': 'token'}, function (frame) {
        // 접속 성공
        stmopClient.subscribe('/ack/' + info.deviceId, function (res) {
          var resJson = JSON.parse(res.body)
          // 응답 데이터가 가전 데이터 일때만 데이터 갱신
          if (resJson.type === 'ack') {
            resJson['isConn'] = true // 서버연결
            commit(types.SETTING_CHANNEL[info.type], resJson)
          }
          if (resJson.type === 'req' && resJson.online === false) {
            var state = {
              isConn: true,
              online: false,
              timestamp: new Date().getTime()
            }
            commit(types.SETTING_CHANNEL[info.type], state)
          }
        }, {'X-Authorization': 'token'})

        // 구독 설정 이후 상태 조회
        stmopClient.send('/get/' + info.modelKind + '/' + info.deviceId + '/' + info.userId, {'X-Authorization': 'token'}, JSON.stringify({}))
        // 30초 주기로 서버에 핑 메시지 전달(가전 구독을 유지하기 위해서)
        info.connectMonitor = setInterval(() => {
          stmopClient.send('/ping/' + info.deviceId + '/' + info.userId, {'X-Authorization': 'token'}, JSON.stringify({}))
        }, 30000)
      },
      function (data) {
        var state = {
          isConn: true,
          online: false,
          timestamp: new Date().getTime()
        }
        commit(types.SETTING_CHANNEL[info.type], state)
      })
    } else {
      // console.log('이미 연결되어 있음')
    }
  },
  fetchDataEnd: ({ commit }) => {
    commit(types.STOMP_CONNECT_YN, 'N')
    if (stmopClient != null) {
      stmopClient.disconnect(function () {
        Vue.prototype.$stompClient = null
      })
    }
  },
  connectError: ({ commit }, info) => {
    // 가전 연결 실패 시 오류 페이지로 이동
    var type = info.type
    var prePath = info.prePath
    router.push({name: types.SETTING_ERROR_CHANNEL[info.type], params: {prePath, type}})
  },
  swipeHandler: function ({ commit }, direction) {
    // console.log(router.currentRoute.name)
    var children = router.app.$children[0].$children[0].$children
    for (var i = 0; i < children.length; i++) {
      if (children[i].$vnode.componentOptions.tag === 'router-link') {
        // console.log(i + ':' + children[i].$vnode.componentOptions.propsData.to.name)
        if (router.currentRoute.name === children[i].$vnode.componentOptions.propsData.to.name) {
          // console.log('curr: ' + i + ' next:' + (i + 1))
          if (direction === 'left') {
            if (children.length > (i + 1) && children[(i + 1)].$vnode.componentOptions.tag === 'router-link') {
              router.push(children[(i + 1)].$vnode.componentOptions.propsData.to.path)
            } else {
              // console.log('마지막 탭 입니다!')
            }
          } else if (direction === 'right') {
            if (i > 1 && children[(i - 1)].$vnode.componentOptions.tag === 'router-link') {
              router.push(children[(i - 1)].$vnode.componentOptions.propsData.to.path)
            } else {
              // console.log('첫번째 탭 입니다!')
            }
          }
        //   // if (true) {
        //   // }
        //   // console.log('마지막 탭 아무 동작도 하지 않음')
          return
        }
      }
    }
    // console.log(' <<<< swipe ' + direction)
  }
}
