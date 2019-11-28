<template>
<div class="wrap_contents_area" v-show="water.isConn">
  <!-- section_main -->
  <section class="section_main section_purify" v-if="isOnline">
      <div class="bg" :class="{bg_mini_purify: deviceInfo.modelNm === 'WPU2200C', bg_purify: deviceInfo.modelNm !== 'WPU2200C'}">
        <p class="title_txt">바로 만드는 새물! 탱크없는 {{ title }}</p>
        <div class="area_title">
              <div class="box_title">
                  <h1 :class="wifiSignalIntensity">
                    <span>{{ deviceInfo.nicknm }}</span>
                    <button @click="modNickNameModal = true" class="align_center sprite sprite_purify sprite_edit" v-if="deviceInfo.masterYn === 'Y'"></button>

                  </h1>
              </div>
              </div>
        <div class="area_desc">
          <div class="box_remain" :style="styleObj">
            <div class="img_purify" :class="{img_mini_purify: deviceInfo.modelNm === 'WPU2200C' && water.cleaning === 1, img_mini_purify_wait: deviceInfo.modelNm === 'WPU2200C' && water.cleaning === 0}" :style="miniCup">
              <span  v-if="water.cleaning === 1 && deviceInfo.modelNm === 'WPU2200C'" class="ani_cup"><img src="/images/common/ani_cup.png" alt=""></span>
              <div v-else-if="water.cleaning === 1 && deviceInfo.modelNm !== 'WPU2200C' && water.lockCoke === 0" class="purify_loader"></div>
            </div>
            <div class="txt_status">
              <p>{{ cleanStatusMsg }}</p>
              <p v-show="water.lockCoke != 1">남은시간 {{ cleanRemainTime }}분</p>
            </div>
          </div>
          <button @click="showCleanModal" class="btn_cancel sprite sprite_mini_purify" v-if="deviceInfo.modelNm === 'WPU2200C' && water.cleaning === 1">취소하기</button>
          <button @click="showCleanModal" class="btn_start sprite sprite_mini_purify" v-else-if="deviceInfo.modelNm === 'WPU2200C' && water.cleaning === 0">진행하기</button>

        </div>
          <div class="area_water_graph" v-if="deviceInfo.modelNm === 'WPU2200C'">
            <div class="box_section_title">
              <span>{{ intakeInfo.name }}
                  <a @click="weightSettingModal = true" class="align_center">
                      <span class="sprite sprite_mini_purify sprite_weight"></span>
                  </a>
              </span>
            </div>
            <div class="area_graph">
                <!-- 'bar_graph' div영역 comment -->
                <!-- 바그래프 높이 영역 styel의 height의 % 수치로 움직이기 -->
                <!-- height 0 일때 class 'bar_0' 추가 -->
                <div class="bar_graph" :style="{height: waterIntakeStatus + '%'}"></div>
                <p>{{ waterIntakeStatus }}%</p>
            </div>
            <div class="box_graph_desc">
                <!-- 음용량,목표량 입력값없을 경우 (초기화면)일 때 span에 class 추가
                'sprite sprite_mini_purify sprite_double_bar'
                -->
                <p class="water_current">음용량</p><span :class="intakeObj">{{ intakeInfo.todayIntake }}ml</span><br>
                <p class="water_aim">목표량</p><span :class="goalObj">{{ intakeInfo.goal }}ml</span>
            </div>

            <a @click="plusOneCup" class="cup_150">
                <p>+</p>
                <p>한컵</p>
                <p>(150ml)</p>
            </a>
          </div>
          <div class="area_info" v-else>
              <div class="box_info blue">
                  <div class="circle_status">
                      <span class="sprite sprite_purify" :class="{sprite_lock: water.lockCold === 1 && water.errCold === 0, sprite_cold: water.lockCold === 0 && water.errCold === 0, sprite_warning: water.errCold === 1}"></span>
                      <!-- 잠금일 때 클래스 : sprite_lock -->
                      <!-- 이상일 때 클래스 : sprite_warning -->
                      <span class="txt_label">냉수</span>
                  </div>
                  <div class="txt_status">
                      <div class="temperature">
                          <span>{{ water.coldWaterTemp | temp }}<em v-if="water.coldWaterTemp != '-'"></em></span>
                          <span v-if="water.coldWaterTemp != '-'"><em></em>5</span>
                      </div>
                      <p>{{ coldWaterStatTxt }}</p>
                  </div>
              </div>
              <div class="box_info yellow" v-if="deviceInfo.modelNm === 'WPUA400'">
                  <div class="circle_status">
                      <span class="sprite sprite_purify" :class="{sprite_lock: water.lockChild === 1 && water.errChild === 0, sprite_warm: water.lockChild === 0 && water.errChild === 0, sprite_warning: water.errChild === 1}"></span>
                      <span class="txt_label_child">유아수/미온수</span>
                  </div>
                  <div class="txt_status">
                      <div class="temperature">
                          <span>{{ water.childWaterTemp | temp }}<em v-if="water.childWaterTemp != '-'"></em></span>
                          <span v-if="water.childWaterTemp != '-'"><em></em>5</span>
                      </div>
                      <p>{{ childWaterStatTxt }}</p>
                  </div>
              </div>
              <div class="box_info orange" v-if="deviceInfo.modelNm === 'WPUA400'">
                  <div class="circle_status">
                      <span class="sprite sprite_purify " :class="{sprite_lock: water.lockHot === 1 && water.errHot === 0, sprite_hot: water.lockHot === 0 && water.errHot === 0, sprite_warning: water.errHot === 1}"></span>
                      <span class="txt_label">온수</span>
                  </div>
                  <div class="txt_status">
                      <div class="temperature">
                          <span>{{ water.hotWaterTemp | temp }}<em v-if="water.hotWaterTemp != '-'"></em></span>
                          <span v-if="water.hotWaterTemp != '-'"><em></em>5</span>
                      </div>
                      <p>{{ hotWaterStatTxt }}</p>
                  </div>
              </div>
          </div>
          <div class="area_txt" v-if="deviceInfo.modelNm === 'WPUA400'">
            출수 온도는 출수 후, 30분간만 표시되며 실제온도와 편차가 발생할 수 있습니다.
          </div>
      </div>
  </section>
  <!-- //section_main -->

  <!-- section_slide -->
  <section class="section_function section_slide clearfix" v-if="isOnline">
      <div class="area_function">
          <span>밝기조절</span>
          <div>
              <div class="slide_toggle">
                  <em class="line01"></em>
                  <em class="line02"></em>
                  <em class="line03"></em>
                  <!-- waterLed: 미니정수기 밝기조절, cokeBrightLed: 정수기 밝기조절-->
                  <input type="radio" v-if="deviceInfo.modelNm === 'WPU2200C'" class="slide_radio" name="waterLed" style="left:-10px" :checked="water.waterLed === 4" value="4" @click="stompClientSend">
                  <input type="radio" v-else class="slide_radio" name="cokeBrightLed" style="left:-10px" :checked="water.cokeBrightLed === 1" value="1" @click="stompClientSend">
                  <input type="radio" v-if="deviceInfo.modelNm === 'WPU2200C'" class="slide_radio" name="waterLed" style="left:50%;margin-left: -10px;" :checked="water.waterLed === 1" value="1" @click="stompClientSend">
                  <input type="radio" v-else class="slide_radio" name="cokeBrightLed" style="left:50%;margin-left: -10px;" :checked="water.cokeBrightLed === 2" value="2" @click="stompClientSend">
                  <input type="radio" v-if="deviceInfo.modelNm === 'WPU2200C'" class="slide_radio" name="waterLed" style="right:-10px;" :checked="water.waterLed === 2" value="2" @click="stompClientSend">
                  <input type="radio" v-else class="slide_radio" name="cokeBrightLed" style="right:-10px;" :checked="water.cokeBrightLed === 4" value="4" @click="stompClientSend">
                  <p class="txt01">OFF</p>
                  <p class="txt02">약하게</p>
                  <p class="txt03">강하게</p>
              </div>
          </div>
      </div>
  </section>
  <!-- //section_slide -->

  <!-- section_toggle -->
  <section class="section_function section_toggle" :class="{section_toggle_col_3: deviceInfo.modelNm === 'WPU2200C', toggle_col_2: deviceInfo.modelNm !== 'WPU2200C'}" v-if="isOnline">
      <div class="area_toggle" v-if="deviceInfo.modelNm === 'WPU2200C'">
          <span>차일드 락</span>
          <div>
              <input type="checkbox" class="checkbox_toggle" name='lockAll' :checked="water.lockAll === 1" @click="stompClientSend">
          </div>
      </div>
      <div class="area_toggle">
          <span>버튼음</span>
          <div>
              <input type="checkbox" class="checkbox_toggle" name='muted' :checked="water.muted === 0" @click="stompClientSend">
          </div>
      </div>
      <div class="area_toggle">
        <span v-if="deviceInfo.modelNm !== 'WPU2200C'">코크 살균 알림 LED</span>
        <span class="toggle_line_2" v-else>코크 살균 <br>알림 LED</span>
        <div>
            <input type="checkbox" class="checkbox_toggle" name='cokeCleanLed' :checked="water.cokeCleanLed === 1" @click="stompClientSend">
        </div>
      </div>
  </section>
  <!-- //section_toggle -->

  <!-- section_on_off -->
  <section class="section_function section_on_off" v-if="isOnline && deviceInfo.modelNm !== 'WPU2200C'">
      <div class="area_on_off">
          <span>냉수 ON/OFF 또는 기능 잠금</span>
          <div class="box_on_off" :class="{col_5: deviceInfo.modelNm === 'WPUA400', col_3: deviceInfo.modelNm === 'WPUA300'}">
              <div>
                  <input type="checkbox" class="toggle_purify bottom_cold" name='lockCold' :checked="water.lockCold === 1" @click="stompClientSend">
                  <label>냉수</label>
              </div>
              <div v-if="deviceInfo.modelNm === 'WPUA400'">
                  <input type="checkbox" class="toggle_purify bottom_warm" name='lockChild' :checked="water.lockChild === 1" @click="stompClientSend">
                  <label>유아수/미온수</label>
              </div>
              <div v-if="deviceInfo.modelNm === 'WPUA400'">
                  <input type="checkbox" class="toggle_purify bottom_hot" name='lockHot' :checked="water.lockHot === 1" @click="stompClientSend">
                  <label>온수</label>
              </div>
              <div>
                  <input type="checkbox" class="toggle_purify children" name='lockKid':checked="water.lockKid === 1" @click="stompClientSend">
                  <label>어린이 취수</label>
              </div>
              <div>
                  <input type="checkbox" class="toggle_purify top_purify" name='lockCoke' :checked="water.lockCoke === 1" @click="stompClientSend">
                  <label>살균</label>
              </div>
          </div>
      </div>
  </section>

  <weather-view v-if="isOnline && deviceInfo.modelNm === 'WPU2200C'" :deviceInfo="deviceInfo"></weather-view>
  <!-- 팝업창 -->
  <transition name="fade">
    <popup-modal v-if="isOnline && cleanModal" :sendNm="cleaning" @ok="stompClientSend" @close="cleanModal = false">
      <h3 slot="body">{{ cleanModalMsg }}</h3>
    </popup-modal>
  </transition>
  <transition name="fade">
    <alert-modal v-if="isOnline && controlErrModal" @ok="controlErrModal = false">
      <h3 slot="body">가전 제어에 대한 응답이 없습니다.</h3>
    </alert-modal>
  </transition>
  <transition name="fade">
    <alert-modal v-if="isOnline && lockAllModal" @ok="lockAllModal = false">
      <h3 slot="body">전체 버튼 잠금 상태 입니다.</h3>
    </alert-modal>
  </transition>
  <transition name="fade">
    <rename-modal v-if="isOnline && modNickNameModal" @close="modNickNameModal = false" :nickName="deviceInfo.nicknm" :deviceId="deviceId" v-on:modNickName="modNickName"></rename-modal>
  </transition>
  <transition name="fade">
    <weight-modal v-if="isOnline && weightSettingModal" v-on:setWeight="setWeight" @close="weightSettingModal = false" :weight="intakeInfo.weight" :deviceId="deviceId"></weight-modal>
  </transition>
  <!-- <alert-modal v-if="show" @ok="show = false">
    <h1 slot="head">가전데이터</h1>
    <h3 slot="body">{{water}}</h3>
  </alert-modal> -->
  <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
