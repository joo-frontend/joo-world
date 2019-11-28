<template>
  <!-- 팝업 -->
  <div class="popup_dim">
      <div class="popup" style="width: 306px;height: 381px;">
          <div class="popup_header">
              <h1>무드조명 색깔 설정</h1>
          </div>
          <div class="popup_contents mode_color">
            <label><input type="radio" value="c8ff64" name="color" class="color_radio_lg color_03" v-model="modColor"></label>
            <label><input type="radio" value="11d002" name="color" class="color_radio_lg color_04" v-model="modColor"></label>
            <label><input type="radio" value="d92179" name="color" class="color_radio_lg color_05" v-model="modColor"></label>
            <label><input type="radio" value="5c89aa" name="color" class="color_radio_lg color_01" v-model="modColor"></label>
            <label><input type="radio" value="fce83e" name="color" class="color_radio_lg color_02" v-model="modColor"></label>
          </div>
          <div class="popup_btn">
              <div class="btn_inline">
                  <button class="btn btn_lg btn_gray" @click="$emit('close')">취소</button>
                  <button name="moodlampColor" :value="this.color" class="btn btn_lg btn_skyblue" @click="setMoodColor">확인</button>
              </div>
          </div>
      </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
export default {
  name: 'setColorModal',
  props: ['color'],
  data () {
    return {
      modColor: ''
    }
  },
  created () {
    this.modColor = this.color
  },
  methods: {
    setMoodColor: function () {
      this.$emit('stompClientSend', 'moodlampColor', this.modColor)
    }
  }
}
</script>
