var ui = ui || {};
ui.page = ui.page || {};
ui.page.common = function () {
    this.init();
};
ui.page.common.prototype = {

    init: function () {
        console.log('■ import common');
        this._assignElements();
        this._attachEventHandlers();
        this._ready();
    },
    _assignElements: function () {
        this.welDoc = $(document.body);
        this.welWin = $(window);
    },
    _attachEventHandlers: function () {
        this.welDoc.on('click', 'a[href="#"]', $.proxy(this._onClickEventPrevent, this));
    },
    _onClickEventPrevent: function (event) {
        event.preventDefault();
    },

    _ready: function () {
    }
}
;