</div>
  <!--section_on_off -->
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import RenameModal from '@/components/common/modal/ReName'
import WeightModal from '@/components/water/modal/WeightSetting'
import WeatherView from '@/components/common/view/Weather'
import PopupModal from '@/components/common/modal/Popup'
import AlertModal from '@/components/common/modal/Alert'

var msg

export default {
  name: 'main',
  props: ['userId', 'deviceId', 'deviceInfo', 'info', 'water', 'route'],
  components: { ErrorView, RenameModal, WeightModal, WeatherView, PopupModal, AlertModal },
  data () {
    return {
      cleaning: 'cleaning',
      intakeInfo: {},
      show: false,
      cleanModal: false,
      modNickNameModal: false,
      weightSettingModal: false,
      controlErrModal: false,
      lockAllModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.deviceInfo.modelNm === 'WPU2200C') this.getIntakeInfo()
    if (this.water.isConn) {
      // 가전 연결 실패 상태
      if (!this.water.online) {
        this.reSend()
      }
    } else {
      // 최초 진입 시 무한 대기를 방지하기 위해 5초 대기후
      setTimeout(() => {
        if (!this.water.isConn) {
          this.water.isConn = true
          // 사용자가 재시도를 누를 수 있도록 강제로 연결 오류 화면 표시하도록 함
          this.water.online = false
        }
      }, 1000 * 5)
    }
  },
  filters: {
    temp: function (val) {
      if (val === '-') return val
      else return val.substr(2, val.length)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.water.isConn) {
        // this.show = true
        // 가전 연결 실패 인 경우
        if (curr - this.water.timestamp > 35000) {
          this.water.online = false
        } else {
          online = this.water.online
        }
        if (!this.water.waitCmd) this.loading(false)
      }
      return online
    },
    wifiSignalIntensity: function () {
      if (this.deviceInfo.modelNm === 'WPU2200C') {
        if (this.water.wifiSignalIntensity === '1') {
          return { title_wifi: true, wifi_00: true }
        } else if (this.water.wifiSignalIntensity === '2') {
          return { title_wifi: true, wifi_01: true }
        } else if (this.water.wifiSignalIntensity === '3') {
          return { title_wifi: true, wifi_02: true }
        } else if (this.water.wifiSignalIntensity === '4') {
          return { title_wifi: true, wifi_03: true }
        }
      }
    },
    styleObj: function () {
      if ((this.water.cleaning === 0 || this.water.lockCoke === 1) && this.deviceInfo.modelNm !== 'WPU2200C') {
        return { 'padding-left': '0px' }
      } else {
        return { 'padding-left': '27px' }
      }
    },
    miniCup: function () {
      if (this.deviceInfo.modelNm === 'WPU2200C') return { top: '1px', left: '-1px' }
      else return { top: '8px' }
    },
    intakeObj: function () {
      if (this.intakeInfo.todayIntake === '') {
        return {
          sprite: true,
          sprite_mini_purify: true,
          sprite_double_bar: true
        }
      }
    },
    goalObj: function () {
      if (this.intakeInfo.goalRate === '') {
        return {
          sprite: true,
          sprite_mini_purify: true,
          sprite_double_bar: true
        }
      }
    },
    title: function () {
      switch (this.deviceInfo.modelNm) {
        case 'WPU2200C':
          return '슈퍼스마트 MINI정수기'
        case 'WPUA400':
          return '슈퍼스마트 냉온정수기'
        case 'WPUA300':
          return '슈퍼스마트 냉정수기'
      }
    },
    waterIntakeStatus: function () {
      var intake = parseInt((this.intakeInfo.todayIntake * 100) / this.intakeInfo.goal)
      if (this.deviceInfo.modelNm === 'WPU2200C') {
        if (intake > 100) {
          intake = 100
        }
      }
      return intake
    },
    cleanRemainTime: function () {
      // 참고 return moment(this.water.timeInfo, 'DD/MM/YYYY').add(1분).format('mm:dd');
      var hour = parseInt(this.water.timeInfo.substr(0, 2))
      var min = parseInt(this.water.timeInfo.substr(2, 2))
      var sec = parseInt(this.water.timeInfo.substr(4, 2))
      if (hour < 10) hour = '0' + hour
      if (this.water.cleaning === 1) {
        if (sec > 0) min = min + 1
      }
      if (min < 10) min = '0' + min
      return hour + ':' + min
    },
    hotWaterStatTxt: function () {
      // 정상 상태
      if (this.water.errHot === 0) {
        if (this.water.lockHot === 0) {
          msg = '정상 작동 중 입니다.'
        } else { // 잠금 상태
          msg = '잠금 상태 입니다.'
        }
      } else { // 이상 상태
        msg = '이상 상태 입니다.'
      }
      return msg
    },
    childWaterStatTxt: function () {
      if (this.water.errChild === 0) {
        if (this.water.lockChild === 0) {
          msg = '정상 작동 중 입니다.'
        } else {
          msg = '잠금 상태 입니다.'
        }
      } else {
        msg = '이상 상태 입니다.'
      }
      return msg
    },
    coldWaterStatTxt: function () {
      if (this.water.errCold === 0) {
        if (this.water.lockCold === 0) {
          msg = '정상 작동 중 입니다.'
        } else {
          msg = '잠금 상태 입니다.'
        }
      } else {
        msg = '이상 상태 입니다.'
      }
      return msg
    },
    cleanStatusMsg: function () {
      if (this.water.lockCoke === 0) {
        if (this.water.cleaning === 1 && Number(this.water.timeInfo) <= 3000) { // 코크 살균 대기 상태
          this.cleanBtnText = '취소'
          msg = '코크 살균 동작 중입니다.'
        } else { // 코크 살균 진행 상태
          this.cleanBtnText = '진행하기'
          msg = '코크 살균 대기 중입니다.'
        }
      } else { // 코크 살균 잠금상태
        this.cleanBtnText = '진행하기'
        msg = '코크 살균 잠금 상태'
      }
      return msg
    },
    cleanModalMsg: function () {
      if (this.water.cleaning === 0) {
        return '코크 살균을 진행하시겠습니까?'
      } else {
        return '정말로 코크 살균을 취소하시겠습니까?'
      }
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    },
    getIntakeInfo: function () {
      this.loading(true)
      this.$http.post('/api/water/intake/today', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.intakeInfo = response.data.body
        if (this.intakeInfo.goalRate > 100) this.intakeInfo.goalRate = 100
        this.loading(false)
      })
      .catch(error => console.log(error))
    },
    modNickName: function (nicknm) {
      if (nicknm) {
        this.modNickNameModal = false
        this.deviceInfo.nicknm = nicknm
      }
    },
    setWeight: function () {
      this.weightSettingModal = false
      this.getIntakeInfo()
    },
    plusOneCup: function () {
      this.$http.post('/api/water/intake/add', {
        hdeviceSeq: this.deviceId,
        intake: '150'
      })
      .then(response => {
        this.getIntakeInfo()
      })
      .catch(error => console.log(error))
    },
    showCleanModal: function () {
      if (this.water.lockAll === 1) {
        this.lockAllModal = true
      } else this.cleanModal = true
    },
    stompClientSend: function () {
      event.preventDefault()
      var self = this
      var cmdObj = {}
      var name = event.target.name
      if (this.water.lockAll === 1 && name !== 'lockAll') {
        this.lockAllModal = true
      } else {
        switch (name) {
          case 'waterLed':
          case 'cokeBrightLed':
            cmdObj[name] = event.target.value
            break
          case 'muted':
            // ON:음소거, OFF:소리
            event.target.checked ? cmdObj[name] = '0' : cmdObj[name] = '1'
            break
          case 'cleaning':
            this.water[name] === 0 ? cmdObj[name] = '1' : cmdObj[name] = '0'
            this.cleanModal = false
            break
          default:
            // ON:1, OFF:0
            event.target.checked ? cmdObj[name] = '1' : cmdObj[name] = '0'
        }
        if (String(this.water[name]) !== cmdObj[name]) {
          this.water.waitCmd = true
          this.loading(true)
          if (typeof this.callbackHdeviceToken === 'undefined') {
            this.callbackHdeviceToken = 'token'
          }
          this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
          // 제어 명령 전달 후 200ms 이후 부터 응답 대기
          setTimeout(() => {
            waitResponse(cmdObj[name], 20)
          }, 200)
        }
      }
      function waitResponse (cmd, cnt) {
        if (cnt > 0) {
          if (String(self.water[name]) === cmd) {
            // 제어 성공
            self.water.waitCmd = false
            self.loading(false)
            return
          } else {
            setTimeout(() => {
              waitResponse(cmd, --cnt)
            }, 200)
          }
        } else {
          // 대기 시간 초과
          self.water.waitCmd = false
          self.controlErrModal = true
          self.loading(false)
        }
      }
    }
  }
}
</script>
<style>
/* UMC : 유아수 미온수 상태 */
.section_purify .area_info .box_info .circle_status .txt_label_child {
    display: block;
    position: absolute;
    bottom: 14px;
    left: 0;
    text-align: center;
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.1vh;
    margin-top: 5px;
}

