directory.device_greenChart = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/chart"](data));
        return this;
    }
});