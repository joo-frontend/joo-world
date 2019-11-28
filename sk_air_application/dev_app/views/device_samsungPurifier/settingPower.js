directory.device_samsungPurifierSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingPower"](data));
        return this;
    }
});