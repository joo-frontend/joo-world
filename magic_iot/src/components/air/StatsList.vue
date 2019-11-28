<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area" v-show="!loadingModal">
    <section class="section_tab">
      <div class="tabs tabs_col3">
        <ul class="clearfix">
          <li @click="getSearch('D')" :class="{active: type === 'D'}"><a>일</a></li>
          <li @click="getSearch('W')" :class="{active: type === 'W'}"><a>주</a></li>
          <li @click="getSearch('M')" :class="{active: type === 'M'}"><a>월</a></li>
        </ul>
      </div>
    </section>

    <!--  -->
    <section class="section_graph_air">
      <p class="desc" style="min-height:30px;">{{ dateText }}</p>
      <div class="area_graph">
        <p>공기상태</p>
        <div class="graph_desc">
          <span class="inside">실내</span>
          <span class="outside">실외</span>
        </div>
        <span class="good" v-if="chartReady === 'Y'">좋음</span>
        <span class="normal" v-if="chartReady === 'Y'">보통</span>
        <span class="bad" v-if="chartReady === 'Y'">나쁨</span>
        <span class="very_bad" v-if="chartReady === 'Y'">매우<br>나쁨</span>
        <div class="box_graph">
          <vue-chart
            chart-type="ColumnChart"
            :chart-events="chartEvents"
            :columns="aqiCol"
            :rows="aqiRow"
            :options="aqiOpt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
      <div class="area_graph">
        <p>미세먼지 PM 10</p>
        <div class="graph_desc">
          <span class="inside">실내</span>
          <span class="outside">실외</span>
        </div>
        <span class="good" v-if="chartReady === 'Y'">좋음</span>
        <span class="normal" v-if="chartReady === 'Y'">보통</span>
        <span class="bad" v-if="chartReady === 'Y'">나쁨</span>
        <span class="very_bad" v-if="chartReady === 'Y'">매우<br>나쁨</span>
        <div class="box_graph">
          <vue-chart
            chart-type="ColumnChart"
            :columns="aqiCol"
            :rows="pm10Row"
            :options="pm10Opt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
      <div class="area_graph">
        <p>초미세먼지 PM 2.5</p>
        <div class="graph_desc">
          <span class="inside">실내</span>
          <span class="outside">실외</span>
        </div>
        <span class="good" v-if="chartReady === 'Y'">좋음</span>
        <span class="normal" v-if="chartReady === 'Y'">보통</span>
        <span class="bad" v-if="chartReady === 'Y'">나쁨</span>
        <span class="very_bad" v-if="chartReady === 'Y'">매우<br>나쁨</span>
        <div class="box_graph">
          <vue-chart
            chart-type="ColumnChart"
            :columns="aqiCol"
            :rows="pm25Row"
            :options="pm25Opt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
      <div class="area_graph">
        <p>가스</p>
        <div class="graph_desc">
        </div>
        <span class="good" v-if="chartReady === 'Y'">좋음</span>
        <span class="normal" v-if="chartReady === 'Y'">보통</span>
        <span class="bad" v-if="chartReady === 'Y'">나쁨</span>
        <span class="very_bad" v-if="chartReady === 'Y'">매우<br>나쁨</span>
        <div class="box_graph">
          <vue-chart
            chart-type="ColumnChart"
            :columns="gasCol"
            :rows="gasRow"
            :options="gasOpt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
      <div class="area_graph" v-if="deviceInfo.modelNm !== 'ACLV35' && deviceInfo.modelNm !== 'ACLV32'">
        <p>실내온도</p>
        <div class="box_graph">
          <vue-chart
            chart-type="LineChart"
            :columns="gasCol"
            :rows="tempRow"
            :options="tempOpt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
      <div class="area_graph" v-if="deviceInfo.modelNm !== 'ACLV35' && deviceInfo.modelNm !== 'ACLV32'">
        <p>실내 습도</p>
        <div class="box_graph">
          <vue-chart
            chart-type="LineChart"
            :columns="gasCol"
            :rows="humRow"
            :options="humOpt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
      <div class="area_graph" v-if="deviceInfo.modelNm === 'ACLV200'">
        <p style="padding-bottom:5px;">가습모드 사용시간</p>
        <span style="font-size:1.3rem;color:#919191;">{{usedText}}</span>
        <div class="box_graph">
          <vue-chart
            chart-type="LineChart"
            :columns="gasCol"
            :rows="usedRow"
            :options="usedOpt"
            style="min-height:200px"
          ></vue-chart>
        </div>
      </div>
    </section>
    <!-- // -->
  </div>
  <!-- //wrap_contents_area-->
