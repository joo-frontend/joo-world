directory.device_winixXqSettingFilterUsed= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingFilterUsed"](data));
        return this;
    }
});