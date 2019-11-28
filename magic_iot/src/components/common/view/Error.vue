<template>
  <div>
    <!-- section_info_page -->
    <section class="section_info_page top_menu">
      <div class="area_info_page">
        <h2>연결 실패</h2>
        <div class="img"></div>
        <p>등록하신 {{ deviceInfo.nicknm }}를 연결 할 수 없습니다. <br>가전상태 및 가전연결 네트워크를 확인해 주세요.</p>
      </div>
    </section>
    <!-- //section_error -->

    <section class="section_btn bottom_btn">
      <div class="area_btn btn_inline">
        <button v-if="route === 'SKMC'" class="btn btn_lg btn_skyblue btn_block" @click="goWifiReset">Wi-Fi 재설정</button>
        <button class="btn btn_lg btn_blue btn_block" :class="{one: route !== 'SKMC'}" @click="reSend">재시도</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'error',
  props: ['deviceId', 'userId', 'deviceInfo', 'route'],
  methods: {
    reSend: function () {
      this.$emit('reSend')
    },
    goWifiReset: function () {
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.goWifiReset !== 'undefined') {
        window.SkmagicNative.goWifiReset()
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'goWifiReset'
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    }
  }
}
</script>

<style>
.btn_inline .btn.one {
  width: 100%;
}
/* ui.page.css : 연결실패 에러 */
.section_info_page {
    position: absolute;
    top:0;
    left:0;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 52px 0 74px;
}
.section_info_page.top_menu {
    padding-top: 92px;
}
.section_info_page .area_info_page{
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.section_info_page:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
.section_info_page h2 {
    font-size: 1.7rem;
    margin-bottom: 20px;
    font-weight: bold;
}
.section_info_page .img {
    margin: 0 auto;
    background: url('/images/common/sprite_info_page.png') 0 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 69px;
    height: 85px;
    margin-bottom: 17px;
}
.section_info_page p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  padding:0 27px;
}
/* 연결실패 미니 정수기 */
.wrap_error_mini .section_info_page.top_menu {
    height: 84%;
}
.wrap_error_mini .section_btn.bottom_btn {
    bottom: 102px;
    padding-bottom: 30px;
}
.section_weather_msg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #f0f0f0;
    border-top: #eeeeee 1px solid;
    height: 102px;
    padding: 0 15px;
}
.wrap_error_mini .alert_weather_msg {
    position: relative;
    padding: 34px 0 0 61px;
}
.wrap_error_mini .alert_weather_msg p {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 19px;
}
.wrap_error_mini .alert_weather_msg .btn {
    height: 33px;
    line-height: 31px;
    font-size: 1.3rem;
    width: 90px;
    position: absolute;
    right: 0;
}
.wrap_error_mini .alert_weather_msg .sprite {
    position: absolute;
    top: 27px;
    left: 0;
}
</style>
