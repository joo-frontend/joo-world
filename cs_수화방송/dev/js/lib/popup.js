;
(function ($) {
    var defaults = {
        //templete
        useTpl: false,
        urlHbs: null,
        urlJson: null,
        //general
        popupName: 'popuphbs',
        position: "center", // "center" 또는 "top"
        offsetX: 0,
        offsetY: 0,
        width: "300px",
        padding: "20px",
        animation: true,
        effect: "fadeIn",
        dim: true,
        opacity: "0.6",
        // CALLBACKS
        onOpen: function () {
            return true;
        },
        onClose: function () {
            return true;
        }
    };
    $.fn.popup = function (options) {
        /**
         * global vars
         */
        var self = this;
        var settings = {};
        var tpl = null;
        var getData = null;
        var sPopupTarget;
        var welPopup;
        var welPopupContent;

        /**
         * init
         */
        var init = function () {
            optionCheck();

        };

        /**
         * option 체크
         */
        var optionCheck = function () {
            self.option = settings = $.extend({}, defaults, options);

            if ($(self).data('popup') == undefined) {
                sPopupTarget = settings.popupName;
            } else {
                sPopupTarget = $(self).data('popup');
            }


            $('body').append('<div id="' + sPopupTarget + '" class="dim"></div>');

            welPopup = $('#' + sPopupTarget);
            welPopupContent = welPopup.children();


            setTemplate();
        };


        /**
         * option 적용
         */
        var setUI = function (sPopupDataName) {
            // Popup Style 옵션값 셋팅
            welPopupContent.css({
                width: self.option.width,
                padding: self.option.padding
            });
            // Dim Opacity값 셋팅
            if (self.option.dim) {
                welPopup.css({
                    background: "rgba(0,0,0," + self.option.opacity + ")"
                })
            } else {
                welPopup.css({
                    background: "rgba(0,0,0,0)"
                })
            }


        };

        /**
         * 템플릿 세팅
         */
        var setTemplate = function () {
            var hbs, json;

            /**
             * 핸들바 가져오기
             */
            if (settings.urlHbs != null) {
                hbs = $.get(settings.urlHbs);
            }
            /**
             * 데이터 가져오기
             */
            if (settings.urlJson != null) {
                json = $.get(settings.urlJson);
            }

            if (settings.useTpl) {
                $.when(hbs, json).then(function (hbsData, jsonData) {
                    if (jsonData == undefined) {
                        welPopup.append(Handlebars.compile(hbsData[0])());
                    } else {
                        welPopup.append(Handlebars.compile(hbsData[0])(jsonData[0]));
                    }
                    welPopupContent = welPopup.children();
                    eventController();
                });

            } else {
                welPopupContent = welPopup.children();
                eventController();
            }
        };


        /**
         * setPostion
         */
        var setPosition = function () {
            var width = welPopupContent.outerWidth() / 2 * -1;
            var height = welPopupContent.outerHeight() / 2 * -1;
            var offsetX = self.option.offsetX;
            var offsetY = self.option.offsetY;

            if (self.option.position == "center") {
                welPopupContent.css({
                    "left": "50%",
                    "top": "50%",
                    "margin-left": width + offsetX,
                    "margin-top": height + offsetY
                })
            } else {
                welPopupContent.css({
                    "left": "50%",
                    "top": 0,
                    "margin-left": width + offsetX,
                    "margin-top": offsetY
                })
            }
        };

        /**
         * setPostionAnimation
         */
        var setPositionAnimation = function () {
            var animateIn = self.option.effect;
            setPosition();
            welPopupContent.velocity(animateIn);
        };

        /**
         * open
         */
        var open = function (e) {
            var target = $(e.currentTarget);

            settings.onOpen.call(this, settings);


            welPopup.show()
                .addClass('open');

            setUI(sPopupTarget);

            if (self.option.animation) {
                setPositionAnimation();
            } else {
                setPosition();
            }
        };

        /**
         * close
         */
        var close = function (e) {
            var target = $(e.currentTarget);
            if (self.option.animation) {
                target.parent().velocity("reverse", {
                    complete: function () {
                        target.parents('.dim').hide()
                            .removeClass('open');
                    }
                });
            } else {
                target.parents('.dim').hide()
                    .removeClass('open');
            }
        };

        /**
         * event
         */
        var eventController = function () {
            self.on('click', function (event) {
                open(event);
            });
            $(document.body).on('click', '._close', function (event) {
                close(event);
            });
        };

        /**
         * PUBLIC FUNCTIONS
         */
        this.open = function () {
            open();
        };
        this.close = function () {
            close();
        };

        this.setOption = function (opt) {
            self.option = $.extend({}, settings, opt);
        };
        this.getOption = function () {
            return settings;
        };


        /**
         * init
         */
        init();

        return this;
    };

})(jQuery);
