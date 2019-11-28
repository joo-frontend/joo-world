directory.device_nicePurifierSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingVolume"](data));
        return this;
    }
});