directory.airReport = Backbone.View.extend({
    activeTabIndex: 0,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        App.util.setReloader();
        // 헤더 바인딩
        App.view.subHeader.render();


        this.dailyReportBind("000");

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');
        self.$el.html(templete["airReport/airReport"]());
        self.$el.find('#airReportTabs').html(templete["airReport/airReportTabs"]());
        self.$el.find('#airReportIcon').html(templete["airReport/airReportIcon"]());

    },
    dailyReportBind: function (reqType) {
        var self =this;

        var today = moment().format('YYYY-MM-DD');
        App.model.dailyReport.fetch({
            method: "GET",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: {
                "reqType": reqType,
                "reqDate": today,

            },
            //data: JSON.stringify(App.vars.oDeviceId),
            success: function (model, response) {
                console.log('@ App.model.dailyReport');
                console.log(response.reportList);


                self.oDailyReport = response;

                self.$el.find('#airReportTabsContents').html(templete["airReport/airReportContents"](self.oDailyReport.reportList));

                App.util.hideLoading();
            },
            complete: function () {
                App.util.hideLoading();
            },
            error: function (e, response) {
                /*App.util.toast(response.responseJSON.resultMsg)*/
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();

            }
        });
    },
    weeklyReportBind: function (reqType) {

        var self =this;

        var today = moment().format('YYYY-MM-DD');
        App.model.weeklyReport.fetch({
            method: "GET",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: {
                "reqType": reqType,
                "reqDate": today,

            },
            //data: JSON.stringify(App.vars.oDeviceId),
            success: function (model, response) {
                console.log('@ App.model.weeklyReport');
                console.log(response.reportList);


                self.oWeeklyReport = response;

                self.$el.find('#airReportTabsContents').html(templete["airReport/airReportContents"](self.oWeeklyReport.reportList));

                App.util.hideLoading();
            },
            complete: function () {
                App.util.hideLoading();
            },
            error: function (e, response) {
                /*App.util.toast(response.responseJSON.resultMsg)*/
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();

            }
        });
    }
});