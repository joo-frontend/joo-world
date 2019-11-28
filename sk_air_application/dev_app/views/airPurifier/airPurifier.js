directory.airPurifier = Backbone.View.extend({
    classAirCardSlider: null,
    oDataAirFurifierList: null,
    oAirFurifierDetailInfo: null,
    initialize: function () {

        //위닉스 타이탄
        App.view.device_winixTitanSettingAlarm = new directory.device_winixTitanSettingAlarm();
        App.view.device_winixTitanSettingFilterUsed = new directory.device_winixTitanSettingFilterUsed();
        App.view.device_winixTitanSettingInfomation = new directory.device_winixTitanSettingInfomation();
        App.view.device_winixTitanSettingMode = new directory.device_winixTitanSettingMode();
        App.view.device_winixTitanSettingPlasmaWave = new directory.device_winixTitanSettingPlasmaWave();
        App.view.device_winixTitanSettingPower = new directory.device_winixTitanSettingPower();
        App.view.device_winixTitanSettingTurnOff = new directory.device_winixTitanSettingTurnOff();
        App.view.device_winixTitanSettingVolume = new directory.device_winixTitanSettingVolume();


        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();
        self.$el.html(templete["airPurifier/airPurifier"]());

        self.$el.find('#power').html(App.view.device_winixTitanSettingPower.render().$el);
        self.$el.find('#mode').html(App.view.device_winixTitanSettingMode.render().$el);
        self.$el.find('#volume').html(App.view.device_winixTitanSettingVolume.render().$el);
        self.$el.find('#plasmaWave').html(App.view.device_winixTitanSettingPlasmaWave.render().$el);
        self.$el.find('#turnOff').html(App.view.device_winixTitanSettingTurnOff.render().$el);
        self.$el.find('#filterUsed').html(App.view.device_winixTitanSettingFilterUsed.render().$el);
        self.$el.find('#alarm').html(App.view.device_winixTitanSettingAlarm.render().$el);
        self.$el.find('#infomation').html(App.view.device_winixTitanSettingInfomation.render().$el);

        // 학교 공기상태 슬라이드
        this.airFurifierSliderBinding();
        self.optionTempleteBinding();


        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');


        this.schoolAirStateSlider();

        $('.wrap_contents').scrollTop(0)
    },
    airFurifierSliderBinding: function(){
        var self = this;
        // 센서 갯수 만큼 슬라이드 바인딩
        var oRtnDvcIdList = {"rtnDvcIdList": []};
        var oRtnDvcId = {"rtnDvcId": ""};

        App.model.listDevice.fetch({
            method: "GET",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: App.vars.loginId,
            /*data: {"loginId": "smartair3@sk.com"},*/
            success: function (model, response) {
                console.log('@ App.model.listDevice');
                console.log(response);

                for (var i = 0; i < response.dvcList.length; i++) {
                    for (var j = 0; j < response.dvcList[i].clsList.length; j++) {
                        for (var k = 0; k < response.dvcList[i].clsList[j].clsDvcList.length; k++) {
                            if (response.dvcList[i].clsList[j] === undefined) {
                                /*oRtnDvcIdList*/
                                /*oRtnDvcId*/
                            }
                            oRtnDvcId.rtnDvcId = response.dvcList[i].clsList[j].clsDvcList[k].dvcId;
                            oRtnDvcIdList.rtnDvcIdList.push(oRtnDvcId);

                        }
                    }

                }
                console.log(oRtnDvcIdList)
            },
            complete: function () {

            },
            error: function (e) {
            }
        }).done(function () {
            //diplay info
            App.model.deviceDetailRefer.fetch({
                method: "POST",
                headers: {
                    "Authorization": App.vars.token,
                    "Content-Type": "application/json;charset=UTF-8",
                    "company": "school"
                },
                data: JSON.stringify(oRtnDvcIdList),
                success: function (model, response) {
                    console.log('@ App.model.deviceDetailRefer');
                    console.log(response);
                    self.deviceDetailRefer = response;

                    self.$el.find('.area_school_air').append(templete["airPurifier/airPurifySlider"](self.deviceDetailRefer));

                    // response = {
                    //     "timeUseYn": "N",
                    //     "dvcBannerImgUrl": null,
                    //     "homeUseHour": "0",
                    //     "userImgUrl": "2",
                    //     "dvcBannerLink": null,
                    //     "filterBuyUrl": "http://filtershop.winix.com/",
                    //     "makerNm": "위닉스",

                    //     "yserterDtm": "2018.01.02(화)",
                    //     "offDtm": "",
                    //     "dvcImgUrl": "20171204095641489001.jpg",
                    //     "actMsg": "공기청정기2을 등록했습니다.",
                    //     "modeSer": "",
                    //     "resultMsg": "성공",
                    //     "sendMd": "20180102",
                    //     "userDeviceList": [{
                    //         "dvcCd": "DVC0000203",
                    //         "makerCd": "008",
                    //         "dvcImgUrl": "20171204095641489001.jpg",
                    //         "dvcId": "UDC00000000000027321",
                    //         "dvcNickNm": "공기청정기2",
                    //         "dvcKindNm": "공기청정기",
                    //         "makerNm": "위닉스",
                    //         "fncCd": "D53",
                    //         "fncNm": "청정도",
                    //         "fncVal": "03",
                    //         "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                    //         "actMsg": "아리아~ 공기청정기2 켜줘/꺼줘",
                    //         "callCenterPhnNum": "1544-5081",
                    //         "connStatYn": "Y",
                    //         "fncInfo": "좋음",
                    //         "title": "공기청정도",
                    //         "payUseCd": "01",
                    //         "timeUseYn": "N",
                    //         "statusSign1": "",
                    //         "controlFncCd1": "D03",
                    //         "controlFncVal1": "off:꺼져있음,on:켜져있음",
                    //         "controlIcon1": "power",
                    //         "controlTemp": "전원 끄기",
                    //         "sortIndex": "-2",
                    //         "controlStatus": "on",
                    //         "filterBuyUrl": "http://filtershop.winix.com/",
                    //         "openDeviceList": [{
                    //             "fncCd": "D03",
                    //             "fncNm": "전원",
                    //             "fncVal": "on",
                    //             "fncDesc": "off:꺼져있음,on:켜져있음",
                    //             "controlYn": "Y",
                    //             "fncInfo": "켜져있음",
                    //             "statusSign1": "Wh",
                    //             "standDay": 0,
                    //             "rtnDvcId": "D16943363193"
                    //         }, {
                    //             "fncCd": "D04",
                    //             "fncNm": "",
                    //             "fncVal": "off",
                    //             "fncDesc": "",
                    //             "controlYn": "N",
                    //             "fncInfo": "",
                    //             "statusSign1": "",
                    //             "standDay": 0,
                    //             "rtnDvcId": "D16943363193"
                    //         }, {
                    //             "fncCd": "D05",
                    //             "fncNm": "모드",
                    //             "fncVal": "02",
                    //             "fncDesc": "01:자동모드,02:수동모드",
                    //             "controlYn": "Y",
                    //             "fncInfo": "수동모드",
                    //             "statusSign1": "",
                    //             "standDay": 0,
                    //             "rtnDvcId": "D16943363193"
                    //         }, {
                    //             "fncCd": "D19",
                    //             "fncNm": "풍량",
                    //             "fncVal": "03",
                    //             "fncDesc": "",
                    //             "controlYn": "Y",
                    //             "fncInfo": "",
                    //             "statusSign1": "",
                    //             "standDay": 0,
                    //             "rtnDvcId": "D16943363193"
                    //         }, {
                    //             "fncCd": "D53",
                    //             "fncNm": "청정도",
                    //             "fncVal": "03",
                    //             "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                    //             "controlYn": "N",
                    //             "fncInfo": "좋음",
                    //             "statusSign1": "",
                    //             "standDay": 0,
                    //             "rtnDvcId": "D16943363193"
                    //         }, {
                    //             "fncCd": "D20",
                    //             "fncNm": "",
                    //             "fncVal": "on",
                    //             "fncDesc": "",
                    //             "controlYn": "N",
                    //             "fncInfo": "",
                    //             "statusSign1": "",
                    //             "standDay": 0,
                    //             "rtnDvcId": "D16943363193"
                    //         }],
                    //         "standDay": 0,
                    //         "userId": "USR00000000000002875",
                    //         "userGrpId": "GRP00000000000002443",
                    //         "rtnDvcId": "D16943363193",
                    //         "dvcKindCd": "012",
                    //         "company": "school"
                    //     }],
                    //     "otherUseHour": "0",
                    //     "notiCnt": "1",
                    //     "resultCd": "1",
                    //     "sendHm": "2102",
                    //     "callCenterPhnNum": "1544-5081",
                    //     "readYn": "N"
                    // }


                },
                complete: function () {

                },
                error: function (e) {
                }
            });
        });

       /* App.model.intariorSensorDetail.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            beforeSend: function(){
            },
            success : function (model, response) {
                self.oDataAirFurifier = response
            },
            complete : function(){
                // 공기정화 상태 슬라이드
                self.$el.find('.area_school_air').append(templete["airPurifier/airPurifySlider"]());
            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
            }
        });*/

    },
    optionTempleteBinding: function(){
        var self = this;
        // 공기청정기 옵션 바인딩

        // // 전원설정
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingPower"]());
        // // 모드설정
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingMode"]());
        // // 풍량설정
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingVolume"]());
        // // 공기정화
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingPlasmaWave"]());
        // // 꺼짐 예약
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingTurnOff"]());
        // // 필터 사용량
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingFilterUsed"]());
        // // 이력 및 알림
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingAlarm"]());
        // // 정보
        // self.$el.find('.area_box_list').append(templete["winixTitan/settingInfomation"]());

    },
    schoolAirStateSlider: function(){
        var self = this;
        this.classAirCardSlider = $('.area_school_air .slider');
        this.classAirCardSlider.bxSlider({
            adaptiveHeight: true,
            pagerSelector: ".slide_pager",
            onSliderLoad: function () {
                // 실내센서 갯수만큼
               /* for (var i = 0; i < outSensor.length; i++) {
                    airGrd = outSensor[i].airGrd
                    switch (airGrd) {
                        case "좋음" :
                            $('.bx-pager-item').eq(i).addClass('good');
                            break;
                        case "보통" :
                            $('.bx-pager-item').eq(i).addClass('normal');
                            break;
                        case "나쁨" :
                            $('.bx-pager-item').eq(i).addClass('bad');
                            break;
                        case "매우나쁨" :
                            $('.bx-pager-item').eq(i).addClass('worse');
                            break;
                    }
                }*/
            },
            onSlideAfter: function(){
                // 슬라이드 후 해당 기기 옵션 갱신

            }
        });
    },

});