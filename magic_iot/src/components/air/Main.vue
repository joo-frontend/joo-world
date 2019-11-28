<template>
  <div class="wrap_contents_area" v-show="air.isConn">
    <!-- section_main -->
    <section class="section_main section_air_purify" v-if="isOnline">
      <div class="bg" :class="modelKindImg[deviceInfo.modelNm]">
        <div class="area_title">
          <div class="box_title">
            <h1>
              <span>{{ deviceInfo.nicknm }}</span><button class="align_center sprite sprite_purify sprite_edit" v-if="deviceInfo.masterYn === 'Y'" @click="modNickNameModal = true"></button>
            </h1>
          </div>
        </div>
        <div class="area_air_status" :class="airStatusObj" v-if="air.power === 2 && air.side === 1 && air.front === 1 && (air.sleep === 0 || air.sleep === 1)">
          <div class="box_txt_status">
            <p class="current">{{ airStatusMsg }}</p>
            <p class="air_status">실내 공기상태</p>
          </div>
          <div class="box_air">
            <div>
              <p>미세먼지</p>
              <p>초미세먼지</p>
            </div>
            <div>
              <p class="dust">{{ air.pm10 }}</p>
              <p class="dust">{{ air.pm25 }}</p>
            </div>
          </div>
          <!-- txt logo 화면 -->
          <div class="box_logo_lg" v-if="deviceInfo.modelNm === 'ACLV35' || deviceInfo.modelNm === 'ACLV32'"><img src="/images/main/img_doublepower_text.png" alt=""></div>
          <div class="box_air_bottom" v-else>
            <div class="degree">
              <p>{{ air.temp }}<span class="cDgree">C</span></p>
              <p>온도</p>
            </div>
            <div>
              <p>{{ air.humi }}<span>%</span></p>
              <p>습도</p>
            </div>
          </div>
        </div>

        <!-- 전원 OFF시 상태 -->
        <div class="area_air_status off" v-if="air.power === 1">
          <div class="box_txt_status">
            <p>전원 OFF</p>
            <p>제품이 꺼져있습니다</p>
          </div>
          <div class="box_logo"><img src="/images/main/logo.png" alt=""></div>
        </div>

        <!-- 대기모드 상태 -->
        <div class="area_air_status off" v-if="air.sleep === 2 && air.power === 2">
          <div class="box_txt_status">
            <p>대기모드</p>
            <p>AI 기능 동작 중</p>
          </div>
          <div class="box_logo"><img src="/images/main/logo.png" alt=""></div>
        </div>

        <!-- 에러 상태 -->
        <div class="area_air_status error" v-if="(air.side === 2 || air.front === 2) && air.power === 2">
          <div class="box_message">
            <div class="img_msg"><img :src="airErrorImg" alt=""></div>
            <p>커버를 닫아주세요</p>
          </div>
          <p class="error_msg"><span class="sprite sprite_air_purify sprite_error"></span>가전 알림</p>
        </div>

        <div class="box_air_purify_info">
          <div class="air_purify_info" v-if="deviceInfo.aiModelYn === 'Y'" :class="{col_3: deviceInfo.modelNm === 'ACLV15', col_2: deviceInfo.modelNm !== 'ACLV15'}">
            <p class="box_icon"><span class="sprite sprite_air_purify sprite_ai" :class="aiObj"></span></p>
            <p>AI</p>
          </div>
          <div class="air_purify_info" :class="{col_3: deviceInfo.modelNm === 'ACLV200' || deviceInfo.modelNm === 'ACLV09', col_2: deviceInfo.modelNm === 'ACLV100' || deviceInfo.modelNm === 'ACLV12'}"
                v-if="deviceInfo.modelNm !== 'ACLV35' && deviceInfo.modelNm !== 'ACLV32' && deviceInfo.modelNm !== 'ACLV15' && deviceInfo.modelNm !== 'ACLV16' && deviceInfo.modelNm !== 'ACLV20'">
            <p class="box_icon"><span class="sprite sprite_air_purify sprite_wifi" :class="wifiObj"></span></p>
            <p>Wi-Fi</p>
          </div>
          <div class="air_purify_info" :class="{col_3: gasObj, col_2: gasObj === false}">
            <p class="box_icon"><span class="sprite sprite_air_purify sprite_smell" :class="smellObj"></span></p>
            <p>{{ smellTxt }}</p>
          </div>
          <div class="air_purify_info" :class="{col_3: deviceInfo.modelNm === 'ACLV200' || deviceInfo.modelNm === 'ACLV09' || deviceInfo.modelNm === 'ACLV15'}"
                v-if="deviceInfo.modelNm === 'ACLV200' || deviceInfo.modelNm === 'ACLV09' || deviceInfo.modelNm === 'ACLV15'">
            <p class="box_icon"><span class="sprite sprite_air_purify" :class="{sprite_waterworks_off: air.power === 1 || air.humidification === 1 || air.water === 1, sprite_waterworks_on: air.water === 2 && air.power === 2 && air.humidification === 2}"></span></p>
            <p>급수</p>
          </div>
        </div>
      </div>
    </section>
    <!-- //section_main -->

    <!-- section_weather -->
    <weather-view :deviceInfo="deviceInfo" v-if="isOnline"></weather-view>
    <!-- //section_weather -->
    <transition name="fade">
      <rename-modal v-if="isOnline && modNickNameModal" @close="modNickNameModal = false" :nickName="deviceInfo.nicknm" :deviceId="deviceId" v-on:modNickName="modNickName"></rename-modal>
    </transition>
    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
    <v-dialog/>
  </div>
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import WeatherView from '@/components/common/view/Weather'
import RenameModal from '@/components/common/modal/ReName'

