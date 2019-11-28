directory.device_winixNikeSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingVolume"](data));
        return this;
    }
});