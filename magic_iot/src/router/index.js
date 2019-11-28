/* 각 컴포넌트 파일에 대한 path 설정 정의 */
import Vue from 'vue'
import Router from 'vue-router'

// 가전 목록
const HdeviceList = () => import('@/components/common/HdeviceList')

// 정수기
const WaterLayout = () => import('@/components/water/WaterLayout')
const WaterMain = () => import('@/components/water/Main')
const WaterControl = () => import('@/components/water/Control')
const WaterStatsList = () => import('@/components/water/StatsList')
const WaterUseWay = () => import('@/components/common/view/UseWay')
const WaterActionList = () => import('@/components/common/view/ActionList')
const WaterUserList = () => import('@/components/common/view/UserList')
const WaterError = () => import('@/components/common/view/Error')
// 미니 정수기
const WaterMiniStatsList = () => import('@/components/water/MiniStatsList')
const WaterSetting = () => import('@/components/water/Setting')
const WaterManageHis = () => import('@/components/common/view/ManageHistory')
const WaterPayment = () => import('@/components/common/view/Payment')

// 청정기
const AirLayout = () => import('@/components/air/AirLayout')
const AirMain = () => import('@/components/air/Main')
const AirControl = () => import('@/components/air/Control')
const AirStatsList = () => import('@/components/air/StatsList')
const AirUseWay = () => import('@/components/common/view/UseWay')
const AirActionList = () => import('@/components/common/view/ActionList')
const AirUserList = () => import('@/components/common/view/UserList')
const AirSetting = () => import('@/components/air/Setting')
const AirReservation = () => import('@/components/air/Reservation')
const AirError = () => import('@/components/common/view/Error')

// 가습기
const HumidLayout = () => import('@/components/humid/HumidLayout')
const HumidMain = () => import('@/components/humid/Main')
const HumidControl = () => import('@/components/humid/Control')
const HumidUseWay = () => import('@/components/common/view/UseWay')
const HumidUserList = () => import('@/components/common/view/UserList')
const HumidError = () => import('@/components/common/view/Error')

// 가스레인지
const RangeLayout = () => import('@/components/range/gas/RangeLayout')
const RangeMain = () => import('@/components/range/gas/Main')
const RangeTempCheck = () => import('@/components/range/gas/TempCheck')
const RangeStatsList = () => import('@/components/range/common/StatsList')
const RangeUseManual = () => import('@/components/common/view/UseManual')
const RangeActionList = () => import('@/components/common/view/ActionList')
const RangeUserList = () => import('@/components/common/view/UserList')
const RangeSetting = () => import('@/components/range/common/Setting')
const RangeError = () => import('@/components/common/view/Error')

// 전기레인지
const ElecRangeLayout = () => import('@/components/range/electric/ElecLayout')
const ElecMain = () => import('@/components/range/electric/Main')
const ElecStatsList = () => import('@/components/range/common/StatsList')
const ElecUseManual = () => import('@/components/common/view/UseManual')
const ElecActionList = () => import('@/components/common/view/ActionList')
const ElecUserList = () => import('@/components/common/view/UserList')
const ElecSetting = () => import('@/components/range/common/Setting')
const ElecError = () => import('@/components/common/view/Error')

// 전기오븐
const OvenLayout = () => import('@/components/oven/OvenLayout')
const OvenMain = () => import('@/components/oven/Main')
const OvenCookGuide = () => import('@/components/oven/Guide')
const OvenMyMenu = () => import('@/components/oven/MyMenu')
const OvenStatsList = () => import('@/components/oven/StatsList')
const OvenUseWay = () => import('@/components/oven/UseManual')
const OvenActionList = () => import('@/components/common/view/ActionList')
const OvenUserList = () => import('@/components/common/view/UserList')
const OvenSetting = () => import('@/components/oven/Setting')
const OvenError = () => import('@/components/common/view/Error')

// 수퍼서라운드
const SuperMain = () => import('@/components/super_surround/SuperMain')

