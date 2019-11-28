import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from '@/vuex/common/actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  datas: {
    actionCode: '',
    menuCode: '',
    kidLock: '',
    continueUsedMin: '',
    continueUsedSec: '',
    powerSave: '',
    switchMode: '',
    switchResult: '',
    autoControl: '',
    error: '',
    burnerCount: '',
    volume: '',
    bunerDetail: [
      {index: '', status: '', tempurate: '', continueUsedMin: '', offReserved: '', switchType: '', bunerAlert: '', continueUsedSec: '', offRemainTime: '', kepping: '', remain: ''},
      {index: '', status: '', tempurate: '', continueUsedMin: '', offReserved: '', switchType: '', bunerAlert: '', continueUsedSec: '', offRemainTime: '', kepping: '', remain: ''},
      {index: '', status: '', tempurate: '', continueUsedMin: '', offReserved: '', switchType: '', bunerAlert: '', continueUsedSec: '', offRemainTime: '', kepping: '', remain: ''}
    ],
    isConn: false,
    online: false,
    waitCmd: false,
    timestamp: new Date().getTime(),
    type: 'req'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
