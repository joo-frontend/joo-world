<i18n src='@/code/common/layout.json'></i18n>
<template>
  <div style="height:100%;">
    <div class="wrap_header_area" v-if="initData">
      <!-- section_header -->
      <header-view :petNm="petNm" :route="route"></header-view>
      <!-- //section_header -->
      <!-- section_menu -->
      <section class="section_menu">
          <div class="area_menu">
              <div class="moving">
                  <ul class="clearfix">
                    <li class="humid"><router-link :to="{ name: 'HumidMain'}"><span>상태표시</span></router-link></li>
                    <li class="humid"><router-link :to="{ name: 'HumidControl'}"><span>제품작동</span></router-link></li>
                    <li class="humid"><router-link :to="{ name: 'HumidUseWay'}"><span>사용설명</span></router-link></li>
                    <li class="humid" v-if="route === 'SKMC'"><router-link :to="{ name: 'HumidUserList'}"><span>사용자추가</span></router-link></li>
                  </ul>
              </div>
          </div>
      </section>
      <!-- //section_menu -->
    </div>
    <router-view name="humidViews" v-if="initData" :humid="humid" :deviceInfo="deviceInfo" v-on:reconnect="reconnect"></router-view>
  </div>
</template>

<script>
import store from '@/vuex/humid/store'
import HeaderView from '@/components/common/view/Header'
import { mapActions } from 'vuex'

export default {
  name: 'humidLayout',
  props: ['userId', 'deviceId', 'route'],
  components: { HeaderView },
  store,
  data () {
    return {
      initData: false,
      petNm: '',
      info: {
        type: 'humid',
        userId: this.userId,
        deviceId: this.deviceId,
        modelKind: ''
      },
      deviceInfo: {},
      humid: {}
    }
  },
  created () {
    setTimeout(() => { this.init() }, 500)
  },
  methods: {
    init () {
      this.loading(true)
      this.$http.post('/api/homedevice/' + this.userId + '/' + this.deviceId)
      .then(response => {
        if (response.data.header.resultCode === '20000') {
          this.petNm = response.data.body.productInfo.petNm
          this.$http.defaults.headers.userToken = response.data.body.accessToken
          this.info.modelKind = response.data.body.modelKind
          this.deviceInfo = response.data.body
          this.humid = this.$store.getters.getHumidDatas
          this.fetchDatas(this.info)
          this.initData = true
          setTimeout(() => {
            if (!this.humid.online) {
              this.humid.isConn = true
              this.loading(false)
            }
          }, 1000 * 5)
        }
      })
      .catch(error => console.log(error))
    },
    reconnect () {
      this.humid.isConn = false
      this.loading(true)
      this.fetchDatas(this.info)
      setTimeout(() => {
        if (!this.humid.online) {
          this.humid.isConn = true
          this.loading(false)
        }
      }, 1000 * 3)
    },
    ...mapActions(['fetchDatas'])
  }
}
</script>
<style>
.section_menu ul li.humid {
  padding: 0px 16px;
}
</style>
