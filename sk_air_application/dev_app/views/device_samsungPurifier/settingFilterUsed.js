directory.device_samsungPurifierSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingFilterUsed"](data));
        return this;
    }
});