directory.device_awairSettingAlarm = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/settingAlarm"](data));
        return this;
    }
});