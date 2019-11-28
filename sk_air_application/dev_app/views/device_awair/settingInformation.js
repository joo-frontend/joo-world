directory.device_awairSettingInformation = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/settingInformation"](data));
        return this;
    }
});