export default {
  name: 'main',
  props: ['userId', 'deviceId', 'deviceInfo', 'air', 'route'],
  components: { ErrorView, WeatherView, RenameModal },
  data () {
    return {
      airStatusMsg: '',
      modelKindImg: {
        'ACLV100': 'bg_air_purify_v100',
        'ACLV200': 'bg_air_purify_v200',
        'ACLV20': 'bg_air_purify_v200',
        'ACLV12': 'bg_air_purify_mini',
        'ACLV09': 'bg_air_purify_mini',
        'ACLV15': 'bg_air_purify_v15',
        'ACLV16': 'bg_air_purify_v16_35',
        'ACLV35': 'bg_air_purify_v32_35',
        'ACLV32': 'bg_air_purify_v32_35'
      },
      modNickNameModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.air.isConn) {
      if (!this.air.online) {
        this.reSend()
      }
    } else {
      setTimeout(() => {
        if (!this.air.isConn) {
          this.air.isConn = true
          this.air.online = false
        }
      }, 1000 * 5)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.air.isConn) {
        if (curr - this.air.timestamp > 35000) {
          this.air.online = false
        } else {
          online = this.air.online
        }
        // 제어 명령 대기중이 아닐때만 로딩바 닫기
        if (!this.air.waitCmd) this.loading(false)
      }
      return online
    },
    airStatusObj: function () {
      switch (this.air.airStatus) {
        case 1:
          this.airStatusMsg = '좋음'
          return 'good'
        case 2:
          this.airStatusMsg = '보통'
          return 'normal'
        case 3:
          this.airStatusMsg = '나쁨'
          return 'bad'
        case 4:
          this.airStatusMsg = '매우나쁨'
          return 'worse'
      }
    },
    smellObj: function () {
      if (this.air.power === 1) {
        return 'smell_01'
      } else {
        if (this.deviceInfo.modelNm === 'ACLV200' || this.deviceInfo.modelNm === 'ACLV20' || this.deviceInfo.modelNm === 'ACLV100') {
          switch (this.air.gasLv) {
            case 1:
              return 'smell_02'
            case 2:
              return 'smell_02_green'
            case 3:
              return 'smell_03_orange'
            case 4:
              return 'smell_m_04'
          }
        } else {
          switch (this.air.gasLv) {
            case 1:
              return 'smell_05'
            case 2:
              return 'smell_m_02'
            case 3:
              return 'smell_m_03'
            case 4:
              return 'smell_m_04'
          }
        }
      }
    },
    wifiObj: function () {
      if (this.air.power === 1) {
        return 'wifi_off'
      } else {
        switch (this.air.wifiSig) {
          case 4:
            return this.deviceInfo.modelNm === 'ACLV09' || this.deviceInfo.modelNm === 'ACLV12' ? 'wifi_03_blue' : 'wifi_03'
          case 3:
            return this.deviceInfo.modelNm === 'ACLV09' || this.deviceInfo.modelNm === 'ACLV12' ? 'wifi_03' : 'wifi_02'
          case 2:
            return this.deviceInfo.modelNm === 'ACLV09' || this.deviceInfo.modelNm === 'ACLV12' ? 'wifi_03_red' : 'wifi_01'
          case 1:
            return this.deviceInfo.modelNm === 'ACLV09' || this.deviceInfo.modelNm === 'ACLV12' ? 'wifi_off' : 'wifi_off'
        }
      }
    },
    gasObj: function () {
      if (this.deviceInfo.modelNm === 'ACLV200' || this.deviceInfo.modelNm === 'ACLV09' || this.deviceInfo.modelNm === 'ACLV15') return true
      else return false
    },
    aiObj: function () {
      if (this.air.power === 1) {
        return 'ai_01'
      } else {
        if (this.air.aiMode === 2) {
          if (this.air.airStatus === 1) return 'ai_05'
          else if (this.air.airStatus === 2) return 'ai_04'
          else if (this.air.airStatus === 3) return 'ai_03'
          else return 'ai_02'
        } else {
          return 'ai_01'
        }
      }
    },
    airErrorImg: function () {
      if (this.air.front === 2 && this.air.side === 2) {
        return '/images/main/air_purify_error_01.png'
      } else if (this.air.side === 2) {
        return '/images/main/air_purify_error_02.png'
      } else {
        return '/images/main/air_purify_error_03.png'
      }
    },
    smellTxt: function () {
      var smell = '가스'
      if (this.deviceInfo.modelNm === 'ACLV100' || this.deviceInfo.modelNm === 'ACLV200') {
        if (this.air.mcuVer <= 3) smell = '냄새'
      }
      return smell
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    modNickName: function (nicknm) {
      if (nicknm) {
        this.modNickNameModal = false
        this.deviceInfo.nicknm = nicknm
      }
    },
    getWeatherList: function () {
      this.$http.post('/api/weather/info', {
        cityCode: '',
        hdeviceSeq: this.deviceId
      })
    }
  }
}
</script>
<style>
/* 온도 C 추가 */
.section_main.section_air_purify .box_air_bottom div p span.cDgree {
  font-size: 1.6rem;
  position: absolute;
  right: 0px;
  color: #4e555b;
  bottom: 0px;
}
/* 슈퍼청정기 메인 */
.section_main.section_air_purify {
    /*height: 56.8vh;*/
  height: 360px;
    background: #fafafa;
}
@media all and (max-width: 320px) {
  .section_main.section_air_purify {
    height: 320px;
  }
}
.section_main.section_air_purify .area_air_status {
    position: absolute;
    top: 65px;
    left: 6px;
    width: 204px;
    height: 204px;
    text-align: center;
}
@media all and (max-height: 600px){
  .section_main.section_air_purify .area_air_status {
    top: 60px;
  }
}
@media all and (max-width: 320px) {
  .section_main.section_air_purify .area_air_status {
    top: 50px;
  }
}
@media all and (min-height: 700px) {
  .section_main.section_air_purify .area_air_status {
    left: 22px;
  }
}
.section_main.section_air_purify .bg_air_purify_mini {
    background: url(/images/main/bg_air_purify_mini.png);
    -webkit-background-size: 360px;
    background-size: 360px;
    background-position: top right;
    background-repeat: no-repeat;
}
.section_main.section_air_purify .bg_air_purify_v15 {
    background: url(/images/main/bg_air_purify_v15.png);
    -webkit-background-size: 360px;
    background-size: 360px;
    background-position: top right;
    background-repeat: no-repeat;
}
.section_main.section_air_purify .bg_air_purify_v16_35 {
    background: url(/images/main/bg_air_purify_v16_35.png);
    -webkit-background-size: 360px;
    background-size: 360px;
    background-position: top right;
    background-repeat: no-repeat;
}
.section_main.section_air_purify .bg_air_purify_v32_35 {
  background: url(/images/main/bg_air_purify_v32_v35.png);
  -webkit-background-size: 150px;
  background-size: 150px;
  background-position: right center;
  background-repeat: no-repeat;
}
@media all and (max-width: 320px) {
  .section_main.section_air_purify .bg_air_purify_v32_35 {
    background: url(/images/main/bg_air_purify_v32_v35.png);
    -webkit-background-size: 150px;
    background-size: 130px;
    background-position: right center;
    background-repeat: no-repeat;
  }
}
.section_main.section_air_purify .bg_air_purify_v100 {
    background: url(/images/main/bg_air_purify_v100.png);
    -webkit-background-size: 360px;
    background-size: 360px;
    background-position: top right;
    background-repeat: no-repeat;
}
.section_main.section_air_purify .bg_air_purify_v200 {
    background: url(/images/main/bg_air_purify_v200.png);
    -webkit-background-size: 360px;
    background-size: 360px;
    background-position: top right;
    background-repeat: no-repeat;
}
@media all and (max-width: 320px) {
  .section_main.section_air_purify .bg_air_purify_mini,
  .section_main.section_air_purify .bg_air_purify_v15,
  .section_main.section_air_purify .bg_air_purify_v16_35,
  .section_main.section_air_purify .bg_air_purify_v100,
  .section_main.section_air_purify .bg_air_purify_v200 {
    -webkit-background-size: 330px;
    background-size: 330px;
  }
}
.section_main.section_air_purify .area_air_status.good,
.section_main.section_air_purify .area_air_status.error,
.section_main.section_air_purify .area_air_status.loading {
    background: url('/images/main/status/bg_good_air.png') 0 0 no-repeat;
    -webkit-background-size: 204px;
    background-size: 204px;
}
.section_main.section_air_purify .area_air_status.normal {
    background: url('/images/main/status/bg_normal_air.png') 0 0 no-repeat;
    -webkit-background-size: 204px;
    background-size: 204px;
}
.section_main.section_air_purify .area_air_status.bad {
    background: url('/images/main/status/bg_bad_air.png') 0 0 no-repeat;
    -webkit-background-size: 204px;
    background-size: 204px;
}
.section_main.section_air_purify .area_air_status.worse {
    background: url('/images/main/status/bg_worse_air.png') 0 0 no-repeat;
    -webkit-background-size: 204px;
    background-size: 204px;
}
.section_main.section_air_purify .area_air_status.off {
    background: url('/images/main/status/bg_off_air.png') 0 0 no-repeat;
    -webkit-background-size: 204px;
    background-size: 204px;
}
.section_main.section_air_purify .area_air_status.off .box_txt_status {
    top: 63px;
}
.section_main.section_air_purify .area_air_status.off p:first-child {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 40px;
    color: #777777;
}
.section_main.section_air_purify .area_air_status.off p:nth-child(2) {
    font-size: 1.6rem;
    line-height: 24px;
    color: #c2c2c2;
}
.section_main.section_air_purify .area_air_status .box_logo {
    width: 61px;
    height: 18px;
    position: absolute;
    left: 72px;
    bottom: 27px;
}
.section_main.section_air_purify .area_air_status .box_logo_lg {
  width: 95px;
  position: absolute;
  left: 56px;
  bottom: 13px;
}
.section_main.section_air_purify .area_air_status.loading .box_message {
    position: absolute;
    top: 28px;
    left: 56px;
}
.section_main.section_air_purify .area_air_status.loading .img_msg img {
    width: 52px;
    height: 65px;
}
.section_main.section_air_purify .area_air_status.loading p {
    margin-top: 18px;
    font-size: 2.3rem;
    color: #50abff;
    font-weight: bold;
}
.section_main.section_air_purify .area_air_status.error {
  text-align: center;
  padding-left: 0;
}
.section_main.section_air_purify .area_air_status.error .box_message {
  position: relative;
  top: 28px;
}
.section_main.section_air_purify .area_air_status.error .img_msg img {
    width: 54px;
    height: 67px;
}
.section_main.section_air_purify .area_air_status.error p {
    margin-top: 10px;
    font-size: 1.6rem;
    color: #50abff;
}
.section_main.section_air_purify .area_air_status.error .error_msg {
  position: relative;
  top: 52px;
  font-size: 1.8rem;
  color: #777777;
  padding-left: 20px;
  font-weight: bold;
  display: inline-block;
}
.section_main.section_air_purify .area_air_status.error .error_msg span {
    position: absolute;
    top: 0;
    left: 0;
}
.section_main.section_air_purify .area_air_status .box_txt_status {
    position: absolute;
    top: 36px;
    left: 0;
    width: 100%;
}
.section_main.section_air_purify .area_air_status .current {
    font-size: 3.2rem;
    line-height: 38px;
    font-weight: bold;
}
.section_main.section_air_purify .area_air_status.good .current {
    color: #50abff;
}
.section_main.section_air_purify .area_air_status.normal .current {
    color: #60c98f;
}
.section_main.section_air_purify .area_air_status.bad .current {
    color: #f28458;
}
.section_main.section_air_purify .area_air_status.worse .current {
    color: #f26358;
}
/* 글씨체 볼드 처리 */
.section_main.section_air_purify .air_status {
    color: #6f7883;
    font-size: 1.6rem;
    line-height: 24px;
    font-weight: bold;
}
.section_main.section_air_purify .box_air {
    position: absolute;
    left: 50px;
    top: 100px;
}
.section_main.section_air_purify .box_air:after {
    content: '';
    display: table;
    width: 0;
    clear: both;
}
.section_main.section_air_purify .box_air div {
    float: left;
}
.section_main.section_air_purify .box_air div:nth-child(2) {
    text-align: left;
    width: 25px;
}

