directory.airMultiSensorHyundai = Backbone.View.extend({
    initialize: function () {
        //그린망고
        App.view.device_hyundaiAirInfo = new directory.device_hyundaiAirInfo();
        App.view.device_awairChart = new directory.device_awairChart();
        App.view.device_hyundaiMode = new directory.device_hyundaiMode();
        App.view.device_hyundaiSettingAlarm = new directory.device_hyundaiSettingAlarm();
        App.view.device_hyundaiSettingInformation = new directory.device_hyundaiSettingInformation();

        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_hyundai/device"](data));

        self.$el.find('#airInfo').html(App.view.device_hyundaiAirInfo.render(data).$el);
        self.$el.find('#airChart').html(App.view.device_awairChart.render(data).$el);
        self.$el.find('#mode').html(App.view.device_hyundaiMode.render(data).$el);
        self.$el.find('#alarm').html(App.view.device_hyundaiSettingAlarm.render(data).$el);
        self.$el.find('#infomation').html(App.view.device_hyundaiSettingInformation.render(data).$el);

        return self;
    }
});