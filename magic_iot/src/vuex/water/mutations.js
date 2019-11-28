/*
  1) 상태를 변경하기 위한 수단이며 반드시 동기적으로 수행
  2) mutation_types에 정의 함에 따라 수행
*/
import * as types from '@/vuex/common/mutation_types'

export default {
  [types.SOCKET_WATER_SETTING] (state, datas) {
    state.datas = Object.assign(state.datas, datas) // 새로 받은 데이터와 기존 데이터를 병합
  }
}
