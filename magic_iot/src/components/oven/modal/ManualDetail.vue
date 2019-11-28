<template>
<section class="example-page">
  <!-- section_header -->
  <div class="popup_detail">
    <div class="popup_detail_header" style="background: #585858;">
      <h1>{{qna.title}}</h1>
      <div class="close_popup">
          <button @click="$emit('close')"><span class="sprite sprite_common sprite_popup_close"></span>
          </button>
      </div>
    </div>
  <!-- //section_header -->
  <div class="popup_detail_contents" v-if ="this.subList.qnaId !== null">
      <div class="area_question">
        <p style="width: 10%;height: 10%;position: absolute;top: 11%;font-weight: bold;">Q.</p>
        <p style="width: 65%;position: absolute;top: 11%;font-weight: bold;left: 40px;">{{qna.question}}</p>
      </div>
      <div class="area_answer">
        <p style="font-weight: bold">{{qna.answer}}</p>
      </div>
  </div>
  <div class="popup_detail_contents" v-if ="this.subList.imgUrl !== null">
    <img v-bind:src="this.subList.imgUrl" style="padding-top: 14%;"/>
  </div>
  <div class="popup_detail_contents" v-if ="this.subList.youtubeId !== null">
    <iframe id="ytplayer" type="text/html" width="100%" height="50%" v-bind:src="this.subList.youtubeId" frameborder="0" allowfullscreen>
    </iframe>
  </div>
</div>
</section>
</template>
<script>
export default {
  name: 'manualDetail',
  props: ['subList'],
  data () {
    return {
      qna: {}
    }
  },
  created () {
    this.searchQna()
  },
  methods: {
    searchQna: function () {
      if (this.subList.qnaId !== null) {
        this.$http.post('/api/manual/oven/qna', {
          qnaId: this.subList.qnaId
        })
        .then(response => {
          this.qna = response.data.body
        })
        .catch(error => {
          console.log(error)
          this.loading(false)
        })
      }

      if (this.subList.imgUrl !== null) {
        this.qna = this.subList
      }

      if (this.subList.youtubeId !== null) {
        this.qna = this.subList
      }
    }
  }
}
</script>

<style scoped>
/**
 * 컨텐츠 디테일 팝업
 */
.popup_detail {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 2);
}
.popup_detail_header {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    z-index: 100;
}
.popup_detail_header span {
    position: absolute;
    top: 17px;
    left: 15px;
    font-size: 1.3rem;
    color: #ffffff;
}
.popup_detail_header h1 {
    font-size: 1.7rem;
    height: 52px;
    line-height: 52px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.popup_detail_header .title {
    position: relative;
    font-size: 1.7rem;
    height: 52px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.popup_detail_header .title p:first-child {
    line-height: 20px;
    padding-top: 12px;
}
.popup_detail_header .title p:nth-child(2) {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.5);
}

.popup_detail_header .edit {
    position: absolute;
    top: 0;
    right: 30px;
    width: 52px;
    height: 52px;
    text-align: center;
}
.popup_detail_header .close_popup {
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 52px;
    text-align: center;
}

.popup_detail_header .edit button {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 17px;
}
.popup_detail_header .close_popup button {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 17px;
}

.popup_detail_contents {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0 0 67px 0;
    z-index: 90;
    background: #f3f3f3;
}
/* Q & A */
.section_question {
    height: 91vh;
    background: #f3f3f3;
}
.popup_detail_contents .area_question {
    height: 140px;
    background: #ffffff;
    padding: 60px 15px 0;
}
.popup_detail_contents .area_question p {
    color: #4095cd;
    font-size: 1.4rem;
    line-height: 2.4rem;
}
.popup_detail_contents .area_answer {
    padding: 18px 13px 0;
}
.popup_detail_contents .area_answer p {
    font-size: 1.3rem;
    line-height: 2.2rem;
}
</style>
