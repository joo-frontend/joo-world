directory.mainHeader = Backbone.View.extend({
    render: function () {
        var sWindowHash = window.location.hash.slice(1);
        $('.wrap_header').html(templete["header/mainHeader"](sWindowHash)).removeClass('wrap_header_bd');
        return this;
    }
});