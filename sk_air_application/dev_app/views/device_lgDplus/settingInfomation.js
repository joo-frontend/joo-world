directory.device_lgDplusSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingInfomation"](data));
        return this;

    }
});