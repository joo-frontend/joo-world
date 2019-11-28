<template>
  <div class="wrap_contents_area" :class="{wrap_percent: modelNm === 'LG-F320S', wrap_percent2: modelNm === 'LG-F470L'}" v-show="water.isConn">
    <section class="section_on_off section_product_activate" v-if="isOnline">
      <div class="area_title">
        <p>기능 선택</p>
      </div>
      <div class="area_on_off">
        <div class="box_on_off col_5">
          <div>
            <input type="radio" class="toggle_purify one_cup" name="amtSetting" value="1" :checked="water.amtSetting === 1" @click="stompClientSend" >
            <label for="">한컵</label>
          </div>
          <div>
            <input type="radio" class="toggle_purify cup_550" name="amtSetting" value="2" :checked="water.amtSetting === 2" @click="stompClientSend">
            <label for="">550ml</label>
          </div>
          <div>
            <input type="radio" class="toggle_purify refresh" name="amtSetting" value="4" :checked="water.amtSetting === 4" @click="stompClientSend">
            <label for="">연속</label>
          </div>
          <div>
            <input type="radio" class="toggle_purify wifi" checked>
            <label for="">WIFI</label>
            <span class="active_indicator" v-bind:style="{display: wifiBlock}"></span>
          </div>
          <div class="none_bg no_blue">
            <p class="toggle_purify top_purify">
              <span class="toggle_title">살균</span>
              <span class="active_indicator" v-bind:style="{display: block}"></span>
            </p>
          </div>
        </div>
        <div class="box_on_off" :class="{col_2: deviceInfo.modelNm === 'WPUA300', col_4: deviceInfo.modelNm === 'WPUA400'}">
          <div>
            <input type="radio" class="toggle_purify bottom_cold" name="selWater" value="1" :checked="water.selWater === 1 && water.lockCold !== 1" :disabled="water.lockCold === 1" @click="stompClientSend" >
            <label for="">냉수</label>
          </div>
          <div>
            <input type="radio" class="toggle_purify top_purify01" name="selWater" value="2" :checked="water.selWater === 2" @click="stompClientSend" >
            <label for="">정수</label>
          </div>
          <div v-if="deviceInfo.modelNm === 'WPUA400'">
            <input type="radio" class="toggle_purify bottom_warm" name="selWater" value="4" :checked="water.selWater === 4 && water.lockChild !== 1" :disabled="water.lockChild === 1" @click="stompClientSend" >
            <label for="">유아수/미온수</label>
          </div>
          <div v-if="deviceInfo.modelNm === 'WPUA400'">
            <input type="radio" class="toggle_purify bottom_hot" name="selWater" value="8" :checked="water.selWater === 8 && water.lockHot !== 1" :disabled="water.lockHot === 1" @click="stompClientSend" >
            <label for="">온수</label>
          </div>
        </div>
      </div>
    </section>
    <!-- //section_product_activate -->
    <!-- //section_set_warm -->
    <section class="section_set_warm" v-if="isOnline && deviceInfo.modelNm === 'WPUA400'">
      <div class="area_set_warm">
        <div>
          <p>유아수/미온수 <br>온도 설정</p>
          <span>바로 만든 새물!<br>아기에게도 안심할 수<br>있는 물!</span>
        </div>
        <div>
          <label for="">
            <input type="radio" name="childWaterSettingTemp" class="set_warm_radio warm_45" value="45" :checked="water.childWaterSettingTemp === '45'" @click="stompClientSend">
        </label>
        <label for="">
          <input type="radio" name="childWaterSettingTemp" class="set_warm_radio warm_50" value="50":checked="water.childWaterSettingTemp === '50'" @click="stompClientSend">
        </label>
        <label for="">
          <input type="radio" name="childWaterSettingTemp" class="set_warm_radio warm_55" value="55" :checked="water.childWaterSettingTemp === '55'" @click="stompClientSend">
        </label>
      </div>
    </div>
  </section>
  <!-- //section_set_warm -->
  <section class="section_coke_sterilizing" :class="{section_ice: deviceInfo.modelNm === 'WPUA300'}" v-if="isOnline">

    <div class="area_title">
      <p>코크살균</p><span>몇 일에 한번씩 하는 살균은? NO! 2시간에 한번 코크 살균!</span>
    </div>
    <!-- 진행하기 클래스: activate_start -->
    <!-- 완료 클래스: activate_end -->
    <div class="wrap_activate">
      <div class="area_activate" :class="{activate_start: water.cleaning === 1 && water.lockCoke === 0}">
        <div class="box_img">
          <div class="box_remain_time">
            <p class="txt_remain">REMAIN TIME</p>
            <p class="txt_timer">{{ cleaningTime }}분</p>
            <button :disabled="water.lockCoke === 1" @click="cleanModal = true">{{ cleanBtnText }}</button>
          </div>
          <div class="box_loading_image">
          <!--  <div class="product_active_loader"></div>-->
            <div class="status_loading">
              <img src="/images/main/img_coke.png" alt="">
            </div>
          </div>
        </div>
      <div class="box_bottom_txt">
        <p>{{ cleanStatusMsg }}</p>
      </div>
    </div>
    </div>
    </section>

    <popup-modal v-if="isOnline && cleanModal" :sendNm="cleaning" @close="cleanModal = false" @ok="stompClientSend">
      <h3 slot="body">{{ cleanModalMsg }}</h3>
    </popup-modal>

    <alert-modal v-show="controlErrModal" @ok="controlErrModal = false" @close="controlErrModal = false">
      <h3 slot="body">가전 제어에 대한 응답이 없습니다.</h3>
    </alert-modal>

    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
