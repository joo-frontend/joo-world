directory.device_lgSSettingRemoveVirus = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingRemoveVirus"](data));
        return this;
    }
});