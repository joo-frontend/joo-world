directory.device_winiaHumiditySettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingTurnOff"](data));
        return this;
    }
});