</template>

<script>
import ErrorView from '@/components/common/view/Error'
import PopupModal from '@/components/common/modal/Popup'
import LodingModal from '@/components/common/modal/Loading'
import AlertModal from '@/components/common/modal/Alert'

var msg
export default {
  name: 'control',
  components: { ErrorView, PopupModal, LodingModal, AlertModal },
  props: ['userId', 'deviceId', 'deviceInfo', 'type', 'water', 'route'],
  data () {
    return {
      cleaning: 'cleaning',
      modelNm: this.modelNm,
      cleanBtnText: '',
      cleanModal: false,
      loadingModal: false,
      controlErrModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.water.isConn) {
      // 가전 연결 실패 상태
      if (!this.water.online) {
        this.reSend()
      }
    } else {
      // 최초 진입 시 무한 대기를 방지하기 위해 3초 대기후
      // 사용자가 재시도를 누를 수 있도록 연결 오류 화면 표시
      setTimeout(() => {
        if (!this.water.isConn) {
          this.water.isConn = true
          this.water.online = false
        }
      }, 1000 * 3)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.water.isConn) {
        if (curr - this.water.timestamp > 35000) {
          this.water.online = false
        } else {
          online = this.water.online
        }
        // 제어 명령 대기중이 아닐때만 로딩바 닫기
        if (!this.water.waitCmd) this.loading(false)
      }
      return online
    },
    modelGubunShow: function () {
      if (this.deviceInfo.modelNm === 'WPUA300') return false
      else return true
    },
    cleaningTime: function () {
      var hour = parseInt(this.water.timeInfo.substr(0, 2))
      var min = parseInt(this.water.timeInfo.substr(2, 2))
      var sec = parseInt(this.water.timeInfo.substr(4, 2))
      if (this.water.cleaning === 0 || this.water.lockCoke === 1) {
        return '00'
      } else if (this.water.cleaning === 1) {
        // 코크 살균 진행 중에 잠금설정 할 때
        if (hour > 0) {
          return hour * 60
        } else {
          if (sec > 0) min = min + 1
          if (min < 10) min = '0' + min
          return min
        }
      }
    },
    block: function () {
      if (this.water.cleaning === 1) {
        return 'block'
      } else return 'none'
    },
    wifiBlock: function () {
      if (this.water.wifiSignalIntensity > 0) {
        return 'block'
      } else return 'none'
    },
    cleanStatusMsg: function () {
      if (this.water.lockCoke === 0) {
        if (this.water.cleaning === 0) { // 코크 살균 대기 상태
          this.cleanBtnText = '진행하기'
          msg = '지금은 코크 살균 대기 중입니다.'
        } else { // 코크 살균 진행 상태
          this.cleanBtnText = '취소'
          msg = '코크 살균 동작 중입니다.'
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
    stompClientSend: function () {
      event.preventDefault()
      var self = this
      // 제어 커맨드
      var cmdObj = {}
      var name = event.target.name
      // var waitCnt = 0
      if (name === 'cleaning') {
        this.water[name] === 0 ? cmdObj[name] = '1' : cmdObj[name] = '0'
        this.cleanModal = false
      } else {
        cmdObj[name] = event.target.value
      }

      if (String(this.water[name]) !== cmdObj[name]) {
        this.water.waitCmd = true
        this.loading(true)
        if (typeof this.callbackHdeviceToken === 'undefined') {
          this.callbackHdeviceToken = 'token'
        }
        this.$stompClient.send('/req/' + this.deviceInfo.modelKind + '/' + this.deviceId + '/' + this.userId, {'X-Authorization': this.callbackHdeviceToken}, JSON.stringify(cmdObj))
        // 제어 성공여부에 따른 로딩바 및 에러화면 보여짐()
        waitResponse(cmdObj[name], 15)
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

<style scoped>
.section_on_off .area_on_off .box_on_off.col_2 > div {
    display: inline-block;
    float: left;
    width: 50%;
    text-align: center;
    color: #b8b7b9;
}
/* ui.page.css : 제품작동 체크박스 */
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
    left:-2px;
    width: 100%;
    text-align: center;
    /*color: #c6c5c7;*/
    color: #aeadae;
    font-weight: bold;
}
.toggle_purify:disabled {
    opacity: 0.4
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
.toggle_purify:acitve + label {
    opacity: 0.8;
}
.section_product_activate .toggle_title {
    color: #333;
    position: relative;
    bottom: -40px;
    /* left: 23px; */
    display: block;
    /* margin: 0 auto; */
    text-align: center;
    font-weight: bold;
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
.toggle_purify.wifi + label,
.section_product_activate .toggle_purify.top_purify + label {
    color: #333;
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
    opacity:0.5;
}
.set_warm_radio + span {
    position: absolute;
    top: 19px;
    left: 14px;
    z-index: 100;
}
.set_warm_radio:disabled + span {
    opacity:0.4;
}
.set_warm_radio:checked + span {
    color: #ffffff;
}
/* ui.main.css : 제품 작동 */
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
    background: url("/images/page/bg_line01.png") right 50% no-repeat;
    background-size: 3px;
    padding-right: 3px;
}
.section_on_off .area_on_off .box_on_off > div:last-child {
    background: none;
}
.section_on_off.section_product_activate .area_on_off .box_on_off > div.none_bg {
    background: none;
}
.section_set_warm {
    /*height: 95px;*/
    height: 15vh;
    border-top: #f7f7f8 1px solid;
    border-bottom: #dedede 1px solid;
    background: #f0eef0;
}
.section_set_warm .area_set_warm {
    position: relative;
  height: 100%;
}
.section_set_warm .area_set_warm:after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.section_set_warm .area_set_warm div:nth-child(1) {
  padding-left: 16px;
    width: 34%;
    color: #666666;
  display: inline-block;
  vertical-align: middle;
}
@media all and (max-width: 320px) {
  .section_set_warm .area_set_warm div:nth-child(1) {
    padding-left: 10px;
  }
}
.section_set_warm .area_set_warm div:nth-child(1) p {
    font-size: 1.2rem;
    font-weight:bold;
    line-height: 1.6rem;
  margin-bottom: 3px;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_set_warm .area_set_warm div:nth-child(1) p {
    margin-bottom: 2px;
  }
}
.section_set_warm .area_set_warm div:nth-child(1) span {
    line-height: 1.2rem;
    display: inline-block;
}
.section_set_warm .area_set_warm div:nth-child(2) {
    width: 65%;
    /*padding-top: 22px;*/
  display: inline-block;
  vertical-align: middle;
}
/*@media all and (max-width: 320px),(max-height: 600px) {
    .section_set_warm .area_set_warm div:nth-child(2) {
        padding-top: 16px;
    }
}
@media all and (min-height: 700px) {
  .section_set_warm .area_set_warm div:nth-child(2) {
    padding-top: 32px;
  }
}*/
.section_set_warm .area_set_warm div:nth-child(2) p {
    width: 33.3%;
    float:left;
    color: #9c9b9d;
}
.section_set_warm .area_set_warm div:nth-child(2) p span {
    font-size: 1.9rem;
    display: inline-block;
    padding: 18px 0 0 14px;
    background: url(/images/common/sprite_purify.png) 0 -250px no-repeat;
    background-size: 400px;
    width: 54px;
    height: 53px;
}
.section_set_warm .area_set_warm div:nth-child(2) p span.active {
    background: url(/images/common/sprite_purify.png) -75px -250px no-repeat;
    background-size: 400px;
    width: 54px;
    height: 53px;
    color: #ffffff;
}
.section_coke_sterilizing {
    /*position: relative;*/
    /*height: 230px;*/
    height: 36.5vh;
    border-top: #f7f7f8 1px solid;
    border-bottom: #dedede 1px solid;
    background: #f0eef0;
    padding: 18px 16px 0;
    color: #666;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_coke_sterilizing {
        padding: 9px 10px 0;
    }
}
.wrap_percent .section_coke_sterilizing,
.wrap_percent2 .section_coke_sterilizing {
  height: 209px;
}
.section_coke_sterilizing .wrap_activate {
  height: 93%;
  position: relative;
  text-align: center;
}

.wrap_percent .section_coke_sterilizing .wrap_activate {
  height: 182px;
}
.wrap_percent2 .section_coke_sterilizing .wrap_activate {
  height: 184px;
}
.wrap_percent .section_coke_sterilizing.section_ice .wrap_activate {
  height: 268px;
}
.wrap_percent2 .section_coke_sterilizing.section_ice .wrap_activate {
  height: 270px;
}

.section_coke_sterilizing.section_ice {
    height: 51.5vh;
}
.wrap_percent .section_coke_sterilizing.section_ice {
  height: 292px;
}
.wrap_percent2 .section_coke_sterilizing.section_ice {
  height: 294px;
}

.section_coke_sterilizing .area_title {
  /*height: 17px;*/
  height: 7%;
}
.wrap_percent .section_coke_sterilizing.section_ice .area_title,
.wrap_percent2 .section_coke_sterilizing.section_ice .area_title {
  height: 15px;
}
.wrap_percent .section_coke_sterilizing .area_title,
.wrap_percent2 .section_coke_sterilizing .area_title {
  height: 15px;
}
.section_coke_sterilizing .area_title p {
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    margin-right: 12px;
}
.section_coke_sterilizing .area_title span {
    font-size: 1rem;
}
.section_coke_sterilizing .area_activate {
  /*display: inline-block;
  vertical-align: middle;*/
  position: absolute;
  top: 50%;
  margin-top: -85px;
  left: 50%;
  margin-left: -72px;
}
/*.section_coke_sterilizing .area_title + div:after {
  content: '';
  height: 100%;
  !*position: absolute;*!
  display: inline-block;
  vertical-align: middle;
}*/
@media all and (max-width: 320px),(max-height: 600px) {
  .section_coke_sterilizing .area_activate {
    margin-top: -80px;

  }
}
.section_coke_sterilizing .area_activate .box_img {
  position: relative;
  width: 144px;
  height: 144px;
  border: #3fc7bc 2px solid;
  border-radius: 50%;
  margin: 0 auto 10px;
}
@media all and (max-width: 320px),(max-height: 600px) {
    .section_coke_sterilizing .area_activate .box_img {
        width: 134px;
        height: 134px;
    }
}
.section_coke_sterilizing .area_activate .box_remain_time {
    position: absolute;
    top: 41px;
    left:0;
    width: 100%;
    text-align: center;
    z-index: 99;
}

@media all and (max-width: 320px),(max-height: 600px) {
    .section_coke_sterilizing .area_activate .box_remain_time {
        top: 35px;
    }
}
.section_coke_sterilizing .area_activate .box_remain_time button {
    width: 67px;
    height: 22px;
    background: url('/images/common/sprite_purify.png') -225px -250px no-repeat;
    background-size: 400px;
    color: #ffffff;
    font-size: 10px;
    line-height: 24px;
}

.section_coke_sterilizing .area_activate .box_remain_time button:active {
    background-position: -225px -275px;
}
.section_coke_sterilizing .area_activate .box_remain_time button:disabled {
    background-position: -150px -250px;
    color: rgba(255,255,255,0.5);
}
.section_coke_sterilizing .area_activate .box_remain_time p {
    color: #cdccce;
}
.section_coke_sterilizing .area_activate .box_remain_time .txt_remain {
    line-height: 11px;
}
.section_coke_sterilizing .area_activate .box_remain_time .txt_timer {
    font-size: 3.2rem;
    line-height: 33px;
    margin-bottom: 6px;
}
.section_coke_sterilizing .box_bottom_txt {
    width: 100%;
}
.section_coke_sterilizing .area_activate .box_loading_image {
    display: none;
}
.section_coke_sterilizing .area_activate .box_loading_image {
    display: none;
}

.section_coke_sterilizing .area_activate.activate_start .box_img {
    border-color: transparent;
}
.section_coke_sterilizing .area_activate.activate_start .box_loading_image {
    display: block;
}
.section_coke_sterilizing .area_activate.activate_start .sprite_processing_coke,
.section_coke_sterilizing .area_activate.activate_end .sprite_processing_coke {
    background-position: -150px -250px;
}

.section_coke_sterilizing .area_activate.activate_end .box_img {
    border:#3fc7bc 6px solid;
}
.section_coke_sterilizing .area_activate.activate_start .box_remain_time p,
.section_coke_sterilizing .area_activate.activate_end .box_remain_time p {
    color: #4b4b4b;
}
.section_on_off {
    position: relative;
}
/* ui.main.css : 정수기 기능 정렬 */
/*.section_on_off .area_on_off {
    height: inherit;
}*/
.section_on_off .area_title {
    position: absolute;
  top: 9px;
  left: 16px;
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
    color: #666;
    font-size: 1.2rem;
    font-weight: bold;
}
.section_on_off .area_on_off .box_on_off.col_5 > div {
    display: inline-block;
    float: left;
    width: 20%;
    text-align: center;
    color: #b8b7b9;
}
@media all and (max-width:320px) {
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
@media all and (min-height: 700px) {
  .section_on_off .area_title {
    top: 19px;
  }
  .section_on_off.section_product_activate .area_on_off .box_on_off.col_5 {
    padding-top: 61px;
  }
  .section_on_off.section_product_activate .area_on_off .box_on_off.col_2,
  .section_on_off.section_product_activate .area_on_off .box_on_off.col_4 {
    padding-top: 43px;
  }
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
.section_coke_sterilizing.section_ice {
    height: 51.5vh;
}
</style>
