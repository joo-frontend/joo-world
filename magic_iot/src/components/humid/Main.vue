<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area" v-show="humid.isConn">

      <!-- section_main -->
      <section class="section_main section_humidify" v-if="isOnline">
          <div class="bg bg_humidify">
              <div class="area_title">
                  <div class="box_title">
                      <h1>
                        <span>{{ deviceInfo.nicknm }} </span>
                        <button @click="modNickNameModal = true" class="align_center sprite sprite_purify sprite_edit" v-if="deviceInfo.masterYn === 'Y'"></button>
                      </h1>
                  </div>
              </div>
              <div class="area_desc">
                <p v-if="humid.continueHumiTime > 0">총 사용시간 {{ humid.continueHumiTime | totalUseTime }}</p>
                <p class="notice" v-if="humid.waterAlert > 0 || humid.error === '00000001'"><span class="sprite sprite_humidify sprite_notice">?</span>{{ waterAlertStatMsg }}</p>

              </div>
              <!-- 습도 좋음 클래스 추가 'good'
               습도 나쁨 클래스 추가 'bad'
               습도 보통 클래스 추가 'normal'
               전원off 'off'
               -->
              <div class="area_air_status" :class="airStatObj">
                  <div class="box_txt_status" >
                      <p class="current" v-if="humid.power === 2">현재 습도</p>
                      <p class="humidify_num" v-if="humid.power === 2">{{ humid.humi }}<span>%</span></p>
                      <p class="current" v-if="humid.power === 1">전원 OFF</p>
                      <p class="humidify_num" v-if="humid.power === 1">제품이 꺼져있습니다</p>
                  </div>
              </div>
          </div>

          <div class="area_function_humidify">
              <div class="box_mode">
                  <p class="sprite sprite_humidify sprite_water" :class="humidifyObj"></p>
                  <span>{{ humid.humiAmt | humiAmtTxt }}</span>
              </div>
              <div class="box_mode">
                  <p class="sprite sprite_humidify sprite_battery" :class="{off: humid.battery < 30 && humid.battery >= 0, b_30: humid.battery >= 30 && humid.battery < 60, b_60: humid.battery >= 60 && humid.battery < 100, b_100: humid.battery === 100}"></p>
                  <span>{{ humid.battery }}<em>%</em></span>
              </div>
              <div class="box_mode">
                  <p class="sprite sprite_humidify sprite_timer" :class="{on: humid.remainOffTime !== '0000', off: humid.remainOffTime === '0000'}"></p>
                  <span>{{ humid.remainOffTime | remainOffTime }}</span>
              </div>
              <div class="box_mode">
                  <p class="sprite sprite_humidify sprite_uv" :class="{on: humid.uv === 2, off: humid.uv === 1}"></p>
                  <span>{{ humid.uv | uvUseYn }}</span>
              </div>
          </div>
      </section>
      <!-- //section_main -->
      <transition name="fade">
        <rename-modal v-if="isOnline && modNickNameModal" @close="modNickNameModal = false" :nickName="deviceInfo.nicknm" :deviceId="deviceId" v-on:modNickName="modNickName"></rename-modal>
      </transition>
      <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
  <!-- //wrap_contents_area-->
</template>
<script>
import RenameModal from '@/components/common/modal/ReName'
import ErrorView from '@/components/common/view/Error'

