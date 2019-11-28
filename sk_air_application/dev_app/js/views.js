directory.airMultiSensor = Backbone.View.extend({
    classAirCardSlider: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();

        // 템플릿팅
        self.$el.html(templete["airMultiSensor/airMultiSensor"]()).addClass('wrap_contents_gray');
        // 공기멀티센서 슬라이드
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorSlider"]());
        // 멀티센서상태
        self.$el.find('.area_school_air').append(templete["airMultiSensor/multiSensor"]());
        // 센서 그래프
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorStateGraph"]());

        // 모드설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingMode"]());
        // 설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/setting"]());
        // 이력 및 알림
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingAlarm"]());
        // 정보
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingInfomation"]());

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');
        
        // 학교 공기상태 슬라이드
        this.schoolAirStateSlider();
        // 학교 공기상태 그래프
        this.airMultiSensorGraph();
        $('.wrap_contents').scrollTop(0)
    },
    schoolAirStateSlider: function(){
        this.classAirCardSlider = $('.area_school_air .slider');
        this.classAirCardSlider.bxSlider({
            adaptiveHeight: true,
            preventDefaultSwipeY: true,
            pagerSelector: ".slide_pager",
            onSliderLoad: function () {

                /*for (var i = 0; i < outSensor.length; i++) {
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
            }
        });
    },

    airMultiSensorGraph: function() {
        var data = [10.5, 9, 11];

        $('#line_chart').highcharts({
            chart: {
                type: 'spline',
                marginTop: 50,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 50,
                height: 220
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                tyoe: 'time',
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
                    y:73
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
directory.airMultiSensorAwair = Backbone.View.extend({
    classAirCardSlider: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();

        // 템플릿팅
        self.$el.html(templete["airMultiSensor/airMultiSensor"]()).addClass('wrap_contents_gray');
        // 공기멀티센서 슬라이드
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorSliderAwair"]());
        // 멀티센서상태
        self.$el.find('.area_school_air').append(templete["airMultiSensor/multiSensorAwair"]());
        // 센서 그래프
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorStateGraphAwair"]());

        // 모드설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingModeAwair"]());
        // 설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingAwair"]());
        // 이력 및 알림
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingAlarmAwair"]());
        // 정보
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingInfomationAwair"]());

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');
        
        // 학교 공기상태 슬라이드
        this.schoolAirStateSlider();
        // 학교 공기상태 그래프
        this.airMultiSensorGraph();
        $('.wrap_contents').scrollTop(0)
    },
    schoolAirStateSlider: function(){
        this.classAirCardSlider = $('.area_school_air .slider');
        this.classAirCardSlider.bxSlider({
            adaptiveHeight: true,
            preventDefaultSwipeY: true
        });
    },
    airMultiSensorGraph: function(){
        var data = [10.5, 9, 11];

        $('#line_chart').highcharts({
            chart: {
                type: 'spline',
                marginTop: 50,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 50,
                height: 220
            },
            title: {
                text: ''
            },
            xAxis: {
                tyoe: 'time',

                gridLineWidth: 0,
                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/
                tickInterval: 2,min:1
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
            },
            allowHTML: true,
            annotations: [{
                labelOptions: {
                    backgroundColor: '#47a2de',
                    verticalAlign: 'bottom',
                    padding:6,
                    borderRadius: 12,
                    borderColor:'rgba(0,0,0,0)',
                    /* distance:30*/
                    y:-15//default y값 위치
                },

                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 3,
                        y: 88
                    },
                    style: {
                        fontSize: '12px'
                    },
                    text: '88 >'
                }]
            },{
                labelOptions: {
                    backgroundColor: '#df3e3e',
                    verticalAlign: 'bottom',
                    padding:6,
                    borderRadius: 12,
                    borderColor:'rgba(0,0,0,0)',
                    distance:-42
                },
                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 6,
                        y: 44
                    },
                    style: {
                        fontSize: '12px'
                    },
                    text: '44 >'
                }]
            }
            ],
            series: [{
                type: 'areaspline',
                name: '어제',
                dashStyle: 'ShortDash',
                color: '#d3d4d7',
                fillColor: '#f6f7f9',
                marker: {
                    enabled: false
                },
                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {
                    y: 95, marker: {enabled: true}, color: '#727272', dataLabels: {
                        enabled: true,
                        y: 0,
                        /* shadow: true,*/
                        style: {
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#44a9f0'
                        }
                    }
                },
                    80, 84, 71, 80,60, 55, 60, {
                        y: 38, marker: {enabled: true}, color: '#727272', dataLabels: {
                            enabled: true,
                            y: 35,
                            /* shadow: true,*/
                            style: {
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#dc3b38'
                            }
                        }
                    }, 50, 55, 60]

            }, {
                name: '오늘',
                color: '#68b0b1',
                marker: {
                    enabled: false
                },
                data: [50, 65, 57, {y: 88, marker: {enabled: true, 'symbol': 'circle'}, color: '#000000'}, 79, 52,
                    {
                        y: 44,
                        marker: {enabled: true, 'symbol': 'circle'},
                        color: '#000000'
                    }, 56, 70, 80,66, 70, 60, 55, 75, 60,
                    {y: 75, marker: {enabled: true, 'symbol': 'circle',radius: 7}, color: '#49a6e7'}]

            }]
        });
    }
});
directory.airMultiSensorGreen = Backbone.View.extend({
    classAirCardSlider: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();

        // 템플릿팅
        self.$el.html(templete["airMultiSensor/airMultiSensor"]()).addClass('wrap_contents_gray');
        // 공기멀티센서 슬라이드
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorSliderGreen"]());
        // 멀티센서상태
        self.$el.find('.area_school_air').append(templete["airMultiSensor/multiSensorGreen"]());
        // 센서 그래프
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorStateGraphGreen"]());

        // 모드설정
        // self.$el.find('.area_box_list').append(templete["airMultiSensor/settingModeGreen"]());
        // 설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingGreen"]());
        // 이력 및 알림
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingAlarmGreen"]());
        // 정보
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingInfomationGreen"]());

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');
        
        // 학교 공기상태 슬라이드
        this.schoolAirStateSlider();
        // 학교 공기상태 그래프
        this.airMultiSensorGraph();
        $('.wrap_contents').scrollTop(0)
    },
    schoolAirStateSlider: function(){
        this.classAirCardSlider = $('.area_school_air .slider');
        this.classAirCardSlider.bxSlider({
            adaptiveHeight: true,
            preventDefaultSwipeY: true
        });
    },
    airMultiSensorGraph: function(){
        var data = [10.5, 9, 11];

        $('#line_chart').highcharts({
            chart: {
                type: 'spline',
                marginTop: 50,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 50,
                height: 220
            },
            title: {
                text: ''
            },
            xAxis: {
                tyoe: 'time',

                gridLineWidth: 0,
                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/
                tickInterval: 2,min:1
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
            },
            allowHTML: true,
            annotations: [{
                labelOptions: {
                    backgroundColor: '#47a2de',
                    verticalAlign: 'bottom',
                    padding:6,
                    borderRadius: 12,
                    borderColor:'rgba(0,0,0,0)',
                    /* distance:30*/
                    y:-15//default y값 위치
                },

                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 3,
                        y: 88
                    },
                    style: {
                        fontSize: '12px'
                    },
                    text: '88 >'
                }]
            },{
                labelOptions: {
                    backgroundColor: '#df3e3e',
                    verticalAlign: 'bottom',
                    padding:6,
                    borderRadius: 12,
                    borderColor:'rgba(0,0,0,0)',
                    distance:-42
                },
                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 6,
                        y: 44
                    },
                    style: {
                        fontSize: '12px'
                    },
                    text: '44 >'
                }]
            }
            ],
            series: [{
                type: 'areaspline',
                name: '어제',
                dashStyle: 'ShortDash',
                color: '#d3d4d7',
                fillColor: '#f6f7f9',
                marker: {
                    enabled: false
                },
                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {
                    y: 95, marker: {enabled: true}, color: '#727272', dataLabels: {
                        enabled: true,
                        y: 0,
                        /* shadow: true,*/
                        style: {
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#44a9f0'
                        }
                    }
                },
                    80, 84, 71, 80,60, 55, 60, {
                        y: 38, marker: {enabled: true}, color: '#727272', dataLabels: {
                            enabled: true,
                            y: 35,
                            /* shadow: true,*/
                            style: {
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#dc3b38'
                            }
                        }
                    }, 50, 55, 60]

            }, {
                name: '오늘',
                color: '#68b0b1',
                marker: {
                    enabled: false
                },
                data: [50, 65, 57, {y: 88, marker: {enabled: true, 'symbol': 'circle'}, color: '#000000'}, 79, 52,
                    {
                        y: 44,
                        marker: {enabled: true, 'symbol': 'circle'},
                        color: '#000000'
                    }, 56, 70, 80,66, 70, 60, 55, 75, 60,
                    {y: 75, marker: {enabled: true, 'symbol': 'circle',radius: 7}, color: '#49a6e7'}]

            }]
        });
    }
});
directory.airMultiSensorHyundai = Backbone.View.extend({
    classAirCardSlider: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();

        // 템플릿팅
        self.$el.html(templete["airMultiSensor/airMultiSensor"]()).addClass('wrap_contents_gray');
        // 공기멀티센서 슬라이드
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorSlider"]());
        // 멀티센서상태
        self.$el.find('.area_school_air').append(templete["airMultiSensor/multiSensor"]());
        // 센서 그래프
        self.$el.find('.area_school_air').append(templete["airMultiSensor/sensorStateGraph"]());

        // 모드설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingMode"]());
        // 설정
        self.$el.find('.area_box_list').append(templete["airMultiSensor/setting"]());
        // 이력 및 알림
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingAlarm"]());
        // 정보
        self.$el.find('.area_box_list').append(templete["airMultiSensor/settingInfomation"]());

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el)
            .addClass('wrap_contents_gray');
        
        // 학교 공기상태 슬라이드
        this.schoolAirStateSlider();
        // 학교 공기상태 그래프
        this.airMultiSensorGraph();
        $('.wrap_contents').scrollTop(0)
    },
    schoolAirStateSlider: function(){
        this.classAirCardSlider = $('.area_school_air .slider');
        this.classAirCardSlider.bxSlider({
            adaptiveHeight: true,
            preventDefaultSwipeY: true
        });
    },
    airMultiSensorGraph: function(){
        var data = [10.5, 9, 11];

        $('#line_chart').highcharts({
            chart: {
                type: 'spline',
                marginTop: 50,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 50,
                height: 220
            },
            title: {
                text: ''
            },
            xAxis: {
                tyoe: 'time',

                gridLineWidth: 0,
                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/
                tickInterval: 2,min:1
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
            },
            allowHTML: true,
            annotations: [{
                labelOptions: {
                    backgroundColor: '#47a2de',
                    verticalAlign: 'bottom',
                    padding:6,
                    borderRadius: 12,
                    borderColor:'rgba(0,0,0,0)',
                    /* distance:30*/
                    y:-15//default y값 위치
                },

                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 3,
                        y: 88
                    },
                    style: {
                        fontSize: '12px'
                    },
                    text: '88 >'
                }]
            },{
                labelOptions: {
                    backgroundColor: '#df3e3e',
                    verticalAlign: 'bottom',
                    padding:6,
                    borderRadius: 12,
                    borderColor:'rgba(0,0,0,0)',
                    distance:-42
                },
                labels: [{
                    point: {
                        xAxis: 0,
                        yAxis: 0,
                        x: 6,
                        y: 44
                    },
                    style: {
                        fontSize: '12px'
                    },
                    text: '44 >'
                }]
            }
            ],
            series: [{
                type: 'areaspline',
                name: '어제',
                dashStyle: 'ShortDash',
                color: '#d3d4d7',
                fillColor: '#f6f7f9',
                marker: {
                    enabled: false
                },
                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {
                    y: 95, marker: {enabled: true}, color: '#727272', dataLabels: {
                        enabled: true,
                        y: 0,
                        /* shadow: true,*/
                        style: {
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#44a9f0'
                        }
                    }
                },
                    80, 84, 71, 80,60, 55, 60, {
                        y: 38, marker: {enabled: true}, color: '#727272', dataLabels: {
                            enabled: true,
                            y: 35,
                            /* shadow: true,*/
                            style: {
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#dc3b38'
                            }
                        }
                    }, 50, 55, 60]

            }, {
                name: '오늘',
                color: '#68b0b1',
                marker: {
                    enabled: false
                },
                data: [50, 65, 57, {y: 88, marker: {enabled: true, 'symbol': 'circle'}, color: '#000000'}, 79, 52,
                    {
                        y: 44,
                        marker: {enabled: true, 'symbol': 'circle'},
                        color: '#000000'
                    }, 56, 70, 80,66, 70, 60, 55, 75, 60,
                    {y: 75, marker: {enabled: true, 'symbol': 'circle',radius: 7}, color: '#49a6e7'}]

            }]
        });
    }
});
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
directory.airReport = Backbone.View.extend({
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();

        self.$el.html(templete["airReport/airReport"]()).removeClass('wrap_contents_gray');;

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el);
        $('.wrap_header h1').text("공기리포트");
    }
});
directory.branch = Backbone.View.extend({
    oMySchoolData: {
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },
    initialize: function () {
        this.render();
    },
    render: function () {





    },


});
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
directory.device_awairAirInfo = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/airInfo"](data));
        return this;
    }
});
directory.device_awairChart = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/chart"](data));
        return this;
    }
});
directory.airMultiSensorAwair = Backbone.View.extend({
    initialize: function () {
        //그린망고
        App.view.device_awairAirInfo = new directory.device_awairAirInfo();
        App.view.device_awairChart = new directory.device_awairChart();
        App.view.device_awairMode = new directory.device_awairMode();
        App.view.device_awairSettingAlarm = new directory.device_awairSettingAlarm();
        App.view.device_awairSettingInformation = new directory.device_awairSettingInformation();

        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_awair/device"](data));

        self.$el.find('#airInfo').html(App.view.device_awairAirInfo.render(data).$el);
        self.$el.find('#airChart').html(App.view.device_awairChart.render(data).$el);
        self.$el.find('#favor').html(App.view.device_awairMode.render(data).$el);
        self.$el.find('#alarm').html(App.view.device_awairSettingAlarm.render(data).$el);
        self.$el.find('#infomation').html(App.view.device_awairSettingInformation.render(data).$el);

        return self;
    }
});
directory.device_awairSettingAlarm = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/settingAlarm"](data));
        return this;
    }
});
directory.device_awairSettingInformation = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/settingInformation"](data));
        return this;
    }
});
directory.device_awairMode = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_awair/settingMode"](data));
        return this;
    }
});
directory.device_greenAirInfo = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/airInfo"](data));
        return this;
    }
});
directory.device_greenChart = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/chart"](data));
        return this;
    }
});
directory.airMultiSensorGreenMango = Backbone.View.extend({
    initialize: function () {
        //그린망고
        App.view.device_greenAirInfo = new directory.device_greenAirInfo();
        App.view.device_greenChart = new directory.device_greenChart();
        App.view.device_greenMode = new directory.device_greenMode();
        App.view.device_greenSettingAlarm = new directory.device_greenSettingAlarm();
        App.view.device_greenSettingInformation = new directory.device_greenSettingInformation();

        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_green/device"](data));

        self.$el.find('#airInfo').html(App.view.device_greenAirInfo.render(data).$el);
        self.$el.find('#airChart').html(App.view.device_greenChart.render(data).$el);
        self.$el.find('#mode').html(App.view.device_greenMode.render(data).$el);
        self.$el.find('#alarm').html(App.view.device_greenSettingAlarm.render(data).$el);
        self.$el.find('#infomation').html(App.view.device_greenSettingInformation.render(data).$el);

        return self;
    }
});
directory.device_greenSettingAlarm = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/settingAlarm"](data));
        return this;
    }
});
directory.device_greenSettingInformation = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/settingInformation"](data));
        return this;
    }
});
directory.device_greenMode = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_green/settingMode"](data));
        return this;
    }
});
directory.device_hyundaiAirInfo = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/airInfo"](data));
        return this;
    }
});
directory.airMultiSensorHyundai = Backbone.View.extend({
    initialize: function () {
        //그린망고
        App.view.device_hyundaiAirInfo = new directory.device_hyundaiAirInfo();
        App.view.device_awairChart = new directory.device_awairChart();
        App.view.device_hyundaiMode = new directory.device_hyundaiMode();
        App.view.device_hyundaiSettingAlarm = new directory.device_hyundaiSettingAlarm();
        App.view.device_hyundaiSettingInformation = new directory.device_hyundaiSettingInformation();

        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_hyundai/device"](data));

        self.$el.find('#airInfo').html(App.view.device_hyundaiAirInfo.render(data).$el);
        self.$el.find('#airChart').html(App.view.device_awairChart.render(data).$el);
        self.$el.find('#mode').html(App.view.device_hyundaiMode.render(data).$el);
        self.$el.find('#alarm').html(App.view.device_hyundaiSettingAlarm.render(data).$el);
        self.$el.find('#infomation').html(App.view.device_hyundaiSettingInformation.render(data).$el);

        return self;
    }
});
directory.device_hyundaiSettingAlarm = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/settingAlarm"](data));
        return this;
    }
});
directory.device_hyundaiSettingInformation = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/settingInformation"](data));
        return this;
    }
});
directory.device_hyundaiMode = Backbone.View.extend({
    initialize: function () {
    },
    render: function (data) {
        this.$el.html(templete["device_hyundai/settingMode"](data));
        return this;
    }
});
directory.airPurifierLgDplus = Backbone.View.extend({
    initialize: function () {
        //LgD
        App.view.device_lgDplusSettingAlarm= new directory.device_lgDplusSettingAlarm();
        App.view.device_lgDplusSettingInfomation = new directory.device_lgDplusSettingInfomation();
        App.view.device_lgDplusSettingMode = new directory.device_lgDplusSettingMode();
        App.view.device_lgDplusSettingPower = new directory.device_lgDplusSettingPower();
        App.view.device_lgDplusSettingPuritySignLamp = new directory.device_lgDplusSettingPuritySignLamp();
        App.view.device_lgDplusSettingRemoveVirus = new directory.device_lgDplusSettingRemoveVirus();
        App.view.device_lgDplusSettingTurnOf = new directory.device_lgDplusSettingTurnOff();
        App.view.device_lgDplusSettingVolume = new directory.device_lgDplusSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_lgDplus/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_lgDplusSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_lgDplusSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_lgDplusSettingVolume.render(data).$el);
            self.$el.find('#purifysignlamp').html(App.view.device_lgDplusSettingPuritySignLamp.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_lgDplusSettingTurnOf.render(data).$el);
            self.$el.find('#removevirus').html(App.view.device_lgDplusSettingRemoveVirus.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_lgDplusSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_lgDplusSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_lgDplusSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_lgDplusSettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_lgDplusSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingAlarm"](data));
        return this;
    }
});
directory.device_lgDplusSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingInfomation"](data));
        return this;

    }
});
directory.device_lgDplusSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingMode"](data));
        return this;
    }
});
directory.device_lgDplusSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingPower"](data));
        return this;
    }
});
directory.device_lgDplusSettingPuritySignLamp = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingPuritySignLamp"](data));
        return this;

    }
});
directory.device_lgDplusSettingRemoveVirus = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingRemoveVirus"](data));
        return this;

    }
});
directory.device_lgDplusSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingTurnOff"](data));
        return this;
    }
});
directory.device_lgDplusSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgDplus/settingVolume"](data));
        return this;

    }
});
directory.airPurifierLgGplus = Backbone.View.extend({
    initialize: function () {
        //LgG
        App.view.device_lgGplusSettingAlarm= new directory.device_lgGplusSettingAlarm();
        App.view.device_lgGplusSettingInfomation = new directory.device_lgGplusSettingInfomation();
        App.view.device_lgGplusSettingMode= new directory.device_lgGplusSettingMode();
        App.view.device_lgGplusSettingPower = new directory.device_lgGplusSettingPower();
        App.view.device_lgGplusSettingPuritySignLamp = new directory.device_lgGplusSettingPuritySignLamp();
        App.view.device_lgGplusSettingRemoveVirus = new directory.device_lgGplusSettingRemoveVirus();
        App.view.device_lgGplusSettingTurnOff = new directory.device_lgGplusSettingTurnOff();
        App.view.device_lgGplusSettingUseReport = new directory.device_lgGplusSettingUseReport();
        App.view.device_lgGplusSettingVolume = new directory.device_lgGplusSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_lgGplus/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_lgGplusSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_lgGplusSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_lgGplusSettingVolume.render(data).$el);
            self.$el.find('#purifysignlamp').html(App.view.device_lgGplusSettingPuritySignLamp.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_lgGplusSettingTurnOff.render(data).$el);
            self.$el.find('#removevirus').html(App.view.device_lgGplusSettingRemoveVirus.render(data).$el);
            self.$el.find('#usereport').html(App.view.device_lgGplusSettingUseReport.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_lgGplusSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_lgGplusSettingInfomation.render(data).$el);
            self.highcharts(data);
        } else {
            self.$el.find('#alarm').html(App.view.device_lgGplusSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_lgGplusSettingInfomation.render(data).$el);
        }
        return self;
    },

    highcharts: function () {
        $(function() {
            var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'report_house',
                        type: 'pie',
                        backgroundColor: '#ffffff'
                    },
                    colors:['#ff9f3e','#eeeeee'],
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    plotOptions: {
                        pie: {
                            borderColor: 'none',
                            size:'80',
                            innerSize: '77'
                        },
                        series: {
                            animation: false
                        }
                    },
                    series: [{
                        dataLabels: {
                            enabled: false
                        },
                        data: [33,67]   //percent
                    }]
                },
                // using
                function(chart) { // on complete
                    // Render the text
                    /*chart.renderer.text('<span style="color: #ff9f3e;font-size: 27px;">9</span><br>' +
                        '시간', 35, 46).css({
                        width: 80,
                        color: '#bababa',
                        fontSize: '11px',
                        textAlign: 'center'
                    }).attr({
                        // why doesn't zIndex get the text in front of the chart?
                        zIndex: 999
                    }).add();*/

                    //마커 생성
                    var r, x, y, q = 1;
                    Highcharts.each(chart.series[0].data, function(p, i) {
                        if (p.y <= 33) {
                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;
                            q =  p.shapeArgs.end
                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;
                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;
                            chart.renderer.circle(x, y, 2).attr({
                                zIndex: 4,
                                fill: '#ff9f3e'
                            }).add();
                        }
                    })
                });
        });

        $(function() {
            var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'report_household',
                        type: 'pie',
                        backgroundColor: '#ffffff'
                    },
                    colors:['#666666','#eeeeee'],
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    plotOptions: {
                        pie: {
                            borderColor: 'none',
                            size:'80',
                            innerSize: '77'
                        },
                        series: {
                            animation: false
                        }
                    },
                    series: [{
                        dataLabels: {
                            enabled: false
                        },
                        data: [65,35]   //percent
                    }]
                },
                // using
                function(chart) { // on complete
                    // Render the text
                    /*chart.renderer.text('<span style="color: #666666;font-size: 27px;">4</span><br>' +
                        '시간', 35, 46).css({
                        width: 80,
                        color: '#bababa',
                        fontSize: '11px',
                        textAlign: 'center'
                    }).attr({
                        // why doesn't zIndex get the text in front of the chart?
                        zIndex: 999
                    }).add();*/
                    //마커 생성
                    var r, x, y, q = 1;
                    Highcharts.each(chart.series[0].data, function(p, i) {
                        if (p.y >= 65) {
                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;
                            q =  p.shapeArgs.end
                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;
                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;
                            chart.renderer.circle(x, y, 2).attr({
                                zIndex: 4,
                                fill: '#666666'
                            }).add();
                        }
                    })
                });
        });
    }
});
directory.device_lgGplusSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingAlarm"](data));
        return this;
    }
});
directory.device_lgGplusSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingInfomation"](data));
        return this;
    }
});
directory.device_lgGplusSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingMode"](data));
        return this;

    }
});
directory.device_lgGplusSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingPower"](data));
        return this;
    }
});
directory.device_lgGplusSettingPuritySignLamp = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingPuritySignLamp"](data));
        return this;
    }
});
directory.device_lgGplusSettingRemoveVirus = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingRemoveVirus"](data));
        return this;
    }
});
directory.device_lgGplusSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingTurnOff"](data));
        return this;
    }
});
directory.device_lgGplusSettingUseReport = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingUseReport"](data));
        return this;
    }
});
directory.device_lgGplusSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgGplus/settingVolume"](data));
        return this;
    }
});
directory.airPurifierLgS = Backbone.View.extend({
    initialize: function () {
        //LgS
        App.view.device_lgSSettingAlarm= new directory.device_lgSSettingAlarm();
        App.view.device_lgSSettingInfomation= new directory.device_lgSSettingInfomation();
        App.view.device_lgSSettingMode= new directory.device_lgSSettingMode();
        App.view.device_lgSSettingPower = new directory.device_lgSSettingPower();
        App.view.device_lgSSettingPuritySignLamp = new directory.device_lgSSettingPuritySignLamp();
        App.view.device_lgSSettingRemoveVirus = new directory.device_lgSSettingRemoveVirus();
        App.view.device_lgSSettingTurnOff = new directory.device_lgSSettingTurnOff();
        App.view.device_lgSSettingUseReport = new directory.device_lgSSettingUseReport();
        App.view.device_lgSSettingVolume = new directory.device_lgSSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_lgS/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_lgSSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_lgSSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_lgSSettingVolume.render(data).$el);
            self.$el.find('#purifysignlamp').html(App.view.device_lgSSettingPuritySignLamp.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_lgSSettingTurnOff.render(data).$el);
            self.$el.find('#removevirus').html(App.view.device_lgSSettingRemoveVirus.render(data).$el);
            self.$el.find('#usereport').html(App.view.device_lgSSettingUseReport.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_lgSSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_lgSSettingInfomation.render(data).$el);
            self.highcharts(data);
        } else {
            self.$el.find('#alarm').html(App.view.device_lgSSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_lgSSettingInfomation.render(data).$el);
        }
        return self;
    },

    highcharts: function () {
        $(function() {
            var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'report_house',
                        type: 'pie',
                        backgroundColor: '#ffffff'
                    },
                    colors:['#ff9f3e','#eeeeee'],
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    plotOptions: {
                        pie: {
                            borderColor: 'none',
                            size:'80',
                            innerSize: '77'
                        },
                        series: {
                            animation: false
                        }
                    },
                    series: [{
                        dataLabels: {
                            enabled: false
                        },
                        data: [33,67]   //percent
                    }]
                },
                // using
                function(chart) { // on complete
                    // Render the text
                    /*chart.renderer.text('<span style="color: #ff9f3e;font-size: 27px;">9</span><br>' +
                        '시간', 35, 46).css({
                        width: 80,
                        color: '#bababa',
                        fontSize: '11px',
                        textAlign: 'center'
                    }).attr({
                        // why doesn't zIndex get the text in front of the chart?
                        zIndex: 999
                    }).add();*/

                    //마커 생성
                    var r, x, y, q = 1;
                    Highcharts.each(chart.series[0].data, function(p, i) {
                        if (p.y <= 33) {
                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;
                            q =  p.shapeArgs.end
                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;
                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;
                            chart.renderer.circle(x, y, 2).attr({
                                zIndex: 4,
                                fill: '#ff9f3e'
                            }).add();
                        }
                    })
                });
        });

        $(function() {
            var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'report_household',
                        type: 'pie',
                        backgroundColor: '#ffffff'
                    },
                    colors:['#666666','#eeeeee'],
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    plotOptions: {
                        pie: {
                            borderColor: 'none',
                            size:'80',
                            innerSize: '77'
                        },
                        series: {
                            animation: false
                        }
                    },
                    series: [{
                        dataLabels: {
                            enabled: false
                        },
                        data: [65,35]   //percent
                    }]
                },
                // using
                function(chart) { // on complete
                    // Render the text
                    /*chart.renderer.text('<span style="color: #666666;font-size: 27px;">4</span><br>' +
                        '시간', 35, 46).css({
                        width: 80,
                        color: '#bababa',
                        fontSize: '11px',
                        textAlign: 'center'
                    }).attr({
                        // why doesn't zIndex get the text in front of the chart?
                        zIndex: 999
                    }).add();*/
                    //마커 생성
                    var r, x, y, q = 1;
                    Highcharts.each(chart.series[0].data, function(p, i) {
                        if (p.y >= 65) {
                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;
                            q =  p.shapeArgs.end
                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;
                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;
                            chart.renderer.circle(x, y, 2).attr({
                                zIndex: 4,
                                fill: '#666666'
                            }).add();
                        }
                    })
                });
        });
    }
});
directory.device_lgSSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingAlarm"](data));
        return this;
    }
});
directory.device_lgSSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingInfomation"](data));
        return this;
    }
});
directory.device_lgSSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingMode"](data));
        return this;
    }
});
directory.device_lgSSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingPower"](data));
        return this;
    }
});
directory.device_lgSSettingPuritySignLamp= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingPuritySignLamp"](data));
        return this;
    }
});
directory.device_lgSSettingRemoveVirus = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingRemoveVirus"](data));
        return this;
    }
});
directory.device_lgSSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingTurnOff"](data));
        return this;
    }
});
directory.device_lgSSettingUseReport = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingUseReport"](data));
        return this;
    }
});
directory.device_lgSSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_lgS/settingVolume"](data));
        return this;
    }
});
directory.airPurifierNicePurifier= Backbone.View.extend({
    initialize: function () {
        //ChunghoNice
        App.view.device_nicePurifierSettingAlarm = new directory.device_nicePurifierSettingAlarm();
        App.view.device_nicePurifierSettingFilterUsed= new directory.device_nicePurifierSettingFilterUsed();
        App.view.device_nicePurifierSettingInfomation = new directory.device_nicePurifierSettingInfomation();
        App.view.device_nicePurifierSettingMode= new directory.device_nicePurifierSettingMode();
        App.view.device_nicePurifierSettingDustSensor = new directory.device_nicePurifierSettingDustSensor();
        App.view.device_nicePurifierSettingPower = new directory.device_nicePurifierSettingPower();
        App.view.device_nicePurifierSettingTurnOff = new directory.device_nicePurifierSettingTurnOff();
        App.view.device_nicePurifierSettingVolume = new directory.device_nicePurifierSettingVolume();
        App.view.device_nicePurifierSettingIon = new directory.device_nicePurifierSettingIon();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_nicePurifier/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_nicePurifierSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_nicePurifierSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_nicePurifierSettingVolume.render(data).$el);
            self.$el.find('#dustsensor').html(App.view.device_nicePurifierSettingDustSensor.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_nicePurifierSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_nicePurifierSettingFilterUsed.render(data).$el);
            self.$el.find('#ion').html(App.view.device_nicePurifierSettingIon.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_nicePurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_nicePurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_nicePurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_nicePurifierSettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_nicePurifierSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingAlarm"](data));
        return this;
    }
});
directory.device_nicePurifierSettingDustSensor = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingDustSensor"](data));
        return this;
    }
});
directory.device_nicePurifierSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingFilterUsed"](data));
        return this;
    }
});
directory.device_nicePurifierSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingInfomation"](data));
        return this;
    }
});
directory.device_nicePurifierSettingIon = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingIon"](data));
        return this;
    }
});
directory.device_nicePurifierSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingMode"](data));
        return this;
    }
});
directory.device_nicePurifierSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingPower"](data));
        return this;
    }
});
directory.device_nicePurifierSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingTurnOff"](data));
        return this;
    }
});
directory.device_nicePurifierSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingVolume"](data));
        return this;
    }
});
directory.airPurifierSamsungPurifier = Backbone.View.extend({
    initialize: function () {
        //Samsung
        App.view.device_samsungPurifierSettingAlarm = new directory.device_samsungPurifierSettingAlarm();
        App.view.device_samsungPurifierSettingFilterUsed = new directory.device_samsungPurifierSettingFilterUsed();
        App.view.device_samsungPurifierSettingInfomation = new directory.device_samsungPurifierSettingInfomation();
        App.view.device_samsungPurifierSettingMode= new directory.device_samsungPurifierSettingMode();
        App.view.device_samsungPurifierSettingPower= new directory.device_samsungPurifierSettingPower();
        App.view.device_samsungPurifierSettingTurnOff = new directory.device_samsungPurifierSettingTurnOff();
        App.view.device_samsungPurifierSettingVolume = new directory.device_samsungPurifierSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_samsungPurifier/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_samsungPurifierSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_samsungPurifierSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_samsungPurifierSettingVolume.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_samsungPurifierSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_samsungPurifierSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_samsungPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_samsungPurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_samsungPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_samsungPurifierSettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_samsungPurifierSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingAlarm"](data));
        return this;
    }
});
directory.device_samsungPurifierSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingFilterUsed"](data));
        return this;
    }
});
directory.device_samsungPurifierSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingInfomation"](data));
        return this;
    }
});
directory.device_samsungPurifierSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingMode"](data));
        return this;
    }
});
directory.device_samsungPurifierSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingPower"](data));
        return this;
    }
});
directory.device_samsungPurifierSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingTurnOff"](data));
        return this;

    }
});
directory.device_samsungPurifierSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_samsungPurifier/settingVolume"](data));
        return this;
    }
});
directory.airPurifierWiniaHumidfy = Backbone.View.extend({
    initialize: function () {
        //WiniaHumidfy
        App.view.device_winiaHumiditySettingAlarm = new directory.device_winiaHumiditySettingAlarm();
        App.view.device_winiaHumiditySettingFilterUsed = new directory.device_winiaHumiditySettingFilterUsed();
        App.view.device_winiaHumiditySettingInfomation = new directory.device_winiaHumiditySettingInfomation();
        App.view.device_winiaHumiditySettingMode= new directory.device_winiaHumiditySettingMode();
        App.view.device_winiaHumiditySettingPlasma = new directory.device_winiaHumiditySettingPlasma();
        App.view.device_winiaHumiditySettingPower = new directory.device_winiaHumiditySettingPower();
        App.view.device_winiaHumiditySettingTurnOff = new directory.device_winiaHumiditySettingTurnOff();
        App.view.device_winiaHumiditySettingVolume= new directory.device_winiaHumiditySettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winiaHumidity/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winiaHumiditySettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winiaHumiditySettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winiaHumiditySettingVolume.render(data).$el);
            self.$el.find('#plasma').html(App.view.device_winiaHumiditySettingPlasma.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winiaHumiditySettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winiaHumiditySettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winiaHumiditySettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaHumiditySettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winiaHumiditySettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaHumiditySettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_winiaHumiditySettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingAlarm"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingFilterUsed"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingInfomation"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingMode"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingPlasma = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingPlasma"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingPower"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingTurnOff"](data));
        return this;
    }
});
directory.device_winiaHumiditySettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaHumidity/settingVolume"](data));
        return this;
    }
});
directory.airPurifierWiniaPurifier = Backbone.View.extend({
    initialize: function () {
        //WiniaPurifier
        App.view.device_winiaPurifierSettingAlarm = new directory.device_winiaPurifierSettingAlarm();
        App.view.device_winiaPurifierSettingFilterUsed = new directory.device_winiaPurifierSettingFilterUsed();
        App.view.device_winiaPurifierSettingInfomation = new directory.device_winiaPurifierSettingInfomation();
        App.view.device_winiaPurifierSettingMode = new directory.device_winiaPurifierSettingMode();
        App.view.device_winiaPurifierSettingPlasma = new directory.device_winiaPurifierSettingPlasma();
        App.view.device_winiaPurifierSettingPower = new directory.device_winiaPurifierSettingPower();
        App.view.device_winiaPurifierSettingTurnOff = new directory.device_winiaPurifierSettingTurnOff();
        App.view.device_winiaPurifierSettingVolume = new directory.device_winiaPurifierSettingVolume();
        App.view.device_winiaPurifierSettingDisinfect = new directory.device_winiaPurifierSettingDisinfect();
        App.view.device_winiaPurifierSettingHumidfy = new directory.device_winiaPurifierSettingHumidfy();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winiaPurifier/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winiaPurifierSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winiaPurifierSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winiaPurifierSettingVolume.render(data).$el);
            self.$el.find('#plasma').html(App.view.device_winiaPurifierSettingPlasma.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winiaPurifierSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winiaPurifierSettingFilterUsed.render(data).$el);
            self.$el.find('#disinfect').html(App.view.device_winiaPurifierSettingDisinfect.render(data).$el);
            self.$el.find('#humidfy').html(App.view.device_winiaPurifierSettingHumidfy.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_winiaPurifierSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingAlarm"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingDisinfect = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingDisinfect"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingFilterUsed"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingHumidfy= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingHumidfy"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingInfomation= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingInfomation"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingMode"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingPlasma= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingPlasma"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingPower= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingPower"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingTurnOff"](data));
        return this;
    }
});
directory.device_winiaPurifierSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingVolume"](data));
        return this;
    }
});
directory.airPurifierWinixNike = Backbone.View.extend({
    initialize: function () {
        //WinixNike
        App.view.device_winixNikeSettingAlarm = new directory.device_winixNikeSettingAlarm();
        App.view.device_winixNikeSettingFilterUsed = new directory.device_winixNikeSettingFilterUsed();
        App.view.device_winixNikeSettingInfomation = new directory.device_winixNikeSettingInfomation();
        App.view.device_winixNikeSettingMode = new directory.device_winixNikeSettingMode();
        App.view.device_winixNikeSettingPlasmaWave = new directory.device_winixNikeSettingPlasmaWave();
        App.view.device_winixNikeSettingPower = new directory.device_winixNikeSettingPower();
        App.view.device_winixNikeSettingTurnOff = new directory.device_winixNikeSettingTurnOff();
        App.view.device_winixNikeSettingVolume = new directory.device_winixNikeSettingVolume();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixNike/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixNikeSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixNikeSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixNikeSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixNikeSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixNikeSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixNikeSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winixNikeSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixNikeSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixNikeSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixNikeSettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_winixNikeSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingAlarm"](data));
        return this;
    }
});
directory.device_winixNikeSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingFilterUsed"](data));
        return this;
    }
});
directory.device_winixNikeSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingInfomation"](data));
        return this;
    }
});
directory.device_winixNikeSettingMode = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingMode"](data));
        return this;
    }
});
directory.device_winixNikeSettingPlasmaWave = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingPlasmaWave"](data));
        return this;
    }
});
directory.device_winixNikeSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingPower"](data));
        return this;
    }
});
directory.device_winixNikeSettingTurnOff = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingTurnOff"](data));
        return this;
    }
});
directory.device_winixNikeSettingVolume = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingVolume"](data));
        return this;
    }
});
directory.airPurifierWinixTaitan = Backbone.View.extend({
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
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixTitan/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixTitanSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixTitanSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixTitanSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixTitanSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixTitanSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixTitanSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixTitanSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixTitanSettingInfomation.render(data).$el);
        }
        return self;
    }
});
directory.device_winixTitanSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingAlarm"](data));
        return this;
    }
});
directory.device_winixTitanSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingFilterUsed"](data));
        return this;
    }
});
directory.device_winixTitanSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingInfomation"](data));
        return this;
    }
});
directory.device_winixTitanSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingMode"](data));
        return this;
    }
});
directory.device_winixTitanSettingPlasmaWave= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingPlasmaWave"](data));
        return this;
    }
});
directory.device_winixTitanSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingPower"](data));
        return this;
    }
});
directory.device_winixTitanSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingTurnOff"](data));
        return this;
    }
});
directory.device_winixTitanSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixTitan/settingVolume"](data));
        return this;
    }
});
directory.airPurifierWinixXq = Backbone.View.extend({
    initialize: function () {
        //WinixXQ
        App.view.device_winixXqSettingAlarm= new directory.device_winixXqSettingAlarm();
        App.view.device_winixXqSettingFilterUsed = new directory.device_winixXqSettingFilterUsed();
        App.view.device_winixXqSettingChildLock = new directory.device_winixXqSettingChildLock();
        App.view.device_winixXqSettingMode = new directory.device_winixXqSettingMode();
        App.view.device_winixXqSettingPlasmaWave = new directory.device_winixXqSettingPlasmaWave();
        App.view.device_winixXqSettingPower = new directory.device_winixXqSettingPower();
        App.view.device_winixXqSettingTurnOff = new directory.device_winixXqSettingTurnOff();
        App.view.device_winixXqSettingVolume = new directory.device_winixXqSettingVolume();
        App.view.device_winixXqSettingPollutionLamp = new directory.device_winixXqSettingPollutionLamp();
        App.view.device_winixXqSettingUV= new directory.device_winixXqSettingUV();
        App.view.device_winixXqSettingInfomation = new directory.device_winixXqSettingInfomation();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixXq/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixXqSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixXqSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixXqSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixXqSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixXqSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixXqSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winixXqSettingAlarm.render(data).$el);
            self.$el.find('#childlock').html(App.view.device_winixXqSettingChildLock.render(data).$el);
            self.$el.find('#pollutionlamp').html(App.view.device_winixXqSettingPollutionLamp.render(data).$el);
            self.$el.find('#uv').html(App.view.device_winixXqSettingUV.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixXqSettingInfomation.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixXqSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixXqSettingInfomation.render(data).$el);
        }


        return self;
    }
});
directory.device_winixXqSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingAlarm"](data));
        return this;
    }
});
directory.device_winixXqSettingChildLock = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingChildLock"](data));
        return this;
    }
});
directory.device_winixXqSettingFilterUsed= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingFilterUsed"](data));
        return this;
    }
});
directory.device_winixXqSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingInfomation"](data));
        return this;
    }
});
directory.device_winixXqSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingMode"](data));
        return this;
    }
});
directory.device_winixXqSettingPlasmaWave= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingPlasmaWave"](data));
        return this;
    }
});
directory.device_winixXqSettingPollutionLamp= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingPollutionLamp"](data));
        return this;
    }
});
directory.device_winixXqSettingPower= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingPower"](data));
        return this;
    }
});
directory.device_winixXqSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingTurnOff"](data));
        return this;
    }
});
directory.device_winixXqSettingUV= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingUV"](data));
        return this;
    }
});
directory.device_winixXqSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixXq/settingVolume"](data));
        return this;
    }
});
directory.airPurifierWinixZeroplus = Backbone.View.extend({
    initialize: function () {
        //위닉스 제로플러스
        App.view.device_winixZeroplusSettingAlarm = new directory.device_winixZeroplusSettingAlarm();
        App.view.device_winixZeroplusSettingFilterUsed = new directory.device_winixZeroplusSettingFilterUsed();
        App.view.device_winixZeroplusSettingInfomation = new directory.device_winixZeroplusSettingInfomation();
        App.view.device_winixZeroplusSettingMode = new directory.device_winixZeroplusSettingMode();
        App.view.device_winixZeroplusSettingPlasmaWave = new directory.device_winixZeroplusSettingPlasmaWave();
        App.view.device_winixZeroplusSettingPower = new directory.device_winixZeroplusSettingPower();
        App.view.device_winixZeroplusSettingTurnOff = new directory.device_winixZeroplusSettingTurnOff();
        App.view.device_winixZeroplusSettingVolume = new directory.device_winixZeroplusSettingVolume();
        App.view.device_winixZeroplusSettingChildLock = new directory.device_winixZeroplusSettingChildLock();
        this.render();
    },
    render: function (data) {
        var self = this;
        // 템플릿팅
        self.$el.html(templete["device_winixZeroplus/device"](data));

        if (App.vars.isSchoolCode === true) {
            self.$el.find('#power').html(App.view.device_winixZeroplusSettingPower.render(data).$el);
            self.$el.find('#mode').html(App.view.device_winixZeroplusSettingMode.render(data).$el);
            self.$el.find('#volume').html(App.view.device_winixZeroplusSettingVolume.render(data).$el);
            self.$el.find('#plasmaWave').html(App.view.device_winixZeroplusSettingPlasmaWave.render(data).$el);
            //self.$el.find('#turnOff').html(App.view.device_winixZeroplusSettingTurnOff.render(data).$el);
            self.$el.find('#filterUsed').html(App.view.device_winixZeroplusSettingFilterUsed.render(data).$el);
            self.$el.find('#alarm').html(App.view.device_winixZeroplusSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixZeroplusSettingInfomation.render(data).$el);
            self.$el.find('#childlock').html(App.view.device_winixZeroplusSettingChildLock.render(data).$el);
        } else {
            self.$el.find('#alarm').html(App.view.device_winixZeroplusSettingAlarm.render(data).$el);
            self.$el.find('#infomation').html(App.view.device_winixZeroplusSettingInfomation.render(data).$el);
        }
        return self;
    }


});
directory.device_winixZeroplusSettingAlarm = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingAlarm"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingChildLock = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingChildLock"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingFilterUsed = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingFilterUsed"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingInfomation"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingMode= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingMode"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingPlasmaWave= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingPlasmaWave"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingPower"](data));
        return this;
    }
});
directory.device_winixZeroplusSettingTurnOff= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data, turnOffMode) {
        console.log(turnOffMode)
        this.$el.html(templete["device_winixZeroplus/settingTurnOff"](data, turnOffMode));
        return this;
    }
});
directory.device_winixZeroplusSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingVolume"](data));
        return this;
    }
});
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

