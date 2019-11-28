directory.localeList = Backbone.View.extend({
    selectLocale: [{
        "selectItem": null
    },
        {
            "selectItem": null
        }
    ],
    localeData: {
        "sidoCd": "",
        "siguCd": "",
        "schType": ""
    },
    activeTabIndex: null,
    initialize: function () {
        App.view.mainHeader = new directory.mainHeader();
        this.render();
    },
    render: function () {
        var self = this;
        App.util.setReloader();
        // 헤더 바인딩
        if (App.vars.entryAppDevice) {
            App.view.subHeader.render();
        } else {
            App.view.mainHeader.render();
        }

        // 템플릿팅
        self.$el.html(templete["localeList/localeList"]());


        this.siguTempleteBinding();
        this.initLocaleData();
        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');

    },
    initLocaleData: function () {
        var self = this;
        self.localeData = {
            "sidoCd": "",
            "siguCd": "",
            "schType": ""
        };
        self.selectLocale = [{
            "selectItem": null
        },
            {
                "selectItem": null
            }
        ]
    },
    bindTabContents: function (idx) {
        var self = this;
        var elTabContents = (idx) ? (idx + 1) : 1;
        // 세 번째 탭에서만 서브탭 바인딩
        if (elTabContents == "3") {
            self.$el.find('.tab-menu').after(templete["localeList/localeListSubTab"]());
        } else {
            self.$el.find('.sub_tabs').remove();
        }
        // 탭 별 컨텐츠 템플릿팅
        self.$el.find('.tab-contents').html(templete["localeList/localeArea0" + elTabContents]());
    },
    siguTempleteBinding: function (localeData) {
        var self = this;
        self.activeTabIndex = self.$el.find('.tab-menu li.focus').index();

        self.localeData = $.extend(self.localeData, localeData);
        App.model.schoolSearch.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(self.localeData),
            beforeSend: function () {
                /*App.util.pageLoadingShow();*/
            },
            success: function (model, response) {
                if (
                    response.sidoList !== undefined &&
                    response.sidoList.length === 0
                ) {
                    App.util.toast("시/도 데이터 조회에 실패하였습니다");
                } else if (
                    response.siguList !== undefined &&
                    response.siguList.length === 0
                ) {
                    App.util.toast("시/구 데이터 조회에 실패하였습니다");
                } else if (
                    response.schList !== undefined &&
                    response.schList.length === 0
                ) {
                    App.util.toast("등록된 초등학교가 없습니다");


                }

                if (self.activeTabIndex == "0") {
                    $('.sub_tabs').remove();
                    self.$el.find('.tab-contents').html(templete["localeList/localeArea01"](response));
                    if (App.view.localeList.selectLocale[0].selectItem !== null) {
                        self.$el.find('.area_local_choice li').eq(App.view.localeList.selectLocale[0].selectItem).addClass('selected')
                    }
                } else if (self.activeTabIndex == "1") {
                    $('.sub_tabs').remove();
                    self.$el.find('.tab-contents').html(templete["localeList/localeArea02"](response));
                    if (App.view.localeList.selectLocale[1].selectItem !== null) {
                        self.$el.find('.area_local_choice li').eq(App.view.localeList.selectLocale[1].selectItem).addClass('selected')
                    }
                } else  {
                    self.$el.find('.tab-menu').after(templete["localeList/localeListSubTab"](response));
                    self.$el.find('.tab-contents').html(templete["localeList/localeArea03"](response));
                }


            },
            complete: function () {
                /*App.util.pageLoadingHide();*/
            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    }
});