directory.device_samsungPurifierSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingTurnOff"](data));
        return this;

    }
});