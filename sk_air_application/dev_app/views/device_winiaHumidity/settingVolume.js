directory.device_winiaHumiditySettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingVolume"](data));
        return this;
    }
});