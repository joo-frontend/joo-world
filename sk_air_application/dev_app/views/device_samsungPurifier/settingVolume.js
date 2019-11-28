directory.device_samsungPurifierSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingVolume"](data));
        return this;
    }
});