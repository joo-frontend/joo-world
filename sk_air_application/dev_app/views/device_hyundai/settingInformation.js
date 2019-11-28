directory.device_hyundaiSettingInformation = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/settingInformation"](data));
        return this;
    }
});