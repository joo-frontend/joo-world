directory.device_hyundaiAirInfo = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/airInfo"](data));
        return this;
    }
});