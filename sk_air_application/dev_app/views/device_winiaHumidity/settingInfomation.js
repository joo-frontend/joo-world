directory.device_winiaHumiditySettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingInfomation"](data));
        return this;
    }
});