<template>
  <div class="wrap_contents_area" v-show="!loadingModal">
    <div class="wrap_section_graph">
    <!-- section_graph -->
    <section class="section_graph">
        <div class="graph_header">
          <p class="graph_title title_alone">최근 1년간 누적 취수량(4개월 단위)</p>
        </div>
        <div class="graph_box" style="padding-top: 0px;">
          <vue-chart
              chart-type="ColumnChart"
              :chart-events="chartEvents"
              :columns="usageCol"
              :rows="usageYearRow"
              :options="usageYearOpt"
              v-if="usageYearSt === 'Y'"
          ></vue-chart>
          <div class="non_graph" v-if="usageYearSt === 'N' || chartReady === 'N'"></div>
          <ul class="mini_water_icon clearfix">
            <li><span class="sprite sprite_mini_purify sprite_water_green"></span>정수</li>
            <li><span class="sprite sprite_mini_purify sprite_water_skyblue"></span>조리수</li>
          </ul>
        </div>
    </section>
    <!-- //section_graph -->

    <!-- section_graph -->
    <section class="section_graph">
      <div class="graph_header">
        <p class="graph_title title_alone">캐시백(15개월 누적취수량 1500L 이하)</p>
      </div>
      <div class="graph_box graph_box_none_txt">
          <table class="water_cashback" v-if="cashSt==='Y'">
              <tr v-for ="item in list">
                  <td class="month">{{ item.title }}</td>
                  <td class="water_liter">{{ item.waterAmt }}</td>
                  <td class="cashback">
                    <button class="btn btn_md btn_skyblue" v-if="item.reqYn === 'Y'" @click="reqCashBack(item)">캐쉬백적립</button>
                    <span v-else>{{item.result}}</span>
                  </td>
              </tr>
          </table>
          <div class="non_graph" style="min-height:20px;" v-if="cashSt === 'N' || chartReady === 'N'"></div>
      </div>
    </section>
    <!-- //section_graph -->

    <!-- section_graph -->
    <section class="section_graph">
        <div class="graph_header">
          <p class="graph_title title_alone">일 평균 음용량(개인이 음용량을 입력한 기준)</p>
        </div>
        <div class="graph_box">
          <p class="graph_title right">
              <span><input type="radio" class="input_radio_md input_radio_white" name="intake" @click="getIntake('W')">주</span>
              <span><input type="radio" class="input_radio_md input_radio_white" name="intake" checked @click="getIntake('D')">일</span>
          </p>
          <vue-chart
              chart-type="ColumnChart"
              :columns="intakeCol"
              :rows="intakeRow"
              :options="intakeOpt"
              style="min-height:200px"
              v-if="intakeSt==='Y'"
          ></vue-chart>
          <div class="non_graph" v-if="intakeSt === 'N' || chartReady === 'N'"></div>
        </div>
    </section>
    <!-- //section_graph -->

    <!-- section_graph -->
    <section class="section_graph">
      <div class="graph_header">
          <p class="graph_title">일 평균 취수량(실제 정수기에서 출수된 기준)</p>
      </div>
      <div class="graph_box">
        <p class="graph_title right">
          <span><input type="radio" class="input_radio_md input_radio_white" name="usage" @click="getUsage('W')">주</span>
          <span><input type="radio" class="input_radio_md input_radio_white" name="usage" checked @click="getUsage('D')">일</span>
        </p>
        <vue-chart
            chart-type="ColumnChart"
            :columns="usageCol"
            :rows="usageRow"
            :options="usageOpt"
            style="min-height:200px"
            v-if="useageSt==='Y'"
        ></vue-chart>
        <div class="non_graph" v-if="useageSt === 'N' || chartReady === 'N'"></div>
        <ul class="mini_water_icon clearfix">
          <li><span class="sprite sprite_mini_purify sprite_water_green"></span>정수</li>
          <li><span class="sprite sprite_mini_purify sprite_water_skyblue"></span>조리수</li>
        </ul>
      </div>
    </section>
    <!-- //section_graph -->

    <!-- section_graph -->
    <section class="section_graph">
        <div class="graph_header">
            <p class="graph_title">전기 사용량</p>
        </div>
        <div class="graph_box">
          <p class="graph_title left">최근 6개월({{ startDate }} ~ {{ endDate }})</p>
          <p class="graph_title right">월 평균 : {{ avgElectricRate }}원({{ setFloatNumber(avgKwh) }}KW)</p>
          <vue-chart
              chart-type="LineChart"
              :columns="elecUseCol"
              :rows="elecUseRow"
              :options="elecOpt"
              style="min-height:200px"
              v-if="elecUseSt === 'Y'"
          ></vue-chart>
          <div class="non_graph" v-if="elecUseSt === 'N' || chartReady === 'N'"></div>
          <p class="graph_desc">주거용 주택전력(고압) 기준으로 산정되었습니다. (201kwh사용기준)</p>
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
            v-if="cokeCleanSt==='Y'"
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
  name: 'miniStatsList',
  props: ['deviceId', 'userId'],
  data () {
    var self = this
    return {
      chartEvents: {
        'ready': function () {
          self.chartReady = 'Y'
        }
      },
      chartReady: 'N',
      usageYearSt: 'N',
      cashSt: 'N',
      intakeSt: 'N',
      useageSt: 'N',
      elecUseSt: 'N',
      cokeCleanSt: 'N',
      startDate: '',
      endDate: '',
      // 일평균 취수량
      usageCol: [{type: 'string', label: 'Month'}, {type: 'number', label: '조리수'}, {type: 'number', label: '정수'}, {type: 'string', role: 'annotation'}, {type: 'string', role: 'annotation'}],
      usageYearRow: [],
      usageRow: [],
      usageOpt: {
        legend: 'none',
        bar: { groupWidth: '30%' },
        backgroundColor: 'none',
        isStacked: true,
        colors: ['#a8dbd7', '#1ac3b4'],
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        tooltip: {trigger: 'none'},
        annotations: {
          highContrast: false,
          alwaysOutside: true,
          textStyle: {
            fontSize: 9.5,
            bold: true,
            color: 'white'
          },
          enableInteractivity: false,
          stem: {
            color: 'none'
          }
        },
        vAxis: {
          title: '(단위:L)',
          baselineColor: '#ffe49f',
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          gridlines: {color: '#ffe49f', count: 6},
          textStyle: {
            color: 'white'
          },
          viewWindow: {
            min: 0,
            max: 20
          }
        },
        hAxis: {
          textStyle: {
            color: 'white'
          }
        }
      },
      // 최근 1년간 누적 취수량
      usageYearCol: [{type: 'string', label: 'Month'}, {type: 'number', label: '조리수'}, {type: 'number', label: '정수'}, {type: 'string', 'role': 'tooltip', 'p': {'html': true}}],
      usageYearOpt: {
        legend: 'none',
        bar: { groupWidth: '10%' },
        backgroundColor: 'none',
        isStacked: true,
        colors: ['#a8dbd7', '#1ac3b4'],
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        // tooltip: {
        //   isHtml: true
        // },
        // createTooltip: {
        //   createCustomHTMLContent: function () {
        //     return '<div class="box_tooltip" style="top:20px; left:100px;">' +
        //            '<span>필터교체 안함</span>' +
        //            '</div>'
        //   }
        // },
        annotations: {
          highContrast: false,
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            bold: true,
            color: 'white'
          },
          enableInteractivity: false,
          stem: {
            color: 'white'
          }
        },
        vAxis: {
          title: '(단위:L)',
          baselineColor: '#ffe49f',
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          gridlines: {color: '#ffe49f', count: 6},
          textStyle: {
            color: 'white'
          },
          viewWindow: {
            min: 0,
            max: 10
          }
        },
        hAxis: {
          textStyle: {
            color: 'white'
          }
        }
      },
      // 캐시백
      list: [],
      // 일평균 음용량
      intakeCol: [{type: 'string', label: 'Month'}, {type: 'number', label: 'intake'}, {type: 'string', role: 'annotation'}, {type: 'string', role: 'annotation'}],
      intakeRow: [],
      intakeOpt: {
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        isStacked: false,
        colors: ['#ffcdac'],
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        tooltip: {trigger: 'none'},
        annotations: {
          textStyle: {
            fontSize: 9.5,
            bold: true,
            color: 'white'
          },
          enableInteractivity: false,
          stem: {
            color: 'none'
          },
          style: 'none'
        },
        vAxis: {
          title: '(단위:L)',
          baselineColor: '#ffe49f',
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          gridlines: {color: '#ffe49f', count: 6},
          // format: '#.##',
          textStyle: {
            color: 'white'
          },
          viewWindow: { min: 0, max: 20 }
        },
        hAxis: {
          textStyle: {
            color: 'white'
          }
        }
      },
      // 전기 사용량
      elecUseCol: [{type: 'string', label: 'Month'}, {type: 'number', label: '원'}, {type: 'number', label: '월간적산량'}],
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
            gridlines: {count: 6},
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
            gridlines: {color: '#ffe49f', count: 6},
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
      // 코크 살균 횟수량
      cleanCol: [{type: 'string', label: 'Month'}, {type: 'number', label: '횟수'}, {type: 'string', role: 'annotation'}],
      cleanRow: [],
      cleanOpt: {
        backgroundColor: 'none',
        legend: 'none',
        colors: ['white'],
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        tooltip: {trigger: 'none'},
        annotations: {
          textStyle: {
            fontSize: 12,
            bold: true,
            color: 'white'
          },
          enableInteractivity: false,
          stem: {
            color: 'none'
          },
          style: 'none'
        },
        pointSize: 6,
        vAxis: {
          title: '(단위:L)',
          baselineColor: '#ffe49f',
          gridlines: {color: '#ffe49f', count: 6},
          titleTextStyle: {italic: false, color: 'white', fontSize: 6},
          viewWindowMode: 'pretty',
          viewWindow: {
            min: 0,
            max: 20
          },
          textStyle: {
            color: 'white'
          }
        },
        hAxis: {
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
    this.getUsageYear()
    this.getFilter()
    this.getIntake('D')
    this.getUsage('D')
    this.getElecUseDay()
    this.getCokeClean()
  },
  computed: {
    loadingModal: function () {
      if (this.cashSt === 'Y' && this.intakeSt === 'Y' && this.useageSt === 'Y' && this.elecUseSt === 'Y' && this.cokeCleanSt === 'Y' && this.usageYearSt === 'Y' && this.chartReady === 'Y') {
        this.loading(false)
      } else {
        this.loading(true)
      }
    }
  },
  methods: {
    setFloatNumber: function (x) {
      if (String(x).indexOf('.') < 0) return x + '.0'
      else return x
    },
    // 최근 1년간 누적 취수량
    getUsageYear: function () {
      this.$http.post('/api/water/stats/usage/year', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        var res = response.data.body
        var max = this.usageYearOpt.vAxis.viewWindow.max
        var usageArr = []
        for (var index in res.list) {
          // usageArr[index] = [res.list[index].stdDate, res.list[index].cookWaterAmt, res.list[index].cleanWaterAmt, this.createCustomHTMLContent()]
          usageArr[index] = [res.list[index].stdDate, res.list[index].cookWaterAmt, res.list[index].cleanWaterAmt, res.list[index].filterChangeYn === 'N' ? '필터교체 안함' : '필터교체 함', '']
          if (max < res.list[index].cleanWaterAmt) {
            max = res.list[index].cleanWaterAmt
          }
        }
        this.usageYearOpt.vAxis.viewWindow.max = max * 3
        this.usageYearRow = usageArr
        this.usageYearSt = 'Y'
      })
      .catch(error => console.log(error))
    },
    // 캐시백
    getFilter: function () {
      this.$http.post('/api/water/filter/status', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.list = response.data.body.list
        this.cashSt = 'Y'
      })
      .catch(error => console.log(error))
    },
    // 일 평균 음용량 (주: W, 일:D)
    getIntake: function (type) {
      this.$http.post('/api/water/stats/intake/avg', {
        hdeviceSeq: this.deviceId,
        statGubun: type
      })
      .then(response => {
        var res = response.data.body
        var intakeArr = []
        this.intakeOpt.vAxis.viewWindow.max = 10
        var max = this.intakeOpt.vAxis.viewWindow.max
        for (var index in res.list) {
          intakeArr[index] = [res.list[index].stdDate, res.list[index].intakeWaterAmt, '(' + res.list[index].intakeWaterCup + '잔)', this.setFloatNumber(res.list[index].intakeWaterAmt) + 'L']
          if (max < res.list[index].intakeWaterAmt) {
            max = res.list[index].intakeWaterAmt
          }
        }
        this.intakeOpt.vAxis.viewWindow.max = max * 2
        this.intakeRow = intakeArr
        this.intakeSt = 'Y'
      })
      .catch(error => console.log(error))
    },
    // 일 평균 취수량 (주: W, 일:D)
    getUsage: function (type) {
      this.$http.post('/api/water/stats/usage/avg', {
        hdeviceSeq: this.deviceId,
        statGubun: type
      })
      .then(response => {
        var res = response.data.body
        var usageArr = []
        this.usageOpt.vAxis.viewWindow.max = 10
        var max = this.usageOpt.vAxis.viewWindow.max
        for (var index in res.list) {
          usageArr[index] = [res.list[index].stdDate, res.list[index].cookWaterAmt, res.list[index].cleanWaterAmt, '(' + parseInt(res.list[index].totalWaterCup) + '잔)', this.setFloatNumber(res.list[index].totalWaterAmt) + 'L']
        }
        this.usageOpt.vAxis.viewWindow.max = max * 3
        this.usageRow = usageArr
        this.useageSt = 'Y'
      })
      .catch(error => console.log(error))
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
        this.startDate = res.startDate
        this.endDate = res.endDate
        // for (var index in res.monthElectreicRateList) {
        //   if (parseInt(index) === parseInt(res.monthElectreicRateList.length - 1)) {
        //     eleUseArr[index] = [res.monthElectreicRateList[index].date, res.monthElectreicRateList[index].displayElectricRate, res.monthElectreicRateList[index].displayKwh]
        //   } else {
        //     eleUseArr[index] = [res.monthElectreicRateList[index].date, res.monthElectreicRateList[index].displayElectricRate, res.monthElectreicRateList[index].displayKwh]
        //   }
        // }
        for (var index in res.monthElectreicRateList) {
          eleUseArr[index] = [res.monthElectreicRateList[index].date, res.monthElectreicRateList[index].displayElectricRate, res.monthElectreicRateList[index].displayKwh]
        }
        this.elecUseRow = eleUseArr
        this.elecUseSt = 'Y'
      })
      .catch(error => console.log(error))
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
        this.cleanOpt.vAxis.viewWindow.max = max * 2
        this.cleanRow = cleanArr
        this.cokeCleanSt = 'Y'
      })
      .catch(error => console.log(error))
    },
    reqCashBack: function (item) {
      this.$http.post('/api/water/filter/req', {
        hdeviceSeq: this.deviceId,
        gid: item.gid,
        waterAmt: item.waterAmt
      })
      .then(response => {
        this.getFilter()
      })
      .catch(error => console.log(error))
    },
    createCustomHTMLContent: function () {
      return '<div class="box_tooltip">' +
             '<span>필터교체 안함</span>' +
             '</div>'
    }
  }
}
</script>

