<template>
  <!-- 청정예약 시작시간 및 종료시간 설정팝업 -->
  <section class="example-page">
    <div class="popup_dim">
      <div class="popup" style="width: 306px;">
        <div class="popup_header">
          <h1>{{headerTxt}}시간 설정</h1>
        </div>
        <div class="popup_contents smooth-picker">
          <div class="box_time timer">
            <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
          </div>
        </div>
        <div class="popup_btn">
          <div class="btn_inline">
            <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
            <button name="remainOffTime" class="btn btn_lg_timeSetting btn_manual btn_skyblue" @click="setAlertTime">확인</button>
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
  props: ['type', 'sTime', 'eTime'],
  components: { SmoothPicker },
  data () {
    const h = []
    const m = []
    for (let i = 0; i <= 23; i++) {
      if (i <= 9) {
        i = '0' + i
      }
      h.push(i)
    }
    for (let i = 0; i <= 59; i++) {
      if (i <= 9) {
        i = '0' + i
      }
      m.push(i)
    }
    return {
      data: [
        {
          currentIndex: 0,
          flex: 5,
          list: h,
          textAlign: 'right',
          className: 'hour-group'
        },
        {
          divider: true,
          flex: 2,
          text: '시',
          textAlign: 'center',
          className: 'hour_text_group'
        },
        {
          currentIndex: 0,
          flex: 3,
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
      checkYn: 'N',
      tempIndex: 0
    }
  },
  created () {
    this.setDefaultTime(this.type)
  },
  computed: {
    headerTxt: function () {
      if (this.type === 'S') return '시작'
      else return '종료'
    }
  },
  methods: {
    setDefaultTime: function (type) {
      var time
      if (type === 'S') time = this.sTime
      else time = this.eTime
      var hour = time.substr(0, 2)
      var min = time.substr(2, 2)
      for (var i in this.data[0].list) {
        if (String(this.data[0].list[i]) === hour) {
          this.data[0].currentIndex = parseInt(i)
          break
        }
      }
      for (var j in this.data[2].list) {
        if (String(this.data[2].list[j]) === min) {
          this.data[1].currentIndex = parseInt(j)
          break
        }
      }
    },
    dataChange (gIndex, iIndex) {
      let list = []
      let currentIndex = 0
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const hour = this.data[0].list[ciList[0]]
      const min = this.data[2].list[ciList[2]]
      if (gIndex === 1) {
        this.tempIndex = iIndex
      }
      if (hour === '00' && min === '00') {
        for (let i = 1; i <= 59; i++) {
          if (i <= 9) {
            i = '0' + i
          }
          list.push(i)
        }
        this.$refs.smoothPicker.setGroupData(1, Object.assign({}, this.data[1], { currentIndex, list }))
        this.checkYn = 'Y'
      } else if (hour !== '00' && this.checkYn === 'Y') {
        for (let i = 0; i <= 59; i++) {
          if (i <= 9) {
            i = '0' + i
          }
          list.push(i)
        }
        currentIndex = this.tempIndex + 1
        this.$refs.smoothPicker.setGroupData(1, Object.assign({}, this.data[1], { currentIndex, list }))
        this.checkYn = 'N'
      }
    },
    setAlertTime () {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const hour = this.data[0].list[ciList[0]]
      const min = this.data[2].list[ciList[2]]
      this.$emit('setAlertTime', String(hour), String(min), this.type)
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
</style>
