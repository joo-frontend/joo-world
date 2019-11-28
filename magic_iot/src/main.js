// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import 'es6-object-assign/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import VueChart from 'vue-charts'
import axios from 'axios'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
// import Moment from 'moment'

import AsyncComputed from 'vue-async-computed'
import Vue2TouchEvents from 'vue2-touch-events'
import VModal from 'vue-js-modal'
import Modal from '@/plugin/modal'

// require('es6-promise').polyfill()
import Toasted from 'vue-toasted'
// import VueStomp from './plugin/sockjs'
require('../static/css/ui/ui.common.css')
require('../static/css/ui/ui.layout.css')

// Vue.use(VueStomp, 'http://218.55.23.179:8088/websocket')
Vue.use(VModal, {
  dialog: true
})
// Vue.use(Moment)
Vue.use(VueI18n)
Vue.use(VueChart)
Vue.use(AsyncComputed)
Vue.use(Toast, {
  defaultType: 'bottom',
  duration: 1000,
  wordWrap: true,
  width: '100%'
})
Vue.use(Vue2TouchEvents)

Vue.use(Toasted, {
  theme: 'primary',
  position: 'bottom-center',
  duration: 1000,
  fullWidth: true,
  singleton: true
})
Vue.config.productionTip = true
const i18n = new VueI18n({
  locale: 'ko'
})

const config = {
  // baseURL: 'http://218.55.23.179',
  headers: {
    'Content-Type': 'application/json',
    'X-Authorization': 'SKMC'
  }
}
Vue.prototype.$http = axios.create(config)
Vue.use(Modal)

new Vue({
  el: '#app',
  router,
  i18n,
  VueChart,
  template: '<App/>',
  components: { App }
})
