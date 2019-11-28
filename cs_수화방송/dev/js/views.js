directory.popupSetting = Backbone.View.extend({
    mode: {
        setting: true,
        btn: false
    },
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_popupSetting/popupSetting"]());
        $('#container_popup').html(self.$el);
        App.fn.globalUtil.switchMode(self.mode, "setting");

    },
    /**
     * get 함수
     * @returns {*|jQuery}
     */
    getFocus: function () {
        return $('.popup_body ul').find('.focus');
    },
    getFocusIndex: function () {
        return this.getFocus().index();
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;

    },
    right: function () {
        var self = this;

    },
    top: function () {
        var self = this;
        if (self.mode.setting) {
            if (self.getFocusIndex() === 0) {
                App.fn.globalUtil.moveActive({
                    step: 1,
                    el: $('._wrap_popup ._section'),
                    afterCallback: function () {
                        App.fn.globalUtil.switchMode(self.mode, "btn");
                    }
                });
            } else {
                App.fn.globalUtil.moveFocus({
                    el: $('._wrap_popup .popup_body .active'),
                    findScope: 'li',
                    direction: "prev",
                    circulation: false
                });
            }
        } else if (self.mode.btn) {
            App.fn.globalUtil.moveActive({
                step: -1,
                el: $('._wrap_popup ._section'),
                afterCallback: function () {
                    App.fn.globalUtil.switchMode(self.mode, "setting");
                    $('.popup_body .active').find('li').removeClass('focus').eq(3).addClass('focus')
                }
            });
        }
    },
    bottom: function () {
        var self = this;
        if (self.mode.setting) {
            if (self.getFocusIndex() === 3) {
                App.fn.globalUtil.moveActive({
                    step: 1,
                    el: $('._wrap_popup ._section'),
                    afterCallback: function () {
                        App.fn.globalUtil.switchMode(self.mode, "btn");
                    }
                });
            } else {
                App.fn.globalUtil.moveFocus({
                    el: $('._wrap_popup .popup_body .active'),
                    findScope: 'li',
                    direction: "next",
                    circulation: false
                });
            }
        } else if (self.mode.btn) {
            App.fn.globalUtil.moveActive({
                step: -1,
                el: $('._wrap_popup ._section'),
                afterCallback: function () {
                    App.fn.globalUtil.switchMode(self.mode, "setting");
                    $('.popup_body .active').find('li').removeClass('focus').eq(0).addClass('focus');
                }
            });
        }
    },

    ok: function () {
        var self = this;
        if(self.mode.setting){
            var nIdx = self.getFocusIndex();
            switch(nIdx){
                case 0:
                    //크기조절
                    App.router.callMenu({menuId: '902'});
                    break;
                case 1:
                    //위차변경
                    App.router.callMenu({menuId: '903'});
                    break;
                case 2:
                    //화면분할
                    App.router.callMenu({menuId: '904'});
                    break;
                case 3:
                    //설정초기화
                    break;
            }
            $('.popup_dim').remove();
        } else if (self.mode.btn) {
            $('.popup_dim').remove();
            App.router.callMenu({menuId: '900'});
        }

    },
    back: function () {
        var self = this;
        // App.router.callMenu(App.historyApp.pop());
        App.router.callMenu({menuId: '900'});
        $('.popup_dim').remove();
    }
});




