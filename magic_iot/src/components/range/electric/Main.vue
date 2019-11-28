<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area" v-show="elecRange.isConn">
    <!-- section_main -->
    <section class="section_main section_induction" v-if="isOnline">
      <div class="bg bg_induction">
          <div class="area_title">
              <div class="box_title">
                  <h1>
                  <span>{{ deviceInfo.nicknm }}</span>
                    <button class="align_center sprite sprite_purify sprite_edit" v-if="deviceInfo.masterYn === 'Y'" @click="modNickNameModal = true">
                    </button>
                  </h1>
              </div>
          </div>
        <div class="area_desc">
          <p :style="styleObj"><span :class="classObj"></span>{{ rangeStatusMsg }}</p>
        </div>
          <div class="area_induction">
              <div class="range_size range_sm">
                  <div>
                    <input type="checkbox" class="toggle_range toggle_range_sm" :checked="elecRange.bunerDetail[0].status === 3" disabled>
                   <!-- <label for="">소화구</label>-->
                  </div>
                  <button class="btn_round" :class="{btn_on: elecRange.bunerDetail[0].kepping === 2, btn_off: elecRange.bunerDetail[0].kepping === 1}" v-if="elecRange.bunerDetail[0].status === 3" :disabled="elecRange.bunerDetail[0].status !== 3" @click="sendDataSetting('kepping')" value="1">보온</button>
              <!-- <div class="tooltip_range btn_round">5분 후 꺼짐</div> -->
              </div>
              <div class="range_size range_md">
                  <div>
                    <input type="checkbox" class="toggle_range toggle_range_md" :checked="elecRange.bunerDetail[1].status === 3" disabled>
                   <!-- <label for="">중화구</label>-->
                  </div>
                  <button class="btn_round" :class="{btn_on: elecRange.bunerDetail[1].kepping === 2, btn_off: elecRange.bunerDetail[1].kepping === 1}" v-if="elecRange.bunerDetail[1].status === 3" :disabled="elecRange.bunerDetail[1].status !== 3" @click="sendDataSetting('kepping')" value="2">보온</button>
              </div>
              <div class="range_size range_lg">
                  <div>
                    <input type="checkbox" class="toggle_range toggle_range_lg" :checked="elecRange.bunerDetail[2].status === 3" disabled>
                    <!--<label for="">인덕션</label>-->
                  </div>
                  <button class="btn_round" :class="{btn_on: elecRange.bunerDetail[2].kepping === 2, btn_off: elecRange.bunerDetail[2].kepping === 1}" v-if="elecRange.bunerDetail[2].status === 3" :disabled="elecRange.bunerDetail[2].status !== 3" @click="sendDataSetting('kepping')" value="3">보온</button>
              </div>
          </div>
        </div>
    </section>
    <!-- //section_main -->

    <!-- section_timer -->
    <section class="section_timer" v-if="isOnline">
        <p class="timer_title"><span class="sprite sprite_gas_stove sprite_timer"></span>타이머</p>
        <div class="area_timer">
            <div class="box_timer" :class="{timer_off: elecRange.bunerDetail[0].status !== 3 || elecRange.bunerDetail[0].offRemainTime === '000000'}">
                <span>소화구</span>
                <button class="setting" :disabled="elecRange.bunerDetail[0].status !== 3 || elecRange.bunerDetail[0].offRemainTime === '000000'" value="1" @click="setCurBunner('1', 'A')">설정</button>
                <button @click="setCurBunner('1', 'B')" :disabled="elecRange.bunerDetail[0].status !== 3" class="time_box">{{ smallStove }}</button>
            </div>
            <div class="box_timer" :class="{timer_off: elecRange.bunerDetail[1].status !== 3 || elecRange.bunerDetail[1].offRemainTime === '000000'}">
                <span>중화구</span>
                <button class="setting" :disabled="elecRange.bunerDetail[1].status !== 3 || elecRange.bunerDetail[1].offRemainTime === '000000'" value="2" @click="setCurBunner('2', 'A')">설정</button>
                <button @click="setCurBunner('2', 'B')" :disabled="elecRange.bunerDetail[1].status !== 3" class="time_box">{{ middleStove }}</button>
            </div>
            <div class="box_timer" :class="{timer_off: elecRange.bunerDetail[2].status !== 3 || elecRange.bunerDetail[2].offRemainTime === '000000'}">
                <span>인덕션</span>
                <button class="setting" :disabled="elecRange.bunerDetail[2].status !== 3 || elecRange.bunerDetail[2].offRemainTime === '000000'" value="3" @click="setCurBunner('3', 'A')">설정</button>
                <button @click="setCurBunner('3', 'B')" :disabled="elecRange.bunerDetail[2].status !== 3" class="time_box">{{ inductionTime }}</button>
            </div>
        </div>
    </section>
    <!-- //section_timer -->

    <!-- section_oven_bottom_menu -->
    <section class="section_function section_toggle toggle_col_3" v-if="isOnline">
        <div class="area_toggle" @click="showAlertModal">
            <input type="checkbox" id="kidLock" class="toggle_range range_lock" :checked="elecRange.kidLock === 2">
            <label for="kidLock">LOCK</label>
        </div>
        <div class="area_toggle" @click="showAlertModal">
          <input type="checkbox" id="bunerAllOff" class="toggle_range fireball" :checked="bunnerOnCount" :disabled="bunnerOnCount === false">
          <label for="bunerAllOff">화구 OFF</label>
        </div>
        <div class="area_toggle" @click="sendDataSetting('volume')">
            <input type="checkbox" class="toggle_range volume" id="volume" :checked="elecRange.volume > 0">
            <label for="volume">음성</label>
            <p class="sprite sprite_common sprite_stage" :class="{stage01: elecRange.volume === 1, stage02: elecRange.volume === 2, stage03: elecRange.volume === 3, stage04: elecRange.volume === 4, stage05: elecRange.volume === 5 }"></p>
        </div>
    </section>
    <!-- //section_oven_bottom_menu -->
    <!-- popup -->
    <transition name="fade">
      <setting-time-modal v-if="isOnline && setTimeModal" v-on:offRemainTimeSend="offRemainTimeSend" :deviceInfo="deviceInfo" :curBunerIndex="curBunerIndex" :range="elecRange" @close="setTimeModal = false"/>
    </transition>
    <transition name="fade">
      <popup-modal v-if="cancleTimeModal" @ok="cancleOffRemainTime" :sendNm="curBunerIndex" @close="cancleTimeModal = false">
        <h3 slot="body">타이머 OFF 하시겠습니까?</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <popup-modal v-if="isOnline && popupModal === 'kidLock' || popupModal === 'bunerAllOff'" :sendNm="popupModal" @ok="stompClientSend(popupModal, '1')" @close="popupModal = false">
        <h3 slot="body">{{ alertMsg }}</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="isOnline && controlErrModal" @ok="controlErrModal = false">
        <h3 slot="body">가전 제어에 대한 응답이 없습니다.</h3>
      </alert-modal>
    </transition>
    <transition name="fade">
      <rename-modal v-if="isOnline && modNickNameModal" @close="modNickNameModal = false" :nickName="deviceInfo.nicknm" :deviceId="deviceId" v-on:modNickName="modNickName"/>
    </transition>

    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
  <!-- //wrap_contents_area-->
