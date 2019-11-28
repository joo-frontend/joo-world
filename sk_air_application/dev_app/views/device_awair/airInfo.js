directory.device_awairAirInfo = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/airInfo"](data));
        return this;
    }
});