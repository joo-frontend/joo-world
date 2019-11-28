directory.device_lgDplusSettingRemoveVirus = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingRemoveVirus"](data));
        return this;

    }
});