</template>

<script>
export default {
  name: 'statsList',
  props: ['deviceId', 'userId', 'deviceInfo'],
  components: { },
  data () {
    var self = this
    return {
      chartEvents: {
        'ready': function () {
          self.chartReady = 'Y'
        }
      },
      dateText: '',
      type: 'D',
      useSt: 'N',
      humSt: 'N',
      pmSt: 'N',
      chartReady: 'N',
      atmosInfo: {
        aqiList: {},
        pm10List: {},
        pm25List: {}
      },
      gasInfo: {
        airGasStatList: {}
      },
      indorInfo: {
        tempList: {},
        humList: {}
      },
      usedInfo: {
        usedList: {}
      },
      aqiCol: [{type: 'string', label: 'date'}, {type: 'number', label: '실내'}, {type: 'number', label: '실외'}],
      aqiRow: [],
      aqiOpt: {
        colors: ['#7ecefd', '#ff9666'],
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        vAxis: {
          viewWindowMode: 'pretty',
          format: '',
          textPosition: 'none',
          viewWindow: {
            min: 0,
            max: 4
          }
        },
        hAxis: {
          textStyle: {
            color: '#000000'
          }
        }
      },
      pm10Row: [],
      pm10Opt: {
        colors: ['#7ecefd', '#ff9666'],
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        vAxis: {
          viewWindowMode: 'pretty',
          textPosition: 'none',
          viewWindow: {
            min: 0,
            max: 100
          }
        }
      },
      pm25Row: [],
      pm25Opt: {
        colors: ['#7ecefd', '#ff9666'],
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        vAxis: {
          viewWindowMode: 'pretty',
          textPosition: 'none',
          viewWindow: {
            min: 0,
            max: 100
          }
        },
        hAxis: {
          textStyle: {
            color: '#000000'
          }
        }
      },
      gasCol: [{type: 'string', label: 'date'}, {type: 'number', label: '가스'}],
      gasRow: [],
      gasOpt: {
        colors: ['#7ecefd'],
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        vAxis: {
          viewWindowMode: 'pretty',
          textPosition: 'none',
          viewWindow: {
            min: 0,
            max: 4
          }
        },
        hAxis: {
          textStyle: {
            color: '#000000'
          }
        }
      },
      tempRow: [],
      tempOpt: {
        colors: ['#7ecefd'],
        legend: 'none',
        bar: { groupWidth: '60%' },
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        pointSize: 6,
        vAxis: {
          viewWindowMode: 'pretty',
          format: '',
          textStyle: {
            color: '#000000'
          },
          ticks: null,
          viewWindow: {
            min: 0,
            max: 8
          }
        },
        hAxis: {
          textStyle: {
            color: '#000000'
          }
        }
      },
      humRow: [],
      humOpt: {
        colors: ['#7ecefd'],
        legend: 'none',
        bar: { groupWidth: '60%' },
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        pointSize: 6,
        vAxis: {
          viewWindowMode: 'pretty',
          format: '',
          textStyle: {
            color: '#000000'
          },
          ticks: null,
          viewWindow: {
            min: 0,
            max: 8
          }
        },
        hAxis: {
          textStyle: {
            color: '#000000'
          }
        }
      },
      usedRow: [],
      usedOpt: {
        colors: ['navy'],
        legend: 'none',
        backgroundColor: 'none',
        chartArea: { width: '80%', height: '75%', bottom: 35 },
        pointSize: 6,
        vAxis: {
          viewWindowMode: 'pretty',
          format: '',
          textStyle: {
            color: '#000000'
          },
          viewWindow: {
            min: 0,
            max: 8
          }
        },
        hAxis: {
          textStyle: {
            color: '#000000'
          }
        }
      }
    }
  },
  created () {
    this.$emit('setTabMenu')
    this.getAtmos(this.type)
    this.getGas(this.type)
    this.getIndoor(this.type)
    this.getUsed()
  },
  computed: {
    loadingModal: function () {
      if (this.useSt === 'Y' && this.humSt === 'Y' && this.pmSt === 'Y' && this.gasSt === 'Y' && this.chartReady === 'Y') {
        this.loading(false)
      } else if (this.useSt === 'E' || this.humSt === 'E' || this.pmSt === 'E' || this.gasSt === 'E') {
        this.loading(false)
      } else {
        this.loading(true)
      }
    },
    usedText: function () {
      return '최근 7일 (' + this.usedInfo.startDate + ' ~ ' + this.usedInfo.endDate + ')'
    }
  },
  methods: {
    getUsed: function () {
      this.$http.post('/api/stats/air/used', {
        hdeviceSeq: this.deviceId
      })
      .then(response => {
        this.usedInfo = response.data.body
        var usedArr = []
        var max = this.usedOpt.vAxis.viewWindow.max
        for (var index in this.usedInfo.usedList) {
          usedArr[index] = [this.usedInfo.usedList[index].date, Number(this.usedInfo.usedList[index].usedTime)]
          if (max < this.usedInfo.usedList[index].usedTime) {
            max = this.usedInfo.usedList[index].usedTime
          }
        }
        this.usedOpt.vAxis.viewWindow.max = max
        this.usedRow = usedArr
        this.useSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.useSt = 'E'
      })
    },
    getSearch: function (type) {
      this.pmSt = 'N'
      this.humSt = 'N'
      this.gasSt = 'N'
      this.getAtmos(type)
      this.getGas(type)
      this.getIndoor(type)
    },
    getIndoor: function (type) {
      this.$http.post('/api/stats/air/indoor', {
        hdeviceSeq: this.deviceId,
        statGubun: type
      })
      .then(response => {
        this.indoorInfo = response.data.body
        this.type = type
        var tempArr = []
        this.tempOpt.vAxis.viewWindow.max = 40
        var tempMax = this.tempOpt.vAxis.viewWindow.max
        for (var index in this.indoorInfo.tempList) {
          tempArr[index] = [this.indoorInfo.tempList[index].date, Number(this.indoorInfo.tempList[index].temperature)]
          if (tempMax < this.indoorInfo.tempList[index].temperature) {
            tempMax = this.indoorInfo.tempList[index].temperature
          }
        }
        this.tempRow = tempArr
        var humArr = []
        this.humOpt.vAxis.viewWindow.max = 40
        var humMax = this.humOpt.vAxis.viewWindow.max
        for (var index2 in this.indoorInfo.humList) {
          humArr[index2] = [this.indoorInfo.humList[index2].date, Number(this.indoorInfo.humList[index2].humidity)]
          if (humMax < this.indoorInfo.humList[index2].humidity) {
            humMax = this.indoorInfo.humList[index2].humidity
          }
        }
        this.tempOpt.vAxis.viewWindow.max = tempMax * 1.5
        this.humOpt.vAxis.viewWindow.max = humMax * 1.5
        this.humRow = humArr
        this.humSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.humSt = 'E'
      })
    },
    getGas: function (type) {
      this.$http.post('/api/stats/air/gas', {
        hdeviceSeq: this.deviceId,
        statGubun: type
      })
      .then(response => {
        this.gasInfo = response.data.body
        this.type = type
        var gasArr = []
        for (var index in this.gasInfo.airGasStatList) {
          gasArr[index] = [this.gasInfo.airGasStatList[index].date, Number(this.gasInfo.airGasStatList[index].gas)]
        }
        this.gasRow = gasArr
        this.gasSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.gasSt = 'E'
      })
    },
    getAtmos: function (type) {
      this.$http.post('/api/stats/air/atmos', {
        hdeviceSeq: this.deviceId,
        statGubun: type
      })
      .then(response => {
        this.atmosInfo = response.data.body
        this.type = type
        var aqihArr = []
        var pm10Arr = []
        var pm25Arr = []
        for (var index in this.atmosInfo.aqiList) {
          aqihArr[index] = [this.atmosInfo.aqiList[index].date, Number(this.atmosInfo.aqiList[index].indoor), Number(this.atmosInfo.aqiList[index].outdoor)]
        }
        this.aqiRow = aqihArr
        for (var index2 in this.atmosInfo.pm10List) {
          var pm10Indoor = Number(this.atmosInfo.pm10List[index2].indoor)
          if (pm10Indoor > 0) {
            if (pm10Indoor <= 30) {
              pm10Indoor = Math.round(Number(pm10Indoor) * 25 / 30)
            } else if (pm10Indoor <= 80) {
              pm10Indoor = 25 + Math.round((Number(pm10Indoor) - 30) / 2)
            } else if (pm10Indoor <= 150) {
              pm10Indoor = 50 + Math.round((Number(pm10Indoor) - 80) * 25 / 70)
            } else {
              pm10Indoor = 75 + (Number(pm10Indoor) - 150)
            }
          }
          var pm10Outdoor = Number(this.atmosInfo.pm10List[index2].outdoor)
          if (pm10Outdoor > 0) {
            if (pm10Outdoor <= 30) {
              pm10Outdoor = Math.round(Number(pm10Outdoor) * 25 / 30)
            } else if (pm10Outdoor <= 80) {
              pm10Outdoor = 25 + Math.round((Number(pm10Outdoor) - 30) / 2)
            } else if (pm10Outdoor <= 150) {
              pm10Outdoor = 50 + Math.round((Number(pm10Indoor) - 80) * 25 / 70)
            } else {
              pm10Outdoor = 75 + (Number(pm10Indoor) - 150)
            }
          }
          pm10Arr[index2] = [this.atmosInfo.pm10List[index2].date, pm10Indoor, pm10Outdoor]
        }
        this.pm10Row = pm10Arr
        for (var index3 in this.atmosInfo.pm25List) {
          var pm25Indoor = Number(this.atmosInfo.pm25List[index3].indoor)
          if (pm25Indoor > 0) {
            if (pm25Indoor <= 15) {
              pm25Indoor = Math.round(Number(pm25Indoor) * 15 / 25)
            } else if (pm25Indoor <= 50) {
              pm25Indoor = 25 + Math.round((Number(pm25Indoor) - 15) * 25 / 35)
            } else if (pm25Indoor <= 100) {
              pm25Indoor = 50 + Math.round((Number(pm25Indoor) - 50) / 2)
            } else {
              pm25Indoor = 75 + (Number(pm25Indoor) - 100)
            }
          }
          var pm25Outdoor = Number(this.atmosInfo.pm25List[index3].outdoor)
          if (pm25Outdoor > 0) {
            if (pm25Outdoor <= 15) {
              pm25Outdoor = Math.round(Number(pm25Outdoor) * 15 / 25)
            } else if (pm25Outdoor <= 50) {
              pm25Outdoor = 25 + Math.round((Number(pm25Outdoor) - 15) * 25 / 35)
            } else if (pm25Outdoor <= 100) {
              pm25Outdoor = 50 + Math.round((Number(pm25Outdoor) - 50) / 2)
            } else {
              pm25Outdoor = 75 + (Number(pm25Outdoor) - 100)
            }
          }
          pm25Arr[index3] = [this.atmosInfo.pm25List[index3].date, pm25Indoor, pm25Outdoor]
        }
        if (this.type === 'D') {
          this.dateText = '전일 (' + this.atmosInfo.endDate + ')'
        } else if (this.type === 'W') {
          this.dateText = '최근 7일 (' + this.atmosInfo.startDate + ' ~ ' + this.atmosInfo.endDate + ')'
        } else if (this.type === 'M') {
          this.dateText = '최근 7개월 (' + this.atmosInfo.startDate + ' ~ ' + this.atmosInfo.endDate + ')'
        }
        this.pm25Row = pm25Arr
        this.pmSt = 'Y'
      })
      .catch(error => {
        console.log(error)
        this.pmSt = 'E'
      })
    }
  }
}
</script>

