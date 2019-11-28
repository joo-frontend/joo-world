<template>
  <!-- 팝업 -->
  <section class="example-page">
    <div class="popup_dim">
      <div class="popup popup_list popup_cook_list"  style="width: 306px; height: auto; overflow: auto;">
        <div class="popup_header">
            <h1>{{statsInfo.name}}</h1>
            <h3>총 사용 시간 : {{statsInfo.usedTime}}</h3>
        </div>
        <div class="popup_contents">
           <ul>
             <li v-for="item in this.statsInfo.statList"><p>{{item.date}}</p><span>{{item.cnt}}회</span></li>
           </ul>
        </div>
        <div class="popup_btn">
          <div class="btn_inline">
            <button href="#" class="btn btn_lg btn_skyblue" @click="$emit('close')">확인</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 팝업 -->
  </section>
</template>

<script>
export default {
  name: 'example-page',
  props: ['cookDetailInfo'],
  data () {
    return {
      statsInfo: {
        name: '',
        usedTime: '',
        statList: {}
      }
    }
  },
  created () {
    this.$http.post('/api/stats/oven/cook/detail', {
      hdeviceSeq: this.cookDetailInfo.hdeviceSeq,
      statGubun: this.cookDetailInfo.statGubun,
      seq: this.cookDetailInfo.seq,
      detailType: this.cookDetailInfo.detailType,
      reqDate: this.cookDetailInfo.reqDate,
      modelNm: this.cookDetailInfo.modelNm
    })
    .then(response => {
      this.statsInfo = response.data.body
    })
    .catch(error => {
      console.log(error)
      this.loading(false)
    })
  },
  methods: {
  }
}
</script>

<style>
/**
 * 팝업
 */
.popup_dim {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.85);
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
.popup_all .popup_contents {
    display: inline-block;
    position: relative;
    /*width: 330px;*/
    vertical-align: middle;
}
.popup_contents .text_box {
    margin-bottom: 10px;
}
.popup_contents .text_box.none_margin_bottom {
    margin-bottom: 0;
}
.popup_btn {
    padding: 6px;
}
/* 오븐 사용통계 상세 팝업 */
.popup_list.popup_cook_list .popup_header {
    height: 60px;
}
.popup_list.popup_cook_list .popup_header h1 {
    font-size: 1.8rem;
    line-height: 30px;
    padding-top: 5px;
}
.popup_list.popup_cook_list .popup_header h3 {
    font-size: 1.3rem;
    color: #888888;
}
.popup_list.popup_cook_list .popup_contents li {
    position: relative;
}
.popup_list.popup_cook_list .popup_contents li p {
    font-size: 1.6rem;
    padding-left: 17px;
}
.popup_list.popup_cook_list .popup_contents li span {
    position: absolute;
    top: 0;
    right: 17px;
    font-size: 1.6rem;
    color: #888888;
}
.popup_list.popup_cook_list .popup_btn .btn_inline .btn {
   float:none;
}

</style>
