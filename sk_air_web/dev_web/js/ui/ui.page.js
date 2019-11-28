var ui = ui || {};
ui.page = ui.page || {};
ui.page.global = function () {
    this.init();
};
ui.page.global.prototype = {
    init: function () {
        console.log('■ import Global');
        this._assignElements();
        this._attachEventHandlers();
        this._ready();
    },
    _assignElements: function () {
        this.welDoc = $(document.body);
        this.welWin = $(window);

    },
    _attachEventHandlers: function () {
        //탭
        this.welDoc.on('click', '.tabs li', $.proxy(this._onClickTabs, this));
        this.welDoc.on('click', '._popup_open', $.proxy(this._onClickPopupOpen, this));
        this.welDoc.on('click', '._popup_close', $.proxy(this._onClickPopupClose, this));
        this.welDoc.on('click', '._on_dropdown', $.proxy(this._onDropdown, this));
        this.welDoc.on('click', 'table th .sort', $.proxy(this._onClickSort, this));
        this.welDoc.on('click', '.area_terms ._check', $.proxy(this._onClickCheck, this));
    },
    _onClickTabs: function (event) {
        var target = $(event.currentTarget);
        target.addClass('active').siblings().removeClass('active');
    },
    _onClickPopupOpen: function (event) {
        var target = $(event.currentTarget);
        var sPopup = target.data('popup');
        this.popup(sPopup);
    },
    _onClickPopupClose: function (event) {
        this.closePopup();
    },
    popup: function (element) {
        this.showPopup($(element));
    },
    showPopup: function (elPopup) {
        this.welDoc.css({'overflow': 'hidden'});
        $(elPopup).show();
    },
    closePopup: function (elPopup) {
        this.welDoc.css({'overflow': 'visible'});
        $('.dim_block').hide();
    },
    _onDropdown: function (e) {
        var target = $(e.currentTarget);
        target.toggleClass('active');
    },
    _onClickSort: function (event) {
        var target = $(event.currentTarget);
        target.toggleClass('active');
    },
    _onClickCheck: function (event) {
        var target = $(event.currentTarget);
        target.toggleClass('active');
    },
    _ready: function () {
    }
};

var uiPage = new ui.page.global();