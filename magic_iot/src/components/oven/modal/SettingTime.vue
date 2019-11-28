<template>
  <!--메인 레인지 타이머 설정(분/초) 팝업-->
  <!-- <div class="example-page"> -->
    <div class="popup_dim">
      <!-- height:285px;" -->
      <div class="popup"  style="width:307px;">
          <div class="popup_header">
              <h1>요리시간</h1>
          </div>
          <div class="popup_contents popup_alone">
              <div class="box_time">
                <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
              </div>
          </div>
          <div class="box_setting_btn" :class="{btn_gray: this.checkSetting === 'N'}">
          <button value="10" @click="settingClick" :disabled="this.checkSetting === 'N'">10초</button>
          <button value="30" @click="settingClick" :disabled="this.checkSetting === 'N'">30초</button>
          <button value="60" @click="settingClick" :disabled="this.checkSetting === 'N'">1분</button>
          </div>
          <div class="popup_btn">
              <div class="btn_inline">
                  <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
                  <button class="btn btn_lg_timeSetting btn_manual" :class="{btn_gray: this.temp1 === 0 && this.temp2 === 0, btn_skyblue: this.temp1 !== 0 || this.temp2 !== 0 }" :disabled="this.temp1 === 0 && this.temp2 === 0" @click="offRemainTimeSend">오븐전송</button>
              </div>
          </div>
      </div>
    <!-- </div> -->
    <!-- 팝업 -->
  </div>
</template>

<script>
import { SmoothPicker } from 'vue-smooth-picker'
export default {
  name: 'example-page',
  props: ['curBunnerIndex'],
  components: { SmoothPicker },
  data () {
    const m = []
    for (let i = 0; i <= 10; i++) {
      if (i <= 9) {
        i = '0' + i
      }
      m.push(String(i))
    }
    return {
      data: [
        {
          currentIndex: 0,
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
          currentIndex: 0,
          flex: 3,
          list: ['00', '10', '20', '30', '40', '50'],
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
      temp1: 0,
      temp2: 0,
      tempIndexM: 0,
      tempIndexS: 0,
      checkSetting: 'Y'
    }
  },
  methods: {
    dataChange (gIndex, iIndex) {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const min = this.data[0].list[ciList[0]]
      if (gIndex === 0) {
        this.temp1 = iIndex
        this.tempIndexM = iIndex
        if (min === '10') {
          let currentIndex = 0
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
          this.checkSetting = 'N'
        } else {
          this.checkSetting = 'Y'
        }
      }
      if (gIndex === 2) {
        this.temp2 = iIndex
        this.tempIndexS = iIndex
        if (min === '10') {
          let currentIndex = 0
          currentIndex = this.tempIndexM - 1
          this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
          this.checkSetting = 'Y'
        }
      }
    },
    settingClick () {
      event.preventDefault()
      var time = event.target.value
      if (time === '10') {
        let currentIndex = 0
        if (this.tempIndexS >= 5) {
          this.tempIndexS = -1
          this.tempIndexM = this.tempIndexM + 1
        }
        currentIndex = this.tempIndexS + 1
        this.tempIndexS = currentIndex
        this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
        currentIndex = this.tempIndexM + 0
        this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
        this.$refs.smoothPicker.correctionCurrentIndex(event, 2)
        this.temp1 = 0
        this.temp2 = 1
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const min = this.data[0].list[ciList[0]]
        if (min === '10') {
          currentIndex = 0
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
          this.checkSetting = 'N'
        } else {
          this.checkSetting = 'Y'
        }
      } else if (time === '30') {
        let currentIndex = 0
        currentIndex = this.tempIndexS + 3
        if (currentIndex > 5) {
          currentIndex = currentIndex - 6
          this.tempIndexM = this.tempIndexM + 1
        }
        this.tempIndexS = currentIndex
        this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
        currentIndex = this.tempIndexM + 0
        this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
        this.$refs.smoothPicker.correctionCurrentIndex(event, 2)
        this.temp1 = 0
        this.temp2 = 3
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const min = this.data[0].list[ciList[0]]
        if (min === '10') {
          currentIndex = 0
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
          this.checkSetting = 'N'
        } else {
          this.checkSetting = 'Y'
        }
      } else if (time === '60') {
        let currentIndex = 0
        currentIndex = this.tempIndexM + 1
        this.tempIndexM = currentIndex
        this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
        this.$refs.smoothPicker.correctionCurrentIndex(event, 0)
        this.temp1 = 1
        this.temp2 = 0
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const min = this.data[0].list[ciList[0]]
        if (min === '10') {
          currentIndex = 0
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex }))
          this.checkSetting = 'N'
        } else {
          this.checkSetting = 'Y'
        }
      }
    },
    offRemainTimeSend () {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      const min = this.data[0].list[ciList[0]]
      const sec = this.data[2].list[ciList[2]]
      this.$emit('setRangeOrCleanData', 'range', ((parseInt(min) * 60) + parseInt(sec)))
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
  /* height: 189px; */
    height: 155px;
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
.box_setting_btn {
    padding-top: 10px;
}
.box_setting_btn button {
    background: none;
    width: 81px;
    height: 44px;
    line-height: 40px;
    color: #2ba2f0;
    border: 2px solid #2ba2f0;
    border-radius: 30px;
    font-size: 1.6rem;
    margin-right: 10px;
}
.box_setting_btn button:last-child {
    margin-right: 0;
}
.box_setting_btn button:disabled {
  color: #ccc;
  border-color: #ccc;
}
</style>
