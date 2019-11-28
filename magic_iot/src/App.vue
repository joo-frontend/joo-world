<template>
  <div style="height:100%;">
    <router-view name="view"></router-view>
    <popup-view v-if="device" @ok="device = false">
      <h3 slot="body">{{deviceTxt}}</h3>
    </popup-view>
    <popup-view v-if="token" @ok="token = false">
      <h3 slot="body">{{tokenTxt}}</h3>
    </popup-view>
  </div>
</template>

<script>
import Vue from 'vue'
import PopupView from '@/components/common/modal/Alert'
export default {
  name: 'app',
  data () {
    return {
      device: false,
      token: false,
      tokenTxt: '',
      deviceTxt: ''
    }
  },
  components: {PopupView},
  created () {
    this.callBack()
  },
  methods: {
    callBack () {
      // 콜백
      window.SkmagicWeb = {
        // 단말정보
        callbackDeviceInfo: function (osKind, osVer, resolution, modelNm) {
          Vue.prototype.osKind = osKind
          Vue.prototype.osVer = osVer
          Vue.prototype.resolution = resolution
          Vue.prototype.modelNm = modelNm
          // self.deviceTxt = 'osKind: ' + osKind + '/ osVer: ' + osVer + '/ resolution: ' + resolution + '/ modelNm' + modelNm
          // self.device = true
        },
        // 백그라운드 시
        goBackGround: function () {
        },
        // 가전 토큰
        callbackHdeviceToken: function (hdeviceToken) {
          Vue.prototype.callbackHdeviceToken = hdeviceToken
          // self.tokenTxt = 'hdeviceToken: ' + hdeviceToken
          // self.token = true
        },
        // 현재 앱 버전
        callbackAppVersion: function (version) {
          Vue.prototype.callbackAppVersion = version
        }
      }
      // 스킴 (가전토큰)
      // if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.hdeviceToken !== 'undefined' && typeof window.SkmagicNative.deviceInfo !== 'undefined') {
      //   window.SkmagicNative.deviceInfo()
      //   window.SkmagicNative.hdeviceToken()
      //   this.$toast('가전토큰/단말정보 Android 스킴 OK')
      // } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
      //   var message = {
      //     command: 'hdeviceToken'
      //   }
      //   window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      //   var message2 = {
      //     command: 'deviceInfo'
      //   }
      //   window.webkit.messageHandlers.SkmagicNative.postMessage(message2)
      //   this.$toast('가전토큰/단말정보 IOS 스킴 OK')
      // } else if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.hdeviceToken !== 'undefined') {
      //   this.$toast('가전토큰 Android 스킴 OK')
      // } else if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.deviceInfo !== 'undefined') {
      //   this.$toast('단말정보 Android 스킴 OK')
      // } else {
      //   this.$toast('단말정보 Android 스킴 NO / IOS 스킴 NO')
      // }
      // 스킴 (가전토큰)
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.hdeviceToken !== 'undefined') {
        // this.$toast('가전토큰 스킴 OK')
        window.SkmagicNative.hdeviceToken()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        // this.$toast('가전토큰 스킴 OK')
        var message = {
          command: 'hdeviceToken'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      } else {
        // this.$toast('단말정보 스킴 No')
      }
      // 스킴 (단말정보)
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.deviceInfo !== 'undefined') {
        // this.$toast('단말정보 스킴 OK')
        window.SkmagicNative.deviceInfo()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        // this.$toast('단말정보 스킴 OK')
        var message2 = {
          command: 'deviceInfo'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message2)
      } else {
        // this.$toast('단말정보 스킴 No')
        window.SkmagicWeb.callbackDeviceInfo('osKind', 'osVer', 'resolution', 'modelNm')
      }
    }
  }
}
</script>
