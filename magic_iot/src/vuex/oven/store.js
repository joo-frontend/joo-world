/*
  1) vuex의 모든 동작을 이뤄지도록 하는 역할
  2) 데이터 초기설정 정의
*/
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from '@/vuex/common/actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    /*
    전기오븐 상태 데이터
  */
  datas: {
    isConn: false,
    online: false,
    waitCmd: false,
    timestamp: new Date().getTime(),
    type: 'req',
    actionCode: '',
    menuCode: '',
    lock: '', // 잠금
    volume: '', // 볼륨
    brightness: '', // 밝기
    actionStatus: '', // 현재 상태(1:대기중, 2:예열중, 3:예열완료, 4:요리(청소)중, 5:요리(청소)완료, 6:제품오류상태)
    cookingStatus: '', // 상태 구분(0:구분없음, 1:자동(수동)요리, 2:나만의요리, 3:청소)
    cookStatus: '',
    actionIdx: '',
    uniqueIdx: '',
    settingTemp: '',
    settingWatt: '',
    settingWeight: '',
    cookTime: '',
    remainTime: '',
    favoriteList: [],
    alertValue: '',
    errorValue: '',
    voiceGuide: '' // 기기 음성 안내 사용 여부
  },
  saveTime: 0
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
