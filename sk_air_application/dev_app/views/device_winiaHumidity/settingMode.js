directory.device_winiaHumiditySettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingMode"](data));
        return this;
    }
});