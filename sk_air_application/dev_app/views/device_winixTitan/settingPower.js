directory.device_winixTitanSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingPower"](data));
        return this;
    }
});