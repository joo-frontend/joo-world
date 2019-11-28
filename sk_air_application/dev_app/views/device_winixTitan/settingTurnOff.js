directory.device_winixTitanSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingTurnOff"](data));
        return this;
    }
});