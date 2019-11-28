directory.device_greenSettingInformation = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/settingInformation"](data));
        return this;
    }
});