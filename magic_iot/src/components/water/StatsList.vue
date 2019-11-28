<template>
  <div class="wrap_contents_area" v-show="!loadingModal">
    <div class="wrap_section_graph">
      <!-- section_graph -->
      <section class="section_graph">
        <div class="graph_header">
            <p class="graph_title">전기 사용량</p>
            <span>최저 소비전력 슈퍼S정수기는 당사 에너지효율 3등급 정수기대비 약 80% 전기료가 절감됩니다.</span>
        </div>
        <div class="graph_box" >
          <p class="graph_title left">최근 6개월({{ startDate }} ~ {{ endDate }})</p>
          <p class="graph_title right">월 평균 : {{ avgElectricRate }}원({{ setFloatNumber(avgKwh) }}KW)</p>
          <vue-chart
              chart-type="LineChart"
              :chart-events="chartEvents"
              :columns="elecUseCol"
              :rows="elecUseRow"
              :options="elecOpt"
              style="min-hight:200px;"
              v-if="elecUseSt === 'Y'"
          ></vue-chart>
          <div class="non_graph" v-if="elecUseSt === 'N' || chartReady === 'N'"></div>
          <p class="graph_desc">주거용 주택전력(고압) 기준으로 산정되었습니다. (201kwh 사용기준)</p>
        </div>
      </section>
      <!-- //section_graph -->

      <!-- section_graph -->
      <section class="section_graph">
        <div class="graph_header">
            <p class="graph_title title_alone">하루 평균 물 수취량</p>
        </div>
        <div class="graph_box" style="padding-top:0px;">
          <p class="graph_title right">밤0시부터 24시간</p>
          <!-- 원그래프영역 -->
          <div class="box_circle_graph">
            <!-- 원그래프 이미지 파일명 변경 -->
            <div class="circle_graph">
              <div class="graph_txt" v-if="totWaterAmt === 0 && oneDaySt === 'Y'">
                <span class="graph_per">{{ totWaterAmt | totalAmtFormat }}L</span>
                <img src="/images/page/img_water_circle_graph_alpha.png" alt="">
              </div>
              <div class="graph_txt" v-else>
                <span class="graph_per" style="top:49%;">{{ totWaterAmt | totalAmtFormat }}L</span>
                <vue-chart
                    chart-type="PieChart"
                    :columns="waterOneCol"
                    :rows="waterOneRow"
                    :options="waterOneOpt"
                    style="width:100%;height:100%;display:block;"
                    v-if="oneDaySt === 'Y'"
                ></vue-chart>
              </div>
            </div>
            <div class="circle_desc" v-if ="deviceInfo.modelNm === 'WPUA400'">
              <ul>
                <li><span class="sprite sprite_purify sprite_water_blue"></span>냉수 <strong>{{ coldWater | totalAmtFormat }}L</strong></li>
                <li><span class="sprite sprite_purify sprite_water_green"></span>정수 <strong>{{ cleanWater | totalAmtFormat }}L</strong></li>
                <li><span class="sprite sprite_purify sprite_water_yellow"></span>유아수<br>/미온수 <strong>{{ childWater | totalAmtFormat }}L</strong></li>
                <li><span class="sprite sprite_purify sprite_water_red"></span>온수 <strong>{{ hotWater | totalAmtFormat }}L</strong></li>
              </ul>
            </div>
            <div class="circle_desc" style="top:46px;" v-else>
              <ul>
                <li><span class="sprite sprite_purify sprite_water_blue"></span>냉수 <strong>{{ coldWater | totalAmtFormat }}L</strong></li>
                <li><span class="sprite sprite_purify sprite_water_green"></span>정수 <strong>{{ cleanWater | totalAmtFormat }}L</strong></li>
              </ul>
            </div>
          </div>
          <p class="graph_desc" style="padding:0px;">하루에 섭취해야 하는 물의 양(L) = (키 + 몸무게)/100<br>우리 몸의 필수품!건강하고 깨끗한 물!챙겨드세요~</p>
        </div>
      </section>
      <!-- //section_graph -->

      <!-- section_graph -->
      <section class="section_graph">
          <div class="graph_header">
              <p class="graph_title title_alone">1일 ~ 말일까지 일평균 물 취수량 </p>
          </div>
          <div class="graph_box">
            <p class="graph_title left">최근 6개월</p>
            <p class="graph_title right">일일 평균 : {{ setFloatNumber(avgStat) }}L</p>
            <vue-chart
                chart-type="ColumnChart"
                :columns="monthCol"
                :rows="monthRow"
                :options="monthOpt"
                style="min-height:200px"
                v-if="monthSt === 'Y'"
            ></vue-chart>
            <div class="non_graph" v-if="monthSt === 'N' || chartReady === 'N'"></div>
            <!-- 그래프 물 아이콘 추가 -->
            <ul class="water_icon water_icon_full clearfix" v-if ="deviceInfo.modelNm === 'WPUA400'">
              <li><span class="sprite sprite_purify sprite_water_blue"></span>냉수</li>
              <li><span class="sprite sprite_purify sprite_water_green"></span>정수</li>
              <li><span class="sprite sprite_purify sprite_water_yellow"></span>유아수<br>/미온수</li>
              <li><span class="sprite sprite_purify sprite_water_red"></span>온수</li>
            </ul>
            <!-- 냉정수기 -->
            <ul class="water_icon clearfix" v-else>
              <li><span class="sprite sprite_purify sprite_water_blue"></span>냉수</li>
              <li><span class="sprite sprite_purify sprite_water_green"></span>정수</li>
            </ul>
            <!--// 냉정수기-->
          </div>
      </section>
      <!-- //section_graph -->

      <!-- section_graph -->
      <section class="section_graph" >
        <div class="graph_header">
            <p class="graph_title">어린이 취수량</p>
        </div>
        <div class="graph_box">
          <p class="graph_title left">최근 6개월({{ startDate }} ~ {{ endDate }})</p>
          <p class="graph_title right">일일 평균 : {{ setFloatNumber(avgKid) }}L({{ setFloatNumber(avgKidCup)}}잔)</p>
          <vue-chart
              chart-type="LineChart"
              :columns="childCol"
              :rows="childRow"
              :options="childOpt"
              style="min-height:200px"
              v-if="monthSt === 'Y'"
          ></vue-chart>
          <div class="non_graph" v-if="monthSt === 'N' || chartReady === 'N'"></div>
        </div>
      </section>
      <!-- //section_graph -->

      <!-- section_graph -->
      <section class="section_graph">
        <div class="graph_header">
            <p class="graph_title">코크살균(횟수)</p>
        </div>
        <div class="graph_box">
          <p class="graph_title left">최근 7일</p>
          <p class="graph_title right">일일 평균 : {{ setFloatNumber(avgPerDay) }}회</p>
          <vue-chart
              chart-type="LineChart"
              :columns="cleanCol"
              :rows="cleanRow"
              :options="cleanOpt"
              style="min-height:200px"
              v-if="cokeCleanSt === 'Y'"
          ></vue-chart>
          <div class="non_graph" v-if="cokeCleanSt === 'N' || chartReady === 'N'"></div>
        </div>
      </section>
      <!-- //section_graph -->
    </div>
  </div>
