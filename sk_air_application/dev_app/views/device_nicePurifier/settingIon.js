directory.device_nicePurifierSettingIon = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingIon"](data));
        return this;
    }
});