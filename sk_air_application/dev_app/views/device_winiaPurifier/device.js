directory.airPurifierWiniaPurifier = Backbone.View.extend({
    initialize: function () {
        //WiniaPurifier
        App.view.device_winiaPurifierSettingAlarm = new directory.device_winiaPurifierSettingAlarm();
        App.view.device_winiaPurifierSettingFilterUsed = new directory.device_winiaPurifierSettingFilterUsed();
        App.view.device_winiaPurifierSettingInfomation = new directory.device_winiaPurifierSettingInfomation();
        App.view.device_winiaPurifierSettingMode = new directory.device_winiaPurifierSettingMode();
        App.view.device_winiaPurifierSettingPlasma = new directory.device_winiaPurifierSettingPlasma();
        App.view.device_winiaPurifierSettingPower = new directory.device_winiaPurifierSettingPower();
        App.view.device_winiaPurifierSettingTurnOff = new directory.device_winiaPurifierSettingTurnOff();
        App.view.device_winiaPurifierSettingVolume = new directory.device_winiaPurifierSettingVolume();
        App.view.device_winiaPurifierSettingDisinfect = new directory.device_winiaPurifierSettingDisinfect();
        App.view.device_winiaPurifierSettingHumidfy = new directory.device_winiaPurifierSettingHumidfy();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winiaPurifier/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winiaPurifierSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winiaPurifierSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winiaPurifierSettingVolume.render(data).$el);
            self.$el.find('#plasma').html(App.view.device_winiaPurifierSettingPlasma.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winiaPurifierSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winiaPurifierSettingFilterUsed.render(data).$el);
            self.$el.find('#disinfect').html(App.view.device_winiaPurifierSettingDisinfect.render(data).$el);
            self.$el.find('#humidfy').html(App.view.device_winiaPurifierSettingHumidfy.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);
        }
        return self;
    }
});