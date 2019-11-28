directory.device_winixNikeSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingTurnOff"](data));
        return this;
    }
});