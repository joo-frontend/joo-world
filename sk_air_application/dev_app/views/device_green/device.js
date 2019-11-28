directory.airMultiSensorGreenMango = Backbone.View.extend({
    initialize: function () {
        //그린망고
        App.view.device_greenAirInfo = new directory.device_greenAirInfo();
        App.view.device_greenChart = new directory.device_greenChart();
        App.view.device_greenMode = new directory.device_greenMode();
        App.view.device_greenSettingAlarm = new directory.device_greenSettingAlarm();
        App.view.device_greenSettingInformation = new directory.device_greenSettingInformation();

        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_green/device"](data));

        self.$el.find('#airInfo').html(App.view.device_greenAirInfo.render(data).$el);
        self.$el.find('#airChart').html(App.view.device_greenChart.render(data).$el);
        self.$el.find('#mode').html(App.view.device_greenMode.render(data).$el);
        self.$el.find('#alarm').html(App.view.device_greenSettingAlarm.render(data).$el);
        self.$el.find('#infomation').html(App.view.device_greenSettingInformation.render(data).$el);

        return self;
    }
});