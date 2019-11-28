<template>
  <div class="wrap_contents_area" v-show="range.isConn">
    <!-- section_main -->
    <section class="section_main section_stove" :class="{section_stove_2: deviceInfo.modelNm === 'GRACM230T'}" v-if="isOnline">
      <div class="bg" :class="{bg_stove: deviceInfo.modelNm === 'GRACM230T' || deviceInfo.modelNm === 'GRACM330T', bg_gas_induction: deviceInfo.modelNm === 'GRA_BI_SERIES'}">
        <div class="area_title">
          <div class="box_title">
              <h1>
                <span>{{ deviceInfo.nicknm }}</span>
                  <button @click="modNickNameModal = true" class="align_center sprite sprite_purify sprite_edit" v-if="deviceInfo.masterYn === 'Y'"></button>
              </h1>
          </div>
        </div>
        <div class="area_desc">
          <p :style="styleObj"><span :class="classObj"></span>{{ rangeStatusMsg }}</p>
        </div>
      </div>
      <div class="area_gas_status">
        <div>
            <div class="stove_btn">
                <input type="checkbox" class="toggle_gas_lock stove_off" :checked="range.bunerDetail[1].status === 3" disabled>
                <p>대버너(좌)<span>{{ leftStove }}</span></p>
            </div>
        </div>
        <div v-if="deviceInfo.modelNm === 'GRACM330T' || deviceInfo.modelNm === 'GRA_BI_SERIES'">
            <div class="stove_btn">
                <input type="checkbox" class="toggle_gas_lock stove_off" :checked="range.bunerDetail[2].status === 3" disabled>
                <p class="sm_stove">소버너<span>{{ smallStove }}</span></p>
            </div>
        </div>
        <div>
            <div class="stove_btn">
                <input type="checkbox" class="toggle_gas_lock stove_off" :checked="range.bunerDetail[0].status === 3" disabled>
                <p>대버너(우)<span>{{ rightStove }}</span></p>
            </div>
        </div>
      </div>

      <div class="tooltip_stove" v-if="range.bunerDetail[0].switchType === 1 && (range.switchMode > 1 && range.switchMode <= 8) && range.bunerDetail[0].status === 3">
        {{ switchModeMsg }}
      </div>
    </section>

    <!-- //section_main -->

    <!-- section_toggle -->
    <section class="section_function section_toggle toggle_col_2" v-if="isOnline">
      <div class="area_toggle" @click="showAlertModal">
        <input type="checkbox" name="kidLock" id="kidLock" class="toggle_gas_btn gas_lock" :checked="range.kidLock === 2">
        <label for="kidLock">LOCK</label>
      </div>
      <div class="area_toggle" @click="showAlertModal">
        <input type="checkbox" name="bunerAllOff" id="bunerAllOff" class="toggle_gas_btn gas_off" :checked="bunnerOnCount" :disabled="bunnerOnCount === false">
        <label for="bunerAllOff">버너 OFF</label>
      </div>
    </section>
    <!-- //section_toggle -->

    <!-- section_timer -->
    <section class="section_timer" :class="{section_timer_2: deviceInfo.modelNm === 'GRACM230T'}" v-if="isOnline">
      <p class="timer_title"><span class="sprite sprite_gas_stove sprite_timer"></span>타이머</p>
      <div class="area_timer">
          <!-- 타이머 OFF시 box_timer에 class 추가 'timer_off' -->
          <div div class="box_timer" :class="{timer_off: range.bunerDetail[1].offReserved === 1}">
              <span>대버너(좌)</span>
              <button class="setting" @click="setCurBunner('2', 'A')" :disabled="range.bunerDetail[1].status < 3 || range.bunerDetail[1].offReserved === 1"  value="2">설정</button>
              <button @click="setCurBunner('2', 'B')" :disabled="range.bunerDetail[1].status !== 3" class="time_box">{{ range.bunerDetail[1].offRemainTime | timeFormat}}</button>
          </div>
          <div v-if="deviceInfo.modelNm === 'GRACM330T' || deviceInfo.modelNm === 'GRA_BI_SERIES'" class="box_timer" :class="{timer_off: range.bunerDetail[2].offReserved === 1}">
              <span>소버너</span>
              <button class="setting" @click="setCurBunner('3', 'A')" :disabled="range.bunerDetail[2].status < 3 || range.bunerDetail[2].offReserved === 1" value="3">설정</button>
              <button @click="setCurBunner('3', 'B')" :disabled="range.bunerDetail[2].status !== 3" class="time_box">{{ range.bunerDetail[2].offRemainTime | timeFormat}}</button>
          </div>
          <div class="box_timer" :class="{timer_off: range.bunerDetail[0].offReserved === 1}">
              <span>대버너(우)</span>
              <button class="setting" :disabled="range.bunerDetail[0].status < 3 || range.bunerDetail[0].offReserved === 1" @click="setCurBunner('1', 'A')" value="1">설정</button>
              <button @click="setCurBunner('1', 'B')" :disabled="range.bunerDetail[0].status !== 3" class="time_box">{{ range.bunerDetail[0].offRemainTime | timeFormat}}</button>
          </div>
      </div>
    </section>
    <!-- //section_timer -->

    <transition name="fade">
      <popup-modal v-if="isOnline && cancleTimeModal" @ok="cancleOffRemainTime" :sendNm="curBunerIndex" @close="cancleTimeModal = false">
        <h3 slot="body">타이머를 OFF 하시겠습니까?</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <popup-modal v-if="isOnline && (popupModal === 'kidLock' || popupModal === 'bunerAllOff')" :sendNm="popupModal" @ok="stompClientSend(popupModal, '1')" @close="popupModal = false">
        <h3 slot="body">{{ alertMsg }}</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="isOnline && controlErrModal" @ok="controlErrModal = false">
        <h3 slot="body">가전 제어에 대한 응답이 없습니다.</h3>
      </alert-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="isOnline && handleStatusAlert" @ok="handleStatusAlert = false">
        <h3 slot="body">손잡이가 돌아가 있으면 알람이 울리니 <br>손잡이를 원상태로 돌려주시기 바랍니다.</h3>
      </alert-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="isOnline && setTimeErr" @ok="setTimeErr = false">
        <h3 slot="body">{{ switchModeMsg }}이 설정되어 있습니다. <br>해제 후 다시 선택해 주세요.</h3>
      </alert-modal>
    </transition>
    <transition name="fade">
      <setting-time-modal v-if="isOnline && setTimeModal" v-on:offRemainTimeSend="offRemainTimeSend" :deviceInfo="deviceInfo" :curBunerIndex="curBunerIndex" :range="range" @close="setTimeModal = false"/>
    </transition>
    <transition name="fade">
      <rename-modal v-if="isOnline && modNickNameModal" @close="modNickNameModal = false" :nickName="deviceInfo.nicknm" :deviceId="deviceId" v-on:modNickName="modNickName"/>
    </transition>

    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import PopupModal from '@/components/common/modal/Popup'