/* UMC : 냉정수기 col_2 */
.section_on_off .area_on_off .box_on_off.col_2 > div {
    display: inline-block;
    float: left;
    width: 50%;
    text-align: center;
    color: #b8b7b9;
}
/* ui.main.css : 냉온정수기 메인 */
.section_purify .bg_purify {
    background-image: url("/images/main/bg_main.png");
    background-position: right bottom;
    background-repeat: no-repeat;
}

.section_purify .area_title .box_remain,
.section_purify .area_desc .box_remain {
    position: relative;
    padding-left: 25px;
}

.section_purify .area_title .box_remain .img_purify,
.section_purify .area_desc .box_remain .img_purify {
    position: absolute;
    top: 8px;
    left: 6px;
    text-align: center;
    padding-right: 1px;
}

.section_purify .area_title .box_remain .img_purify img,
.section_purify .area_desc .box_remain .img_purify img {
    /*width: 22px;*/
    width: 12px;
    display: block;
    margin: 0 auto;
}

.section_purify .area_title .box_remain .txt_status p,
.section_purify .area_desc .box_remain .txt_status p {
    font-size: 1.1rem;
    line-height: 14px;
    color: #666;
}
.section_purify .title_txt {
  color: #606060;
  /*line-height: 12px;*/
  line-height: 2vh;
  padding: 12px 0 0 26px;
}
@media all and (max-height: 600px) {
  .section_purify .title_txt {
    padding-top: 5px;
  }
}
@media all and (max-width: 320px) {
  .section_purify .title_txt {
    padding-left: 20px;
  }
}
@media all and (min-height: 700px) {
  .section_purify .area_desc {
    left: 26px;
  }
}
.section_purify .area_info {
    position: absolute;
    top: 98px;
    left: 23px;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_purify .area_info {
        top: 76px;
    }
}
@media all and (min-height: 700px) {
  .section_purify .area_info {
    top: 108px;
  }
}
.section_purify .area_info .box_info {
    position: relative;
    padding-left: 65px;
    height: 8.6vh;
    margin-bottom: 13px;
}
@media all and (max-width: 320px) {
    .section_purify .area_info .box_info {
        margin-bottom: 12px;
    }
}
.section_purify .area_info .box_info .circle_status {
    position: absolute;
    top: 0;
    left: 0;
    width: 55px;
    height: 55px;
    background: #7f7e7f;
    border-radius: 50%;
    color: #fff;
    text-align: center;
}


