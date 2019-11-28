directory.device_winixZeroplusSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingPower"](data));
        return this;
    }
});