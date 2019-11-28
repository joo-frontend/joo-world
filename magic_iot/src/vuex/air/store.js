import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from '@/vuex/common/actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  datas: {
    isConn: false,
    online: false,
    waitCmd: false,
    timestamp: new Date().getTime(),
    type: 'req',
    /*
      청정기 상태 정의
    */
    power: '', // 전원
    water: '',
    humidification: '',
    setting: '',
    wind: '',
    resvOff: '',
    remainOffTime: '',
    lock: '',
    speed: '',
    auto: '',
    dust: '',
    quiet: '',
    temp: '',
    humi: '',
    pm10: '',
    pm25: '',
    manual: '',
    rpm: '',
    gasLv: '',
    gasDtl: '',
    airStatus: '',
    lcd: '',
    motor: '',
    wifiSig: '',
    wifiDtl: '',
    mcuVer: '',
    lcdVer: '',
    wifiVer: '',
    side: '',
    front: '',
    superSurround: '',
    light: '',
    eneg: '',
    aiMode: '',
    aiSet: '',
    dustSensorLv: ''
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
