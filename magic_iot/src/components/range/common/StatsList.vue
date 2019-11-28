<template>
  <div class="wrap_contents_area" v-show="!loadingModal">
    <div class="wrap_bg_gray">
      <!-- section_tab -->
      <section class="section_tab">
        <div class="tabs tabs_col3">
            <ul class="clearfix">
                <li @click="getRangeUseTime('W')" :class="{active: type === 'W'}"><a>일별</a></li>
                <li @click="getRangeUseTime('M')" :class="{active: type === 'M'}"><a>월별</a></li>
                <li @click="getRangeUseTime('Y')" :class="{active: type === 'Y'}"><a>년도별</a></li>
            </ul>
        </div>
      </section>
      <!-- //section_tab -->

      <!-- section_use_time -->
      <section class="section_use_time">
        <p class="title">{{ modelKindNm }} 사용 시간</p>
        <p class="subTitle" v-if="type === 'W'">당일 사용시간은 다음날 오전 9시에 업데이트 됩니다.</p>
        <p class="subTitle" v-else style="padding-bottom:16px;"></p>
        <p class="period">{{ useDayText }}</p>
        <div class="box_graph">
          <vue-chart
              chart-type="ColumnChart"
              :chart-events="chartEvents"
              :columns="useRangeCol"
              :rows="useRangeRow"
              :options="useRangeOpt"
          ></vue-chart>
        </div>
      </section>
      <!-- //section_use_time -->

      <!-- section_total_time -->
      <section class="section_total_time">
        <p class="title">총 누적 사용시간 <span>({{ totalUsedTime.date }} ~ )</span></p>
        <div>
            <span class="total_time">{{ totalUsedTime.usedTime }}</span>
        </div>
      </section>
      <!-- //section_total_time -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'statsList',
  props: ['deviceId', 'userId', 'deviceInfo'],
  data () {
    var self = this
    return {
      chartEvents: {
        'ready': function () {
          self.chartReady = 'Y'
        }
      },
      chartReady: 'N',
      type: 'W',
      modelKind: '',
      startDate: '',
      endDate: '',
      date: '',
      useTimeSt: 'N',
      totalTimeSt: 'N',
      rangeUseInfo: {
        startDate: '',
        endDate: '',
        accumulateUsedTime: '',
        rangeUsedTimeList: [
          {
            date: '',
            time: '',
            usedTime: ''
          }
        ]
      },
      totalUsedTime: '',
      useRangeCol: [{type: 'string', label: 'day'}, {type: 'number', label: 'time'}, {type: 'string', role: 'annotation'}],
      useRangeRow: [],
      useRangeOpt: {
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        isStacked: false,
        colors: ['#46C5C3'],
        chartArea: { width: '90%', height: '80%', bottom: 40, top: 0 },
        vAxis: {
          minValue: 0,
          baselineColor: '#E6E6E6',
          gridlines: { color: 'none' },
          textPosition: 'none',
          format: '##',
          viewWindow: {
            min: 0,
            max: 20000
          }
        },
        hAxis: {
          gridlines: {
            color: '#E6E6E6',
            count: 1
          },
          textStyle: {
            fontSize: 9.5,
            color: '#A4A4A4'
          },
          format: '##'
        },
        annotations: {
          highContrast: false,
          alwaysOutside: true,
          textStyle: {
            fontSize: 10,
            bold: true,
            color: 'black'
          },
          enableInteractivity: false,
          stem: {
            color: 'none'
          },
          style: 'none'
        },
        animation: {
          duration: 0
        },
        tooltip: { trigger: 'none' }
      }
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.modelKind = this.deviceInfo.modelKind
    this.getRangeUseTime('W')
    this.getRangeTotalTime()
  },
  computed: {
    // 가스레인지 : 0x0801, 전기레인지 : 0x1001
    modelKindNm: function () {
      if (this.modelKind === '0x0801') {
        return '가스레인지'
      } else {
        return '전기레인지'
      }
    },
    useDayText: function () {
      if (this.type === 'W') return '최근 7일'
      else if (this.type === 'M') return '최근 6개월'
      else return '최근 3년'
    },
    loadingModal: function () {
      if (this.useTimeSt === 'Y' && this.totalTimeSt === 'Y' && this.chartReady === 'Y') this.loading(false)
      else if (this.useTimeSt === 'E' && this.totalTimeSt === 'E') this.loading(false)
      else this.loading(true)
    }
  },
  methods: {
    // W:일, M:월, Y:년
    getRangeUseTime: function (type) {
      this.useTimeSt = 'N'
      this.$http.post('/api/stats/range/used', {
        hdeviceSeq: this.deviceId,
        statGubun: type
      })
      .then(response => {
        var useArr = []
        this.useRangeOpt.vAxis.viewWindow.max = 1000
        var max = this.useRangeOpt.vAxis.viewWindow.max
        this.rangeUseInfo = response.data.body
        for (var index in this.rangeUseInfo.rangeUsedTimeList) {
          if (this.rangeUseInfo.rangeUsedTimeList[index].time < 60) this.rangeUseInfo.rangeUsedTimeList[index].time = 0
          useArr[index] = [this.rangeUseInfo.rangeUsedTimeList[index].date, this.rangeUseInfo.rangeUsedTimeList[index].time, this.rangeUseInfo.rangeUsedTimeList[index].usedTime]
          if (max < this.rangeUseInfo.rangeUsedTimeList[index].time) {
            max = this.rangeUseInfo.rangeUsedTimeList[index].time
          }
        }
        this.useRangeOpt.vAxis.viewWindow.max = max * 1.3
        this.type = type
        this.useRangeRow = useArr
        this.useTimeSt = 'Y'
      })
      .catch(error => {
        this.useTimeSt = 'E'
        console.log(error)
      })
    },
    getRangeTotalTime: function () {
      this.totalTimeSt = 'N'
      this.$http.post('/api/stats/range/accumulateUsed', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.totalUsedTime = response.data.body
        this.totalTimeSt = 'Y'
      })
      .catch(error => {
        this.totalTimeSt = 'E'
        console.log(error)
      })
    }
  }
}
</script>