.section_purify .area_info .box_info.blue .circle_status {
    background: #63baef;
}

.section_purify .area_info .box_info.yellow .circle_status {
    background: #eed36f;
}

.section_purify .area_info .box_info.orange .circle_status {
    background: #ed794e;
}

/* umc : 냉수 이미지 조절*/
.section_purify .area_info .box_info .circle_status .sprite_purify.sprite_cold {
    position: absolute;
    top: 6px;
    left: 50%;
    margin-left: -10px;
}

.section_purify .area_info .box_info .circle_status .sprite_purify.sprite_lock {
    position: absolute;
    top: 15px;
    left: 40%;
    margin-left: -9px;
}

.section_purify .area_info .box_info .circle_status .sprite_purify.sprite_warm {
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -7px;
}

.section_purify .area_info .box_info .circle_status .sprite_purify.sprite_hot {
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -11px;
}

.section_purify .area_info .box_info .circle_status .sprite_purify.sprite_warning {
    position: absolute;
    top: 9px;
    left: 50%;
    margin-left: -13px;
}

/* UMC : 냉수 및 온수 상태 문구 사이즈 조절 */
.section_purify .area_info .box_info .circle_status .txt_label {
    display: block;
    position: absolute;
    bottom: 9px;
    left: 0;
    text-align: center;
    width: 100%;
    font-size: 0.8rem;
    line-height: 2.1vh;
    margin-top: 5px;
}

