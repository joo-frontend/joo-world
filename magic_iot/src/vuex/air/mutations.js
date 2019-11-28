import * as types from '@/vuex/common/mutation_types'

export default {
  [types.SOCKET_AIR_SETTING] (state, val) {
    state.datas = Object.assign(state.datas, val)
  }
}
