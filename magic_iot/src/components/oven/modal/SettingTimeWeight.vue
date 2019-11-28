<template>
  <!-- 팝업 -->
  <!-- 해동 중량설정 팝업 -->
  <!-- <section class="example-page"> -->
    <div class="popup_dim">
        <div class="popup" style="width:307px;">
            <div class="popup_header">
                <h1>중량설정</h1>
                <button class="reset" @click="settingClick('temp')"><span class="sprite sprite_common sprite_update_lg" ></span>초기화</button>
            </div>
            <div class="popup_contents popup_double">
                <div class="box_time">
                  <smooth-picker ref="smoothPicker" :data="data" :change="dataChange"/>
                </div>
            </div>
            <div class="popup_header">
                <h1>요리시간</h1>
            </div>
            <div class="popup_contents popup_double">
                <div class="box_time cook_time cook_time_set">
                    <ul class="min">
                        <li class="current">{{this.min}}<span>분</span></li>
                    </ul>
                    <ul class="sec">
                        <li class="current">{{this.sec}}<span>초</span></li>
                    </ul>
                </div>
            </div>
            <div class="popup_btn">
                <div class="btn_inline">
                    <button class="btn btn_lg_timeSetting btn_manual btn_gray" @click="$emit('close')">취소</button>
                    <button class="btn btn_lg_timeSetting btn_manual btn_skyblue"  @click="stompClientSend()">오븐전송</button>
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
    const weightList = ['200', '300', '400', '500', '600', '700', '800', '900']
    var weightIndex = 0
    if (this.recipe.cookType === 'S') {
      if (typeof this.recipe.cookWeight !== 'undefined') {
        this.recipe.weightDefault = this.recipe.cookWeight
      }
    }
    for (let i = 0; i < weightList.length; i++) {
      if (this.recipe.weightDefault === weightList[i]) {
        weightIndex = i
      }
    }
    return {
      data: [
        {
          currentIndex: weightIndex,
          flex: 2,
          list: weightList,
          textAlign: 'center',
          className: 'data2-group'
        }
      ],
      index1: weightIndex,
      min: '',
      sec: ''
    }
  },
  created () {
    for (let i = 0; i < this.recipe.cookSettingList.length; i++) {
      if (this.recipe.weightDefault === this.recipe.cookSettingList[i].weight) {
        this.min = this.recipe.cookSettingList[i].min
        this.sec = this.recipe.cookSettingList[i].sec
      }
    }
  },
  methods: {
    dataChange (gIndex, iIndex) {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      let weight = this.data[0].list[ciList[0]]
      for (let i = 0; i < this.recipe.cookSettingList.length; i++) {
        if (weight === this.recipe.cookSettingList[i].weight) {
          this.min = this.recipe.cookSettingList[i].min
          this.sec = this.recipe.cookSettingList[i].sec
        }
      }
    },
    settingClick (type) {
      let currentIndex = 0
      currentIndex = this.index1
      this.$refs.smoothPicker.setGroupData(0, Object.assign({}, this.data[0], { currentIndex }))
      this.$refs.smoothPicker.correctionCurrentIndex(event, 0)
      this.dataChange(0, currentIndex)
    },
    stompClientSend () {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList()
      let weight = this.data[0].list[ciList[0]]
      var arr = []
      if (typeof this.recipe.name === 'undefined') {
        if (typeof this.recipe.cookSeq === 'undefined') {
          arr[0] = this.recipe.seq
        } else {
          arr[0] = this.recipe.cookSeq
        }
      } else {
        if (this.recipe.name.indexOf('육류') > 0) {
          arr[0] = '137'
        } else if (this.recipe.name.indexOf('어류') > 0) {
          arr[0] = '138'
        }
      }
      arr[1] = weight
      arr[2] = ((parseInt(this.min) * 60) + parseInt(this.sec))
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
