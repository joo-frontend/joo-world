directory.globalEventView = Backbone.View.extend({
    el : "body",
    htActKey: {
        /* 방향키 */
        37: "left",
        38: "top",
        39: "right",
        40: "bottom",
        13: "ok",
        8: 'back',
        /* 숫자키 */
        48: 'num0',
        49: 'num1',
        50: 'num2',
        51: 'num3',
        52: 'num4',
        53: 'num5',
        54: 'num6',
        55: 'num7',
        56: 'num8',
        57: 'num9',
        46: '*',
        187: '#',
        /* 기능키 */
        36: 'home',
        116: 'search',
        117: 'chart',
        118: 'menu',
        119: 'star',
        /* 사용안함
         ?? : 'allChanel',
         ?? : 'subtitles',
         */
        /* 특수컬러키 */
        112: 'red',
        113: 'green',
        114: 'yellow',
        115: 'blue',
        /* 플레이키 */
        120: 'play',
        121: 'stop',
        122: 'backward',
        123: 'forward',
        188: 'prev',
        190: 'next',
        /* 채널 관련 */
        219: 'channelUp',
        221: 'channelDown',
        186: 'favorUp',
        222: 'favorDown',

        191: 'end'

    },
    events: {
        'keydown': 'onKeydown',
        'click a[href="#"]': 'prevent'
    },
    initialize:function(){
    },
    onKeydown: function(e) {
        //브라우저 back 키에 히스토리백 기능 제거
        if (
            e.keyCode === 8 ||
            e.keyCode === 112 ||
            e.keyCode === 113 ||
            e.keyCode === 114 ||
            e.keyCode === 115 ||
            e.keyCode === 120 ||
            e.keyCode === 121 ||
            e.keyCode === 122 ||
            e.keyCode === 123 ||
            e.keyCode === 188 ||
            e.keyCode === 190
        ) {
            e.preventDefault();    
        }

        // console.log("e.keyCode : " + e.keyCode);
        var page = Backbone.history.getFragment();
        // 예외사항
        // if (e.keyCode == 8 || e.keyCode == 122 || e.keyCode == 123) { //back 버튼 예외처리
        //     e.preventDefault();
        // }

        if(e.keyCode == 36){
            if(($("#homeMain").find('.menu_depth_01.active').find('._moveFocus').find('li.focus').data('categoryid') === '1TAS0') == true){
                var stopApp = {
                    TYPE : "notify",
                    COMMAND : "StopApp",
                    CONTENTS : "Exit",
                    DATA : {
                    }
                };
                var xmlString2 = X2JS.json2xml_str(stopApp);
                xmlString2 = "<INTERFACE version='3'>" + xmlString2 + "</INTERFACE>";
                App.api.csApi.request(xmlString2);
            }else{
                if(animation.homebg == true){
                    App.router.callMenu({menuId: "101"});
                }else{
                    App.router.callMenu({menuId: "101", startApp : true});
                    App.api.csApi.startAnimation(animation.ani_main_home_SlideIn);
                    animation.homebg = true;
                }

            }
        }
        var t = e.charCode || e.keyCode || 0;
        if (this.htActKey.hasOwnProperty(t)) {
            console.log(this.htActKey[t]);
            var oPage = App.view[page];
            var sCode = this.htActKey[t];
            if (typeof(oPage[sCode]) == "function") {
                oPage[sCode]();
            } else {
                return false;
            }
        }
    },

    prevent : function (event) {
        event.preventDefault();
    }
});
