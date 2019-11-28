directory.device_winixNikeSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingAlarm"](data));
        return this;
    }
});