directory.globalEventView = Backbone.View.extend({
    el: "body",
    bLiogin: false,
    localeData: {
        "sidoCd": "",
        "siguCd": "",
        "schType": ""
    },
    oSearchAutoText: {
        "serKey": "",
        "size": "0",
        "offset": "0"
    },
    searchText: {
        "serKey": "",
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },
    oRegisterInfo: {
        "loginId": App.vars.loginId,
        "schCd": "",
        "lv": "",
        "cls": ""
    },
    oDeleteInfo: {
        "loginId": App.vars.loginId,
        "userSchId": ""
    },
    sSelectedSchoolTitle: null,
    initialize: function () {
        this._assignElements();
        this._attachEventHandlers();

    },
    _assignElements: function () {
        this.welDoc = $(document.body);
    },
    _attachEventHandlers: function () {
        var self = this;
        this.welDoc.on('click', 'a[href="#"]', $.proxy(this.prevent, this));
        // 학교 리스트보기 페이지로 이동
        this.welDoc.on('click', '._goToLocaleList', $.proxy(this.goToLocaleList, this));
        // 이력 및 알림 페이지로 이동
        this.welDoc.on('click', '._goToHistoryAlarm', $.proxy(this.goToHistoryAlarm, this));
        // 정보 상세 페이지로 이동
        this.welDoc.on('click', '._goToInformationDetail', $.proxy(this.goToInformationDetail, this));
        // 공기리포트 상세 페이지로 이동
        //this.welDoc.on('click', '._goToAirReportDetail', $.proxy(this.goToAirReportDetail, this));
        // 내 학교 페이지로 이동
        this.welDoc.on('click', '._mySchoolList', $.proxy(this.mySchoolList, this));
        // 메인 맵 페이지로 이동
        this.welDoc.on('click', '._moveMainPage', $.proxy(this.moveMainPage, this));
        // 이전 페이지로 이동
        this.welDoc.on('click', '._btnPrevPage', $.proxy(this.movePrevPage, this));
        this.welDoc.on('click', '._fnMoveMyLocation', $.proxy(this.moveMyLocation, this));
        this.welDoc.on('click', '._fnRefresh', $.proxy(this.initMap, this));
        this.welDoc.on('click', '._fnAccordionMenu > li > a', $.proxy(this.accordionMenu, this));
        this.welDoc.on('click', '._tabs li.visited > a', $.proxy(this.tabMenu, this));
        this.welDoc.on('click', '._subTabs li > a', $.proxy(this.subTabMenu, this));
        this.welDoc.on('click', '._localeSelect li > a', $.proxy(this.localeSelect, this));
        this.welDoc.on('focus', '.search_box .text_box', $.proxy(this.inputDeleteButtonShow, this));
        this.welDoc.on('blur', '.search_box .text_box', $.proxy(this.inputDeleteButtonHide, this));
        this.welDoc.on('keyup', '.search_box .text_box', $.proxy(this.autoCompleteSearch, this));
        this.welDoc.on('click', '.search_box .btn_search', $.proxy(this.addInputRecentList, this));
        this.welDoc.on('click', '.btn_all_delete', $.proxy(this.openAllSchoolDeleteDialog, this));
        this.welDoc.on('click', '.btn_input_delete', $.proxy(this.inputValueDelete, this));
        this.welDoc.on('click', '._cardSlideLink', $.proxy(this.goToSchoolDetail, this));
        this.welDoc.on('click', '.area_search_wrap .btn_delete', $.proxy(this.deleteRecentSearchList, this));
        this.welDoc.on('click', '._searchList li a', $.proxy(this.clickRecentList, this));
        this.welDoc.on('click', '._schoolResultList li a', $.proxy(this.clickResultList, this));
        this.welDoc.on('click', '._searchResultList li a', $.proxy(this.clickSchoolResultList, this));
        this.welDoc.on('click', '._clickOutSensor', $.proxy(this.clickOutSensor, this));
        this.welDoc.on('click', '._registerMySchool', $.proxy(this.registerMySchool, this));
        // 메뉴 호출
        this.welDoc.on('click', '._openAllMenu', $.proxy(this.openAllMenu, this));
        this.welDoc.on('click', '._moveToSearchSchool', $.proxy(this.moveToSearchSchool, this));
        // this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToAirMultiSensor, this));
        // this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToAirPurifier, this));
        this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToDetail, this));

        // 시간 설정 팝업
        this.welDoc.on('click', '._openPopupSettingTImer', $.proxy(this.openPopupSettingTImer, this));
        this.welDoc.on('click', '._closePopupSettingTImer', $.proxy(this.closePopupSettingTImer, this));
        this.welDoc.on('click', '._confirmPopupSettingTImer', $.proxy(this.confirmPopupSettingTImer, this));
        this.welDoc.on('click', '._releasePopupSettingTImer', $.proxy(this.releasePopupSettingTImer, this));
        // 시간 설정 팝업 (몽블랑D)
        this.welDoc.on('click', '._settingAfterHours li a', $.proxy(this.settingAfterHours, this));

        // 학교 전체 삭제 팝업
        this.welDoc.on('click', '.popup_delete ._btnCancel', $.proxy(this.allSchoolDeleteCancel, this));
        this.welDoc.on('click', '.popup_delete ._btnConfirm', $.proxy(this.allSchoolDeleteConfirm, this));

        // 공기리포트 이동
        this.welDoc.on('click', '.btn_report', $.proxy(this.moveToAirReport, this));
        //device 공통 이벤트

        this.welDoc.on('click', '._btnOkError', $.proxy(this.errorPopupClose, this));

        //connStatYn N 상태일 때
        this.welDoc.on('click', '.wrap_contents .box_card ._btnConnectErrorClose', $.proxy(this.connectErrorPopupClose, this));


        setTimeout(function () {
            $('body').find('>div').on('swipedown', function (e, touch) {
                self.refreshPullDown(e, touch)
            });
        }, 500)


    },
    moveToAirReport: function () {
        /*window.location.hash ="#airReport";*/
    },
    moveToSearchSchool: function () {
        window.location.hash = "#searchSchool";
    },
    moveToAirMultiSensor: function () {
        window.location.hash = "#airMultiSensor";
    },
    moveToAirPurifier: function () {
        window.location.hash = "#airPurifier";
    },
    moveToDetail: function (event) {
        var target = $(event.currentTarget);

        App.vars.oSchoolDetail = {
            rtnDvcIdList: [],
            oDeviceInfo: [],
            oDeviceInfoRoot: [],
            dvcIdList: [],
            intariorSensorChartData: [],
            nIdx: target.parents('li').index()
        };

        target.parents('#deviceList').find('>li').each(function () {
            var rtnDvcIdListData = {"rtnDvcId": $(this).data('dvcid')};
            var dvcIdListData = {"dvcId": $(this).data('dvcid')};

            App.vars.oSchoolDetail.rtnDvcIdList.push(rtnDvcIdListData);
            App.vars.oSchoolDetail.dvcIdList.push(dvcIdListData);
        });

        //로그인 schcd
        App.vars.isSchoolCode = false;

        // 학교코드와 기기코드 비교
        if (App.vars.schCd !== undefined) {
            if (target.data('schcd') === App.vars.schCd) {
                App.vars.isSchoolCode = true;
            }
        }

        if (App.vars.loginId) {
            window.location.hash = "#schoolDetail";
        } else {
            /*if(isMobile.Android()){
                window.AirManager.callLoginView();
            }else{
                window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
            }*/

            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                // ios
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            } else {
                // pc
            }
            App.vars.afterLogin = "schoolDetail"
        }
    },

    openAllMenu: function () {

        /*if(isMobile.Android()){
            window.AirManager.callSideMenu();
        }else{
            window.webkit.messageHandlers.AirManager.postMessage({command:"callSideMenu"});
        }*/

        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.callSideMenu();
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            window.webkit.messageHandlers.AirManager.postMessage({command: "callSideMenu"});
        } else {
            // pc
        }
    },
    movePrevPage: function () {
        // if (App.vars.multipleWebapp) {
        //     if (window.history.length <= 3) {
        //         if (typeof window.AirManager !== 'undefined') {
        //             // android
        //             window.AirManager.callAppExit();
        //         } else if (typeof window.webkit !== 'undefined') {
        //             // ios
        //             window.webkit.messageHandlers.AirManager.postMessage({command:"callAppExit"});
        //         } else {
        //             // pc
        //             alert('앱 종료 혹은 웹뷰 종료');
        //         }
        //     } else {
        //         window.history.back();
        //     }
        // } else {
        // $('h1').text(window.history.length);
        // setTimeout(function () {


        if (App.router.history.length <= 2 ||
            (window.location.hash == "#home" && App.mainMap.zoom < 17) ||
            window.location.hash == "mySchool" ||
            window.location.hash == "") {

            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callAppExit();
            } else if (typeof window.webkit !== 'undefined') {
                // ios
                window.webkit.messageHandlers.AirManager.postMessage({command: "callAppExit"});
            } else {
                // pc
                alert('앱 종료 혹은 웹뷰 종료');
            }
        } else if (window.location.hash == "#home" && App.mainMap.zoom >= 17) {
            App.view.globalEventView.initMap();
        } else {
            //todo
            App.router.history.pop();
            return App.router.navigate(App.router.history.pop(), true);
        }


        // if (window.history.length <= 2) {
        //     if (typeof window.AirManager !== 'undefined') {
        //         // android
        //         window.AirManager.callAppExit();
        //     } else if (typeof window.webkit !== 'undefined') {
        //         // ios
        //         window.webkit.messageHandlers.AirManager.postMessage({command:"callAppExit"});
        //     } else {
        //         // pc
        //         alert('앱 종료 혹은 웹뷰 종료');
        //     }
        // } else {
        //     window.history.back();
        // }
        // },2000)

        // }

    },
    registerMySchool: function (e) {
        var self = this;
        var elRegisterCheckbox = $(e.currentTarget);
        if (elRegisterCheckbox.prop('checked')) {
            console.log("elRegisterCheckbox=======> ", elRegisterCheckbox);
            self.oRegisterInfo.schCd = elRegisterCheckbox.data('school-id');
            self.oRegisterInfo.lv = elRegisterCheckbox.data('lv');
            self.oRegisterInfo.cls = elRegisterCheckbox.data('cls');
            self.oRegisterInfo.loginId = App.vars.loginId;
            console.log(self.oRegisterInfo);
            console.log(elRegisterCheckbox.prop('checked'));
            App.view.mySchoolDetail.registerMySchool(self.oRegisterInfo);

        } else {
            self.oDeleteInfo.userSchId = elRegisterCheckbox.attr('id');
            self.oDeleteInfo.loginId = App.vars.loginId;
            elRegisterCheckbox.attr('id', '');
            App.view.mySchoolDetail.deleteMySchool(self.oDeleteInfo);

        }

    },
    addInputRecentList: function () {
        var self = this;
        var sInputValue = $('.search_box .text_box').val();
        self.searchText.serKey = sInputValue;
        self.searchText.loginId = App.vars.loginId;
        App.view.searchSchool.addRecentSearchList(self.searchText);
        App.view.searchSchool.searchResultTempleteBinding(self.searchText);
    },
    openAllSchoolDeleteDialog: function () {
        App.util.openAllSchoolDeletePopup();
    },
    allSchoolDeleteCancel: function () {
        App.util.closeAllSchoolDeletePopup();
        console.log(1)
    },
    allSchoolDeleteConfirm: function () {
        var nTargetListId = "all";
        App.view.searchSchool.deleteRecentSearchList(nTargetListId);
        App.util.closeAllSchoolDeletePopup();
        console.log(1)
    },
    autoCompleteSearch: function () {
        var self = this;
        var sInputValue = $('.search_box .text_box').val();
        if (sInputValue !== "" && sInputValue.length >= 2) {
            self.oSearchAutoText.serKey = sInputValue;
            App.view.searchSchool.autoCompleteSearch(self.oSearchAutoText);
        } else if (sInputValue.length == 0) {
            App.view.searchSchool.searchRecentTempleteBinding();
        }
    },
    inputDeleteButtonShow: function () {
        var elBtnDelete = $('.btn_input_delete');
        elBtnDelete.css({opacity: 1})
    },
    inputDeleteButtonHide: function () {
        var elBtnDelete = $('.btn_input_delete');
        elBtnDelete.css({opacity: 0})
    },
    inputValueDelete: function () {
        var self = this;
        var elSearchInput = $('.text_box');
        elSearchInput.val('').focus();
        App.view.searchSchool.searchRecentTempleteBinding();
    },
    clickRecentList: function (evt) {
        var self = this;
        var targetText = $(evt.currentTarget).text();
        self.searchText.serKey = targetText;
        self.searchText.loginId = App.vars.loginId;
        App.view.searchSchool.searchResultTempleteBinding(self.searchText);
    },
    clickOutSensor: function (evt) {
        var target = $(evt.currentTarget);
        var nSchoolCode = target.data('school-code');
        var sSchoolTitle = target.data('school-name');
        // 학교이름 저장
        App.vars.oSchoolCode = nSchoolCode;
        App.vars.sSelectedSchoolTitle = sSchoolTitle;

        window.location.hash = "#mySchoolDetail";
    },
    clickResultList: function (evt) {
        var target = $(evt.currentTarget);
        var nSchoolCode = target.data('school-code');
        // 학교이름 저장
        App.vars.oSchoolCode = nSchoolCode;
        App.vars.sSelectedSchoolTitle = target.find('p').text();

        if (App.vars.loginId) {
            window.location.hash = "#mySchoolDetail";
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            /*if(isMobile.Android()){
                window.AirManager.callLoginView();
            }else{
                window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
            }*/
            App.vars.afterLogin = "mySchoolDetail";
        }

    },
    clickSchoolResultList: function (evt) {
        var target = $(evt.currentTarget);
        var nSchoolCode = target.data('school-code');
        var sSchoolTitle = target.find('.school_name').text();
        // 학교이름 저장
        App.vars.oSchoolCode = nSchoolCode;
        App.vars.sSelectedSchoolTitle = sSchoolTitle;
        if (target.hasClass('_detailLink')) {
            if (App.vars.loginId) {
                window.location.hash = "#mySchoolDetail";
            } else {
                if (typeof window.AirManager !== 'undefined') {
                    // android
                    window.AirManager.callLoginView();
                } else if (typeof window.webkit !== 'undefined') {
                    window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
                }
                /*if(isMobile.Android()){
                    window.AirManager.callLoginView();
                }else{
                    window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
                }*/
                App.vars.afterLogin = "mySchoolDetail";
            }
        }
    },
    tabMenu: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var elTabMenu = $('.tab-menu li');
        var elFocusMenu = $('.tab-menu li.focus');
        var ntabMenuIndex = target.parent().index();
        target.parent().addClass('focus').removeClass('visited').siblings().removeClass('focus');
        if (ntabMenuIndex == "0") {
            self.localeData = {
                "sidoCd": "",
                "siguCd": "",
                "schType": ""
            };
            elTabMenu.removeClass('visited');
            elTabMenu.eq(1).find('a').text('시/군/구');
            App.view.localeList.selectLocale[1].selectItem = null;
        } else {
            self.localeData.siguCd = "";
            self.localeData.schType = "";
        }

        App.view.localeList.siguTempleteBinding(self.localeData);
    },
    subTabMenu: function (event) {
        var target = $(event.currentTarget);
        var ntabMenuIndex = target.parent().index();
        var elTabContents = $('.tab-contents > div');

        target.parent().addClass('focus').siblings().removeClass('focus');
        elTabContents.eq(ntabMenuIndex).addClass('active').siblings().removeClass('active');
    },
    localeSelect: function (event) {
        var self = this;
        var target = $(event.currentTarget);
        var elFocusTab = $('.tab-menu ul li.focus');
        var elFocusTabLink = $('.tab-menu ul li.focus a');
        var nFocusTabIndex = $('.tab-menu ul li.focus').index();
        var nSeletedItemIndex = target.parent().index();
        var sLocaleText = target.text();
        var code = target.data('locale-code');
        // 탭 텍스트 변경
        elFocusTabLink.text(sLocaleText);

        // 지역 선택
        target.parent().addClass('selected').siblings().removeClass('selected');

        // 시도 및 시군구 코드값 전달
        if (nFocusTabIndex == 0) {
            self.localeData = {
                "sidoCd": code,
                "siguCd": "",
                "schType": ""
            };
            elFocusTab.addClass('visited').removeClass('focus').next().addClass('focus');
        }
        if (nFocusTabIndex == 1) {
            self.localeData.siguCd = code;
            self.localeData.schType = "1";
            elFocusTab.addClass('visited').removeClass('focus').next().addClass('focus');
        }
        if (nFocusTabIndex == 2) {
            self.localeData.schType = code;
        }

        App.view.localeList.siguTempleteBinding(self.localeData);
        App.view.localeList.selectLocale[nFocusTabIndex] = {"selectItem": nSeletedItemIndex}

    },
    accordionMenu: function (event) {
        var target = $(event.currentTarget);
        target.parent().toggleClass('current')
    },
    initMap: function (evt) {
        /*App.view.homeMain.mainMap.destroy();*/
        App.view.homeMain.refreshMap(evt);
    },
    moveMyLocation: function () {
        if (App.vars.loginId) {
            App.view.homeMain.moveMyLocation();
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            /*if(isMobile.Android()){
                window.AirManager.callLoginView();
            }else{
                window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
            }*/
        }

    },
    goToLocaleList: function () {
        if (window.location.hash == "#home" || window.location.hash == "#mySchool") {
            window.location.hash = "#localeList";
        } else {
            window.location.hash = "#home";
        }
    },
    mySchoolList: function () {

        if (App.vars.loginId) {
            window.location.hash = "#mySchool";
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            App.vars.afterLogin = "mySchool"
        }

    },
    moveMainPage: function () {
        window.location.hash = "#home";
    },
    goToHistoryAlarm: function (e) {
        var target = $(e.currentTarget);
        var rtnDvcId = target.data("rtndvcid");
        if (target.hasClass('icon_check')) {
                App.vars.rtnDvcId = '';
        }else{
            App.vars.rtnDvcId = rtnDvcId;
        }
        App.vars.prevLocation = window.location.hash;
        window.location.hash = "#historyAlarm";
    },
    goToInformationDetail: function () {
        App.vars.prevLocation = window.location.hash;
        window.location.hash = "#informationDetail";
    },
    /*goToAirReportDetail: function () {
        App.vars.prevLocation = window.location.hash;
        window.location.hash = "#airReportDetail";
    },*/
    goToSchoolDetail: function (e) {
        var target = $(e.currentTarget);
        var sParamSchoolCode = target.data('school-code');
        var sSchoolTitle = target.find('.name').text();
        /*App.router.navigate("mySchoolDetail", sParamSchoolCode);*/

        App.vars.oSchoolCode = sParamSchoolCode;
        App.vars.sSelectedSchoolTitle = sSchoolTitle;


        if (App.vars.loginId) {

            window.location.hash = "#mySchoolDetail";
        } else {
            if (typeof window.AirManager !== 'undefined') {
                // android
                window.AirManager.callLoginView();
            } else if (typeof window.webkit !== 'undefined') {
                window.webkit.messageHandlers.AirManager.postMessage({command: "callLoginView"});
            }
            /*            if(isMobile.Android()){
                            window.AirManager.callLoginView();
                        }else{
                            window.webkit.messageHandlers.AirManager.postMessage({command:"callLoginView"});
                        }*/
            App.vars.afterLogin = "mySchoolDetail";
        }
    },
    deleteRecentSearchList: function (e) {
        var target = $(e.currentTarget);
        var nTargetListId = target.parent().data('school-id');
        App.view.searchSchool.deleteRecentSearchList(nTargetListId);
    },
    openPopupSettingTImer: function () {
        App.util.openSettingTurnOffPopup();
        window.location.hash = "#openPopupSettingTImer";

    },
    closePopupSettingTImer: function () {
        App.util.closeSettingTurnOffPopup();
        App.view.popupSettingTurnOffTimer.timeInit();
    },
    confirmPopupSettingTImer: function () {
        var nCurrentTime = moment();
        var oCurrentTime = moment().toObject();
        var nReservationTime = moment().add(App.view.popupSettingTurnOffTimer.nSettingTime.hours, "hours").add(App.view.popupSettingTurnOffTimer.nSettingTime.minutes, "minutes");
        var oReservationTime = moment().add(App.view.popupSettingTurnOffTimer.nSettingTime.hours, "hours").add(App.view.popupSettingTurnOffTimer.nSettingTime.minutes, "minutes").toObject();
        var nTransformTime = nReservationTime.format("hh:mm");
        var sReservationTimeDayAmPm = nReservationTime.calendar().slice(0, 5);
        var sReservationTimeAmPm = nReservationTime.calendar().slice(3, 5);
        var nHours = App.view.popupSettingTurnOffTimer.nSettingTime.hours;
        var nMins = App.view.popupSettingTurnOffTimer.nSettingTime.minutes;
        console.log(nHours, nMins)
        if (App.view.popupSettingTurnOffTimer.nSettingTime.hours == "00" && App.view.popupSettingTurnOffTimer.nSettingTime.minutes == "00") {
            alert("시간을 설정해 주세요")
        } else {
            if (oCurrentTime.date == oReservationTime.date) {
                $('.turn_off_timer .desc_date .day').text(sReservationTimeAmPm);
            } else {
                $('.turn_off_timer .desc_date .day').text(sReservationTimeDayAmPm);
            }
            $('.turn_off_timer .desc_date .time').text(nTransformTime);

            $('._turnoff').addClass('active');
            this.closePopupSettingTImer();
            App.view.popupSettingTurnOffTimer.sendTurnOffReservation(nHours + nMins);
        }

    },
    settingAfterHours: function (e) {
        var target = $(e.currentTarget);
        var nHours = target.data('hours');
        var oCurrentTime = moment().toObject();
        var nReservationTime = moment().add(nHours, "hours");
        var oReservationTime = moment().add(nHours, "hours").toObject();
        var nTransformTime = nReservationTime.format("hh:mm");
        var sReservationTimeDayAmPm = nReservationTime.calendar().slice(0, 5);
        var sReservationTimeAmPm = nReservationTime.calendar().slice(3, 5);
        console.log(nHours)
        $('._turnoff').addClass('active');
        if (oCurrentTime.date == oReservationTime.date) {
            $('.turn_off_timer .desc_date .day').text(sReservationTimeAmPm);
        } else {
            $('.turn_off_timer .desc_date .day').text(sReservationTimeDayAmPm);
        }
        $('.turn_off_timer .desc_date .time').text(nTransformTime)
        this.closePopupSettingTImer();
        App.view.popupSettingTurnOffTimer.sendTurnOffReservation(nHours + "00");
    },
    releasePopupSettingTImer: function () {
        $('._turnoff').removeClass('active');
    },
    errorPopupClose: function () {
        $('#networkErrorPopup').remove();
        window.history.back();

    },
    connectErrorPopupClose: function (e) {
        var target = $(e.currentTarget);
        target.parent('.box_card').remove();
    },
    prevent: function (event) {
        event.preventDefault();
    },
    refreshPullDown: function (e, touch) {
        var self = this;
        if (
            window.location.hash === "#mySchool" ||
            window.location.hash === "#mySchoolDetail" ||
            window.location.hash === "#schoolDetail"
        ) {
            if ($('.wrap_contents').scrollTop() === 0) {
                var startPosY = touch.startEvnt.offset.y;
                var endPosY = touch.endEvnt.offset.y;
                if (Math.abs(startPosY - endPosY) > 50) {
                    // console.log(Math.abs(startPosY - endPosY));
                    App.vars.reload = true;
                    $('#reloader').html(templete["globalUtil/pageReload"]());
                    App.util.updateDistance();
                }
            }
        } else {
            return false;
        }
    }
});

