directory.device_lgDplusSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingTurnOff"](data));
        return this;
    }
});