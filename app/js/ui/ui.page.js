var ui = ui || {};
ui.page = ui.page || {};
ui.page.global = function () {
    this.init();
};
ui.page.global.prototype = {
    map : null,
    marker: null,
    init: function () {
        console.log('■ import Global');
        this._assignElements();
        this._attachEventHandlers();
        this._initTmap();
        this._ready();
    },
    _assignElements: function () {
        this.welDoc = $(document.body);
        this.welWin = $(window);
    },
    _attachEventHandlers: function () {
        //탭
        this.welDoc.on('click', '._fnMoveMyLocation', $.proxy(this._fnMoveMyLocation, this));
        this.welDoc.on('click', '._fnRefresh', $.proxy(this._fnRefresh, this));
    },
    _fnRefresh: function(){
        console.log('■■■ 맵 초기화 ■■■');
        this._initTmap();
    },
    _fnMoveMyLocation: function(){
        console.log('■■■ 내 위치로 ■■■');
        var lonlat = new Tmap.LonLat(126.901500, 37.485451).transform("EPSG:4326", "EPSG:3857");
        map.setCenter(lonlat,14);
    },
    _initTmap: function(){

    },
    _ready: function () {

    }
};

var uiPage = new ui.page.global();