directory.device_winixXqSettingPlasmaWave= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingPlasmaWave"](data));
        return this;
    }
});