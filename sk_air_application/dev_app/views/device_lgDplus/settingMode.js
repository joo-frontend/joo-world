directory.device_lgDplusSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingMode"](data));
        return this;
    }
});