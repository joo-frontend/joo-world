<i18n src='@/code/common/layout.json'></i18n>
<template>
  <div style="height:100%;" ref="all">
    <div class="wrap_header_area" v-if="initData">
      <header-view :petNm="petNm" :route="route"></header-view>
      <section class="section_menu">
        <div class="area_menu">
          <div class="moving" id="moving">
            <ul class="clearfix">
              <li><router-link :to="{ name: 'AirMain'}" ><span>상태표시</span></router-link></li>
              <li><router-link :to="{ name: 'AirControl'}"><span>제품작동</span></router-link></li>
              <li v-if="deviceInfo.aiModelYn === 'Y'"><router-link :to="{ name: 'AirSetting'}"><span>AI 설정</span></router-link></li>
              <li v-if="deviceInfo.aiModelYn === 'Y'"><router-link :to="{ name: 'AirReservation'}"><span>청정예약</span></router-link></li>
              <li><router-link :to="{ name: 'AirStatsList'}"><span>사용통계</span></router-link></li>
              <li><router-link :to="{ name: 'AirUseWay'}"><span>사용설명</span></router-link></li>
              <li><router-link :to="{ name: 'AirActionList'}"><span>이력 및 알림</span></router-link></li>
              <li v-if="route === 'SKMC'"><router-link :to="{ name: 'AirUserList'}"><span>사용자관리</span></router-link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <router-view :style="scroll" name="airViews" v-if="initData" :air="air" :deviceInfo="deviceInfo" v-on:setTabMenu="setTabMenu" v-on:reconnect="reconnect"></router-view>
  </div>
</template>
<script>
import store from '@/vuex/air/store'
import HeaderView from '@/components/common/view/Header'
import { mapActions } from 'vuex'
var script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCu7jTHfB7xbfnCwWzZHqquyH_NJQAXA3Y&libraries=places'
document.getElementsByTagName('head')[0].appendChild(script)
export default {
  name: 'airLayout',
  props: ['userId', 'deviceId', 'route'],
  components: { HeaderView },
  store,
  data () {
    return {
      info: {
        type: 'air',
        userId: this.userId,
        deviceId: this.deviceId,
        modelKind: ''
      },
      scroll: {},
      deviceInfo: {},
      air: {},
      petNm: '',
      initData: false
    }
  },
  created () {
    setTimeout(() => { this.init() })
  },
  watch: {
    loadingModal: function (val) {
      if (this.loadingModal) this.scroll = { 'overflow': 'hidden', 'height': '100%' }
      else this.scroll = { 'overflow': 'auto', 'height': '100%' }
    }
  },
  methods: {
    init () {
      this.loading(true)
      this.$http.post('/api/homedevice/' + this.userId + '/' + this.deviceId)
      .then(response => {
        this.petNm = response.data.body.productInfo.petNm
        this.$http.defaults.headers.userToken = response.data.body.accessToken
        this.info.modelKind = response.data.body.modelKind
        this.deviceInfo = response.data.body
        this.air = this.$store.getters.getAirDatas
        this.fetchDatas(this.info)
        this.initData = true
        setTimeout(() => {
          if (!this.air.online) {
            this.air.isConn = true
            this.loading(false)
          }
        }, 1000 * 5)
      })
      .catch(error => console.log(error))
    },
    reconnect () {
      this.air.isConn = false
      this.loading(true)
      this.fetchDatas(this.info)
      setTimeout(() => {
        if (!this.air.online) {
          this.air.isConn = true
          this.loading(false)
        }
      }, 1000 * 3)
    },
    setTabMenu: function () {
      var posTo = 0
      switch (this.$route.name) {
        case 'AirMain':
        case 'AirControl':
        case 'AirSetting':
          posTo = 0
          break
        case 'AirReservation':
          posTo = 90
          break
        case 'AirStatsList':
          posTo = 170
          break
        case 'WaterSetting':
          posTo = 170
          break
        case 'AirUseWay':
        case 'AirActionList':
        case 'AirUserList':
          posTo = 323
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
