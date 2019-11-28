directory.device_winixTitanSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingAlarm"](data));
        return this;
    }
});