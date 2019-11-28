directory.device_lgSSettingUseReport = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingUseReport"](data));
        return this;
    }
});