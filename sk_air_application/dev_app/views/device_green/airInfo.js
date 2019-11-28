directory.device_greenAirInfo = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/airInfo"](data));
        return this;
    }
});