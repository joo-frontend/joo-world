directory.device_lgSSettingPuritySignLamp= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingPuritySignLamp"](data));
        return this;
    }
});