<template>
  <div class="wrap_contents_area">
    <!-- section_accordion  -->
    <section class="section_accordion btn_menu_list">
      <ul class="accordion_list">
          <!-- 리스트 다운 펼쳤을 때 li 요소 class 추가 'focus' -->
          <li v-for="item in manualList" :key="item.order" :class="{focus: index === item.order}" @click="showDetailManual(item.order)"><span>{{ item.title }}</span><a></a>
              <ul class="sub_list">
                  <li v-if="item.imgUrl !== null" @click="showManualDetail(item)">설명서 보기</li>
                  <li v-if="item.youtubeId !== null" @click="showVideo(item)">동영상 보기</li>
                  <li v-if="item.subList !== null" v-for="sub in item.subList" :key="sub.order" @click="showDetailManual(item.order)">{{sub.title}}
                    <button class="btn btn_md btn_dark_gray" @click="showSubManual(sub)">설명서 보기</button></li>
              </ul>
          </li>
      </ul>
    </section>
    <!-- //section_accordion  -->

    <!-- section_accordion _button -->
    <div class="section_btn bottom_btn">
      <div class="btn_inline">
          <button class="btn btn_lg btn_skyblue"><span class="sprite sprite_common sprite_call" @click="showService"></span>서비스 센터</button>
          <button class="btn btn_lg btn_blue"><span class="sprite sprite_common sprite_manual" @click="showManual"></span>매뉴얼 보기</button>
      </div>
    </div>
    <!-- //section_accordion _button -->
    <detailView-modal v-if="detailViewModal" @close="detailViewModal = false" :subList="subList" ></detailView-modal>
  </div>
</template>
<script>
import DetailViewModal from '@/components/oven/modal/ManualDetail'
export default {
  name: 'userManual',
  components: { DetailViewModal },
  props: [ 'deviceInfo' ],
  data () {
    return {
      index: '',
      modelNm: this.deviceInfo.modelNm,
      manualList: [],
      subList: {},
      detailViewModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.getManualList()
  },
  methods: {
    getManualList () {
      this.loading(true)
      this.$http.post('/api/manual/oven', {
        modelNm: this.modelNm
      })
      .then(response => {
        this.manualList = response.data.body.list
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    showService: function () {
      window.location.href = 'tel:1544-7784'
    },
    showManual: function () {
      window.location.href = this.deviceInfo.productInfo.filePath1
      event.stopPropagation()
    },
    showDetailManual: function (order) {
      if (this.index === order) {
        this.index = ''
      } else {
        this.index = order
      }
    },
    showManualDetail: function (order) {
      this.subList.imgUrl = order.imgUrl
      this.subList.youtubeId = null
      this.subList.qnaId = null
      this.subList.title = order.title
      event.stopPropagation()
      this.detailViewModal = true
    },
    showVideo: function (order) {
      this.subList.youtubeId = 'https://www.youtube.com/embed/' + order.youtubeId + '?autoplay=1'
      this.subList.imgUrl = null
      this.subList.qnaId = null
      this.subList.title = order.title
      event.stopPropagation()
      this.detailViewModal = true
    },
    showSubManual: function (sub) {
      this.subList = sub
      event.stopPropagation()
      this.detailViewModal = true
    }
  }
}
</script>
<style>
/*사용설명*/
.section_accordion.btn_menu_list {
  overflow-y: auto;
  height: 74vh;
}
.section_accordion .accordion_list li {
    min-height: 61px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 60px;
    font-size: 1.4rem;
    position: relative;
}
.section_accordion .accordion_list li span {
    padding-left: 15px;
}
.section_accordion .accordion_list li a {
    position: absolute;
    width: 40px;
    height: 60px;
    right: 0;
    top: 0;
}
.section_accordion .accordion_list li a:before {
    content: '';
    position: absolute;
    right: 15px;
    top: 26px;
    background: url('/images/common/sprite_common.png') 0 -50px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 15px;
    height: 8px;
}
.section_accordion .accordion_list li.focus a:before {
    background-position: -25px -50px;
}
.section_accordion .accordion_list .sub_list {
    display: none;
}
.section_accordion .accordion_list .focus .sub_list {
    display: block;
}
.section_accordion .accordion_list .sub_list li {
    list-style: disc inside;
    padding-left: 21px;
    background: #eceaed;
    border-bottom: 1px solid #dedede;
}
.section_accordion .accordion_list .sub_list li button {
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -15px;
}
</style>
