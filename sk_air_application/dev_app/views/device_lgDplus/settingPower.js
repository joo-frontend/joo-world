directory.device_lgDplusSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingPower"](data));
        return this;
    }
});