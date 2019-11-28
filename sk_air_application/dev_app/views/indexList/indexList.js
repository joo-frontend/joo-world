directory.indexList = Backbone.View.extend({
    initialize: function (params) {

        this.render();
    },
    render: function () {
        App.util.setReloader();
        this.$el.html(templete["indexList/indexList"]());

        $('.wrap_contents').html(this.$el)
        $('.wrap_header h1').text("");
    }
});