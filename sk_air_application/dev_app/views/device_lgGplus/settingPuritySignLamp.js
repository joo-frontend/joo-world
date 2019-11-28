directory.device_lgGplusSettingPuritySignLamp = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingPuritySignLamp"](data));
        return this;
    }
});