directory.globalUtil = Backbone.View.extend({
    initialize: function () {
        App.view.popupSettingTurnOffTimer = new directory.popupSettingTurnOffTimer();
        App.view.popupAllSchoolDelete = new directory.popupAllSchoolDelete();
        this.render();
    },
    pageLoadingShow: function () {
        $('body').append(templete["globalUtil/pageLoading"]());
    },
    pageLoadingHide: function () {
        $('.page_loading').remove();
    },
    getJsonFromUrl: function (hashBased) {
        var query;
        // App.util.toast(location.href.split("?")[1]);
        if (hashBased) {
            var pos = location.href.indexOf("?");
            if (pos == -1) return [];
            query = location.href.substr(pos + 1);
        } else {
            query = location.search.substr(1);
        }

        var result = {};
        query.split("&").forEach(function (part) {
            if (!part) return;
            part = part.split("+").join(" "); // replace every + with space, regexp-free version
            var eq = part.indexOf("=");
            var key = eq > -1 ? part.substr(0, eq) : part;
            var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
            var from = key.indexOf("[");
            if (from == -1) result[decodeURIComponent(key)] = val;
            else {
                var to = key.indexOf("]", from);
                var index = decodeURIComponent(key.substring(from + 1, to));
                key = decodeURIComponent(key.substring(0, from));
                if (!result[key]) result[key] = [];
                if (!index) result[key].push(val);
                else result[key][index] = val;
            }
        });
        return result;
    },
    getDeviceControl: function (dvcCd, data, turnOffMode) {
        var oData;
        switch (dvcCd) {
            //위닉스 타이탄
            case "위닉스 타이탄" :
                App.device.airPurifierWinixTaitan = new directory.airPurifierWinixTaitan;
                oData = App.device.airPurifierWinixTaitan.render(data);
                break;

            //위닉스 XQ
            case "DVC0000186" :
                App.device.airPurifierWinixXq = new directory.airPurifierWinixXq;
                oData = App.device.airPurifierWinixXq.render(data);
                break;

            //삼성전자
            case "DVC0000182" :
                App.device.airPurifierSamsungPurifier = new directory.airPurifierSamsungPurifier;
                oData = App.device.airPurifierSamsungPurifier.render(data);

                break;

            //그린망고
            case "DVC0001350" :
                App.device.airMultiSensorGreenMango = new directory.airMultiSensorGreenMango;
                oData = App.device.airMultiSensorGreenMango.render(data);
                break;

            //현대
            case "DVC0000204" :
                App.device.airMultiSensorHyundai = new directory.airMultiSensorHyundai;
                oData = App.device.airMultiSensorHyundai.render(data);
                break;

            //LG전자 몽블랑 D+
            case "DVC0000241" :
                App.device.airPurifierLgDplus = new directory.airPurifierLgDplus;
                oData = App.device.airPurifierLgDplus.render(data);
                break;

            //LG전자 G+
            case "LG전자 G+" :
                App.device.airPurifierLgGplus = new directory.airPurifierLgGplus;
                oData = App.device.airPurifierLgGplus.render(data);
                break;

            //LG전자 몽블랑 S
            case "LG전자 몽블랑 S" :
                App.device.airPurifierLgS = new directory.airPurifierLgS;
                oData = App.device.airPurifierLgS.render(data);
                break;

            //청호나이스
            case "청호나이스" :
                App.device.airPurifierNicePurifier = new directory.airPurifierNicePurifier;
                oData = App.device.airPurifierNicePurifier.render(data);
                break;

            //대유위니아 가습청정기
            case "대유위니아 가습청정기" :
                App.device.airPurifierWiniaHumidfy = new directory.airPurifierWiniaHumidfy;
                oData = App.device.airPurifierWiniaHumidfy.render(data);
                break;

            //대유위니아 공기청정기
            case "대유위니아 공기청정기" :
                App.device.airPurifierWiniaPurifier = new directory.airPurifierWiniaPurifier;
                oData = App.device.airPurifierWiniaPurifier.render(data);
                break;

            //위닉스 나이키 (위닉스 타워)
            case "DVC0000173" :
                App.device.airPurifierWinixNike = new directory.airPurifierWinixNike;
                oData = App.device.airPurifierWinixNike.render(data);
                break;

            //위닉스 제로플러스
            case "DVC0000203" :
                App.device.airPurifierWinixZeroplus = new directory.airPurifierWinixZeroplus;
                oData = App.device.airPurifierWinixZeroplus.render(data, turnOffMode);
                break;

            //어웨어
            case "DVC0000185" :
                App.device.airMultiSensorAwair = new directory.airMultiSensorAwair;
                oData = App.device.airMultiSensorAwair.render(data);
                break;


        }
        return oData;
    },
    showLoading: function () {


        if (typeof window.AirManager !== 'undefined') {
            // android

            window.AirManager.callLoadingBar(true);


        } else if (typeof window.webkit !== 'undefined') {
            // ios
            message = {
                command: "callLoadingBar",
                show: true
            };

            window.webkit.messageHandlers.AirManager.postMessage(message);

        } else {
            // pc
            // alert('loading show')
        }
        /*if(isMobile.Android()){
            window.AirManager.callLoadingBar(true);
        }else{
            message = {
                command: "callLoadingBar",
                show: true
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        }*/

    },
    hideLoading: function () {

        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.callLoadingBar(false);
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            message = {
                command: "callLoadingBar",
                show: false
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);

        } else {
            // pc
            // alert('loading hide');
        }
        /*if(isMobile.Android()){
            window.AirManager.callLoadingBar(false);
        }else{
            // ios
            message = {
                command: "callLoadingBar",
                show: false
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        }*/
    },
    toast: function (msg) {
        if (typeof window.AirManager !== 'undefined') {
            // android
            window.AirManager.callToastMsg(msg);
        } else if (typeof window.webkit !== 'undefined') {
            // ios
            var message = {
                command: "callToastMsg",
                msg: msg
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        } else {
            // pc
            alert(msg)
        }
        /*if(isMobile.Android()){
            window.AirManager.callToastMsg(msg);
        }else{
            // ios
            var message = {
                command: "callToastMsg",
                msg: msg
            };
            window.webkit.messageHandlers.AirManager.postMessage(message);
        }*/
    },
    openSettingTurnOffPopup: function () {
        $('.popup_dim').remove();
        App.view.popupSettingTurnOffTimer.render();

    },
    closeSettingTurnOffPopup: function () {
        App.view.popupSettingTurnOffTimer.remove();
    },
    openAllSchoolDeletePopup: function () {
        $('.popup_dim').remove();
        App.view.popupAllSchoolDelete.render();
    },
    closeAllSchoolDeletePopup: function () {
        App.view.popupAllSchoolDelete.remove();
    },
    pageRefresh: function () {
        var sHash = window.location.hash;
        switch (sHash) {
            case "#mySchool":
                break;
            case "#mySchoolDetail":
                break;
            case "#schoolDetail":
                break;
        }
    },
    openNetworkErrorPopup: function () {
        $('body').append(templete["popup/popupNetworkError"]());
    },
    updateDistance: function () {
        // console.log(nDistance);
        switch (window.location.hash) {
            case "#mySchool" :
                // console.log('reload');
                App.view.mySchool.render();
                break;
            case "#mySchoolDetail" :
                // console.log('reload');
                App.view.mySchoolDetail.$el.empty();
                App.view.mySchoolDetail.render();
                break;
            case "#schoolDetail" :
                // console.log('reload');
                App.view.schoolDetail.render();
                break;
        }

        App.vars.reload = true;
    },
    hidePageReloading: function () {
        $('#reloader').empty();
    }
});

