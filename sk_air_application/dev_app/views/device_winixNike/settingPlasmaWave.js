directory.device_winixNikeSettingPlasmaWave = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingPlasmaWave"](data));
        return this;
    }
});