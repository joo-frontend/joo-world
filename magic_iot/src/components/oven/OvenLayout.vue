<i18n src='@/code/common/layout.json'></i18n>
<template>
  <div style="height: 100%">
    <div class="wrap_header_area" v-if="initData">
      <!-- section_header -->
      <common-header :petNm="petNm" :route="route"></common-header>
      <!-- //section_header -->

      <!-- section_menu -->
      <section class="section_menu">
        <div class="area_menu">
          <div class="moving" id="moving">
            <ul class="clearfix" style="checkScrollLeft">
              <li><router-link :to="{ name: 'OvenMain'}" ><span>상태 및 작동</span></router-link></li>
              <li><router-link :to="{ name: 'OvenCookGuide'}"><span>요리가이드</span></router-link></li>
              <li><router-link :to="{ name: 'OvenMyMenu'}"><span>MY메뉴</span></router-link></li>
              <li><router-link :to="{ name: 'OvenStatsList'}"><span>사용통계</span></router-link></li>
              <li><router-link :to="{ name: 'OvenUseWay'}"><span>사용설명</span></router-link></li>
              <li><router-link :to="{ name: 'OvenActionList'}"><span>이력 및 알림</span></router-link></li>
              <li><router-link :to="{ name: 'OvenSetting'}"><span>설정</span></router-link></li>
              <li v-if="route === 'SKMC'"><router-link :to="{ name: 'OvenUserList'}"><span>사용자관리</span></router-link></li>
            </ul>
          </div>
        </div>
      </section>
      <!-- //section_menu -->
    </div>
    <!-- section_main -->
    <router-view name="ovenViews" v-if="initData" :oven="oven" :deviceInfo="deviceInfo" v-on:setTabMenu="setTabMenu" v-on:reconnect="reconnect"></router-view>
    <!-- //section_main -->
  </div>
</template>
<script>
import CommonHeader from '@/components/common/view/Header'
import store from '@/vuex/oven/store'
import { mapActions } from 'vuex'

export default {
  name: 'ovenLayout',
  props: ['userId', 'deviceId', 'route'],
  components: { CommonHeader },
  store,
  data () {
    return {
      initData: false,
      petNm: '',
      info: {
        type: 'oven',
        userId: this.userId,
        deviceId: this.deviceId,
        modelKind: ''
      },
      deviceInfo: {},
      oven: {}
    }
  },
  created () {
    setTimeout(() => { this.init() })
  },
  methods: {
    init () {
      this.$http.post('/api/homedevice/' + this.userId + '/' + this.deviceId)
      .then(response => {
        this.$http.defaults.headers.userToken = response.data.body.accessToken
        this.petNm = response.data.body.productInfo.petNm
        this.info.modelKind = response.data.body.modelKind
        this.deviceInfo = response.data.body
        this.oven = this.$store.getters.getOvenDatas
        this.fetchDatas(this.info)
        this.initData = true
        // 5초이내에 가전과 연결이 되지 않으면 연결 실패 화면 노출
        setTimeout(() => {
          if (!this.oven.online) {
            this.oven.isConn = true
            this.loading(false)
          }
        }, 1000 * 5)
      })
      .catch(error => {
        console.log(error)
        this.loading(false)
      })
    },
    reconnect () {
      this.oven.isConn = false
      this.loading(true)
      this.fetchDatas(this.info)
      setTimeout(() => {
        if (!this.oven.online) {
          this.oven.isConn = true
          this.loading(false)
        }
      }, 1000 * 3)
    },
    setTabMenu: function () {
      var posTo = 0
      switch (this.$route.name) {
        case 'OvenMain':
        case 'OvenCookGuide':
          posTo = 0
          break
        case 'OvenMyMenu':
          posTo = 60
          break
        case 'OvenStatsList':
          posTo = 135
          break
        case 'OvenUseWay':
          posTo = 215
          break
        case 'OvenActionList':
          posTo = 325
          break
        case 'OvenSetting':
        case 'OvenUserList':
          posTo = 350
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
