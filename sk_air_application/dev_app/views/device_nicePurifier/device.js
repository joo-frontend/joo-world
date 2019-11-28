directory.airPurifierNicePurifier= Backbone.View.extend({
    initialize: function () {
        //ChunghoNice
        App.view.device_nicePurifierSettingAlarm = new directory.device_nicePurifierSettingAlarm();
        App.view.device_nicePurifierSettingFilterUsed= new directory.device_nicePurifierSettingFilterUsed();
        App.view.device_nicePurifierSettingInfomation = new directory.device_nicePurifierSettingInfomation();
        App.view.device_nicePurifierSettingMode= new directory.device_nicePurifierSettingMode();
        App.view.device_nicePurifierSettingDustSensor = new directory.device_nicePurifierSettingDustSensor();
        App.view.device_nicePurifierSettingPower = new directory.device_nicePurifierSettingPower();
        App.view.device_nicePurifierSettingTurnOff = new directory.device_nicePurifierSettingTurnOff();
        App.view.device_nicePurifierSettingVolume = new directory.device_nicePurifierSettingVolume();
        App.view.device_nicePurifierSettingIon = new directory.device_nicePurifierSettingIon();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_nicePurifier/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_nicePurifierSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_nicePurifierSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_nicePurifierSettingVolume.render(data).$el);
            self.$el.find('#dustsensor').html(App.view.device_nicePurifierSettingDustSensor.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_nicePurifierSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_nicePurifierSettingFilterUsed.render(data).$el);
            self.$el.find('#ion').html(App.view.device_nicePurifierSettingIon.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_nicePurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_nicePurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_nicePurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_nicePurifierSettingInfomation.render(data).$el);
        }
        return self;
    }
});