directory.settingPosition = Backbone.View.extend({
    mode: {
        setting: true
    },
    num: 0,
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_settingPosition/settingPosition"]());
        $('#container').html(self.$el);
        $('.area_red_key').hide();
    },
    bigPip: function () {
        this.num = this.num + 1;
        $('.area_pip').attr('class', 'area_pip').addClass('size0' + (this.num));
    },
    smallPip: function () {
        this.num = this.num - 1;
        $('.area_pip').attr('class', 'area_pip').addClass('size0' + (this.num));
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;
    },
    right: function () {
        var self = this;

    },
    top: function () {
        var self = this;
        if($('.tooltip:visible').length > 0){
            if(self.num < 4){
                self.bigPip();
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    bottom: function () {
        var self = this;
        if($('.tooltip').length > 0) {
            if (self.num > 0) {
                self.smallPip();
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    ok: function () {
        var self = this;
        //설정완료
        $('.tooltip').remove();
        $('.area_red_key').show();
    },
    back: function () {
        var self = this;

    },
    red: function () {
        //f1
        //스마트 수화 팝업
        App.router.callMenu({menuId: '901'});
        $('.area_red_key').hide();
    }
});




directory.settingPosition = Backbone.View.extend({
    mode: {
        setting: true
    },
    num: 0,
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_settingPosition/settingPosition"]());
        $('#container').html(self.$el);
        $('.area_red_key').hide();
    },
    getFocus: function () {
        return $('.area_position ._moveFocus').find('.focus');
    },
    getFocusIndex: function () {
        return this.getFocus().index();
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        if(nIndex === 3 || nIndex === 6){
            return false;
        } else {
            App.fn.globalUtil.moveFocus({
                el: $('.area_position ._moveFocus'),
                findScope: 'li',
                direction: "prev",
                circulation: false
            });
        }
    },
    right: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        if(nIndex === 2 || nIndex === 5){
            return false;
        } else {
            App.fn.globalUtil.moveFocus({
                el: $('.area_position ._moveFocus'),
                findScope: 'li',
                direction: "next",
                circulation: false
            });
        }


    },
    top: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        $('._moveFocus').find('li').eq(nIndex - 3).addClass('focus').siblings().removeClass('focus');
    },
    bottom: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        $('._moveFocus').find('li').eq(nIndex + 3).addClass('focus').siblings().removeClass('focus');
    },
    ok: function () {
        var self = this;
        //설정완료
    },
    back: function () {
        var self = this;

    },
    red: function () {
        //f1
        //스마트 수화 팝업
    }
});




directory.settingSize = Backbone.View.extend({
    mode: {
        setting: true
    },
    num: 0,
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_settingSize/settingSize"]());
        $('#container').html(self.$el);
        $('.area_red_key').hide();
    },
    bigPip: function () {
        this.num = this.num + 1;
        $('.area_pip').attr('class', 'area_pip').addClass('size0' + (this.num));
    },
    smallPip: function () {
        this.num = this.num - 1;
        $('.area_pip').attr('class', 'area_pip').addClass('size0' + (this.num));
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;
    },
    right: function () {
        var self = this;

    },
    top: function () {
        var self = this;
        if($('.tooltip:visible').length > 0){
            if(self.num < 4){
                self.bigPip();
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    bottom: function () {
        var self = this;
        if($('.tooltip').length > 0) {
            if (self.num > 0) {
                self.smallPip();
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    ok: function () {
        var self = this;
        //설정완료
        $('.tooltip').remove();
        $('.area_red_key').show();
    },
    back: function () {
        var self = this;

    },
    red: function () {
        //f1
        //스마트 수화 팝업
        App.router.callMenu({menuId: '901'});
        $('.area_red_key').hide();
    }
});




directory.smartSign = Backbone.View.extend({
    mode: {
        setting: true,
        btn: false
    },
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_smartSign/smartSign"]());
        $('#container').html(self.$el);
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;
    },
    right: function () {
        var self = this;

    },
    top : function () {
        var self = this;

    },
    bottom :  function () {
        var self = this;

    },
    ok: function () {
        var self = this;

    },
    back: function () {
        var self = this;

    },
    red: function () {
        //f1
        //스마트 수화 팝업
        App.router.callMenu({menuId: '901'});
        $('.area_red_key').hide();
    }
});




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

directory.globalUtil = Backbone.View.extend({
    initialize: function () {
    },
    setTime : function () {
        $('.txt_time .hour').html(moment().format('hh'));
        $('.txt_time .minute').html(moment().format('mm'));
        $('.txt_date').html(moment().format('a'));
        $('._now_date').html(moment().format("MMMDo(dddd)"));
    },
    isWeather : function (data) {
        switch (data) {
            case "01" :
                return "맑음";
                break;
            case "02" :
                return "구름조금";
                break;
            case "03" :
                return "구름많음";
                break;
            case "04" :
                return "흐림";
                break;
            case "05" :
                return "비";
                break;
            case "06" :
                return "눈";
                break;
            case "07" :
                return "비온후갬";
                break;
            case "08" :
                return "소나기";
                break;
            case "09" :
                return "비/눈";
                break;
            case "10" :
                return "눈/비";
                break;
            case "11" :
                return "낙뢰";
                break;
            case "12" :
                return "안개";
                break;
            case "13" :
                return "흐린후 갬";
                break;
            case "14" :
                return "맑은 후 흐림";
                break;
            case "15" :
                return "눈온후 갬";
                break;
            case "16" :
                return "눈 또는 비후 갬";
                break;
        }
    },

    switchMode: function (mode, selectMode) {
        Object.keys(mode).forEach(function (name, index) {
            if (name === selectMode) {
                mode[name] = true;
                console.log('%c 현재 모드 : ' + name + " ", 'background: #666; color: #fff');
            } else {
                mode[name] = false;
            }
        });

    },
    getMode: function (mode) {
        var modeName = "";
        Object.keys(mode).forEach(function (name) {
            if (mode[name] === true) {
                modeName = name;
            }
        });
        return modeName;
    },
    moveActive: function (opt) {
        var option = {
            step: 0, //움직일 거리 (정수)
            ignoreClass: '._ignore', //필터링하는 클래스네임
            activeClass: 'active', //엑티브 클래스네임
            el: $('._section'), //기준 클래스 네임
            circulation: false,
            beforeCallback: function () {
            },
            afterCallback: function () {
            }
        };
        var setting = $.extend(option, opt);
        var totalStep; //전체 길이
        var currentStep; //현재 활성화
        var nextStep; //변경 활성화
        setting.beforeCallback();
        totalStep = setting.el.length - 1;
        //console.log("totalStep : " + totalStep);
        var elSection = setting.el.not(setting.ignoreClass);
        elSection.each(function (index) {
            if ($(this).hasClass(setting.activeClass)) {

                /* 현재 인덱스 구성 */
                currentStep = index;
                elSection.removeClass(setting.activeClass);
                //console.log("currentStep : " + currentStep);
                nextStep = currentStep + setting.step;

                /* 전체 길이 순환 체크 */
                if (setting.circulation) {
                    if (nextStep > totalStep) {
                        nextStep = 0;
                    } else if (nextStep < 0) {
                        nextStep = totalStep;
                    }
                } else {
                    if (nextStep > totalStep) {
                        nextStep = totalStep;
                    } else if (nextStep < 0) {
                        nextStep = 0;
                    }
                }

                /* 차세대 인덱스 구성 */
                //console.log("nextStep : " + nextStep);
                elSection.eq(nextStep).addClass(setting.activeClass);
                //console.log(elSection);
                setting.afterCallback();
                return false;

            }
        })
    },
    moveFocus: function (opt) {
        var option = {
            changeClass: 'focus', //바뀔 클래스 네임
            filterClass: '.focus', //필터링하는 클래스네임
            ignoreClass: '._ignore', //필터링하는 클래스네임
            el: $('._moveFocus'), //기준 클래스 네임
            findScope: '>*', //find할 노드s
            direction: "next", //움직이는 값 prev || next || eq
            eqIndex: 0,
            circulation: true,
            beforeCallback: function () {
            },
            afterCallback: function () {
            }
        };

        var setting = $.extend(option, opt);
        var welFocusWrap = setting.el;
        var $el = welFocusWrap.find(setting.findScope).not(setting.ignoreClass);
        var $elFocus = $el.filter(setting.filterClass);
        // before

        setting.beforeCallback();
        if (setting.direction === "prev") {
            if ($elFocus.prev().length) {
                if ($elFocus.prev().hasClass('_ignore')) {
                    $elFocus.removeClass(setting.changeClass).prev().prev().addClass(setting.changeClass);
                } else {
                    $elFocus.removeClass(setting.changeClass).prev().addClass(setting.changeClass);
                }
            } else if (!$elFocus.prev().length) {
                if (setting.circulation) {
                    $elFocus.removeClass(setting.changeClass).end().siblings().last().addClass(setting.changeClass);
                }
            }
        } else if (setting.direction === "next") {
            if ($elFocus.next().length) {
                if ($elFocus.next().hasClass('_ignore')) {
                    $elFocus.removeClass(setting.changeClass).next().next().addClass(setting.changeClass);
                } else {
                    $elFocus.removeClass(setting.changeClass).next().addClass(setting.changeClass);
                }
            } else if (!$elFocus.next().length) {
                if (setting.circulation) {
                    $elFocus.removeClass(setting.changeClass).end().siblings().first().addClass(setting.changeClass);
                }
            }
        } else if (setting.direction === "eq") {
            welFocusWrap.find(setting.findScope).eq(setting.eqIndex).addClass(setting.changeClass).siblings().removeClass(setting.changeClass);
        }
        setting.afterCallback();
    },

    moveFocusSelector: function (opt) {
        var option = {
            changeClass: 'focus', //바뀔 클래스 네임
            filterClass: '.focus', //필터링하는 클래스네임
            ignoreClass: '._ignore', //필터링하는 클래스네임
            el: $('._moveFocus'), //기준 클래스 네임
            findScope: '>*', //find할 노드s
            direction: "next", //움직이는 값 prev || next || eq
            eqIndex: 0,
            circulation: true,
            beforeCallback: function () {
            },
            afterCallback: function () {
            }
        };

        var setting = $.extend(option, opt);
        var welFocusWrap = setting.el;
        var $el = welFocusWrap.find(setting.findScope).not(setting.ignoreClass);
        var $elFocus = $el.filter(setting.filterClass);
        var nSize = $el.length;
        var nIndex;
        // before

        setting.beforeCallback($el);
        if (setting.direction === "prev") {
            $el.each(function (index) {
                if ($(this).hasClass('focus')){
                    if (setting.circulation) {
                        if(index > 0) {
                            $el.removeClass('focus').eq(index-1).addClass('focus');
                            nIndex = index -1 ;
                        } else {
                            $el.removeClass('focus').last().addClass('focus');
                            nIndex = nSize-1;
                        }
                    } else {
                        if(index > 0) {
                            $el.removeClass('focus').eq(index-1).addClass('focus');
                            nIndex = index -1 ;
                        }
                    }

                    return false;
                }
            });
        } else if (setting.direction === "next") {
            $el.each(function (index) {
                if ($(this).hasClass('focus')){
                    if (setting.circulation) {
                        if(index < nSize-1) {
                            $el.removeClass('focus').eq(index+1).addClass('focus');
                            nIndex = index + 1;
                        } else {
                            $el.removeClass('focus').first().addClass('focus');
                            nIndex = 0;
                        }
                    }else {
                        if(index < nSize-1) {
                            $el.removeClass('focus').eq(index+1).addClass('focus');
                            nIndex = index + 1;
                        }
                    }
                    return false;
                }
            });
        }
        console.log(nIndex);
        setting.afterCallback($el , nIndex);
    },

    moveSlideMenu: function (opt) {
        var option = {
            wrapper: '._moveSlideMenu',
            sliderMenu: '._moveFocus',
            margin: 110,
            nOffSet: 90,
            sidemenu: false,
            direction: 'next',
            beforeCallback: function () {
            },
            afterCallback: function () {
            }

        };
        var setting = $.extend(option, opt);
        var $wrapper = $(setting.wrapper);
        var $sliderMenu = $wrapper.find(setting.sliderMenu);
        var $sliderMenuWidth = $sliderMenu.outerWidth(true);
        var $sliderMenuSize = $sliderMenu.find('>').length;
        var $vodListWidth = 1280 - (setting.margin * 2);
        setting.beforeCallback();
        App.fn.globalUtil.moveFocus({
            el: $sliderMenu,
            findScope: '>li',
            direction: setting.direction,
            circulation: true,
            afterCallback: function () {
                var nFocusIdx = $sliderMenu.find('.focus').index();
                var nMoveSize = ($sliderMenuWidth - $vodListWidth + setting.nOffSet) / $sliderMenuSize;
                var move;

                if (setting.sidemenu) {
                    move = ((nMoveSize * nFocusIdx) + $sliderMenuWidth) * -1 + setting.nOffSet
                } else {
                    move = ((nMoveSize * nFocusIdx)) * -1 + setting.nOffSet
                }
                // console.log(move);
                $wrapper.css('transform', 'translateX(' + move + 'px)');

                setting.afterCallback();
            }
        })
    },
    setSlideInit: function (opt) {
        var option = {
            wrapper: '._moveSlideMenu',
            sliderMenu: '._moveFocus',
            margin: 110,
            nOffSet: 90,
            sidemenu: false
        };
        var setting = $.extend(option, opt);
        var $wrapper = $(setting.wrapper);
        var $sliderMenu = $wrapper.find(setting.sliderMenu);
        var $sliderMenuWidth = $sliderMenu.outerWidth(true);
        var $sliderMenuSize = $sliderMenu.find('>').length;
        var $vodListWidth = 1280 - (setting.margin * 2);
        var nFocusIdx = $sliderMenu.find('.focus').index();
        var nMoveSize = ($sliderMenuWidth - $vodListWidth + setting.nOffSet) / $sliderMenuSize;
        var move;
        if (setting.sidemenu) {
            move = ((nMoveSize * nFocusIdx) + $sliderMenuWidth) * -1 + setting.nOffSet
        } else {
            move = ((nMoveSize * nFocusIdx)) * -1 + setting.nOffSet
        }
        $wrapper.css('transform', 'translateX(' + move + 'px)');

    },
    setSlideWidth: function (opt) {
        var option = {
            target: '._moveSlideMenu',
            menuList: '._moveFocus li',
            sideMenu: false,
            beforeCallback: function () {
            },
            afterCallback: function () {
            }
        };
        var setting = $.extend(option, opt);
        var nListWidth = 0;
        $(setting.target).find(setting.menuList).each(function () {
            nListWidth = nListWidth + $(this).outerWidth(true);
        });
        console.warn(nListWidth);
        
        // 퍼블리싱에서 margin : 0 10px 추가로 인한 수치증가
        if (setting.sideMenu) {
            $(setting.target).width(nListWidth * 3 + 100);
        } else {
            $(setting.target).width(nListWidth + 20);
        }
    },
    /**
     *  패스워드 입력 함수
     *  작성자 : 김성규
     *  number : 패스워드 숫자 입력 값
     *  html 태그 구조 :
     *  <div class="_section active _field" data-password="">
     *      $('._section._field').data('password');
     *      1. _section 동일 위치에 _field 클래스
     *      2. _field 는 패스워드 키값을 가져오기 위해
     *         data 어트리뷰트를 기본으로 가진다. (default : data-password="")
     *      3. _field 하위에 focus 되는 엘리먼트는 4개를 가진다. (각각 입력됨)
     *      4. 마지막 focus일 때 moveActive를 위해 callback 함수를 가진다.
     **/
    insertPassword: function (number, opt) {
        var self = this;
        var option = {
            field: $('.active._field'),
            beforeCallback: function () {
            },
            afterCallback: function () {
            },
            fieldLastCallback: function () {
                
            }
        };
        var setting = $.extend(option, opt);
        //section에 동일 위치에 _field 구성
        setting.beforeCallback();
        var $focus = setting.field.find('.focus');
        if ($focus.index() === 0) {
            setting.field.data('password', number.toString());
            // console.log('password : ' + option.field.data('password'));
            $focus.removeClass('focus').addClass('enter').next('p').addClass('focus');
        } else if ($focus.index() < 3) {
            setting.field.data('password', setting.field.data('password') + number.toString());
            // console.log('password : ' + option.field.data('password'));
            $focus.removeClass('focus').addClass('enter').next('p').addClass('focus');
        } else {
            setting.field.data('password', setting.field.data('password') + number.toString());
            // console.log('password : ' + option.field.data('password'));
            $focus.removeClass('focus').addClass('enter focus').next('p').addClass('focus');
            self.checkPassword();
            setting.fieldLastCallback();
        }
        setting.afterCallback();
    },
    /**
     * 패스워드 삭제 함수
     * 작성자 : 김성규
     * 해당 페이지 left key 입력시 사용.
     **/
    deletePassword: function (opt) {
        var option = {
            el: $('._section.active._field')
        };
        var setting = $.extend(option, opt);
        var $field = setting.el;
        var $focus = $field.find('.focus');
        $focus.each(function () {
            if ($focus.index() > 0) {
                $field.data('password', $field.data('password').substring(0, $focus.index()));
                // console.log($field.data('password'));
                $focus.removeClass('enter focus').prev().attr('class', ' focus');
            } else if ($focus.index() === 0) {
                $field.data('password', '');
                // console.log($field.data('password'));
                $focus.removeClass('enter').addClass('focus');
            } else if ($focus.index() === 3) {
                $focus.removeClass('enter').prev().attr('class', 'enter focus');
            }
        });
    },
    checkPassword: function () {
        var self = this;
        var arr = [];
        var $field1 = $('._field.first');
        arr.push($field1.data('password'));
        var $field2 = $('._field').eq(1);
        arr.push($field2.data('password'));
        var $field3 = $('._field.last');
        arr.push($field3.data('password'));

        if (arr[1] === arr[2] && arr[1] === "") {
            // alert('true 빈값');
            return false;
        } else if (arr[1] !== arr[2]) {
            // 새 비밀번호, 비밀번호 확인이 다를 경우
            return 'newFalse';
        } else if (arr[1] === arr[2]) {
            // 새 비밀번호, 비밀번호 확인이 같을 경우
            return 'newSuccess';
        } else {
            // 현재 비밀번호가 잘못된 경우
            return 'currentFail';
        }
    },
    resetPassword: function () {
        var self = this;
        var $field = $('._field');
        var $field1 = $field.eq(0);
        var $field2 = $field.eq(1);
        var $field3 = $field.eq(2);
        console.log(self.checkPassword());

        if ($field.length === 3) {
            // 입력필드 3개일때
            if (self.checkPassword() === 'newFalse') {
                //새 비밀번호 틀림
                $field2.find('.enter').removeClass('enter');
                $field3.find('.enter').removeClass('enter');
                $field2.addClass('active').siblings().removeClass('active');
                $field2.find('.auth p').eq(0).addClass('focus');
                $field3.find('.auth p').eq(0).addClass('focus');
            } else if (self.checkPassword() === 'currentFail') {
                //현재 비밀번호 틀림
                $field.find('.enter').removeClass('enter');
                $field1.addClass('active').siblings().removeClass('active');
                $field1.find('.auth p').eq(0).addClass('focus');
            }
        } else {
            // 입력필드 1개일때
            $field.addClass('active').siblings().removeClass('active');
            $field.find('.auth p').eq(0).addClass('focus');
        }
    },
    containerClassReset: function () {
        //컨테이너에 추가된 클래스 초기화
        $('#container').attr('class', '');
    },
    containerClear: function () {
        //컨테이너에 추가된 클래스 초기화
        $('#container').empty();
        $('#container_popup').empty();
    },
    /**
     * 토스트팝업메세지
     */
    toastPopup : function(html){
        $('.dim_bottom').remove();
        var aPopup = [];
        aPopup.push("<div class=\"popup_dim dim_bottom\">");
        aPopup.push("<div class=\"popup popup_bottom_type1\">");
        aPopup.push("<div class=\"popup_body\">");
        aPopup.push("<p class=\"title\">" + html + "</p>");
        aPopup.push("</div>");
        aPopup.push("</div>");
        aPopup.push("</div>");
        $('body').append(aPopup.join(''));

        var timer;
        clearTimeout(timer);
        timer = setTimeout(function(){
            $('.dim_bottom').remove();
        },2000)
    }

});

directory.wrapContainer = Backbone.View.extend({
    render: function () {
        this.$el.html(templete["wrap/wrapContainer"]());
        return this; 
    }

});