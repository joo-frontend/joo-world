directory.device_winiaPurifierSettingDisinfect = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingDisinfect"](data));
        return this;
    }
});