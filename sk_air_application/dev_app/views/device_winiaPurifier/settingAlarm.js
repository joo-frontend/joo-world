directory.device_winiaPurifierSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingAlarm"](data));
        return this;
    }
});