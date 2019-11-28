directory.airPurifierSamsungPurifier = Backbone.View.extend({
    initialize: function () {
        //Samsung
        App.view.device_samsungPurifierSettingAlarm = new directory.device_samsungPurifierSettingAlarm();
        App.view.device_samsungPurifierSettingFilterUsed = new directory.device_samsungPurifierSettingFilterUsed();
        App.view.device_samsungPurifierSettingInfomation = new directory.device_samsungPurifierSettingInfomation();
        App.view.device_samsungPurifierSettingMode= new directory.device_samsungPurifierSettingMode();
        App.view.device_samsungPurifierSettingPower= new directory.device_samsungPurifierSettingPower();
        App.view.device_samsungPurifierSettingTurnOff = new directory.device_samsungPurifierSettingTurnOff();
        App.view.device_samsungPurifierSettingVolume = new directory.device_samsungPurifierSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_samsungPurifier/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_samsungPurifierSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_samsungPurifierSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_samsungPurifierSettingVolume.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_samsungPurifierSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_samsungPurifierSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_samsungPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_samsungPurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_samsungPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_samsungPurifierSettingInfomation.render(data).$el);
        }
        return self;
    }
});