<template>
  <div class="wrap_contents_area" v-show="range.isConn">
    <div class="wrap_bg_gray" v-if="isOnline">
      <!-- section_graph_sensor -->
      <section class="section_graph_sensor">
        <vue-chart
            chart-type="ColumnChart"
            :chart-events="chartEvents"
            :columns="tempCol"
            :rows="tempRow"
            :options="tempOpt"
            style="min-height:200px;"
        ></vue-chart>
        <p class="degree" v-show="show">℃</p>
        <p v-show="show" >현재 작동 중인 버너의 센서 온도를 보여주는 기능입니다.</p>

        <!-- 그래프 80도 예열 표시 -->
        <div class="box_heating_degree" v-show="show">
          <p class="icon_heating">80 예열</p>
          <span></span>
        </div>
        <!-- //그래프 80도 예열 표시 -->

      </section>
      <!-- //section_graph_sensor -->

      <!-- section_cook_guide -->
      <section class="section_cook_guide">
        <p class="title">온도별 요리 가이드</p>
        <p class="desc">
          <span>다이얼을 돌려 설정한 온도에 맞추면 우측 대버너 화력이 자동 조절 됩니다.</span>
          <br><span class="small">* 용기 재질에 따라, 설정된 예열온도 및 조리 온도의 차이가 있을 수 있습니다.</span>
        </p>
        <ul>
            <li>
                <p class="box_heat">80℃ 예열</p>
                <span class="heat">프라이팬이 80℃로 예열되어 조리물을 넣기에 적합합니다.</span>
            </li>
            <li>
                <p>110도</p>
                <span>냄비 조리시 조리물이 쉽게 타지 않도록 화력을 조절합니다. <br>(예 - 감자삶기, 닭볶음탕, 김치찜 등)</span>
            </li>
            <li>
                <p>160도</p>
                <span>간단한 프라이, 저온 튀김요리에 적합한 온도입니다. <br>(예 - 토스트, 소시지, 계란프라이, 오징어 튀김 등)</span>
            </li>
            <li>
                <p>180도</p>
                <span>구이, 튀김요리에 적합한 온도입니다. <br>(예 - 삼겹살, 생선구이, 군만두, 돈가스, 고구마 튀김 등)</span>
            </li>
            <li>
                <p>200도</p>
                <span>고온에서 조리하는 볶음, 부침 요리에 적합한 온도입니다. <br>(예 - 전, 멸치볶음, 새우구이 등)</span>
            </li>
            <li>
                <p class="heat">290도</p>
                <span>화재를 방지하기 위해 자동으로 가스불이 소화됩니다.</span>
            </li>
            <li>
                <span>* 온도별 요리 가이드는 GRACM330T/GRACM230T 모델에 한함</span>
            </li>
        </ul>
      </section>
      <!-- //section_cook_guide -->
    </div>
    <error-view :deviceInfo="deviceInfo" :route="route" v-show="!isOnline" v-on:reSend="reSend"/>
  </div>
</template>

<script>
import ErrorView from '@/components/common/view/Error'

var threeRange = ['대버너(좌)', '소버너', '대버너(우)']
var twoRange = ['대버너(좌)', '대버너(우)']

export default {
  name: 'checkTemp',
  components: { ErrorView },
  props: ['userId', 'deviceId', 'deviceInfo', 'info', 'range', 'route'],
  data () {
    var self = this
    return {
      chartEvents: {
        'ready': function () {
          self.chartReady = 'Y'
        }
      },
      chartReady: 'N',
      tempSt: 'N',
      modelNm: this.deviceInfo.modelNm,
      tempCol: [{type: 'string', label: '레인지종류'}, {type: 'number', label: '℃'}],
      tempOpt: {
        legend: 'none',
        bar: { groupWidth: '40%' },
        backgroundColor: 'none',
        isStacked: false,
        colors: ['#FF4000'],
        chartArea: { width: '80%', height: '80%', bottom: 35, right: 25 },
        vAxis: {
          titleTextStyle: {italic: false, color: 'black', fontSize: 8},
          viewWindowMode: 'pretty',
          format: '##',
          viewWindow: { min: 0, max: 300 },
          gridlines: { count: 7 }
        },
        animation: {
          duration: 0
        }
      }
    }
  },
  created () {
    this.$emit('setTabMenu')
    if (this.range.isConn) {
      if (!this.range.online) this.reSend()
    } else {
      setTimeout(() => {
        if (!this.range.isConn) {
          this.range.isConn = true
          this.range.online = false
        }
      }, 1000 * 3)
    }
  },
  computed: {
    isOnline: function () {
      var online = false
      var curr = new Date().getTime()
      if (this.range.isConn) {
        if (curr - this.range.timestamp > 35000) {
          this.range.online = false
        } else {
          online = this.range.online
        }
        if (!this.range.waitCmd) this.loading(false)
      }
      return online
    },
    show: function () {
      if (this.tempSt === 'Y' && this.chartReady === 'Y') {
        this.loading(false)
        return true
      } else {
        this.loading(true)
        return false
      }
    },
    tempRow: function () {
      var index = 0
      var tempArr = []
      var max = this.tempOpt.vAxis.viewWindow.max
      // 3구 가스레인지
      if (this.modelNm === 'GRACM330T' || this.modelNm === 'GRA_BI_SERIES') {
        for (index in this.range.bunerDetail) {
          if (index === '0') {
            tempArr[index] = [threeRange[0], parseInt(this.range.bunerDetail[1].tempurate)]
          } else if (index === '1') tempArr[index] = [threeRange[1], parseInt(this.range.bunerDetail[2].tempurate)]
          else tempArr[index] = [threeRange[2], parseInt(this.range.bunerDetail[0].tempurate)]
          if (max < parseInt(this.range.bunerDetail[index].tempurate)) max = this.range.bunerDetail[index].tempurate
        }
      } else if (this.modelNm === 'GRACM230T') {
        for (index in this.range.bunerDetail) {
          tempArr[index] = [twoRange[index], this.range.bunerDetail[index].tempurate]
          if (max < parseInt(this.range.bunerDetail[index].tempurate)) max = this.range.bunerDetail[index].tempurate
        }
      }
      this.tempOpt.vAxis.viewWindow.max = max
      this.tempSt = 'Y'
      return tempArr
    }
  },
  methods: {
    reSend () {
      this.$emit('reconnect')
    }
  }
}
</script>

