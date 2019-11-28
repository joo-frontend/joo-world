<i18n src='@/code/common/layout.json'></i18n>
<template>
  <div style="height:100%;" ref="all" :style="autoHeight">
    <div class="wrap_header_area" v-if="initData">
      <!-- section_header -->
      <header-view :petNm="petNm" :route="route"></header-view>
      <!-- //section_header -->
      <!-- section_menu -->
      <section class="section_menu">
          <div class="area_menu">
              <div class="moving" id="moving">
                  <!-- <ul class="clearfix" :style="checkScrollLeft"> -->
                  <ul class="clearfix">
                    <li><router-link :to="{ name: 'WaterMain'}"><span>{{ tabText }}</span></router-link></li>
                    <li v-if="deviceInfo.modelNm !== 'WPU2200C'"><router-link :to="{ name: 'WaterControl'}"><span>제품작동</span></router-link></li>
                    <li v-if="deviceInfo.modelNm === 'WPU2200C'"><router-link :to="{ name: 'WaterMiniStatsList'}"><span>사용통계</span></router-link></li>
                    <li v-else><router-link :to="{ name: 'WaterStatsList'}"><span>사용통계</span></router-link></li>
                    <li><router-link :to="{ name: 'WaterUseWay'}"><span>사용설명</span></router-link></li>
                    <li><router-link :to="{ name: 'WaterManageHis'}"><span>관리이력</span></router-link></li>
                    <li><router-link :to="{ name: 'WaterPayment'}"><span>납부정보</span></router-link></li>
                    <li><router-link :to="{ name: 'WaterActionList'}"><span>이력 및 알림</span></router-link></li>
                    <li v-if="deviceInfo.modelNm === 'WPU2200C'"><router-link :to="{ name: 'WaterSetting'}"><span>설정</span></router-link></li>
                    <li v-if="route === 'SKMC'"><router-link :to="{ name: 'WaterUserList'}"><span>사용자관리</span></router-link></li>
                  </ul>
              </div>
          </div>
      </section>
      <!-- //section_menu -->
    </div>
    <router-view name="waterViews" v-if="initData" :water="water" :deviceInfo="deviceInfo" v-on:setTabMenu="setTabMenu" v-on:reconnect="reconnect"></router-view>
  </div>
</template>

<script>
import store from '@/vuex/water/store'
import HeaderView from '@/components/common/view/Header'
import { mapActions } from 'vuex'

export default {
  name: 'waterLayout',
  props: ['userId', 'deviceId', 'route'],
  components: { HeaderView },
  store,
  data () {
    return {
      info: {
        type: 'water',
        userId: this.userId,
        deviceId: this.deviceId,
        modelKind: ''
      },
      petNm: '',
      deviceInfo: {},
      water: {},
      initData: false
    }
  },
  created () {
    // 최초 로딩 시 fade 효과를 주기 위해 setTimeout 사용
    setTimeout(() => { this.init() })
  },
  computed: {
    autoHeight: function () {
      if (this.modelNm === 'iPhone') return 'height:' + window.innerHeight + 'px'
    },
    tabText: function () {
      switch (this.deviceInfo.modelNm) {
        case 'WPU2200C':
          return '상태표시 및 제품작동'
        default:
          return '상태표시'
      }
    }
  },
  methods: {
    init: function () {
      var self = this
      // 로딩 모달 노출 시작
      this.loading(true)
      // 사용자 가전 정보 요청
      this.$http.post('/api/homedevice/' + this.userId + '/' + this.deviceId)
      .then(response => {
        // 가전 기본 정보 조회
        this.$http.defaults.headers.userToken = response.data.body.accessToken
        this.petNm = response.data.body.productInfo.petNm
        this.info.modelKind = response.data.body.modelKind
        this.deviceInfo = response.data.body
        this.water = this.$store.getters.getDatas
        // 웹소켓 연결
        this.fetchDatas(this.info)
        // 서버 상황 30초 마다 체크
        setTimeout(() => { checkServer() }, 30000)
        function checkServer () {
          var curr = new Date().getTime()
          if (curr - this.water.timestamp > 30000) {
            this.loading(true)
            waitResponse(this.water.timestamp, 10)
          } else {
            setTimeout(() => { checkServer() }, 30000)
          }
        }
        function waitResponse (time, cnt) {
          if (cnt > 0) {
            if (time !== self.water.timestamp) {
              self.water.online = self.water.online
              self.loading(false)
            } else {
              setTimeout(() => {
                waitResponse(time, --cnt)
              }, 200)
            }
          } else {
            self.water.online = false
            self.loading(false)
          }
        }
        this.initData = true
        // 5초이내에 가전과 연결이 되지 않으면 연결 실패 화면 노출
        setTimeout(() => {
          if (!this.water.online) {
            this.water.isConn = true
            this.loading(false)
          }
        }, 1000 * 5)
      })
      .catch(error => console.log(error))
    },
    reconnect () {
      this.water.isConn = false
      this.loading(true)
      this.fetchDatas(this.info)
      setTimeout(() => {
        if (!this.water.online) {
          this.water.isConn = true
          this.loading(false)
        }
      }, 1000 * 3)
    },
    setTabMenu: function () {
      var posTo = 0
      switch (this.$route.name) {
        case 'WaterMain':
        case 'WaterControl':
        case 'WaterStatsList':
        case 'WaterMiniStatsList':
          posTo = 0
          break
        case 'WaterUseWay':
          posTo = 200
          break
        case 'WaterActionList':
        case 'WaterSetting':
          posTo = 170
          break
        case 'WaterUserList':
          if (this.deviceInfo.modelNm === 'WPU2200C') posTo = 227
          else posTo = 170
          break
      }
      var elem = document.getElementById('moving')
      var pos = Math.round(elem.scrollLeft)
      var id = setInterval(frame, 2)
      function frame () {
        if (pos === posTo) {
          clearInterval(id)
        } else {
          if (pos < posTo) pos++
          else pos--
          elem.scrollLeft = pos
        }
      }
    },
    ...mapActions(['fetchDatas'])
  }
}
</script>
