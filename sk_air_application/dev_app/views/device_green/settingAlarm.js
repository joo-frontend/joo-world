directory.device_greenSettingAlarm = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/settingAlarm"](data));
        return this;
    }
});