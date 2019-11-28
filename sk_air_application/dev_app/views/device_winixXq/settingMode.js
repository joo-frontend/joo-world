directory.device_winixXqSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingMode"](data));
        return this;
    }
});