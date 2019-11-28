<template>
  <!-- 요리가이드(보온)타이머설정:시간/분/초-->
  <!-- <section class="example-page"> -->
    <div class="popup_dim">
    <div class="popup"  style="width:307px;">
      <div class="popup_header">
          <h1>요리시간</h1>
          <button class="reset" @click="settingClick('time')"><span class="sprite sprite_common sprite_update_lg"></span>초기화</button>
      </div>
      <div class="popup_contents popup_double">
        <div class="box_time">
          <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
        </div>
      </div>
      <div class="popup_btn">
          <div class="btn_inline">
              <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
              <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.tempHour === 0 &&this.tempMin === 0 && this.tempSec === 0,
                btn_skyblue: this.tempHour !== 0 || this.tempMin !== 0 || this.tempSec !== 0 }"
                :disabled="this.tempHour === 0 &&this.tempMin === 0 && this.tempSec === 0" @click="stompClientSend('time')">오븐전송</button>
          </div>
      </div>
    </div>
  </div>
    <!-- 팝업 -->
  <!-- </section> -->
</template>

<script>
import { SmoothPicker } from 'vue-smooth-picker'
export default {
  name: 'example-page',
  props: ['recipe'],
  components: { SmoothPicker },
  data () {
    const m = []
    if (this.recipe.cookType === 'S' && this.recipe.cookCateType === 'D') {
      if (typeof this.recipe.cookSec !== 'undefined') {
        this.recipe.secDefault = this.recipe.cookSec
      } else {
        this.recipe.secDefault = ''
      }
      if (typeof this.recipe.cookMin !== 'undefined') {
        this.recipe.minDefault = this.recipe.cookMin
      } else {
        this.recipe.minDefault = ''
      }
      if (typeof this.recipe.cookHour !== 'undefined') {
        this.recipe.hourDefault = this.recipe.cookHour
      } else {
        this.recipe.hourDefault = ''
      }
    }
    var minIndex = Number(this.recipe.minDefault)
    for (let i = 0; i <= 59; i++) {
      if (i <= 9) {
        i = '0' + i
      }
      m.push(String(i))
    }

    var secIndex = 0
    var secList = ['00', '10', '20', '30', '40', '50']
    var secDefault = this.recipe.secDefault
    for (let i = 0; i < secList.length; i++) {
      if (secDefault === secList[i]) {
        secIndex = i
      }
    }

    var hourIndex = 0
    var hourList = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
    var hourDefault = this.recipe.hourDefault
    for (let i = 0; i < hourList.length; i++) {
      if (hourDefault === hourList[i]) {
        hourIndex = i
      }
    }

    return {
      data: [
        {
          currentIndex: hourIndex,
          flex: 2,
          list: hourList,
          textAlign: 'right',
          className: 'hour-group'
        },
        {
          divider: true,
          flex: 2,
          text: '시간',
          textAlign: 'center',
          className: 'bun-group'
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
          flex: 1,
          text: '분',
          textAlign: 'left',
          className: 'bun-group'
        },
        {
          currentIndex: secIndex,
          flex: 2,
          list: secList,
          textAlign: 'right',
          className: 'sec-group'
        },
        {
          divider: true,
          flex: 2,
          text: '초',
          textAlign: 'center',
          className: 'cho-group'
        }
      ],
      tempHour: hourIndex,
      tempMin: minIndex,
      tempSec: secIndex,
      index1: hourIndex,
      index2: minIndex,
      index3: secIndex
    }
  },
  methods: {
    dataChange (gIndex, iIndex) {
      if (gIndex === 0) {
        this.tempHour = iIndex
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data[0].list[ciList[0]]
        if (Number(hour) === 9) {
          let currentIndex = 0
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
          this.$refs.smoothPicker.setGroupData(4, Object.assign({}, this.data[4], { currentIndex }))
        }
      }
      if (gIndex === 2) {
        this.tempMin = iIndex
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data[0].list[ciList[0]]
        if (Number(hour) === 9) {
          let currentIndex = this.tempHour - 1
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
        }
      }
      if (gIndex === 4) {
        this.tempSec = iIndex
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data[0].list[ciList[0]]
        if (Number(hour) === 9) {
          let currentIndex = this.tempHour - 1
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
        }
      }
    },
    settingClick (type) {
      let currentIndex = 0
      currentIndex = this.index2
      this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
      currentIndex = this.index1
      this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
      currentIndex = this.index3
      this.$refs.smoothPicker.setGroupData(4, Object.assign({}, this.data[4], { currentIndex }))
      this.$refs.smoothPicker.correctionCurrentIndex(event, 0)
      this.tempMin = this.index2
      this.tempSec = this.index3
      this.tempHour = this.index1
    },
    stompClientSend (type) {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const hour = this.data[0].list[ciList[0]]
      const min = this.data[2].list[ciList[2]]
      const sec = this.data[4].list[ciList[4]]
      var arr = []
      if (typeof this.recipe.name === 'undefined') {
        if (typeof this.recipe.cookSeq === 'undefined') {
          arr[0] = this.recipe.seq
        } else {
          arr[0] = this.recipe.cookSeq
        }
      } else {
        if (this.recipe.name.indexOf('보온') > 0) {
          arr[0] = '127'
        }
      }
      arr[1] = 40
      arr[2] = (((parseInt(hour) * 60) * 60) + (parseInt(min) * 60) + parseInt(sec))
      this.$emit('stompClientSend', 'cookSetting', arr.toString())
    }
  }
}
</script>

<style>
/* 팝업 타이머 설정 */
.popup_contents p {
    font-size: 1.2rem;
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
.box_time .sec {
    position: absolute;
    left: 223px;
}
.box_time.cook_time li.current {
    position: relative;
}
.box_time.cook_time .min .current:after {
    content: ':';
    position: absolute;
    right: -16px;
    top: -1px;
}
.box_time.cook_time {
    height: 189px;
    padding-top: 20px;
}
.box_time.cook_time .min {
    left: 80px;
}
.box_time.cook_time .sec {
    left: 190px;
}
.popup .popup_contents {
    display: inline-block;
    position: relative;
    width: 306px;
    vertical-align: middle;
}

.box_time.unit {
    height: 185px;
}
.box_time.unit .cook_unit {
    position: absolute;
    left: 133px;
}

.box_time.unit + .timer_desc {
    margin-bottom: 4px;
    font-size: 1.3rem;
}
.box_time.unit li.current span {
    font-size: 1.7rem;
    font-weight: bold;
}

.popup_contents.popup_double {
    /*border-bottom: 1px solid #ededed;*/
}
.popup_contents.popup_double .box_time {
    /*padding-top: 0;*/
    padding-top: 15px;
}
.popup_contents.popup_double .box_time.heat_time {
    height: 160px;
}
.popup_contents.popup_double .box_time.unit {
    height: 158px;
}
.popup_contents.popup_double .box_time.cook_time {
    /*height: 160px;*/
    height:138px;
}
.popup_header .reset {
    position: absolute;
    right: 10px;
    top: 13px;
    padding-left: 18px;
    font-size: 1.3rem;
    color: #888888;
}
.popup_header .reset .sprite_update_lg {
    position: absolute;
    top: 3px;
    left: 0;

}
.popup_contents.popup_double .box_time.cook_time.cook_time_set {
    padding-top: 15px;
    height: 80px;
}
.popup_contents.popup_double .section_tab {
    padding: 8px 15px;
}
</style>
