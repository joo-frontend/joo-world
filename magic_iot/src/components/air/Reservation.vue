<template>
  <div class="wrap_contents_area">
    <!-- <link rel="stylesheet" href="../../../../../domfam2017/trunk/20_sk_magic/dev/mobile/css/ui/ui.page.css"> -->
    <!-- section_push_alarm -->
    <section class="section_push_alarm" v-if="isReserve > 0 && (showModReserve === false && showAddReserve === false)">
      <ul class="area_reserv">
        <li v-for="res in airResereList">
          <p @click="getReserveInfo(res)">{{ getTimeType(res.startTime) }} ~ {{ setNextDayCheck(res) }} {{ getTimeType(res.endTime) }}</p>
          <span>{{ res | resType }}{{ setModeTxt(res) }}</span>
          <label><input type="checkbox" class="checkbox_toggle_lg" :checked="res.scheduleYn === 'Y'" @click="setAlertYn(res.airScheduleSeq, res.scheduleYn)"></label>
        </li>
      </ul>
    </section>
    <!-- //section_push_alarm -->

    <!-- non section_push_alarm -->
    <section class="section_none_menu none_menu_btn" v-if="isNotReserve && (showModReserve === false && showAddReserve === false)">
      <div class="area_none_menu">
        <div class="img"></div>
        <p>예약이 없습니다.<br>예약을 추가하시려면 [추가]를 터치하세요.</p>
      </div>
    </section>
    <!-- //non section_push_alarm -->

    <!-- del section_push_alarm -->
    <section class="section_push_alarm"  v-if="showDelReserve">
      <ul class="area_reserv reserv_delete">
        <li>
          <input type="checkbox" class="checkbox_circle"  v-model="allChecked">
          <p>모두 선택 </p>
        </li>
        <li v-for="res in airResereList">
          <input type="checkbox" :value="res.airScheduleSeq" class="checkbox_circle" v-model="checked">
          <p>{{ getTimeType(res.startTime) }} ~ {{ setNextDayCheck(res) }} {{ getTimeType(res.endTime) }}</p>
          <span>{{ res | resType }}{{ setModeTxt(res) }}</span>
        </li>
      </ul>
    </section>
    <!-- //del section_push_alarm -->

    <section class="section_btn bottom_btn">
      <div class="area_btn" :class="{btn_inline: airResereList.length > 0}">
        <button class="btn btn_lg btn_skyblue btn_block" v-if="showDelReserve" @click="showDelReserve = false, isReserve = true">취소</button>
        <button class="btn btn_lg btn_blue btn_block" v-if="showDelReserve" @click="delReserveCheck">삭제</button>
        <button class="btn btn_lg btn_skyblue btn_block" v-else @click="showAddReserve = true">추가</button>
        <button v-show="airResereList.length > 0 && showDelReserve === false" class="btn btn_lg btn_blue btn_block" @click="delAlertShowYn">삭제</button>
      </div>
    </section>

    <transition name="fade">
      <popup-modal v-if="showDelAlert" @ok="delReserve" @close="showDelAlert = false">
        <h3 slot="body">예약을 {{ allAlertTxt }} 삭제하시겠습니까?</h3>
      </popup-modal>
    </transition>
    <transition name="fade">
      <alert-modal v-show="showDelErrAlert" @ok="showDelErrAlert = false">
        <h3 slot="body">선택된 항목이 없습니다.</h3>
      </alert-modal>
    </transition>
    <mod-reserve-view v-if="showModReserve" :res="resInfo" :deviceInfo="deviceInfo" v-on:updateReserve="updateReserve" @close="showModReserve = false"/>
    <add-reserve-view v-if="showAddReserve" :deviceInfo="deviceInfo" v-on:addReserve="addReserve" @close="showAddReserve = false"/>
