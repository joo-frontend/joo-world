directory.device_nicePurifierSettingDustSensor = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingDustSensor"](data));
        return this;
    }
});