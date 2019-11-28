directory.device_winixZeroplusSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingMode"](data));
        return this;
    }
});