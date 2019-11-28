directory.airPurifierWiniaHumidfy = Backbone.View.extend({
    initialize: function () {
        //WiniaHumidfy
        App.view.device_winiaHumiditySettingAlarm = new directory.device_winiaHumiditySettingAlarm();
        App.view.device_winiaHumiditySettingFilterUsed = new directory.device_winiaHumiditySettingFilterUsed();
        App.view.device_winiaHumiditySettingInfomation = new directory.device_winiaHumiditySettingInfomation();
        App.view.device_winiaHumiditySettingMode= new directory.device_winiaHumiditySettingMode();
        App.view.device_winiaHumiditySettingPlasma = new directory.device_winiaHumiditySettingPlasma();
        App.view.device_winiaHumiditySettingPower = new directory.device_winiaHumiditySettingPower();
        App.view.device_winiaHumiditySettingTurnOff = new directory.device_winiaHumiditySettingTurnOff();
        App.view.device_winiaHumiditySettingVolume= new directory.device_winiaHumiditySettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winiaHumidity/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winiaHumiditySettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winiaHumiditySettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winiaHumiditySettingVolume.render(data).$el);
            self.$el.find('#plasma').html(App.view.device_winiaHumiditySettingPlasma.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winiaHumiditySettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winiaHumiditySettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winiaHumiditySettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaHumiditySettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winiaHumiditySettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaHumiditySettingInfomation.render(data).$el);
        }
        return self;
    }
});