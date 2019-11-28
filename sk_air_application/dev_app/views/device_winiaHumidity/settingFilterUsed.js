directory.device_winiaHumiditySettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingFilterUsed"](data));
        return this;
    }
});