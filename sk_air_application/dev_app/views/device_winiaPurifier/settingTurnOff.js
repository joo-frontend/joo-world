directory.device_winiaPurifierSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingTurnOff"](data));
        return this;
    }
});