.section_main.section_air_purify .box_air p {
    font-size: 1.2rem;
    color: #c2c2c2;
    margin-bottom: 5px;
    text-align: right;
}
/* ui.main.css : 글자 두께 수정 */
.section_main.section_air_purify .box_air .dust {
    position: relative;
    font-size: 1.6rem;
    color: #4e555b;
    margin-left: 5px;
    display: inline-block;
    text-align: left;
    font-weight: bold;
}
.section_main.section_air_purify .box_air_bottom {
    position: absolute;
    bottom: 20px;
  left: 57px;
}
.section_main.section_air_purify .box_air_bottom div {
    display: inline-block;
    width: 44px;
    position: relative;
    padding-left: 10px;
}
.section_main.section_air_purify .box_air_bottom .degree {
    width:45px;
    padding-right: 10px;
    padding-left: 0;
}
.section_main.section_air_purify .box_air_bottom .degree:after {
    content: '';
    position: absolute;
    right: -1px;
    top: 16px;
    width: 1px;
    height: 15px;
    background: #d2d2d2;
}
.section_main.section_air_purify .box_air_bottom .degree p:nth-child(1):after {
    content: '';
    position: absolute;
    display: block;
    top: 1px;
    right: 11px;
    width: 4px;
    height: 5px;
    background: url('/images/common/sprite_weather.png') -125px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
/* ui.main.css : 글자 두께 수정 */
.section_main.section_air_purify .box_air_bottom div p:nth-child(1) {
    text-align: left;
    color: #4e555b;
    font-size: 1.6rem;
    position: relative;
    font-weight: bold;
}
.section_main.section_air_purify .box_air_bottom div p:nth-child(2) {
    text-align: left;
    color: #c2c2c2;
    font-size: 1.2rem;

}
.section_main.section_air_purify .box_air_bottom .degree p:nth-child(2) {
  text-align: right;
}
.section_main.section_air_purify .box_air_bottom div p span {
    font-size: 1rem;
    position: absolute;
    right: 6px;
    bottom: -1px;
}
.section_main.section_air_purify .box_air_bottom .degree span {
  right: 0px;
  font-size: 1.6rem;
  bottom: -1px;
}
.section_main.section_air_purify .box_air_purify_info {
    width: 200px;
    position: absolute;
    /*top: 280px;*/
  bottom: 16px;
    left: 14px;
}
/*@media all and (max-height: 600px) {
  .section_main.section_air_purify .box_air_purify_info {
    bottom: 15px;
  }
}*/
@media all and (max-width: 320px) {
    .section_main.section_air_purify .box_air_purify_info {
       /* top: 259px;*/
      bottom: 2px;
    }
}
@media all and (min-height: 700px) {
  .section_main.section_air_purify .box_air_purify_info {
    left: 30px;
  }
}
.section_main.section_air_purify .box_air_purify_info .air_purify_info.col_3 {
    width: 30%;
    text-align: center;
    display: inline-block;
}
.section_main.section_air_purify .box_air_purify_info .air_purify_info.col_2 {
    width: 48%;
    text-align: center;
    display: inline-block;
}
.section_main.section_air_purify .air_purify_info .box_icon {
    width: 39px;
    height: 39px;
    border: 1px solid #eeeef0;
    background: #eeeef0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin:0 auto;
}
.section_main.section_air_purify .air_purify_info p {
    font-size: 1.2rem;
    color: #a1a6ad;
    line-height: 20px;
}
/* 아이콘 위 공백 조정 */
.box_icon .sprite_air_purify {
    margin-top: 9px;
}
.box_icon .sprite_air_purify.sprite_dp_change,
.box_icon .sprite_air_purify.sprite_dp_change_off {
    margin-top: 4px;
}
.box_icon .sprite_air_purify.sprite_wifi {
    margin-top: 12px;
}
.box_icon .sprite_air_purify.sprite_ai {
    margin-left: 4px;
}

.section_weather.section_weather_wide {
    min-height: 100%;
    background: #f0f3f5;
    overflow-x: hidden;
}
.weather_contents {
    display: inline-block;
    /*width: 80px;*/
    padding-left: 11px;
    position: relative;
    vertical-align: top;
}
@media all and (max-width: 320px) {
    .weather_contents {
        padding-left: 3px;
    }
}
.weather_contents .box_air {
    top: 30px;
    left: 30px;
}
.section_weather.section_weather_wide .box_weather {
    padding: 5px 0 0 5px;
}
@media all and (max-width: 320px) {
    .section_weather.section_weather_wide .box_weather {
        padding: 5px 0 0 0;
    }
}
.section_weather.section_weather_wide .box_weather:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 85px;
    background: url(/images/page/bg_c1c1c1.png) top right repeat-y;
    -webkit-background-size: 1px;
    background-size: 1px;
}
.section_weather.section_weather_wide .box_weather .weather_img {
    width: 74px;
    height: 74px;
    display: inline-block;
}
.section_weather.section_weather_wide .box_weather .weather_desc {
    line-height: 20px;
    padding-left: 0;
}
.section_weather.section_weather_wide .weather_desc + span {
    font-size: 3rem;
    color: #6f7883;
    position: relative;
    line-height: 30px;
    display: inline-block;
    height: 32px;
    /*padding-left: 30px;  온도값 받아올때 */
}
@media all and (max-width: 320px) {
  .section_weather.section_weather_wide .weather_desc + span {
    font-size: 2.7rem;
  }
}
.section_weather.section_weather_wide .weather_desc + span:after {
    content: '';
    position: absolute;
    display: block;
    top: 4px;
    right: -10px;
    width: 9px;
    height: 8px;
    background: url(/images/common/sprite_weather.png) -50px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_weather.section_weather_wide .weather_etc {
    font-size: 1.1rem;
    color: #a1a6ad;
}
.section_weather.section_weather_wide .weather_etc span {
    font-size: 1.7rem;
    color: #6f7883;
    top: 1px;
    position: relative;
    padding-left: 3px;
    /*  padding-left: 18px; 습도값받아올때 */
}
.section_weather.section_weather_wide .weather_etc span strong {
    position: absolute;
    bottom: 0;
    right: -9px;
    font-size: 1rem;
}
.area_air_status {
    width: 50%;
    float: left;
    position: relative;
    padding-left: 10px;
}
@media all and (max-width: 320px) {
    .area_air_status {
        padding-left: 6px;
    }
}
.area_air_status .box_air {
    top: 2px;
   /* left: 108px;*/
}
/*@media all and (max-width: 320px) {
    .area_air_status .box_air {
        left: 99px;
    }
}*/
.area_air_status .box_air div {
    display: block;
}
.section_weather .area_air_status .box_air > div p:nth-child(1) {
    min-width: 60px;
    line-height: 20px;
    margin-bottom: 0;
}
@media all and (min-width: 400px) {
  .section_weather .area_air_status .box_air > div p:nth-child(1) {
    min-width: 68px;
    line-height: 23px;
    margin-bottom: 0;
  }
}
.section_weather .area_air_status .box_air_img {
    width: 89px;
    height: 89px;
    display: inline-block;
    position: relative;
}
.section_weather .area_air_status .box_air_img.air_good {
    background: url('/images/main/status/bg_good_sm.png') 0 0 no-repeat;
    -webkit-background-size: 89px;
    background-size: 89px;
}
.section_weather .area_air_status .box_air_img.air_normal {
    background: url('/images/main/status/bg_normal_sm.png') 0 0 no-repeat;
    -webkit-background-size: 89px;
    background-size: 89px;
}
.section_weather .area_air_status .box_air_img.air_bad {
    background: url('/images/main/status/bg_bad_sm.png') 0 0 no-repeat;
    -webkit-background-size: 89px;
    background-size: 89px;
}
.section_weather .area_air_status .box_air_img.air_worse {
    background: url('/images/main/status/bg_worse_sm.png') 0 0 no-repeat;
    -webkit-background-size: 89px;
    background-size: 89px;
}
.section_weather .area_air_status .box_air_img.air_off {
  background: url('/images/main/status/bg_off_sm.png') 0 0 no-repeat;
  -webkit-background-size: 89px;
  background-size: 89px;
}

.section_weather .area_air_status .box_air_img .air_info {
    position: relative;
    top: 10px;
    text-align: center;
    padding-top: 16px;
}
.section_weather .area_air_status .box_air_img .air_value {
    font-size: 1.8rem;
    line-height: 24px;
    font-weight: bold;
}
.section_weather .area_air_status .box_air_img.air_good .air_value {
    color: #50abff;
}
.section_weather .area_air_status .box_air_img.air_normal .air_value {
    color: #60c98f;
}
.section_weather .area_air_status .box_air_img.air_bad .air_value {
    color: #f28458;
}
.section_weather .area_air_status .box_air_img.air_worse .air_value {
    color: #f26358;
}
.section_weather .area_air_status .box_air_img .air_info p:nth-child(2) {
    font-size: 1.2rem;
    line-height: 18px;
    font-weight: bold;
    color: #6f7883;
}
.wrap_current_weather {
    position: relative;
    height: 135px;
    padding-top: 22px;
}
/* 날씨 스크롤 너비 수정 */
.section_weather .box_day_weather {
    background: #e8ebed;
    padding:8px 0;
    height: 135px;
    width: 569px;
}
.section_weather .box_day_weather li {
    float: left;
    border-right: 1px solid #d3d7db;
    width: 47px;
    /* 14.2 */
}
.section_weather .box_day_weather li:last-child {
    border: 0;
}
.section_weather .box_day_weather li p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
}
.section_weather .box_day_weather li .time {
    color: #a1a6ad;
    line-height: 30px;
}
.section_weather .box_day_weather li .time.current {
    color: #4e555b;
}
.section_weather .box_day_weather li .rain_per {
    color: #6fbaff;
    font-weight: normal;
    line-height: 20px;
}
.section_weather .box_day_weather li .degree {
    color: #6f7883;
    font-size: 1.3rem;
    position: relative;
    line-height: 20px;
}

