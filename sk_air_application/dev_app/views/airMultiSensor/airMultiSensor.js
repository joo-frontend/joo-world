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