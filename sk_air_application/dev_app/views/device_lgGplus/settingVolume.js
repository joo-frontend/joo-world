directory.device_lgGplusSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingVolume"](data));
        return this;
    }
});