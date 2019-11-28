Handlebars.registerHelper("airStateColor", function (airGrd ,connStatYn ,status) {
    var airStateColor;

    if(connStatYn === "N"){
        airStateColor = "no_respond";
    } else {
        if (status !== undefined) {
            if (status === "off") {
                airStateColor = "off"
            } else {
                switch (airGrd) {
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
                    case "측정중" :
                    case "" :
                    case "-":
                        airStateColor = "no_respond";
                        break;
                    default :
                        airStateColor = "default";
                        break
                }
            }
        }
    }

    return airStateColor;
});


Handlebars.registerHelper("cleanerStatus", function (data) {
    var cleanerStatus;
    switch (data) {
        case "01" :
            cleanerStatus = "good";
            break;
        case "02" :
            cleanerStatus = "normal";
            break;
        case "03" :
            cleanerStatus = "bad";
            break;
        case "04" :
            cleanerStatus = "worse";
            break;
    }
    return cleanerStatus;
});

Handlebars.registerHelper("airCircleColor", function (airGrd ,connStatYn ,data) {

    var airCircleColor;

    if(connStatYn === "N"){
        airCircleColor = "sprite_network_error";
    }else {
        switch (airGrd) {
            case "매우좋음" :
            case "좋음" :
            case "청정" :
                airCircleColor = "blue";
                break;
            case "보통" :
            case "저오염" :
                airCircleColor = "green";
                break;
            case "나쁨" :
                airCircleColor = "orange";
                break;
            case "중오염" :
                airCircleColor = "purple";
                break;
            case "매우나쁨" :
            case "고오염" :
                airCircleColor = "red";
                break;
            case "측정중" :
            case "" :
            case "-" :
                airCircleColor = "sprite_network_error";
                break;
            default :
                airCircleColor = "default";
                break;
        }
    }

    return airCircleColor;

});

Handlebars.registerHelper("responseAirGrd", function ( airGrd ,connStatYn, status) {
    var airStateText;

    if(connStatYn === "N"){
        airStateText = "미응답";
    } else  {
        if (status === "off") {
            airStateText = "OFF";
        } else {
            if(airGrd === ""){
                airStateText = "-";
            } else{
                airStateText = airGrd ;
            }
        }
    }

    return airStateText;
});


Handlebars.registerHelper("airStateText", function (data) {
    var airStateText;
    switch (data) {
        case "1" :
            airStateText = "좋음";
            break;
        case "2" :
            airStateText = "보통";
            break;
        case "3" :
            airStateText = "나쁨";
            break;
        case "4" :
            airStateText = "매우나쁨";
            break;
    }
    return airStateText;
});
Handlebars.registerHelper("subHeaderTitle", function (data) {
    var subHeaderTitle;
    switch (window.location.hash) {
        case "#searchSchool" :
            subHeaderTitle = "학교 검색";
            break;
        case "#mySchoolDetail" :
            subHeaderTitle = App.vars.sSelectedSchoolTitle;
            break;
        case "#historyAlarm" :
            subHeaderTitle = "이력 및 알림";
            break;
        case "#airReport" :
            subHeaderTitle = "공기 리포트";
            break;
        case "#informationDetail" :
            subHeaderTitle = "정보";
            break;
        case "#airMultiSensor":
        case "#airPurifier" :
        case "#schoolDetail" :
            subHeaderTitle = App.vars.sSelectedSchoolTitle + App.vars.sSelectedLvClass;
            break;
        case "#localeList":
            subHeaderTitle = "학교 검색";
            break;

    }
    return subHeaderTitle;
});

Handlebars.registerHelper("iconLocaleMap", function (data) {
    var headerIcon;
    if (data.data.root == "localeList") {
        headerIcon = "sprite_map";
    } else {
        headerIcon = "sprite_toggle_list";
    }
    return headerIcon;
});
Handlebars.registerHelper("headerLocation", function (data) {
    var headerLocation;
    if (data.data.root == "localeList") {
        headerLocation = "#home";
    } else {
        headerLocation = "#localeList";
    }
    return headerLocation;
});

Handlebars.registerHelper("innerEach", function (array, index, options) {
    console.log("===============>", array);
    console.log("===============> index", index);
    var lvData;
    for (var i = 0; i < array[index]; i++) {
        if (i == 0) {
            return
        }
    }
    /*  if(index == 0 ||array[index].lv != array[index - 1].lv) {
          return options.fn(this);
      } else if(index != 0 && array[index].lv == array[index - 1].lv){
          return options.inverse(this);
      }*/
});

