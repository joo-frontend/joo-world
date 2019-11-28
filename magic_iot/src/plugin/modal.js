import LoadingModalView from '@/components/common/modal/Loading'
import ErrorModalView from '@/components/common/modal/Error'

export default {
  install (Vue) {
    // 로딩팝업
    var LoadingModalCo = Vue.extend(LoadingModalView)
    var loadingIns = null
    let loadingModal = function (showYn) {
      if (showYn) {
        var status = 'open'
        if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.goLoadingBar !== 'undefined') {
          window.SkmagicNative.goLoadingBar(status)
        } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
          var message = {
            command: 'goLoadingBar',
            status: status
          }
          window.webkit.messageHandlers.SkmagicNative.postMessage(message)
        } else {
          if (loadingIns) {
            loadingIns.show()
            return
          }
          loadingIns = new LoadingModalCo({
            el: document.createElement('div')
          })
          loadingIns.show()
          document.body.appendChild(loadingIns.$el)
        }
      } else {
        var status2 = 'close'
        if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.goLoadingBar !== 'undefined') {
          window.SkmagicNative.goLoadingBar(status2)
        } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
          var message2 = {
            command: 'goLoadingBar',
            status: status2
          }
          window.webkit.messageHandlers.SkmagicNative.postMessage(message2)
        } else {
          if (loadingIns) {
            loadingIns.close()
            return
          }
        }
      }
    }
    Vue.prototype.loading = loadingModal

    // 서버에러팝업
    var ErrModalCo = Vue.extend(ErrorModalView)
    var ErrIns = null
    var errorType = 'netWorkErr'
    Vue.prototype.$http.interceptors.response.use(function (response) {
      if (typeof response.data.header === 'undefined') {
        // 가전목록
        return response
      } else if (typeof response.data.header.resultCode !== 'undefined' && response.data.header.resultCode !== '50001' && response.data.header.resultCode !== '60001' && response.data.header.resultCode !== '30104') {
        return response
      } else if (ErrIns) {
        ErrIns.show()
        return
      } else {
        ErrIns = new ErrModalCo({
          el: document.createElement('div'),
          data () {
            return {
              type: errorType
            }
          }
        })
        ErrIns.show()
        document.body.appendChild(ErrIns.$el)
      }
    }, function (error) {
      if (ErrIns) {
        ErrIns.show()
        return
      }
      ErrIns = new ErrModalCo({
        el: document.createElement('div'),
        data () {
          return {
            type: errorType
          }
        }
      })
      ErrIns.show()
      document.body.appendChild(ErrIns.$el)
      return Promise.reject(error)
    })
  }
}
