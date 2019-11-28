directory.device_winiaPurifierSettingPower= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingPower"](data));
        return this;
    }
});