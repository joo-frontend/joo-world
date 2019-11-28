<template>
  <div class="wrap_contents_area">
    <!-- section_manual -->
    <section class="section_manual">
      <ul class="manual_list">
        <!-- 리스트 다운 펼쳤을 때 li 요소 class 추가 'focus' -->
        <li v-for="item in list" :key="item.order" :class="{focus: index === item.order}" @click="showDetailManual(item.order)"><span>{{ item.title }}</span><a></a>
          <ul class="sub_list">
            <li v-if="item.imgUrl !== null" @click="showManualDetail(item)">설명서 보기</li>
            <li v-if="item.youtubeId !== null" @click="showVideo(item)">동영상 보기</li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- //section_manual -->

    <!-- section_manual_button -->
    <div class="section_btn bottom_btn">
      <div class="btn_inline">
        <button class="btn btn_lg btn_skyblue" @click="showService"><span class="sprite sprite_common sprite_call"></span>서비스 센터</button>
        <button class="btn btn_lg btn_blue" @click="showManual"><span class="sprite sprite_common sprite_manual"></span>매뉴얼 보기</button>
      </div>
    </div>
    <!-- //section_manual_button -->
    <detailView-modal v-if="detailViewModal" @close="detailViewModal = false" :subList="subList" ></detailView-modal>
  </div>
</template>
<script>
import DetailViewModal from '@/components/common/modal/ManualDetail'
export default {
  name: 'userManual',
  components: { DetailViewModal },
  props: ['deviceInfo'],
  data () {
    return {
      index: '',
      modelNm: this.deviceInfo.modelNm,
      list: {},
      subList: {},
      detailViewModal: false
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.loading(false)
    this.getManualList()
  },
  methods: {
    getManualList: function () {
      return this.$http.post('/api/manual/range', {
        modelNm: this.modelNm
      })
      .then(response => {
        if (response.data.header.resultCode === '20000') this.list = response.data.body.list
      })
      .catch(error => {
        console.log(error)
      })
    },
    showService: function () {
      var rentYtel = '1544-7784'
      if (this.deviceInfo.hdeviceRentYn === 'N') rentYtel = '1577-7784'
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.phoneKeypadOpen !== 'undefined') {
        window.SkmagicNative.phoneKeypadOpen(rentYtel)
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'phoneKeypadOpen',
          phoneNumber: rentYtel
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
    },
    showManual: function () {
      var pdfUrl = this.deviceInfo.productInfo.filePath1
      if (typeof window.SkmagicNative !== 'undefined' && typeof window.SkmagicNative.pdfOpen !== 'undefined') {
        window.SkmagicNative.pdfOpen(pdfUrl)
      } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers.SkmagicNative !== 'undefined') {
        var message = {
          command: 'pdfOpen',
          pdf: pdfUrl
        }
        window.webkit.messageHandlers.SkmagicNative.postMessage(message)
      }
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
    }
  }
}
</script>
<style>
/*사용설명*/
.section_manual .manual_list li {
    min-height: 61px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 60px;
    font-size: 1.4rem;
    position: relative;
}
.section_manual .manual_list li span {
    padding-left: 15px;
}
.section_manual .manual_list li a {
    position: absolute;
    width: 40px;
    height: 60px;
    right: 0;
    top: 0;
}
.section_manual .manual_list li a:before {
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
.section_manual .manual_list li.focus a:before {
    background-position: -25px -50px;
}
.section_manual .manual_list .sub_list {
    display: none;
}
.section_manual .manual_list .focus .sub_list {
    display: block;
}
.section_manual .manual_list .sub_list li {
    list-style: disc inside;
    padding-left: 21px;
    background: #eceaed;
    border-bottom: 1px solid #dedede;
}
</style>
