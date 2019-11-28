directory.globalEventView = Backbone.View.extend({
    el: "body",
    bLiogin: false,
    localeData: {
        "sidoCd": "",
        "siguCd": "",
        "schType": ""
    },
    oSearchAutoText: {
        "serKey": "",
        "size": "0",
        "offset": "0"
    },
    searchText: {
        "serKey": "",
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },
    oRegisterInfo: {
        "loginId": App.vars.loginId,
        "schCd": "",
        "lv": "",
        "cls": ""
    },
    oDeleteInfo: {
        "loginId": App.vars.loginId,
        "userSchId": ""
    },
    sSelectedSchoolTitle: null,
    initialize: function () {
        this._assignElements();
        this._attachEventHandlers();

    },
    _assignElements: function () {
        this.welDoc = $(document.body);
    },
    _attachEventHandlers: function () {
        var self = this;
        this.welDoc.on('click', 'a[href="#"]', $.proxy(this.prevent, this));
        // 학교 리스트보기 페이지로 이동
        this.welDoc.on('click', '._goToLocaleList', $.proxy(this.goToLocaleList, this));
        // 이력 및 알림 페이지로 이동
        this.welDoc.on('click', '._goToHistoryAlarm', $.proxy(this.goToHistoryAlarm, this));
        // 정보 상세 페이지로 이동
        this.welDoc.on('click', '._goToInformationDetail', $.proxy(this.goToInformationDetail, this));
        // 공기리포트 상세 페이지로 이동
        //this.welDoc.on('click', '._goToAirReportDetail', $.proxy(this.goToAirReportDetail, this));
        // 내 학교 페이지로 이동
        this.welDoc.on('click', '._mySchoolList', $.proxy(this.mySchoolList, this));
        // 메인 맵 페이지로 이동
        this.welDoc.on('click', '._moveMainPage', $.proxy(this.moveMainPage, this));
        // 이전 페이지로 이동
        this.welDoc.on('click', '._btnPrevPage', $.proxy(this.movePrevPage, this));
        this.welDoc.on('click', '._fnMoveMyLocation', $.proxy(this.moveMyLocation, this));
        this.welDoc.on('click', '._fnRefresh', $.proxy(this.initMap, this));
        this.welDoc.on('click', '._fnAccordionMenu > li > a', $.proxy(this.accordionMenu, this));
        this.welDoc.on('click', '._tabs li.visited > a', $.proxy(this.tabMenu, this));
        this.welDoc.on('click', '._tabMenu2' , $.proxy(this.tabMenu2, this));
        this.welDoc.on('click', '._subTabs li > a', $.proxy(this.subTabMenu, this));
        this.welDoc.on('click', '._localeSelect li > a', $.proxy(this.localeSelect, this));
        this.welDoc.on('focus', '.search_box .text_box', $.proxy(this.inputDeleteButtonShow, this));
        this.welDoc.on('blur', '.search_box .text_box', $.proxy(this.inputDeleteButtonHide, this));
        this.welDoc.on('keyup', '.search_box .text_box', $.proxy(this.autoCompleteSearch, this));
        this.welDoc.on('click', '.search_box .btn_search', $.proxy(this.addInputRecentList, this));
        this.welDoc.on('click', '.btn_all_delete', $.proxy(this.openAllSchoolDeleteDialog, this));
        this.welDoc.on('click', '.btn_input_delete', $.proxy(this.inputValueDelete, this));
        this.welDoc.on('click', '._cardSlideLink', $.proxy(this.goToSchoolDetail, this));
        this.welDoc.on('click', '.area_search_wrap .btn_delete', $.proxy(this.deleteRecentSearchList, this));
        this.welDoc.on('click', '._searchList li .btn_link', $.proxy(this.clickRecentList, this));
        this.welDoc.on('click', '._schoolResultList li a', $.proxy(this.clickResultList, this));
        this.welDoc.on('click', '._searchResultList li a', $.proxy(this.clickSchoolResultList, this));
        this.welDoc.on('click', '._clickOutSensor', $.proxy(this.clickOutSensor, this));
        this.welDoc.on('click', '._registerMySchool', $.proxy(this.registerMySchool, this));
        // 메뉴 호출
        this.welDoc.on('click', '._openAllMenu', $.proxy(this.openAllMenu, this));
        this.welDoc.on('click', '._moveToSearchSchool', $.proxy(this.moveToSearchSchool, this));
        // this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToAirMultiSensor, this));
        // this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToAirPurifier, this));
        this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToDetail, this));

        // 시간 설정 팝업
        this.welDoc.on('click', '._openPopupSettingTImer', $.proxy(this.openPopupSettingTImer, this));
        this.welDoc.on('click', '._closePopupSettingTImer', $.proxy(this.closePopupSettingTImer, this));
        this.welDoc.on('click', '._confirmPopupSettingTImer', $.proxy(this.confirmPopupSettingTImer, this));
        this.welDoc.on('click', '._releasePopupSettingTImer', $.proxy(this.releasePopupSettingTImer, this));
        // 시간 설정 팝업 (몽블랑D)
        this.welDoc.on('click', '._settingAfterHours li a', $.proxy(this.settingAfterHours, this));

        // 학교 전체 삭제 팝업
        this.welDoc.on('click', '.popup_delete ._btnCancel', $.proxy(this.allSchoolDeleteCancel, this));
        this.welDoc.on('click', '.popup_delete ._btnConfirm', $.proxy(this.allSchoolDeleteConfirm, this));

        // 공기리포트 이동
        this.welDoc.on('click', '.btn_report', $.proxy(this.moveToAirReport, this));

        this.welDoc.on('click', '._tab_dust a', $.proxy(this.tabDust, this));

        this.welDoc.on('click', '._weekly', $.proxy(this.weekly, this));

        this.welDoc.on('click', '._daily', $.proxy(this.daily, this));


        //device 공통 이벤트

        this.welDoc.on('click', '._btnOkError', $.proxy(this.errorPopupClose, this));

        //connStatYn N 상태일 때
        this.welDoc.on('click', '.wrap_contents .box_card ._btnConnectErrorClose', $.proxy(this.connectErrorPopupClose, this));


        setTimeout(function () {
            $('body').find('>div').on('swipedown', function (e, touch) {
                self.refreshPullDown(e, touch)
            });
        }, 500)


    },
    moveToAirReport: function () {
        window.location.hash ="#airReport";
    },
    moveToSearchSchool: function () {
        window.location.hash = "#searchSchool";
    },
    moveToAirMultiSensor: function () {
        window.location.hash = "#airMultiSensor";
    },
    moveToAirPurifier: function () {
        window.location.hash = "#airPurifier";
    },
    moveToDetail: function (event) {
        var target = $(event.currentTarget);

        App.vars.oSchoolDetail = {
            rtnDvcIdList: [],
            oDeviceInfo: [],
            oDeviceInfoRoot: [],
            dvcIdList: [],
            intariorSensorChartData: [],
            nIdx: target.parents('li').index()
        };

        target.parents('#deviceList').find('>li').each(function () {
            var rtnDvcIdListData = {"rtnDvcId": $(this).data('dvcid')};
            var dvcIdListData = {"dvcId": $(this).data('dvcid')};

            App.vars.oSchoolDetail.rtnDvcIdList.push(rtnDvcIdListData);
            App.vars.oSchoolDetail.dvcIdList.push(dvcIdListData);
        });

        //로그인 schcd
        App.vars.isSchoolCode = false;

        // 학교코드와 기기코드 비교
        if (App.vars.schCd !== undefined) {
            if (target.data('schcd') === App.vars.schCd) {
                App.vars.isSchoolCode = true;
            }
        }

        if (App.vars.loginId) {
            window.location.hash = "#schoolDetail";
        } else {
            /*if(isMobile.Android()){
                window.AirManager.callLoginView();
            }else{
                window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
            }*/

            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                // ios
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            } else {
                // pc
            }
            App.vars.afterLogin = "schoolDetail"
        }
    },

    openAllMenu: function () {

        /*if(isMobile.Android()){
            window.AirManager.callSideMenu();
        }else{
            window.webkit.messageHandlers.AirManager.postMessage({command:"callSideMenu"});
        }*/

        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.callSideMenu();
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            window.webkit.messageHandlers.AirManager.postMessage({command: "callSideMenu"});
        } else {
            // pc
        }
    },
    movePrevPage: function () {
        // if (App.vars.multipleWebapp) {
        //     if (window.history.length <= 3) {
        //         if (typeof window.AirManager !== 'undefined') {
        //             // android
        //             window.AirManager.callAppExit();
        //         } else if (typeof window.webkit !== 'undefined') {
        //             // ios
        //             window.webkit.messageHandlers.AirManager.postMessage({command:"callAppExit"});
        //         } else {
        //             // pc
        //             alert('앱 종료 혹은 웹뷰 종료');
        //         }
        //     } else {
        //         window.history.back();
        //     }
        // } else {
        // $('h1').text(window.history.length);
        // setTimeout(function () {


        if (App.router.history.length <= 2 ||
            (window.location.hash == "#home" && App.mainMap.zoom < 17) ||
            window.location.hash == "mySchool" ||
            window.location.hash == "") {

            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callAppExit();
            } else if (typeof window.webkit !== 'undefined') {
                // ios
                window.webkit.messageHandlers.AirManager.postMessage({command: "callAppExit"});
            } else {
                // pc
                alert('앱 종료 혹은 웹뷰 종료');
            }
        } else if (window.location.hash == "#home" && App.mainMap.zoom >= 17) {
            App.view.globalEventView.initMap();
        } else {
            App.router.history.pop();
            return App.router.navigate(App.router.history.pop(), true);
        }


        // if (window.history.length <= 2) {
        //     if (typeof window.AirManager !== 'undefined') {
        //         // android
        //         window.AirManager.callAppExit();
        //     } else if (typeof window.webkit !== 'undefined') {
        //         // ios
        //         window.webkit.messageHandlers.AirManager.postMessage({command:"callAppExit"});
        //     } else {
        //         // pc
        //         alert('앱 종료 혹은 웹뷰 종료');
        //     }
        // } else {
        //     window.history.back();
        // }
        // },2000)

        // }

    },
    registerMySchool: function (e) {
        var self = this;
        var elRegisterCheckbox = $(e.currentTarget);
        if (elRegisterCheckbox.prop('checked')) {
            console.log("elRegisterCheckbox=======> ", elRegisterCheckbox);
            self.oRegisterInfo.schCd = elRegisterCheckbox.data('school-id');
            self.oRegisterInfo.lv = elRegisterCheckbox.data('lv');
            self.oRegisterInfo.cls = elRegisterCheckbox.data('cls');
            self.oRegisterInfo.loginId = App.vars.loginId;
            console.log(self.oRegisterInfo);
            console.log(elRegisterCheckbox.prop('checked'));
            App.view.mySchoolDetail.registerMySchool(self.oRegisterInfo);

        } else {
            self.oDeleteInfo.userSchId = elRegisterCheckbox.attr('id');
            self.oDeleteInfo.loginId = App.vars.loginId;
            elRegisterCheckbox.attr('id', '');
            App.view.mySchoolDetail.deleteMySchool(self.oDeleteInfo);

        }

    },
    addInputRecentList: function () {
        var self = this;
        var sInputValue = $('.search_box .text_box').val();
        if(sInputValue.length > 1){
            self.searchText.serKey = sInputValue;
            self.searchText.loginId = App.vars.loginId;
            App.view.searchSchool.addRecentSearchList(self.searchText);
            App.view.searchSchool.searchResultTempleteBinding(self.searchText);
        } else {
            alert('검색어를 2자 이상 입력하세요')
        }
        
    },
    openAllSchoolDeleteDialog: function () {
        App.util.openAllSchoolDeletePopup();
    },
    allSchoolDeleteCancel: function () {
        App.util.closeAllSchoolDeletePopup();
        console.log(1)
    },
    allSchoolDeleteConfirm: function () {
        var nTargetListId = "all";
        App.view.searchSchool.deleteRecentSearchList(nTargetListId);
        App.util.closeAllSchoolDeletePopup();
        console.log(1)
    },
    autoCompleteSearch: function () {
        var self = this;
        var sInputValue = $('.search_box .text_box').val();
        if (sInputValue !== "" && sInputValue.length >= 2) {
            self.oSearchAutoText.serKey = sInputValue;
            App.view.searchSchool.autoCompleteSearch(self.oSearchAutoText);
        } else if (sInputValue.length > 0) {
            setTimeout(function(){
                self.inputDeleteButtonShow();
            },100);
        } else if (sInputValue.length == 0) {
            this.inputDeleteButtonHide();
            if(App.vars.loginId !== ""){
                console.log('a')
                App.view.searchSchool.searchRecentTempleteBinding();
            }
        }
    },
    inputDeleteButtonShow: function () {
        var elBtnDelete = $('.btn_input_delete');
        var sInputValue = $('.search_box .text_box').val();
        if(sInputValue.length > 0){
            elBtnDelete.show();
        }
    },
    inputDeleteButtonHide: function () {
        var elBtnDelete = $('.btn_input_delete');
        setTimeout(function(){
            elBtnDelete.hide();
        },100)

    },
    inputValueDelete: function () {
        var self = this;
        var elSearchInput = $('.text_box');
        elSearchInput.val('').focus();
        App.view.searchSchool.searchRecentTempleteBinding();
    },
    clickRecentList: function (evt) {
        var self = this;
        var targetText = $(evt.currentTarget).text();
        self.searchText.serKey = targetText;
        self.searchText.loginId = App.vars.loginId;
        App.view.searchSchool.searchResultTempleteBinding(self.searchText);
    },
    clickOutSensor: function (evt) {
        var target = $(evt.currentTarget);
        var nSchoolCode = target.data('school-code');
        var sSchoolTitle = target.data('school-name');
        // 학교이름 저장
        App.vars.oSchoolCode = nSchoolCode;
        App.vars.sSelectedSchoolTitle = sSchoolTitle;

        window.location.hash = "#mySchoolDetail";
    },
    clickResultList: function (evt) {
        var target = $(evt.currentTarget);
        var nSchoolCode = target.data('school-code');
        // 학교이름 저장
        App.vars.oSchoolCode = nSchoolCode;
        App.vars.sSelectedSchoolTitle = target.find('p').text();

        if (App.vars.loginId) {
            window.location.hash = "#mySchoolDetail";
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            /*if(isMobile.Android()){
                window.AirManager.callLoginView();
            }else{
                window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
            }*/
            App.vars.afterLogin = "mySchoolDetail";
        }

    },
    clickSchoolResultList: function (evt) {
        var target = $(evt.currentTarget);
        var nSchoolCode = target.data('school-code');
        var sSchoolTitle = target.find('.school_name').text();
        // 학교이름 저장
        App.vars.oSchoolCode = nSchoolCode;
        App.vars.sSelectedSchoolTitle = sSchoolTitle;
        if (target.hasClass('_detailLink')) {
            if (App.vars.loginId) {
                window.location.hash = "#mySchoolDetail";
            } else {
                if (typeof window.AirManager !== 'undefined') {
                    // android
                    window.AirManager.callLoginView();
                } else if (typeof window.webkit !== 'undefined') {
                    window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
                }
                /*if(isMobile.Android()){
                    window.AirManager.callLoginView();
                }else{
                    window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
                }*/
                App.vars.afterLogin = "mySchoolDetail";
            }
        }
    },
    tabMenu: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var elTabMenu = $('.tab-menu li');
        var elFocusMenu = $('.tab-menu li.focus');
        var ntabMenuIndex = target.parent().index();
        target.parent().addClass('focus').removeClass('visited').siblings().removeClass('focus');
        if (ntabMenuIndex == "0") {
            self.localeData = {
                "sidoCd": "",
                "siguCd": "",
                "schType": ""
            };
            elTabMenu.removeClass('visited');
            elTabMenu.eq(1).find('a').text('시/군/구');
            App.view.localeList.selectLocale[1].selectItem = null;
        } else {
            self.localeData.siguCd = "";
            self.localeData.schType = "";
        }

        App.view.localeList.siguTempleteBinding(self.localeData);
    },
    tabMenu2: function (event) {
        var self = this;

        App.view.localeList.siguTempleteBinding(self.localeData);
    },
    subTabMenu: function (event) {
        var target = $(event.currentTarget);
        var ntabMenuIndex = target.parent().index();
        var elTabContents = $('.tab-contents > div');

        if(ntabMenuIndex == 1){
            $('._subTabs p').hide();
        }else if(ntabMenuIndex == 0){
            $('._subTabs p').show();
        }

        target.parent().addClass('focus').siblings().removeClass('focus');
        elTabContents.eq(ntabMenuIndex).addClass('active').siblings().removeClass('active');
    },
    localeSelect: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var elFocusTab = $('.tab-menu ul li.focus');
        var elFocusTabLink = $('.tab-menu ul li.focus a');
        var nFocusTabIndex = $('.tab-menu ul li.focus').index();
        var nSeletedItemIndex = target.parent().index();
        var sLocaleText = target.text();
        var code = target.data('locale-code');
        // 탭 텍스트 변경
        elFocusTabLink.text(sLocaleText);

        // 지역 선택
        target.parent().addClass('selected').siblings().removeClass('selected');

        // 시도 및 시군구 코드값 전달
        if (nFocusTabIndex == 0) {
            self.localeData = {
                "sidoCd": code,
                "siguCd": "",
                "schType": ""
            };
            elFocusTab.addClass('visited').removeClass('focus').next().addClass('focus');
        }
        if (nFocusTabIndex == 1) {
            self.localeData.siguCd = code;
            self.localeData.schType = "1";
            elFocusTab.addClass('visited').removeClass('focus').next().addClass('focus');
        }
        if (nFocusTabIndex == 2) {
            self.localeData.schType = code;
        }

        App.view.localeList.siguTempleteBinding(self.localeData);
        App.view.localeList.selectLocale[nFocusTabIndex] = {"selectItem": nSeletedItemIndex}

    },
    accordionMenu: function (event) {
        var target = $(event.currentTarget);
        target.parent().toggleClass('current')
    },
    initMap: function (evt) {
        /*App.view.homeMain.mainMap.destroy();*/
        App.view.homeMain.refreshMap(evt);
    },
    moveMyLocation: function () {
        App.view.homeMain.moveMyLocation();
        /*if (App.vars.loginId) {
            App.view.homeMain.moveMyLocation();
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }

        }*/

    },
    goToLocaleList: function () {
        if (window.location.hash == "#home" || window.location.hash == "#mySchool") {
            window.location.hash = "#localeList";
        } else {
            window.location.hash = "#home";
        }
    },
    mySchoolList: function () {

        if (App.vars.loginId) {
            window.location.hash = "#mySchool";
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            App.vars.afterLogin = "mySchool"
        }

    },
    moveMainPage: function () {
        window.location.hash = "#home";
    },
    goToHistoryAlarm: function (e) {
        var target = $(e.currentTarget);
        var rtnDvcId = target.data("rtndvcid");
        if (target.hasClass('icon_check')) {
            App.vars.rtnDvcId = '';
        }else{
            App.vars.rtnDvcId = rtnDvcId;
        }
        //App.vars.prevLocation = window.location.hash;
        window.location.hash = "#historyAlarm";
    },
    goToInformationDetail: function () {
        //App.vars.prevLocation = window.location.hash;
        window.location.hash = "#informationDetail";
    },
    /*goToAirReportDetail: function () {
        App.vars.prevLocation = window.location.hash;
        window.location.hash = "#airReportDetail";
    },*/
    goToSchoolDetail: function (e) {
        var target = $(e.currentTarget);
        var sParamSchoolCode = target.data('school-code');
        var sSchoolTitle = target.find('.name').text();
        /*App.router.navigate("mySchoolDetail", sParamSchoolCode);*/

        App.vars.oSchoolCode = sParamSchoolCode;
        App.vars.sSelectedSchoolTitle = sSchoolTitle;


        if (App.vars.loginId) {

            window.location.hash = "#mySchoolDetail";
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            /*            if(isMobile.Android()){
                            window.AirManager.callLoginView();
                        }else{
                            window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
                        }*/
            App.vars.afterLogin = "mySchoolDetail";
        }
    },
    tabDust: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var reqType = target.data("reqtype");
        target.parent().addClass('focus').siblings().removeClass('focus');

        var focusIndex = $('.tab_graph .focus').index();

        if(focusIndex == "0"){
            App.view.airReport.dailyReportBind(reqType);
        }else if (focusIndex == "1"){
            App.view.airReport.weeklyReportBind(reqType);
        }


    },
    weekly: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var reqType = target.data("reqtype");
        target.addClass('focus').siblings().removeClass('focus');

        $('.tab_dust .focus').removeClass('focus');
        $('.tab_dust li').eq(0).addClass('focus');


        App.view.airReport.weeklyReportBind("000");


    },

    daily: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var reqType = target.data("reqtype");
        target.addClass('focus').siblings().removeClass('focus');

        $('.tab_dust .focus').removeClass('focus');
        $('.tab_dust li').eq(0).addClass('focus');

        App.view.airReport.dailyReportBind("000");


    },
    deleteRecentSearchList: function (e) {
        var target = $(e.currentTarget);
        var nTargetListId = target.parent().data('school-id');
        App.view.searchSchool.deleteRecentSearchList(nTargetListId);
    },
    openPopupSettingTImer: function () {
        App.util.openSettingTurnOffPopup();
        window.location.hash = "#openPopupSettingTImer";

    },
    closePopupSettingTImer: function () {
        App.util.closeSettingTurnOffPopup();
        App.view.popupSettingTurnOffTimer.timeInit();
    },
    confirmPopupSettingTImer: function () {
        var nCurrentTime = moment();
        var oCurrentTime = moment().toObject();
        var nReservationTime = moment().add(App.view.popupSettingTurnOffTimer.nSettingTime.hours, "hours").add(App.view.popupSettingTurnOffTimer.nSettingTime.minutes, "minutes");
        var oReservationTime = moment().add(App.view.popupSettingTurnOffTimer.nSettingTime.hours, "hours").add(App.view.popupSettingTurnOffTimer.nSettingTime.minutes, "minutes").toObject();
        var nTransformTime = nReservationTime.format("hh:mm");
        var sReservationTimeDayAmPm = nReservationTime.calendar().slice(0, 5);
        var sReservationTimeAmPm = nReservationTime.calendar().slice(3, 5);
        var nHours = App.view.popupSettingTurnOffTimer.nSettingTime.hours;
        var nMins = App.view.popupSettingTurnOffTimer.nSettingTime.minutes;
        console.log(nHours, nMins)
        if (App.view.popupSettingTurnOffTimer.nSettingTime.hours == "00" && App.view.popupSettingTurnOffTimer.nSettingTime.minutes == "00") {
            alert("시간을 설정해 주세요")
        } else {
            if (oCurrentTime.date == oReservationTime.date) {
                $('.turn_off_timer .desc_date .day').text(sReservationTimeAmPm);
            } else {
                $('.turn_off_timer .desc_date .day').text(sReservationTimeDayAmPm);
            }
            $('.turn_off_timer .desc_date .time').text(nTransformTime);

            $('._turnoff').addClass('active');
            this.closePopupSettingTImer();
            App.view.popupSettingTurnOffTimer.sendTurnOffReservation(nHours + nMins);
        }

    },
    settingAfterHours: function (e) {
        var target = $(e.currentTarget);
        var nHours = target.data('hours');
        var oCurrentTime = moment().toObject();
        var nReservationTime = moment().add(nHours, "hours");
        var oReservationTime = moment().add(nHours, "hours").toObject();
        var nTransformTime = nReservationTime.format("hh:mm");
        var sReservationTimeDayAmPm = nReservationTime.calendar().slice(0, 5);
        var sReservationTimeAmPm = nReservationTime.calendar().slice(3, 5);
        console.log(nHours)
        $('._turnoff').addClass('active');
        if (oCurrentTime.date == oReservationTime.date) {
            $('.turn_off_timer .desc_date .day').text(sReservationTimeAmPm);
        } else {
            $('.turn_off_timer .desc_date .day').text(sReservationTimeDayAmPm);
        }
        $('.turn_off_timer .desc_date .time').text(nTransformTime)
        this.closePopupSettingTImer();
        App.view.popupSettingTurnOffTimer.sendTurnOffReservation(nHours + "00");
    },
    releasePopupSettingTImer: function () {
        $('._turnoff').removeClass('active');
    },
    errorPopupClose: function () {
        $('#networkErrorPopup').remove();
        App.router.history.pop();
        return App.router.navigate(App.router.history.pop(), true);

        /*if(window.location.hash === "#historyAlarm"){
            App.router.history.pop();
            return App.router.navigate(App.router.history.pop(), true);
        }else{

        }*/

    },
    connectErrorPopupClose: function (e) {
        var target = $(e.currentTarget);
        target.parent('.box_card').remove();
    },
    prevent: function (event) {
        event.preventDefault();
    },
    refreshPullDown: function (e, touch) {
        var self = this;
        if (
            window.location.hash === "#mySchool" ||
            window.location.hash === "#mySchoolDetail" ||
            window.location.hash === "#schoolDetail"
        ) {
            if ($('.wrap_contents').scrollTop() === 0) {
                var startPosY = touch.startEvnt.offset.y;
                var endPosY = touch.endEvnt.offset.y;
                if (Math.abs(startPosY - endPosY) > 60) {
                    // console.log(Math.abs(startPosY - endPosY));
                    App.vars.reload = true;
                    $('#reloader').html(templete["globalUtil/pageReload"]());
                    App.util.updateDistance();
                }
            }
        } else {
            return false;
        }
    }
});
