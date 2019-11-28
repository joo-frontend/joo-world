directory.device_lgGplusSettingRemoveVirus = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingRemoveVirus"](data));
        return this;
    }
});