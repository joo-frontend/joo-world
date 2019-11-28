<template>
  <!-- 알림 팝업(공통)-->
  <div class="popup_dim">
    <div class="popup">
      <div class="popup_header">
        <slot name="head">
          <h1>알림</h1>
        </slot>
      </div>
      <div class="popup_contents">
        <slot name="body">
          컨텐츠
        </slot>
      </div>
      <div class="popup_btn">
        <a class="btn btn_md btn_skyblue one" style="width:50%" @click="$emit('ok')">확인</a>
      </div>
    </div>
  </div>
  <!-- //팝업 -->
</template>
<script>
export default {
  name: 'alert'
}
</script>

<style scoped>
.popup_contents h3 {
  margin: 30px 5px 30px 5px;
}
</style>
