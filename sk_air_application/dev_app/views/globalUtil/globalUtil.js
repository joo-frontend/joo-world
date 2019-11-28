directory.globalUtil = Backbone.View.extend({
    initialize: function () {
        App.view.popupSettingTurnOffTimer = new directory.popupSettingTurnOffTimer();
        App.view.popupAllSchoolDelete = new directory.popupAllSchoolDelete();
        this.render();
    },
    pageLoadingShow: function () {
        $('body').append(templete["globalUtil/pageLoading"]());
    },
    pageLoadingHide: function () {
        $('.page_loading').remove();
    },
    getJsonFromUrl: function (hashBased) {
        var query;
        // App.util.toast(location.href.split("?")[1]);
        if (hashBased) {
            var pos = location.href.indexOf("?");
            if (pos == -1) return [];
            query = location.href.substr(pos + 1);
        } else {
            query = location.search.substr(1);
        }

        var result = {};
        query.split("&").forEach(function (part) {
            if (!part) return;
            part = part.split("+").join(" "); // replace every + with space, regexp-free version
            var eq = part.indexOf("=");
            var key = eq > -1 ? part.substr(0, eq) : part;
            var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
            var from = key.indexOf("[");
            if (from == -1) result[decodeURIComponent(key)] = val;
            else {
                var to = key.indexOf("]", from);
                var index = decodeURIComponent(key.substring(from + 1, to));
                key = decodeURIComponent(key.substring(0, from));
                if (!result[key]) result[key] = [];
                if (!index) result[key].push(val);
                else result[key][index] = val;
            }
        });
        return result;
    },
    getDeviceControl: function (dvcCd, data, turnOffMode) {
        var oData;
        switch (dvcCd) {
            //위닉스 타이탄
            case "위닉스 타이탄" :
                App.device.airPurifierWinixTaitan = new directory.airPurifierWinixTaitan;
                oData = App.device.airPurifierWinixTaitan.render(data);
                break;

            //위닉스 XQ
            case "DVC0000186" :
                App.device.airPurifierWinixXq = new directory.airPurifierWinixXq;
                oData = App.device.airPurifierWinixXq.render(data);
                break;

            //삼성전자
            case "DVC0000182" :
                App.device.airPurifierSamsungPurifier = new directory.airPurifierSamsungPurifier;
                oData = App.device.airPurifierSamsungPurifier.render(data);

                break;

            //그린망고
            case "DVC0001350" :
                App.device.airMultiSensorGreenMango = new directory.airMultiSensorGreenMango;
                oData = App.device.airMultiSensorGreenMango.render(data);
                break;

            //현대
            case "DVC0000204" :
                App.device.airMultiSensorHyundai = new directory.airMultiSensorHyundai;
                oData = App.device.airMultiSensorHyundai.render(data);
                break;

            //LG전자 몽블랑 D+
            case "DVC0000241" :
                App.device.airPurifierLgDplus = new directory.airPurifierLgDplus;
                oData = App.device.airPurifierLgDplus.render(data);
                break;

            //LG전자 G+
            case "LG전자 G+" :
                App.device.airPurifierLgGplus = new directory.airPurifierLgGplus;
                oData = App.device.airPurifierLgGplus.render(data);
                break;

            //LG전자 몽블랑 S
            case "LG전자 몽블랑 S" :
                App.device.airPurifierLgS = new directory.airPurifierLgS;
                oData = App.device.airPurifierLgS.render(data);
                break;

            //청호나이스
            case "청호나이스" :
                App.device.airPurifierNicePurifier = new directory.airPurifierNicePurifier;
                oData = App.device.airPurifierNicePurifier.render(data);
                break;

            //대유위니아 가습청정기
            case "대유위니아 가습청정기" :
                App.device.airPurifierWiniaHumidfy = new directory.airPurifierWiniaHumidfy;
                oData = App.device.airPurifierWiniaHumidfy.render(data);
                break;

            //대유위니아 공기청정기
            case "대유위니아 공기청정기" :
                App.device.airPurifierWiniaPurifier = new directory.airPurifierWiniaPurifier;
                oData = App.device.airPurifierWiniaPurifier.render(data);
                break;

            //위닉스 나이키 (위닉스 타워)
            case "DVC0000173" :
                App.device.airPurifierWinixNike = new directory.airPurifierWinixNike;
                oData = App.device.airPurifierWinixNike.render(data);
                break;

            //위닉스 제로플러스
            case "DVC0000203" :
                App.device.airPurifierWinixZeroplus = new directory.airPurifierWinixZeroplus;
                oData = App.device.airPurifierWinixZeroplus.render(data, turnOffMode);
                break;

            //어웨어
            case "DVC0000185" :
                App.device.airMultiSensorAwair = new directory.airMultiSensorAwair;
                oData = App.device.airMultiSensorAwair.render(data);
                break;


        }
        return oData;
    },
    showLoading: function () {


        if (typeof window.AirManager !== 'undefined') {
            // android

            window.AirManager.callLoadingBar(true);


        } else if (typeof window.webkit !== 'undefined') {
            // ios
            message = {
                command: "callLoadingBar",
                show: true
            };

            window.webkit.messageHandlers.AirManager.postMessage(message);

        } else {
            // pc
            // alert('loading show')
        }
        /*if(isMobile.Android()){
            window.AirManager.callLoadingBar(true);
        }else{
            message = {
                command: "callLoadingBar",
                show: true
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        }*/

    },
    hideLoading: function () {

        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.callLoadingBar(false);
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            message = {
                command: "callLoadingBar",
                show: false
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);

        } else {
            // pc
            // alert('loading hide');
        }
        /*if(isMobile.Android()){
            window.AirManager.callLoadingBar(false);
        }else{
            // ios
            message = {
                command: "callLoadingBar",
                show: false
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        }*/
    },
    toast: function (msg) {
        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.callToastMsg(msg);
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            var message = {
                command: "callToastMsg",
                msg: msg
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        } else {
            // pc
            alert(msg)
        }
        /*if(isMobile.Android()){
            window.AirManager.callToastMsg(msg);
        }else{
            // ios
            var message = {
                command: "callToastMsg",
                msg: msg
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        }*/
    },
    openSettingTurnOffPopup: function () {
        $('.popup_dim').remove();
        App.view.popupSettingTurnOffTimer.render();

    },
    closeSettingTurnOffPopup: function () {
        App.view.popupSettingTurnOffTimer.remove();
    },
    openAllSchoolDeletePopup: function () {
        $('.popup_dim').remove();
        App.view.popupAllSchoolDelete.render();
    },
    closeAllSchoolDeletePopup: function () {
        App.view.popupAllSchoolDelete.remove();
    },
    pageRefresh: function () {
        var sHash = window.location.hash;
        switch (sHash) {
            case "#mySchool":
                break;
            case "#mySchoolDetail":
                break;
            case "#schoolDetail":
                break;
        }
    },
    openNetworkErrorPopup: function () {
        $('body').append(templete["popup/popupNetworkError"]());
    },
    setReloader: function () {
        var sHash = window.location.hash;
        if (
            sHash === '#mySchool' ||
            sHash === '#mySchoolDetail' ||
            sHash === '#schoolDetail'
        ) {
            $('#reloader').show();
        } else {
            $('#reloader').hide();
        }
    },
    updateDistance: function () {
        // console.log(nDistance);
        switch (window.location.hash) {
            case "#mySchool" :
                // console.log('reload');
                App.view.mySchool.render();
                break;
            case "#mySchoolDetail" :
                // console.log('reload');
                App.view.mySchoolDetail.$el.empty();
                App.view.mySchoolDetail.render();
                break;
            case "#schoolDetail" :
                // console.log('reload');
                App.view.schoolDetail.render();
                break;
        }

        App.vars.reload = true;
    },
    hidePageReloading: function () {
        $('#reloader').empty();
    }
});

