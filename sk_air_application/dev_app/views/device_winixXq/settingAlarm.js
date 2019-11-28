directory.device_winixXqSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingAlarm"](data));
        return this;
    }
});