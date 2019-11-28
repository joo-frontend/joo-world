directory.device_nicePurifierSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingFilterUsed"](data));
        return this;
    }
});