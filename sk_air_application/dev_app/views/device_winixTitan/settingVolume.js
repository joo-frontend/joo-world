directory.device_winixTitanSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingVolume"](data));
        return this;
    }
});