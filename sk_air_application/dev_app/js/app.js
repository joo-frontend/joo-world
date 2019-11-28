var App = {
    view: {},
    model: {},
    collection: {},
    event: {},
    fn: {},
    util: {},
    timer: {},
    device : {},
    vars:{
        posterType : 'ct0', //VOD 탐색에서 사용하는 포스터 보기 / 리스트 보기 형태
        channelType : 'timeline', //편성표에서 사용하는 타임라인 보기 / 채널별 보기 형태
        oskText : '',//검색 검색어 텍스트
        //todo : 상용시 주석해야함
        //  loginId : "smartair3@sk.com",
        loginId : "",
         // token : "vBVbrb88bK6Ns0EaKsTnPsQnFhAEMqvF3F8WAW7qyzrd/cVuSZSvcuCg6hoZjvZM",
        token : "",
        // schCd: "B000002497"
    },
    router : {},
    config : {},
    data : {}
};



var directory = {};

var router = null;


var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) == null ? false : true;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
    }
};


$(function () {
    // if(isMobile.Android()){
    //     window.AirManager.getLoginId();
    //     window.AirManager.currentPosition();
    // }else{
    //     window.webkit.messageHandlers.AirManager.postMessage({command:"getLoginId"});
    //     window.webkit.messageHandlers.AirManager.postMessage({command:"currentPosition"});
    // }
    if (typeof window.AirManager !== 'undefined') {
        // android
        window.AirManager.getLoginId();
        window.AirManager.currentPosition();
    } else if (typeof window.webkit !== 'undefined') {
        // ios
        window.webkit.messageHandlers.AirManager.postMessage({command:"getLoginId"});
        window.webkit.messageHandlers.AirManager.postMessage({command:"currentPosition"});
    } else {
        // pc
        App.vars.loginId = "smartair3@sk.com"
    }
    App.router = new directory.Router();
    Backbone.history.start();
});

