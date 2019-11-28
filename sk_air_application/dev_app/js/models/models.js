var ubiveloxSKT = 'http://iot.ubiveloxmobile.com/skt';
/** 2.1.1 intro
 * POST /cmm/init
 *
 * * header
 * Authorization    ""               // 인증 토큰
 * Content-Type     application/json // (필수)
 *
 * * Request Attributes
 * os    Android, iOS
 */

directory.intro = Backbone.Model.extend({
    url: ubiveloxSKT + '/cmm/init'
});

App.model.intro = new directory.intro;




/** 2.1.2 공지사항
 * POST /cmm/notice
 *
 * * header
 * Content-Type     application/json
 *
 * * Request Attributes
 * nextKey    "" // 더 보기 페이지
 */



directory.notice = Backbone.Model.extend({
    url: ubiveloxSKT + '/cmm/notice'
});

App.model.notice = new directory.notice;



/** 2.1.3 설정 정보 조회
 * POST /cmm/setting
 *
 * * header
 * Content-Type     application/json
 *
 * * Request Attributes
 * 없음
 */



directory.settingCheck = Backbone.Model.extend({
    url: ubiveloxSKT + '/cmm/setting'
});

App.model.settingCheck = new directory.settingCheck;




/** 2.1.4 설정 정보 조회
 * POST /cmm/setting/mod
 *
 * * header
 * Content-Type     application/json
 *
 * * Request Attributes
 * 없음
 */

directory.settingMod = Backbone.Model.extend({
    url: ubiveloxSKT + '/cmm/setting/mod'
});

App.model.settingMod = new directory.settingMod;



/** 2.2.1 학교목록(지도)
 * POST /sch/list
 *
 * * header
 * Authorization    ""               // 인증 토큰
 * Content-Type     application/json // (필수)
 *
 * * Request Attributes
 * lat         "37.485451" // 위도
 * lon         "126.901500"// 경도
 * zoomLevel   "" //지도 축적
 * mySchYn     "" // 내학교여부(기본값 N)
 * size        "" // 한번에 조회할 리스트 수(기본값 200)
 * offset      "" // 리스트 마지막 번호(기본값 0)
 */

directory.schoolListMap = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/list'
});

App.model.schoolListMap = new directory.schoolListMap;

/** 2.2.2 학교 검색
 * POST /sch/find
 *
 * * header
 * Authorization    ""               // 인증 토큰
 * Content-Type     application/json // (필수)
 *
 * * Request Attributes
 * sidoCd      "11" // 광역시/도 코드
 * siguCd      ""   // 시/군/구 코드
 * schType     ""   // 학교 구분 코드: 초등학교, 유치원(기본값 초등학교)
 */

directory.schoolSearch = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/find'
});

App.model.schoolSearch = new directory.schoolSearch;



/** 2.2.3 학교 상세
 * POST /sch/view
 *
 * * header
 * Authorization    ""               // 인증 토큰
 * Content-Type     application/json // (필수)
 *
 * * Request Attributes
 * schCd   "B000002008" // 학교코드(필수)
 */

directory.schoolDetail = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/view'
});

App.model.schoolDetail = new directory.schoolDetail;



/** 2.2.4 내 학교 목록
 * POST /sch/my
 *
 * * header
 * Authorization    ""                  // 인증 토큰
 * Content-Type     application/json    // (필수)
 * loginId          seokan@ubivelox.com // (필수)
 *
 * * Request Attributes
 * size    "" // 한번에 조회할 리스트 수(기본값 200)
 * offset  "" // 리스트 마지막 번호 (기본값 0)
 */

directory.mySchoolList = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/my'
});

App.model.mySchoolList = new directory.mySchoolList;



/** 2.2.5 내 학교 등록
 * POST /sch/my/reg
 *
 * * header
 * Authorization    ""                  // 인증 토큰
 * Content-Type     application/json    // (필수)
 * loginId          seokan@ubivelox.com // (필수)
 *
 * * Request Attributes
 * schCd       "B000002008"  // 학교코드(필수)
 * lv          ""            // 학년
 * cls         ""            // 학급
 */

directory.mySchoolRegister = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/my/reg'
});

App.model.mySchoolRegister = new directory.mySchoolRegister;



