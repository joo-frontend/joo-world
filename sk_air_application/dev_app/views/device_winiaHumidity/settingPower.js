directory.device_winiaHumiditySettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingPower"](data));
        return this;
    }
});