// 내 현재 위치 가져오기 callback
window.AirManagerWeb = {
    callbackCurrentPosition: function (lat, lon) {
        App.vars.latitude = lat;
        App.vars.longitude = lon;
        if (lat == 0 && lon == 0) {
            // 내위치로
            App.view.homeMain.initMap({
                "lat": App.vars.latitude,
                "lon": App.vars.longitude
            });
        }
        /*$('h1').text('currentPosition lat: ' + lat + '/lon:' + lon);*/
    },
    callbackLoginId: function (loginId, userCertTknVal, schCd) {
        App.vars.loginId = loginId;
        App.vars.token = userCertTknVal;
        App.vars.schCd = schCd;
        /*$('h1').text('userCertTknVal' + userCertTknVal );*/
        /*"loginId": "seokan@ubivelox.com"*/
    },
    callbackLoginResult: function (loginId, userCertTknVal, schCd) {
        // $('h1').text('callbackLoginResult: ' + loginId);
        // $('#callbackLoginResult').text('callbackLoginResult: ' + loginId)
        App.vars.loginId = loginId;
        App.vars.token = userCertTknVal;
        App.vars.schCd = schCd;
        // if (loginId !== "" && App.vars.afterLogin !== null) {
        //     window.location.hash = App.vars.afterLogin;
        //     App.vars.afterLogin = null;
        // }
        App.router.branch();
        alert('result brunch');
    },
    callbackLogout: function () {
        App.vars.loginId = "";
        // window.location.hash = "#home";
        App.router.branch();
        alert('logout brunch');
    },

    callbackHistoryBack: function () {
        // App.util.toast(window.history.length);
        if (
            window.history.length <= 2 ||
            (window.location.hash == "#home" && App.mainMap.zoom < 17) ||
            window.location.hash == "mySchool" ||
            window.location.hash == ""
        ) {
            window.AirManager.callAppExit();
        } else if (window.location.hash == "#home" && App.mainMap.zoom >= 17) {
            App.view.homeMain.historyBackRefreshMap();
        } else {
            window.history.back();
            /*Backbone.history.history.back();*/
        }
        if ($('.popup_dim').length > 0) {
            $('.popup_dim').remove();
        }
    },
    callbackRegDvc: function () {
        window.location.hash === "#home";
    }
};


