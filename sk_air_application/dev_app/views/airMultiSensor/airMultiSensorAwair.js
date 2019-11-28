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