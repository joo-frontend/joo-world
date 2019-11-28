directory.settingPosition = Backbone.View.extend({
    mode: {
        setting: true
    },
    num: 0,
    initialize: function (params) {
        //한줄 이동
        App.fn.globalUtil = new directory.globalUtil();
        this.render();
    },
    render: function () {
        var self = this;
        self.$el.html(templete["01_settingPosition/settingPosition"]());
        $('#container').html(self.$el);
        $('.area_red_key').hide();
    },
    bigPip: function () {
        this.num = this.num + 1;
        $('.area_pip').attr('class', 'area_pip').addClass('size0' + (this.num));
    },
    smallPip: function () {
        this.num = this.num - 1;
        $('.area_pip').attr('class', 'area_pip').addClass('size0' + (this.num));
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
    top: function () {
        var self = this;
        if($('.tooltip:visible').length > 0){
            if(self.num < 4){
                self.bigPip();
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    bottom: function () {
        var self = this;
        if($('.tooltip').length > 0) {
            if (self.num > 0) {
                self.smallPip();
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    ok: function () {
        var self = this;
        //설정완료
        $('.tooltip').remove();
        $('.area_red_key').show();
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