<style>
@media all and (max-width: 320px) {
  .degree {
    position: absolute;
    bottom: 55px;
    left: 32px;
  }
}
@media all and (min-width: 360px) {
  .degree {
    position: absolute;
    bottom: 55px;
    left: 39px;
  }
}
@media all and (min-width: 400px) {
  .degree {
    position: absolute;
    bottom: 55px;
    left: 48px;
  }
}
/* ui.page.css : 센서온도 그래프 */
.section_graph_sensor {
    text-align: center;
    position: relative;
    padding: 23px 15px;
    margin-bottom: 7px;
}
.section_graph_sensor p {
  font-size: 1.0rem;
  font-weight: bold;
}
.section_graph_sensor button {
    position: absolute;
    right: 15px;
    top: 23px;
    padding-left: 15px;
    font-size: 10px;
}
.section_graph_sensor button .sprite_update {
    position: absolute;
    top: 1px;
    left: 0;
}
.section_graph_sensor div {
    /*margin-top: 16px;*/
}
.wrap_bg_gray .section_cook_guide {
    padding: 24px 15px 0;
    border-top: 1px solid #ededed;
    margin-bottom: 0;
}
.section_cook_guide .title {
    margin-bottom: 6px;
}
.section_cook_guide .desc span {
    font-size: 1.1rem;
    font-weight: bold;
}
.section_cook_guide .desc .small {
    font-size: 10px;
    font-weight: bold;
}
.section_cook_guide ul {
    padding: 15px 0;
}
.section_cook_guide ul li {
    margin-bottom: 13px;
}
.section_cook_guide ul li p {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 20px;
}
.section_cook_guide ul li span {
    color: #666666;
    font-weight: bold;
}
.section_cook_guide ul li .heat {
    color: #c70202;
}
.section_cook_guide ul li .box_heat {
    width: 58px;
    height: 19px;
    background: #c70202;
    color: #ffffff;
    padding: 0 7px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 10px;
    margin-bottom: 5px;
}
.section_cook_guide ul li:last-child {
    margin-bottom: 0;
}
/* ui.page.css : 가스레인지 사용통계 */
.wrap_bg_gray .title {
    font-size: 1.5rem;
    font-weight: bold;
}
/* 온도그래프 예열표시*/
.section_graph_sensor .box_heating_degree {
  position: absolute;
  top: 145px;
  left: 0;
  width: 100%;
  padding: 0 44px;
}
.section_graph_sensor .box_heating_degree .icon_heating {
  width: 47px;
  height: 14px;
  line-height: 15px;
  background: #c70202;
  color: #ffffff;
  padding: 0 6px;
  border-radius: 30px;
  font-size: 1.0rem;
  font-weight: normal;
  /*font-size: 5px;*/
  position: absolute;
  left: 8px;
  top: -6px;
  /*width: 47px;
  height: 17px;
  line-height: 18px;
  background: #c70202;
  color: #ffffff;
  padding: 0 6px;
  border-radius: 30px;
  font-size: 10px;
  position: absolute;
  left: 16px;
  top: -8px;*/
}
.section_graph_sensor .box_heating_degree span {
  border-bottom: 1px solid #c70202;
  display: block;
  width: 101%;
  height: 1px;
}


</style>