.section_purify .area_info .box_info .txt_status {
    position: relative;
    top: 1.3vh;
}
.section_purify .area_info .box_info .temperature {
    line-height: 3.4vh;
}
.section_purify .area_info .box_info .temperature span {
    color: #8f8f90;
}

.section_purify .area_info .box_info .temperature span:nth-child(1) {
    font-size: 2.5rem;
}

.section_purify .area_info .box_info .temperature span em {
    display: inline-block;
    width: 17px;
    height: 19px;
    background: url("/images/common/sprite_purify.png") 0 0 no-repeat;
    background-size: 400px;
    margin-right: 3px;
}
.section_purify .area_info .box_info.blue .temperature span:nth-child(1) {
    color: #64baef;
}

.section_purify .area_info .box_info.yellow .temperature span:nth-child(1) {
    color: #e6c333;
}

.section_purify .area_info .box_info.orange .temperature span:nth-child(1) {
    color: #e46b3f;
}

.section_purify .area_info .box_info.blue .temperature span:nth-child(1) em {
    background-position: -125px -150px;
}
.section_purify .area_info .box_info.yellow .temperature span:nth-child(1) em {
    background-position: -150px -150px;
}

.section_purify .area_info .box_info.orange .temperature span:nth-child(1) em {
    background-position: -175px -150px;
}

.section_purify .area_info .box_info .temperature span:nth-child(2) {
    font-size: 1.3rem;
}

.section_purify .area_info .box_info .temperature span:nth-child(2) em {
    width: 6px;
    height: 9px;
    background-position: -100px -150px;
    margin-right: 2px;
}

.section_purify .area_txt {
    position: absolute;
    bottom: 7px;
    left: 0;
    color: #606060;
    line-height: 1.8vh;
    letter-spacing: -1px;
    padding: 0 24px;
}
@media all and (max-width: 320px) {
    .section_purify .area_txt {
        line-height: 1.2rem;
        bottom: 0;
    }
}
@media all and (max-height: 600px) {
  .section_purify .area_txt {
    line-height: 1.2rem;
    bottom: 4px;
  }
}
@media all and (min-height: 700px) {
  .section_purify .area_txt {
    bottom: 15px;
  }
}
.section_function {
    height: 9vh;
    border-top: #fff 1px solid;
    background: #f4f4f4;
    border-bottom: #ddddde 1px solid;
}

.section_function.section_slide {
    height: 9vh;
}
.section_function.section_on_off {
    height: 17vh;
}

.section_function.none_border_bottom {
    border-bottom: none;
}

.section_function .area_function > span,
.section_function .area_function > div {
    float: left;
    height: 9vh;
}

.section_function .area_function > span {
    width: 20%;
    color: #666;
    line-height: 9vh;
    text-align: left;
    font-size: 1.2rem;
    padding-left: 16px;
    font-weight: bold;
}
@media all and (max-width: 320px) {
    .section_function .area_function > span {
        padding-left: 13px;
    }
}
.section_function .area_function > div {
    width: 80%;
    padding: 17px 30px 0;
    text-align: center;
}

.section_function .slide_toggle {
    position: relative;
    height: 6px;
    border-bottom: #dbdadd 1px solid;
}

.section_function .slide_toggle em {
    position: absolute;
    display: inline-block;
    top: 3px;
    width: 1px;
    height: 6px;
    background: #a7a7a7;
}
.section_function .slide_toggle .slide_radio {
    position: absolute;-webkit-appearance: none;
    top: -4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    width: 20px;
    height: 20px;
}
.section_function .slide_toggle .slide_radio:checked {
    background: url('/images/common/sprite_purify.png') -25px -50px no-repeat;
    -webkit-background-size: 400px;
    background-size: 400px;
}
.section_function .slide_toggle .slide_radio:active {
    background-position: -275px -50px;
}
.section_function .slide_toggle .line01 {
    left: 0;
}

.section_function .slide_toggle .line02 {
    left: 50%;
}

.section_function .slide_toggle .line03 {
    right: 0;
}

.section_function .slide_toggle p {
    position: absolute;
    top: 13px;
    color: #666;
}
.section_function .slide_toggle .txt01 {
    left: -9px;
}
.section_function .slide_toggle .txt02 {
    left: 50%;
    margin-left: -15px;
}

.section_function .slide_toggle .txt03 {
    right: 0;
    margin-right: -15px;
}

.section_function .slide_toggle .btn_slide_toggle {
    width: 19px;
    height: 19px;
    z-index: 100;
    top: -4px;
    margin-left: -9px;
}

.toggle_col_2 .area_toggle {
    width: 50%;
}
.toggle_col_3 .area_toggle {
    width: 33.3%;
}

