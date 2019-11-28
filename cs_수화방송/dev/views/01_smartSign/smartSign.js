directory.smartSign = Backbone.View.extend({
    mode: {
        setting: true,
        btn: false
    },
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_smartSign/smartSign"]());
        $('#container').html(self.$el);
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;
    },
    right: function () {
        var self = this;

    },
    top : function () {
        var self = this;

    },
    bottom :  function () {
        var self = this;

    },
    ok: function () {
        var self = this;

    },
    back: function () {
        var self = this;

    },
    red: function () {
        //f1
        //스마트 수화 팝업
        App.router.callMenu({menuId: '901'});
        $('.area_red_key').hide();
    }
});