/** 2.2.6 내 학교 삭제
 * POST /sch/my/del
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com // (필수)
 *
 * * Request Attributes
 * schCd         // 학교코드(필수)
 * lv            // 학년
 * cls           // 학급
 *
 * API 정의서에는 학년, 학급
 */

directory.mySchoolDelete = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/my/del'
});

App.model.mySchoolDelete = new directory.mySchoolDelete;




/** 2.2.7 최근 검색 학교 목록(검색창)
 * POST /sch/ser/his
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  ""
 */

directory.recentlySearchSchoolList = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/ser/his'
});

App.model.recentlySearchSchoolList = new directory.recentlySearchSchoolList;




/** 2.2.8	최근 검색 학교 삭제(검색창)
 * POST /sch/ser/del
 *
 * * header
 * Authorization
 * Content-Type     application/json    // (필수)
 * loginId          seokan@ubivelox.com // (필수)
 *
 * * Request Attributes
 *  ""
 */

directory.recentlySearchSchoolDelete = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/ser/del'
});

App.model.recentlySearchSchoolDelete = new directory.recentlySearchSchoolDelete;




/** 2.2.9	학교 검색 자동 완성(검색창)
 * POST /sch/ser/auto
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 *
 * * Request Attributes
 *  serKey	"학교"  //	검색어(필수)
 *  size	""      //	한번에 조회할 리스트 수 (기본값 200)
 *  offset	""  //	리스트 마지막 번호(기본값 0)
 */

directory.autoCompletedSearchSchool = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/ser/auto'
});

App.model.autoCompletedSearchSchool = new directory.autoCompletedSearchSchool;




/** 2.2.10	학교 검색 결과(검색창)
 * POST /sch/ser
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  serKey	"학교" //	검색어(필수)
 *  size	""    //	한번에 조회할 리스트 수 (기본값 200)
 *  offset	""    //	리스트 마지막 번호(기본값 0)
 */

directory.searchSchoolResult = Backbone.Model.extend({
    url: ubiveloxSKT + '/sch/ser'
});

App.model.searchSchoolResult = new directory.searchSchoolResult;

/** 2.2   차트데이드
 * POST  /stats/ins
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  dvcId        "D42511262322" //가전아이디(필수)
 */

directory.intariorSensorChartData = Backbone.Model.extend({
    url: ubiveloxSKT + '/stats/ins'
});

App.model.intariorSensorChartData= new directory.intariorSensorChartData;


/** 2.3.1   실내센서 상세
 * POST /sensor/view
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  deviceSn        "AVC-300"  //제품코드(필수)
 */

directory.intariorSensorDetail = Backbone.Model.extend({
    url: ubiveloxSKT + '/sensor/view'
});

App.model.intariorSensorDetail = new directory.intariorSensorDetail;




/** 2.4.1   공기청정기 상세
 * POST /cleaner/view
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  deviceSn        //제품코드(필수)
 */

directory.airCleanerDetail = Backbone.Model.extend({
    url: ubiveloxSKT + '/cleaner/view'
});

App.model.airCleanerDetail = new directory.airCleanerDetail;

// App.model.airCleanerDetail.fetch({
//     headers: {
//         "Authorization": App.vars.token,
//         "Content-Type": "application/json;charset=UTF-8",
//         "loginId": App.vars.loginId,
//     },
//     data: {
//
//         "deviceSn" : "DVC0000173"
//     }
// });


/** 2.5.1   설치 위치 목록
 * POST /dvn/loc
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  schCd      B000002329  //학교 코드(필수)
 */

directory.installLocationList = Backbone.Model.extend({
    url: ubiveloxSKT + '/dvn/loc'
});

App.model.installLocationList = new directory.installLocationList;




/** 2.5.2   기기 등록
 * POST /dvn/reg
 *
 * * header
 * Authorization
 * Content-Type     application/json(필수)
 * loginId          seokan@ubivelox.com(필수)
 *
 * * Request Attributes
 *  deviceSn		// 제품코드
 *  lv	    	    // 학년(기타는 9로 입력)
 *  cls		        // 학급(기타 장소는 한글로 입력)

 */

directory.deviceResister = Backbone.Model.extend({
    url: ubiveloxSKT + '/dvn/reg'
});

App.model.deviceResister = new directory.deviceResister;


/** 107. 실내공기센서, 공기청정기 이력 및 알람 목록
 * GET /smarthome/v1/common/deviceOpr
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFTg/T6FLCr3RBqW215io/t9 (필수)
 * Content-Type     application/json (필수)
 *
 * * Request Attributes
 *  rtnDvcId         제어용 디바이스 아이디
 *  count            조회 할 count
 */

