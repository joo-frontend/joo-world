directory.device_winixNikeSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingInfomation"](data));
        return this;
    }
});