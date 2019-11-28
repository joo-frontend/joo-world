directory.device_lgDplusSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingAlarm"](data));
        return this;
    }
});