// 인증토큰 잘못된 경우 오류 팝업
const ErrorView = () => import('@/components/common/modal/Error')

Vue.use(Router)

export default new Router({
  // SKTH:스마트홈/SKMC:SK매직
  scrollBehavior: () => ({ y: 0 }),
  // mode: 'history',
  routes: [
    {
      // 사용자 가전 목록(테스트 용)
      name: 'HdeviceList',
      path: '/',
      components: { view: HdeviceList }
    },
    {
      // 슈퍼 서라운드
      name: 'SuperMain',
      path: '/super/:magicmallId',
      props: { view: true },
      components: { view: SuperMain }
    },
    {
      // 인증 토큰 잘못된 경우
      name: 'ErrorView',
      path: '/error',
      props: { view: true },
      components: { view: ErrorView }
    },
    {
      // 정수기
      path: '/water/:userId/:deviceId/:route',
      props: { view: true },
      components: { view: WaterLayout },
      children: [
        { name: 'WaterMain', path: '/', props: { waterViews: true }, components: { waterViews: WaterMain } },
        { name: 'WaterControl', path: 'control', props: { waterViews: true }, components: { waterViews: WaterControl } },
        { name: 'WaterStatsList', path: 'statsList', props: { waterViews: true }, components: { waterViews: WaterStatsList } },
        { name: 'WaterActionList', path: 'actionList', props: { waterViews: true }, components: { waterViews: WaterActionList } },
        { name: 'WaterUserList', path: 'userList', props: { waterViews: true }, components: { waterViews: WaterUserList } },
        { name: 'WaterMiniStatsList', path: 'statsMiniList', props: { waterViews: true }, components: { waterViews: WaterMiniStatsList } },
        { name: 'WaterSetting', path: 'setting', props: { waterViews: true }, components: { waterViews: WaterSetting } },
        { name: 'WaterUseWay', path: 'useWay', props: { waterViews: true }, components: { waterViews: WaterUseWay } },
        { name: 'WaterError', path: 'error', props: { waterViews: true }, components: { waterViews: WaterError } },
        { name: 'WaterManageHis', path: 'history', props: { waterViews: true }, components: { waterViews: WaterManageHis } },
        { name: 'WaterPayment', path: 'payment', props: { waterViews: true }, components: { waterViews: WaterPayment } }
      ]
    },
    {
      // 청정기
      path: '/air/:userId/:deviceId/:route',
      props: { view: true },
      components: { view: AirLayout },
      children: [
        { name: 'AirMain', path: '/', props: { airViews: true }, components: { airViews: AirMain } },
        { name: 'AirControl', path: 'control', props: { airViews: true }, components: { airViews: AirControl } },
        { name: 'AirStatsList', path: 'statsList', props: { airViews: true }, components: { airViews: AirStatsList } },
        { name: 'AirActionList', path: 'actionList', props: { airViews: true }, components: { airViews: AirActionList } },
        { name: 'AirUserList', path: 'userList', props: { airViews: true }, components: { airViews: AirUserList } },
        { name: 'AirUseWay', path: 'useWay', props: { airViews: true }, components: { airViews: AirUseWay } },
        { name: 'AirSetting', path: 'setting', props: { airViews: true }, components: { airViews: AirSetting } },
        { name: 'AirReservation', path: 'reservation', props: { airViews: true }, components: { airViews: AirReservation } },
        { name: 'AirError', path: 'error', props: { airViews: true }, components: { airViews: AirError } }
      ]
    },
    {
      // 가습기
      path: '/humid/:userId/:deviceId/:route',
      props: { view: true },
      components: { view: HumidLayout },
      children: [
        { name: 'HumidMain', path: '/', props: { humidViews: true }, components: { humidViews: HumidMain } },
        { name: 'HumidControl', path: 'control', props: { humidViews: true }, components: { humidViews: HumidControl } },
        { name: 'HumidUserList', path: 'userList', props: { humidViews: true }, components: { humidViews: HumidUserList } },
        { name: 'HumidUseWay', path: 'useWay', props: { humidViews: true }, components: { humidViews: HumidUseWay } },
        { name: 'HumidError', path: 'error', props: { humidViews: true }, components: { humidViews: HumidError } }
      ]
    },
    {
      // 가스레인지
      path: '/range/:userId/:deviceId/:route',
      props: { view: true },
      components: { view: RangeLayout },
      children: [
        { name: 'RangeMain', path: '/', props: { rangeViews: true }, components: { rangeViews: RangeMain } },
        { name: 'RangeTempCheck', path: 'temp', props: { rangeViews: true }, components: { rangeViews: RangeTempCheck } },
        { name: 'RangeStatsList', path: 'statsList', props: { rangeViews: true }, components: { rangeViews: RangeStatsList } },
        { name: 'RangeActionList', path: 'actionList', props: { rangeViews: true }, components: { rangeViews: RangeActionList } },
        { name: 'RangeUserList', path: 'userList', props: { rangeViews: true }, components: { rangeViews: RangeUserList } },
        { name: 'RangeUseManual', path: 'userManual', props: { rangeViews: true }, components: { rangeViews: RangeUseManual } },
        { name: 'RangeSetting', path: 'setting', props: { rangeViews: true }, components: { rangeViews: RangeSetting } },
        { name: 'RangeError', path: 'error', props: { rangeViews: true }, components: { rangeViews: RangeError } }
      ]
    },
    {
      // 전기레인지
      path: '/electricRange/:userId/:deviceId/:route',
      props: { view: true },
      components: { view: ElecRangeLayout },
      children: [
        { name: 'ElecMain', path: '/', props: { elecViews: true }, components: { elecViews: ElecMain } },
        { name: 'ElecStatsList', path: 'statsList', props: { elecViews: true }, components: { elecViews: ElecStatsList } },
        { name: 'ElecActionList', path: 'actionList', props: { elecViews: true }, components: { elecViews: ElecActionList } },
        { name: 'ElecUserList', path: 'userList', props: { elecViews: true }, components: { elecViews: ElecUserList } },
        { name: 'ElecUseManual', path: 'userManual', props: { elecViews: true }, components: { elecViews: ElecUseManual } },
        { name: 'ElecSetting', path: 'setting', props: { elecViews: true }, components: { elecViews: ElecSetting } },
        { name: 'ElecError', path: 'error', props: { elecViews: true }, components: { elecViews: ElecError } }
      ]
    },
    {
      // 전기오븐
      path: '/oven/:userId/:deviceId/:route',
      props: { view: true },
      components: { view: OvenLayout },
      children: [
        { name: 'OvenMain', path: '/', props: { ovenViews: true }, components: { ovenViews: OvenMain } },
        { name: 'OvenCookGuide', path: 'guide', props: { ovenViews: true }, components: { ovenViews: OvenCookGuide } },
        { name: 'OvenMyMenu', path: 'myMenu', props: { ovenViews: true }, components: { ovenViews: OvenMyMenu } },
        { name: 'OvenStatsList', path: 'statsList', props: { ovenViews: true }, components: { ovenViews: OvenStatsList } },
        { name: 'OvenActionList', path: 'actionList', props: { ovenViews: true }, components: { ovenViews: OvenActionList } },
        { name: 'OvenUserList', path: 'userList', props: { ovenViews: true }, components: { ovenViews: OvenUserList } },
        { name: 'OvenUseWay', path: 'useWay', props: { ovenViews: true }, components: { ovenViews: OvenUseWay } },
        { name: 'OvenSetting', path: 'setting', props: { ovenViews: true }, components: { ovenViews: OvenSetting } },
        { name: 'OvenError', path: 'error', props: { ovenViews: true }, components: { ovenViews: OvenError } }
      ]
    }
  ]
})
