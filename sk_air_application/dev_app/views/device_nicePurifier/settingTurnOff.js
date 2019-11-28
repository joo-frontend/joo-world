directory.device_nicePurifierSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingTurnOff"](data));
        return this;
    }
});