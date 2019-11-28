directory.device_winiaPurifierSettingInfomation= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingInfomation"](data));
        return this;
    }
});