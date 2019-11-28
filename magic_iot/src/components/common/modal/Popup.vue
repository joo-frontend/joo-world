<template>
  <!-- 팝업 -->
  <div class="popup_dim">
    <div class="popup">
      <div class="popup_header">
        <slot name="head">
          <h1>알림</h1>
        </slot>
      </div>
      <div class="popup_contents">
        <slot name="body">
        </slot>
      </div>
      <div class="popup_btn">
        <div class="btn_inline">
          <a class="btn btn_md btn_gray" @click="$emit('close')">{{cancel}}</a>
          <a :name="sendName" :id="sendName" class="btn btn_md btn_skyblue" @click="$emit('ok')">{{ok}}</a>
        </div>
      </div>
    </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
export default {
  name: 'popup',
  props: ['sendNm', 'type'],
  data () {
    return {
      cancel: '취소',
      ok: '확인',
      sendName: this.sendNm
    }
  },
  created () {
    // 버튼문구: M(아니오/예), 그 외(확인 및 취소)
    if (this.type === 'M') {
      this.cancel = '아니오'
      this.ok = '예'
    }
  }
}
</script>

<style scoped>
.popup_contents h3 {
  margin: 30px 5px 30px 5px;
}
.popup_contents h2 {
  margin: 5px;
  font-size: 12px;
}
</style>
