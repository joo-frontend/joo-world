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
  datas: {
    isConn: false,
    online: false,
    waitCmd: false,
    timestamp: new Date().getTime(),
    type: 'req',
    amtSetting: '', // 물양 선택
    cleaning: '', // 살균 중
    selWater: '', // 온도 설정
    lockCold: '', // 냉수 잠금
    lockChild: '', // 유아수 잠금
    lockHot: '', // 온수 잠금
    muted: '', // 음소거
    waterLed: '', // 취수 LED (미니정수기 밝기조절)
    lockAll: '', // 전체잠금
    lockKid: '', // 어린이 취수 모드
    lockCoke: '', // 코크 살균 잠금
    cokeCleanLed: '', // 코크 살균 알림 LED
    cokeBrightLed: '', // 코크 LED 불 밝기(정수기 밝기조절)
    cookWater: '', // 조리수 사용
    coldWaterTemp: '', // 냉수 온도 상태
    childWaterTemp: '', // 유아수 온도 상태
    hotWaterTemp: '', // 온수 온도 상태
    timeInfo: '', // 살균 중에 남은 시간 혹은 대기시간
    childWaterSettingTemp: '', // 유아수 온도설정
    wifiSignalIntensity: '', // 와이파이 강도
    /* 정수기 고장 상태 정의 */
    errHot: '', // 온수이상
    errChild: '', // 유아수이상
    errCold: '', // 냉수이상
    airTemp: '' // 외기온도
  }
  // /* 정수기 상태 정의 */
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
