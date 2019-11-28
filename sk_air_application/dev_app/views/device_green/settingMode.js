directory.device_greenMode = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/settingMode"](data));
        return this;
    }
});