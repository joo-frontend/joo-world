directory.device_winixZeroplusSettingPlasmaWave= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingPlasmaWave"](data));
        return this;
    }
});