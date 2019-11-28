<template>
  <!-- 팝업 -->
  <!-- 요리가이드 시간/분/온도 타이머 팝업-->
  <section class="example-page">
    <div class="popup_dim">
      <div class="popup"  style="width:307px;" v-if="this.recipe.tempDefault !== null">
        <div class="popup_header" >
            <h1>요리온도</h1>
            <button class="reset" @click="settingClick('temp')"><span class="sprite sprite_common sprite_update_lg" ></span>초기화</button>
        </div>
        <div class="popup_contents popup_double">
          <div class="box_time">
            <smooth-picker ref="smoothPicker2" :data="data2"/>
          </div>
        </div>
        <div class="popup_header">
            <h1>요리시간</h1>
            <button class="reset" @click="settingClick('time')"><span class="sprite sprite_common sprite_update_lg"></span>초기화</button>
        </div>
        <div class="popup_contents popup_double" v-if="this.recipe.cookCateSeq !== '7' && this.recipe.cookCateSeq !== '6'">
          <div class="box_time">
            <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
          </div>
        </div>
        <div class="popup_contents popup_double" v-if="this.recipe.cookCateSeq === '7' || this.recipe.cookCateSeq === '6'">
          <div class="box_time">
            <smooth-picker ref="smoothPicker" :data="data3" :change="dataChange3"/>
          </div>
        </div>
        <div class="popup_btn"  v-if="this.recipe.hourDefault === null && this.recipe.cookCateSeq !== '7' && this.recipe.cookCateSeq !== '6'">
            <div class="btn_inline">
                <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
                <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.tempMin === 0 && this.tempSec === 0, btn_skyblue: this.tempMin !== 0 || this.tempSec !== 0 }" :disabled="this.tempMin === 0 && this.tempSec === 0" @click="offRemainTimeSend('temp')">확인</button>
            </div>
        </div>
        <div class="popup_btn"  v-if="this.recipe.hourDefault !== null || this.recipe.cookCateSeq === '7' || this.recipe.cookCateSeq === '6'">
            <div class="btn_inline">
                <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
                <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.tempHour === 0 &&this.tempMin === 0 && this.tempSec === 0,
                  btn_skyblue: this.tempHour !== 0 || this.tempMin !== 0 || this.tempSec !== 0 }"
                  :disabled="this.tempHour === 0 &&this.tempMin === 0 && this.tempSec === 0" @click="offRemainTimeSend('temp')">확인</button>
            </div>
        </div>
    </div>
    <!-- 요리시간팝업:분/초-->
    <div class="popup" style="width:307px;" v-else>
      <div class="popup_header">
          <h1>요리시간</h1>
          <button class="reset" @click="settingClick('time')"><span class="sprite sprite_common sprite_update_lg"></span>초기화</button>
      </div>
      <div class="popup_contents popup_double" v-if="this.recipe.hourDefault === null">
        <div class="box_time">
          <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
        </div>
      </div>
      <div class="popup_contents popup_double" v-if="this.recipe.hourDefault !== null">
        <div class="box_time">
          <smooth-picker ref="smoothPicker" :data="data3" :change="dataChange3"/>
        </div>
      </div>
      <div class="popup_btn"  v-if="this.recipe.hourDefault === null">
          <div class="btn_inline">
              <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
              <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.tempMin === 0 && this.tempSec === 0, btn_skyblue: this.tempMin !== 0 || this.tempSec !== 0 }" :disabled="this.tempMin === 0 && this.tempSec === 0" @click="offRemainTimeSend('time')">확인</button>
          </div>
      </div>
      <div class="popup_btn"  v-if="this.recipe.hourDefault !== null">
          <div class="btn_inline">
              <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
              <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.tempHour === 0 &&this.tempMin === 0 && this.tempSec === 0,
                btn_skyblue: this.tempHour !== 0 || this.tempMin !== 0 || this.tempSec !== 0 }"
                :disabled="this.tempHour === 0 &&this.tempMin === 0 && this.tempSec === 0" @click="offRemainTimeSend('time')">확인</button>
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
  props: ['recipe'],
  components: { SmoothPicker },
  data () {
    if (this.recipe.cookType === 'M' && this.recipe.cookCateType === 'B') {
      if (typeof this.recipe.cookSec !== 'undefined' && this.recipe.cookSec !== null) {
        this.recipe.secDefault = this.recipe.cookSec
      }
      if (typeof this.recipe.cookMin !== 'undefined' && this.recipe.cookMin !== null) {
        this.recipe.minDefault = this.recipe.cookMin
      }
      if (typeof this.recipe.cookHour !== 'undefined' && this.recipe.cookHour !== null) {
        this.recipe.hourDefault = this.recipe.cookHour
      }
      if (typeof this.recipe.cookTemp !== 'undefined' && this.recipe.cookTemp !== null) {
        this.recipe.tempDefault = this.recipe.cookTemp
      }
    }
    const m = []
    var tempList
    if (Number(this.recipe.tempDefault) >= 100) {
      tempList = ['100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200', '210', '220', '230', '240', '250']
    } else {
      tempList = ['40', '45', '50', '55', '60', '65', '70', '75', '80']
    }
    var tempIndex = 0
    for (let i = 0; i < tempList.length; i++) {
      if (this.recipe.tempDefault === tempList[i]) {
        tempIndex = i
      }
    }
    var hourList = []
    var hourIndex = 0
    var hourMax = 8
    if (this.recipe.hourSet != null) {
      hourMax = Number(this.recipe.hourSet.split(',')[1])
      for (let i = 0; i <= hourMax; i++) {
        if (i <= 9) {
          i = '0' + i
        }
        hourList.push(String(i))
      }
    } else {
      for (let i = 0; i <= 8; i++) {
        if (i <= 9) {
          i = '0' + i
        }
        hourList.push(String(i))
      }
    }

    if (this.recipe.hourDefault != null) {
      var hourDefault = ''
      if (this.recipe.hourDefault.length < 2) {
        hourDefault = '0' + this.recipe.hourDefault
      } else {
        hourDefault = this.recipe.hourDefault
      }
      for (let i = 0; i <= hourMax; i++) {
        if (hourDefault === hourList[i]) {
          hourIndex = i
        }
      }
    }

    var minIndex = Number(this.recipe.minDefault)
    var minMax = Number(this.recipe.minSet.split(',')[1])
    for (let i = 0; i <= minMax; i++) {
      if (i <= 9) {
        i = '0' + i
      }
      m.push(String(i))
    }

    var secIndex = 0
    var secList = ['00', '10', '20', '30', '40', '50']
    if (this.recipe.secDefault !== null) {
      var secDefault = this.recipe.secDefault
      for (let i = 0; i < secList.length; i++) {
        if (secDefault === secList[i]) {
          secIndex = i
        }
      }
    }
    return {
      data: [
        {
          currentIndex: minIndex,
          flex: 5,
          list: m,
          textAlign: 'right',
          className: 'min-group'
        },
        {
          divider: true,
          flex: 2,
          text: '분',
          textAlign: 'center',
          className: 'bun-group'
        },
        {
          divider: true,
          flex: 1,
          text: ':'
        },
        {
          currentIndex: secIndex,
          flex: 3,
          list: secList,
          textAlign: 'center',
          className: 'sec-group'
        },
        {
          divider: true,
          flex: 4,
          text: '초',
          textAlign: 'left',
          className: 'cho-group'
        }
      ],
      data2: [
        {
          currentIndex: tempIndex,
          flex: 4,
          list: tempList,
          textAlign: 'right',
          className: 'data2-group'
        },
        {
          divider: true,
          flex: 3,
          text: '°C',
          textAlign: 'left',
          className: 'bun-group'
        }
      ],
      data3: [
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
      tempMin: minIndex,
      tempSec: secIndex,
      index1: tempIndex,
      index2: minIndex,
      index3: secIndex,
      index4: hourIndex,
      tempHour: hourDefault,
      minMax: minMax,
      hourMax: hourMax
    }
  },
  methods: {
    dataChange (gIndex, iIndex) {
      if (gIndex === 0) {
        this.tempMin = iIndex
        if (this.recipe.hourDefault === null && this.recipe.cookCateSeq !== '7') {
          const ciList = this.$refs.smoothPicker.getCurrentIndexList()
          const min = this.data[0].list[ciList[0]]
          if (this.minMax === Number(min)) {
            let currentIndex = 0
            this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
          }
        }
      }
      if (gIndex === 3) {
        this.tempSec = iIndex
        if (this.recipe.hourDefault === null && this.recipe.cookCateSeq !== '7') {
          const ciList = this.$refs.smoothPicker.getCurrentIndexList()
          const min = this.data[0].list[ciList[0]]
          if (this.minMax === Number(min)) {
            let currentIndex = 0
            currentIndex = this.tempMin - 1
            this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
          }
        }
      }
    },
    dataChange3 (gIndex, iIndex) {
      if (gIndex === 0) {
        this.tempHour = iIndex
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data3[0].list[ciList[0]]
        if (this.hourMax === Number(hour)) {
          let currentIndex = 0
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data3[2], { currentIndex }))
          this.$refs.smoothPicker.setGroupData(4, Object.assign({}, this.data3[4], { currentIndex }))
        }
      }
      if (gIndex === 2) {
        this.tempMin = iIndex
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data3[0].list[ciList[0]]
        if (this.hourMax === Number(hour)) {
          let currentIndex = this.tempHour - 1
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data3[0], { currentIndex }))
        }
      }
      if (gIndex === 4) {
        this.tempSec = iIndex
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data3[0].list[ciList[0]]
        if (this.hourMax === Number(hour)) {
          let currentIndex = this.tempHour - 1
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data3[0], { currentIndex }))
        }
      }
    },
    settingClick (type) {
      let currentIndex = 0
      if (type === 'temp') {
        currentIndex = this.index1
        this.$refs.smoothPicker2.setGroupData(0, Object.assign({}, this.data2[0], { currentIndex }))
        this.$refs.smoothPicker2.correctionCurrentIndex(event, 0)
      } else if (type === 'time') {
        if (this.recipe.hourDefault === null && this.recipe.cookCateSeq !== '7') {
          currentIndex = this.index2
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
          currentIndex = this.index3
          this.$refs.smoothPicker.setGroupData(3, Object.assign({}, this.data[3], { currentIndex }))
          this.$refs.smoothPicker.correctionCurrentIndex(event, 0)
          this.tempMin = this.index2
          this.tempSec = this.index3
        } else {
          currentIndex = this.index2
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data3[2], { currentIndex }))
          currentIndex = this.index3
          this.$refs.smoothPicker.setGroupData(4, Object.assign({}, this.data3[4], { currentIndex }))
          currentIndex = this.index4
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data3[0], { currentIndex }))
          this.$refs.smoothPicker.correctionCurrentIndex(event, 0)
          this.tempMin = this.index2
          this.tempSec = this.index3
        }
      }
    },
    offRemainTimeSend (type) {
      if (this.recipe.hourDefault === null && this.recipe.cookCateSeq !== '7') {
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const min = this.data[0].list[ciList[0]]
        const sec = this.data[3].list[ciList[3]]
        let temp = null
        if (type === 'temp') {
          const ciList2 = this.$refs.smoothPicker2.getCurrentIndexList()
          temp = this.data2[0].list[ciList2[0]]
        }
        this.$emit('offRemainTimeSend', '00', min, sec, temp)
      } else {
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const hour = this.data3[0].list[ciList[0]]
        const min = this.data3[2].list[ciList[2]]
        const sec = this.data3[4].list[ciList[4]]
        let temp = null
        if (type === 'temp') {
          const ciList2 = this.$refs.smoothPicker2.getCurrentIndexList()
          temp = this.data2[0].list[ciList2[0]]
        }
        this.$emit('offRemainTimeSend', hour, min, sec, temp)
      }
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
    border-bottom: 1px solid #ededed;
}
.popup_contents.popup_double .box_time {
    padding-top: 15px;
}
.popup_contents.popup_double .box_time.heat_time {
    height: 160px;
}
.popup_contents.popup_double .box_time.unit {
    /*height: 158px;*/
    height:131px;
}
.popup_contents.popup_double .box_time.cook_time {
    /*height: 160px;*/
    height: 138px;
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
