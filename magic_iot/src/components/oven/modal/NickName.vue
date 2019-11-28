<template>
  <!-- 팝업 -->
  <div class="popup_dim_all">
      <div class="popup popup_all">
          <div class="popup_header">
              <h1>요리명 수정</h1>
              <div class="close_popup">
                <button @click="$emit('close')"><span class="sprite sprite_common sprite_popup_close"></span>
                </button>
              </div>
          </div>
          <div class="popup_contents" style="width: 95%;">
              <input type="text" class="text_box text_box_md text_box_dark text_box_block" v-model="rename" placeholder="요리명을 입력해 주세요.">
              <button class="btn btn_lg" :class="classObj" :disabled="rename === '' || rename === null" @click="modNickName">확인</button>
          </div>
      </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
export default {
  name: 'rename',
  props: ['recipe', 'deviceId', 'selCookInfo'],
  data () {
    return {
      rename: this.recipe.nick
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
      if (this.rename === '' || this.rename === null) {
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
      this.$http.post('/api/oven/my/cook/nick', {
        hdeviceSeq: this.deviceId,
        myCookSeq: this.selCookInfo.cookSeq,
        nick: this.rename
      })
      .then(response => {
        this.loading(false)
        this.$emit('modNickName', this.rename)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    }
  }
}
</script>
