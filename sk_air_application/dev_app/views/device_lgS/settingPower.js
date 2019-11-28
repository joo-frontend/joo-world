directory.device_lgSSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingPower"](data));
        return this;
    }
});