</template>

<script>
import PopupModal from '@/components/common/modal/Popup'
import SettingTimeModal from '@/components/range/common/SettingTime'
import ErrorView from '@/components/common/view/Error'
import RenameModal from '@/components/common/modal/ReName'
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'main',
  components: { PopupModal, SettingTimeModal, ErrorView, RenameModal, AlertModal },
  props: ['userId', 'deviceId', 'deviceInfo', 'info', 'elecRange', 'route'],
  data () {
    return {
      curBunerIndex: '',
      hour: '',
      min: '',
      setTimeModal: false,
      cancleTimeModal: false,
      popupModal: false,
      controlErrModal: false,
      modNickNameModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.elecRange.isConn) {
      if (!this.elecRange.online) this.reSend()
    } else {
      setTimeout(() => {
        if (!this.elecRange.isConn) {
          this.elecRange.isConn = true
          this.elecRange.online = false
        }
      }, 1000 * 3)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.elecRange.isConn) {
        // this.$toast(this.elecRange)
        if (curr - this.elecRange.timestamp > 35000) {
          this.elecRange.online = false
        } else {
          online = this.elecRange.online
        }
        if (!this.elecRange.waitCmd) this.loading(false)
      }
      return online
    },
    styleObj: function () {
      if (this.bunnerOnCount) return { 'padding-left': '15px' }
      else return { 'padding-left': '0px' }
    },
    classObj: function () {
      if (this.bunnerOnCount > 0) {
        return {
          sprite: true,
          sprite_gas_stove: true,
          sprite_use_time: true
        }
      }
    },
    bunnerOnCount: function () {
      var count = 0
      for (var index in this.elecRange.bunerDetail) {
        if (this.elecRange.bunerDetail[index].status === 3) count++
      }
      if (count > 0) return true
      else return false
    },
    rangeStatusMsg: function () {
      var msg
      var hour = Math.floor(parseInt(this.elecRange.continueUsedMin) / 60)
      var min = parseInt(this.elecRange.continueUsedMin) % 60
      if (this.bunnerOnCount) {
        if (min > 0) {
          if (String(hour).length === 1) hour = '0' + hour
          if (String(min).length === 1) min = '0' + min
          msg = '연속 사용시간 ' + hour + ':' + min
        } else {
          msg = '작동이 시작 되었습니다.'
        }
      } else {
        msg = '현재 작동하고 있지 않습니다.'
      }
      return msg
    },
    alertMsg: function () {
      if (this.popupModal === 'kidLock') {
        return '잠금기능을 해제 하시겠습니까?'
      } else if (this.popupModal === 'bunerAllOff' && this.bunnerOnCount > 0) {
        return '현재 작동 중인 모든 버너를 OFF 하시겠습니까?'
      }
    },
    smallStove: function () {
      var time = this.elecRange.bunerDetail[0].offRemainTime
      if (this.elecRange.bunerDetail[0].status === 3 && this.elecRange.bunerDetail[0].offRemainTime !== '000000') return this.setTimeFormat(time)
      else return 'OFF'
    },
    middleStove: function () {
      var time = this.elecRange.bunerDetail[1].offRemainTime
      if (this.elecRange.bunerDetail[1].status === 3 && this.elecRange.bunerDetail[1].offRemainTime !== '000000') return this.setTimeFormat(time)
      else return 'OFF'
    },
    inductionTime: function () {
      var time = this.elecRange.bunerDetail[2].offRemainTime
      if (this.elecRange.bunerDetail[2].status === 3 && this.elecRange.bunerDetail[2].offRemainTime !== '000000') return this.setTimeFormat(time)
      else return 'OFF'
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
    setTimeFormat: function (time) {
      var hour = parseInt(time.substr(0, 2))
      var min = parseInt(time.substr(2, 2))
      var sec = parseInt(time.substr(4, 2))
      if (time === '000000') {
        return 'OFF'
      } else {
        if (sec > 0) min = min + 1
        if (min === 60) {
          hour = hour + 1
          min = 0
        }
        if (hour < 10) hour = '0' + hour
        if (min < 10) min = '0' + min
        return hour + ':' + min
      }
    },
    showAlertModal: function () {
      var name = event.target.id
      if (name === 'kidLock') {
        if (this.elecRange[name] === 2) this.popupModal = event.target.id
        else this.stompClientSend(name, '2')
      } else {
        if (this.bunnerOnCount > 0) this.popupModal = event.target.id
      }
    },
    setCurBunner: function (val, type) {
      this.curBunerIndex = val
      if (type === 'A') {
        this.setTimeModal = true
      } else if (type === 'B') {
        if (this.elecRange.bunerDetail[parseInt(val - 1)].status === 3 && this.elecRange.bunerDetail[parseInt(val - 1)].offRemainTime === '000000') {
          this.setTimeModal = true
        } else {
          this.cancleTimeModal = true
        }
      }
    },
    cancleOffRemainTime: function () {
      this.cancleTimeModal = false
      this.stompClientSend('bunerOffTimerOff', event.target.name)
    },
    offRemainTimeSend: function (hour, min) {
      this.setTimeModal = false
      this.stompClientSend('bunerOffTimerOn', this.curBunerIndex + ',' + ((parseInt(hour) * 60) + parseInt(min)))
    },
    sendDataSetting: function (name) {
      var val
      if (name === 'volume') {
        val = parseInt(this.elecRange[name]) + 1
        if (val > 5) val = 0
      } else if (name === 'kepping') {
        val = event.target.value
        if (this.elecRange.bunerDetail[parseInt(event.target.value) - 1].kepping === 2) name = 'keepingOff'
        else name = 'keepingOn'
      }
      this.stompClientSend(name, val)
    },
    stompClientSend: function (name, val) {
      event.preventDefault()
      var self = this
      var cmdObj = {}
      cmdObj[name] = String(val)
      this.popupModal = false
      self.loading(true)
      this.elecRange.waitCmd = true
      if (typeof this.callbackHdeviceToken === 'undefined') {
        this.callbackHdeviceToken = 'token'
      }
      this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))

      setTimeout(() => {
        waitResponse(name, 20)
      }, 200)

      function waitResponse (name, cnt) {
        var check = false
        switch (name) {
          case 'bunerOffTimerOff':
            check = self.elecRange.bunerDetail[parseInt(val.substr(0, 1) - 1)].offRemainTime === '000000'
            break
          case 'bunerOffTimerOn':
            var pad = function (x) { return (x < 10) ? '0' + x : x }
            var time = pad(parseInt(val.substr(2) / 60 % 60)) + pad(parseInt(val.substr(2) % 60)) + pad(parseInt(val.substr(2) / (60 * 60)))
            check = self.elecRange.bunerDetail[parseInt(val.substr(0, 1) - 1)].offRemainTime === time
            break
          case 'bunerAllOff':
            self.bunnerOnCount === false ? check = true : check = false
            break
          case 'keepingOn':
            check = self.elecRange.bunerDetail[parseInt(val - 1)].kepping === 2
            break
          case 'keepingOff':
            check = self.elecRange.bunerDetail[parseInt(val - 1)].kepping === 1
            break
          default:
            check = String(self.elecRange[name]) === cmdObj[name]
            break
        }
        if (cnt > 0) {
          if (check) {
            self.elecRange.waitCmd = false
            self.loading(false)
            if (self.elecRange.menuCode !== 0 && self.elecRange.handleStatus === 2) self.handleStatusAlert = true
            return
          } else {
            setTimeout(() => {
              waitResponse(name, --cnt)
            }, 200)
          }
        } else {
          self.elecRange.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
    }
  }
}
</script>
<style>
/* ui.main.css : 전기레인지 메인 */
.section_main.section_induction {
    height: 56.5vh;
    background: #e8e8e8;
}

