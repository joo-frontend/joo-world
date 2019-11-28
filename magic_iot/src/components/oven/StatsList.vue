<template>
  <div class="wrap_contents_area">
    <!-- section_tab -->
    <section class="section_tab">
      <div class="tabs tabs_col3">
        <ul class="clearfix">
          <li :class="{active: type === 'M'}" @click="getSearch('M')"><a>월별</a></li>
          <li :class="{active: type === 'Y'}" @click="getSearch('Y')"><a>년도별</a></li>
          <li :class="{active: type === 'A'}" @click="getSearch('A')"><a>전체</a></li>
        </ul>
      </div>
    </section>
    <!-- //section_tab -->

    <!-- section_statistic_title -->
    <section class="section_statistic_title">
        <div class="area_calendar">
          <button class="sprite sprite_steam_oven sprtie_pre_blue" v-if="type !== 'A'" @click="statsRegDate('pre')"></button>
          <span style="font-weight: bold">{{today}}</span>
          <!-- 비활성 버튼 더 진하게 클래스 변경
           sprite_cook_detail_more -> sprite_next_disabled
           -->
          <button class="sprite sprite_steam_oven" :class="{sprtie_next_blue: disabledDate() === false, sprite_next_disabled: disabledDate() === true}" v-if="type !== 'A'" @click="statsRegDate('next')" :disabled="disabledDate()"></button>
        </div>
        <div class="area_calendar_desc">
          <p>• 기간 : {{this.cookStatInfo.startDate}}~{{this.cookStatInfo.endDate}}</p>
          <p>• 총 사용 시간 : {{this.cookStatInfo.totalUsedTime}}</p>
          <p>• 총 요리 횟수 : {{this.cookStatInfo.totalCookCnt}}회</p>
        </div>
    </section>
    <!-- //section_statistic_title -->

    <section class="section_cook_graph">
        <div class="area_cook_graph">
          <p class="title"><span class="sprite sprite_steam_oven sprite_cook">?</span>요리별 Best</p>
          <button @click="showDetail('B')">더보기<span class="sprite sprite_steam_oven sprite_cook_more"></span></button>
          <div class="box_graph_img" v-if="this.cookStatList !== null">
            <div class="graph_row" v-for="item in cookStatList">
                <div class="graph">
                      <span class="cook_repeat_2" v-bind:style="{width: perCent(item,'detail') +'%'}"></span>
                </div>
                <div class="legend"><span>{{item.cnt}}회</span>{{item.name}}</div>
            </div>
          </div>
          <div class="box_graph_img" v-else>
            <p class="none_graph" style="text-align: center;">사용하신 내역이 없습니다.</p>
          </div>
        </div>
        <div class="area_cook_graph">
          <p class="title"><span class="sprite sprite_steam_oven sprite_cook">?</span>모드별 Best</p>
          <button @click="showDetail('A')">더보기<span class="sprite sprite_steam_oven sprite_cook_more"></span></button>
          <div class="box_graph_img" v-if="this.cookModeStatList !== null">
            <div class="graph_row" v-for="item in cookModeStatList">
                <div class="graph">
                    <span class="cook_repeat_2" v-bind:style="{width: perCent(item,'mod') +'%'}"></span>
                </div>
                <div class="legend"><span>{{item.cnt}}회</span>{{item.name}}</div>
            </div>
          </div>
          <div class="box_graph_img" v-else>
            <p class="none_graph" style="text-align: center;">사용하신 내역이 없습니다.</p>
          </div>
        </div>
    </section>
    <transition name="fade">
      <detailView-modal v-if="detailViewModal" @close="detailViewModal = false" :statsInfo="statsInfo" ></detailView-modal>
    </transition>
    <transition name="fade">
      <mode-view-modal v-if="modeViewModal" @close="modeViewModal = false" :statsInfo="statsInfo" ></mode-view-modal>
    </transition>
</div>
</template>

