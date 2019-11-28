<template>
  <div class="wrap_contents_area">
    <section class="section_history_log">
      <div class="area_history_log">
        <!-- 하단 컨텐츠 열릴 때 active -->
        <button class="arrow_btn active">
          <span class="sprite sprite_common sprite_lower_arrow">?</span>
        </button>
        <div class="box_top">
          <span class="sprite sprite_common sprite_calendar_blue"></span>
          <p class="schedule">2015.09</p>
          <span class="sprite sprite_common sprite_pre">예정</span>
        </div>
        <div class="box_log_contents clearfix" style="display:block;">
          <p class="txt_highlight_skyblue"><span>냉온 정수기(세미전자식)</span> WPU8235CRP</p>
          <ul>
              <li>예정필터 : 세디복합(8)</li>
              <li>진행결과 : 예정</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'manageHistory'
}
</script>
<style>
</style>
