directory.device_winixTitanSettingPlasmaWave= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingPlasmaWave"](data));
        return this;
    }
});