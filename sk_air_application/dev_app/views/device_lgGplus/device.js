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

        var data = App.vars.oSchoolDetail.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx];

        var home = parseInt(data.homeUseHour)*100/24;
        var other = parseInt(data.otherUseHour)*100/24;


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
                        data: [home,(100-home)]   //percent
                    }]
                },
                // using
                function(chart) { // on complete

                    var r, x, y, q = 1;
                    var p = chart.series[0].data[0];

                    r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;
                    q =  p.shapeArgs.end
                    x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;
                    y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;
                    chart.renderer.circle(x, y ,2).attr({
                        zIndex: 4,
                        fill: '#ff9f3e'
                    }).add();



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
                        data: [other,(100-other)]   //percent
                    }]
                },
                // using
                function(chart) { // on complete


                    var r, x, y, q = 1;
                    var p = chart.series[0].data[0];

                    r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;
                    q =  p.shapeArgs.end
                    x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;
                    y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;
                    chart.renderer.circle(x, y ,2).attr({
                        zIndex: 4,
                        fill: '#666666'
                    }).add();




                });
        });
    }
});