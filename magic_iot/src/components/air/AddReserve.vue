<template>
  <div>
    <!-- section_push_alarm -->
    <section class="section_push_alarm section_air_setting">
      <div class="wrap_contents_01">
        <p class="alarm_title">
            시간
        </p>
        <ul class="area_reserv_contents" style="height: 24.2vh;">
          <li class="sub_menu">
            <p>종일</p>
            <label><input type="checkbox" class="checkbox_toggle_lg" v-model="alldayYn" @click="setAllday()"></label>
          </li>
          <li class="box_setting_time">
            <div class="time_choice">
              <!--
              박스내 텍스트 길어질때  btn_setting_time_lg 클래스 사용
              박스내 텍스트 짧을때 btn_setting_time 클래스 사용
              -->
              <p>
                  <span class="sprite sprite_air_purify sprite_alarm"></span>
                  시작시간
              </p>
              <button class="btn_setting_time" :disabled="alldayYn" @click="showTimeModal = 'S'">{{ startTime }}</button>
            </div>
            <div class="time_choice">
              <p>
                  <span class="sprite sprite_air_purify sprite_alarm"></span>
                  종료시간
              </p>
              <button class="btn_setting_time" :class="endTimeTxtBox" :disabled="alldayYn" @click="showTimeModal = 'E'">{{ endTime }}</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="wrap_contents_02">
        <p class="alarm_title">
            반복
        </p>
        <ul class="area_reserv_contents" style="height: 20.9vh;">
          <li class="sub_menu sub_menu_line_2">
            <p>매주 반복 </p>
            <label><input type="checkbox" class="checkbox_toggle_lg" :disabled="repeatDay === ''" v-model="repeatYn"></label>
            <p class="setting_day">{{ setRepeatDay }}</p>
          </li>
          <li class="box_setting_day">
            <div class="day_choice">
              <div class="box_day"><input type="checkbox" id="7" class="day" :checked="checkDay(7)" @click="setAlertDay(7)"><label for="7">일</label></div>
              <div class="box_day"><input type="checkbox" id="1" class="day" :checked="checkDay(1)" @click="setAlertDay(1)"><label for="1">월</label></div>
              <div class="box_day"><input type="checkbox" id="2" class="day" :checked="checkDay(2)" @click="setAlertDay(2)"><label for="2">화</label></div>
              <div class="box_day"><input type="checkbox" id="3" class="day" :checked="checkDay(3)" @click="setAlertDay(3)"><label for="3">수</label></div>
              <div class="box_day"><input type="checkbox" id="4" class="day" :checked="checkDay(4)" @click="setAlertDay(4)"><label for="4">목</label></div>
              <div class="box_day"><input type="checkbox" id="5" class="day" :checked="checkDay(5)" @click="setAlertDay(5)"><label for="5">금</label></div>
              <div class="box_day"><input type="checkbox" id="6" class="day" :checked="checkDay(6)" @click="setAlertDay(6)"><label for="6">토</label></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="wrap_contents_03">
        <p class="alarm_title">
            모드
        </p>
        <ul class="area_reserv_contents" style="height: 16.9vh;">
          <li>
              <p><input type="radio" class="input_radio_md setting_mode" name="setting_mode" value="0x8001" v-model="menuCode">자동모드</p>
          </li>
          <li>
              <p><input type="radio" class="input_radio_md setting_mode" name="setting_mode" value="0xa001" v-model="menuCode">{{ quietTxt }}모드</p>
          </li>
        </ul>
      </div>
    </section>
    <!-- //section_push_alarm -->

    <section class="section_btn bottom_btn">
      <div class="area_btn btn_inline">
        <button class="btn btn_lg btn_skyblue btn_block" @click="$emit('close')">취소</button>
        <button class="btn btn_lg btn_blue btn_block" @click="addReserve">저장</button>
      </div>
    </section>

    <setting-time-modal v-if="showTimeModal === 'S' || showTimeModal === 'E'" v-on:setAlertTime="setAlertTime" :type="showTimeModal" :sTime="modStTime" :eTime="modEtTime" @close="showTimeModal = false"/>
    <alert-modal v-show="showAlertModal" @ok="showAlertModal = false" @close="showAlertModal = false">
      <h3 slot="body">{{ errorMsg }}</h3>
    </alert-modal>
  </div>
</template>
<script>
import SettingTimeModal from '@/components/air/modal/SettingTime'
import AlertModal from '@/components/common/modal/Alert'

