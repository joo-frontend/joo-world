directory.device_winiaPurifierSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingFilterUsed"](data));
        return this;
    }
});