directory.device_lgGplusSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingAlarm"](data));
        return this;
    }
});