.section_toggle .area_toggle > span,
.section_toggle .area_toggle > div {
    float: left;
    height: inherit;
}
.section_toggle .area_toggle > span {
    width: 70%;
    color: #666;
    line-height: 24px;
    text-align: left;
    padding-left: 23px;
    font-size: 1.2rem;
    font-weight: bold;
}
@media all and (max-width: 320px) {
    .section_toggle .area_toggle > span {
        padding-left: 13px;
    }
}
.section_toggle .area_toggle:nth-child(2) > span {
    padding-left: 13px;
}
@media all and (max-width: 320px) {
    .section_toggle .area_toggle:nth-child(2) > span {
        padding-left: 5px;
    }
}
.section_toggle .area_toggle > div {
    width: 30%;
    /*padding: 16px 0 0;*/
    text-align: center;
}
.section_on_off {
    position: relative;
}
/*.section_on_off .area_on_off {
    height: inherit;
}*/
.section_on_off .area_title {
    position: absolute;
    top: 7px;
    left: 21px;
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    margin-right: 12px;
    color: #666666;
}
.section_on_off .area_on_off > span {
    display: inline-block;
    padding-left: 23px;
    height: 6vh;
    line-height: 6vh;
    font-weight: bold;
    font-size: 1.2rem;
    color: #666;
}
@media all and (max-width:320px),(max-height: 600px) {
  .section_on_off .area_on_off > span {
    padding-left: 13px;
    height: 5vh;
    line-height: 5vh;
  }
}
.section_on_off .area_on_off .box_on_off.col_5 > div {
    display: inline-block;
    float: left;
    width: 20%;
    text-align: center;
    color: #b8b7b9;
}

@media all and (max-width:320px){
    .section_on_off .area_on_off .box_on_off.col_5 > div:nth-child(2) .toggle_purify + label {
        letter-spacing: -1.5px;
    }
}
.section_on_off .area_on_off .box_on_off.col_3 > div {
    display: inline-block;
    float: left;
    width: 33.3%;
    text-align: center;
    color: #b8b7b9;
}
.section_on_off .area_on_off .box_on_off.col_4 > div {
    display: inline-block;
    float: left;
    width: 25%;
    text-align: center;
    color: #b8b7b9;
}

.section_on_off .area_on_off .box_on_off > div a {
    display: block;
    color: #c6c5c7;
}
.section_on_off .area_on_off .box_on_off > div.active a {
    color: #32a1e0;
}
.section_on_off .area_on_off .box_on_off > div div {
    height: 40px;
}
.section_on_off .area_on_off .box_on_off > div.no_blue a,
.section_on_off .area_on_off .box_on_off > div.no_blue.active a {
    color: #6a6a6a;
}
.section_on_off .area_on_off .box_on_off > div .active_indicator {
    display: none;
    position: absolute;
    top:-8px;
    right:9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4ea5e6;
}
.section_on_off .area_on_off .box_on_off > div.active .active_indicator {
    display: block;
}

/* ui.main.css : 제품 작동 */
.section_on_off.section_product_activate {
    /*height: 200px;*/
    height: 34vh;
    border-bottom: #c4c1c1 1px solid;
    background: #e6e4e7 url("/images/page/bg_activate.png") 50% repeat-x;
}

.section_on_off.section_product_activate .area_on_off .box_on_off {
    padding-top: 35px;
    /*height: 100px;*/
    height: 17vh;
}

.section_on_off.section_product_activate .area_on_off .box_on_off:nth-child(2) {
    padding-top: 23px;
}

.section_on_off .area_on_off .box_on_off > div {
    position: relative;
    min-height: 65px;
    /*height: inherit;*/
   /* background: url("/images/page/bg_line01.png") right 50% no-repeat;
    background-size: 3px;*/
    padding-right: 3px;
}

.section_on_off .area_on_off .box_on_off > div:last-child {
    background: none;
}
.section_on_off.section_product_activate .area_on_off .box_on_off > div.none_bg {
    background: none;
}

/* ui.main.css : 슈퍼미니정수기 메인 */
.section_purify .bg_mini_purify {
    background-image: url(/images/main/bg_mini_main.png);
    background-position: right bottom;
    background-repeat: no-repeat;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_main.section_purify .bg_mini_purify {
    -webkit-background-size: 310px;
    background-size: 310px;
  }
}
@media all and (min-height: 700px) {
  .section_main.section_purify .bg_mini_purify {
    -webkit-background-size: 410px;
    background-size: 410px;
  }
}
.section_purify .area_desc .btn_cancel {
    position: relative;
    top: 4px;
    left: 23px;
    display: inline-block;
    background-position: -150px -25px;
    width: 64px;
    height: 20px;
}
.section_purify .area_desc .btn_start {
    position: relative;
    top: 4px;
    left: 23px;
    display: inline-block;
    background-position: -150px -75px;
    width: 64px;
    height: 20px;
}

.section_purify .area_desc .btn_cancel:active {
    background-position: -150px -50px;
}
.section_purify .area_desc .btn_start:active {
    background-position: -150px -100px;
}
.section_main.section_purify .area_title .box_title span {
  max-width: 198px;
}
@media (max-width: 320px) {
  .section_main.section_purify .area_title .box_title span {
    max-width:178px;
  }
}
.section_purify .area_title .box_title .title_wifi {
    padding-left: 28px;
    position: relative;
}
.section_purify .area_title .box_title .title_wifi:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    width: 20px;
    height: 12px;
    background: url('/images/common/sprite_mini_purify.png') no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_purify .area_title .box_title .title_wifi.wifi_00:before {
    background-position: -225px -50px;
}
.section_purify .area_title .box_title .title_wifi.wifi_01:before {
    background-position: -150px 0;
}

