<template>
  <div class="wrap_contents_area">
    <!-- section_manual -->
    <section class="section_info_page top_menu">
      <div class="area_info_page area_manual">
        <h2>SK매직 상담실</h2>
        <div class="img"></div>
        <p>SK매직 제품A/S신청, 불편 신고, 칭찬/제안 등  <br>다양한 서비스가 가능합니다.</p>
        <p class="etc">평일 : 09시00분 ~ 18시30분 <br> 토요일 : 09시00분 ~ 17시00분  </p>
      </div>
    </section>
    <!-- //section_manual -->

    <div class="section_btn bottom_btn">
      <div class="btn_inline">
        <button class="btn btn_lg btn_skyblue btn_manual" @click="showService"><span class="sprite sprite_common sprite_call_sm"></span>서비스 센터</button>
        <button class="btn btn_lg btn_blue btn_manual" @click="showManual"><span class="sprite sprite_common sprite_manual_sm"></span>매뉴얼 보기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'useWay',
  props: ['deviceInfo'],
  created () {
    this.$emit('setTabMenu')
    this.loading(false)
  },
  methods: {
    showService: function () {
      var rentYtel = '1544-7784'
      if (this.deviceInfo.hdeviceRentYn === 'N') rentYtel = '1577-7784'
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.phoneKeypadOpen !== 'undefined') {
        window.SkmagicNative.phoneKeypadOpen(rentYtel)
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'phoneKeypadOpen',
          phoneNumber: rentYtel
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    },
    showManual: function () {
      var pdfUrl = this.deviceInfo.productInfo.filePath1
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.pdfOpen !== 'undefined') {
        window.SkmagicNative.pdfOpen(pdfUrl)
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'pdfOpen',
          pdf: pdfUrl
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    }
  }
}
</script>

<style>
/*사용설명*/
.area_info_page.area_manual .img {
    background: url('/images/common/sprite_info_page.png') -75px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 74px;
    height: 82px;
}
.area_info_page.area_manual p {
    color: #666666;
    margin-bottom: 15px;
}
.area_info_page.area_manual .etc {
    font-size: 1rem;
}

/* 공통 레이아웃 */
.section_info_page {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 52px 0 74px;
}
.section_info_page.top_menu {
    padding-top: 92px;
}
.section_info_page:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
.section_info_page .area_info_page {
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.section_info_page .img {
    margin: 0 auto;
    background: url(/images/common/sprite_info_page.png) 0 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 69px;
    height: 85px;
    margin-bottom: 17px;
}
.section_info_page h2 {
    font-size: 1.7rem;
    margin-bottom: 20px;
    font-weight: bold;
}
.section_info_page p {
    font-size: 1.2rem;
    line-height: 1.8rem;
}
</style>