.section_main.section_induction .bg_induction {
    background: url('/images/main/bg_main_induction.png');
    background-position: top center;
    background-repeat: no-repeat;
    -webkit-background-size: 360px;
    background-size: 360px;
  height: inherit;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_main.section_induction .bg_induction {
      background-position: center;
        -webkit-background-size: 340px;
        background-size: 340px;
    }
}
@media all and (min-height: 700px) {
  .section_main.section_induction .bg_induction {
    -webkit-background-size: 400px;
    background-size: 400px;
  }
}
.section_induction .area_induction {
    position: relative;
    top: 81px;
    left: 50%;
    margin-left: -147px;
    width: 294px;
    height: 245px;
}
@media all and (max-height: 600px) {
  .section_induction .area_induction {
    top: 65px;
  }
}
@media all and (max-width: 320px) {
  .section_induction .area_induction {
    top: 60px;
  }
}
@media all and (min-height: 700px) {
  .section_induction .area_induction {
    top: 97px;
  }
}
.section_main.section_induction .area_desc {
  top: 55px;
}
@media all and (min-height: 700px) {
  .section_main.section_induction .area_desc {
    top: 60px;
  }
}
@media all and (max-height: 600px) {
  .section_main.section_induction .area_title {
    top: 16px;
  }
  .section_main.section_induction .area_desc {
    top: 45px;
  }
}

