directory.device_lgSSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingInfomation"](data));
        return this;
    }
});