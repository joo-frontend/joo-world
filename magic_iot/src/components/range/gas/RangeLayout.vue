<i18n src='@/code/common/layout.json'></i18n>
<template>
  <div style="height:100%;">
    <div class="wrap_header_area" v-if="initData">
      <!-- section_header -->
      <common-header :petNm="petNm" :route="route"></common-header>
      <!-- //section_header -->

      <!-- section_menu -->
      <section class="section_menu">
        <div class="area_menu">
          <div class="moving" id="moving">
              <ul class="clearfix">
                <li><router-link :to="{ name: 'RangeMain'}" ><span>상태 및 작동</span></router-link></li>
                <li><router-link :to="{ name: 'RangeTempCheck'}"><span>온도확인</span></router-link></li>
                <li><router-link :to="{ name: 'RangeStatsList'}"><span>사용통계</span></router-link></li>
                <li><router-link :to="{ name: 'RangeUseManual'}"><span>사용설명</span></router-link></li>
                <li><router-link :to="{ name: 'RangeActionList'}"><span>이력 및 알림</span></router-link></li>
                <li><router-link :to="{ name: 'RangeSetting'}"><span>설정</span></router-link></li>
                <li v-if="route === 'SKMC'"><router-link :to="{ name: 'RangeUserList'}"><span>사용자관리</span></router-link></li>
              </ul>
          </div>
        </div>
      </section>
      <!-- //section_menu -->
    </div>
    <router-view name="rangeViews" v-if="initData" :range="range" :deviceInfo="deviceInfo" v-on:setTabMenu="setTabMenu" v-on:reconnect="reconnect"></router-view>
  </div>
</template>

<script>
import store from '@/vuex/range/gas/store'
import CommonHeader from '@/components/common/view/Header'
import { mapActions } from 'vuex'

export default {
  name: 'rangeLayout',
  components: { CommonHeader },
  props: ['userId', 'deviceId', 'route'],
  store,
  data () {
    return {
      initData: false,
      petNm: '',
      info: {
        type: 'range',
        userId: this.userId,
        deviceId: this.deviceId,
        modelKind: ''
      },
      deviceInfo: {},
      range: {}
    }
  },
  created () {
    setTimeout(() => { this.init() })
  },
  methods: {
    init: function () {
      this.loading(true)
      this.$http.post('/api/homedevice/' + this.userId + '/' + this.deviceId)
      .then(response => {
        this.$http.defaults.headers.userToken = response.data.body.accessToken
        this.petNm = response.data.body.productInfo.petNm
        this.info.modelKind = response.data.body.modelKind
        this.deviceInfo = response.data.body
        this.range = this.$store.getters.getDatas
        this.fetchDatas(this.info)
        this.initData = true
        setTimeout(() => {
          if (!this.range.online) {
            this.range.isConn = true
            this.loading(false)
          }
        }, 1000 * 5)
      })
      .catch(error => console.log(error))
    },
    reconnect () {
      this.range.isConn = false
      this.loading(true)
      this.fetchDatas(this.info)
      setTimeout(() => {
        if (!this.range.online) {
          this.range.isConn = true
          this.loading(false)
        }
      }, 1000 * 3)
    },
    setTabMenu: function () {
      var posTo = 0
      switch (this.$route.name) {
        case 'RangeMain':
        case 'RangeTempCheck':
        case 'RangeStatsList':
          posTo = 0
          break
        case 'RangeUseManual':
          posTo = 120
          break
        case 'RangeActionList':
        case 'RangeUserList':
        case 'RangeSetting':
          posTo = 260
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
