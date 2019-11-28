directory.device_lgGplusSettingUseReport = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingUseReport"](data));
        return this;
    }
});