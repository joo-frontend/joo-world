directory.device_lgGplusSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingInfomation"](data));
        return this;
    }
});