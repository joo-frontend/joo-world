directory.device_lgDplusSettingPuritySignLamp = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingPuritySignLamp"](data));
        return this;

    }
});