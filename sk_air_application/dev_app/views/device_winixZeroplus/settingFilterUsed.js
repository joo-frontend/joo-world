directory.device_winixZeroplusSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingFilterUsed"](data));
        return this;
    }
});