directory.deviceOpr = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/common/deviceOpr'
});

App.model.deviceOpr = new directory.deviceOpr;


/** 131 디바이스 정보 조회
 * POST /smarthome/v1/open/dvc/simple/info
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPqLR5vs06jELqrM02IyN80K8nd9m+mI+2y9NN+cxr8RD (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *          rtnDvcIdList                // 조회 디바이스 아이디 리스트 (필수)
 *                  __ rtnDvcId         // 디바이스 아이디 (필수)
 *  {
 *  "rtnDvcIdList": [
 *         {"rtnDvcId": "D99628241951"},
 *         {"rtnDvcId": "D51898272971"},
 *         {"rtnDvcId": "D61341120462"}
]
}

 */

directory.deviceInformationRefer = Backbone.Model.extend({
    url: ubiveloxSKT + '/smarthome/v1/open/dvc/simple/info'
});

App.model.deviceInformationRefer = new directory.deviceInformationRefer;

/** 132 디바이스 상세 조회
 * POST /air/v1/open/dvc/display/info
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPqLR5vs06jELqrM02IyN80K8nd9m+mI+2y9NN+cxr8RD (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *  rtnDvcId	"D93033427537"	// 디바이스 아이디
 *
 *
 */

directory.deviceDetailRefer = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/open/dvc/display/info'
});

App.model.deviceDetailRefer = new directory.deviceDetailRefer;


/** 기기목록
 * GET /air/v1/device/listDevice
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFRn0RUzxUa+pURAUO/U5RaV (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *  loginId	     "smartair3@sk.com"	// 로그인 아이디
 *
 *
 */

directory.listDevice = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/device/listDevice'
});

App.model.listDevice = new directory.listDevice;

// App.model.listDevice.fetch({
//     headers: {
//         "Authorization": App.vars.token,
//         "Content-Type": "application/json;charset=UTF-8",
//         "company": "school"
//     },
//     data: {
//         "loginId": App.vars.loginId
//     }
// });



/** 133. 기기별 꺼짐 예약 등록  // API 확인필요 테스트시 에러 확인
 * POST /smarthome/v1/member/updatePushTknVal
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFR30DHe7N8omaOuATXruavA (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *      "pushTknVal": "D93033427537"     // 푸쉬토큰(EndpoNumber Id)(필수)
 *
 */

directory.bookingDeviceTurnOff = Backbone.Model.extend({
    url: ubiveloxSKT + '/smarthome/v1/open/device/schedule/add'
});

App.model.bookingDeviceTurnOff = new directory.bookingDeviceTurnOff;

// App.model.bookingDeviceTurnOff.fetch({
//     headers: {
//         "Authorization": App.vars.token,
//         "Content-Type": "application/json;charset=UTF-8",
//         "company": "school"
//     },
//     data: {
//         "pushTknVal": ???
//     }
// });

/** 300. 디바이스 제어
 * POST /smarthome/v1/company/controlDevice
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFR30DHe7N8omaOuATXruavA (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *  dvcCd               DVC0000203          // 제품군 코드
 *  rtnDvcId            D16943363193        // 인터페이스 디바이스 아이디 제어 PK
 *  commandType         D03                 // 디바이스 기능코드
 *  requestValue        off                 // 컨트롤 밸류
 *
 * // 기능코드, 컨트롤 밸류 : API테스트 및 API정의서 보고 확실한 것만 정리
 * 1. 전원: d03, 0n/0ff
 * 2. 차일드락: d04, on/off
 * 3. 모드: d05, 01자동 /02 수동(숫자)
 * 4. 풍량: D19, 01~06(숫자)
 * 5. 플라즈마: D20, On/Off

 * 6. 가습: D101, On/Off
 * 7. 이온: D135, On/Off
 * 8. 청정표시등:  D252, On/OFf
 * 9. 공기제균: D253, On/Off
 *10. UV+: D256, On/Off
 *11. 오염도램프, D257 On/Off
 */
directory.controlDeviceEach = Backbone.Model.extend({

    // url: ubiveloxSKT + '/smarthome/v1/company/controlDevice'
    url: ubiveloxSKT + '/air/v1/company/controlDevice'
});

