<template>
  <!-- 팝업 -->
  <!-- <section class="example-page"> -->
    <div class="popup_dim">
      <div class="popup" style="width:306px;">
        <div class="popup_header">
          <h1>꺼짐예약 설정</h1>
        </div>
        <div class="popup_contents smooth-picker">
          <div class="box_time timer">
            <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
          </div>
          <p class="timer_desc">설정한 시간 후에 가습기가 OFF 됩니다.</p>
        </div>
        <div class="popup_btn">
          <div class="btn_inline">
            <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
            <button name="remainOffTime" class="btn btn_lg_timeSetting btn_manual btn_skyblue" @click="offRemainTimeSend">확인</button>
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
  props: ['time'],
  components: { SmoothPicker },
  data () {
    var hourIndex = 0
    var minIndex = 0
    const h = []
    const m = []
    for (let i = 0; i <= 23; i++) {
      if (Number(this.time.substr(0, 2)) === i) {
        hourIndex = i
      }
      if (i <= 9) {
        i = '0' + i
      }
      h.push(i)
    }
    for (let i = 0; i <= 59; i++) {
      if (Number(this.time.substr(2, 2)) === i) {
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
      checkYn: 'N',
      tempIndex: 0
    }
  },
  created () {
    if (this.time !== '0000') this.setDefaultTime()
  },
  methods: {
    dataChange (gIndex, iIndex) {
      let list = []
      let currentIndex = 0
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const hour = this.data[0].list[ciList[0]]
      const min = this.data[3].list[ciList[3]]
      if (gIndex === 3) {
        this.tempIndex = iIndex
      }
      if (hour === '00' && min === '00') {
        for (let i = 1; i <= 59; i++) {
          if (i <= 9) {
            i = '0' + i
          }
          list.push(i)
        }
        this.$refs.smoothPicker.setGroupData(3, Object.assign({}, this.data[3], { currentIndex, list }))
        this.checkYn = 'Y'
      } else if (hour !== '00' && this.checkYn === 'Y') {
        for (let i = 0; i <= 59; i++) {
          if (i <= 9) {
            i = '0' + i
          }
          list.push(i)
        }
        currentIndex = this.tempIndex + 1
        this.$refs.smoothPicker.setGroupData(3, Object.assign({}, this.data[3], { currentIndex, list }))
        this.checkYn = 'N'
      }
    },
    setDefaultTime: function () {
      var hour = this.time.substr(0, 2)
      var min = this.time.substr(2, 2)
      for (var i in this.data[0].list) {
        if (String(this.data[0].list[i]) === hour) {
          this.data[0].currentIndex = parseInt(i)
          break
        }
      }
      for (var j in this.data[1].list) {
        if (String(this.data[1].list[j]) === min) {
          this.data[1].currentIndex = parseInt(j)
          break
        }
      }
    },
    offRemainTimeSend () {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const hour = String(this.data[0].list[ciList[0]])
      const min = String(this.data[3].list[ciList[3]])
      this.$emit('stompClientSend', 'resvOff', hour + min)
    }
  }
}
</script>
