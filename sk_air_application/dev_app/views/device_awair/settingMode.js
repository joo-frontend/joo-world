directory.device_awairMode = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/settingMode"](data));
        return this;
    }
});