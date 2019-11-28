directory.device_winixXqSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingVolume"](data));
        return this;
    }
});