</div>
</template>
<script>
import ModReserveView from '@/components/air/ModReserve'
import AddReserveView from '@/components/air/AddReserve'
import PopupModal from '@/components/common/modal/Popup'
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'reservation',
  components: { AddReserveView, ModReserveView, PopupModal, AlertModal },
  props: ['deviceId', 'deviceInfo'],
  data () {
    return {
      reserve: '',
      resInfo: {},
      airResereList: [],
      checked: [],
      isReserve: false,
      isNotReserve: false,
      showModReserve: false,
      showAddReserve: false,
      showDelAlert: false,
      showDelErrAlert: false,
      showDelReserve: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    // 테스트용
    // if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.hdeviceToken !== 'undefined') {
    //   this.$toast('가전 토큰 가져오기 스킴 있음 - 안드로이드')
    //   window.SkmagicNative.hdeviceToken()
    // } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
    //   this.$toast('가전 토큰 가져오기 스킴 있음 - ios')
    //   var message1 = {
    //     command: 'hdeviceToken'
    //   }
    //   window.webkit.messageHandlers.SkmagicNative.postMessage(message1)
    // } else {
    //   this.$toast('가전 토큰 가져오기 스킴 없음')
    // }
    this.getAirReserve()
  },
  filters: {
    resType: function (res) {
      var repeat = res.repeatDay
      var repeatYn = res.repeatYn
      if (repeat === '0') {
        repeat = '반복 없음'
      } else if (repeat === '67') {
        repeat = '주말'
      } else {
        var day = repeat.split('')
        repeat = ''
        for (var index in day) {
          if (day[index] === '7') repeat += '일, '
          else if (day[index] === '1') repeat += '월, '
          else if (day[index] === '2') repeat += '화, '
          else if (day[index] === '3') repeat += '수, '
          else if (day[index] === '4') repeat += '목, '
          else if (day[index] === '5') repeat += '금, '
          else if (day[index] === '6') repeat += '토, '
        }
        repeat = repeat.slice(0, -2)
      }
      if (res.repeatYn === 'Y') repeatYn = '/반복'
      else repeatYn = ''
      return repeat + repeatYn
    }
  },
  computed: {
    allChecked: {
      get () {
        return this.airResereList ? this.airResereList.length === this.checked.length : false
      },
      set (value) {
        var checked = []
        if (value) {
          this.airResereList.forEach(function (item) {
            checked.push(item.airScheduleSeq)
          })
        }
        this.checked = checked
      }
    },
    allAlertTxt: function () {
      if (this.checked.length === this.airResereList.length) return '모두'
      else return ''
    }
  },
  methods: {
    setModeTxt: function (res) {
      var mode = res.menuCode
      if (mode === '0x8001') mode = ' (자동)'
      else if (mode === '0xa001') {
        if (this.deviceInfo.modelNm === 'ACLV35' || this.deviceInfo.modelNm === 'ACLV35') {
          mode = ' (정음)'
        } else mode = ' (취침)'
      } else {
        mode = ''
      }
      return mode
    },
    getAirReserve: function () {
      this.isNotReserve = false
      this.isReserve = false
      this.loading(true)
      this.$http.post('api/config/air/getAirReserve', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.airResereList = response.data.body.airReserveList
        if (this.airResereList.length === 0) this.isNotReserve = true
        else this.isReserve = true
        if (this.showAddReserve === true) {
          this.showAddReserve = false
        }
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => console.log(error))
    },
    setAlertYn: function (seq, useYn) {
      event.preventDefault()
      if (event.target.checked === false) {
        event.target.checked = false
      }
      var ev = event
      var use = 'N'
      if (useYn === 'N') use = 'Y'
      this.loading(true)
      this.$http.post('api/config/air/airReserveUpdate', {
        hdeviceSeq: this.deviceId,
        airScheduleSeq: seq,
        scheduleYn: use
      })
      .then(response => {
        if (response.data.header.resultCode !== '20000') {
          ev.target.checked = false
          setTimeout(() => { this.loading(false) }, 200)
          this.$toast(response.data.header.resultMsg)
        } else {
          this.getAirReserve()
        }
      })
      .catch(error => console.log(error))
    },
    getTimeType: function (time) {
      if (parseInt(time.substr(0, 2)) >= 12) return '오후 ' + this.setZeroFormat(parseInt(time.substr(0, 2)) - 12) + ':' + (time.substr(2, 2))
      else return '오전 ' + this.setZeroFormat(parseInt(time.substr(0, 2))) + ':' + (time.substr(2, 2))
    },
    setNextDayCheck: function (res) {
      var startTime = parseInt(res.startTime)
      var endTime = parseInt(res.endTime)
      if (startTime - endTime >= 0) return '다음날'
      else return ''
    },
    setZeroFormat: function (val) {
      if (val === 0) {
        return '12'
      } else {
        if (parseInt(val) < 9) return '0' + val
        else return val
      }
    },
    addReserve: function () {
      this.getAirReserve()
    },
    getReserveInfo: function (res) {
      this.resInfo = res
      this.showModReserve = true
    },
    updateReserve: function () {
      this.showModReserve = false
      this.getAirReserve()
    },
    delAlertShowYn: function () {
      if (this.airResereList.length === 1) {
        this.showDelAlert = true
      } else {
        this.isReserve = false
        this.showDelReserve = true
      }
    },
    delReserveCheck: function () {
      if (this.checked.length === 0) {
        this.showDelErrAlert = true
      } else {
        this.showDelAlert = true
      }
    },
    delReserve: function () {
      var seq = this.checked.toString()
      if (this.airResereList.length === 1) seq = this.airResereList[0].airScheduleSeq
      this.loading(true)
      this.$http.post('api/config/air/airReserveDel', {
        hdeviceSeq: this.deviceId,
        airScheduleSeq: seq
      })
      .then(response => {
        this.showDelAlert = false
        this.showDelReserve = false
        this.loadingModal = false
        this.$toast('삭제되었습니다.')
        this.getAirReserve()
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
/* ui.page.css : 청정예약 없을 시 */
.section_none_menu.none_menu_btn {
    height: 88%;
}
.section_none_menu {
    /*position: absolute;
    top: 0;
    left: 0;*/
    text-align: center;
    width: 100%;
    height: 100%;
    /*padding-top: 93px;*/
}
.section_none_menu .area_none_menu {
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.wrap_percent .section_none_menu .area_none_menu,
.wrap_percent2 .section_none_menu .area_none_menu {
  margin-top: 140px;
}

.section_none_menu .area_none_menu .img {
    background: url(/images/common/sprite_info_page.png) -150px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 82px;
    height: 82px;
    margin: 0 auto;
}
.section_none_menu.none_menu_btn p {
    font-size: 1.2rem;
}
.section_none_menu .area_none_menu p {
    color: #888888;
    margin-top: 27px;
}
.section_none_menu:after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    height: 100%;
}
/* 청정예약 삭제 */
.area_reserv {
  padding-bottom: 11.5vh;
}
.area_reserv.reserv_delete li {
  padding: 19px 45px;
}
.area_reserv.reserv_delete li .checkbox_circle {
  position: absolute;
  display: inline-block;
  top: 50%;
  margin-top: -7px;
  left: 15px;
  right: 0;
}

/* ui.page.css : 공통 css 추가 */
.section_push_alarm .area_reserv li label, .section_push_alarm .area_ai li label {
    right: 15px;
}
</style>
