directory.device_samsungPurifierSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingMode"](data));
        return this;
    }
});