<template>
  <!-- 청정기 남은예약시간 알림팝업 -->
  <div class="popup_dim">
      <div class="popup">
          <div class="popup_header">
            <h1 slot name="head">
              꺼짐 예약 {{ resvOffTxt }}
            </h1>
          </div>
          <div class="popup_contents">
            <h3>예약을 {{ resvOffTxt }} 하시겠습니까?<br>남은 예약시간 : {{ remainOffTime }}</h3>
          </div>
          <div class="popup_btn">
              <div class="btn_inline">
                <a class="btn btn_md btn_gray" @click="$emit('close')">취소</a>
                <a class="btn btn_md btn_skyblue" @click="stompClientSend">예약 {{ resvOffTxt }}</a>
              </div>
          </div>
      </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
export default {
  name: 'popup',
  props: ['type', 'air'],
  computed: {
    remainOffTime: function () {
      var hour = parseInt(this.air.remainOffTime / 60)
      var min = parseInt(this.air.remainOffTime % 60)
      if (min <= 0 && hour > 0) return this.zeroSetting(hour) + '시간'
      else if (min > 0 && hour > 0) return this.zeroSetting(hour) + '시간 ' + this.zeroSetting(min) + '분'
      else return this.zeroSetting(min) + '분'
    },
    resvOffTypeCheck: function () {
      var resObj = {'3': 2, '4': 4, '5': 8, '6': 1}
      var reqObj = {2: 2, 3: 4, 4: 8, 5: 1}
      if (reqObj[this.air.resvOff] === resObj[this.type]) return true
      else return false
    },
    resvOffTxt: function () {
      if (this.resvOffTypeCheck) return '취소'
      else return '변경'
    }
  },
  methods: {
    zeroSetting: function (x) {
      if (parseInt(x) <= 9) return '0' + x
      else return x
    },
    stompClientSend: function () {
      if (this.resvOffTypeCheck) {
        this.$emit('stompClientSend', 'resvOff', '2')
      } else {
        this.$emit('stompClientSend', 'resvOff', this.type)
      }
    }
  }
}
</script>

<style>
.popup_contents h3 {
  margin: 33px;
}
</style>