export default {
  name: 'main',
  props: ['userId', 'deviceId', 'deviceInfo', 'humid', 'route'],
  components: { RenameModal, ErrorView },
  data () {
    return {
      modNickNameModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.humid.isConn) {
      if (!this.humid.online) {
        this.reSend()
      }
    } else {
      setTimeout(() => {
        if (!this.humid.isConn) {
          this.humid.isConn = true
          this.humid.online = false
        }
      }, 1000 * 3)
    }
  },
  filters: {
    humiAmtTxt: function (val) {
      switch (val) {
        case 0:
          return '정지'
        case 1:
          return '약'
        case 2:
          return '중'
        case 3:
          return '강'
      }
    },
    remainOffTime: function (time) {
      if (time === '0000') return 'OFF'
      else return parseInt(time.substr(0, 2)) + ':' + time.substr(2, 2)
    },
    uvUseYn: function (uv) {
      if (uv === 2) return 'ON'
      else return 'OFF'
    },
    totalUseTime: function (time) {
      if (time < 24) return time + '시간'
      else if (time < 365) return parseInt(time / 24) + '일 ' + parseInt(time % 24) + '시간'
      else {
        var day = parseInt(time % (365 * 24) / 24)
        var year = parseInt(time / (365 * 24))
        if (day === 0) {
          if (year === 0) {
            return time % 24 + '시간'
          } else {
            return year + '년 ' + time % 24 + '시간'
          }
        } else {
          if (year === 0) {
            return day + '일 ' + time % 24 + '시간'
          } else {
            return year + '년 ' + day + '일 ' + time % 24 + '시간'
          }
        }
      }
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.humid.isConn) {
        if (curr - this.humid.timestamp > 35000) {
          this.humid.online = false
        } else {
          online = this.humid.online
        }
        if (!this.humid.waitCmd) this.loading(false)
      }
      return online
    },
    humidifyObj: function () {
      var obj = {
        disabled: false,
        stop: false,
        mild: false,
        moderate: false,
        intense: false
      }
      if (this.humid.power === 1) {
        obj.disabled = true
      } else obj.disabled = false
      if (this.humid.humiAmt === 0) obj.stop = true
      else if (this.humid.humiAmt === 1) obj.mild = true
      else if (this.humid.humiAmt === 2) obj.moderate = true
      else obj.intense = true
      return obj
    },
    airStatObj: function () {
      if (this.humid.power === 1) return 'off'
      else if (this.humid.power === 2) {
        if (this.humid.humi <= 20) return 'bad'
        else if (this.humid.humi <= 40) return 'normal'
        else return 'good'
      }
    },
    waterAlertStatMsg: function () {
      if (this.humid.error === '00000001') {
        return '물 감지센서를 확인해주세요.'
      } else if (this.humid.error === '00000000' && this.humid.waterAlert === 1) {
        return '가습기에 물이 부족합니다.'
      } else if (this.humid.error === '00000000' && this.humid.waterAlert === 2) {
        return '가습기에 물통이 없습니다.'
      } else return '알림없음'
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
    }
  }
}
</script>
<style>
/* ui.main.css : 메인 가습기 */
.section_main.section_humidify {
    height: 85.5vh;
    position: relative;
}

.section_main.section_humidify .bg_humidify {
    background: url(/images/main/bg_main_humidify.png);
    background-position: top right;
    background-repeat: no-repeat;
    -webkit-background-size: 360px;
    background-size: 360px;
  height:inherit;
}

@media all and (max-width: 320px),(max-height: 600px) {
    .section_main.section_humidify .bg_humidify {
        -webkit-background-size: 300px;
        background-size: 300px;
    }
}
@media all and (min-height: 700px) {
  .section_main.section_humidify .bg_humidify {
    -webkit-background-size: 400px;
    background-size: 400px;
  }

}
.section_main.section_humidify .area_desc {
  top: 66px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_main.section_humidify .area_desc {
    top: 54px;
  }
}
@media all and (min-height: 700px) {
  .section_main.section_humidify .area_desc {
    left: 30px;
  }
}
.section_main.section_humidify .area_desc p {
    padding-left: 2px;
    font-size: 1.3rem;
}
.section_main.section_humidify .area_desc .notice {
    position: relative;
    top: 10px;
    left: 0;
    padding-left: 19px;
    color: #eb535a;
    font-size: 1.3rem;
    font-weight: bold;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_main.section_humidify .area_desc p {
    font-size: 1.2rem;
  }
  .section_main.section_humidify .area_desc .notice {
    font-size: 1.2rem;
  }
}
.section_main.section_humidify .notice span {
    position: absolute;
    top: 0;
    left: 0;
}

