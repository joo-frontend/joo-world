directory.wrapContainer = Backbone.View.extend({
    render: function () {
        this.$el.html(templete["wrap/wrapContainer"]());
        return this; 
    }

});