<style>
/* 청정기 사용통계 */
.section_graph_air {
    padding: 0 15px;
}
.section_graph_air .desc {
    font-size: 1.2rem;
    color: #7e8791;
    border-bottom: 1px solid #e7e7e7;
    line-height: 29px;
    padding-left: 7px;
}
.section_graph_air .area_graph {
    padding-top: 19px;
    position: relative;
}
.section_graph_air .area_graph p {
    font-size: 1.7rem;
    font-weight: bold;
}
.section_graph_air .area_graph .graph_desc {
    position: absolute;
    right: 0;
    top: 19px;
  width: 125px;
  height: 15px;
}
.section_graph_air .area_graph .graph_desc span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #4e555b;
    padding-left: 16px;
    margin-right: 15px;
    position: relative;
}
.section_graph_air .area_graph .graph_desc span:last-child {
  margin-right: 0;
}
.section_graph_air .area_graph .graph_desc .inside:before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    display: block;
    top: 1px;
    left: 0;
    background: #7ecefd;
    border: 1px solid #7ecefd;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.section_graph_air .area_graph .graph_desc .outside:before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    display: block;
    top: 1px;
    left: 0;
    background: #ff9666;
    border: 1px solid #ff9666;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.section_graph_air .area_graph .box_graph {
    margin: 30px 0 18px;
    height: 200px;
}
.good {
  position: absolute;
  top: 203px;
  left: 13px;
  color: #7ecefd;
  font-weight: bold;
}
.normal {
  position: absolute;
  top: 166px;
  left: 13px;
  color: #66cc00;
  font-weight: bold;
}
.bad {
  position: absolute;
  top: 129px;
  left: 13px;
  color: #ff9666;
  font-weight: bold;
}
.very_bad {
  position: absolute;
  top: 88px;
  left: 13px;
  line-height: 11.5px;
  color: #ff0000;
  font-weight: bold;
}
</style>
