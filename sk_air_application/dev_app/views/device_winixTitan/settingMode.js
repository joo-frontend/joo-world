directory.device_winixTitanSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingMode"](data));
        return this;
    }
});