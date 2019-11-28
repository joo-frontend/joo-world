/*
  1) vuex의 compoted역할
  2) 사용처에서 직접 접근이 아닌 메서드 호출로 이뤄지도록 정의
*/
export default {
  getOvenDatas: state => state.datas,
  getInfoDatas: state => state.info,
  getSaveTime: state => state.saveTime
}
