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