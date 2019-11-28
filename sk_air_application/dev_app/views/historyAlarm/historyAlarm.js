directory.historyAlarm = Backbone.View.extend({
    schoolCardSlider: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;

        // 헤더 바인딩
        App.view.subHeader.render();

        $('.wrap_contents').scrollTop(0);


        //api
        App.model.deviceOpr.fetch({
            method: "GET",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: {
                "count": 20,
                "rtnDvcId": App.vars.rtnDvcId,

            },
            //data: JSON.stringify(App.vars.oDeviceId),
            success: function (model, response) {
                console.log('@ App.model.deviceOpr');
                console.log(response);


                self.oDeviceOpr = response;


                /*                self.oDeviceOpr = {
                                    "resultMsg": "성공",
                                    "notiCnt": "0",
                                    "resultCd": "1",
                                    "resultList": [
                                        {
                                            "userId": "USR00000000000017005",
                                            "rtnDvcId": "D42307234779",
                                            "dvcKindCd": "012",
                                            "fileNm": "https://imgstg.sktsmarthome.com/mobile/IMG20180109195722.jpg",
                                            "msgNo": "MSG015",
                                            "msgSust": "DVCNM이 해제되었습니다.",
                                            "sendSer": "1733480",
                                            "msgClassNo": "EVT",
                                            "msgChCd": "PSH",
                                            "standDay": 0,
                                            "readYn": "2018-01-10 10:24:10",
                                            "dvcCd": "DVC0000173",
                                            "dvcNm": "위닉스(타워)",
                                            "sendMd": "20180110",
                                            "sendHm": "0925",
                                            "actMsg": "공기청정기4이 해제되었습니다.",
                                            "emgYn": "N",
                                            "viewDtm": "2018-01-10 10:24:10",
                                            "count": 0
                                        },
                                        {
                                            "userId": "USR00000000000017005",
                                            "rtnDvcId": "D42307234779",
                                            "dvcKindCd": "012",
                                            "fileNm": "https://imgstg.sktsmarthome.com/mobile/IMG20180109195722.jpg",
                                            "msgNo": "MSG972",
                                            "msgSust": "기기에서 DVCNM의 전원을 껐습니다.",
                                            "sendSer": "1733334",
                                            "msgClassNo": "EVT",
                                            "msgChCd": "PSH",
                                            "standDay": 0,
                                            "readYn": "2018-01-10 10:24:10",
                                            "dvcCd": "DVC0000173",
                                            "dvcNm": "위닉스(타워)",
                                            "sendMd": "20180109",
                                            "sendHm": "2203",
                                            "actMsg": "기기에서 공기청정기4의 전원을 껐습니다.",
                                            "emgYn": "N",
                                            "viewDtm": "2018-01-10 10:24:10",
                                            "count": 0
                                        }
                                    ]
                                };*/

                // 템플릿팅
                if (response.resultList.length <= 0) {
                    self.$el.html(templete["historyAlarm/historyAlarmNone"]());
                } else {
                    self.$el.html(templete["historyAlarm/historyAlarm"](self.oDeviceOpr));
                }

                // 컨텐츠 바인딩
                if (response.resultList.length <= 0) {
                    $('.wrap_contents').html(self.$el);
                } else {
                    $('.wrap_contents').html(self.$el)
                        .addClass('wrap_contents_gray');
                }

                App.util.hideLoading();
            },
            complete: function () {
                App.util.hideLoading();
            },
            error: function (e, response) {
                /*App.util.toast(response.responseJSON.resultMsg)*/
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();

            }
        });

    }
});