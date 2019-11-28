directory.popupAllSchoolDelete = Backbone.View.extend({
    className:"popup_dim",
    initialize: function () {
    },
    remove: function () {
        $('.popup_dim').remove();
    },
    render: function () {

        $('body').append(this.$el.html(templete["popup/allSchoolDelete"]()));

    }

});