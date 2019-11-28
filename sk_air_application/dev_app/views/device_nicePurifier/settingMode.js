directory.device_nicePurifierSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingMode"](data));
        return this;
    }
});