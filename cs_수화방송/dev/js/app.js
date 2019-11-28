/**
 * Todo
 * 1. 팝업 플러그인 연동
 * 2. 다이얼로그 플러그인 연동
 * 3. Data를 Json으로 변경
 * 4. 일자 및 카테고리 정렬 기능 추가
 * 5. moment 이용해 D-day 기능 추가
 * 6. 냉장고 채우기 페이지 publishing
 *
 */

var App = {
    view: {},
    model: {},
    collection: {},
    event: {},
    fn: {},
    util: {},
    vars:{
        posterType : 'ct0', //VOD 탐색에서 사용하는 포스터 보기 / 리스트 보기 형태
        channelType : 'timeline' //편성표에서 사용하는 타임라인 보기 / 채널별 보기 형태
    },
    router : {},
    config : {},
    data : {
        stbData : null //셋탑박스 데이터
    },
    testHistory : {
      prevMenuId : ''
    }, //임시 히스토리
    btnModel : {
        footerBtn : {
            closeBtn : {
                btnList : [
                    {btnName : "닫기"}
                ]
            }
        }
    }
};

var directory = {};

var router = null;

/**
 * var xmlAsStr = x2js.json2xml_str( jsonObj );
 * var jsonObj = x2js.xml_str2json( xmlText );
 */
var X2JS = new X2JS();


$(function () {
    App.router = new directory.Router();

    Backbone.history.start();
});