<script>
import DetailViewModal from '@/components/oven/modal/StatsDetail'
import ModeViewModal from '@/components/oven/modal/StatsMode'
export default {
  name: 'statsList',
  props: ['userId', 'deviceId', 'deviceInfo', 'oven'],
  components: { DetailViewModal, ModeViewModal },
  data () {
    return {
      statsInfo: [],
      type: 'M',
      statsList: {},
      cookModeStatList: {},
      cookStatList: {},
      cookStatInfo: {
        endDate: '',
        startDate: '',
        totalCookCnt: '',
        totalUsedTime: ''
      },
      tempDate: '',
      regDate: '',
      yyyy: '',
      mm: '',
      searchDateText: '',
      // 팝업
      detailViewModal: false,
      modeViewModal: false,
      statMax: 0,
      statModMax: 0,
      tempDate2: ''
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.statsRegDate('today')
  },
  computed: {
    today: function () {
      if (this.type === 'M') {
        this.regDate = String(this.yyyy) + String(this.mm)
        this.searchDateText = this.yyyy + '년 ' + this.mm + '월'
      } else if (this.type === 'Y') {
        this.regDate = String(this.yyyy)
        this.searchDateText = this.yyyy + '년 '
      } else {
        this.regDate = null
        this.searchDateText = '전체 사용 시간'
      }
      this.statsUsed()
      return this.searchDateText
    }
  },
  methods: {
    disabledDate: function () {
      if (this.tempDate >= this.tempDate2) {
        return true
      } else {
        return false
      }
    },
    getSearch: function (type) {
      this.type = type
      this.statsRegDate('today')
    },
    perCent: function (item, type) {
      if (type === 'mod') {
        return (item.cnt / this.statModMax) * 100
      } else {
        return (item.cnt / this.statMax) * 100
      }
    },
    todayMsg: function () {
      if (this.type === 'M') {
        this.searchDateText = this.yyyy + '년 ' + this.mm + '월'
      } else if (this.type === 'Y') {
        this.searchDateText = this.yyyy + '년 '
      } else {
        this.regDate = null
        this.searchDateText = '전체 사용 시간'
      }
    },
    showDetail: function (type) {
      if (type === 'B') {
        this.statsInfo[0] = this.deviceInfo.modelNm
        this.statsInfo[1] = this.deviceId
        this.statsInfo[2] = this.type
        this.statsInfo[3] = this.regDate
        this.statsInfo[4] = '0'
        this.detailViewModal = true
      } else if (type === 'A') {
        this.statsInfo[0] = this.deviceInfo.modelNm
        this.statsInfo[1] = this.deviceId
        this.statsInfo[2] = this.type
        this.statsInfo[3] = this.regDate
        this.modeViewModal = true
      }
    },
    statsRegDate: function (type) {
      if (type === 'today') {
        var today = new Date()
        this.mm = today.getMonth() + 1
        this.yyyy = today.getFullYear()
        if (this.mm < 10) {
          this.mm = '0' + this.mm
        }
        if (this.type === 'M') {
          this.tempDate2 = String(this.yyyy) + String(this.mm)
          this.tempDate = String(this.yyyy) + String(this.mm)
        } else if (this.type === 'Y') {
          this.tempDate2 = String(this.yyyy)
          this.tempDate = String(this.yyyy)
        }
      } else if (type === 'pre') {
        if (this.type === 'M') {
          this.mm = Number(this.mm) - 1
          if (this.mm === 0) {
            this.mm = 12
            this.yyyy = this.yyyy - 1
          }
        } else if (this.type === 'Y') {
          this.yyyy = this.yyyy - 1
        }
        if (this.mm < 10) {
          this.mm = '0' + this.mm
        }
        if (this.type === 'M') {
          this.tempDate = String(this.yyyy) + String(this.mm)
        } else if (this.type === 'Y') {
          this.tempDate = String(this.yyyy)
        }
      } else if (type === 'next') {
        if (this.type === 'M') {
          this.mm = Number(this.mm) + 1
          if (this.mm === 13) {
            this.mm = 1
            this.yyyy = this.yyyy + 1
          }
        } else if (this.type === 'Y') {
          this.yyyy = this.yyyy + 1
        }
        if (this.mm < 10) {
          this.mm = '0' + this.mm
        }
        if (this.type === 'M') {
          this.tempDate = String(this.yyyy) + String(this.mm)
        } else if (this.type === 'Y') {
          this.tempDate = String(this.yyyy)
        }
      }
      this.todayMsg()
    },
    statsUsed: function () {
      this.$http.post('/api/stats/oven/used', {
        hdeviceSeq: this.deviceId,
        statGubun: this.type,
        modelNm: this.deviceInfo.modelNm,
        reqDate: this.regDate
      })
      .then(response => {
        this.cookModeStatList = response.data.body.cookModeStatList
        this.cookStatList = response.data.body.cookStatList
        this.cookStatInfo.endDate = response.data.body.endDate
        this.cookStatInfo.startDate = response.data.body.startDate
        this.cookStatInfo.totalCookCnt = response.data.body.totalCookCnt
        this.cookStatInfo.totalUsedTime = response.data.body.totalUsedTime

        if (this.cookStatList !== null) {
          for (var index in this.cookStatList) {
            if (this.statMax < Number(this.cookStatList[index].cnt)) {
              this.statMax = Number(this.cookStatList[index].cnt)
            }
          }
        }
        if (this.cookModeStatList !== null) {
          for (var index2 in this.cookModeStatList) {
            if (this.statModMax < Number(this.cookModeStatList[index2].cnt)) {
              this.statModMax = Number(this.cookModeStatList[index2].cnt)
            }
          }
        }
        setTimeout(() => { this.loading(false) }, 200)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
<style scoped>
/* 오븐 사용통계 */
.section_statistic_title, .section_cook_graph {
    padding: 0 15px;
}
.section_statistic_title .area_calendar {
    position: relative;
    text-align: center;
    font-size: 1.9rem;
    color: #137cc1;
    margin-bottom: 18px;
}
.section_statistic_title .area_calendar span {
    display: inline-block;
    width: 129px;
}
.section_statistic_title .area_calendar_desc {
    width: 100%;
    background: #f3f3f3;
    font-size: 1.3rem;
    line-height: 20px;
    color: #888888;
    padding: 13px 0 13px 10px;
    margin-bottom: 18px;
}
@media all and (max-width: 320px) {
  .section_statistic_title .area_calendar_desc {
    width: 290px;
  }
}
.section_cook_graph .area_cook_graph {
    position: relative;
}
.section_cook_graph p.title {
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 18px;
  position: relative;
  padding-left: 20px;
  line-height: 20px;
}

.section_cook_graph p span {
  position: absolute;
  left: 0;
  top: 0;
  margin-right: 2px;
}
.section_cook_graph .box_graph_img {
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 18px;
}
.section_cook_graph .box_graph_img .none_graph {
    padding: 35px 0 55px;
    color: #888888;
    font-size: 1.7rem;
}
.section_cook_graph button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.2rem;
    color: #888888;
}
.section_cook_graph button .sprite_cook_more {
    margin-left: 4px;
}

/* 오븐 사용통계 상세 */
.popup_detail_contents.detail_cook_statistic {
    padding: 52px 0 0 0;
}
.popup_detail_contents.detail_cook_statistic .area_select {
    padding: 15px 10px;
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
    margin-bottom: 15px;
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
.section_cook_graph .box_graph_img .graph_row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}
.section_cook_graph .box_graph_img .graph_row .graph {
    width: 60%;
    height: 16px;
}
.section_cook_graph .box_graph_img .graph_row .graph span {
    display: inline-block;
    /*background: #f94a51;*/
    height: 16px;
}
.section_cook_graph .box_graph_img .graph_row .graph span.cook_repeat_1 {
    background: #ffac8e;
}
.section_cook_graph .box_graph_img .graph_row .graph span.cook_repeat_2 {
    background: #fa625d;
}
.section_cook_graph .box_graph_img .graph_row .graph span.cook_repeat_3 {
    background: #f94a51;
}
.section_cook_graph .box_graph_img .graph_row .legend {
    white-space: nowrap;
    width: 40%;
    text-overflow: ellipsis;
    overflow: hidden;

}
.section_cook_graph .box_graph_img .graph_row .legend span {
    color: #f94a51;
    padding: 0 7px;
    font-weight: bold;
}
</style>
