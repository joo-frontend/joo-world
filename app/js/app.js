var App = {
    view: {},
    model: {},
    collection: {},
    event: {},
    fn: {},
    util: {},
    vars:{
        posterType : 'ct0', //VOD 탐색에서 사용하는 포스터 보기 / 리스트 보기 형태
        channelType : 'timeline', //편성표에서 사용하는 타임라인 보기 / 채널별 보기 형태
        oskText : ''//검색 검색어 텍스트
    },
    router : {},
    config : {},
    data : {},
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

$(function () {
    App.router = new directory.Router();

    Backbone.history.start();
});
