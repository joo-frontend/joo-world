directory.device_winiaPurifierSettingPlasma= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingPlasma"](data));
        return this;
    }
});