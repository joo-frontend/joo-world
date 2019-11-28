directory.device_winixXqSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingTurnOff"](data));
        return this;
    }
});