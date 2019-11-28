directory.device_winixXqSettingUV= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingUV"](data));
        return this;
    }
});