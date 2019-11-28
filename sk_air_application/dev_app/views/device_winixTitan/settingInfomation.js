directory.device_winixTitanSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingInfomation"](data));
        return this;
    }
});