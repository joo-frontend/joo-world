directory.airPurifierWinixNike = Backbone.View.extend({
    initialize: function () {
        //WinixNike
        App.view.device_winixNikeSettingAlarm = new directory.device_winixNikeSettingAlarm();
        App.view.device_winixNikeSettingFilterUsed = new directory.device_winixNikeSettingFilterUsed();
        App.view.device_winixNikeSettingInfomation = new directory.device_winixNikeSettingInfomation();
        App.view.device_winixNikeSettingMode = new directory.device_winixNikeSettingMode();
        App.view.device_winixNikeSettingPlasmaWave = new directory.device_winixNikeSettingPlasmaWave();
        App.view.device_winixNikeSettingPower = new directory.device_winixNikeSettingPower();
        App.view.device_winixNikeSettingTurnOff = new directory.device_winixNikeSettingTurnOff();
        App.view.device_winixNikeSettingVolume = new directory.device_winixNikeSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixNike/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixNikeSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixNikeSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixNikeSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixNikeSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixNikeSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixNikeSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winixNikeSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixNikeSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixNikeSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixNikeSettingInfomation.render(data).$el);
        }
        return self;
    }
});