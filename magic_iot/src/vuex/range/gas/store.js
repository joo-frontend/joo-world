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
    actionCode: '',
    menuCode: '',
    kidLock: '',
    continueUsedMin: '',
    continueUsedSec: '',
    handleStatus: '',
    switchMode: '',
    switchResult: '',
    autoControl: '',
    error: '',
    burnerCount: '',
    bunerDetail: [
      {index: '', status: '', tempurate: '', continueUsedMin: '', offReserved: '', switchType: '', bunerAlert: '', continueUsedSec: '', offRemainTime: ''},
      {index: '', status: '', tempurate: '', continueUsedMin: '', offReserved: '', switchType: '', bunerAlert: '', continueUsedSec: '', offRemainTime: ''},
      {index: '', status: '', tempurate: '', continueUsedMin: '', offReserved: '', switchType: '', bunerAlert: '', continueUsedSec: '', offRemainTime: ''}
    ]
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