<style>
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
.section_graph .water_cashback td {
    border: 1px solid #ffa77c;
    height: 40px;
    line-height: 40px;
    color: #ffffff;
    font-size: 1.4rem;
    width: 33%;
}
.section_graph .water_cashback .month {
    background: rgba(254, 148, 97, 0.7);
    border-left: 0;
}
.section_graph .water_cashback .water_liter {
    text-align: right;
    padding-right: 11px;
}
.section_graph .water_cashback .cashback {
    border-right: 0;
}
.section_graph .mini_water_icon li {
  float: left;
  width: 50%;
  color: #ffffff;
  font-size: 1.3rem;
  text-align: left;
  position: relative;
  padding-left: 33px;
  vertical-align: middle;
  display: inline-block;
}
.section_graph .mini_water_icon li span {
  /*position: absolute;
  top: 50%;
  margin-top: -8px;
  left:10px;*/
  margin: 0 9px 0 0;
  vertical-align: middle;
}
.section_graph .mini_water_icon li:first-child {
  text-align: right;
  padding-right: 40px;
}
.non_graph {
  min-height: 200px;
}
/*.section_graph .mini_water_icon li:first-child span {
  left: 90px;
}
@media all and (max-width: 320px) {
  .section_graph .mini_water_icon li:first-child span {
    left:73px;
  }
}
@media all and (min-height: 700px) {
  .section_graph .mini_water_icon li:first-child span {
    left: 120px;
  }
}*/
.section_graph .box_tooltip {
  position: absolute;
  width: 75px;
}
.section_graph .box_tooltip span {
  background: #ffffff;
  font-size: 1rem;
  color: #2E9AFE;
  display: block;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 2px;
  position: relative;
}
.section_graph .box_tooltip span:after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  margin-left: -3px;
  width: 7px;
  height: 4px;
  background: url('/images/page/graph_tooltip.png') 0 0 no-repeat;
  -webkit-background-size: 7px;
  background-size: 7px;
}

</style>
