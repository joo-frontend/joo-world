directory.detailProduct = Backbone.View.extend({
    classAirCardSlider: null,
    oDataUserDeviceList: null,
    oAirFurifierDetailInfo: null,
    oAirMultiSensorDetailInfo: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();


        // 제품군에 따라
        // 템플릿팅
        self.$el.html(templete["airPurifier/airPurifier"]());
        this.airFurifierSliderBinding();


        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');

        // 학교 공기상태 슬라이드
        this.schoolAirStateSlider();

        $('.wrap_contents').scrollTop(0)
    },
    userDeviceListSliderBinding: function(){
        var self = this;
        // 센서 갯수 만큼 슬라이드 바인딩

        var data = {
            "resultMsg": "성공",
            "userDeviceList": [
                {
                    "dvcCd": "DVC0000203",
                    "makerCd": "008",
                    "dvcId": "UDC00000000000107390",
                    "dvcNickNm": "공기청정기",
                    "dvcKindNm": "공기청정기",
                    "makerNm": "위닉스",
                    "fncCd": "D53",
                    "fncNm": "청정도",
                    "fncVal": "03",
                    "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                    "actMsg": "공기청정기 10시에 켜줘",
                    "connStatYn": "Y",
                    "fncInfo": "좋음",
                    "title": "실내공기상태",
                    "payUseCd": "01",
                    "statusSign1": "",
                    "controlFncCd1": "D03",
                    "controlFncVal1": "off:꺼져있음,on:켜져있음",
                    "controlIcon1": "power",
                    "controlTemp": "전원 끄기",
                    "sortIndex": "1",
                    "controlStatus": "on",
                    "openDeviceList": [
                        {
                            "fncCd": "D03",
                            "fncNm": "전원",
                            "fncVal": "on",
                            "fncDesc": "off:꺼져있음,on:켜져있음",
                            "controlYn": "N",
                            "fncInfo": "켜져있음",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D51777976497"
                        },
                        {
                            "fncCd": "D04",
                            "fncNm": "차일드락",
                            "fncVal": "off",
                            "fncDesc": "off:꺼짐,on:켜짐",
                            "controlYn": "N",
                            "fncInfo": "꺼짐",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D51777976497"
                        },
                        {
                            "fncCd": "D05",
                            "fncNm": "모드",
                            "fncVal": "02",
                            "fncDesc": "01:자동모드,02:수동모드",
                            "controlYn": "N",
                            "fncInfo": "수동모드",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D51777976497"
                        },
                        {
                            "fncCd": "D19",
                            "fncNm": "풍량",
                            "fncVal": "03",
                            "fncDesc": "01:강풍,02:중풍,03:약풍,05:터보,06:수면풍",
                            "controlYn": "N",
                            "fncInfo": "약풍",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D51777976497"
                        },
                        {
                            "fncCd": "D53",
                            "fncNm": "청정도",
                            "fncVal": "03",
                            "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                            "controlYn": "N",
                            "fncInfo": "좋음",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D51777976497"
                        },
                        {
                            "fncCd": "D20",
                            "fncNm": "플라즈마",
                            "fncVal": "on",
                            "fncDesc": "off:꺼짐,on:켜짐",
                            "controlYn": "N",
                            "fncInfo": "켜짐",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D51777976497"
                        }
                    ],
                    "standDay": 0,
                    "userId": "USR00000000000016916",
                    "rtnDvcId": "D51777976497",
                    "dvcKindCd": "012",
                    "company": "school"
                },
                {
                    "dvcCd": "DVC0000216",
                    "makerCd": "088",
                    "dvcId": "UDC00000000000107363",
                    "dvcNickNm": "공기청정기4",
                    "dvcKindNm": "공기청정기",
                    "makerNm": "SK매직",
                    "fncCd": "D53",
                    "fncNm": "청정도",
                    "fncVal": "04",
                    "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                    "actMsg": "공기청정기4 10시에 켜줘",
                    "connStatYn": "Y",
                    "fncInfo": "매우나쁨",
                    "title": "실내공기상태",
                    "payUseCd": "01",
                    "statusSign1": "",
                    "controlFncCd1": "D03",
                    "controlFncVal1": "off:꺼져있음,on:켜져있음",
                    "controlIcon1": "power",
                    "controlTemp": "전원 끄기",
                    "sortIndex": "-21",
                    "controlStatus": "on",
                    "openDeviceList": [
                        {
                            "fncCd": "D03",
                            "fncNm": "전원",
                            "fncVal": "on",
                            "fncDesc": "off:꺼져있음,on:켜져있음",
                            "controlYn": "N",
                            "fncInfo": "켜져있음",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D85637884641"
                        },
                        {
                            "fncCd": "D05",
                            "fncNm": "모드",
                            "fncVal": "",
                            "fncDesc": "01:자동모드,02:수동모드",
                            "controlYn": "N",
                            "fncInfo": "",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D85637884641"
                        },
                        {
                            "fncCd": "D19",
                            "fncNm": "풍량",
                            "fncVal": "03",
                            "fncDesc": "01:강풍,02:중풍,03:약풍",
                            "controlYn": "N",
                            "fncInfo": "약풍",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D85637884641"
                        },
                        {
                            "fncCd": "D53",
                            "fncNm": "청정도",
                            "fncVal": "04",
                            "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                            "controlYn": "N",
                            "fncInfo": "매우나쁨",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D85637884641"
                        }
                    ],
                    "standDay": 0,
                    "userId": "USR00000000000013901",
                    "rtnDvcId": "D85637884641",
                    "dvcKindCd": "012",
                    "company": "school"
                },
                {
                    "dvcCd": "DVC0000203",
                    "makerCd": "008",
                    "dvcId": "UDC00000000000107391",
                    "dvcNickNm": "공기청정기",
                    "dvcKindNm": "공기청정기",
                    "makerNm": "위닉스",
                    "fncCd": "D53",
                    "fncNm": "청정도",
                    "fncVal": "01",
                    "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                    "actMsg": "공기청정기 10시에 켜줘",
                    "connStatYn": "Y",
                    "fncInfo": "좋음",
                    "title": "실내공기상태",
                    "payUseCd": "01",
                    "statusSign1": "",
                    "controlFncCd1": "D03",
                    "controlFncVal1": "off:꺼져있음,on:켜져있음",
                    "controlIcon1": "power",
                    "controlTemp": "전원 끄기",
                    "sortIndex": "0",
                    "controlStatus": "on",
                    "openDeviceList": [
                        {
                            "fncCd": "D03",
                            "fncNm": "전원",
                            "fncVal": "on",
                            "fncDesc": "off:꺼져있음,on:켜져있음",
                            "controlYn": "N",
                            "fncInfo": "켜져있음",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D93033427537"
                        },
                        {
                            "fncCd": "D04",
                            "fncNm": "차일드락",
                            "fncVal": "off",
                            "fncDesc": "off:꺼짐,on:켜짐",
                            "controlYn": "N",
                            "fncInfo": "꺼짐",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D93033427537"
                        },
                        {
                            "fncCd": "D05",
                            "fncNm": "모드",
                            "fncVal": "02",
                            "fncDesc": "01:자동모드,02:수동모드",
                            "controlYn": "N",
                            "fncInfo": "수동모드",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D93033427537"
                        },
                        {
                            "fncCd": "D19",
                            "fncNm": "풍량",
                            "fncVal": "03",
                            "fncDesc": "01:강풍,02:중풍,03:약풍,05:터보,06:수면풍",
                            "controlYn": "N",
                            "fncInfo": "약풍",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D93033427537"
                        },
                        {
                            "fncCd": "D53",
                            "fncNm": "청정도",
                            "fncVal": "01",
                            "fncDesc": "01:좋음,02:보통,03:좋음,04:매우나쁨",
                            "controlYn": "N",
                            "fncInfo": "좋음",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D93033427537"
                        },
                        {
                            "fncCd": "D20",
                            "fncNm": "플라즈마",
                            "fncVal": "on",
                            "fncDesc": "off:꺼짐,on:켜짐",
                            "controlYn": "N",
                            "fncInfo": "켜짐",
                            "statusSign1": "",
                            "standDay": 0,
                            "rtnDvcId": "D93033427537"
                        }
                    ],
                    "standDay": 0,
                    "userId": "USR00000000000016980",
                    "rtnDvcId": "D93033427537",
                    "dvcKindCd": "012",
                    "company": "school"
                }
            ],
            "resultCd": "1"

        }
        /*console.log(data)*/

        self.$el.find('.area_school_air').append(templete["airPurifier/airPurifySlider"](data));
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
        /*App.model.intariorSensorDetail.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            beforeSend: function(){
            },
            success : function (model, response) {
                self.oAirFurifierDetailInfo = response
            },
            complete : function(){
                // 옵션 초기화
                self.$el.find('.area_box_list').remove();
                // 전원설정
                self.$el.find('.area_box_list').append(templete["airPurifier/settingPower"]());
                // 모드설정
                self.$el.find('.area_box_list').append(templete["airPurifier/settingMode"]());
                // 풍량설정
                self.$el.find('.area_box_list').append(templete["airPurifier/settingVolume"]());
                // 공기정화
                self.$el.find('.area_box_list').append(templete["airPurifier/settingPurify"]());
                // 플라즈마
                self.$el.find('.area_box_list').append(templete["airPurifier/settingPlasma"]());
                // 이온
                self.$el.find('.area_box_list').append(templete["airPurifier/settingIon"]());
                // 먼지센서 감도 설정
                self.$el.find('.area_box_list').append(templete["airPurifier/settingDustSensor"]());
                // 차일드락
                self.$el.find('.area_box_list').append(templete["airPurifier/settingChildLock"]());
                // 꺼짐 예약
                self.$el.find('.area_box_list').append(templete["airPurifier/settingTurnOff"]());
                // 자동 제어 설정
                self.$el.find('.area_box_list').append(templete["airPurifier/settingAutoControls"]());
                // 필터 사용량
                self.$el.find('.area_box_list').append(templete["airPurifier/settingFilterUsed"]());
                // 이력 및 알림
                self.$el.find('.area_box_list').append(templete["airPurifier/settingAlarm"]());
                // 정보
                self.$el.find('.area_box_list').append(templete["airPurifier/settingInfomation"]());
            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
            }
        });*/
    },
    schoolAirStateSlider: function(){
        var self = this;
        this.classAirCardSlider = $('.area_school_air .slider');
        this.classAirCardSlider.bxSlider({
            adaptiveHeight: true,
            preventDefaultSwipeY: true,
            onSliderLoad: function(){

                self.optionTempleteBinding();
            },
            onSlideAfter: function(){
                // 슬라이드 후 해당 기기 옵션 갱신
                self.optionTempleteBinding();
            }
        });
    },

});