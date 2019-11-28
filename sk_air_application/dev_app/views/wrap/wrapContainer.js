directory.wrapContainer = Backbone.View.extend({
    initialize: function (params) {

        this.render();
    },
    render: function () {

        /*App.fn.globalUtil = new directory.globalUtil();*/
        this.$el.html(templete["wrap/wrapContainer"]());

        return this;
    }
});
