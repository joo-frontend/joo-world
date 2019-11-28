directory.airPurifierWinixXq = Backbone.View.extend({
    initialize: function () {
        //WinixXQ
        App.view.device_winixXqSettingAlarm= new directory.device_winixXqSettingAlarm();
        App.view.device_winixXqSettingFilterUsed = new directory.device_winixXqSettingFilterUsed();
        App.view.device_winixXqSettingChildLock = new directory.device_winixXqSettingChildLock();
        App.view.device_winixXqSettingMode = new directory.device_winixXqSettingMode();
        App.view.device_winixXqSettingPlasmaWave = new directory.device_winixXqSettingPlasmaWave();
        App.view.device_winixXqSettingPower = new directory.device_winixXqSettingPower();
        App.view.device_winixXqSettingTurnOff = new directory.device_winixXqSettingTurnOff();
        App.view.device_winixXqSettingVolume = new directory.device_winixXqSettingVolume();
        App.view.device_winixXqSettingPollutionLamp = new directory.device_winixXqSettingPollutionLamp();
        App.view.device_winixXqSettingUV= new directory.device_winixXqSettingUV();
        App.view.device_winixXqSettingInfomation = new directory.device_winixXqSettingInfomation();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixXq/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixXqSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixXqSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixXqSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixXqSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixXqSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixXqSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winixXqSettingAlarm.render(data).$el);
            self.$el.find('#childlock').html(App.view.device_winixXqSettingChildLock.render(data).$el);
            self.$el.find('#pollutionlamp').html(App.view.device_winixXqSettingPollutionLamp.render(data).$el);
            self.$el.find('#uv').html(App.view.device_winixXqSettingUV.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixXqSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixXqSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixXqSettingInfomation.render(data).$el);
        }


        return self;
    }
});