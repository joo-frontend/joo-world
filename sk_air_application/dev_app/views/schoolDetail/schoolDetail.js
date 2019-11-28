directory.schoolDetail = Backbone.View.extend({
    detailSlider: null,
    sRtnDvcId: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;

        // App.util.toast(window.location.href.split("?")[1])
        App.util.setReloader();

        if (App.vars.reload !== undefined) {
            if (App.vars.reload !== true) {
                App.util.showLoading();
            } else {
                App.vars.reload = false;
            }
        } else {
            App.util.showLoading();
        }

        // 헤더 바인딩
        App.view.subHeader.render();
        self.$el.html(templete["schoolDetail/schoolDetail"]());

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).addClass('wrap_contents_gray').scrollTop(0);

        // 학교 공기상태 슬라이드
        this.sliderBinding();

    },
    sliderBinding: function () {
        var self = this;
        // 센서 갯수 만큼 슬라이드 바인딩
        var oRtnDvcIdList = App.vars.oDeviceId;

        async.waterfall([
            /**
             * 학교 기기 목록 조회
             */
            function (outerCallback) {
                // },
                // function (response, callback) {
                /**
                 * 학교 기기 상세 조회
                 */
                    // App.util.toast(App.vars.oDeviceId)

                var count = 0;
                async.whilst(
                    function () {
                        return count < App.vars.oSchoolDetail.rtnDvcIdList.length;
                    },
                    function (callback) {
                        // console.log('count : ' + count);

                        App.vars.oDeviceId = App.vars.oSchoolDetail.rtnDvcIdList[count];


                        App.model.deviceDetailRefer.fetch({
                            method: "POST",
                            headers: {
                                "Authorization": App.vars.token,
                                "Content-Type": "application/json",
                                "company": "school"
                            },
                            data: JSON.stringify(App.vars.oDeviceId),
                            success: function (model, response) {

                                if (App.vars.oSchoolDetail.rtnDvcIdList.length == App.vars.oSchoolDetail.oDeviceInfo.length) {
                                    App.vars.oSchoolDetail.oDeviceInfo = [];
                                    App.vars.oSchoolDetail.oDeviceInfo.push(response.userDeviceList[0]);
                                } else if (App.vars.oSchoolDetail.rtnDvcIdList.length != App.vars.oSchoolDetail.oDeviceInfo.length) {
                                    App.vars.oSchoolDetail.oDeviceInfo.push(response.userDeviceList[0]);
                                }


                                console.log('@ App.model.deviceDetailRefer');
                                console.log(response);
                                console.log('App.vars.oSchoolDetail.oDeviceInfo');
                                console.log(App.vars.oSchoolDetail.oDeviceInfo);
                                App.vars.oSchoolDetail.oDeviceInfoRoot.push(response);


                                count++;
                                App.util.hidePageReloading();
                                App.vars.reload = false;
                                callback(null, "");
                            },
                            error: function (e) {
                                App.util.hideLoading();
                                App.util.openNetworkErrorPopup();
                            }
                        });
                    },
                    function (err, n) {
                        count = 0;
                        outerCallback(null, null);
                    }
                );

            },
            function (response, callback) {

                /**
                 * 기기 컨트롤러 호출
                 */
                self.deviceDetailRefer = App.vars.oSchoolDetail.oDeviceInfo;

                var data = App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx];
                var code = data.dvcCd;
                var turnOffMode = data.modeSer || "";

                var getDeviceControl = App.util.getDeviceControl(code, data, turnOffMode);
                // self.$el.find('.area_box_list').html(getDeviceControl.$el);


                // if(data != undefined){
                //     if(data.connStatYn == "N"){
                //         var welList = $('.wrap_area_box_list');
                //         $('.area_box_list').append();
                //         welList.find('.box_card').addClass('off');
                //         welList.find('.box_card').find('input').prop('checked', false);
                //         $('.slider').find('.box_slide').addClass('off');
                //         $('.bx-pager-item').addClass('off');
                //     } else {
                //         var welList = $('.wrap_area_box_list');
                //         $('.area_box_list').append('<span>test</span>');
                //         welList.find('.box_card').addClass('off');
                //         welList.find('.box_card').find('input').prop('checked', false);
                //         $('.slider').find('.box_slide').addClass('off');
                //         $('.bx-pager-item').addClass('off');
                //     }
                // }

                callback(null, getDeviceControl);

            }
        ], function (err, getDeviceControl) {
            var welSensorInfoList = getDeviceControl.$el.find('.box_air_all ul');
            App.vars.dc = welSensorInfoList;

            self.$el.find('.area_school_air').append(templete["schoolDetail/schoolDetailSlider"](App.vars.oSchoolDetail));
            self.schoolAirStateSlider();

            // 센서 정보 갯수에따라 그리드 클래스 추가
            welSensorInfoList.attr('class', 'clearfix').addClass('col' + welSensorInfoList.find('li').length);
            self.$el.find('.wrap_area_box_list').html(getDeviceControl.$el);

            setTimeout(function () {
                if (App.vars.oSchoolDetail !== undefined) {

                    if (App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx].connStatYn === "N") {
                        var welList = $('.wrap_area_box_list');
                        $('.area_box_list').prepend(templete["error/deviceConnectError"]);

                        welList.find('.box_card').each(function () {
                            welList.find('.box_card').addClass('off');
                            if (welList.find('.box_card').hasClass('net_error') === true) {
                                welList.find('.net_error').removeClass('off');
                            }
                        });

                        welList.find('.box_card').find('input').prop('checked', false);
                        $('.slider').find('.box_slide').eq(App.vars.oSchoolDetail.nIdx).addClass('off');
                        $('.bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).addClass('off');
                    }
                }
            }, 10);


            App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx].openDeviceList.forEach(function (array, index) {
                if (array.fncCd === 'D03') {
                    switch (array.fncVal) {
                        case "off" :
                            App.view.deviceEventView.statusOff();
                            break;
                        case "on" :
                            App.view.deviceEventView.statusOn();
                            break;
                    }
                }
            });


            App.util.hideLoading();

        });
    },

    setChart : function (nIdx) {
        var self = this;
        /**
         * set Chart
         */
        App.vars.oDeviceInfoDeviceId = App.vars.oSchoolDetail.dvcIdList[nIdx];


        App.model.intariorSensorChartData.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: JSON.stringify(App.vars.oDeviceInfoDeviceId),
            success: function (model, response) {

                App.vars.oSchoolDetail.intariorSensorChartData = response;
                console.log('@ App.model.intariorSensorChartData');
                console.log(response);

                self.airMultiSensorGraph(App.vars.oSchoolDetail.intariorSensorChartData);

                //count++;
                //callback(null, "");
            },
            error: function (e) {
                App.util.hideLoading();
                App.util.openNetworkErrorPopup();
            }
        });
    },
    schoolAirStateSlider: function () {
        var self = this;
        var isLoop = false;
        var touchEnabled = false;

        if ($('.area_school_air .slider .box_slide').length > 1) {
            isLoop = true;
            touchEnabled = true;
        }


        var slider = this.detailSlider = $('.area_school_air .slider').bxSlider({
            adaptiveHeight: true,
            infiniteLoop: false,
            touchEnabled: touchEnabled,
            // startSlide: App.vars.nSlideIndex,
            startSlide: App.vars.oSchoolDetail.nIdx,
            preventDefaultSwipeY: true,
            onSliderLoad: function (currentIndex) {

                App.vars.oSchoolDetail.oDeviceInfo.forEach(function (value, index) {
                    var airStateColor;
                    if (value.fncInfo == "01" || value.fncInfo == "02" || value.fncInfo == "03" || value.fncInfo == "04") {
                        switch (value.fncInfo) {
                            case "01" :
                                airStateColor = "good";
                                break;
                            case "02" :
                                airStateColor = "normal";
                                break;
                            case "03" :
                                airStateColor = "bad";
                                break;
                            case "04" :
                                airStateColor = "worse";
                                break;
                        }
                    } else {
                        switch (value.fncInfo) {
                            case "매우좋음" :
                                airStateColor = "best";
                                break;
                            case "좋음" :
                            case "청정" :
                                airStateColor = "good";
                                break;
                            case "보통" :
                            case "저오염" :
                                airStateColor = "normal";
                                break;
                            case "나쁨" :
                                airStateColor = "bad";
                                break;
                            case "중오염" :
                                airStateColor = "harm";
                                break;
                            case "매우나쁨" :
                            case "고오염" :
                                airStateColor = "worse";
                                break;
                        }
                    }

                    App.vars.oSchoolDetail.oDeviceInfo[0].openDeviceList.forEach(function (array, index) {
                        if (
                            array.fncCd === 'D318' ||
                            array.fncCd === 'D238'
                        ) { //현대 어웨어 분기처리
                            $('#pointFncVal').html(array.fncVal);
                        } else if (array.fncCd === 'D239') {
                            $('#diffStatus').html(array.fncVal);
                        }
                    });


                    App.vars.oSchoolDetail.oDeviceInfo[index].openDeviceList.forEach(function (array, index) {
                        if (array.fncCd === 'D03') {
                            if (array.fncVal == "off") {
                                airStateColor = "off";
                            }
                        }
                    });

                    $('.bx-pager').find('.bx-pager-item').eq(index).addClass(airStateColor);
                });
                $('.area_school_air .slider .box_slide').eq(currentIndex + 1).addClass('active').siblings().removeClass('active');
                //App.vars.oSchoolDetail.nIdx = 0;
                self.getRtnDvcId(currentIndex);
                self.setChart(currentIndex);
            },
            onSlideBefore: function (el, oldIndex, newIndex) {
                $('.area_school_air .slider .box_slide').eq(newIndex + 1).addClass('active').siblings().removeClass('active');
                App.view.deviceEventView.setDevice(newIndex);
                self.getRtnDvcId(newIndex);
                App.vars.oSchoolDetail.nIdx = newIndex;
            },
            onSlideAfter: function (el, oldIndex, newIndex) {
                // self.airMultiSensorGraph(App.vars.oSchoolDetail.intariorSensorChartData);
                App.vars.oSchoolDetail.nIdx = newIndex;
                console.log(newIndex);
                // App.view.deviceEventView.setDevice();
                // console.log($('.box_air_all ul li').length);

                var $box = self.$el.find('.box_air_all ul');
                $box.attr('class', 'clearfix').addClass('col' + $box.find('li').length);

                if (App.vars.oSchoolDetail !== undefined) {
                    if (App.vars.oSchoolDetail.oDeviceInfo[newIndex].connStatYn === "N") {
                        var welList = $('.wrap_area_box_list');
                        $('.area_box_list').prepend(templete["error/deviceConnectError"]);
                        welList.find('.box_card').each(function () {
                            welList.find('.box_card').addClass('off');
                            if (welList.find('.box_card').hasClass('net_error') === true) {
                                welList.find('.net_error').removeClass('off');
                            }
                        });
                        welList.find('.box_card').find('input').prop('checked', false);
                        $('.area_school_air').find('.slider').find('.active').addClass('off')
                        $('.bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).addClass('off');
                    }
                }
            }
        });
    },
    getGradeStartByZero: function (bad, nomal, good, nowVal) {

        if (nowVal == "보통") {
            return "grade2";

        } else if (nowVal == "" || nowVal == undefined) {
            return "";
        } else {
            if (nowVal <= good) {
                return "grade1";
            } else if (nowVal <= nomal) {
                return "grade2";
            } else if (nowVal <= bad) {
                return "grade3";
            } else {
                return "grade4";
            }
        }

    },

    getGradeStartBySelectedNum: function (tooBad1, tooBad2, bad1, bad2, nomal1, nomal2, nowVal) {
        if (nowVal == "보통") {
            return "grade2";
        } else if (nowVal == "" || nowVal == undefined) {
            return "";
        } else {
            if (nowVal <= tooBad1 || nowVal >= tooBad2) {
                return "grade4"
            } else if (nowVal <= bad1 || nowVal >= bad2) {
                return "grade3"
            } else if (nowVal <= nomal1 || nowVal >= nomal2) {
                return "grade2"
            } else {
                return "grade1"
            }
        }

    },
    getRtnDvcId: function (index) {
        var self = this;
        App.vars.sRtnDvcId = App.vars.oSchoolDetail.oDeviceInfo[index].rtnDvcId;
    },
    // airMultiSensorGraph: function (data) {
    //
    //     var self = this;
    //
    //
    //     try {
    //         //var data = [10.5, 9, 11];
    //
    //         var todayScore = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    //         var todayTm = [];
    //         var yesterdayScore = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    //         var yesterdayTm = [];
    //         var todayMaxScore = null;
    //         var todayMinScore = null;
    //         var yesterdayMaxScore = null;
    //         var yesterdayMinScore = null;
    //         var yesterdayLastIndex = 0;
    //         var todayLastIndex = 0;
    //         var seriesDataAll = [];
    //
    //         /**
    //          * today 데이터 처리
    //          */
    //
    //         data.chart.today.forEach(function (a, i) {
    //             todayScore[(a.tm * 1) - 1] = a.score * 1;
    //         });
    //         console.log('@@@ todayScore');
    //         console.log(todayScore);
    //         //
    //         // todayScore = [
    //         //     0,
    //         //     30,
    //         //     30,
    //         //     10,
    //         //     10,
    //         //     20,
    //         //     0,
    //         //     30,
    //         //     20,
    //         //     20,
    //         //     20,
    //         //     30,
    //         //     30,
    //         //     30,
    //         //     30,
    //         //     30,
    //         //     20,
    //         //     20,
    //         //     10,
    //         //     20,
    //         //     30,
    //         //     30,
    //         //     30,
    //         //     48
    //         // ];
    //
    //         for (var j = 0; j < todayScore.length; j++) {
    //             if (todayScore[j] != null) {
    //                 if (todayMinScore >= todayScore[j] || todayMinScore == null) {
    //                     todayMinScore = todayScore[j];
    //                 }
    //                 if (todayMaxScore < todayScore[j] || todayMaxScore == null) {
    //                     todayMaxScore = todayScore[j];
    //                 }
    //                 todayLastIndex = j;
    //             }
    //         }
    //
    //         var todayMinScoreIndex;
    //         var todayMaxScoreIndex;
    //
    //         if (todayMinScore != null) {
    //             todayMinScoreIndex = todayScore.indexOf(todayMinScore);
    //         }
    //         if (todayMaxScore != null) {
    //             todayMaxScoreIndex = todayScore.indexOf(todayMaxScore);
    //         }
    //
    //         todayScore[todayMinScoreIndex] = {
    //             y: todayScore[todayMinScoreIndex],
    //             marker: {enabled: true, radius: 3},
    //             color: '#000000'
    //         };
    //         todayScore[todayMaxScoreIndex] = {
    //             y: todayScore[todayMaxScoreIndex],
    //             marker: {enabled: true, radius: 3},
    //             color: '#000000'
    //         };
    //
    //
    //         /**
    //          * 선색 정의
    //          *
    //          */
    //
    //         var oColor = {
    //             linearGradient: {
    //                 x1: 0,
    //                 y1: 0,
    //                 x2: 0,
    //                 y2: 1
    //             },
    //             stops: [
    //                 [0, '#4aa6ec'],
    //                 [0.33, '#5cc37e'],
    //                 [0.66, '#ff9f3e'],
    //                 [1, '#e1423e']
    //             ]
    //         };
    //
    //         if (todayMinScoreIndex == todayMaxScoreIndex) {
    //             oColor = '#4aa6ec'
    //         }
    //
    //
    //
    //         /**
    //          * 스마일 위치값
    //          */
    //         var nPostionMarker = todayScore[todayLastIndex].y;
    //         if (nPostionMarker == undefined) {
    //             nPostionMarker = todayScore[todayLastIndex] + 5;
    //         }
    //         /**
    //          * 스마일 표시
    //          */
    //         var smileMarker = "";
    //         if (nPostionMarker > 80) {
    //             smileMarker = "good";
    //         } else if (todayScore[todayLastIndex] > 70) {
    //             smileMarker = "normal";
    //         } else if (todayScore[todayLastIndex] > 60) {
    //             smileMarker = "bad";
    //         } else {
    //             smileMarker = "worse";
    //         }
    //
    //
    //         /**
    //          * yesterday 데이터 처리
    //          */
    //
    //         data.chart.yesterday.forEach(function (a, i) {
    //             yesterdayScore[(a.tm * 1) - 1] = a.score * 1;
    //         });
    //
    //         // yesterdayScore = [
    //         //     10,
    //         //     20,
    //         //     30,
    //         //     40,
    //         //     50,
    //         //     60,
    //         //     70,
    //         //     80,
    //         //     90,
    //         //     20,
    //         //     10,
    //         //     20,
    //         //     30,
    //         //     40,
    //         //     50,
    //         //     60,
    //         //     70,
    //         //     80,
    //         //     90,
    //         //     10,
    //         //     20,
    //         //     30,
    //         //     40
    //         // ];
    //
    //         for (var j = 0; j < yesterdayScore.length; j++) {
    //             if (yesterdayScore[j] != null) {
    //                 if (yesterdayMinScore >= yesterdayScore[j] || yesterdayMinScore == null) {
    //                     yesterdayMinScore = yesterdayScore[j];
    //                 }
    //                 if (yesterdayMaxScore < yesterdayScore[j] || yesterdayMaxScore == null) {
    //                     yesterdayMaxScore = yesterdayScore[j];
    //                 }
    //                 yesterdayLastIndex = j;
    //             }
    //         }
    //
    //         var yesterdayMinScoreIndex = null;
    //         var yesterdayMaxScoreIndex = null;
    //
    //         if (yesterdayMinScore != null) {
    //             yesterdayMinScoreIndex = yesterdayScore.indexOf(yesterdayMinScore);
    //         }
    //         if (yesterdayMaxScore != null) {
    //             yesterdayMaxScoreIndex = yesterdayScore.indexOf(yesterdayMaxScore);
    //         }
    //
    //         yesterdayScore[yesterdayMinScoreIndex] = {
    //             y: yesterdayScore[yesterdayMinScoreIndex],
    //             marker: {enabled: true, radius: 3},
    //             color: '#727272',
    //             dataLabels: {
    //                 enabled: true,
    //                 x: -1,
    //                 y: 0,
    //                 /* shadow: true,*/
    //                 style: {
    //                     fontWeight: 'bold',
    //                     fontSize: 12,
    //                     color: '#dc3b38'
    //                 }
    //             }
    //         };
    //         yesterdayScore[yesterdayMaxScoreIndex] = {
    //             y: yesterdayScore[yesterdayMaxScoreIndex],
    //             marker: {enabled: true, radius: 3},
    //             color: '#727272',
    //             dataLabels: {
    //                 enabled: true,
    //                 y: 1,
    //                 /* shadow: true,*/
    //                 style: {
    //                     fontWeight: 'bold',
    //                     fontSize: 12,
    //                     color: '#44a9f0'
    //                 }
    //             }
    //         };
    //
    //         App.vars.chart = $('#line_chart').empty().highcharts({
    //             chart: {
    //                 type: 'spline',
    //                 marginTop: 50,
    //                 marginLeft: 20,
    //                 marginRight: 20,
    //                 marginBottom: 50,
    //                 height: 220
    //             },
    //             credits: {
    //                 enabled: false
    //             },
    //             title: {
    //                 text: ''
    //             },
    //             xAxis: {
    //                 type: 'time',
    //                 gridLineWidth: 0,
    //                 categories: [
    //                     '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    //                     '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    //                 min: 0,
    //                 title: {
    //                     text: '(시간대 평균)',
    //                     align: 'high',
    //                     style: {
    //                         fontSize: '10'
    //                     }
    //                 }
    //             },
    //             legend: {
    //                 enabled: false
    //             },
    //             yAxis: {
    //                 min: 0,
    //                 title: {
    //                     text: null
    //                 },
    //                 gridLineWidth: 0,
    //                 minorGridLineWidth: 0, max: 100,
    //                 lineWidth: 0,
    //                 labels: {
    //                     enabled: false
    //                 }
    //             },
    //             tooltip: {
    //                 enabled: false,
    //                 useHTML: true,
    //                 style: {
    //                     zIndex: 9999
    //                 },
    //                 backgroundColor: 'rgba(247,247,247,0.7)'
    //             },
    //             allowHTML: true,
    //
    //             /**
    //              * series
    //              */
    //             series: [{
    //                 type: 'areaspline',
    //                 name: '어제',
    //                 dashStyle: 'ShortDot',
    //                 color: '#d3d4d7',
    //                 fillColor: '#f6f7f9',
    //                 marker: {
    //                     enabled: false,
    //                     radius: 2
    //                 },
    //                 // keys: ['y', 'id'],
    //                 dataLabels: {
    //                     enabled: false
    //                 },
    //                 data: yesterdayScore
    //             }, {
    //                 name: '오늘',
    //                 color: oColor,
    //                 marker: {
    //                     enabled: false,
    //                     'symbol': 'circle',
    //                     color: '#000',
    //                     fillColor: '#000',
    //                     radius: 2
    //                 },
    //                 data: todayScore
    //             }],
    //
    //             /**
    //              * annotations
    //              */
    //
    //             annotations: [
    //
    //                 {
    //                     labelOptions: {
    //                         useHTML: true,
    //                         format: '<div class="tooltip-marker-low"><a href="#">' + todayScore[todayMinScoreIndex].y + '</a></div>',
    //                         backgroundColor: 'transparent',
    //                         //verticalAlign: 'bottom',
    //                         //padding:6,
    //                         borderWidth: 0,
    //                         x: -18,
    //                         y: 10
    //                         //borderColor:'rgba(0,0,0,0)',
    //                         //distance:-20
    //                     },
    //                     labels: [{
    //                         point: {
    //                             xAxis: 0,
    //                             yAxis: 0,
    //                             x: todayMinScoreIndex,
    //                             y: todayScore[todayMinScoreIndex].y
    //                         },
    //                         style: {
    //                             fontSize: '10px'
    //                         }
    //                     }]
    //                 },
    //                 {
    //                     labelOptions: {
    //                         useHTML: true,
    //                         format: '' + '<div class="overlay_marker ' + smileMarker + '"></div>',
    //                         backgroundColor: Highcharts.color('none').setOpacity(0).get(),
    //                         borderWidth: 0,
    //                         x: -2,
    //                         y: -60
    //                     }
    //                     , labels: [{
    //                         point: {
    //                             xAxis: 0,
    //                             yAxis: 0,
    //                             x: todayLastIndex,
    //                             y: nPostionMarker /*- 7*/
    //                         }
    //                     }]
    //                 },
    //                 {
    //                     labelOptions: {
    //                         useHTML: true,
    //                         format: '<div class="tooltip-marker-high"><a href="#">' + todayScore[todayMaxScoreIndex].y + '</a></div>',
    //                         backgroundColor: 'transparent',
    //                         //verticalAlign: 'bottom',
    //                         //padding:6,
    //                         borderWidth: 0,
    //                         x: -18,
    //                         y: -33
    //                     },
    //                     zIndex: 0,
    //                     labels: [{
    //                         point: {
    //                             xAxis: 0,
    //                             yAxis: 0,
    //                             x: todayMaxScoreIndex,
    //                             y: todayScore[todayMaxScoreIndex].y
    //                         }
    //                     }]
    //                 }
    //             ],
    //         });
    //
    //
    //         var nLeftMin = ($(window).width() - 40) * (((todayMinScoreIndex - 1) / 2) * 8.3 / 100);
    //         $('.tooltip-marker-low').parent().parent().css({
    //             'left': nLeftMin + 17
    //         });
    //         if (todayScore[todayMinScoreIndex] == undefined) {
    //             if (todayScore[todayMinScoreIndex] < 10) {
    //                 $('.tooltip-marker-low').parent().parent().css({
    //                     'top': 168
    //                 });
    //             }
    //         } else {
    //             if (todayScore[todayMinScoreIndex].y < 10) {
    //                 $('.tooltip-marker-low').parent().parent().css({
    //                     'top': 168
    //                 });
    //             }
    //         }
    //
    //         var nLeftMax = ($(window).width() - 40) * (((todayMaxScoreIndex - 1) / 2) * 8.3 / 100);
    //         $('.tooltip-marker-high').parent().parent().css({
    //             'left': nLeftMax + 17
    //         });
    //         var nLeftMarker = ($(window).width() - 40) * (((todayLastIndex - 1) / 2) * 8.3 / 100);
    //         $('.overlay_marker').parent().parent().css({
    //             // 'left': nLeftMarker + 5
    //             'left': nLeftMarker + 12
    //         });
    //         // if (todayScore[todayLastIndex] <= 10) {
    //         //     $('.overlay_marker').parent().parent().css({
    //         //         'top': 110
    //         //     });
    //         // }
    //
    //     } catch (e) {
    //         $('.legend').hide();
    //         $('#line_chart').html('<span style="display: inline-block; width: 100%; text-align: center; line-height: 200px;">데이터가 존재하지 않습니다</span>');
    //     }
    //
    //
    //
    //
    //
    //
    // },






    // dummy
    airMultiSensorGraph: function () {
        var data = [10.5, 9, 11];

        $('#line_chart').highcharts({
            chart: {
                type: 'spline',
                spacingTop:0,
                height: 200
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'time',
                gridLineWidth: 0,
                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/
                tickInterval: 2,
                min:1,
                title: {
                    text: '(시간대 평균)',
                    align: 'high',
                    style: {
                        fontSize:'10'
                    }
                }
            },
            legend: {
                enabled: false
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                gridLineWidth: 0,
                minorGridLineWidth: 0, max: 120,
                lineWidth:0,
                labels: {
                    enabled: false
                }
            },
            tooltip: {
                enabled:false,
                useHTML: true,
                style: {
                    zIndex: 9999
                },
                backgroundColor: 'rgba(247,247,247,0.7)'
            },
            allowHTML: true,
            annotations: [{
                labelOptions: {
                    useHTML :true,
                    format:'<div class="tooltip-marker-high"><a href="#">'+'88'+'</a></div>',
                    backgroundColor: 'transparent',
                    //verticalAlign: 'bottom',
                    //padding:6,
                    borderWidth: 0,
                    x:-18,
                    y:-22
                },
                zIndex:0,
                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 3,
                        y: 88
                    }
                }]
            },{
                labelOptions: {
                    useHTML :true,
                    format:'<div class="tooltip-marker-low"><a href="#">'+'44'+'</a></div>',
                    backgroundColor: 'transparent',
                    //verticalAlign: 'bottom',
                    //padding:6,
                    borderWidth: 0,
                    x:-18,
                    y:13
                    //borderColor:'rgba(0,0,0,0)',
                    //distance:-20
                },
                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 6,
                        y: 44
                    },
                    style: {
                        fontSize: '10px'
                    }
                }]
            },{
                labelOptions: {
                    useHTML :true,
                    format:''+'<div class="overlay_marker good"></div>',
                    backgroundColor: Highcharts.color('none').setOpacity(0).get(),
                    borderWidth: 0,
                    x:-2,
                    y:-3
                }
                ,labels:[{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 16,
                        y: 75
                    }
                }]
            }
            ],
            series: [{
                type: 'areaspline',
                name: '어제',
                dashStyle: 'ShortDot',
                color: '#d3d4d7',
                fillColor: '#f6f7f9',
                marker: {
                    enabled: false,
                    radius:2
                },
                dataLabels : {
                    enabled: false
                },
                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {
                    y: 95, marker: {enabled: true,radius: 3}, color: '#727272', dataLabels: {
                        enabled: true,
                        y: 1,
                        /* shadow: true,*/
                        style: {
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: '#44a9f0'
                        }
                    }
                },
                    80, 84, 71, 80,60, 55, 60, {
                        y: 38, marker: {enabled: true,radius: 3}, color: '#727272', dataLabels: {
                            enabled: true,
                            x:-1,
                            y: 28,
                            /* shadow: true,*/
                            style: {
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: '#dc3b38'
                            }
                        }
                    }, 50, 55, 60]

            }, {
                name: '오늘',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#4aa6ec'],
                        [0.33, '#5cc37e'],
                        [0.66, '#ff9f3e'],
                        [1, '#e1423e']
                    ]
                },
                marker: {
                    enabled: false,
                    'symbol': 'circle',
                    color: '#000',
                    fillColor: '#000',
                    radius:2
                },
                data: [50, 65, 57, {y: 88, marker: {enabled: true,radius: 3}, color: '#000000'}, 79, 52,
                    {
                        y: 44,
                        marker: {enabled: true,radius: 3},
                        color: '#000000'
                    }, 56, 70, 80,66, 70, 60, 55, 75, 60, 89]

            }]
        });
    }

});