.section_induction .area_induction .range_size {
    position: absolute;
    text-align: center;
}

.section_induction .area_induction .range_size div {
    position: relative;
}

.section_induction .area_induction .range_size label {
    position: absolute;
    color: rgba(255,255,255,0.5);
}
.section_induction .area_induction .range_size .toggle_range:checked + label {
    color: #ffffff;
}

.section_induction .area_induction .range_size.range_sm {
    width: 73px;
    height: 73px;
    top: 18px;
    left: 50px;
}
@media all and (min-height: 700px) {
  .section_induction .area_induction .range_size.range_sm {
    left: 40px;
  }
}
.section_induction .area_induction .range_size.range_sm label {
    top: 22px;
    left: 22px;
    font-size: 1.1rem;
}
.section_induction .area_induction .range_size.range_md {
    width: 97px;
    height: 96px;
    top: 118px;
    left: 41px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_induction .area_induction .range_size.range_md {
    top: 115px;
  }
}
@media all and (min-height: 700px) {
  .section_induction .area_induction .range_size.range_md {
    top: 132px;
    left: 31px;
  }
}
.section_induction .area_induction .range_size.range_md label {
    top: 30px;
    left: 32px;
    font-size: 1.2rem;
}
.section_induction .area_induction .range_size.range_lg {
    width: 108px;
    height: 109px;
    top: 55px;
    left: 156px;
}
@media all and (min-height: 700px) {
  .section_induction .area_induction .range_size.range_lg {
    top: 55px;
  }
}
.section_induction .area_induction .range_size.range_lg label {
    top: 36px;
    left: 37px;
    font-size: 1.2rem;
}


