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
    getFocus: function () {
        return $('.area_position ._moveFocus').find('.focus');
    },
    getFocusIndex: function () {
        return this.getFocus().index();
    },
    /**
     * key moving view
     */
    left: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        if(nIndex === 3 || nIndex === 6){
            return false;
        } else {
            App.fn.globalUtil.moveFocus({
                el: $('.area_position ._moveFocus'),
                findScope: 'li',
                direction: "prev",
                circulation: false
            });
        }
    },
    right: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        if(nIndex === 2 || nIndex === 5){
            return false;
        } else {
            App.fn.globalUtil.moveFocus({
                el: $('.area_position ._moveFocus'),
                findScope: 'li',
                direction: "next",
                circulation: false
            });
        }


    },
    top: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        $('._moveFocus').find('li').eq(nIndex - 3).addClass('focus').siblings().removeClass('focus');
    },
    bottom: function () {
        var self = this;
        var nIndex = self.getFocusIndex();
        $('._moveFocus').find('li').eq(nIndex + 3).addClass('focus').siblings().removeClass('focus');
    },
    ok: function () {
        var self = this;
        //설정완료
    },
    back: function () {
        var self = this;

    },
    red: function () {
        //f1
        //스마트 수화 팝업
    }
});



