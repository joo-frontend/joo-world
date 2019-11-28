directory.device_lgSSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingTurnOff"](data));
        return this;
    }
});