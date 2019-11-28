directory.device_samsungPurifierSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingInfomation"](data));
        return this;
    }
});