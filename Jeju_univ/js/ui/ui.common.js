var timer={};

var ui = ui || {};

ui.view = ui.view || {};
ui.view.global = function () {
    this.init();
};
ui.view.global.prototype = {
    autoScrollEasing: "linear",
    autoScrollRepeat: true,
    autoScrollDuration: 10000,
    autoScrollDelay: 3000,
    init: function () {
        //console.info('■ import 공통 스크립트');
        this._assignElements();
        this._attachEventHandlers();
        this._fnAutoScrolling();
        this._fnAutoScrolling2();
        this.ready();
    },
    _assignElements: function () {
        this.welDoc = $(document.body);
    },
    _attachEventHandlers: function () {
        this.welDoc.on('click', 'a[href="#"]', $.proxy(this._onClickEventPrevent, this));
    },
    _onClickEventPrevent: function (event) {
        event.preventDefault();
    },
    _fnAutoScrolling: function(){
        var self = this;
        var welScrollArea = $('._autoScrollMoving');
        if(welScrollArea.length > 0){
            setTimeout(function(){
            var nScrollAreaHeight = welScrollArea.height();
            var nContentsHeight = welScrollArea.find('.area_scroll').height();
            var nScrollTop = nContentsHeight - nScrollAreaHeight;
            console.log("_fnAutoScrolling");
            console.log(nScrollAreaHeight, nContentsHeight);
            welScrollArea.animate({
                'scrollTop' : nScrollTop
            },{
                // duration : self.autoScrollDuration,
                duration : nScrollTop * 16,
                easing : self.autoScrollEasing,

                complete: function () {
                    // 전역변수 autoScrollRepeat 모드 true일 경우만
                    if (self.autoScrollRepeat) {
                        clearTimeout(timer._fnAutoScrolling );
                        timer._fnAutoScrolling = setTimeout(function(){
                            // 스크롤 초기화
                            welScrollArea.scrollTop(0);
                            // 스크롤 반복
                            self._fnAutoScrolling();
                        }, self.autoScrollDelay)
                    }
                }
            });
            },200)
        }
    },
    _fnAutoScrolling2: function(){
        var self = this;
        var welScrollArea = $('._autoScrollMoving2');
        if(welScrollArea.length > 0){
            setTimeout(function(){
            var nScrollAreaHeight = welScrollArea.height();
            var nContentsHeight = welScrollArea.find('.area_scroll').height();
            var nScrollTop = nContentsHeight - nScrollAreaHeight;
            console.log("_fnAutoScrolling2");
            console.log(nScrollAreaHeight, nContentsHeight);
            welScrollArea.animate({
                'scrollTop' : nScrollTop
            },{
                // duration : self.autoScrollDuration,
                duration : nScrollTop * 16,
                easing : self.autoScrollEasing,

                complete: function () {
                    // 전역변수 autoScrollRepeat 모드 true일 경우만
                    if (self.autoScrollRepeat) {
                        clearTimeout(timer._fnAutoScrolling2 );
                        timer._fnAutoScrolling2 = setTimeout(function(){
                            // 스크롤 초기화
                            welScrollArea.scrollTop(0);
                            // 스크롤 반복
                            self._fnAutoScrolling2();
                        }, self.autoScrollDelay + 1)
                    }
                }
            });
            },200)
        }
    },
    ready: function () {

    }
};
var oCommon = new ui.view.global();






