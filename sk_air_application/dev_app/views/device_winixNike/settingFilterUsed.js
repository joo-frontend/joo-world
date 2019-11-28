directory.device_winixNikeSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingFilterUsed"](data));
        return this;
    }
});