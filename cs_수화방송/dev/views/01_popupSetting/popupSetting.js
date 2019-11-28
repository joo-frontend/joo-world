directory.popupSetting = Backbone.View.extend({
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
        self.$el.html(templete["01_popupSetting/popupSetting"]());
        $('#container_popup').html(self.$el);
        App.fn.globalUtil.switchMode(self.mode, "setting");

    },
    /**
     * get 함수
     * @returns {*|jQuery}
     */
    getFocus: function () {
        return $('.popup_body ul').find('.focus');
    },
    getFocusIndex: function () {
        return this.getFocus().index();
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
        if (self.mode.setting) {
            if (self.getFocusIndex() === 0) {
                App.fn.globalUtil.moveActive({
                    step: 1,
                    el: $('._wrap_popup ._section'),
                    afterCallback: function () {
                        App.fn.globalUtil.switchMode(self.mode, "btn");
                    }
                });
            } else {
                App.fn.globalUtil.moveFocus({
                    el: $('._wrap_popup .popup_body .active'),
                    findScope: 'li',
                    direction: "prev",
                    circulation: false
                });
            }
        } else if (self.mode.btn) {
            App.fn.globalUtil.moveActive({
                step: -1,
                el: $('._wrap_popup ._section'),
                afterCallback: function () {
                    App.fn.globalUtil.switchMode(self.mode, "setting");
                    $('.popup_body .active').find('li').removeClass('focus').eq(3).addClass('focus')
                }
            });
        }
    },
    bottom: function () {
        var self = this;
        if (self.mode.setting) {
            if (self.getFocusIndex() === 3) {
                App.fn.globalUtil.moveActive({
                    step: 1,
                    el: $('._wrap_popup ._section'),
                    afterCallback: function () {
                        App.fn.globalUtil.switchMode(self.mode, "btn");
                    }
                });
            } else {
                App.fn.globalUtil.moveFocus({
                    el: $('._wrap_popup .popup_body .active'),
                    findScope: 'li',
                    direction: "next",
                    circulation: false
                });
            }
        } else if (self.mode.btn) {
            App.fn.globalUtil.moveActive({
                step: -1,
                el: $('._wrap_popup ._section'),
                afterCallback: function () {
                    App.fn.globalUtil.switchMode(self.mode, "setting");
                    $('.popup_body .active').find('li').removeClass('focus').eq(0).addClass('focus');
                }
            });
        }
    },

    ok: function () {
        var self = this;
        if(self.mode.setting){
            var nIdx = self.getFocusIndex();
            switch(nIdx){
                case 0:
                    //크기조절
                    App.router.callMenu({menuId: '902'});
                    break;
                case 1:
                    //위차변경
                    App.router.callMenu({menuId: '903'});
                    break;
                case 2:
                    //화면분할
                    App.router.callMenu({menuId: '904'});
                    break;
                case 3:
                    //설정초기화
                    break;
            }
            $('.popup_dim').remove();
        } else if (self.mode.btn) {
            $('.popup_dim').remove();
            App.router.callMenu({menuId: '900'});
        }

    },
    back: function () {
        var self = this;
        // App.router.callMenu(App.historyApp.pop());
        App.router.callMenu({menuId: '900'});
        $('.popup_dim').remove();
    }
});



