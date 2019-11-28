directory.device_winixZeroplusSettingChildLock = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingChildLock"](data));
        return this;
    }
});