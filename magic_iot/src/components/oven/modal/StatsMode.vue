<template>
<section class="example-page">
    <!-- 팝업 -->
  <div class="popup_detail">
    <div class="popup_detail_header" style="background: #585858;">
        <h1>모드별 사용 내역</h1>
        <div class="close_popup">
            <button @click="$emit('close')"><span class="sprite sprite_common sprite_popup_close"></span>
            </button>
        </div>
    </div>

    <div class="popup_detail_contents detail_cook_statistic">
        <div class="area_select">
        </div>
        <p class="period">• 기간 : {{this.cookInfo.startDate}}~{{this.cookInfo.endDate}}</p>
        <ul>
            <li v-for="item in this.cookInfo.statList" :key="item.seq" @click="showDetail(item)" v-if="item.cnt !== '0' && item.detailYn === 'Y'">
              <p>{{item.name}}</p> <button>{{item.cnt}}회 <span class="sprite sprite_steam_oven sprite_cook_detail_more"></span></button>
            </li>
            <li v-for="item in this.cookInfo.statList" :key="item.seq" @click="showCookDetail(item)" v-if="item.cnt !== '0' && item.detailYn === 'N'">
              <p>{{item.name}}</p> <button style="right: 43px;">{{item.cnt}}회 <span></span></button>
            </li>
            <li v-for="item in this.cookInfo.statList" :key="item.seq" v-if="item.cnt === '0'">
              <p>{{item.name}}</p> <button style="right: 43px;">{{item.cnt}}회 <span></span></button>
            </li>
        </ul>
        <!-- section_none_my_menu -->
        <div class="section_none_my_menu" v-if="this.cookInfo.statList === null">
          <div class="area_none_my_menu">
            <div class="img"></div>
            <p>사용하신 내역이 없습니다.</p>
          </div>
        </div>
        <!-- //section_none_my_menu -->
    </div>
  </div>
    <detailView-modal v-if="detailViewModal" @close="detailViewModal = false" :statsInfo="statsInfo"></detailView-modal>
    <stats-cook-modal v-if="statsCookModal" @close="statsCookModal = false" :cookDetailInfo="cookDetailInfo"/>
</section>
</template>
<script>
import DetailViewModal from '@/components/oven/modal/StatsDetail'
import StatsCookModal from '@/components/oven/modal/StatsCook'

export default {
  name: 'statsDetail',
  components: { DetailViewModal, StatsCookModal },
  props: ['statsInfo'],
  data () {
    return {
      // 팝업
      detailViewModal: false,
      statsCookModal: false,
      modeList: {},
      mode: '0',
      cookInfo: {
        startDate: '',
        endDate: '',
        statList: {}
      },
      cookDetailInfo: {
        hdeviceSeq: '',
        statGubun: '',
        seq: '',
        detailType: '',
        reqDate: '',
        modelNm: ''
      }
    }
  },
  created () {
    this.loading(true)
    this.searchCookList()
  },
  methods: {
    showCookDetail: function (cook) {
      this.cookDetailInfo.hdeviceSeq = this.statsInfo[1]
      this.cookDetailInfo.statGubun = this.statsInfo[2]
      this.cookDetailInfo.seq = cook.seq
      this.cookDetailInfo.detailType = 'M'
      this.cookDetailInfo.reqDate = this.statsInfo[3]
      this.cookDetailInfo.modelNm = this.statsInfo[0]
      this.statsCookModal = true
    },
    showDetail: function (item) {
      this.statsInfo[4] = item.seq
      this.detailViewModal = true
    },
    searchCookList: function () {
      this.$http.post('/api/stats/oven/mode', {
        hdeviceSeq: this.statsInfo[1],
        statGubun: this.statsInfo[2],
        reqDate: this.statsInfo[3],
        modelNm: this.statsInfo[0]
      })
      .then(response => {
        this.cookInfo = response.data.body
        this.loading(false)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    }
  }
}
</script>

<style scoped>
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
}
/* 오븐 사용통계 상세 */
.popup_detail_contents.detail_cook_statistic {
    padding: 52px 0 0 0;
}
.popup_detail_contents.detail_cook_statistic .area_select {
    padding: 0 10px;
}
.popup_detail_contents.detail_cook_statistic .area_select .select {
    padding: 0 15px;
    color: #2ba2f0;
    border: 1px solid #2ba2f0;
    background: url('/images/common/select_box_blue.png') right 50% no-repeat;
    -webkit-background-size: 26px;
    background-size: 26px;
}
.popup_detail_contents.detail_cook_statistic .period {
    font-size: 1.3rem;
    color: #888888;
    padding-left: 15px;
    margin: 15px 0;
}
.popup_detail_contents.detail_cook_statistic ul {
    border-top: 1px solid #e5e5e5;
}
.popup_detail_contents.detail_cook_statistic li {
    height: 62px;
    line-height: 60px;
    font-size: 1.6rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
}
.popup_detail_contents.detail_cook_statistic li p {
    padding-left: 25px;
    width: 75%;
}
.popup_detail_contents.detail_cook_statistic li button {
    position: absolute;
    top: 0;
    right: 29px;
    font-size: 1.6rem;
    color: #888888;
    line-height: 60px;
}
.popup_detail_contents.detail_cook_statistic li button .sprite_cook_detail_more {
    position: relative;
    top: 2px;
    left: 5px;
}
/* my_menu 없을경우 */
.section_none_my_menu {
    position: absolute;
    top: 93px;
    left: 0;
    text-align: center;
    width: 100%;
    height: 100%;
}
.section_none_my_menu:after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    height: 100%;
}
.section_none_my_menu .area_none_my_menu {
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.section_none_my_menu .area_none_my_menu .img {
    background: url('/images/common/sprite_info_page.png') -150px 0 no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 82px;
    height: 82px;
    margin: 0 auto;
}
.section_none_my_menu .area_none_my_menu p {
    font-size: 1.6rem;
    color: #888888;
    margin-top: 27px;
}
</style>