directory.mainHeader = Backbone.View.extend({
    render: function () {
        var sWindowHash = window.location.hash.slice(1);
        $('.wrap_header').html(templete["header/mainHeader"](sWindowHash)).removeClass('wrap_header_bd');
        return this;
    }
});
directory.subHeader = Backbone.View.extend({
    data: {},
    render: function (opt) {
        var self = this;
        var isMySchoolDetail = false;
        var isAirMultiSensor = false;
        if(window.location.hash == "#mySchoolDetail"){
            isMySchoolDetail = true;
        } else if (window.location.hash == "#airMultiSensor"){
            isAirMultiSensor = true;
        }
        self.data.isMySchoolDetail = isMySchoolDetail;
        self.data.isAirMultiSensor = isAirMultiSensor;
        $('.wrap_header').html(templete["header/subHeader"](self.data)).addClass('wrap_header_bd');
        return this;
    }
})
directory.historyAlarm = Backbone.View.extend({
    schoolCardSlider: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;
        
        // 헤더 바인딩
        App.view.subHeader.render();




        //api
        App.model.deviceOpr.fetch({
            method: "GET",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: {
                "count":20,
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
            complete : function(){
                App.util.hideLoading();
            },
            error : function (e, response) {
                /*App.util.toast(response.responseJSON.resultMsg)*/
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();

            }
        });
        
    }
});
directory.indexList = Backbone.View.extend({
    initialize: function (params) {

        this.render();
    },
    render: function () {

        this.$el.html(templete["indexList/indexList"]());

        $('.wrap_contents').html(this.$el)
        $('.wrap_header h1').text("");
    }
});
directory.informationDetail = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var self = this;

        // 헤더 바인딩
        App.view.subHeader.render();

        var data = App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx];

        // 템플릿팅
        self.$el.html(templete["informationDetail/informationDetail"](data));
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');

    }
});
directory.localeList = Backbone.View.extend({
    selectLocale: [{
        "selectItem": null
    },
        {
            "selectItem": null
        }
    ],
    localeData: {
        "sidoCd": "",
        "siguCd": "",
        "schType": ""
    },
    activeTabIndex: null,
    initialize: function () {
        App.view.mainHeader = new directory.mainHeader();
        this.render();
    },
    render: function () {
        var self = this;

        // 헤더 바인딩
        if (App.vars.entryAppDevice) {
            App.view.subHeader.render();
        } else {
            App.view.mainHeader.render();
        }

        // 템플릿팅
        self.$el.html(templete["localeList/localeList"]());


        this.siguTempleteBinding();
        this.initLocaleData();
        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');

    },
    initLocaleData: function () {
        var self = this;
        self.localeData = {
            "sidoCd": "",
            "siguCd": "",
            "schType": ""
        };
        self.selectLocale = [{
            "selectItem": null
        },
            {
                "selectItem": null
            }
        ]
    },
    bindTabContents: function (idx) {
        var self = this;
        var elTabContents = (idx) ? (idx + 1) : 1;
        // 세 번째 탭에서만 서브탭 바인딩
        if (elTabContents == "3") {
            self.$el.find('.tab-menu').after(templete["localeList/localeListSubTab"]());
        } else {
            self.$el.find('.sub_tabs').remove();
        }
        // 탭 별 컨텐츠 템플릿팅
        self.$el.find('.tab-contents').html(templete["localeList/localeArea0" + elTabContents]());
    },
    siguTempleteBinding: function (localeData) {
        var self = this;
        self.activeTabIndex = self.$el.find('.tab-menu li.focus').index();

        self.localeData = $.extend(self.localeData, localeData);
        App.model.schoolSearch.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(self.localeData),
            beforeSend: function () {
                /*App.util.pageLoadingShow();*/
            },
            success: function (model, response) {
                if (
                    response.sidoList !== undefined &&
                    response.sidoList.length === 0
                ) {
                    App.util.toast("시/도 데이터 조회에 실패하였습니다");
                } else if (
                    response.siguList !== undefined &&
                    response.siguList.length === 0
                ) {
                    App.util.toast("시/구 데이터 조회에 실패하였습니다");
                } else if (
                    response.schList !== undefined &&
                    response.schList.length === 0
                ) {
                    App.util.toast("등록된 초등학교가 없습니다");
                }

                if (self.activeTabIndex == "0") {
                    $('.sub_tabs').remove();
                    self.$el.find('.tab-contents').html(templete["localeList/localeArea01"](response));
                    if (App.view.localeList.selectLocale[0].selectItem !== null) {
                        self.$el.find('.area_local_choice li').eq(App.view.localeList.selectLocale[0].selectItem).addClass('selected')
                    }
                } else if (self.activeTabIndex == "1") {
                    $('.sub_tabs').remove();
                    self.$el.find('.tab-contents').html(templete["localeList/localeArea02"](response));
                    if (App.view.localeList.selectLocale[1].selectItem !== null) {
                        self.$el.find('.area_local_choice li').eq(App.view.localeList.selectLocale[1].selectItem).addClass('selected')
                    }
                } else {
                    self.$el.find('.tab-menu').after(templete["localeList/localeListSubTab"]());
                    self.$el.find('.tab-contents').html(templete["localeList/localeArea03"](response));
                }


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
    }
});
directory.homeMain = Backbone.View.extend({
    oStartTouchPos: {
        "x": null,
        "y": null
    },
    bLogin: false,
    bZoom: false,
    bRefresh:false,
    sLoginId: "",
    mainMap: null,
    schoolCardSlider: null,
    oSchoolData: null,
    loadingComplete: false,
    selectMarker : null,
    oMyLocation: null,
    sliderActive: false,
    initialize: function (params) {

        App.view.mainHeader = new directory.mainHeader();

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.view.mainHeader.render();
        // 템플릿팅

        if(App.vars.loginId){
            // 로그인 후
            self.$el.html(templete["main/mainLogin"]());
        } else {
            // 기본 메인
            self.$el.html(templete["main/main"]());

        }
        self.$el.addClass('wrap_main_map');
        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el);

        // 맵 설정
        this.initMap();
        /*this.currentSliderMoveMap();*/
    },
    initMap: function(option){
        var self = this;

        // 기본 Default 위치 (SKT타워)
        var mapData = {
            "lon": "126.9828357",
            "lat": "37.5664558"
        };
        if( App.vars.longitude == 0 || App.vars.latitude == 0){
            App.vars.longitude = "126.9828357";
            App.vars.latitude = "37.5664558";
        }
        var varsLonlat = {
            "lon": App.vars.longitude,
            "lat": App.vars.latitude
        };
        $.extend(mapData , varsLonlat);

        this.mainMap = App.mainMap = new Tmap.Map({
            div: 'school_map', // map을 표시해줄 div
            width: '100%',  // map의 width 설정
            height: '100%', // map의 height 설정
            minZoom: 6
        });

        bounds = new Tmap.Bounds(116.17194101627408,33.13910000993247,138.72760507876697,40.18028650161712).transform("EPSG:4326", "EPSG:3857"); //대한민국 영역의 bounds 객체 생성
        App.mainMap.events.register("moveend", App.mainMap, onMove);

        function onMove(){
            var center = App.mainMap.getCenter();
            bounds.containsLonLat(center);
            if(bounds.containsLonLat(center) == false){ //바뀐 지도의 중심점과 bounds 비교
                App.mainMap.zoomToExtent(bounds); //지도 중심점이 bounds 영역을 벗어나면 다시 bounds 영역으로 돌아옴
            }
        }

        var lonlat = new Tmap.LonLat(mapData.lon, mapData.lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat,14);
        App.mainMap.events.register("touchmove", App.mainMap, self.endTouchPosition);
        /*App.mainMap.events.register("touchend", App.mainMap, self.onMoveEnd);*/
        this.getMapData();
        $('.school_list_slide').css({opacity:0});

    },
    refreshMap: function(){

        this.getMapData();
        this.bRefresh = true;
    },
    historyBackRefreshMap: function(){
        var lonlat = new Tmap.LonLat(App.mainMap.getCenter().lon, App.mainMap.getCenter().lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat,14);
        $('.school_list_slide').css({opacity:0});
    },
    endTouchPosition: function(e){

        if(App.mainMap.zoom > 16 && App.vars.startPos.distanceTo(App.mainMap.getPixelFromLonLat(new Tmap.LonLat(App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lon, App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lat))) > 50){
            $('.school_list_slide').css({opacity:0});
            $('.tmLayerDiv > div').find('.box_map_icon_air.focus').addClass('dis');
        }
    },
    onMoveEnd: function (){
        var self = this;

        if(App.mainMap.zoom > 16 ){
            setTimeout(function(){
                $('.area_btn .btn').hide();
                $('.school_list_slide').css({opacity:1});
            },100);
            App.vars.startPos = App.mainMap.getPixelFromLonLat(new Tmap.LonLat(App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lon, App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lat))

        } else if(App.mainMap.zoom < 5){

        } else {
            setTimeout(function(){
                $('.area_btn .btn').show();
                $('.school_list_slide').css({opacity:0});
            },100)
            App.view.homeMain.getMapData();
            self.selectMarker = null;
        }


    },
    getMapData: function(){
        var self = this;

        var loginId = App.vars.loginId ;

        var mapData = {
            "lat": App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lat,
            "lon": App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lon,
            "loginId": loginId,
            "zoomLevel": App.mainMap.zoom,
            "mySchYn": "N",
            "size": "0",
            "offset": "0"
        };

        App.model.schoolListMap.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: JSON.stringify(mapData),
            beforeSend: function(){
                /*App.util.pageLoadingShow();*/
            },
            success : function (model, response) {
                App.vars.schoolData = response;
                console.log(response)
            },
            complete : function(){
                /*App.util.pageLoadingHide();*/
                self.setMap();
            },
            error : function (e) {
                /*App.util.hideLoading();*/
                //alert("서버 데이터 조회에 실패하였습니다");
                App.util.openNetworkErrorPopup();
            }
        });
    },
    setMap: function(){
        var self = this;
        var size, offset, icon;

        // 마커와 팝업을 세팅합니다.
        function MarkerPopup(marker) {
            this.marker = marker;
        }
        if (App.mainMap.markerLayer != null) App.mainMap.removeLayer(App.mainMap.markerLayer);
        App.mainMap.markerLayer = new Tmap.Layer.Markers(); // 마커를 추가할 레이어
        App.mainMap.addLayer(App.mainMap.markerLayer); // 맵에 마커 레이어를 추가합니다.
        App.mainMap.markerLayer.events.register( 'moveend', App.mainMap.markerLayer, function(evt){
            if( evt.zoomChanged == true ) {
                // 지도중심 변경 시 작업
                self.onMoveEnd();

            } else {
                self.moveCloseSlider();
            }
        });
        App.mainMap.removeZoomControl();
        size = new Tmap.Size(44, 53); // 마커 사이즈를 지정합니다.
        offset = new Tmap.Pixel(-(size.w / 2), -(size.h)); // 마커의 중심점을 조정합니다.(마커의 중앙하단으로 설정)

        // 공기 오염도 아이콘
        var blueIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air good">좋음</a></div>';
        var greenIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air normal">보통</a></div>';
        var yellowIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air bad">나쁨</a></div>';
        var redIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air worse">매우나쁨</a></div>';
        var schLonlat;
        var airGrd;

        for (var i = 0; i < App.vars.schoolData.schList.length; i++) {
            // 마커 위치
            schLonlat = new Tmap.LonLat(App.vars.schoolData.schList[i].lon, App.vars.schoolData.schList[i].lat).transform("EPSG:4326", "EPSG:3857");
            // 데이터 구분 공기오염도 아이콘
            switch(App.vars.schoolData.schList[i].airGrd){
                case "보통" :
                    airGrd = greenIcon;
                    break;
                case "-" :
                    airGrd = greenIcon;
                    break;
                case "좋음" :
                    airGrd = blueIcon;
                    break;
                case "나쁨" :
                    airGrd = yellowIcon;
                    break;
                case "매우나쁨" :
                    airGrd = redIcon;
                    break;
            }
            icon = new Tmap.IconHtml(airGrd, size, offset); // 마커 아이콘
            marker = new Tmap.Marker(schLonlat, icon); // 마커생성
            App.mainMap.markerLayer.addMarker(marker);  // 마커 레이어에 마커 추가
            //팝업 생성
            if(App.mainMap.zoom > 16){
                $(App.mainMap.markerLayer.markers[0].events.element).find('.box_map_icon_air').addClass('focus')
            }
            //마커 이벤트등록
            marker.events.register("click", new MarkerPopup(marker), onClickMarker); // 마커를 클릭했을 때 이벤트 설정
            marker.events.register("click", new MarkerPopup(marker), markerGetLonlat); // 마커를 클릭했을 때 이벤트 설정
        }

        function onClickMarker(evt){
            // 터치시 마커 중심으로 맵 이동
            $('.tmLayerDiv > div').find('.box_map_icon_air').removeClass('dis');
            $('.school_list_slide').css({opacity:1});
            if(!$(this.marker.events.element).find('.box_map_icon_air').hasClass('focus')){
                App.mainMap.setCenter(this.marker.lonlat,17);
                self.selectMarker = this.marker;
                $(this.marker.icon.imageDiv).find('.box_map_icon_air').addClass('focus');

            } else {

            }
            /*App.view.homeMain.getMapData();*/
        }
        function markerGetLonlat(evt){

            var nMarkerLonlat = evt.object.lonlat.transform("EPSG:3857", "EPSG:4326");
            var nMarkerLon = nMarkerLonlat.lon.toFixed(7);
            var nMarkerLat = nMarkerLonlat.lat.toFixed(7);
            var markerNum;

            if(self.loadingComplete){
                self.schoolCardSlider.destroySlider();
                $('.box_slide > div').remove();

            } else {
                self.loadingComplete = true;
            }

            self.addSliderSchool();
            self.mapCardSlider();

            self.goToSliderMarker($('.box_map_icon_air.focus').parent().index());
        }

    },

    mapCardSlider: function(){
        var self = this;
        this.schoolCardSlider = $('.slider');
        this.schoolCardSlider.bxSlider({
            hideControlOnEnd: true,
            adaptiveHeight: true,
            pager: false,
            slideMargin: 20,
            infiniteLoop: false,
            preventDefaultSwipeY: true,
            onSliderLoad: function(){

            },
            onSlideBefore: function() {
                /*self.currentSliderMoveMap($slideElement);*/

            },
            onSlideAfter: function(el, beforeIndex, currentIndex){
                App.vars.sliderIndex = currentIndex;
                self.currentSliderMoveMap(currentIndex);
                self.setCurrentMarkerAddClass(currentIndex);
            }

        });
    },
    moveCloseSlider: function(e){
        var self = this;

        if(App.mainMap.zoom > 16 ){

        }





    },
    moveMyLocation: function(){
        console.log('■■■ 내 위치로 ■■■');
        // 기본 Default 위치 (SKT타워)
        var mapData = {
            "lon": "126.9828357",
            "lat": "37.5664558"
        };
        var varsLonlat = {
            "lon": App.vars.longitude,
            "lat": App.vars.latitude
        };
        $.extend(mapData , varsLonlat);
        var lonlat = new Tmap.LonLat(mapData.lon, mapData.lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat,14);
    },
    goToSliderMarker: function (markerNum){
        this.schoolCardSlider.goToSlide(markerNum)
    },
    setCurrentMarkerAddClass: function(index){
        for(var i =0;i < App.mainMap.markerLayer.markers.length;i++){
            $(App.mainMap.markerLayer.markers[i].events.element).find('.box_map_icon_air').removeClass('focus')
        }
        $(App.mainMap.markerLayer.markers[index].events.element).find('.box_map_icon_air').addClass('focus');
    },
    currentSliderMoveMap: function(slideIndex){
        var self = this;
        /*if(self.loadingComplete){
            var elSlideElements = $(sliderElements);
            var nSliderIndex = elSlideElements.find('.box_school_list').attr('id').slice(9);
            var lonlat = new Tmap.LonLat(App.vars.schoolData.schList[nSliderIndex - 1].lon, App.vars.schoolData.schList[nSliderIndex - 1].lat).transform("EPSG:4326", "EPSG:3857");

            App.mainMap.setCenter(lonlat, App.mainMap.zoom);
        }*/

        var lonlat = new Tmap.LonLat(App.vars.schoolData.schList[slideIndex].lon, App.vars.schoolData.schList[slideIndex].lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat, App.mainMap.zoom);
    },
    addSliderSchool: function (){
        var self = this;
        var airState;

        /*console.log(App.vars.schoolData.schList);*/
        for (var i = 0; i < App.vars.schoolData.schList.length; i++) {
            switch(App.vars.schoolData.schList[i].airGrd){
                case "보통" :
                    airState = "normal";
                    break;
                case "좋음" :
                    airState = "good";
                    break;
                case "나쁨" :
                    airState = "bad";
                    break;
                case "매우나쁨" :
                    airState = "worse";
                    break;
            }
            var welSchoolList = '<div>' +
                '<div id="schoolNum' + App.vars.schoolData.schList[i].no +'" class="box_school_list">' +
                '<a href="#" class="_cardSlideLink" style="display: block;width:100%;height:100px;" data-school-code="'+App.vars.schoolData.schList[i].schCd+'">' +
                '<div>' +
                '<span class="sprite sprite_status sprite_air_mid '+ airState +'"></span>' +
                '<div class="school_info"><p class="name">'+ App.vars.schoolData.schList[i].schNm +'</p>' +
                '<p class="air_info '+ airState +'"><span>미세먼지</span>' + App.vars.schoolData.schList[i].pm10 + '<em>'+App.vars.schoolData.schList[i].airGrd +'</em></p>' +
                '<p class="none_place">학교주변 관측소에서 제공하는 정보입니다.</p></div></div></a></div></div>';

            $('.box_slide').append(welSchoolList);

        }

        /*self.mapCardSlider();*/
    }
});
directory.mySchool = Backbone.View.extend({
    bLogin: true,
    className: 'my_school_list',
    oMySchoolData: {
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },
    oSchoolList: null,
    initialize: function () {
        App.view.mainHeader = new directory.mainHeader();
        this.render();
    },
    render: function () {
        var self = this;

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
        App.view.mainHeader.render();

        // 나의 학교 리스트 바인딩
        if (App.vars.loginId) {
            this.mySchoolListBind();
        } else {
            self.$el.html(templete["mySchool/mySchool"]());
        }


        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');

        $('.wrap_contents').scrollTop(0);


    },
    mySchoolListBind: function () {
        var self = this;
        var oRtnDvcIdList = {"rtnDvcIdList": []};

        self.oMySchoolData.loginId = App.vars.loginId;

        App.model.mySchoolList.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: JSON.stringify(self.oMySchoolData),
            beforeSend: function () {

            },
            success: function (model, response) {
                console.log('@ App.model.mySchoolList');
                console.log(response);
                App.vars.mySchoolList = self.oSchoolList = response;

                if (self.oSchoolList.schList.length <= 0) {
                    self.$el.html(templete["mySchool/mySchool"]());
                } else {
                    self.$el.html(templete["mySchool/mySchoolLogin"](self.oSchoolList));
                }
                App.util.hideLoading();
                App.util.hidePageReloading();
                App.vars.reload = false;

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
    },

    setSchoolData: function (school, lvClass) {
        App.vars.sSelectedSchoolTitle = school + " ";
        App.vars.sSelectedLvClass = lvClass;
        // App.vars.aDeviceId = {"rtnDvcIdList": [{"rtnDvcId": dvcId}]}; //상세 조회를 위한 디바이스 ID
    }
});
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
directory.popupAllSchoolDelete = Backbone.View.extend({
    className:"popup_dim",
    initialize: function () {
    },
    remove: function () {
        $('.popup_dim').remove();
    },
    render: function () {

        $('body').append(this.$el.html(templete["popup/allSchoolDelete"]()));

    }

});
directory.popupSettingTurnOffTimer = Backbone.View.extend({
    className:"popup_dim",
    bSettingLoad: false,
    nSettingTime:{
        "hours" : null,
        "minutes" : null
    },
    oRequestData: {
        "rtnDvcId" : "",
        "schdStartTime" : ""
    },
    initialize: function () {
    },
    remove: function () {
        $('.popup_dim').remove();
    },
    render: function () {

        // 컨텐츠 바인딩
        if($('.active.DVC0000241').length > 0){
            // 몽블랑 D+ 일 경우만
            $('body').append(this.$el.html(templete["popup/settingHoursTurnOffTimer"]()));
        } else {
            $('body').append(this.$el.html(templete["popup/settingTurnOffTimer"]()));
            this.init()
        }

    },
    init: function(){
        var self = this;
        Hammer.plugins.fakeMultitouch();

        $("select.drum").drum({
            onChange : function (selected) {

                if(selected.id == "hours"){
                    self.nSettingTime.hours = selected.value;
                } else {
                    self.nSettingTime.minutes = selected.value;
                }

            }

        });

        this.update();
    },
    update: function (datetime) {
        var self = this;
        // $("#hours").drum('setIndex', datetime.getHours());
        // $("#minutes").drum('setIndex', datetime.getMinutes());
        if( self.nSettingTime.hours == null && self.nSettingTime.minutes == null && self.bSettingLoad == false){
            self.nSettingTime.hours = "00";
            self.nSettingTime.minutes = "00";
            self.bSettingLoad = true;
        } else {

            /*self.nSettingTime.hours = datetime.getHours();
            self.nSettingTime.minutes = datetime.getMinutes();*/
        }


    },
    sendTurnOffReservation: function(time){
        var self = this;

        self.oRequestData = {
            "rtnDvcId" : App.vars.sRtnDvcId,
            "schdStartTime" : time + "00"
        };
        console.log(self.oRequestData)
        App.model.bookingDeviceTurnOff.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: JSON.stringify(self.oRequestData),
            success: function (model, response) {
                console.log(response)
            },
            complete: function () {

            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    },
    timeInit: function(){
        var self = this;
        self.nSettingTime = {
            "hours" : "00",
            "minutes" : "00"
        }
    }
});
directory.schoolDetail = Backbone.View.extend({
    detailSlider: null,
    sRtnDvcId: null,
    initialize: function () {

        this.render();
    },
    render: function () {
        var self = this;

        // App.util.toast(window.location.href.split("?")[1])

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
                marginTop: 50,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 50,
                height: 220
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
<<<<<<< .mine
                categories: todayTm,
                tickInterval: 1,
                min:0,
||||||| .r2577
                categories: yesterdayTm,
                tickInterval: 1,
                min:0,
=======
                tickInterval: 2,
                min:1,
>>>>>>> .r2653
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
<<<<<<< .mine
                    format:'<div class="tooltip-marker-high"><a href="#">'+ todayMaxScore +'</a></div>',
||||||| .r2577
                    format:'<div class="tooltip-marker-high"><a href="#">'+ yesterdayMaxScore +'</a></div>',
=======
                    format:'<div class="tooltip-marker-high"><a href="#">'+'88'+'</a></div>',
>>>>>>> .r2653
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
<<<<<<< .mine
                        x: todayMaxScoreIndex,
                        y: 143
||||||| .r2577
                        x: yesterdayMaxScoreIndex,
                        y: 143
=======
                        xAxis: 0,
                        yAxis: 0,
                        x: 3,
                        y: 88
>>>>>>> .r2653
                    }
                }]
            },{
                labelOptions: {
                    useHTML :true,
<<<<<<< .mine
                    format:'<div class="tooltip-marker-low"><a href="#">'+ todayMinScore +'</a></div>',
||||||| .r2577
                    format:'<div class="tooltip-marker-low"><a href="#">'+ yesterdayMinScore +'</a></div>',
=======
                    format:'<div class="tooltip-marker-low"><a href="#">'+'44'+'</a></div>',
>>>>>>> .r2653
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
<<<<<<< .mine
                        x: todayaMinScoreIndex,
                        y: 0
||||||| .r2577
                        x: yesterdayaMinScoreIndex,
                        y: 0
=======
                        xAxis: 0,
                        yAxis: 0,
                        x: 6,
                        y: 44
>>>>>>> .r2653
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
<<<<<<< .mine
                        x: todayLastIndex,
||||||| .r2577
                        x: yesterdayLastIndex,
=======
                        x: 16,
>>>>>>> .r2653
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
directory.searchSchool = Backbone.View.extend({
    className :'area_search_wrap',
    oSearchResultData : {},
    oSearchRecentText : {
        "loginId":App.vars.loginId
    },
    oSearchAutoText : {
        "serKey": "",
        "size":"0",
        "offset": "0",
        "loginId":App.vars.loginId
    },
    initialize: function (routeParams) {

        this.render(routeParams);
    },
    render: function (routeParams) {
        var self = this;
        // 헤더 바인딩
        App.view.subHeader.render();
        console.log()
        // 템플릿팅
        self.$el.html(templete["searchSchool/searchSchoolWrap"]());

        if(
            App.vars.loginId === undefined ||
            App.vars.loginId === ''
        ){
            self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchNoResult"]());
        } else {
            this.searchRecentTempleteBinding();
        }

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');
        $('.wrap_contents').scrollTop(0);
    },
    searchResultTempleteBinding: function(val){
        var self = this;
        self.oSearchAutoText = $.extend(self.oSearchAutoText, val);
        // 검색 결과 템플릿 바인딩
        console.log(self.oSearchAutoText)
        self.oSearchAutoText.loginId = App.vars.loginId;
        App.model.searchSchoolResult.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(self.oSearchAutoText),
            beforeSend: function(){
                /*App.util.pageLoadingShow();*/
            },
            success : function (model, response) {
                self.oSearchResultData = response;
                if(self.oSearchResultData.schList.length <= 0){
                    self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchNoResult"]());
                } else {
                    console.log(response)
                    var sSearchText = $('.text_box').val();
                    for (var i = 0; i < response.schList.length; i++) {
                        response.schList[i].schNm = response.schList[i].schNm.replace(sSearchText, "<em>" + sSearchText + "</em>")
                    }
                    self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchResult"](self.oSearchResultData));
                }
            },
            complete : function(){
                /*App.util.pageLoadingHide();*/
            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });

    },
    searchRecentTempleteBinding: function(){
        var self = this;
        console.log(self.oSearchRecentText);
        // 최근 검색 템플릿 바인딩
        self.oSearchRecentText.loginId = App.vars.loginId;

        App.model.recentlySearchSchoolList.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(self.oSearchRecentText),
            beforeSend: function(){
                /*App.util.pageLoadingShow();*/
            },
            success : function (model, response) {
                self.oSearchResultData = response;
                if(self.oSearchResultData.schList.length <= 0){
                    self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchNoRecent"]());
                } else {

                    self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchRecent"](self.oSearchResultData));
                }
            },
            complete : function(){
                /*App.util.pageLoadingHide();*/
            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                App.util.openNetworkErrorPopup();
            }
        });
    },
    addRecentSearchList: function(val){
        var self = this;
        self.oSearchRecentText = $.extend(self.oSearchRecentText, val);
        
        // 최근검색 텍스트 보내기
        self.oSearchRecentText.loginId = App.vars.loginId;
        if(self.oSearchRecentText.serKey !== ""){
            App.model.searchSchoolResult.fetch({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(self.oSearchRecentText),
                beforeSend: function(){
                    /*App.util.pageLoadingShow();*/
                },
                success : function (model, response) {

                },
                complete : function(){
                    /*App.util.pageLoadingHide();*/
                },
                error : function (e) {
                    //alert("서버 데이터 조회에 실패하였습니다");
                    App.util.openNetworkErrorPopup();
                }
            });
        } else {
            alert('검색어를 입력해주세요');
        }
    },
    autoCompleteSearch: function(val){
        var self = this;
        self.oSearchAutoText = $.extend(self.oSearchAutoText, val);
        self.oSearchAutoText.loginId = App.vars.loginId;
        App.model.autoCompletedSearchSchool.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(self.oSearchAutoText),
            beforeSend: function(){
                /*App.util.pageLoadingShow();*/
            },
            success : function (model, response) {
                // $('._searchList li a').each(function(){
                //     var sSearchText = $('.text_box').val();
                //     var nSearchLength = sSearchText.length;
                //     var sSchoolName = $(this).text();
                //
                //     for (var i = 0; i < response.serList.length; i++) {
                //         response.serList[i].serKey = response.serList[i].serKey.replace(sSearchText, "<em>" + sSearchText + "</em>")
                //     }
                // })
                var sSearchText = $('.text_box').val();
                for (var i = 0; i < response.serList.length; i++) {
                    response.serList[i].serKey = response.serList[i].serKey.replace(sSearchText, "<em>" + sSearchText + "</em>")
                }


                self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchAutoComplete"](response));

            },
            complete : function(){
                /*App.util.pageLoadingHide();*/


                // $('._searchList li a').each(function(){
                //     var sSearchText = $('.text_box').val();
                //     var nSearchLength = sSearchText.length;
                //     var sSchoolName = $(this).text();
                //     if(sSchoolName.indexOf(sSearchText) >= 0){
                //         sSchoolName.replace(sSearchText, "")
                //
                //     }
                // })
            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                App.util.openNetworkErrorPopup();
            }
        });
    },
    deleteRecentSearchList: function(targetId){
        var self = this;
        var deleteTarget = {"loginId":App.vars.loginId,"serId":targetId};
        App.model.recentlySearchSchoolDelete.fetch({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(deleteTarget),
            success : function (model, response) {

            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                App.util.openNetworkErrorPopup();
            },
            complete: function(){
                /*App.util.pageLoadingHide();*/
                self.searchRecentTempleteBinding();
            }
        });
    },
    noResultTempleteBinding: function(){
        self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchNoResult"]());
    }
});
directory.wrapContainer = Backbone.View.extend({
    initialize: function (params) {

        this.render();
    },
    render: function () {

        /*App.fn.globalUtil = new directory.globalUtil();*/
        this.$el.html(templete["wrap/wrapContainer"]());

        return this;
    }
});