.toggle_range {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    background: url(/images/common/sprite_induction_range.png) 0 0 no-repeat;
    -webkit-background-size: 300px;
    background-size: 300px;
    /*display: block;*/
}
/*.toggle_range:active {
    opacity:0.6;
}*/
/*.toggle_range:disabled {
    opacity:0.3;
}*/

.toggle_range.toggle_range_sm {
  background-position: 0 0;
  width: 73px;
  height: 73px;
}
.toggle_range.toggle_range_sm:checked {
  background-position: -75px 0;
}
.toggle_range.toggle_range_md {
  background-position: 0 -75px;
  width: 97px;
  height: 96px;
}
.toggle_range.toggle_range_md:checked {
  background-position: -100px -75px;
}
.toggle_range.toggle_range_lg {
  background-position: 0 -175px;
  width: 108px;
  height: 109px;

}
.toggle_range.toggle_range_lg:checked {
  background-position: -125px -175px;
}
.toggle_range.toggle_range_sm:disabled {
  opacity: 1;
}
.toggle_range.toggle_range_md:disabled {
  opacity: 1;
}
.toggle_range.toggle_range_lg:disabled {
  opacity: 1;
}

.toggle_range.range_lock {
    background-position: -150px 0;
    width: 36px;
    height: 20px;
    margin-top: 3px;
}
.toggle_range.range_lock:checked {
    background-position: -150px -25px;
}
.toggle_range.fireball {
    background-position: -200px 0;
    width: 27px;
    height: 27px;
}
.toggle_range.fireball:checked {
    background-position: -250px 0;
}
.toggle_range.volume {
    background-position: -150px -50px;
    width: 27px;
    height: 22px;
}
.toggle_range.volume:checked {
    background-position: -200px -50px;
}
.section_toggle .area_toggle .toggle_range + label {
    padding: 6px 0 0 6px;
}
@media all and (max-width: 320px) {
  .section_toggle .area_toggle .toggle_range + label {
    padding: 6px 0 0 3px;
  }
}
.section_toggle .area_toggle .toggle_range:checked + label {
    color: #2082ca;
}
.section_toggle .area_toggle .toggle_range:active + label {
    opacity:0.6;
}
.section_toggle .area_toggle .toggle_range:disabled + label {
    opacity:0.3;
}
.section_induction .area_induction .range_size p {
    width: 40px;
    height: 20px;
    line-height: 19px;
  margin-top: -2px;
}

.section_induction .area_induction .range_size button {
  width: 40px;
  height: 20px;
  line-height: 19px;
  /* 버튼 클릭 노란 영역 제거 */
  border: 0;
  outline: 0;

}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_induction .area_induction .range_size button {
    margin-top: -5px;
  }
}
.section_induction .area_induction .range_size .btn_on {
    background: #e86740;
    border: 1px solid #e86740;
}
.section_induction .area_induction .range_size .btn_off {
    background: #484848;
    border: 1px solid #484848;
    color: rgba(255,255,255,1);
}
.section_induction .area_induction .range_size .tooltip_range {
    position: absolute;
    top: -14px;
    left: 50%;
    margin-left: -48px;
    background: #0666ad;
    border: 1px solid #0666ad;
    height: 24px;
    line-height: 22px;
    padding: 0 8px;
    width: 95px;
    -webkit-box-shadow: 0 3px 12px 0 rgba(50, 50, 50, 0.43);
    box-shadow: 0 3px 12px 0 rgba(50, 50, 50, 0.43);
}
.tooltip_range:after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-bottom: 1px solid #0666ad;
    border-left: 1px solid #0666ad;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    bottom: -6px;
    left: 50%;
    margin-left: -5px;
    background-color: #0666ad;
}
/* ui.main.css : 타이머 설정(레인지 공통) */
.section_timer {
    height: 20vh;
    background: #f4f4f4;
    padding-top: 20px;
    position: relative;
    border-bottom: 1px solid #c8c8c8;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_timer {
        padding-top: 16px;
    }
}
.section_timer .timer_title {
    color: #666666;
    font-size: 1.5rem;
    padding-left: 22px;
    font-weight:bold;
    position: relative;
    margin-left: 19px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_timer .timer_title {
    margin-left: 10px;
  }
}
.section_timer .timer_title .sprite_timer {
    position: absolute;
    left: 0;
    top: -1px;
}
.section_timer .area_timer {
    position: absolute;
    top: 46px;
    width: 100%;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_timer .area_timer {
        top: 40px;
    }
}
@media all and (min-height: 700px) {
  .section_timer .area_timer {
    top: 56px;
  }
}
  .section_timer .area_timer .box_timer {
    display: inline-block;
    float: left;
    width: 33.3%;
    position: relative;
    height: 65px;
    background: url(/images/page/bg_line01.png) right 50% no-repeat;
    background-size: 3px;
    padding-right: 3px;
    text-align: center;
    padding-top: 4px;
}
.section_timer .area_timer .box_timer:last-child {
    background: none;
}
.section_timer .area_timer span {
    font-size: 1.3rem;
    color: #2082ca;
}
@media all and (min-height: 700px) {
  .section_timer .area_timer span {
    font-size: 1.6rem;
  }
}
.section_timer .area_timer .timer_off span {
    color: #a6a6a6;
}

