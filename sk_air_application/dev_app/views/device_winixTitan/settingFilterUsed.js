directory.device_winixTitanSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingFilterUsed"](data));
        return this;
    }
});