Handlebars.registerHelper("isClass", function (level, options) {
    if (level > 6) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("deviceCode", function (dvcCd, options) {
    // console.log(dvcCd)
    if (dvcCd === "DVC0000186") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("deviceKindCode", function (dvcKindCd, options) {
    if (dvcKindCd === "012") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("isPower", function (fncCd, options) {
    if (fncCd === "D03") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});

Handlebars.registerHelper("isMode", function (fncCd, options) {
    if (fncCd === "D05") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isVolume", function (fncCd, options) {
    if (fncCd === "D19") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});

Handlebars.registerHelper("isPlasmaWave", function (fncCd, options) {
    if (fncCd === "D20") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isChildLock", function (fncCd, options) {
    if (fncCd === "D04") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isUV", function (fncCd, options) {
    if (fncCd === "D256") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isPollutionLamp", function (fncCd, options) {
    if (fncCd === "D257") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isPurifySignLamp", function (fncCd, options) {
    if (fncCd === "D252") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isRemoveVirus", function (fncCd, options) {
    if (fncCd === "D253") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isIon", function (fncCd, options) {
    if (fncCd === "D135") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isHumidfy", function (fncCd, options) {
    if (fncCd === "D101") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isDeodorizationFilter", function (fncCd, options) {
    if (fncCd === "D103") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("isHepaFilter", function (fncCd, options) {
    if (fncCd === "D104") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("isBioFilter", function (fncCd, options) {
    if (fncCd === "D216") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isFilterused", function (fncCd, options) {


    if (fncCd === ("D103"||"D216"||"D104")){
        return options.fn(this);
    } else {
        return options.inverse(this);
    }



});


Handlebars.registerHelper("isAlarm", function (actMsg, options) {
    if (actMsg != undefined) {
        return options.fn(this);
    } else  {
        return options.inverse(this);
    }
});


/**
 * 에어 정보
 */

Handlebars.registerHelper("isAirTemp", function (fncCd, options) {
    if (fncCd === "D247") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("isAirHumi", function (fncCd, options) {
    if (fncCd === "D18") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("isAirDust", function (fncCd, options) {
    if (fncCd === "D102") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper("isAirFineDust", function (fncCd, options) {
    if (fncCd === "D249") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isAirCo2", function (fncCd, options) {
    if (fncCd === "D232") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isVoc", function (fncCd, options) {
    if (fncCd === "D233") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("isFavor", function (fncCd, options) {
    if (fncCd === "D248") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});


Handlebars.registerHelper("isOn", function (fncVal, options) {
    if (fncVal === "on" || fncVal === "ON") {
        return "checked"
    }
});
Handlebars.registerHelper("isSameFocus", function (fncVal, val, options) {
    if (fncVal == val) {
        return 'focus';
    }
});


Handlebars.registerHelper("statusIconClass", function (fncCd, fncVal, options) {
    var className;
    if(fncCd === "D247"){
        var temperature = fncVal;
        var temperatureGrade = App.view.schoolDetail.getGradeStartBySelectedNum(14,32,19,29,21,27,temperature);
        switch (temperatureGrade) {
            case "grade1" :
                className = "sprite_good";
                break;
            case "grade2" :
                className = "sprite_normal";
                break;
            case "grade3" :
                className = "sprite_bad";
                break;
            case "grade4" :
                className = "sprite_worse";
                break;
            case "" :
            case undefined :
                className = "sprite_air_error";
                break;
        }
        return className;

    } else if(fncCd === "D18"){
        var humidity = fncVal;
        var humidityGrade = App.view.schoolDetail.getGradeStartBySelectedNum(19,81,29,71,39,61,humidity);
        switch (humidityGrade) {
            case "grade1" :
                className = "sprite_good";
                break;
            case "grade2" :
                className = "sprite_normal";
                break;
            case "grade3" :
                className = "sprite_bad";
                break;
            case "grade4" :
                className = "sprite_worse";
                break;
            case "" :
            case undefined :
                className = "sprite_air_error";
                break;
        }
        return className;
    } else if(fncCd === "D102"){
        var microDust = fncVal;
        var microDustGrade = App.view.schoolDetail.getGradeStartByZero(150,80,30,microDust);
        switch (microDustGrade) {
            case "grade1" :
                className = "sprite_good";
                break;
            case "grade2" :
                className = "sprite_normal";
                break;
            case "grade3" :
                className = "sprite_bad";
                break;
            case "grade4" :
                className = "sprite_worse";
                break;
            case "" :
            case undefined :
                className = "sprite_air_error";
                break;
        }
        return className;

    } else if(fncCd === "D249"){
        var nanoDust  = fncVal ;
        var nanoDustGrade = App.view.schoolDetail.getGradeStartByZero(100,50,15,nanoDust);
        switch (nanoDustGrade) {
            case "grade1" :
                className = "sprite_good";
                break;
            case "grade2" :
                className = "sprite_normal";
                break;
            case "grade3" :
                className = "sprite_bad";
                break;
            case "grade4" :
                className = "sprite_worse";
                break;
            case "" :
            case undefined :
                className = "sprite_air_error";
                break;
        }
        return className;

    } else if(fncCd === "D233"){
        var chemical = fncVal;
        var chemicalGrade = App.view.schoolDetail.getGradeStartByZero(522,261,130,chemical);
        switch (chemicalGrade) {
            case "grade1" :
                className = "sprite_good";
                break;
            case "grade2" :
                className = "sprite_normal";
                break;
            case "grade3" :
                className = "sprite_bad";
                break;
            case "grade4" :
                className = "sprite_worse";
                break;
            case "" :
            case undefined :
                className = "sprite_air_error";
                break;
        }
        return className;
    } else if(fncCd === "D232"){
        var co2 = fncVal;
        var co2Grade = App.view.schoolDetail.getGradeStartByZero(2000,1000,650,co2);
        switch (co2Grade) {
            case "grade1" :
                className = "sprite_good";
                break;
            case "grade2" :
                className = "sprite_normal";
                break;
            case "grade3" :
                className = "sprite_bad";
                break;
            case "grade4" :
                className = "sprite_worse";
                break;
            case "" :
            case undefined :
                className = "sprite_air_error";
                break;
        }
        return className;
    } else if (fncCd == undefined || fncCd == ""){
        className = "sprite_air_error";
        return className;
    }
    //var airQualityGrade = [temperatureGrade,humidityGrade,chemicalGrade,co2Grade,microDustGrade,nanoDustGrade];

    /*airQualityGrade.forEach(function (array,value, index) {

    });*/

});



Handlebars.registerHelper("airSlideStateText", function (data) {
    var airStateText;
    switch (data) {
        case "01" :
            airStateText = "좋음";
            break;
        case "02" :
            airStateText = "보통";
            break;
        case "03" :
            airStateText = "나쁨";
            break;
        case "04" :
            airStateText = "매우나쁨";
            break;
    }
    return airStateText;
});

Handlebars.registerHelper("colClass", function (data) {
    var size = $('.box_air_all ul li').length;
    return 'col' + size;
});

Handlebars.registerHelper("deviceDetailReferSendHm", function (data) {

    var data = App.vars.oSchoolDetail;
    if(data != undefined){
        if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm != undefined){
            if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm == ""){
                return "";
            }else{
                var sendHText;
                var sendHm =  moment(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm, "HHmm").format("HH:mm");
                var sendH =  moment(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm, "HHmm").format("HH");

                if(sendH >11){
                    sendHText ="오후 ";
                }else{
                    sendHText ="오전 ";
                }
                return sendHText + sendHm;
            }

        }else if (data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm == undefined ){
            return "";
        }
    }
});

Handlebars.registerHelper("bracket", function (dvcNickNm) {
    var dvcNickNm = dvcNickNm;

    return "[" + dvcNickNm + "]" ;

});

Handlebars.registerHelper("newAlarm", function (data) {

    var data = App.vars.oSchoolDetail;

    if(data != undefined){
        if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm != undefined){
            if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm == ""){
                return "";
            }else{
                var now = moment().format('YYYY-MM-DDTHH:mm');
                var alarmData = data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendMd + data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm;
                var startTime = moment(alarmData,"YYYYMMDDHHmm").format('YYYY-MM-DDTHH:mm');
                var endTime = moment(startTime,"YYYY-MM-DDTHH:mm").add(3, 'hour').format('YYYY-MM-DDTHH:mm');

                if(moment(now).isBetween(startTime, endTime)){
                    return '<span class="sprite sprite_common sprite_new">new</span>';
                }
            }
        }else if (data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].sendHm == undefined ){
            return "";
        }

    }

});

Handlebars.registerHelper("remove", function (fncVal) {

    var fncValPre = fncVal.split('.')[0];
    var fncValNext = fncVal.split('.')[1];

    if(fncValNext == 0){
        return fncValPre ;
    }else{
        return fncVal ;
    }


});

Handlebars.registerHelper("replaceNm", function (data) {
    var sFilterName;
    var sDvcCode = data.data.root.dvcCd;
    switch (sDvcCode){
        // 위닉스 XQ
        case "DVC0000186":
            sFilterName = "E필터_탈취/마이크로집진";
            break;
        // 위닉스 타워(위닉스 나이키)
        case "위닉스 타워":
            sFilterName = "D필터_일체형";
            break;
        // 위닉스 ZeroPlus
        case "DVC0000203":
            sFilterName = "B필터_탈취/마이크로집진";
            break;
        // 위닉스 타이탄
        case "DVC0000173":
            sFilterName = "추후 수정";
            break;
    }
    return sFilterName ;

});
Handlebars.registerHelper("fncValCheck", function (fncVal) {

    var fncVal = fncVal.split('.')[0];

    if(fncVal<11){
        return '<div class="box_filter_use filter_10">';
    }else{
        return '<div class="box_filter_use">';
    }

});
Handlebars.registerHelper("hiddenFilter", function (remainFilter) {
    if(remainFilter == "0.0"){
        return "hidden_filter";
    }
});
Handlebars.registerHelper("checkSenList", function (senVal, options) {

    if (senVal == "Y") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});

Handlebars.registerHelper("isOutlist", function (data, options) {
    switch (data) {
        case "관측소":
            return options.inverse(this);
            break;
        default :
            return options.fn(this);
            break;
    }
});

// Handlebars.registerHelper("colClass", function (data) {
//     var size = $('.box_air_all ul li').length;
//     return 'col' + size;
// });



Handlebars.registerHelper("isDataPreAbs", function (data) {
    var dataText;
    if(data === "" || data == null ){
        dataText = "--";
    }else if(data.split('.')[1] == 00){
        dataText = data.split('.')[0]
    }else {
        dataText = data
    }
    return dataText;
});

Handlebars.registerHelper("checkSendHm", function (sendHm,data) {


    if(sendHm == "" || sendHm == undefined ){
        return "";
    }else{
        var sendHText;
        var sendHm =  moment(sendHm, "HHmm").format("HH:mm");
        var sendH =  moment(sendHm, "HHmm").format("HH");

        if(sendH >11){
            sendHText ="오후 ";
        }else{
            sendHText ="오전 ";
        }
        return sendHText + sendHm;
    }

});

Handlebars.registerHelper("checkSendMd", function (sendMd,data) {

    if(sendMd == "" || sendMd == undefined ){
        return "";
    }else{
        var sendMd =  moment(sendMd, "YYYYMMDD").format("MM월 DD일");

        return sendMd;
    }


});
 Handlebars.registerHelper("deviceDetailReferDvcImgUrl", function (data) {
    return App.vars.oSchoolDetail.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].dvcImgUrl;
});

Handlebars.registerHelper("deviceDetailReferDvcBannerImgUrl", function (data) {
    return App.vars.oSchoolDetail.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].dvcBannerImgUrl;
});

Handlebars.registerHelper("checkFncVal", function (fncVal) {
    var dataText;

    if(fncVal == "" || fncVal == undefined ){
        dataText = "-";
    }else{
        dataText = fncVal;
    }
    return dataText;
});
Handlebars.registerHelper("deviceDetailReferDvcGuideUrl", function (data) {
    return App.vars.oSchoolDetail.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].dvcGuideUrl;
});

Handlebars.registerHelper("deviceFilter", function (data) {
    console.log(data)
});

Handlebars.registerHelper("lgDeviceCheck", function (data,options) {
    if (data === "DVC0000241") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("schListCheck", function (schList, options) {
    if (schList == undefined || schList.length == 0 ) {
        return options.fn(this);
    } else  {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("homeUseHour", function (data) {

    var data = App.vars.oSchoolDetail;

    if(data != undefined){
        if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].homeUseHour != undefined){
            if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].homeUseHour == ""){
                return "";
            }else{
                return data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].homeUseHour;
            }
        }else if (data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].homeUseHour == undefined ){
            return "";
        }
    }
});

Handlebars.registerHelper("otherUseHour", function (data) {

    var data = App.vars.oSchoolDetail;

    if(data != undefined){
        if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].otherUseHour != undefined){
            if(data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].otherUseHour == ""){
                return "";
            }else{
                return data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].otherUseHour;
            }
        }else if (data.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx].otherUseHour == undefined ){
            return "";
        }
    }
});

Handlebars.registerHelper("moment", function (data) {

    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var today = new Date().getDay();
    var todayLabel = week[today];
    var now = moment().format('YYYY.MM.DD')

    return now + '('+todayLabel+')' ;
});
