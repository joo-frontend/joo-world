directory.mySchoolDetail = Backbone.View.extend({
    schoolCardSlider: null,
    oMySchoolData: {
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },
    oSchoolCode: {
        "schCd": App.vars.oSchoolCode
    },
    oSchoolDetailInfo: null,
    subHeaderTitle: "",
    initialize: function () {
        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();
        App.util.setReloader();
        this.getSchoolDetailData();
        this.getAllMySchoolList();
        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');

        // 학교 공기상태 슬라이드


        $('.wrap_contents').scrollTop(0);
        App.vars.reload = false;
    },
    getAllMySchoolList: function () {
        var self = this;
        var oSchList = null;
        self.oMySchoolData.loginId = App.vars.loginId;
        App.model.mySchoolList.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: JSON.stringify(self.oMySchoolData),
            success: function (model, response) {
                self.oSchoolList = response;
                console.log(response)
                for (var i = 0; i < self.oSchoolList.schList.length; i++) {
                    // 학교 아이디와 전역변수 학교리스트의 값이 맞으면 시작
                    if (self.oSchoolList.schList[i].schCd == self.oSchoolCode.schCd) {
                        oSchList = self.oSchoolList.schList[i];
                    }
                }
                setTimeout(function(){
                    if (oSchList !== null) {
                        oSchList.clsList.forEach(function (array, index) {
                            for (var j = 0; j < self.$el.find('.area_grade_list li').length; j++) {
                                if (
                                    array.lv == self.$el.find('._registerMySchool').eq(j).data('lv') &&
                                    array.cls == self.$el.find('._registerMySchool').eq(j).data('cls')
                                ) {
                                    self.$el.find('._registerMySchool').eq(j).prop('checked', true)
                                        .attr('id', oSchList.clsList[index].userSchId);
                                }
                            }
                        });
                    }
                },80)

            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        })
    },
    getSchoolDetailData: function (schoolCode) {
        var self = this;
        self.oSchoolCode.schCd = App.vars.oSchoolCode;
        App.model.schoolDetail.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: JSON.stringify(self.oSchoolCode),
            beforeSend: function () {
                /*App.util.pageLoadingShow();*/
            },
            success: function (model, response) {

                App.vars.oSchoolDetailInfo = self.oSchoolDetailInfo = response;

                // self.oSchoolDetailInfo.lvList = [];
                var lvList = [];
                var setLvList = [];
                var schoolAllInfo;
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < self.oSchoolDetailInfo.clsList.length; j++) {
                        if (self.oSchoolDetailInfo.clsList[j].lv == i + 1) {
                            if (lvList[i] == undefined) {
                                lvList[i] = []
                            }
                            lvList[i].push(self.oSchoolDetailInfo.clsList[j])
                        }
                    }
                    if (lvList[i] !== undefined) {
                        setLvList.push(lvList[i]);
                    }
                }
                self.oSchoolDetailInfo.lvList = [];
                for (var i = 0; i < setLvList.length; i++) {
                    self.oSchoolDetailInfo.lvList.push(setLvList[i])
                }

                App.vars.schoolOutInfo = schoolAllInfo = response;
                console.log(response)
                App.vars.sSelectedSchoolTitle = self.oSchoolDetailInfo.schNm + " ";
                self.$el.append(templete["mySchoolDetail/mySchoolDetailSlider"](response));
                self.$el.append(templete["mySchoolDetail/mySchoolDetailList"](schoolAllInfo));
                self.$el.find('.date_today').html(moment().format("MM.DD (dd)"));

                //기기정보
                var deviceList = [];
                for (var k = 0; k < self.oSchoolDetailInfo.outList.length; k++) {
                    if (deviceList[k] === undefined) {
                        deviceList[k] = [];
                    }
                    deviceList[k].push(self.oSchoolDetailInfo.outList[k].dvcId);
                }

                App.util.hidePageReloading();
                App.vars.reload = false;

            },
            complete: function () {
                /*App.util.pageLoadingHide();*/
                var outListInfo = self.oSchoolDetailInfo.outList;
                self.schoolAirStateSlider(outListInfo);
            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    },
    registerMySchool: function (schoolData) {

        var self = this;
        schoolData.schCd = App.vars.oSchoolCode;
        console.log(schoolData)
        App.model.mySchoolRegister.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(schoolData),
            beforeSend: function () {
                /*App.util.pageLoadingShow();*/
            },
            success: function (model, response) {

                self.getAllMySchoolList();
                App.util.toast("등록 되었습니다");
            },
            complete: function () {
                /*App.util.pageLoadingHide();*/

            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    },
    deleteMySchool: function (deleteSchoolId) {
        var self = this;
        console.log(deleteSchoolId)
        App.model.mySchoolDelete.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(deleteSchoolId),
            beforeSend: function () {
                /*App.util.pageLoadingShow();*/
            },
            success: function (model, response) {

                self.getAllMySchoolList();
                App.util.toast("등록이 취소되었습니다");
            },
            complete: function () {
                /*App.util.pageLoadingHide();*/

            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    },
    schoolAirStateSlider: function (outSensor) {
        var isLoop = false;
        var touchEnabled = false;

        if ($('.area_school_air .slider .box_slide').length > 1) {
            isLoop = true;
            touchEnabled = true;
        }

        var airGrd = ''
        this.schoolAirCardSlider = $('.area_school_air .slider');
        this.schoolAirCardSlider.bxSlider({
            adaptiveHeight: true,
            infiniteLoop: isLoop,
            touchEnabled: touchEnabled,
            pagerSelector: ".slide_pager",
            onSliderLoad: function () {

                for (var i = 0; i < outSensor.length; i++) {
                    airGrd = outSensor[i].airGrd
                    switch (airGrd) {
                        case "매우좋음" :
                            $('.bx-pager-item').eq(i).addClass('best');
                            break;
                        case "좋음" :
                        case "청정" :
                            $('.bx-pager-item').eq(i).addClass('good');
                            break;
                        case "보통" :
                        case "저오염" :
                            $('.bx-pager-item').eq(i).addClass('normal');
                            break;
                        case "나쁨" :
                            $('.bx-pager-item').eq(i).addClass('bad');
                            break;
                        case "중오염" :
                            $('.bx-pager-item').eq(i).addClass('harm');
                            break;
                        case "매우나쁨" :
                        case "고오염" :
                            $('.bx-pager-item').eq(i).addClass('worse');
                            break;
                    }
                }
            }
        });
    },
    setSchoolLvClass: function (lv,cls) {

        if (lv <= 6) {
            App.vars.sSelectedLvClass = lv + "학년 " + cls + "반" ;
        } else {
            App.vars.sSelectedLvClass = cls;
        }
        // App.vars.sSelectedLvClass = lvClass;
        // App.vars.aDeviceId = {"rtnDvcIdList": [{"rtnDvcId": dvcId}]}
    }
});