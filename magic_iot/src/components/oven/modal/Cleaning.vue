<template>
  <!-- 팝업 -->
  <!-- <section class="example-page"> -->
    <!-- 팝업 -->
    <div class="popup_dim">
        <div class="popup popup_list"  style="width: 306px;height: 276px;">
            <div class="popup_header">
                <h1>오븐청소</h1>
            </div>
            <div class="popup_contents">
               <ul>
                   <li><input type="radio" class="input_radio" value="128" v-model="picked" id="128"><label for='128'>스팀세척</label></li>
                   <li><input type="radio" class="input_radio" value="129" v-model="picked" id="129"><label for='129'>잔수제거</label></li>
                   <li><input type="radio" class="input_radio" value="130" v-model="picked" id="130"><label for='130'>건조탈취</label></li>
               </ul>
            </div>
            <div class="popup_btn">
                <div class="btn_inline">
                    <button class="btn btn_lg btn_gray" @click="$emit('close')">취소</button>
                    <button class="btn btn_lg btn_skyblue" @click="setRangeOrCleanData">확인</button>
                </div>
            </div>
        </div>
    </div>
    <!-- //팝업 -->
  <!-- </section> -->
</template>

<script>
export default {
  name: 'example-page',
  props: ['deviceInfo'],
  data () {
    return {
      picked: '128'
    }
  },
  methods: {
    setRangeOrCleanData () {
      this.$emit('setRangeOrCleanData', 'clean', this.picked)
    }
  }
}
</script>

<style>
/* 팝업 타이머 설정 */
.popup_contents p {
    font-size: 1.2rem;
}

.popup .popup_contents {
    display: inline-block;
    position: relative;
    width: 306px;
    vertical-align: middle;
}
/* 팝업 오븐청소 */
.popup_list .popup_contents li {
    font-size: 1.9rem;
    height: 60px;
    border-bottom: 1px solid #eeeeee;
    line-height: 59px;
    text-align: left;
}
.popup_list .popup_contents li input {
    margin: 0 17px;
}
.popup_list .popup_btn .btn {
    height: 40px;
    font-size: 1.4rem;
    line-height: 40px;
}
</style>
