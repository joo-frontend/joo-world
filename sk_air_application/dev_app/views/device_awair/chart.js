directory.device_awairChart = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/chart"](data));
        return this;
    }
});