</template>

<script>

var day = new Date()
var today = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate()

export default {
  name: 'statsList',
  props: ['userId', 'deviceId', 'deviceInfo'],
  components: { },
  data () {
    var self = this
    return {
      chartEvents: {
        'ready': function () {
          self.chartReady = 'Y'
        }
      },
      chartReady: 'N',
      oneDaySt: 'N',
      monthSt: 'N',
      cokeCleanSt: 'N',
      elecUseSt: 'N',
      startDate: '',
      endDate: '',
      coldWater: '',
      cleanWater: '',
      childWater: '',
      hotWater: '',
      // 전기 사용량
      elecUseCol: [{type: 'string', label: '월'}, {type: 'number', label: '원'}, {type: 'number', label: '월간적산량'}],
      elecUseRow: [],
      elecOpt: {
        backgroundColor: 'none',
        pointSize: 6,
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        colors: ['#53abeb', '#d7441a'],
        legend: {
          position: 'bottom',
          textStyle: {
            fontSize: 12,
            color: 'white'
          }
        },
        series: { 0: { targetAxisIndex: 0 }, 1: { targetAxisIndex: 1 } },
        tooltip: {trigger: 'none'},
        annotations: {
          highContrast: false,
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            bold: true,
            color: '#53abeb'
          },
          enableInteractivity: false,
          stem: {
            color: 'none'
          },
          style: 'none'
        },
        InterlacedColor: '#ffe49f',
        vAxes: {
          0: {
            title: '(단위:원)',
            baselineColor: '#ffe49f',
            titleTextStyle: { italic: false, color: 'white', fontSize: 6 },
            minValue: 0,
            maxValue: 8,
            format: 'decimal',
            textStyle: {
              color: 'white'
            }
          },
          1: {
            title: '월간적산량(KWH)',
            baseline: 1,
            gridlines: {
              color: '#ffe49f'
            },
            baselineColor: 'none',
            titleTextStyle: { italic: false, color: 'white', fontSize: 6 },
            minValue: 0,
            maxValue: 1,
            format: '#.#',
            textStyle: {
              color: 'white'
            }
          }
        },
        hAxis: {
          textStyle: {
            color: 'white'
          }
        }
      },
      avgElectricRate: '',
      avgKwh: '',
      // 하루 평균 물 취수량
      waterOneCol: [{type: 'string', label: 'WaterTemp'}, {type: 'number', label: 'Amt'}],
      waterOneRow: [],
      waterOneOpt: {
        colors: ['#53abeb', '#2ecdc0', '#eac85d', '#d7441a'],
        pieHole: 0.6,
        backgroundColor: 'none',
        tooltip: {trigger: 'none'},
        sliceVisibilityThreshold: 0,
        chartArea: {
          width: '75%'
        },
        legend: 'none',
        pieSliceText: 'none'
      },
      totWaterAmt: '',
      // 일평균 취수량
      monthCol: [{type: 'string', label: '월'}, {type: 'number', label: '냉수'}, {type: 'number', label: '정수'}, {type: 'number', label: '유아수/미온수'}, {type: 'number', label: '온수'}],
      monthRow: [],
      monthOpt: {
        colors: ['#53abeb', '#2ecdc0', '#eac85d', '#d7441a'],
        legend: 'none',
        bar: { groupWidth: '60%' },
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        backgroundColor: 'none',
        tooltip: {trigger: 'none'},
        isStacked: true,
        vAxis: {
          title: '(단위:L)',
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          baselineColor: '#ffe49f',
          gridlines: {color: '#ffe49f', count: 6},
          format: '#.##',
          textStyle: {
            color: 'white'
          },
          viewWindow: {
            min: 0,
            max: 0.1
          }
        },
        hAxis: {
          baselineColor: 'none',
          textStyle: {
            color: 'white'
          }
        }
      },
      avgStat: '',
      // 어린이 취수량
      childCol: [{type: 'string', label: 'Month'}, {type: 'number', label: '취수량'}, {type: 'string', role: 'annotation'}, {type: 'string', role: 'annotation'}],
      childRow: [],
      childOpt: {
        backgroundColor: 'none',
        colors: ['white'],
        legend: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        pointSize: 6,
        tooltip: {trigger: 'none'},
        annotations: {
          textStyle: {
            fontSize: 12,
            bold: true,
            color: 'white'
          },
          highContrast: false,
          alwaysOutside: true,
          enableInteractivity: false,
          stem: {
            color: 'none'
          },
          style: 'none'
        },
        vAxis: {
          title: '(단위:L)',
          baselineColor: '#ffe49f',
          gridlines: {color: '#ffe49f', count: 6},
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          format: '##',
          viewWindow: {
            min: 0,
            max: 10
          },
          textStyle: {
            color: 'white'
          }
        },
        hAxis: {
          baselineColor: '#ffe49f',
          textStyle: {
            color: 'white'
          }
        }
      },
      avgKid: '',
      avgKidCup: '',
      // 코크 살균 횟수량
      cleanCol: [{type: 'string', label: 'Month'}, {type: 'number', label: '횟수'}, {type: 'string', role: 'annotation'}],
      cleanRow: [],
      cleanOpt: {
        backgroundColor: 'none',
        colors: ['white'],
        legend: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        pointSize: 6,
        tooltip: {trigger: 'none'},
        annotations: {
          textStyle: {
            fontSize: 12,
            bold: true,
            color: 'white'
          },
          highContrast: false,
          alwaysOutside: true,
          enableInteractivity: false,
          stem: {
            color: 'none'
          },
          style: 'none'
        },
        vAxis: {
          title: '(단위:L)',
          baselineColor: '#ffe49f',
          gridlines: {color: '#ffe49f', count: 6},
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          format: '##',
          viewWindow: {
            min: 0,
            max: 10
          },
          textStyle: {
            color: 'white'
          }
        },
        hAxis: {
          baselineColor: '#ffe49f',
          textStyle: {
            color: 'white'
          }
        }
      },
      avgPerDay: ''
    }
  },
  filters: {
    totalAmtFormat: function (val) {
      if (String(val).indexOf('.') < 0) return val + '.00'
      else return val
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.getOneDay()
    this.getMonth()
    this.getCokeClean()
    this.getElecUseDay()
  },
  computed: {
    loadingModal: function () {
      if (this.chartReady === 'Y' && this.oneDaySt === 'Y' && this.monthSt === 'Y' && this.cokeCleanSt === 'Y' && this.elecUseSt === 'Y') {
        this.loading(false)
      } else if (this.oneDaySt === 'E' || this.monthSt === 'E' || this.cokeCleanSt === 'E' || this.elecUseSt === 'E') {
        this.loading(false)
      } else this.loading(true)
    }
  },
  methods: {
    setFloatNumber: function (x) {
      if (String(x).indexOf('.') < 0) return x + '.0'
      else return x
    },
    // 전기 사용량
    getElecUseDay: function () {
      this.$http.post('/api/stats/electric/rate', {
        hdeviceSeq: this.deviceId,
        regDate: today,
        typeCd: 20
      })
      .then(response => {
        var res = response.data.body
        var eleUseArr = []
        this.avgElectricRate = res.avgElectricRate
        this.avgKwh = res.avgKwh
        for (var index in res.monthElectreicRateList) {
          eleUseArr[index] = [res.monthElectreicRateList[index].date, res.monthElectreicRateList[index].displayElectricRate, res.monthElectreicRateList[index].displayKwh]
        }
        this.elecUseRow = eleUseArr
        this.elecUseSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.elecUseSt = 'E'
      })
    },
    // 하루 평균 물 취수량
    getOneDay: function () {
      this.$http.post('/api/stats/water/day', {
        hdeviceSeq: this.deviceId,
        regDate: today
      })
      .then(response => {
        var res = response.data.body
        this.totWaterAmt = res.totWaterAmt
        if (this.deviceInfo.modelNm === 'WPUA400') {
          this.waterOneRow = [['냉수 ' + this.setFloatNumber(res.coldWaterAmt) + 'L', res.coldWaterAmt], ['정수 ' + this.setFloatNumber(res.cleanWaterAmt) + 'L', res.cleanWaterAmt], ['유아수\n/미온수 ' + this.setFloatNumber(res.childWaterAmt) + 'L', res.childWaterAmt], ['온수 ' + this.setFloatNumber(res.hotWaterAmt) + 'L', res.hotWaterAmt]]
          this.coldWater = res.coldWaterAmt
          this.cleanWater = res.cleanWaterAmt
          this.childWater = res.childWaterAmt
          this.hotWater = res.hotWaterAmt
        } else {
          this.waterOneRow = [['냉수 ' + res.coldWaterAmt + 'L', res.coldWaterAmt], ['정수 ' + res.cleanWaterAmt + 'L', res.cleanWaterAmt]]
          this.coldWater = res.coldWaterAmt
          this.cleanWater = res.cleanWaterAmt
        }
        this.oneDaySt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.oneDaySt = 'E'
      })
    },
    // 일평균 물 취수량 및 어린이 취수량
    getMonth: function () {
      this.$http.post('/api/stats/water/month', {
        hdeviceSeq: this.deviceId,
        regDate: today
      })
      .then(response => {
        var res = response.data.body
        var monthArr = []
        var childArr = []
        var monthMax = this.monthOpt.vAxis.viewWindow.max
        var childMax = this.childOpt.vAxis.viewWindow.max
        this.startDate = res.startDate
        this.endDate = res.endDate
        this.avgStat = res.avgStat
        this.avgKid = res.avgKid
        this.avgKidCup = res.avgKidCup
        for (var index in res.userHdeviceStatsDayList) {
          // 일평균 물 취수량
          if (this.deviceInfo.modelNm === 'WPUA300') {
            this.monthCol = [{type: 'string', label: 'Month'}, {type: 'number', label: '냉수'}, {type: 'number', label: '정수'}]
            monthArr[index] = [res.userHdeviceStatsDayList[index].date, res.userHdeviceStatsDayList[index].coldWaterAmt, res.userHdeviceStatsDayList[index].cleanWaterAmt]
            if (monthMax < res.userHdeviceStatsDayList[index].coldWaterAmt + res.userHdeviceStatsDayList[index].cleanWaterAmt) {
              monthMax = ((res.userHdeviceStatsDayList[index].coldWaterAmt + res.userHdeviceStatsDayList[index].cleanWaterAmt))
            }
          } else {
            monthArr[index] = [res.userHdeviceStatsDayList[index].date, res.userHdeviceStatsDayList[index].coldWaterAmt, res.userHdeviceStatsDayList[index].cleanWaterAmt, res.userHdeviceStatsDayList[index].childWaterAmt, res.userHdeviceStatsDayList[index].hotWaterAmt]
            if (monthMax < res.userHdeviceStatsDayList[index].coldWaterAmt + res.userHdeviceStatsDayList[index].cleanWaterAmt + res.userHdeviceStatsDayList[index].childWaterAmt + res.userHdeviceStatsDayList[index].hotWaterAmt) {
              monthMax = ((res.userHdeviceStatsDayList[index].coldWaterAmt + res.userHdeviceStatsDayList[index].cleanWaterAmt + res.userHdeviceStatsDayList[index].childWaterAmt + res.userHdeviceStatsDayList[index].hotWaterAmt))
            }
          }

          // 어린이 취수량
          if (parseInt(index) === parseInt(res.userHdeviceStatsDayList.length - 1)) {
            childArr[index] = [res.userHdeviceStatsDayList[index].date, res.userHdeviceStatsDayList[index].childWaterAmt, this.setFloatNumber(res.userHdeviceStatsDayList[index].childWaterCnt) + '잔', this.setFloatNumber(res.userHdeviceStatsDayList[index].childWaterAmt) + 'L']
          } else {
            childArr[index] = [res.userHdeviceStatsDayList[index].date, res.userHdeviceStatsDayList[index].childWaterAmt, '', '']
          }
          if (childMax < res.userHdeviceStatsDayList[index].childWaterAmt) {
            childMax = res.userHdeviceStatsDayList[index].childWaterAmt
          }
        }
        this.monthOpt.vAxis.viewWindow.max = monthMax * 1.2
        this.childOpt.vAxis.viewWindow.max = childMax * 1.2
        this.monthRow = monthArr
        this.childRow = childArr
        this.monthSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.monthSt = 'E'
      })
    },
    // 코크살균 횟수
    getCokeClean: function () {
      this.$http.post('/api/stats/coke/range', {
        hdeviceSeq: this.deviceId,
        reqDate: today
      })
      .then(response => {
        var res = response.data.body
        var cleanArr = []
        var max = this.cleanOpt.vAxis.viewWindow.max
        this.avgPerDay = res.avgPerDay
        for (var index in res.list) {
          if (parseInt(index) === parseInt(res.list.length - 1)) {
            cleanArr[index] = [res.list[index].regDate, res.list[index].cokeCleanCnt, String(res.list[index].cokeCleanCnt)]
          } else {
            cleanArr[index] = [res.list[index].regDate, res.list[index].cokeCleanCnt, '']
          }
          if (max < res.list[index].cokeCleanCnt) {
            max = res.list[index].kidWaterAmt
          }
        }
        this.cleanOpt.vAxis.viewWindow.max = max * 1.2
        this.cleanRow = cleanArr
        this.cokeCleanSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.cokeCleanSt = 'E'
      })
    }
  }
}
</script>
<style scope>
/* ui.page.css : 사용통계*/
.wrap_section_graph {
    background: #f8f8f8;
}
.section_graph {
    background: #fe995e;
    background: -moz-linear-gradient(top, #fe995e 0%, #ff603d 100%);
    background: -webkit-linear-gradient(top, #fe995e 0%,#ff603d 100%);
    background: linear-gradient(to bottom, #fe995e 0%,#ff603d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe995e', endColorstr='#ff603d',GradientType=0 );
    margin-top: 7px;
    padding: 0 15px 20px;
}
.section_graph .graph_header {
    margin: 0 0 16px;
    border-bottom: #ffffff 1px solid;
    color: #ffffff;
    padding: 24px 7px 4px;
}
.section_graph .graph_header .graph_title {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 5px;
}
.section_graph .graph_header .graph_title.title_alone {
    margin-bottom: 18px;
}

.section_graph .graph_header span {
    font-size: 1.2rem;
    line-height: 1.3rem;
}
.section_graph .graph_box {
    text-align: center;
    padding-top: 32px;
    position: relative;
}
.section_graph .graph_box.graph_box_none_txt {
    text-align: center;
    padding-top: 0;
    position: relative;
}
.section_graph .graph_box .graph_title {
    font-size: 1.2rem;
    color: #ffffcb;
    position: absolute;
    top: 0;
}
.section_graph .graph_box .graph_title.left {
    left: 15px;
}
.section_graph .graph_box .graph_title.right {
    right: 15px;
}
@media all and (max-width: 320px) {
    .section_graph .graph_box .graph_title {
        font-size: 1rem;
    }
    .section_graph .graph_box .graph_title.left {
        left: 2px;
    }
    .section_graph .graph_box .graph_title.right {
        right: 2px;
    }
}
.section_graph .graph_box .graph_title.right span {
    vertical-align: middle;
    margin-left: 12px;
}
.section_graph .graph_box img {
    width: 343px;
}
.section_graph .graph_box .graph_desc {
    color: #ffffff;
    font-size: 1.1rem;
    padding: 20px 0;
}

/* 사용통계 그래프 물 아이콘 */
.section_graph .box_circle_graph {
  position: relative;
  text-align: left;
}
.section_graph .graph_txt {
  text-align: center;
  /*position: relative;
  top: 23px;*/
}
.section_graph .box_circle_graph img {
  /*width: 113px;
  height: 113px;*/
  width: 133px;
  height: 133px;
  display: block;
  margin:0 auto;
  position: relative;
  top: 40px;
}
.section_graph .box_circle_graph .circle_desc {
  position: absolute;
  right: 10px;
  top: 40px;
}
@media all and (max-width: 320px) {
  .section_graph .box_circle_graph .circle_desc {
    right: -5px;
  }
}
.section_graph .box_circle_graph ul li {
  height: 30px;
  color: #ffffff;
  font-size: 1.3rem;
  position: relative;
  padding-left: 25px;
  padding-right: 57px;
  line-height: 1.2rem;
}
@media all and (max-width: 320px) {
  .section_graph .box_circle_graph ul li {
    padding-left: 26px;
    padding-right: 59px;
  }
}
@media all and (min-height: 700px) {
  .section_graph .box_circle_graph .circle_desc {
    right: 30px;
  }
  .section_graph .box_circle_graph ul li {
    padding-right: 55px;
  }
}
.section_graph .box_circle_graph ul li:after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.section_graph .box_circle_graph ul li .sprite {
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 0;
}
.section_graph .box_circle_graph ul li strong {
  position: absolute;
  right: 14px;
  top: 50%;
  margin-top: -7px;
  font-size: 1.3rem;
}
.section_graph .water_icon.water_icon_full {
  display: inline-block;
  width: 100%;
  padding-left: 10px;
}
@media all and (min-width: 400px) {
  .section_graph .water_icon.water_icon_full {
    padding-left: 20px;
  }
}
.section_graph .water_icon li {
  float: left;
  width: 50%;
  color: #ffffff;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  /*padding-left: 40px;*/
  padding-left: 43px;
}
.section_graph .water_icon.water_icon_full li {
  width: 25%;
  text-align: left;
  height: 24px;
  line-height: 12px;
  padding-left: 33px;
}
@media all and (max-width: 320px) {
  .section_graph .water_icon.water_icon_full li {
    padding-left: 30px;
  }
}
.section_graph .water_icon li:after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.section_graph .water_icon li span {
  /*position: absolute;
  top: 50%;
  margin-top: -8px;
  left:10px;*/
  margin: 0 9px 0 0;
  vertical-align: middle;
}
.section_graph .water_icon.water_icon_full li span {
  position: absolute;
  top: 50%;
  margin: -8px 0 0;
  left:10px;
}
@media all and (max-width: 320px) {
  .section_graph .water_icon.water_icon_full li span {
    left: 7px;
  }
}
.section_graph .water_icon li:first-child {
  text-align: right;
  /*padding-right: 40px;*/
  padding-right: 53px;
}
.section_graph .water_icon.water_icon_full li:first-child {
  text-align: left;
  padding-right: 0;
}

.overlay {
  width: 50px;
  position: absolute;
  top: 40%;
  left: 23%;
  font-size: 20px;
  color: white;
  text-align: center;
}
  @media all and (max-width: 320px) {
    .overlay {
      left: 26%;
    }
  }
@media all and (min-height: 700px) {
  .overlay {
    left: 20%;
  }
}
.non_graph {
  min-height: 200px;
}
.section_graph .circle_graph {
  width: 60%;
  position: relative;
  min-height: 190px;
}
.section_graph .circle_graph .graph_per {
  display: block;
  position: absolute;
  /*top: 50%;*/
  top: 55%;
  left: 0;
  width: 100%;
  margin-top: -8px;
  font-size: 20px;
  color: white;
  text-align: center;
}
</style>