.section_weather .box_day_weather li .weather_icon {
    padding: 13px 0 3px;
    text-align: center;
    height: 45px;
}
.wrap_day_weather {
    border-bottom: 1px solid #d7d7d8;
    padding-bottom: 10px;
  width: 100%;
  overflow-y: auto;
  white-space: nowrap;
}
.wrap_week_weather {
    position: relative;
}
.wrap_week_weather .week_title {
    padding-left: 3px;
    font-size: 1.3rem;
    line-height: 50px;
    font-weight: bold;
    color: #4e555b;
}
.wrap_week_weather .week_title + span {
    position: absolute;
    top: 17px;
    right: 0;
    font-size: 1.1rem;
    color: #c2c2c2;
}
.section_weather .wrap_week_weather ul li {
    border-bottom: 1px solid #dfe0e1;
    height: 57px;
    position: relative;
}
.section_weather .wrap_week_weather ul li:last-child {
    border: 0;
}
.section_weather .wrap_week_weather ul li .weekday {
    position: absolute;
    top: 20px;
    left: 7px;
    font-size: 1.6rem;
    color: #4e555b;
}
.section_weather .wrap_week_weather ul li p {
    float: left;
    width: 33.3%;
    line-height:56px;
}
.section_weather .wrap_week_weather ul li .day {
    font-size: 1.3rem;
    color: #a1a6ad;
    padding-left: 40px;
}
.section_weather .wrap_week_weather ul li .sprite_weather {
    vertical-align: middle;
    position: relative;
    left: 40px;
    top: 0;
}
/* 글자 오른쪽 정렬 수정 */
.section_weather .wrap_week_weather ul li .degree {
    font-size: 1.5rem;
    color: #4e555b;
    padding-left: 15px;
    float: right;
    text-align: right;
}

</style>