export default {
  name: 'addReservation',
  props: ['deviceInfo'],
  components: { SettingTimeModal, AlertModal },
  data () {
    return {
      errorMsg: '',
      modEtTime: '',
      modStTime: '',
      repeatDay: '',
      startTime: '',
      endTime: '',
      menuCode: '0x8001',
      scheduleYn: 'Y',
      repeatYn: false,
      alldayYn: false,
      showTimeModal: false,
      showAlertModal: false
    }
  },
  created () {
    this.setTime()
  },
  computed: {
    quietTxt: function () {
      if (this.deviceInfo.modelNm === 'ACLV35' || this.deviceInfo.modelNm === 'ACLV35') {
        return '정음'
      } else return '취침'
    },
    setRepeatDay: function () {
      var day = this.repeatDay
      var repeat = ''
      if (repeat !== '0') {
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
      if (this.repeatYn) repeat += (' 반복(매주)')
      return repeat
    },
    endTimeTxtBox: function () {
      if (this.endTime.indexOf('다음날') !== -1) {
        return 'btn_setting_time_lg'
      } else return 'btn_setting_time'
    }
  },
  methods: {
    setAllday: function () {
      if (event.target.checked) {
        this.modStTime = '0000'
        this.modEtTime = '0000'
        this.startTime = this.getTimeType(this.modStTime)
        this.endTime = this.setNextDayCheck(this.modStTime, this.modEtTime) + this.getTimeType(this.modEtTime)
        this.alldayYn = true
      }
    },
    setTime: function () {
      var date = new Date()
      var end = this.getTimeType(this.setZeroFormat(this.calHour(date.getHours() + 2)) + '00')
      this.startTime = this.getTimeType(this.setZeroFormat(this.calHour(date.getHours() + 1)) + '00')
      this.endTime = this.setNextDayCheck(this.startTime, end) + end
      this.modStTime = this.setZeroFormat(this.calHour(date.getHours() + 1)) + '00'
      this.modEtTime = this.setZeroFormat(this.calHour(date.getHours() + 2)) + '00'
    },
    calHour: function (hour) {
      if (parseInt(hour) >= 24) return parseInt(hour) - 24
      else return hour
    },
    checkDay: function (day) {
      if (this.repeatDay.indexOf(day) !== -1) {
        return true
      } else return false
    },
    getTimeType: function (time) {
      if (parseInt(time.substr(0, 2)) >= 12) return '오후 ' + this.setZeroFormat(parseInt(time.substr(0, 2)) - 12) + ':' + (time.substr(2, 2))
      else return '오전 ' + this.setZeroFormat(parseInt(time.substr(0, 2))) + ':' + (time.substr(2, 2))
    },
    setAlertDay: function (day) {
      var dayArr
      var temp = ''
      if (event.target.checked) {
        dayArr = (this.repeatDay + String(day)).split('')
        dayArr.sort(function (a, b) {
          return parseInt(a) - parseInt(b)
        })
        for (var index in dayArr) {
          temp += dayArr[index]
        }
        if (temp.substr(temp.length - 1) === '7') {
          this.repeatDay = temp.substr(temp.length - 1) + temp.substr(0, temp.length - 1)
        } else this.repeatDay = temp
        event.target.checked = true
      } else {
        this.repeatDay = this.repeatDay.replace(String(day), '')
        if (this.repeatDay === '') this.repeatYn = false
        event.target.checked = false
      }
    },
    setAlertTime: function (hour, min, type) {
      if (type === 'S') {
        this.startTime = this.getTimeType(hour + min)
        this.modStTime = hour + min
        this.endTime = this.setNextDayCheck(this.modStTime, this.modEtTime) + this.getTimeType(this.modEtTime)
      } else {
        this.startTime = this.getTimeType(this.modStTime)
        this.endTime = this.setNextDayCheck(this.modStTime, hour + min) + this.getTimeType(hour + min)
        this.modEtTime = hour + min
      }
      this.showTimeModal = false
    },
    setNextDayCheck: function (startTime, endTime) {
      var st = parseInt(startTime)
      var et = parseInt(endTime)
      if (st - et >= 0) return '다음날 '
      else return ''
    },
    setZeroFormat: function (val) {
      if (parseInt(val) < 9) {
        if (parseInt(val) === 0) return '12'
        else return '0' + val
      } else return val
    },
    addReserve: function () {
      this.$http.post('api/config/air/setAirReserve', {
        hdeviceSeq: this.deviceInfo.hdeviceSeq,
        repeatDay: this.repeatDay,
        startTime: this.modStTime,
        endTime: this.modEtTime,
        menuCode: this.menuCode,
        scheduleYn: 'Y',
        repeatYn: this.repeatYn === true ? 'Y' : 'N',
        alldayYn: this.alldayYn === true ? 'Y' : 'N'
      })
      .then(response => {
        if (response.data.header.resultCode !== '20000') {
          this.errorMsg = response.data.header.resultMsg
          this.showAlertModal = true
        } else {
          this.$emit('addReserve')
        }
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style>
/* ui.page.css : 청정기 청정예약 추가 */
.section_push_alarm.section_air_setting {
    height: 74vh;
}
.section_push_alarm.section_air_setting .alarm_title {
    height: 4vh;
    line-height:  4vh;
}
.section_push_alarm .area_reserv_contents {
    border-bottom: #e5e5e5 1px solid;
}
.section_push_alarm .area_reserv_contents li {
  height: 8.4vh;
    padding: 0 15px;
}
.section_push_alarm .area_reserv_contents li:last-child {
    border: 0;
}
.section_push_alarm .area_reserv_contents li.sub_menu {
    padding:0;
    margin: 0 15px;
}

.section_push_alarm .area_reserv_contents li p {
  line-height: 8.4vh;
}
.section_push_alarm .area_reserv_contents li.sub_menu_line_2 {
  padding-top: 19px;
  height:10.4vh;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_push_alarm .area_reserv_contents li.sub_menu_line_2 {
    padding-top: 14px;
  }
}
@media all and (min-height: 700px) {
  .section_push_alarm .area_reserv_contents li.sub_menu_line_2 {
    padding-top: 24px;
  }
}
.section_push_alarm .area_reserv_contents li.sub_menu_line_2 p {
  line-height: 20px;
}
.section_push_alarm .area_reserv_contents .sub_menu .setting_day {
  /* line-height: 20px;
 height: 20px;
 margin-bottom: 6px;*/
  font-size: 1.2rem;
  color: #8f8f8f;
  line-height: 18px;
}
@media all and (max-width: 320px), (max-height: 600px) {
  .section_push_alarm .area_reserv_contents .sub_menu .setting_day {

  }
}
.section_push_alarm .area_reserv_contents li .setting_mode {
    margin-right: 12px;
}
.section_push_alarm .area_reserv_contents .box_setting_time {
    width: 100%;
  height: 15.8vh;
    padding: 8px 15px;
}
.section_push_alarm .area_reserv_contents .box_setting_time:after {
    clear:both;
    content: '';
    width: 0;
    display: table;
}
.section_push_alarm .area_reserv_contents .time_choice {
    float: left;
    width: 50%;
    position: relative;
}
.section_push_alarm .area_reserv_contents .time_choice .sprite {
    position: absolute;
    top: 2px;
    left: 0;
}
.section_push_alarm .area_reserv_contents .time_choice p {
    line-height: 24px;
    padding: 0 0 6px 24px;
    color: #666666;
}
.btn_setting_time {
  width: 156px;
  /*height: 54px;*/
  background: #f9f9f9;
  padding-left: 11px;
  line-height: 54px;
  text-align: left;
  font-size: 1.8rem;
}
.btn_setting_time.btn_setting_time_lg {
  width: 170px;
}
@media all and (max-height: 600px) {
  .btn_setting_time {
    line-height: 44px;
  }
}
@media all and (max-width: 320px) {
  .btn_setting_time {
    width: 136px;
    padding-left: 5px;
    line-height: 44px;
    text-align: left;
    font-size: 1.8rem;
  }
  .btn_setting_time.btn_setting_time_lg {
    width: 150px;
    font-size: 1.7rem;
  }
}
@media all and (min-height: 700px) {
  .btn_setting_time {
    line-height: 60px;
  }
}
@media all and (min-width: 400px) {
  .btn_setting_time {
    width: 176px;
    padding-left: 15px;
  }
  .btn_setting_time.btn_setting_time_lg {
    width: 190px;
  }
}
.section_push_alarm .area_reserv_contents .box_setting_day {
  padding: 16px 15px 0;
  height: 10.5vh;
}
@media all and (max-width: 320px),(max-height: 600px) {
  .section_push_alarm .area_reserv_contents .box_setting_day {
    padding: 11px 15px 0;
  }
}
@media all and (min-height: 700px) {
  .section_push_alarm .area_reserv_contents .box_setting_day {
    padding: 20px 15px 0;
  }
}

.box_setting_day .day_choice {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.box_setting_day .day_choice .box_day {
    position: relative;
}
.box_setting_day .day_choice .day {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
    width: 34px;
    height: 34px;
    background: #eeeeee;
    border: 1px solid #eeeeee;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: inline-block;
}
.box_setting_day .day_choice .day:checked {
    background: #2ba2f0;
    border: 1px solid #2ba2f0;
}
.box_setting_day .day_choice .day +label {
    font-size: 1.5rem;
    right: 50%;
    margin-right: -7px;
    margin-top: -10px;
}
.box_setting_day .day_choice .day:checked + label {
    color: #ffffff;
}
</style>
