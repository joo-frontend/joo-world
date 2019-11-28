<template>
  <div class="popup_dim_all">
    <div class="popup popup_all popup_setting_local">
      <div class="popup_header">
        <h1>지역설정</h1>
        <div class="close_popup">
          <button @click="$emit('close')"><span class="sprite sprite_common sprite_popup_close"></span>
          </button>
        </div>
      </div>
      <div class="popup_contents" style="padding-top:30px;">
        <div class="area_local">
          <label>시/도</label>
          <select class="select select_black select_block select_lg" v-model="citySelected">
            <option v-for="city in cityList" :key="city.cityId" :value="city.cityId">{{ city.cityName }}</option>
          </select>
        </div>
        <div>
          <label>시/군/구</label>
          <select class="select select_black select_block select_lg" v-model="stateSelected">
            <option v-for="state in stateList" :key="state.cityCode" :value="state.cityCode">{{ state.stateName }}</option>
          </select>
        </div>
      </div>
      <div class="section_btn no_bg bottom_btn">
        <div class="btn_inline">
          <button class="btn btn_lg btn_gray btn_block" @click="$emit('close')">취소</button>
          <button class="btn btn_lg btn_skyblue btn_block" @click="setWeather">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var tempCity = ''
var tempState = ''

export default {
  name: 'localSetting',
  props: ['cityCode'],
  data () {
    return {
      citySelected: '',
      stateSelected: '',
      firstCnt: 0,
      cityList: []
    }
  },
  created () {
    this.getLocation()
  },
  computed: {
    stateList: function () {
      for (var index in this.cityList) {
        if (this.cityList[index].cityId === parseInt(this.citySelected)) {
          if (tempCity !== '' && tempCity !== String(this.citySelected)) {
            tempState = this.cityList[index].stateList[0].cityCode
            if (tempState !== String(this.stateSelected) && typeof this.stateSelected !== 'undefined') {
              // 선택한 시 설정
              return this.cityList[index].stateList
            } else {
              // 첫번째 값 자동 선택
              this.stateSelected = tempState
            }
          } else {
            if (this.firstCnt === 0) {
              this.firstCnt = this.firstCnt + 1
              return this.cityList[index].stateList
            } else {
              tempState = this.cityList[index].stateList[0].cityCode
              if (tempState !== String(this.stateSelected) && typeof this.stateSelected !== 'undefined') {
                return this.cityList[index].stateList
              } else {
                this.stateSelected = tempState
              }
            }
          }
          return this.cityList[index].stateList
        }
      }
    }
  },
  methods: {
    getLocation: function () {
      this.$http.post('/api/weather/location')
      .then(response => {
        if (response.data.header.resultCode === '20000') {
          this.citySelected = this.cityCode.substr(0, 2) + '00000000'
          tempCity = this.citySelected
          this.stateSelected = this.cityCode
          this.cityList = response.data.body.cityList
        }
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    setWeather: function () {
      this.$emit('setWeather', this.stateSelected)
    }
  }
}
</script>

<style>
/* 팝업 지역설정 */
.popup.popup_all.popup_setting_local {
    /*padding-bottom: 102px;*/
    padding-bottom: 200px;
}
.popup_setting_local .section_btn {
    bottom: 28px;
}
.popup_setting_local label {
    display: block;
    font-size: 1.9rem;
    line-height: 33px;
    padding-left: 12px;
    text-align: left;
}
.area_local {
    margin-bottom: 24px;
}
</style>
