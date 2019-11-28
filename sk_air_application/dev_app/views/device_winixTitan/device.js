directory.airPurifierWinixTaitan = Backbone.View.extend({
    initialize: function () {
        //위닉스 타이탄
        App.view.device_winixTitanSettingAlarm = new directory.device_winixTitanSettingAlarm();
        App.view.device_winixTitanSettingFilterUsed = new directory.device_winixTitanSettingFilterUsed();
        App.view.device_winixTitanSettingInfomation = new directory.device_winixTitanSettingInfomation();
        App.view.device_winixTitanSettingMode = new directory.device_winixTitanSettingMode();
        App.view.device_winixTitanSettingPlasmaWave = new directory.device_winixTitanSettingPlasmaWave();
        App.view.device_winixTitanSettingPower = new directory.device_winixTitanSettingPower();
        App.view.device_winixTitanSettingTurnOff = new directory.device_winixTitanSettingTurnOff();
        App.view.device_winixTitanSettingVolume = new directory.device_winixTitanSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixTitan/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixTitanSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixTitanSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixTitanSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixTitanSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixTitanSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixTitanSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixTitanSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixTitanSettingInfomation.render(data).$el);
        }
        return self;
    }
});