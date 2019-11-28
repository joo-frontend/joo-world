directory.device_nicePurifierSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingAlarm"](data));
        return this;
    }
});