App.model.controlDeviceEach = new directory.controlDeviceEach;

// App.model.controlDeviceEach.fetch({
//     headers: {
//         "Authorization": App.vars.token,
//         "Content-Type": "application/json;charset=UTF-8",
//         "company": "school"
//     },
//     data: {
//      "dvcCd" : "DVC0000203",          // 제품군 코드
//      "rtnDvcId" : "D16943363193",        // 인터페이스 디바이스 아이디 제어 PK
//      "commandType" : "D03",                 // 디바이스 기능코드
//      "requestValue" : "off"                 // 컨트롤 밸류
//     }
// });

/** 301. 디바이스 제어 결과 폴링조회(삼성기기, 엘지공청기, 엘지에어컨  제외)
 * GET /smarthome/v1/company/commandPolling
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFR30DHe7N8omaOuATXruavA (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *      commandId   D93033427537     // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId
 *
 */

directory.commandPolling = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/company/commandPolling'
});

App.model.commandPolling = new directory.commandPolling;

// App.model.commandPolling.fetch({
//     headers: {
//         "Authorization": App.vars.token,
//         "Content-Type": "application/json;charset=UTF-8",
//         "company": "school"
//     },
//     data: {
//      "commandId" : ???          // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId
//     }
// });




/** 302. 디바이스 제어 결과 폴링조회2 (삼성기기, 엘지공청기, 엘지에어컨)
 * GET /smarthome/v1/device/commandPolling2
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFTg/T6FLCr3RBqW215io/t9 (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *      commandId   D93033427537     // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId
 *
 */

directory.commandPolling_2 = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/device/commandPolling2'
});

App.model.commandPolling_2 = new directory.commandPolling_2;

/** 303. 디바이스 그룹 제어
 * POST /smarthome/v1/open/dvc/group/control
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFTg/T6FLCr3RBqW215io/t9 (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *  commandType         D03                 // 디바이스 기능코드
 *  requestValue        off                 // 컨트롤 밸류
 *  rtnDvcIdList        [{"rtnDvcId": ""}]  // 조회 디바이스 아이디 리스트


 */

directory.controlDeviceGroup = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/open/dvc/group/control'
});

App.model.controlDeviceGroup = new directory.controlDeviceGroup;


/** 304. 디바이스 그룹제어 결과폴링 조회
 * POST /smarthome/v1/device/b2bControlPolling
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPlSknyqQqWipXT021cvvFFTg/T6FLCr3RBqW215io/t9 (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 *  commandIdList         [{"commandId":""}]  // 제어커맨드아이디 리스트
 */

directory.b2bControlPolling = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/device/b2bControlPolling'
});

App.model.b2bControlPolling = new directory.b2bControlPolling;


/** 103 실내공기센서 공기리포트 일간조회
 * GET smarthome/v1/air/dailyReport
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPqLR5vs06jELqrM02IyN80K8nd9m+mI+2y9NN+cxr8RD (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 * reqType  //요청구분(종합점수,온도,습도,미세먼지,TVOC,이산화탄소) (000~005) *defalut:000 (필수)
 * reqDate // 요청날짜 (2017-03-12) (필수)
 *
 **/

directory.dailyReport = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/air/dailyReport'
});

App.model.dailyReport = new directory.dailyReport;


/** 104 실내공기센서 공기리포트 주간조회
 * GET smarthome/v1/air/weeklyReport
 *
 * * header
 * Authorization    vBVbrb88bK6Ns0EaKsTnPqLR5vs06jELqrM02IyN80K8nd9m+mI+2y9NN+cxr8RD (필수)
 * Content-Type     application/json (필수)
 * company          school (필수)
 *
 * * Request Attributes
 * reqType  //요청구분(종합점수,온도,습도,미세먼지,TVOC,이산화탄소) (000~005) *defalut:000 (필수)
 * reqDate // 요청날짜 (2017-03-12) (필수)
 *
 **/

directory.weeklyReport = Backbone.Model.extend({
    url: ubiveloxSKT + '/air/v1/air/weeklyReport'
});

App.model.weeklyReport = new directory.weeklyReport;

// App.model.commandPolling_2.fetch({
//     headers: {
//         "Authorization": App.vars.token,
//         "Content-Type": "application/json;charset=UTF-8",
//         "company": "school"
//     },
//     data: {
//      "commandId" : ???          // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId
//     }
// });


