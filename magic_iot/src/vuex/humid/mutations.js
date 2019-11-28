import * as types from '@/vuex/common/mutation_types'

export default {
  [types.SOCKET_HUMID_SETTING] (state, val) {
    state.datas = Object.assign(state.datas, val) // 새로 받은 데이터와 기존 데이터를 병합
  }
}
