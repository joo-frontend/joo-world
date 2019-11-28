import * as types from '@/vuex/common/mutation_types'

export default {
  [types.SOCKET_RANGE_SETTING] (state, datas) {
    state.datas = Object.assign(state.datas, datas)
  }
}