.section_timer .area_timer button {
    display: inline-block;
    width: 30px;
    height: 20px;
    border: 1px solid #2082ca;
    color: #2082ca;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    padding: 2px 3px;
    margin-left: 5px;
    font-size: 10px;
}
@media all and (max-width: 320px) {
    .section_timer .area_timer button {
        margin-left: 2px;
    }
}
@media all and (min-height: 700px) {
  .section_timer .area_timer button {
  display: inline-block;
  width: 37px;
  height: 22px;
  border: 1px solid #2082ca;
  color: #2082ca;
  border-radius: 15px;
  padding: 0 3px;
  margin-left: 5px;
  font-size: 12px;
  }
}
.section_timer .area_timer .timer_off button.setting {
    border: 1px solid #a6a6a6;
    color: #a6a6a6;
}
.section_timer .area_timer .time_box {
    width: 97px;
    height: 29px;
  line-height: 26px;
    background: #2082ca;
    color: #ffffff;
    font-size: 1.7rem;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    /*padding: 0 26px;*/
    font-weight: bold;
    margin: 5px auto 0;
    border:0;
}
@media all and (max-width: 320px) {
    .section_timer .area_timer .time_box {
        width: 91px;
        height: 27px;
        padding: 0 24px;
    }
}
@media all and (min-height: 700px) and (min-width: 400px) {
  .section_timer .area_timer .time_box {
    font-size: 1.9rem;
    width: 112px;
    height: 32px;
    line-height: 30px;
    margin: 6px auto 0;
  }
}
.section_timer .area_timer .timer_off .time_box {
    background: #a6a6a6;
}
/* ui.main.css : 잠금/화구/음성(냉온정수기 공통 css) */
.section_function {
    height: 9vh;
    border-top: #fff 1px solid;
    background: #f4f4f4;
    border-bottom: #ddddde 1px solid;
}
@media all and (max-width: 320px) {
    .section_function .area_function > span {
        padding-left: 15px;
    }
}
.toggle_col_3 .area_toggle {
    width: 33.3%;
}
.section_toggle .area_toggle {
    text-align: center;
    float: left;
    background: url(/images/main/bg_line.png) right 50% no-repeat;
    background-size: 3px;
    padding-top: 2.3vh;
  height: 100%;
}
@media all and (max-height: 600px) {
    .section_toggle .area_toggle > span {
        padding-left: 13px;
    }
  .section_toggle .area_toggle {
    padding-top: 2vh;
  }
}
@media all and (min-height: 700px) {
  .section_toggle .area_toggle {
    padding-top: 2.6vh;
  }
}
.section_toggle .area_toggle label {
    color: #b9b8ba;
    font-size: 1.5rem;
    display: inline-block;
    font-weight: bold;
    padding: 6px 0 0 12px;
    vertical-align: top;
}
/*.toggle_gas_btn:disabled {
    opacity: 0.3;
}*/
.section_main .sprite_use_time {
    position: absolute;
    top: 2px;
    left: 0;
}
</style>
