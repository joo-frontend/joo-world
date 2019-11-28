<template>
  <div class="popup_dim_all" v-show="showLoading">
    <div class="popup popup_all popup_loading">
      <div class="popup_contents">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      showLoading: false
    }
  },
  methods: {
    show: function () {
      this.showLoading = true
    },
    close: function () {
      this.showLoading = false
    }
  }
}
</script>

<style>
/*로딩중 팝업*/
.popup_loading .popup_contents .img {
    margin: 0 auto;
    width: 44px;
    height: 44px;
    margin-bottom: 21px;
    background: url('/images/page/@temp_loading.png') 0 0 no-repeat;
    background-size: 44px;
}
.popup_loading .popup_contents p {
    font-size: 1.6rem;
}
</style>