<style>
/* ui.page.css : 가스레인지 사용통계 */
.wrap_bg_gray {
    background: #f8f8f8;
    height: 100%;
}

.wrap_bg_gray section {
    background: #ffffff;
    border-bottom: 1px solid #ededed;
}

.wrap_bg_gray .section_tab {
    border-bottom: 0;
    height: 10vh;
}

.wrap_bg_gray .title {
    font-size: 1.5rem;
    font-weight: bold;
}

.section_use_time {
    position: relative;
    padding: 15px;
    margin-bottom: 7px;
    height: 50vh;
}
.section_use_time .box_graph {
  height: 255px;
}
@media all and (max-height: 600px) {
  .section_use_time .box_graph {
    height: 220px;
  }
}
@media all and (max-width: 320px) {
  .section_use_time .box_graph {
    height: 210px;
  }
}
@media all and (min-height: 700px) {
  .section_use_time .box_graph {
    height: 290px;
  }
}
.wrap_bg_gray .section_use_time .title {
    margin-bottom: 8px;
}

.section_use_time .period {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.1rem;
    color: #858585;
}

.section_total_time {
    padding: 24px 15px 0;
    min-height: 132px;
    height: 23vh;
}
@media all and (max-width:320px ),(max-height: 600px) {
  .section_total_time {
    padding: 17px 15px 0;
  }
}
.section_total_time .title span {
    color: #a0a0a0;
    font-weight: normal;
}

.section_total_time div {
    text-align: center;
    position: relative;
    top: 42px;
}
@media all and (max-width:320px ),(max-height: 600px) {
  .section_total_time div {
    top: 36px;
  }
}
@media all and (min-height: 700px) {
  .section_total_time div {
    top: 56px;
  }
}
.section_total_time .total_time {
    position: relative;
    font-size: 2.4rem;
    padding-left: 38px;
}

.section_total_time .total_time:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url('/images/common/sprite_common.png') 0 -200px no-repeat;
    -webkit-background-size: 250px;
    background-size: 250px;
    width: 25px;
    height: 26px;
}
.subTitle {
  color: #a0a0a0;
  font-weight: normal;
  font-size: 1.2rem;
}
.vue-chart-container {
  width: 100%;
  height: 100%;
}
.vue-chart {
  width: 100%;
  height: 100%;
}
/*.section_graph_air .area_graph .box_graph {
    margin: 30px 0 18px;
    height: 200px;
}*/
</style>