.section_main.section_humidify .area_air_status {
    position: absolute;
    top: 124px;
    left: 6px;
    width: 207px;
    height: 207px;
    text-align: center;
}
@media all and (min-height: 700px) {
  .section_main.section_humidify .area_air_status {
    top: 156px;
    left: 26px;
  }
}
@media all and (max-width: 320px) {
  .section_main.section_humidify .area_air_status {
    width: 182px;
    height: 182px;
  }
}
.section_main.section_humidify .area_air_status.off {
    background: url('/images/main/status/bg_off.png') 0 0 no-repeat;
    -webkit-background-size: 207px;
    background-size: 207px;
}
.section_main.section_humidify .area_air_status.bad {
    background: url('/images/main/status/bg_bad.png') 0 0 no-repeat;
    -webkit-background-size: 207px;
    background-size: 207px;
}
.section_main.section_humidify .area_air_status.good {
    background: url('/images/main/status/bg_good.png') 0 0 no-repeat;
    -webkit-background-size: 207px;
    background-size: 207px;
}
.section_main.section_humidify .area_air_status.normal {
    background: url('/images/main/status/bg_normal.png') 0 0 no-repeat;
    -webkit-background-size: 207px;
    background-size: 207px;
}
@media all and (max-width: 320px) {
  .section_main.section_humidify .area_air_status.off {
    -webkit-background-size: 180px;
    background-size: 180px;
  }
  .section_main.section_humidify .area_air_status.bad {
    -webkit-background-size: 180px;
    background-size: 180px;
  }
  .section_main.section_humidify .area_air_status.good {
    -webkit-background-size: 180px;
    background-size: 180px;
  }
  .section_main.section_humidify .area_air_status.normal {
    -webkit-background-size: 180px;
    background-size: 180px;
  }
}
.section_main.section_humidify .area_air_status .box_txt_status {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
}
.section_main.section_humidify .area_air_status.off .box_txt_status {
  top: 75px;
}
@media all and (max-width: 320px) {
  .section_main.section_humidify .area_air_status .box_txt_status {
    top: 45px;
  }
  .section_main.section_humidify .area_air_status.off .box_txt_status {
    top: 65px;
  }
}
.section_main.section_humidify .area_air_status .box_txt_status .current {
    font-size: 2rem;
    line-height: 24px;
    font-weight: bold;
}

.section_main.section_humidify .area_air_status .box_txt_status .humidify_num {
    font-size: 6.2rem;
    line-height: 70px;
    margin: 10px 0 0 8px;
}

.section_main.section_humidify .area_air_status .box_txt_status .humidify_num span {
    font-size: 2rem;
}
.section_main.section_humidify .area_air_status.normal .box_txt_status p {
    color: #60c98f;
}
.section_main.section_humidify .area_air_status.bad .box_txt_status p {
    color: #f26358;
}
.section_main.section_humidify .area_air_status.good .box_txt_status p {
    color: #50abff;
}
.section_main.section_humidify .area_air_status.normal .box_txt_status p {
    color: #60c98f;
}

/* ui.main.css : 글자 크기 수정 */
.section_main.section_humidify .area_air_status.off .box_txt_status .current {
    color: #777777;
    font-size: 3.0rem;
    font-weight: bold;
}
.section_main.section_humidify .area_air_status.off .box_txt_status .humidify_num {
    color: #c2c2c2;
    font-size: 1.4rem;
    line-height: 20px;
    margin: 20px 0 0;
}

.section_main.section_humidify .area_air_status .box_humidify_info {
    position: absolute;
    top: 156px;
    left: 0;
    width: 100%;
}

.section_main.section_humidify .area_air_status .box_humidify_info p {
    color: #999999;
    font-size: 1.2rem;
    line-height: 26px;
}
.section_main.section_humidify .area_air_status .box_humidify_info p span {
    color: #4e555b;
    font-size: 2.3rem;
    vertical-align: top;
    margin: 0 2px 0 4px;
}
.section_main.section_humidify .area_function_humidify {
    position: absolute;
    bottom: 11px;
    left: 0;
    width: 100%;
  padding:0 20px;
}
@media all and (max-width: 320px) {
  .section_main.section_humidify .area_function_humidify {
    padding:0 10px;
  }
}
.section_main.section_humidify .area_function_humidify .box_mode {
    width: 24%;
    display: inline-block;
    text-align: center;
}
.section_main.section_humidify .area_function_humidify .box_mode span {
    color: #999999;
    font-weight: bold;
    display: block;
    line-height: 34px;
}
.section_main.section_humidify .area_function_humidify .box_mode .sprite_water + span {
    font-size: 1.6rem;
    color: #339eff;
}
.section_main.section_humidify .area_function_humidify .box_mode .sprite_water.stop + span,
.section_main.section_humidify .area_function_humidify .box_mode .sprite_water.disabled + span {
  color: #999999;
}
.section_main.section_humidify .area_function_humidify .box_mode .sprite_battery + span {
    font-size: 2.2rem;
}
.section_main.section_humidify .area_function_humidify .box_mode .sprite_battery + span em {
    font-size: 1.3rem;
}
.section_main.section_humidify .area_function_humidify .box_mode .sprite_timer + span {
    font-size: 2rem;
}
.section_main.section_humidify .area_function_humidify .box_mode .sprite_uv + span {
    font-size: 1.9rem;
}
</style>
