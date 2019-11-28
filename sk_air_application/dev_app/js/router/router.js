directory.Router = Backbone.Router.extend({
    oMySchoolData: {
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },

    routeParams: {},
    routes: {
        "": "branch",
        "branch": "branch",
        "indexList": "indexList",
        "home": "home",
        "mySchool": "mySchool",
        "mySchoolDetail": "mySchoolDetail",
        "localeList": "localeList",
        "historyAlarm": "historyAlarm",
        "informationDetail":"informationDetail",
        "airReportDetail":"airReportDetail",
        "airPurifier": "airPurifier",
        "airMultiSensor": "airMultiSensor",
        "searchSchool": "searchSchool",
        "schoolDetail": "schoolDetail",
        "airReport": "airReport",

        //기기상세
        "airPurifierChungho": "airPurifierChungho",
        "airPurifierLgD": "airPurifierLgD",
        "airPurifierLgG": "airPurifierLgG",
        "airPurifierLgS": "airPurifierLgS",
        "airPurifierSamsung": "airPurifierSamsung",
        "airPurifierWinia": "airPurifierWinia",
        "airPurifierWiniaHumidfy": "airPurifierWiniaHumidfy",
        "airPurifierWinixNike": "airPurifierWinixNike",
        "airPurifierWinixTaitan": "airPurifierWinixTaitan",
        "airPurifierWinixXQ": "airPurifierWinixXQ",
        "airMultiSensorAwair": "airMultiSensorAwair",
        "airMultiSensorHyundai": "airMultiSensorHyundai",
        "airMultiSensorGreen": "airMultiSensorGreen",

        "device_winixTitanSettingAlarm": "device_winixTitanSettingAlarm",

        "airMultiSensorGreenMango": "airMultiSensorGreenMango",
        "device_greenAirInfo": "device_greenAirInfo",
        "device_greenMode": "device_greenMode",
        "device_greenSettingAlarm": "device_greenSettingAlarm",
        "device_greenSettingInformation": "device_greenSettingInformation"
    },
    initialize: function () {
        this.globalEventBinding();
        this.globalView();
        this.globalUtil();
        this.setWrapElement();
        this.elementAssign();
        this.on("route", this.storeRoute);
        this.history = [];
    },
    globalUtil: function () {
        App.util = new directory.globalUtil();
    },
    globalEventBinding: function () {
        App.view.globalEventView = new directory.globalEventView();
        App.view.deviceEventView = new directory.deviceEventView();
    },
    globalView: function () {
        App.view.subHeader = new directory.subHeader();
    },

    setWrapElement: function () {
        App.view.wrapContainer = new directory.wrapContainer();
        $('body').prepend(App.view.wrapContainer.$el);

    },
    elementAssign: function () {
        this.$container = $("#container");
    },


    storeRoute: function () {
        return this.history.push(Backbone.history.fragment);
    },
    previous: function () {
        if (this.history.length > 1) {
            App.router.history.pop();
            return this.navigate(App.router.history.pop(), true);
        } else if (this.history.length == 1) {
            alert('exit');
        }
    },
    // navigate: function (route, options) {
    //     var routeOption = {
    //         trigger: true,
    //         replace: true
    //     };
    //     var params = (options && options.params) ? options.params : null;
    //     this.param(route, params);
    //     if (route == Backbone.history.fragment) {
    //         Backbone.history.loadUrl(route);
    //     } else {
    //         Backbone.Router.prototype.navigate(route, routeOption);
    //     }
    //
    // },
    // param: function (fragment, params) {
    //     var matchedRoute;
    //     _.any(Backbone.history.handlers, function (handler) {
    //         if (handler.route.test(fragment)) {
    //             matchedRoute = handler.route;
    //         }
    //     });
    //     if (params !== undefined) {
    //         [fragment] = $.extend(App.router.param(fragment), params);
    //     }
    //     return [fragment];
    // },
    indexList: function () {
        App.view.indexList = new directory.indexList();
    },

    branch: function () {
        var self = this;
        var param = App.util.getJsonFromUrl();
        var version = "0.6.1";
        // App.util.toast("webApp ver : " + version + " 입니다.");

        // App.util.toast(param.page);
        if (param.page == "schoolDetail") {

            App.vars.multipleWebapp = true;
            //학교 기기 상세
            //디바이스 배열 정보 필요

            // App.util.toast(param.page);
            // App.util.toast(param.schCd);
            // App.util.toast(param.lv);
            // App.util.toast(param.cls);
            // App.util.toast(param.curIdx);

            if (!param.schNm) {
                App.util.toast("학교 정보가 없습니다.");
            }
            if (!param.lv) {
                App.util.toast("학년 정보가 없습니다.");
            }
            if (!param.cls) {
                App.util.toast("학급 정보가 없습니다.");
            }
            if (!param.code) {
                App.util.toast(param.code);
            }

            // App.vars.nSlideIndex = param.curIdx;
            App.vars.sSelectedSchoolTitle = param.schNm;
            // $('body').html('hello');
            if (param.lv.substr(0, 1) <= 6) {
                App.vars.sSelectedLvClass = param.lv + param.cls;
                // App.vars.sSelectedLvClass = param.lv + "학년 " + param.cls + "반";
                // App.vars.sSelectedLvClass = param.lv + param.cls;
            } else {
                // App.util.toast(param.lv);
                App.vars.sSelectedLvClass = param.cls;
            }
            // App.util.toast(App.vars.sSelectedLvClass);

            App.vars.oSchoolDetail = {
                rtnDvcIdList : [],
                oDeviceInfo : [],
                oDeviceInfoRoot : [],
                dvcIdList : [],
                intariorSensorChartData:[],
                nIdx : param.curIdx
            };

            var aCode = param.code.split("|");
            // App.vars.oDeviceId = {
            //     "rtnDvcId": aCode
            // };

            aCode.forEach(function (array, index) {
                var rtnDvcIdListData = {"rtnDvcId": array};
                var dvcIdListData = {"dvcId": array};
                App.vars.oSchoolDetail.rtnDvcIdList.push(rtnDvcIdListData);
                App.vars.oSchoolDetail.dvcIdList.push(dvcIdListData);
            });

            console.log('@ oRtnDvcIdList');

            // App.util.toast(typeof oRtnDvcIdList.rtnDvcIdList[0].rtnDvcId);
            // App.vars.aDeviceId = oRtnDvcIdList;

            // App.vars.aDeviceId = {
            //     "rtnDvcIdList": [
            //         {"rtnDvcId": "D81658779723"}
            //     ]
            // };
            // App.vars.oSchoolCode = param.code;
            window.location.hash = "#schoolDetail";
        } else if (param.page == "localeList") {
            //학교 검색

            App.vars.entryAppDevice = true;
            App.vars.multipleWebapp = true;

            window.location.hash = "#localeList";
        } else if (param.page == "mySchoolDetail") {
            //학교 정보 상세
            //     ?page=mySchoolDetail&schCd=B000001967#mySchoolDetail


            if (param.schCd) {
                App.vars.oSchoolCode = param.schCd;
            } else if (param.code) {
                App.vars.oSchoolCode = param.code;
            }

            App.vars.multipleWebapp = true;

            if (!param.schNm) {
                App.util.toast("학교 정보가 없습니다.");
            }
            App.vars.sSelectedSchoolTitle = param.schNm;
            App.vars.sSelectedLvClass = "";
            window.location.hash = "#mySchoolDetail";
        } else {
            setTimeout(function () {
                // App.util.toast("loginId :" +App.vars.loginId)
                self.oMySchoolData.loginId = App.vars.loginId;
                App.model.mySchoolList.fetch({
                    method: "POST",
                    headers: {
                        "Authorization": App.vars.token,
                        "Content-Type": "application/json;charset=UTF-8",
                        "company": "school"
                    },
                    data: JSON.stringify(self.oMySchoolData),
                    success: function (model, response) {
                        App.vars.mySchoolList = response;

                        if (App.vars.loginId !== "" && App.vars.mySchoolList.schList.length > 0) {
                            window.location.hash = "#mySchool";
                        } else {
                            window.location.hash = "#home";
                        }
                    },
                    complete: function () {

                    },
                    error: function (e) {
                        window.location.hash = "#home";
                    }
                });
            }, 500)
        }
    },
    home: function () {
        App.view.homeMain = new directory.homeMain();

    },
    mySchool: function () {
        App.view.mySchool = new directory.mySchool();
    },
    mySchoolDetail: function () {
        App.view.mySchoolDetail = new directory.mySchoolDetail();
    },
    localeList: function () {
        App.view.localeList = new directory.localeList();
    },
    historyAlarm: function () {
        App.view.historyAlarm = new directory.historyAlarm();
    },
    informationDetail: function () {
        App.view.informationDetail= new directory.informationDetail();
    },
    airReportDetail: function () {
        App.view.airReportDetail = new directory.airReportDetail();
    },
    airPurifier: function () {
        App.view.airPurifier = new directory.airPurifier();
    },
    airPurifierChungho: function () {
        App.view.airPurifierChungho = new directory.airPurifierChungho();
    },
    airPurifierLgD: function () {
        App.view.airPurifierLgD = new directory.airPurifierLgD();
    },
    airPurifierLgG: function () {
        App.view.airPurifierLgG = new directory.airPurifierLgG();
    },
    airPurifierLgS: function () {
        App.view.airPurifierLgS = new directory.airPurifierLgS();
    },
    airPurifierSamsung: function () {
        App.view.airPurifierSamsung = new directory.airPurifierSamsung();
    },
    airPurifierWinia: function () {
        App.view.airPurifierWinia = new directory.airPurifierWinia();
    },
    airPurifierWiniaHumidfy: function () {
        App.view.airPurifierWiniaHumidfy = new directory.airPurifierWiniaHumidfy();
    },
    airPurifierWinixNike: function () {
        App.view.airPurifierWinixNike = new directory.airPurifierWinixNike();
    },
    airPurifierWinixTaitan: function () {
        App.view.airPurifierWinixTaitan = new directory.airPurifierWinixTaitan();
    },
    airPurifierWinixXQ: function () {
        App.view.airPurifierWinixXQ = new directory.airPurifierWinixXQ();
    },
    airMultiSensor: function () {
        App.view.airMultiSensor = new directory.airMultiSensor();
    },
    airMultiSensorHyundai: function () {
        App.view.airMultiSensorHyundai = new directory.airMultiSensorHyundai();
    },
    airMultiSensorAwair: function () {
        App.view.airMultiSensorAwair = new directory.airMultiSensorAwair();
    },
    airMultiSensorGreen: function () {
        App.view.airMultiSensorGreen = new directory.airMultiSensorGreen();
    },
    device_winixTitanSettingAlarm: function () {
        App.view.device_winixTitanSettingAlarm = new directory.device_winixTitanSettingAlarm();
    },
    airMultiSensorGreenMango: function () {
        App.view.airMultiSensorGreenMango = new directory.airMultiSensorGreenMango();
    },
    device_greenAirInfo: function () {
        App.view.device_greenAirInfo = new directory.device_greenAirInfo();
    },
    device_greenMode: function () {
        App.view.device_greenMode = new directory.device_greenMode();
    },
    device_greenSettingAlarm: function () {
        App.view.device_greenSettingAlarm = new directory.device_greenSettingAlarm();
    },
    device_greenSettingInformation: function () {
        App.view.device_greenSettingInformation = new directory.device_greenSettingInformation();
    },
    searchSchool: function () {
        App.view.searchSchool = new directory.searchSchool();
    },
    schoolDetail: function () {
        App.view.schoolDetail = new directory.schoolDetail();
    },
    airReport: function () {
        App.view.airReport = new directory.airReport();
    }
});
