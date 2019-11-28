/*
  웹소캣을 통해 받아온 가전 데이터에 대한 문자열 정의
*/
export const USER_DEVUCE_INFO = 'USER_DEVUCE_INFO' // 사용자 가전 정보

export const SOCKET_WATER_SETTING = 'SOCKET_WATER_SETTING' // 정수기
export const WATER_INFO_SETTING = 'WATER_INFO_SETTING' // 정수기 인포정보

export const SOCKET_HUMID_SETTING = 'SOCKET_HUMID_SETTING' // 가습기
export const SOCKET_AIR_SETTING = 'SOCKET_AIR_SETTING' // 청정기
export const SOCKET_RANGE_SETTING = 'SOCKET_RANGE_SETTING' // 가스레인지
export const SOCKET_ELECRANGE_SETTING = 'SOCKET_ELECRANGE_SETTING' // 가스레인지
export const SOCKET_OVEN_SETTING = 'SOCKET_OVEN_SETTING' // 전기오븐

export const LOADING_MODAL_OFF = 'LOADING_MODAL_OFF' // 로딩팝업 false
export const STOMP_CONNECT_YN = 'STOMP_CONNECT_YN' // STOMP 연결 여부

export const SETTING_CHANNEL = {
  water: 'SOCKET_WATER_SETTING', // 정수기
  humid: 'SOCKET_HUMID_SETTING', // 가습기
  air: 'SOCKET_AIR_SETTING', // 청정기
  range: 'SOCKET_RANGE_SETTING', // 가스레인지
  elecRange: 'SOCKET_ELECRANGE_SETTING', // 전기레인지
  oven: 'SOCKET_OVEN_SETTING' // 전기오븐
}

export const SETTING_ERROR_CHANNEL = {
  water: 'WaterError',
  humid: 'HumidError',
  air: 'AirError',
  range: 'RangeError',
  elecRange: 'ElecError',
  oven: 'OvenError'
}

export const SETTING_REFRESH_CHANNEL = {
  water: 'WaterMain',
  humid: 'HumidMain', // 가습기
  air: 'AirMain', // 청정기
  range: 'RangeMain',
  elecRange: 'ElecMain',
  oven: 'OvenMain'
}
