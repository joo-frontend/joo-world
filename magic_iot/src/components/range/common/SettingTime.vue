<template>
  <!-- 팝업 -->
  <section class="example-page">
    <div class="popup_dim">
      <div class="popup" style="width:306px;">
        <div class="popup_header">
          <h1>타이머 설정</h1>
        </div>
        <div class="popup_contents smooth-picker">
          <div class="box_time timer">
            <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
          </div>
          <p class="timer_desc">설정한 시간 후에 버너가 OFF 됩니다.</p>
        </div>
        <div class="popup_btn">
          <div class="btn_inline">
            <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
            <button v-if="deviceInfo.modelKind === '0x1001'" name="bunerOffTimerOn" class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.temp1 === 0 && this.temp2 === 0, btn_skyblue: this.temp1 !== 0 || this.temp2 !== 0 }" :disabled="this.temp1 === 0 && this.temp2 === 0" @click="offRemainTimeSend">확인</button>
            <button v-if="deviceInfo.modelKind === '0x0801'" name="bunerOffTimerOn" class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.temp1 === 0 && this.temp2 === 0, btn_skyblue: this.temp1 !== 0 || this.temp2 !== 0 }" :disabled="this.temp1 === 0 && this.temp2 === 0" @click="offRemainTimeSend">확인</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 팝업 -->
  </section>
</template>

<script>
import { SmoothPicker } from 'vue-smooth-picker'
export default {
  name: 'example-page',
  props: ['deviceInfo', 'curBunerIndex', 'range'],
  components: { SmoothPicker },
  data () {
    // 2구 및 3구 가스레인지(01:00) / 전기레인지(00:44) / 인덕션 가스레인지(00:01)
    var maxHour = 23
    var curBunner = this.range.bunerDetail[parseInt(this.curBunerIndex - 1)]
    var hour = curBunner.offRemainTime.substr(0, 2)
    var min = curBunner.offRemainTime.substr(2, 2)

    if (this.deviceInfo.modelKind !== '0x0801') { // 전기레인지
      if (hour === '00' && min === '00') {
        hour = '01'
        min = '01'
      }
      if (curBunner.kepping === 2) {
        maxHour = 9
      } else {
        if (curBunner.switchType === 9) maxHour = 0 // 9 0시간
        else if (curBunner.switchType >= 7 && curBunner.switchType <= 8) maxHour = 1 // 7~8 1시간
        else if (curBunner.switchType >= 2 && curBunner.switchType <= 6) maxHour = 2 // 2~6 2시간
        else maxHour = 9 // 1 9시간
      }
    } else { // 가스레인지
      if (hour === '00' && min === '00') {
        hour = '01'
      }
    }

    var hourIndex = 0
    var minIndex = 0
    const h = []
    const m = []
    for (let i = 0; i <= maxHour; i++) {
      if (Number(hour) === i) {
        hourIndex = i
      }
      if (i <= 9) {
        i = '0' + i
      }
      h.push(i)
    }
    for (let i = 0; i <= 59; i++) {
      if (Number(min) === i) {
        minIndex = i
      }
      if (i <= 9) {
        i = '0' + i
      }
      m.push(i)
    }
    return {
      data: [
        {
          currentIndex: hourIndex,
          flex: 5,
          list: h,
          textAlign: 'right',
          className: 'hour-group'
        },
        {
          divider: true,
          flex: 2,
          text: '시간',
          textAlign: 'center',
          className: 'hour_text_group'
        },
        {
          divider: true,
          flex: 1
        },
        {
          currentIndex: minIndex,
          flex: 2,
          list: m,
          textAlign: 'center',
          className: 'min-group'
        },
        {
          divider: true,
          flex: 4,
          text: '분',
          textAlign: 'left',
          className: 'bun_text_group'
        }
      ],
      max: '',
      temp1: hourIndex,
      temp2: minIndex
    }
  },
  methods: {
    dataChange (gIndex, iIndex) {
      if (gIndex === 0) {
        this.temp1 = iIndex
      }
      if (gIndex === 3) {
        this.temp2 = iIndex
      }
    },
    offRemainTimeSend () {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const hour = this.data[0].list[ciList[0]]
      const min = this.data[3].list[ciList[3]]
      this.$emit('offRemainTimeSend', hour, min)
    }
  }
}
</script>

<style>
/* 팝업 타이머 설정 */
.popup_contents p {
    font-size: 1.0rem;
}
/* 공통 타이머 설정 팝업 */
.timer_desc {
    margin-bottom: 15px;
}
.box_time {
    position: relative;
    /*height: 290px;*/
    padding-top: 15px;
}
.box_time li {
    font-size: 2.3rem;
    line-height: 50px;
    color: #cacaca;
    width: 66px;
    text-align: left;
}
.box_time.timer li {
    font-size: 3.2rem;
}
.box_time li.current{
    font-size: 3.2rem;
    text-indent: -6px;
    color: #333333;
}
.box_time.timer li.current {
    text-indent: -1px;
    font-size: 3.2rem;
}

.box_time li.current span {
    margin-left: 5px;
    font-size: 1.5rem;
}
.box_time.unit li.current span {
    margin-left: 8px;
}

.box_time.timer li.current span {
    margin-left: 0;
}

.box_time .hours {
    position: absolute;
    left: 90px;

}
.box_time .min {
    position: absolute;
    left: 165px;
}
.unit_time {
  position: absolute;
  top: 70px;
}
.unit_time span {
  padding-left: 100px;
  font-size: 1.8rem;
}
.unit_time span.sec {
  padding-left: 130px;
}
</style>