.section_purify .area_title .box_title .title_wifi.wifi_02:before {
    background-position: -175px 0;
}
.section_purify .area_title .box_title .title_wifi.wifi_03:before {
    background-position: -200px 0;
}
.section_purify .img_purify.img_mini_purify {
    width: 19px;
    height: 22px;
    background: url('/images/common/sprite_mini_purify.png') -100px -25px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_purify .img_purify.img_mini_purify_wait {
    width: 19px;
    height: 22px;
    background: url('/images/common/sprite_mini_purify.png') -100px -50px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}

.section_purify .img_purify.img_mini_purify .cup_of_water {
    position: absolute;
    bottom: 3px;
    left: 3px;
    width: 12px;
    height: 15px;
}
.section_purify .img_purify.img_mini_purify span {
  position: absolute;
  bottom: 4px;
  left: 3.2px;
}

.section_purify .area_water_graph {
    position: absolute;
    top: 130px;
    left: 26px;
}
@media all and (max-height: 600px) {
    .section_purify .area_water_graph {
        top: 115px;
        left: 23px;
    }
}
@media all and (max-width: 320px) {
  .section_purify .area_water_graph {
    top: 108px;
    left: 23px;
  }
}
@media all and (min-height: 700px){
  .section_purify .area_water_graph {
    top: 140px;
  }
}
.section_purify .area_water_graph .box_section_title {
    margin-bottom: 13px;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_purify .area_water_graph .box_section_title {
        margin-bottom: 4px;
    }
}
.box_section_title span {
    font-size: 1.5rem;
    display: inline-block;
    line-height: 21px;
    vertical-align: top;
    color: #494a4a;
    font-weight: bold;
    position: relative;
}


.box_section_title button.sprite_weight {
    position: absolute;
    right: -24px;
    top: 0;
}

.box_section_title button.sprite_weight:active {
    background-position: -225px -25px;
}

.section_purify .area_water_graph .area_graph {
    position: relative;
    background: #d1dae3;
    width: 57px;
    height: 134px;
    margin-left: 5px;
}
.section_purify .area_water_graph .area_graph:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    width: 5px;
    height: 130px;
    background: url('/images/common/sprite_mini_purify.png') 0 -25px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
/* 미니정수기 그래프 숫자 위치 조정 */
.section_purify .area_water_graph .area_graph p {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 25px;
    width: 55px;
    color: #ffffff;
    font-size: 2rem;
    text-align: center;
}
.section_purify .area_water_graph .area_graph .bar_graph {
    background: #5accf2;
    width: 57px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.section_purify .area_water_graph .area_graph .bar_graph:after {
    content: '';
    position: absolute;
    top: -7px;
    left: 0;
    width: 68px;
    height: 15px;
    background: url('/images/common/sprite_mini_purify.png') 0 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_purify .area_water_graph .area_graph .bar_graph.bar_0:after {
    height: 0;
}
.section_purify .area_water_graph .box_graph_desc {
    padding-left: 14px;
    position: absolute;
    top: 36px;
    left: 89px;
    width: 130px;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_purify .area_water_graph .box_graph_desc {
        top: 30px;
        left: 84px;
    }
}
.section_purify .area_water_graph .box_graph_desc p {
    font-size: 1.2rem;
    color: #a9b4bf;
    line-height: 21px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
}
.section_purify .box_graph_desc span {
    font-size: 1.9rem;
    color: #b6c1cc;
    vertical-align: middle;
    margin-left: 3px;
}
.section_purify .box_graph_desc .sprite_double_bar {
    font-size: 0;
}
.section_purify .area_water_graph .box_graph_desc p.water_current + span {
    color: #45c0f2;
}
.section_purify .area_water_graph .box_graph_desc p.water_current:before {
    content: '';
    position: absolute;
    left: -14px;
    top: 5px;
    background: url('/images/common/sprite_mini_purify.png') -75px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 12px;
    height: 11px;
}
.section_purify .area_water_graph .box_graph_desc p.water_aim:before {
    content: '';
    position: absolute;
    left: -14px;
    top: 5px;
    background: url('/images/common/sprite_mini_purify.png') -100px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 12px;
    height: 11px;
}

.section_purify .area_water_graph .cup_150 {
    display: inline-block;
    position: absolute;
    top: 94px;
    left: 83px;
    background: url('/images/common/sprite_mini_purify.png') -25px -25px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 75px;
    height: 86px;
    text-align: center;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_purify .area_water_graph .cup_150 {
        top: 78px;
    }
}
.section_purify .area_water_graph .cup_150:active {
    background: url('/images/common/sprite_mini_purify.png') 0 -125px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 75px;
    height: 86px;
}
.section_purify .area_water_graph .cup_150 p:first-child {
    font-size: 2rem;
    color: #ffffff;
    padding-top: 18px;
}
.section_purify .area_water_graph .cup_150:active p {
    opacity: 0.5;
}
.section_purify .area_water_graph .cup_150 p:nth-child(2) {
    font-size: 1.4rem;
    color: #edf8fe;
    font-weight: bold;
}
.section_purify .area_water_graph .cup_150 p:last-child {
    color: #c1e5fd;
}

.section_toggle.section_toggle_col_3 .area_toggle {
    width: 33.3%;
    background: none;
}
.section_toggle.section_toggle_col_3 .area_toggle > span {
    padding-left: 15px;
    width: 60%;
}
@media all and (max-width: 320px) {
    .section_toggle.section_toggle_col_3 .area_toggle > span {
        padding-left: 12px;
    }
}
.section_toggle.section_toggle_col_3 .area_toggle .toggle_line_2 {
    /*padding-top: 12px;*/
    line-height: 13px;
    font-size: 1.1rem;
}
.section_toggle.section_toggle_col_3 .area_toggle > div {
    width: 40%;
    text-align: left;
}

.section_weather {
    min-height: 17vh;
    border-top: #fff 1px solid;
    background: #f5f3f5;
    border-bottom: #ddddde 1px solid;
    padding: 11px 15px 0;
    position: relative;
}
.section_weather .box_section_title span {
    font-size: 1.4rem;
    position: relative;
}
.section_weather .box_section_title span button.sprite_position {
    position: absolute;
    right: -24px;
    top: 0;
}
.section_weather .box_section_title span button.sprite_position:active {
    background-position: -25px 0;
}


.section_weather .box_section_title p {
    position: absolute;
    top: 13px;
    right: 15px;
    font-size: 1.1rem;
    color: #c2c2c2;
}
.section_weather .wrap_weather {
    padding-top: 15px;
}
.section_weather .box_weather {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 50%;
    float: left;
    position: relative;
}

.section_weather .box_weather .weather_desc {
    font-size: 1.5rem;
    color: #6f7883;
    display: inline-block;
    vertical-align: top;
    line-height: 47px;
    padding-left: 7px;
}

.section_weather .box_weather .weather_desc strong {
    font-size: 3rem;
    display: inline-block;
    position: relative;
    vertical-align: top;
}
@media all and (max-width: 320px) {
  .section_weather .box_weather .weather_desc strong {
    font-size: 2.8rem;
  }
}
.section_weather .box_weather .weather_desc strong:after {
    content: '';
    position: absolute;
    display: block;
    top: 12px;
    right: -10px;
    width: 9px;
    height:8px;
    background: url('/images/common/sprite_weather.png') -50px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_weather .box_air {
    position: absolute;
    top: 49px;
  right: 0;
}
@media all and (max-width: 320px) {
  .section_weather .box_air {
    top: 42px;
  }
}
@media all and (max-height: 600px) {
  .section_weather .box_air {
    top: 42px;
  }
}

.section_weather .box_air > div {
    display: inline-block;
    margin-right: 11px;
    min-width: 27px;
    max-width: 55px;
}
@media all and (max-width: 320px) {
  .section_weather .box_air > div {
    margin-right: 4px;
  }
}
.section_weather .box_air > div p:nth-child(1) {
    font-size: 1.1rem;
    color: #a1a6ad;
    margin-bottom: 5px;
}
.section_weather .box_air div p:nth-child(2) {
    font-size: 1.6rem;
    color: #6f7883;
    position: relative;
    display: inline-block;
}
.section_weather .box_air .humidity:after {
    content: '';
    position: absolute;
    display: block;
    bottom: 2px;
    right: -7px;
    width: 6px;
    height:7px;
    background: url('/images/common/sprite_weather.png') -75px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_weather .box_air .dust {
    margin-right: 19px;
}
.box_air .dust:after {
    content: '';
    position: absolute;
    display: block;
    bottom: 2px;
    right: -21px;
    width: 19px;
    height:10px;
    background: url('/images/common/sprite_weather.png') -100px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
}
.section_toggle .area_toggle {
    text-align: center;
    height: inherit;
    float: left;
    background: url(/images/main/bg_line.png) right 50% no-repeat;
    background-size: 3px;
    padding-top: 2.3vh;
}
/* ui.page.css : 제품작동 */
.toggle_purify {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    width: 40px;
    height: 22px;
    background: url("/images/common/sprite_purify.png") 0 0 no-repeat;
    background-size: 400px;
    display: block;
    margin: 0 auto;
}

.toggle_purify + label {
    position: absolute;
    bottom: 9px;
    left: -2px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #aeadae;
}
.toggle_purify:disabled {
    opacity: 0.5
}

.toggle_purify:active {
    opacity: 0.8
}

.toggle_purify.one_cup {
    background-position: -225px -150px;
    width: 25px;
    height: 30px;
}

.toggle_purify.one_cup:checked {
    background-position: -200px -150px;
}
.toggle_purify:checked + label {
    color: #32a1e0;
}

.toggle_purify:disabled + label {
    opacity: 0.5;
}

.toggle_purify:active + label {
    opacity: 0.8;
}

.toggle_purify.cup_550 {
    background-position: -25px -200px;
    width: 25px;
    height: 29px;
}

.toggle_purify.cup_550:checked {
    background-position: 0 -200px;
}
.toggle_purify.refresh {
    background-position: -100px -200px;
    width: 29px;
    height: 30px;
}

.toggle_purify.refresh:checked {
    background-position: -50px -200px;
}
.toggle_purify.wifi {
    background-position: -150px -200px;
    width: 33px;
    height: 27px;
}
.section_product_activate .toggle_title {
    color: #333;
    position: relative;
    bottom: -40px;
    /* left: 23px; */
    display: block;
    /* margin: 0 auto; */
    text-align: center;
}
.section_product_activate .toggle_purify.top_purify {
    background-position: -200px -200px;
    width: 25px;
    height: 29px;
}

.toggle_purify.top_purify {
    background-position: -100px -100px;
    width: 25px;
    height: 29px;
}

.toggle_purify.top_purify:checked {
    background-position: -50px -150px;
}

.toggle_purify.bottom_cold {
    background-position: -150px -50px;
    width: 26px;
    height: 29px;
}

.toggle_purify.bottom_cold:checked {
    background-position: -150px -100px;
}



.toggle_purify.top_purify01 {
    background-position: -225px -200px;
    width: 22px;
    height: 31px;
}

.toggle_purify.top_purify01:checked {
    background-position: -250px -200px;
}

.toggle_purify.bottom_warm {
    background-position: -200px -50px;
    width: 17px;
    height: 32px;
}

.toggle_purify.bottom_warm:checked {
    background-position: -200px -100px;
}

.toggle_purify.bottom_hot {
    background-position: 0 -100px;
    width: 25px;
    height: 27px;
}

.toggle_purify.bottom_hot:checked {
    background-position: -225px -100px;
}

.toggle_purify.children {
    background-position: -50px -100px;
    width: 29px;
    height: 33px;
}

.toggle_purify.children:checked {
    background-position: 0 -150px;
}
/*유아수온도 라디오*/
.section_set_warm .area_set_warm div:nth-child(2) label {
    position: relative;
    display: inline-block;
    font-size: 1.9rem;
    color: #9c9b9d;
    width: 33.3%;
    margin-right: -4px;
}

.set_warm_radio {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 0;
    display: inline-block;
    background: url(/images/common/sprite_purify.png) 0 -250px no-repeat;
    background-size: 400px;
    width: 54px;
    height: 53px;
    vertical-align: middle;
    position: relative;
    z-index: 99;
}

.set_warm_radio.warm_45 {
    background-position: -75px -325px;
}

.set_warm_radio.warm_45:checked {
    background-position: 0 -250px;
}

.set_warm_radio.warm_45:active {
    background-position: -300px -175px;
}

.set_warm_radio.warm_50 {
    background-position: -150px -325px;
}

.set_warm_radio.warm_50:checked {
    background-position: -75px -250px;
}

.set_warm_radio.warm_50:active {
    background-position: -300px -250px;
}

.set_warm_radio.warm_55 {
    background-position: -225px -325px;
}

.set_warm_radio.warm_55:checked {
    background-position: 0 -325px;
}

.set_warm_radio.warm_55:active {
    background-position: -300px -325px;
}

.set_warm_radio:disabled {
    opacity: 0.5;
}

.set_warm_radio + span {
    position: absolute;
    top: 19px;
    left: 14px;
    z-index: 100;
}

.set_warm_radio:disabled + span {
    opacity: 0.4;
}

.set_warm_radio:checked + span {
    color: #ffffff;
}
</style>
