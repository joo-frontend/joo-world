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
      가습기
    */
    power: '', // 전원
    trembler: '', // 진동자
    uv: '', // uv
    fan: '', // fan
    fanRpn: '', // Fan Rpm
    humiMode: '', // 가습량 설정 모드
    displayBright: '', // 디스플레이 밝기
    moodlampBright: '', // 무드램프 밝기
    humiAmt: '', // 가습량
    waterAlert: '', // 물 상태 알림
    humi: '', // 현재 습도 상태
    settingHumi: '', // 희망 습도
    battery: '', // 배터리
    continueHumiTime: '', // 총 운전 시간
    remainOffTime: '', // 종료 남은 시간(꺼짐예약)
    moodlampColor: '', // 무드 램프 색상
    timeInfo: '', // 시간정보
    error: '' // 물 감지 센서 오류
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
