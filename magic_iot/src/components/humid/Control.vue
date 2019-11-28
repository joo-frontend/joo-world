<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area" :class="{wrap_percent: modelNm === 'LG-F320S', wrap_percent2: modelNm === 'LG-F470L'}" v-show="humid.isConn">
    <!-- section_sub_activate -->
    <section class="section_sub_activate" v-if="isOnline">
      <!-- 전원 on 시 'active' 클래스 추가 -->
      <div class="area_sub_activate area_sub_activate_humidify" :class="{active: powerOnOff}">
        <ul class="box_humidity_row01">
          <li class="col_02">
            <div>
              <span class="menu_title">전원</span>
              <input type="checkbox" class="power" :checked="powerOnOff" name="power" @click="sendDataSetting">
            </div>
          </li>
          <li class="col_02 none_bg_right">
            <div>
              <span class="menu_title">꺼짐예약</span>
              <div class="box_value"><a @click="showSetTimeModal"><p>{{ humid.remainOffTime | remainTime }}</p></a></div>
              <button class="setting_btn" id="offSetting" :disabled="powerOnOff === false" @click="showSetTimeModal">설정</button>
            </div>
          </li>
        </ul>
        <ul class="box_humidity_row02">
            <li class="col_03 none_bg_right">
              <span class="menu_title">가습량</span>
              <div class="box_setting_humidify">
                <input type="radio" name="humiAmt" id="weak" class="toggle_water_humidify sprite_water_mild" :checked="humid.humiAmt === 1 && powerOnOff" :disabled="powerOnOff === false" value="1" @click="sendDataSetting">
                <label for="weak"><span>약</span>
                  <div class="pagination">
                    <span></span>
                  </div>
                </label>
              </div>
            </li>
            <li class="col_03 none_bg_right">
              <div class="box_setting_humidify">
                <input type="radio" name="humiAmt" id="moderate" class="toggle_water_humidify sprite_water_moderate" :checked="humid.humiAmt === 2 && powerOnOff" :disabled="powerOnOff === false" value="2" @click="sendDataSetting">
                <label for="moderate"><span>중</span>
                  <div class="pagination">
                      <span class=""></span>
                  </div>
                </label>
              </div>
            </li>
            <li class="col_03 none_bg_right">
                <div class="box_setting_humidify">
                    <input type="radio" name="humiAmt" id="strong" class="toggle_water_humidify sprite_water_intense" :checked="humid.humiAmt === 3 && powerOnOff" :disabled="powerOnOff === false" value="3" @click="sendDataSetting">
                    <label for="strong"><span>강</span>
                    <div class="pagination">
                        <span class=""></span>
                    </div>
                    </label>
                </div>
            </li>
        </ul>
        <ul class="box_humidity_row03">
          <li class="col_03">
              <div>
                  <span class="menu_title">디스플레이밝기</span>
                  <div class="box_setting_stage">
                      <button class="sprite sprite_humidify" id="displayBright" :class="disBrightObj" name="displayBright" :value="humid.displayBright" :disabled="powerOnOff === false" @click="sendDataSetting"></button>
                      <label for="displayBright">
                        <span :class="{on: powerOnOff}">{{ humid.displayBright | statusTxt }}</span>
                      </label>
                  </div>
                <div class="pagination">
                  <span :class="{focus: powerOnOff && humid.displayBright === 10}"></span>
                  <span :class="{focus: powerOnOff && humid.displayBright === 50}"></span>
                  <span :class="{focus: powerOnOff && humid.displayBright === 100}"></span>
                </div>
              </div>
          </li>
          <li class="col_03">
            <div>
              <span class="menu_title">무드램프밝기</span>
              <div class="box_setting_stage">
                <button class="sprite sprite_humidify" id="moodlampBright" :class="moodBrightObj" name="moodlampBright" :value="humid.moodlampBright" :disabled="powerOnOff === false" @click="sendDataSetting"></button>
                <label for="moodlampBright">
                <span :class="{on: powerOnOff && humid.moodlampBright !== 0}" v-text="moodlampBrightTxt"></span>
                </label>
              </div>
              <div class="pagination mode_pagination">
                <span :class="{focus: powerOnOff && humid.moodlampBright === 10}"></span>
                <span :class="{focus: powerOnOff && humid.moodlampBright === 50}"></span>
                <span :class="{focus: powerOnOff && humid.moodlampBright === 100}"></span>
              </div>
            </div>
          </li>
          <li class="col_03 none_bg_right">
            <div>
              <span class="menu_title">무드램프색깔</span>
              <div class="mode_color" :class="{disabled: powerOnOff === false}">
                <button class="color_radio" :class="colorObj" :disabled="powerOnOff === false" @click="showSetColorModal = true"></button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="area_time_sync" :class="{active: powerOnOff}">
        <p class="title">현재시간 동기화</p>
        <p class="desc">가전시간을 현재시간과 동기화합니다.</p>
        <button class="sprite sprite_humidify sprite_sync" :disabled="powerOnOff === false" @click="stompClientSend('timeSync', 'Y')"></button>
      </div>
    </section>

    <transition name="fade">
      <set-color-modal v-if="showSetColorModal" @close="showSetColorModal = false" v-on:stompClientSend="stompClientSend" :color="humid.moodlampColor"></set-color-modal>
    </transition>
    <transition name="fade">
      <set-time-modal v-if="setTimeModal" @close="setTimeModal = false" v-on:stompClientSend="stompClientSend" :time="humid.remainOffTime"></set-time-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-if="controlErrModal" @ok="controlErrModal = false">
        <h3 slot="body">가전 제어에 대한 응답이 없습니다.</h3>
      </alert-modal>
    </transition>
    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
    <!-- //section_sub_activate -->
  </div>
  <!-- //wrap_contents_area-->
