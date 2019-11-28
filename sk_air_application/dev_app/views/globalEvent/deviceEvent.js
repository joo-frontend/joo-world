directory.deviceEventView = Backbone.View.extend({
    initialize: function () {
        this._assignElements();
        this._attachEventHandlers();
    },
    _assignElements: function () {
        this.welDoc = $(document.body);
    },
    _attachEventHandlers: function () {
        //device 공통 이벤트
        //체크박스
        this.welDoc.on('change', '._power input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._childlock input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._plasmawave input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._pollutionlamp input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._uv input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._purifysignlamp input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._removevirus input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._ion input', $.proxy(this.clickCheck, this));
        this.welDoc.on('change', '._humidfy input', $.proxy(this.clickCheck, this));
        
        //버튼
        this.welDoc.on('click', '._mode a', $.proxy(this.clickBtn, this));
        this.welDoc.on('click', '._volume a', $.proxy(this.clickBtn, this));
        this.welDoc.on('click', '._favor a', $.proxy(this.clickBtn, this));

        //필터 구매
        this.welDoc.on('click', '._filterbuyurl', $.proxy(this.FilterBuyUrl, this));

        //제품 가이드
        this.welDoc.on('click', '._dvcguideurl', $.proxy(this.DvcGuideUrl, this));


    },

    /**
     * 전원 제어
     * @param evt
     */
    clickCheck: function (evt) {
        var self = this;
        var target = $(evt.currentTarget);
        var oData = {
            "dvcCd": target.data('dvccd'),          // 제품군 코드
            "rtnDvcId": target.data('rtndvcid'),        // 인터페이스 디바이스 아이디 제어 PK
            "commandType": target.data('fnccd'),                 // 디바이스 기능코드
            "requestValue": ""                 // 컨트롤 밸류
        }
        //todo : polling
        if (target.is(":checked")) {
            //전원 켜짐
            oData.requestValue = "on";
        } else {
            //전원 꺼짐
            oData.requestValue = "off";
        }
        App.util.showLoading();
        App.model.controlDeviceEach.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: JSON.stringify(oData),
            success: function (model, response) {
                if (response.resultCd == 1) {
                    if(
                        $('.area_box_list').data('makernm') === '삼성전자' ||
                        $('.area_box_list').data('makernm') === 'LG전자'
                    ) {
                        self.polling2(response.commandId, target.data('dvccd'), target.data('rtndvcid'));
                    } else {
                        self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));
                    }
                    // self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));
                } else {
                    App.util.hideLoading();
                    App.util.toast(response.resultMsg);
                    self.setDevice(target.data('dvccd'), target.data('rtndvcid'));
                }
            },
            error: function (model, response) {
                App.util.hideLoading();
                // App.util.toast(response.responseJSON.resultMsg);
                App.util.toast(response.resultMsg);
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
                self.setDevice(target.data('dvccd'), target.data('rtndvcid'));
            }
        });
    },
    /**
     * 전원 제어
     * @param evt
     */
    clickBtn: function (evt) {
        var self = this;
        var target = $(evt.currentTarget).parent();
        //todo : polling
        //전원 켜짐
        App.util.showLoading();
        App.model.controlDeviceEach.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: JSON.stringify({
                "dvcCd": target.data('dvccd'),          // 제품군 코드
                "rtnDvcId": target.data('rtndvcid'),        // 인터페이스 디바이스 아이디 제어 PK
                "commandType": target.data('fnccd'),                 // 디바이스 기능코드
                "requestValue": target.data('fncval')                // 컨트롤 밸류
            }),
            success: function (model, response) {
                if (response.resultCd == 1) {
                    if(
                        $('.area_box_list').data('makernm') === '삼성전자' ||
                        $('.area_box_list').data('makernm') === 'LG전자'
                    ) {
                        self.polling2(response.commandId, target.data('dvccd'), target.data('rtndvcid'));
                    } else {
                        self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));
                    }
                    // self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));
                    // if((self.makerCd == "017") ||
                    //     (self.makerCd == "031" && self.getDeviceFocus().hasClass('smart_device_airfresh')) ||
                    //     (self.makerCd == "031" && self.getDeviceFocus().hasClass('smart_device_aircondition'))){
                    //     commandPolling = "commandPollingSecondModel"; // 폴링2 모델
                    // }else{
                    //     commandPolling = "commandPollingModel"; // 폴링1 모델
                    // }
                } else {
                    App.util.hideLoading();
                    App.util.toast(response.resultMsg);
                    self.setDevice(target.data('dvccd'), target.data('rtndvcid'));
                }
            },
            error: function (model, response) {
                App.util.hideLoading();
                App.util.toast(response.resultMsg);
                self.setDevice(target.data('dvccd'), target.data('rtndvcid'));
            }
        });
    },
    polling1: function (commandId, dvccd, rtndvcid) {
        var self = this;
        var count = 0;
        clearInterval(App.timer.polling1);
        App.timer.polling1 = setInterval(function () {
            App.model.commandPolling.fetch({
                headers: {
                    "Authorization": App.vars.token,
                    "Content-Type": "application/json;charset=UTF-8",
                    "company": "school"
                },
                data: {
                    "commandId": commandId          // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId
                },
                success: function (model, response) {
                    if (response.pollingList.length > 0) {
                        if (response.pollingList[0].result == 1) {

                            if (response.pollingList[0].fncCd == "D03") {
                                if (response.pollingList[0].fncVal == "on") {
                                    var isStatus = true;
                                } else {
                                    var isStatus = false;
                                }
                            }


                            App.util.hideLoading();
                            clearInterval(App.timer.polling1);
                            self.setDevice(dvccd, rtndvcid, isStatus);


                        } else if (response.pollingList[0].result == 0) {

                            if (count < 10) {
                                count++;
                            } else {
                                clearInterval(App.timer.polling1);
                                App.util.hideLoading();
                                var isStatus = false;
                                if (isStatus === true) {
                                    self.statusOn();
                                } else if (isStatus === false) {
                                    self.statusOff();
                                }
                            }
                        } else {
                            App.util.hideLoading();
                            App.util.toast(response.resultMsg);
                            self.setDevice(dvccd, rtndvcid);
                            clearInterval(App.timer.polling1);
                        }
                    }

                    // this.statusOn();
                    // this.statusOff();
                }
            });
        }, 1000);

    },
    polling2: function (commandId, dvccd, rtndvcid) {
        var self = this;
        var count = 0;
        clearInterval(App.timer.polling1);
        App.timer.polling2 = setInterval(function () {
            App.model.commandPolling_2.fetch({
                headers: {
                    "Authorization": App.vars.token,
                    "Content-Type": "application/json;charset=UTF-8",
                    "company": "school"
                },
                data: {
                    "commandId": commandId          // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId
                },
                success: function (model, response) {
                    if (response.pollingList.length > 0) {
                        if (response.pollingList[0].result == 1) {


                            if (response.pollingList[0].fncCd == "D03") {
                                if (response.pollingList[0].fncVal == "on") {
                                    var isStatus = true;
                                } else {
                                    var isStatus = false;
                                }
                            }


                            App.util.hideLoading();
                            clearInterval(App.timer.polling2);
                            self.setDevice(dvccd, rtndvcid);


                        } else if (response.pollingList[0].result == 0) {
                            if (count < 10) {
                                count++;
                            } else {
                                clearInterval(App.timer.polling2);
                                App.util.hideLoading();
                                var isStatus = false;
                                if (isStatus === true) {
                                    self.statusOn();
                                } else if (isStatus === false) {
                                    self.statusOff();
                                }
                            }
                        } else {
                            App.util.hideLoading();
                            App.util.toast(response.resultMsg);
                            self.setDevice(dvccd, rtndvcid);
                            clearInterval(App.timer.polling2);
                        }
                    }

                }
            });
        }, 1000);
    },

    setDevice: function (nIndex) {
        var self = this;
        var newIndex = App.view.schoolDetail.detailSlider.getCurrentSlide();
        var code = App.vars.oSchoolDetail.oDeviceInfo[newIndex].dvcCd;
        var rtnDvcId = App.vars.oSchoolDetail.oDeviceInfo[newIndex].rtnDvcId;
        var data = App.vars.oSchoolDetail.oDeviceInfo[newIndex];

        /**
         * 학교 기기 상세 조회
         */
        App.model.deviceDetailRefer.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: JSON.stringify(App.vars.oSchoolDetail.rtnDvcIdList[newIndex]),
            success: function (model, response) {
                var getDeviceControl = App.util.getDeviceControl(code, response.userDeviceList[0]);
                var welSensorInfoList = getDeviceControl.$el.find('.box_air_all ul');

                // 센서 정보 갯수에따라 그리드 클래스 추가
                welSensorInfoList.addClass('col' + welSensorInfoList.find('li').length);
                $('.wrap_area_box_list').empty()
                    .html(getDeviceControl.$el);
                var isStatus;
                response.userDeviceList[0].openDeviceList.forEach(function (a, i) {
                    if (a.fncCd === "D03") {
                        if (a.fncVal === "on") {
                            isStatus = true;
                        } else {
                            isStatus = false;
                        }
                    }
                });

                if (isStatus === true) {
                    self.statusOn();
                } else if (isStatus === false) {
                    self.statusOff();
                }

                if (response.dvcKindCd == "032") {
                    App.view.schoolDetail.setChart(newIndex);
                }


                App.util.hideLoading();

            },
            error: function (e) {
                App.util.hideLoading();
            }
        });
    },
    statusOn: function () {
        var welList = $('.wrap_area_box_list');
        var welTopArea = $('.area_school_air');
        welList.find('.box_card').removeClass('off');
        welTopArea.find('.slider').find('.active').removeClass('off');
        welTopArea.find('.bx-pager .bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).removeClass('off');
    },
    statusOff: function () {
        var welList = $('.wrap_area_box_list');
        var welTopArea = $('.area_school_air');
        // welList.find('.box_card').addClass('off');
        //welTopArea.find('.bx-pager .bx-pager-item').addClass('off');


        App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx].openDeviceList.forEach(function (array, index) {
            if (array.fncCd === 'D03') {
                if(array.fncVal =="off"){
                    welList.find('.box_card').each(function () {
                        if (
                            $(this).hasClass('_filterused') === true ||
                            $(this).hasClass('_alarm') === true ||
                            $(this).hasClass('_infomation') === true
                        ) {
                            return false;
                        } else {
                            $(this).addClass('off');
                        }
                    });
                    welList.find('input').prop('checked', false);
                    welTopArea.find('.slider').find('.active').addClass('off')
                    welTopArea.find('.bx-pager .bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).addClass('off');
                }

            }
        })



    },
    FilterBuyUrl : function (e) {
        var target = $(e.currentTarget);
        var url = target.children().data("link");

        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.fnName(url);
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            var message = {
                command: "fnName",
                url: url
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        } else {
            // pc
            alert(url)
        }
    },
    DvcGuideUrl : function (e) {
        var target = $(e.currentTarget);
        var url = target.children().data("link");

        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.fnName(url);
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            var message = {
                command: "fnName",
                url: url
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        } else {
            // pc
            alert(url)
        }
    }


});
