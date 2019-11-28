directory.device_hyundaiSettingAlarm = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/settingAlarm"](data));
        return this;
    }
});