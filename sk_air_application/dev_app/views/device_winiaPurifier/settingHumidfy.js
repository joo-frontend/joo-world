directory.device_winiaPurifierSettingHumidfy= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingHumidfy"](data));
        return this;
    }
});