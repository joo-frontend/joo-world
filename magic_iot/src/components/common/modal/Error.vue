<template>
  <!-- 팝업 -->
  <div class="popup_dim error" v-if="showPopupModal">
    <div class="popup">
      <div class="popup_header">
        <slot name="head">
          <h1>알림</h1>
        </slot>
      </div>
      <div class="popup_contents">
        <slot name="body">
          <h3 v-html="message"/>
        </slot>
      </div>
      <div class="popup_btn">
        <a class="btn btn_md btn_skyblue one" style="width:50%" @click="moveNativeHome" v-if="type !== 'netWorkErr'">확인</a>
          <div class="btn_inline" v-else>
            <a class="btn btn_md btn_gray" @click="moveHistoryPage">취소</a>
            <a class="btn btn_md btn_skyblue" @click="pageRefresh">확인</a>
          </div>
      </div>
    </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
// import router from '@/router'

export default {
  name: 'errPopup',
  data () {
    return {
      message: '',
      type: '',
      resCode: '',
      showPopupModal: true
    }
  },
  created () {
    this.loading(false)
    if (this.type === '') {
      this.message = '가전이 삭제되어 가전목록으로 이동합니다.'
    } else {
      this.message = '통신상의 문제로 연결에 실패하였습니다.<br>다시 연결하시겠습니까?'
    }
  },
  methods: {
    moveNativeHome () {
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.goHdeviceList !== 'undefined') {
        window.SkmagicNative.goHdeviceList()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'goHdeviceList'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    },
    pageRefresh () {
      this.showPopupModal = false
      window.location.reload()
    },
    moveHistoryPage () {
      this.showPopupModal = false
      this.moveNativeHome()
      // 만료된 인증토큰 시 가전목록으로 이동
      // if (typeof this.resCode.data.header !== 'undefined' && this.resCode.data.header.resultCode === '30104') {
      //   this.moveNativeHome()
      // }
      // var MAIN_PAGE = {
      //   water: 'WaterMain',
      //   humid: 'HumidMain',
      //   air: 'AirMain',
      //   range: 'RangeMain',
      //   elec: 'ElecMain',
      //   oven: 'OvenMain',
      //   super: 'SuperMain'
      // }
      // var path = router.history.current.fullPath
      // if (path.includes('water')) router.push({name: MAIN_PAGE['water']})
      // else if (path.includes('humid')) router.push({name: MAIN_PAGE['humid']})
      // else if (path.includes('air')) router.push({name: MAIN_PAGE['air']})
      // else if (path.includes('range')) router.push({name: MAIN_PAGE['range']})
      // else if (path.includes('electricRange')) router.push({name: MAIN_PAGE['elec']})
      // else if (path.includes('oven')) router.push({name: MAIN_PAGE['oven']})
      // else router.push({name: MAIN_PAGE['super']})
    },
    show () {
      this.loading(false)
      this.showPopupModal = true
    }
  }
}
</script>

<style scoped>
.popup_contents h3 {
  margin: 30px 5px 30px 5px;
}
.popup_contents h2 {
  margin: 5px;
  font-size: 12px;
}
</style>
