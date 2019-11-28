directory.airMultiSensorAwair = Backbone.View.extend({
    initialize: function () {
        //그린망고
        App.view.device_awairAirInfo = new directory.device_awairAirInfo();
        App.view.device_awairChart = new directory.device_awairChart();
        App.view.device_awairMode = new directory.device_awairMode();
        App.view.device_awairSettingAlarm = new directory.device_awairSettingAlarm();
        App.view.device_awairSettingInformation = new directory.device_awairSettingInformation();

        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_awair/device"](data));

        self.$el.find('#airInfo').html(App.view.device_awairAirInfo.render(data).$el);
        self.$el.find('#airChart').html(App.view.device_awairChart.render(data).$el);
        self.$el.find('#favor').html(App.view.device_awairMode.render(data).$el);
        self.$el.find('#alarm').html(App.view.device_awairSettingAlarm.render(data).$el);
        self.$el.find('#infomation').html(App.view.device_awairSettingInformation.render(data).$el);

        return self;
    }
});