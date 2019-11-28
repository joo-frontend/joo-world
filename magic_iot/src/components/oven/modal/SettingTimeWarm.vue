<template>
  <!-- 팝업 -->
  <!-- 가이드 레인지 타이머 설정팝업(전력/분/초) -->
  <section class="example-page">
    <div class="popup_dim">
      <div class="popup"  style="width:307px;" v-if="this.recipe.wattDefault !== null && this.recipe.cookType === 'M'">
        <div class="popup_header" >
            <h1>전력(W)</h1>
            <button class="reset" @click="settingClick('watt')"><span class="sprite sprite_common sprite_update_lg" ></span>초기화</button>
        </div>
        <div class="popup_contents popup_double">
          <div class="box_time">
            <smooth-picker ref="smoothPicker2" :data="data2" :change="dataChange2"/>
          </div>
        </div>
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
                <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.temp1 === 0 && this.temp2 === 0, btn_skyblue: this.temp1 !== 0 || this.temp2 !== 0 }" :disabled="this.temp1 === 0 && this.temp2 === 0" @click="offRemainTimeSend('watt')">확인</button>
            </div>
        </div>
    </div>
    <!-- 가이드 레인지 타이머 설정팝업(분/초) -->
    <div class="popup"  style="width:307px;" v-else>
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
              <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.temp1 === 0 && this.temp2 === 0, btn_skyblue: this.temp1 !== 0 || this.temp2 !== 0 }" :disabled="this.temp1 === 0 && this.temp2 === 0" @click="offRemainTimeSend('time')">확인</button>
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
    const m = []
    const wattList = ['200', '400', '600', '800']
    var wattIndex = 0
    var minIndex = Number(this.recipe.minDefault)
    var minMax = Number(this.recipe.minSet.split(',')[1])
    for (let i = 0; i <= minMax; i++) {
      if (i <= 9) {
        i = '0' + i
      }
      m.push(String(i))
    }

    for (let i = 0; i < wattList.length; i++) {
      if (this.recipe.wattDefault === wattList[i]) {
        wattIndex = i
      }
    }

    var secIndex = 0
    var secList = ['00', '10', '20', '30', '40', '50']
    var secDefault = this.recipe.secDefault
    for (let i = 0; i < secList.length; i++) {
      if (secDefault === secList[i]) {
        secIndex = i
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
          text: '분 : ',
          textAlign: 'center',
          className: 'bun-group'
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
          currentIndex: wattIndex,
          flex: 4,
          list: wattList,
          textAlign: 'right',
          className: 'data2-group'
        },
        {
          divider: true,
          flex: 3,
          text: 'W',
          textAlign: 'left',
          className: 'bun-group'
        }
      ],
      temp1: minIndex,
      temp2: secIndex,
      index1: wattIndex,
      index2: minIndex
    }
  },
  methods: {
    dataChange (gIndex, iIndex) {
      if (gIndex === 0) {
        this.temp1 = iIndex
      }
      if (gIndex === 2) {
        this.temp2 = iIndex
      }
    },
    settingClick (type) {
      let currentIndex = 0
      if (type === 'watt') {
        currentIndex = this.index1
        this.$refs.smoothPicker2.setGroupData(0, Object.assign({}, this.data2[0], { currentIndex }))
        this.$refs.smoothPicker2.correctionCurrentIndex(event, 0)
      } else if (type === 'time') {
        currentIndex = this.index2
        this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
        currentIndex = 0
        this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
        this.$refs.smoothPicker.correctionCurrentIndex(event, 0)
        this.temp1 = this.index2
        this.temp2 = 0
      }
    },
    offRemainTimeSend (type) {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const min = this.data[0].list[ciList[0]]
      const sec = this.data[2].list[ciList[2]]
      let temp = null
      if (type === 'watt') {
        const ciList2 = this.$refs.smoothPicker2.getCurrentIndexList()
        temp = this.data2[0].list[ciList2[0]]
      }
      this.$emit('offRemainTimeSend', '00', min, sec, temp)
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
