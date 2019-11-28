directory.device_winixZeroplusSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingAlarm"](data));
        return this;
    }
});