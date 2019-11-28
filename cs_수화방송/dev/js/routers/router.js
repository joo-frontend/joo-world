directory.Router = Backbone.Router.extend({
    routeParams: {},
    routes: {
        "smartSign": "smartSign",
        "popupSetting": "popupSetting",
        "settingSize": "settingSize",
        "settingPosition": "settingPosition",
        "settingDivide": "settingDivide"
    },
    initialize: function () {
        this.globalEventBinding();
        this.setWrapElement();
        this.elementAssign();
    },
    globalEventBinding: function () {
        //전역 이벤트 객체 실행
        App.event = new directory.globalEventView();
        App.util = new directory.globalUtil();
    },
    setWrapElement: function () {
        App.view.wrapContainer = new directory.wrapContainer();
        $('body').html(App.view.wrapContainer.render().el);
    },
    elementAssign: function () {
        this.$container = $("#container");
    },
    callMenu: function (options) {
        var self = this;
        var opts = {
            menuId: "",
            envJson: {}
        };
        $.extend(true, opts, options);

        console.log("%c ======================callmenu start======================", "color: #ff00ff; background-color : #000; font-size: 14px");
        console.log("%c                 " + opts.menuId + "                                      ", "color: #ff00ff; background-color : #000; font-size: 14px");
        console.log("%c history 전체 갯수 : " + App.historyApp.getHistoryArray().length + "                                      ", "color: #ff00ff; background-color : #000; font-size: 14px");
        console.log(App.historyApp.getHistoryArray());
        console.log("%c ==========================================================", "color: #ff00ff; background-color : #000; font-size: 14px");

        switch (opts.menuId) {
            case "900" : //최초진입화면
                this.navigate("smartSign", {params: opts});
                //App.api.fn.setKeyFilter({"numKeyUse": "off"});
                break;
            case "901" : //설정팝업화면
                this.navigate("popupSetting", {params: opts});
                break;
            case "902" : //크기조절화면
                this.navigate("settingSize", {params: opts});
                break;
            case "903" : //위치변경화면
                this.navigate("settingPosition", {params: opts});
                break;
            case "904" : //면분할화면
                this.navigate("settingDivide", {params: opts});
                break;
        }
    },
    navigate: function (route, options) {
        var routeOption = {
            trigger: true,
            viewMode: ''
        };
        var params = (options && options.params) ? options.params : null;
        $.extend(routeOption, options.params);
        delete routeOption.params;
        //파라미터 내용 설정
        this.param(route, params);
        try {
            if (options.params.isPrevPageRemove === false) {
                Backbone.Router.prototype.navigate(route, routeOption);
            } else {
                Backbone.Router.prototype.navigate(route, routeOption);
            }
        } catch (e) {
            Backbone.Router.prototype.navigate(route, routeOption);
        }


    },
    param: function (fragment, params) {
        var matchedRoute;
        _.any(Backbone.history.handlers, function (handler) {
            if (handler.route.test(fragment)) {
                matchedRoute = handler.route;
            }
        });
        if (params !== undefined) {
            this.routeParams[fragment] = $.extend(App.router.param(fragment), params);
        }
        return this.routeParams[fragment];
    },

    smartSign: function () {
        App.view.smartSign = new directory.smartSign(this.routeParams);
    },
    popupSetting: function () {
        App.view.popupSetting = new directory.popupSetting(this.routeParams);
    },
    settingSize: function () {
        App.view.settingSize = new directory.settingSize(this.routeParams);
    },
    settingPosition: function () {
        App.view.settingPosition = new directory.settingPosition(this.routeParams);
    },
    settingDivide: function () {
        App.view.settingDivide = new directory.settingDivide(this.routeParams);
    }
});