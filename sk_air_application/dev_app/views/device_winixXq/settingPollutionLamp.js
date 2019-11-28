directory.device_winixXqSettingPollutionLamp= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingPollutionLamp"](data));
        return this;
    }
});