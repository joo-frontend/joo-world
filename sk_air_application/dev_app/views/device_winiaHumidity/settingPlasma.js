directory.device_winiaHumiditySettingPlasma = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingPlasma"](data));
        return this;
    }
});