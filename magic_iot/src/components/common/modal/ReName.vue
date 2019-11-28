<template>
  <!-- 팝업 -->
  <div class="popup_dim_all">
    <div class="popup popup_all">
      <div class="popup_header">
        <h1 style="margin-top: 0px">가전명 수정</h1>
        <div class="close_popup">
          <button @click="$emit('close')"><span class="sprite sprite_common sprite_popup_close"></span>
          </button>
        </div>
      </div>
      <div class="popup_contents">
        <input type="text" class="text_box text_box_md text_box_dark text_box_block" v-model="rename">
        <button class="btn btn_lg" :class="classObj" :disabled="rename === ''" @click="modNickName">확인</button>
      </div>
    </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
export default {
  name: 'rename',
  props: ['nickName', 'deviceId'],
  data () {
    return {
      rename: this.nickName
    }
  },
  watch: {
    rename: function (val) {
      if (val.length === 19) {
        this.rename = this.rename.substring(0, 20)
      } else if (val.length > 20) {
        this.rename = this.rename.substring(0, 20)
      }
    }
  },
  computed: {
    classObj: function () {
      if (this.rename === '') {
        return {
          btn_grey: true,
          btn_block: true
        }
      } else if (this.rename !== '') {
        return {
          btn_skyblue: true,
          btn_block: true
        }
      }
    }
  },
  methods: {
    modNickName: function () {
      this.loading(true)
      this.$http.post('/api/homedevice/changenick', {
        hdeviceSeq: this.deviceId,
        nickNm: this.rename
      })
      .then(response => {
        this.loading(false)
        if (response.data.header.resultCode === '20000') this.$emit('modNickName', this.rename)
      })
      .catch(this.loading(false))
    }
  }
}
</script>
