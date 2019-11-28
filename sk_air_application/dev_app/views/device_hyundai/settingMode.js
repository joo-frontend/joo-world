directory.device_hyundaiMode = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/settingMode"](data));
        return this;
    }
});