import SettingTimeModal from '@/components/range/common/SettingTime'
import RenameModal from '@/components/common/modal/ReName'
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'main',
  components: { PopupModal, SettingTimeModal, RenameModal, AlertModal, ErrorView },
  props: ['userId', 'deviceId', 'deviceInfo', 'info', 'range', 'route'],
  data () {
    return {
      hour: '',
      min: '',
      curBunerIndex: '',
      setTimeModal: false,
      cancleTimeModal: false,
      setTimeErr: false,
      handleStatusAlert: false,
      popupModal: false,
      controlErrModal: false,
      modNickNameModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.range.isConn) {
      if (!this.range.online) this.reSend()
    } else {
      setTimeout(() => {
        if (!this.range.isConn) {
          this.range.isConn = true
          this.range.online = false
        }
      }, 1000 * 3)
    }
  },
  filters: {
    timeFormat: function (time) {
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
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.range.isConn) {
        if (curr - this.range.timestamp > 35000) {
          this.range.online = false
        } else {
          online = this.range.online
        }
        if (!this.range.waitCmd) this.loading(false)
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
      for (var index in this.range.bunerDetail) {
        if (this.range.bunerDetail[index].status === 3) count++
      }
      if (count > 0) return true
      else return false
    },
    rangeStatusMsg: function () {
      var msg
      var hour = Math.floor(parseInt(this.range.continueUsedMin) / 60)
      var min = parseInt(this.range.continueUsedMin) % 60
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
    switchModeMsg: function () {
      switch (this.range.switchMode) {
        case 2:
          return '끓이고 알림'
        case 3:
          return '끓이고 꺼짐'
        case 4:
          return '5분 후 꺼짐'
        case 5:
          return '110°C'
        case 6:
          return '160°C'
        case 7:
          return '180°C'
        case 8:
          return '200°C'
      }
    },
    leftStove: function () {
      if (this.range.bunerDetail[1].status === 3) return 'ON'
      else return 'OFF'
    },
    smallStove: function () {
      if (this.range.bunerDetail[2].status === 3) return 'ON'
      else return 'OFF'
    },
    rightStove: function () {
      if (this.range.bunerDetail[0].status === 3) return 'ON'
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
    showAlertModal: function () {
      var name = event.target.name
      if (name === 'kidLock') {
        if (this.range[name] === 2) this.popupModal = event.target.name
        else this.stompClientSend(name, '2')
      } else {
        if (this.bunnerOnCount > 0) this.popupModal = event.target.name
      }
    },
    setCurBunner: function (val, type) {
      var bunner = this.range.bunerDetail[parseInt(val - 1)]
      this.curBunerIndex = val
      if (type === 'A') {
        this.setTimeModal = true
      } else if (type === 'B') {
        if (val === '1' && (this.range.switchMode >= 2 && this.range.switchMode <= 4)) {
          this.setTimeErr = true
        } else if (bunner.status === 3 && bunner.offRemainTime === '000000') {
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
    stompClientSend: function (name, val) {
      event.preventDefault()
      var self = this
      var cmdObj = {}
      cmdObj[name] = val
      this.popupModal = false
      this.loading(true)
      this.range.waitCmd = true
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
            check = self.range.bunerDetail[parseInt(val.substr(0, 1) - 1)].offRemainTime === '000000'
            break
          case 'bunerOffTimerOn':
            var pad = function (x) { return (x < 10) ? '0' + x : x }
            var time = String(pad(parseInt(val.substr(2) / 60 % 60))) + String(pad(parseInt(val.substr(2) % 60))) + String(pad(parseInt(val.substr(2) / (60 * 60))))
            check = self.range.bunerDetail[parseInt(val.substr(0, 1) - 1)].offRemainTime === time
            break
          case 'bunerAllOff':
            self.bunnerOnCount === false ? check = true : check = false
            break
          default:
            check = String(self.range[name]) === cmdObj[name]
            break
        }
        if (cnt > 0) {
          if (check) {
            self.range.waitCmd = false
            self.loading(false)
            if ((name === 'kidLock' && self.range[name] === 2) || name === 'bunerAllOff') {
              if (self.range.menuCode !== 0 && self.range.handleStatus === 2) self.handleStatusAlert = true
            }
            return
          } else {
            setTimeout(() => {
              waitResponse(name, --cnt)
            }, 200)
          }
        } else {
          self.range.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
      // this.intervalid1 = setInterval(() => {
      //   if (name === 'bunerOffTimerOff') {
      //     if (this.range.bunerDetail[parseInt(val.substr(0, 1) - 1)].offRemainTime === '000000') {
      //       this.loadingModal = false
      //       if (this.range.menuCode !== 0 && this.range.handleStatus === 2) this.handleStatusAlert = true
      //       clearInterval(this.intervalid1)
      //     } else {
      //       waitCnt++
      //       if (waitCnt > 20) {
      //         this.controlErrModal = true
      //         this.loadingModal = false
      //         clearInterval(this.intervalid1)
      //       }
      //     }
      //   } else if (name === 'bunerOffTimerOn') {
      //     var pad = function (x) { return (x < 10) ? '0' + x : x }
      //     var time = pad(parseInt(val.substr(2) / 60 % 60)) + pad(parseInt(val.substr(2) % 60)) + pad(parseInt(val.substr(2) / (60 * 60)))
      //     if (this.range.bunerDetail[parseInt(val.substr(0, 1) - 1)].offRemainTime === time) {
      //       this.loadingModal = false
      //       clearInterval(this.intervalid1)
      //     } else {
      //       waitCnt++
      //       if (waitCnt > 20) {
      //         this.controlErrModal = true
      //         this.loadingModal = false
      //         clearInterval(this.intervalid1)
      //       }
      //     }
      //   } else if (name === 'bunerAllOff') {
      //     if (this.bunnerOnCount) {
      //       waitCnt++
      //       if (waitCnt > 20) {
      //         this.controlErrModal = true
      //         this.loadingModal = false
      //         clearInterval(this.intervalid1)
      //       }
      //     } else {
      //       if (this.range.menuCode !== 0 && this.range.handleStatus === 2) this.handleStatusAlert = true
      //       this.loadingModal = false
      //       clearInterval(this.intervalid1)
      //     }
      //   } else {
      //     var oldData = String(this.range[name])
      //     var newData = cmdObj[name]
      //     if (oldData === newData) {
      //       if (this.range.menuCode !== 0 && this.range.handleStatus === 2) this.handleStatusAlert = true
      //       this.loadingModal = false
      //       clearInterval(this.intervalid1)
      //     } else {
      //       waitCnt++
      //       if (waitCnt > 20) {
      //         this.controlErrModal = true
      //         this.loadingModal = false
      //         clearInterval(this.intervalid1)
      //       }
      //     }
      //   }
      // }, 500)
    }
  }
}
</script>

<style>
/* ui.main.css : 가스레인지 메인 */
.section_main.section_stove .bg_stove {
    background-image: url(/images/main/bg_main_stove.png);
  background-position: center top;
    background-repeat: no-repeat;
}
.section_main.section_stove {
    height: 56.5vh;
    position: relative;
    background: #ebe9ec;
}
.section_main.section_stove .bg_gas_induction {
    background-image: url(/images/main/bg_main_gas_induc.png);
    background-position: center top;
    background-repeat: no-repeat;
}
@media all and (max-width: 320px) ,(max-height: 600px) {
  .section_main.section_stove .bg_gas_induction,.section_main.section_stove .bg_stove {
    -webkit-background-size: 320px;
    background-size: 320px;
  }
}
@media all and (min-height: 700px) {
  .section_main.section_stove .bg_gas_induction,.section_main.section_stove .bg_stove {
    -webkit-background-size: 410px;
    background-size: 410px;
  }
}
.section_main .area_title p,
.section_main .area_desc p {
    font-size: 1.1rem;
    color: #666666;
    position: relative;
    padding-left: 15px;
}
.section_main.section_purify .area_title p,
.section_main.section_purify .area_desc p {
    padding-left: 0;
}

.section_main .sprite_use_time {
    position: absolute;
    top: 2px;
    left: 0;
}
.section_main .sprite_cleaning {
    position: absolute;
    top: 1px;
    left: -1px;
}

.section_stove .area_gas_status {
    position: absolute;
    top: 98px;
    width: 100%;
    height: 100px;
    padding: 0 24px
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_stove .area_gas_status {
        top: 83px;
    }
}
.section_stove .area_gas_status:after {
    content: '';
    display: table;
    clear:both;
}
.section_stove .area_gas_status > div {
    width: 33.3%;
    height: 100%;
    position: relative;
    float: left;
}
.section_stove .area_gas_status > div p {
    color: #666666;
    font-size: 1.2rem;
    position: absolute;
    top: -26px;
    left: -8px;
}
.section_stove .area_gas_status > div:nth-child(2) p {
    left: -1px;
}
.section_stove .area_gas_status > div:nth-child(2) p.sm_stove {
    left: 3px;
}

.section_stove .area_gas_status > div  p span {
    color: #666666;
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    top: 0;
   /* right: -32px;*/
  left: 59px;
}
.section_stove .area_gas_status > div p.sm_stove span {
  left: 39px;
}
.section_stove .area_gas_status .stove_btn {
    position: absolute;
    top: 24px;
    left: 50%;
    margin-left: -35px;
    width: 71px;
    height: 71px;
}
.toggle_gas_btn:disabled {
    opacity: 0.3;
}
.area_toggle input.toggle_gas_btn:disabled + label {
    opacity: 0.3;
}
.toggle_gas_lock {
  -webkit-appearance: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  outline: none;
  border-radius: 0;
  width: 71px;
  height: 71px;
  background: url('/images/common/sprite_gas_stove.png') 0 0 no-repeat;
  background-size: 250px;
  display: block;
  margin: 0 auto;
  opacity: 1;
}
.toggle_gas_btn:disabled {
    opacity: 0.3;
}
.toggle_gas_btn:active {
    opacity: 0.6;
}
.stove_off {
    background-position: 0 -75px;
    width: 70px;
    height: 71px;
}
.stove_off:checked {
    background-position: -75px -75px;
}
.section_stove .area_gas_status .stove_off:checked + p span {
    color: #e86740;
}
/* 스위치 모드 텍스트 정렬 css 수정*/
.section_stove .tooltip_stove {
    position: absolute;
    top: 64px;
  right: 35px;
    border: 1px solid #e86740;
    border-radius: 20px;
    color: #e86740;
    width: 77px;
    height: 24px;
    font-size: 1.1rem;
    padding: 3px 11px;
    letter-spacing: -1px;
    text-align: center;
}
@media all and (min-width: 375px) {
  .section_stove .tooltip_stove {
    right: 41px;
  }
}
@media all and (max-width: 360px) {
  .section_stove .tooltip_stove {
    right: 35px;
  }
}

@media all and (max-height: 600px) {
  .section_stove .tooltip_stove {
    top: 49px;
  }
}
  @media all and (max-width: 320px) {
    .section_stove .tooltip_stove {
        top: 49px;
      right: 30px;
    }
}
@media all and (min-height: 700px) {
  .section_stove .tooltip_stove {
    right: 44px;
  }
}
.section_stove .tooltip_stove:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -6px;
    left: 32px;
    width: 8px;
    height: 6px;
    background: url('/images/common/sprite_gas_stove.png') -25px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}

.section_function.toggle_col_2 {
    min-height: 9vh;
    border-top:0;
    background: #f0eef1;
}
.section_toggle .area_toggle {
    text-align: center;
    height: 100%;
    float: left;
    background: url("/images/main/bg_line.png") right 50% no-repeat;
    background-size: 3px;
    padding-top: 2.3vh;
}
.section_toggle.toggle_col_3 .area_toggle {

}
.section_toggle .area_toggle label {
    color: #b9b8ba;
    font-size: 1.5rem;
    display: inline-block;
    font-weight:bold;
    padding: 6px 0 0 12px;
    vertical-align: top;
}

.toggle_gas_btn {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    width: 40px;
    height: 22px;
    background: url(/images/common/sprite_gas_stove.png) 0 0 no-repeat;
    background-size: 250px;
    display: inline-block;
    /*margin: 0 auto;*/
    vertical-align: middle;
}
.toggle_gas_btn.gas_lock {
    background-position: -100px -25px;
    width: 31px;
    height: 30px;
}
.toggle_gas_btn.gas_lock:checked {
    background-position: -150px -25px;
}
.toggle_gas_btn.gas_off {
    background-position: -75px 0;
    width: 32px;
    height: 24px;
}
.toggle_gas_btn.gas_off:checked {
    background-position: -125px 0;
}
.area_toggle input.toggle_gas_btn:checked + label {
    color: #2082ca;
}
.area_toggle input.toggle_gas_btn:active + label {
    opacity: 0.6;
}
.area_toggle input.toggle_gas_btn:disabled + label {
    opacity: 0.3;
}
.section_timer {
    height: 20vh;
    background: #f4f4f4;
    padding-top: 20px;
    position: relative;
    border-bottom: 1px solid #c8c8c8;
}
@media all and (max-width: 320px) {
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
@media all and (max-width: 320px) {
    .section_timer .area_timer {
        top: 42px;
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
.section_timer .area_timer .timer_off button.setting {
    border: 1px solid #a6a6a6;
    color: #a6a6a6;
}
.section_timer .area_timer .time_box {
    width: 97px;
    height: 29px;
    background: #2082ca;
    color: #ffffff;
    font-size: 1.7rem;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    padding: 0 26px;
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
.section_timer .area_timer .timer_off .time_box {
    background: #a6a6a6;
}

/* ui.main.css : 가스레인지 2구 메인*/
.section_stove.section_stove_2 .bg_stove {
    background-image: url(/images/main/bg_main_stove_2.png);
}
.section_stove.section_stove_2 .area_gas_status > div {
    width: 50%;
}
.section_stove.section_stove_2 .area_gas_status {
    padding: 0 58px;
}
.section_timer.section_timer_2 .area_timer .box_timer {
    width: 50%;
}
/* ui.main.css : 부분 공통 */
.section_function {
    height: 9vh;
    border-top: #fff 1px solid;
    background: #f4f4f4;
    border-bottom: #ddddde 1px solid;
}
.toggle_col_2 .area_toggle {
    width: 50%;
}
</style>