</template>

<script>
import SetColorModal from '@/components/humid/modal/SetColor'
import SetTimeModal from '@/components/humid/modal/SettingTime'
import PopupModal from '@/components/common/modal/Popup'
import AlertModal from '@/components/common/modal/Alert'
import ErrorView from '@/components/common/view/Error'

export default {
  name: 'control',
  props: ['userId', 'deviceId', 'deviceInfo', 'humid', 'route'],
  components: { AlertModal, SetColorModal, SetTimeModal, PopupModal, ErrorView },
  data () {
    return {
      selected: '',
      selectedHour: '',
      selectedMin: '',
      picked: '',
      modelNm: this.modelNm,
      controlErrModal: false,
      showSetColorModal: false,
      setTimeModal: false
    }
  },
  filters: {
    remainTime: function (time) {
      var hour = time.substr(0, 2)
      var min = time.substr(2, 2)
      if (time === '0000') return 'OFF'
      else return parseInt(hour) + ':' + min
    },
    statusTxt: function (st) {
      switch (st) {
        case 0:
          return '꺼짐'
        case 10:
          return '약'
        case 50:
          return '중'
        case 100:
          return '강'
      }
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
    powerOnOff: function () {
      // off:1, on:2
      if (this.humid.power === 1) return false
      else return true
    },
    colorObj: function () {
      switch (this.humid.moodlampColor) {
        case 'c8ff64':
          return 'color_03'
        case '11d002':
          return 'color_04'
        case 'd92179':
          return 'color_05'
        case '5c89aa':
          return 'color_01'
        case 'fce83e':
          return 'color_02'
      }
    },
    disBrightObj: function () {
      var classObj = {
        sprite_dp_light: false,
        sprite_off_dp_light: false,
        weak: false,
        middle: false,
        strong: false
      }
      if (this.powerOnOff) {
        classObj.sprite_dp_light = true
      } else {
        classObj.sprite_off_dp_light = true
      }
      if (this.humid.displayBright === 10) {
        classObj.weak = true
      } else if (this.humid.displayBright === 50) {
        classObj.middle = true
      } else {
        classObj.strong = true
      }
      return classObj
    },
    moodBrightObj: function () {
      var classObj = {
        sprite_mode_light: false,
        sprite_off_mode_light: false,
        stop: false,
        weak: false,
        middle: false,
        strong: false
      }
      if (this.powerOnOff) {
        classObj.sprite_mode_light = true
      } else if (this.powerOnOff === false && this.humid.moodlampBright === 0) {
        classObj.sprite_mode_light = true
        classObj.stop = true
      } else {
        classObj.sprite_off_mode_light = true
      }
      if (this.powerOnOff && this.humid.moodlampBright === 0) {
        classObj.stop = true
      } else if (this.humid.moodlampBright === 10) {
        classObj.weak = true
      } else if (this.humid.moodlampBright === 50) {
        classObj.middle = true
      } else {
        classObj.strong = true
      }
      return classObj
    },
    moodlampBrightTxt: function () {
      if (this.humid.moodlampBright === 0) return '꺼짐'
      else if (this.humid.moodlampBright === 10) return '약'
      else if (this.humid.moodlampBright === 50) return '중'
      else return '강'
    },
    displayBrightTxt: function () {
      if (this.humid.displayBright === 10) return '약'
      else if (this.humid.displayBright === 50) return '중'
      else return '강'
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    showSetTimeModal: function () {
      if (this.powerOnOff) this.setTimeModal = true
      else this.setTimeModal = false
    },
    sendDataSetting: function () {
      var type = event.target.name
      var val
      switch (type) {
        case 'humiAmt':
          val = event.target.value
          break
        case 'displayBright':
          if (this.humid.displayBright === 10) val = 50
          else if (this.humid.displayBright === 50) val = 100
          else val = 10
          break
        case 'moodlampBright':
          if (this.humid.moodlampBright === 0) val = 10
          else if (this.humid.moodlampBright === 10) val = 50
          else if (this.humid.moodlampBright === 50) val = 100
          else val = 0
          break
        default:
          if (this.humid.power === 1) val = 2
          else if (this.humid.power === 2) val = 1
      }
      if (type === 'humiAmt' && (String(this.humid[type]) === event.target.value)) {
      } else {
        this.stompClientSend(type, val)
      }
    },
    stompClientSend: function (name, val) {
      event.preventDefault()
      var self = this
      var cmdObj = {}
      cmdObj[name] = String(val)
      if (this.showSetColorModal) this.showSetColorModal = false
      self.loading(true)
      this.humid.waitCmd = true
      if (typeof this.callbackHdeviceToken === 'undefined') {
        this.callbackHdeviceToken = 'token'
      }
      this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
      if (name === 'resvOff') {
        this.setTimeModal = false
        name = 'remainOffTime'
      }
      if (name === 'timeSync') {
        var time = new Date()
        name = 'timeInfo'
        val = String(time.getHours()) + time.getMinutes()
      }
      setTimeout(() => {
        waitResponse(String(val), 20)
      }, 200)
      function waitResponse (cmd, cnt) {
        if (cnt > 0) {
          if (String(self.humid[name]) === cmd) {
            self.humid.waitCmd = false
            self.loading(false)
            return
          } else {
            setTimeout(() => {
              waitResponse(cmd, --cnt)
            }, 200)
          }
        } else {
          self.humid.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
    }
  }
}
</script>
<style>
p .offColor {
  color: #c5c5c5
}
/* ui.page.css : 제품작동 가습기, 청정기 레이아웃 */
.section_sub_activate {
  height: 100%;
}
.section_sub_activate ul li:first-child {
    padding-left: 2px;
}

.section_sub_activate .area_sub_activate {
    background: #f3f3f3;
    height: 85.5vh;
    padding: 0 7px;
}
.wrap_percent .section_sub_activate {
  height: 485px;
}
.wrap_percent2 .section_sub_activate {
  height: 487px;
}

.section_sub_activate .area_sub_activate.area_sub_activate_humidify {
    height: 75vh;

}
.wrap_percent .section_sub_activate .area_sub_activate.area_sub_activate_humidify,
.wrap_percent2 .section_sub_activate .area_sub_activate.area_sub_activate_humidify {
  height: 425px;
}

.section_sub_activate ul.box_humidity_row01 {
    height: 40%;
    background: url('/images/page/bg_a6a6a6.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    padding: 7px 0;
}
.wrap_percent .section_sub_activate ul.box_humidity_row01,
.wrap_percent2 .section_sub_activate ul.box_humidity_row01 {
  height: 170px;
}
.section_sub_activate ul.box_air_purify_row {
    height: 50%;
    background: url('/images/page/bg_a6a6a6.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    padding: 7px 0;
}

.section_sub_activate ul.box_humidity_row02 {
    height: 30%;
    background: url('/images/page/bg_a6a6a6.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    padding: 7px 0;
}
.wrap_percent .section_sub_activate ul.box_humidity_row02,
.wrap_percent2 .section_sub_activate ul.box_humidity_row02 {
  height: 127.5px;
}
.section_sub_activate ul.box_humidity_row03 {
    height: 30%;
    padding: 7px 0;
}
.wrap_percent .section_sub_activate ul.box_humidity_row03,
.wrap_percent2 .section_sub_activate ul.box_humidity_row03 {
  height: 127.5px;
}
.section_sub_activate ul.box_humidity_row01.none_bg_bottom,
.section_sub_activate ul.box_humidity_row02.none_bg_bottom,
.section_sub_activate ul.box_humidity_row03.none_bg_bottom,
.section_sub_activate ul.box_air_purify_row.none_bg_bottom {
    background: none;
}

.section_sub_activate ul li {
    float: left;
    padding: 0 10px;
    position: relative;
    height: 100%;
    background: url('/images/page/bg_c1c1c1.png') top right repeat-y;
    -webkit-background-size: 2px;
    background-size: 2px;
}

.section_sub_activate li.none_bg_right {
    background: none;
}

.section_sub_activate ul li.col_02 {
    width: 50%;
}

.section_sub_activate ul li.col_all {
    width: 100%;
}

.section_sub_activate ul li.col_03 {
    width: 33.3%;
}

.section_sub_activate ul li .row_02 {
    height: 50%;
    background: url('/images/page/bg_d9d9d9.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    position: relative;
    text-align: center;
}
.section_sub_activate ul li .row_02:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    content: '';
}

.section_sub_activate ul li .row_03 {
    height: 33.3%;
    background: url('/images/page/bg_d9d9d9.png') bottom left repeat-x;
    -webkit-background-size: 2px;
    background-size: 2px;
    position: relative;
    text-align: center;
    overflow: hidden;
}
.section_sub_activate ul li .row_03 input[type="checkbox"],
.section_sub_activate ul li .row_03 input[type="radio"]{
    vertical-align: middle;
}
.section_sub_activate ul li .row_02 input[type="checkbox"],
.section_sub_activate ul li .row_02 input[type="radio"]{
    vertical-align: middle;
}
.section_sub_activate ul li .row_03:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    content: '';
}

.section_sub_activate ul li .row_02.humidity_last_row {
    padding-top: 7px;
}

.section_sub_activate ul li .none_bg_bottom {
    background: none;
}

.section_sub_activate .menu_title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #898989;
    line-height: 32px;
    text-indent: 5px;
    display: inline-block;
}
@media all and (max-width: 320px) {
    .section_sub_activate .menu_title {
        text-indent: 0;
    }
}
.section_sub_activate .power {
    position: absolute;
    width: 103px;
    height: 103px;
    top: 50%;
    margin-top: -52px;
    left: 50%;
    margin-left: -52px;
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    background: url('/images/page/power_off.png') 0 0 no-repeat;
    -webkit-background-size: 103px;
    background-size: 103px;
}

.section_sub_activate .power:checked {
    background: url('/images/page/power_on.png') 0 0 no-repeat;
    -webkit-background-size: 103px;
    background-size: 103px;
}

.section_sub_activate .mode {
    font-size: 2.1rem;
    line-height: 25px;
    font-weight: bold;
    color: #c5c5c5;
    text-align: center;
    padding-top: 12px;
    letter-spacing: -1px;
}

.section_sub_activate .active .mode {
    color: #339eff;
}

.section_sub_activate .pagination {
  /*  width: 100%;*/
    text-align: center;
}
.section_sub_activate .pagination span:last-child {
    margin-right: 0;
}

.section_sub_activate .pagination.page_2 {
    /*left: 50%;*/
    /*margin-left: -10px;*/
}
.section_sub_activate .box_setting_stage + .pagination {
  position: absolute;
  bottom: 14px;
  left: 50%;
  margin-left: -18px;
}
@media all and (max-height: 600px) {
  .section_sub_activate .box_setting_stage + .pagination {
    bottom: 6px;
  }
}

.section_sub_activate .active .pagination span.focus {
    background: #339eff;
    border: 1px solid #339eff;
}

.section_sub_activate .pagination span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border: 1px solid #bababa;
    background: #bababa;
    margin-right: 6px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

.section_sub_activate .box_setting_humidify {
    position: absolute;
    left: 31px;
    top: 48px;
}
@media all and (max-width: 320px) , (max-height: 600px) {
    .section_sub_activate .box_setting_humidify {
        top: 42px;
    }
}
@media all and (min-height: 700px) {
  .section_sub_activate .box_setting_humidify {
    top: 56px;
  }
}
.section_sub_activate .box_setting_humidify span,
.section_sub_activate .box_setting_stage span {
    position: relative;
    top: -8px;
    left: 5px;
    color: #c5c5c5;
    font-size: 1.6rem;
    font-weight: bold;
}

.toggle_water_humidify {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    width: 22px;
    height: 30px;
    background: url('/images/common/sprite_humidify.png');
    -webkit-background-size: 350px;
    background-size: 350px;
}

.toggle_water_humidify.sprite_water_stop {
    background-position: -25px 0;
}

.toggle_water_humidify.sprite_water_intense:checked {
    background-position: -100px 0;
}

.toggle_water_humidify.sprite_water_moderate:checked {
    background-position: -75px 0;
}

.toggle_water_humidify.sprite_water_mild:checked {
    background-position: -50px 0;
}

.toggle_water_humidify.sprite_water_intense {
    background-position: -75px -225px;
}

.toggle_water_humidify.sprite_water_moderate {
    background-position: -50px -225px;
}

.toggle_water_humidify.sprite_water_mild {
    background-position: -25px -225px;
}

.section_sub_activate .active .box_setting_humidify .toggle_water_humidify:checked + label span,
.section_sub_activate .box_setting_stage .on {
    color: #339eff;
}
.section_sub_activate .active .box_setting_humidify .toggle_water_humidify + label span,
.section_sub_activate .active .box_setting_stage .off {
    color: #c5c5c5;
}

.section_sub_activate .box_setting_humidify .pagination {
    position: absolute;
    top: 60px;
    left: 50%;
  margin-left: -2px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_sub_activate .box_setting_humidify .pagination {
    top: 52px;
  }
}
.section_sub_activate .active .box_setting_humidify .toggle_water_humidify:checked + label span + .pagination span {
    background: #339eff;
    border: 1px solid #339eff;
}

.section_sub_activate .setting_btn {
    position: absolute;
    top: 5px;
    right: 7px;
    display: inline-block;
    width: 30px;
    height: 20px;
    /*  border: 1px solid #2082ca;
      color: #2082ca;*/
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    padding: 2px 3px;
    margin-left: 5px;
    font-size: 10px;
    border: 1px solid #c5c5c5;
    color: #c5c5c5;
}
.section_sub_activate .active .setting_btn {
    border: 1px solid #339eff;
    color: #339eff;
}

.section_sub_activate .box_value p {
    margin-top: 40px;
    text-align: center;
    font-size: 4.4rem;
    color: #c5c5c5;
    font-weight: bold;
    line-height: 50px;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_sub_activate .box_value p {
        margin-top: 25px;
    }
}
@media all and (min-height: 700px) {
  .section_sub_activate .box_value p {
    margin-top: 50px;
  }
}
.section_sub_activate .active .box_value p {
    color: #339eff;
}

.section_sub_activate .box_value p span {
    font-size: 2.5rem;
    font-weight: normal;
}
/* ui.page.css : 밝기 위치 조절 */
.section_sub_activate .box_setting_stage {
    position: absolute;
    left: 25px;
    top: 47px;
}
@media all and (max-height: 600px) {
  .section_sub_activate .box_setting_stage {
    top: 42px;
  }
}
@media all and (max-width: 320px) {
    .section_sub_activate .box_setting_stage {
        left: 19px;
    }
}

@media all and (min-height: 700px) {
  .section_sub_activate .box_setting_stage {
    top: 57px;
    left: 35px;
  }
}
.section_sub_activate .box_setting_stage .sprite_dp_light,
.section_sub_activate .box_setting_stage .sprite_off_dp_light  {
  margin-top: 2px;
}
.section_sub_activate .box_setting_stage .pagination {
    margin-top: 25px;
}

.section_sub_activate .mode_color {
    text-align: center;
    margin-top: 26px;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_sub_activate .mode_color {
        margin-top: 20px;
    }
}
@media all and (min-height: 700px) {
  .section_sub_activate .mode_color {
    margin-top: 35px;
  }
}
.area_time_sync {
    position: relative;
    height: 10.5vh;
    padding: 12px 12px 0;
    border-top: 1px solid #b5b5b5;
    background: #edebee;
}
.wrap_percent .area_time_sync {
  height: 60px;
}
.wrap_percent2 .area_time_sync {
  height: 62px;
}

.area_time_sync .title {
    font-size: 1.6rem;
    line-height: 24px;
    color: #a0a0a0;
    font-weight: bold;
}

.area_time_sync.active .title {
    color: #666666;
}

.area_time_sync .desc {
    font-size: 1.2rem;
    line-height: 20px;
    color: #999999;
}

.area_time_sync button.sprite_sync {
    position: absolute;
    right: 35px;
    top: 17px;
}
@media all and (max-height: 600px) {
  .area_time_sync .title {
    font-size: 1.4rem;
    line-height: 19px;
    color: #a0a0a0;
    font-weight: bold;
  }
  .area_time_sync .desc {
    font-size: 1.1rem;
    line-height: 17px;
  }
  .area_time_sync button.sprite_sync {
    right: 29px;
    top: 14px;
  }
}
.area_time_sync button.sprite_humidify.sprite_sync:active {
    background-position: -200px -50px;
}

.area_time_sync button.sprite_humidify.sprite_sync:disabled {
    background-position: -225px 0;
}
/* ui.page.css : 팝업 무드램프 색상 설정 */
.popup_contents.mode_color {
  height: 280px;
  padding: 55px 10px 0;
  text-align: left;
}

.mode_color label {
  display: inline-block;
  width: 93px;
  height: 105px;
  text-align: center;
}
@media all and (max-width: 320px) {
  .mode_color label {
    width: 80px;
  }
}
.mode_color .color_radio {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    display: inline-block;
    width: 33px;
    height: 33px;
    position: relative;
}

.mode_color.disabled .color_radio {
    opacity: 0.6;
}
.active .mode_color .color_radio:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 33px;
  height: 33px;
  display: block;
  background: url('/images/common/sprite_humidify.png') -100px -75px no-repeat;
  -webkit-background-size: 350px;
  background-size: 350px;
}

.color_radio.color_01 {
    background: url('/images/common/sprite_humidify.png') 0 -125px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio.color_02 {
    background: url('/images/common/sprite_humidify.png') -50px -125px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio.color_03 {
    background: url('/images/common/sprite_humidify.png') -100px -125px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio.color_04 {
    background: url('/images/common/sprite_humidify.png') -150px -125px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio.color_05 {
    background: url('/images/common/sprite_humidify.png') -200px -125px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio_lg {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    display: inline-block;
    width: 72px;
    height: 72px;
    position: relative;
}

.color_radio_lg.color_01 {
    background: url('/images/common/sprite_humidify.png') 0 -325px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio_lg.color_02 {
    background: url('/images/common/sprite_humidify.png') -75px -325px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio_lg.color_03 {
    background: url('/images/common/sprite_humidify.png') -150px -325px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio_lg.color_04 {
    background: url('/images/common/sprite_humidify.png') -225px -325px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.color_radio_lg.color_05 {
    background: url('/images/common/sprite_humidify.png') 0 -400px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}

.mode_color .color_radio_lg:checked:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    display: block;
    background: url('/images/common/sprite_humidify.png') -75px -400px no-repeat;
    -webkit-background-size: 350px;
    background-size: 350px;
}
</style>
