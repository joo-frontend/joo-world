directory.device_winixZeroplusSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data, turnOffMode) {
        console.log(turnOffMode)
        this.$el.html(templete["device_winixZeroplus/settingTurnOff"](data, turnOffMode));
        return this;
    }
});