// 내 현재 위치 가져오기 callback
window.AirManagerWeb = {
    callbackCurrentPosition: function (lat, lon) {
        App.vars.latitude = lat;
        App.vars.longitude = lon;
        if (lat == 0 && lon == 0) {
            // 내위치로
            App.view.homeMain.initMap({
                "lat": App.vars.latitude,
                "lon": App.vars.longitude
            });
        }
        /*$('h1').text('currentPosition lat: ' + lat + '/lon:' + lon);*/
    },
    callbackLoginId: function (loginId, userCertTknVal, schCd) {
        App.vars.loginId = loginId;
        App.vars.token = userCertTknVal;
        App.vars.schCd = schCd;
        /*$('h1').text('userCertTknVal' + userCertTknVal );*/
        /*"loginId": "seokan@ubivelox.com"*/
    },
    callbackLoginResult: function (loginId, userCertTknVal, schCd) {
        // $('h1').text('callbackLoginResult: ' + loginId);
        // $('#callbackLoginResult').text('callbackLoginResult: ' + loginId)
        App.vars.loginId = loginId;
        App.vars.token = userCertTknVal;
        App.vars.schCd = schCd;
        // if (loginId !== "" && App.vars.afterLogin !== null) {
        //     window.location.hash = App.vars.afterLogin;
        //     App.vars.afterLogin = null;
        // }
        App.router.branch();
        alert('result brunch');
    },
    callbackLogout: function () {
        App.vars.loginId = "";
        // window.location.hash = "#home";
        App.router.branch();
        alert('logout brunch');
    },

    callbackHistoryBack: function () {
        // App.util.toast(window.history.length);
        if ($('.popup_dim').length > 0) {
            $('.popup_dim').remove();
        }

        if (
            window.history.length <= 2 ||
            (window.location.hash == "#home" && App.mainMap.zoom < 17) ||
            window.location.hash == "mySchool" ||
            window.location.hash == ""
        ) {
            window.AirManager.callAppExit();
        } else if (window.location.hash == "#home" && App.mainMap.zoom >= 17) {
            App.view.homeMain.historyBackRefreshMap();
        } else {
            // window.history.back();
            /*Backbone.history.history.back();*/
            App.router.history.pop();
            return App.router.navigate(App.router.history.pop(), true);
        }
    },
    callbackRegDvc: function () {
        window.location.hash === "#home";
    }
};

