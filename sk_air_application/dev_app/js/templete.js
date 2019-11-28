this["templete"] = this["templete"] || {};

this["templete"]["airMultiSensor/airMultiSensor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"area_school_air bg_white\"></div>\r\n<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});

this["templete"]["airMultiSensor/multiSensor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_air_all\">\r\n    <ul class=\"clearfix\">\r\n        <li>\r\n            <p class=\"name\">온도</p>\r\n            <p class=\"index\">25<em>℃</em></p>\r\n            <span class=\"sprite sprite_status sprite_worse\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">습도</p>\r\n            <p class=\"index\">45<em>%</em></p>\r\n            <span class=\"sprite sprite_status sprite_bad\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">미세먼지</p>\r\n            <p class=\"index\">128<em>㎍/㎥</em></p>\r\n            <span class=\"sprite sprite_status sprite_good\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">초미세먼지</p>\r\n            <p class=\"index\">128<em>㎍/㎥</em></p>\r\n            <span class=\"sprite sprite_status sprite_normal\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">화학물질</p>\r\n            <p class=\"index\">602<em>ppm</em></p>\r\n            <span class=\"sprite sprite_status sprite_good\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">이산화탄소</p>\r\n            <p class=\"index\">602<em>ppm</em></p>\r\n            <span class=\"sprite sprite_status sprite_bad\">아이콘</span>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/multiSensorAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_air_all\">\r\n    <ul class=\"clearfix\">\r\n        <li>\r\n            <p class=\"name\">온도</p>\r\n            <p class=\"index\">25<em>℃</em></p>\r\n            <span class=\"sprite sprite_status sprite_worse\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">습도</p>\r\n            <p class=\"index\">45<em>%</em></p>\r\n            <span class=\"sprite sprite_status sprite_bad\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">미세먼지</p>\r\n            <p class=\"index\">128<em>㎍/㎥</em></p>\r\n            <span class=\"sprite sprite_status sprite_good\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">초미세먼지</p>\r\n            <p class=\"index\">128<em>㎍/㎥</em></p>\r\n            <span class=\"sprite sprite_status sprite_normal\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">화학물질</p>\r\n            <p class=\"index\">602<em>ppm</em></p>\r\n            <span class=\"sprite sprite_status sprite_good\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">이산화탄소</p>\r\n            <p class=\"index none_index\">-<em>ppm</em></p>\r\n            <span class=\"sprite sprite_status sprite_air_error\">아이콘</span>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/multiSensorGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_air_all\">\r\n    <ul class=\"clearfix\">\r\n        <li>\r\n            <p class=\"name\">온도</p>\r\n            <p class=\"index\">25<em>℃</em></p>\r\n            <span class=\"sprite sprite_status sprite_worse\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">습도</p>\r\n            <p class=\"index\">45<em>%</em></p>\r\n            <span class=\"sprite sprite_status sprite_bad\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">미세먼지</p>\r\n            <p class=\"index\">128<em>㎍/㎥</em></p>\r\n            <span class=\"sprite sprite_status sprite_good\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">초미세먼지</p>\r\n            <p class=\"index\">128<em>㎍/㎥</em></p>\r\n            <span class=\"sprite sprite_status sprite_normal\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">화학물질</p>\r\n            <p class=\"index\">602<em>ppm</em></p>\r\n            <span class=\"sprite sprite_status sprite_good\">아이콘</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"name\">이산화탄소</p>\r\n            <p class=\"index none_index\">-<em>ppm</em></p>\r\n            <span class=\"sprite sprite_status sprite_air_error\">아이콘</span>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/sensorSlider"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"slider\">\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-1 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status good\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 85</p>\r\n                    <p class=\"status\">좋음</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-2 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status normal\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 65</p>\r\n                    <p class=\"status\">보통</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-3 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status worse\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 45</p>\r\n                    <p class=\"status\">매우나쁨</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/sensorSliderAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"slider\">\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-1 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status good\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 85</p>\r\n                    <p class=\"status\">좋음</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-2 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status normal\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 65</p>\r\n                    <p class=\"status\">보통</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-3 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status worse\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 45</p>\r\n                    <p class=\"status\">매우나쁨</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/sensorSliderGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"slider\">\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-1 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status good\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 85</p>\r\n                    <p class=\"status\">좋음</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-2 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status normal\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 65</p>\r\n                    <p class=\"status\">보통</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_slide\">\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-3 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status worse\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 45</p>\r\n                    <p class=\"status\">매우나쁨</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/sensorStateGraph"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_graph\">\r\n    <div id=\"line_chart\" class=\"graph_line\"></div>\r\n    <div id=\"container\" class=\"graph_line\"></div>\r\n    <div class=\"legend\">\r\n        <p> <span class=\"line\"></span> <span>오늘</span></p>\r\n        <p><span class=\"dash\"></span> <span>어제</span></p>\r\n    </div>\r\n\r\n    <div class=\"tooltip-marker-good\" style=\"display: none\">\r\n        <span>90</span>\r\n    </div>\r\n    <div class=\"tooltip-marker-bad\" style=\"display: none\">\r\n        <span>44</span>\r\n    </div>\r\n\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/sensorStateGraphAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_graph\">\r\n    <div id=\"line_chart\" class=\"graph_line\"></div>\r\n    <div id=\"container\" class=\"graph_line\"></div>\r\n    <div class=\"legend\">\r\n        <p> <span class=\"line\"></span> <span>오늘</span></p>\r\n        <p><span class=\"dash\"></span> <span>어제</span></p>\r\n    </div>\r\n\r\n    <div class=\"tooltip-marker-good\" style=\"display: none\">\r\n        <span>90</span>\r\n    </div>\r\n    <div class=\"tooltip-marker-bad\" style=\"display: none\">\r\n        <span>44</span>\r\n    </div>\r\n\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/sensorStateGraphGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_graph\">\r\n    <div id=\"line_chart\" class=\"graph_line\"></div>\r\n    <div id=\"container\" class=\"graph_line\"></div>\r\n    <div class=\"legend\">\r\n        <p> <span class=\"line\"></span> <span>오늘</span></p>\r\n        <p><span class=\"dash\"></span> <span>어제</span></p>\r\n    </div>\r\n\r\n    <div class=\"tooltip-marker-good\" style=\"display: none\">\r\n        <span>90</span>\r\n    </div>\r\n    <div class=\"tooltip-marker-bad\" style=\"display: none\">\r\n        <span>44</span>\r\n    </div>\r\n\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/setting"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card\">\r\n    <p class=\"card_title title_alone\"><a href=\"#\">설정 <span\r\n            class=\"sprite sprite_common sprite_more more_right\">?</span></a></p>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <span class=\"sprite sprite_common sprite_new\">new</span>\r\n    <!-- 알림 메세지 1줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기]의 동작을 시작합니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n    <!-- 알림 메세지 2줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기] 오전 7시 30분에 전원 동작을 예약하였습니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingAlarmAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <span class=\"sprite sprite_common sprite_new\">new</span>\r\n    <!-- 알림 메세지 1줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기]의 동작을 시작합니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n    <!-- 알림 메세지 2줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기] 오전 7시 30분에 전원 동작을 예약하였습니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingAlarmGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <span class=\"sprite sprite_common sprite_new\">new</span>\r\n    <!-- 알림 메세지 1줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기]의 동작을 시작합니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n    <!-- 알림 메세지 2줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기] 오전 7시 30분에 전원 동작을 예약하였습니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card\">\r\n    <p class=\"card_title title_alone\"><a href=\"#\">설정 <span\r\n            class=\"sprite sprite_common sprite_more more_right\">?</span></a></p>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card\">\r\n    <p class=\"card_title title_alone\"><a href=\"#\">설정 <span\r\n            class=\"sprite sprite_common sprite_more more_right\">?</span></a></p>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\"images/default_img.png\" alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>현대통신 실내공기센서</p>\r\n            <p>1-1 실내센서</p>\r\n            <span>고객센터 1800-0212</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingInfomationAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\"images/default_img.png\" alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>어웨어 실내공기센서</p>\r\n            <p>1-1 실내센서</p>\r\n            <span>고객센터 </span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingInfomationGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\"images/default_img.png\" alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>그린망고 실내공기센서</p>\r\n            <p>1-1 실내센서</p>\r\n            <span>고객센터 1800-0212</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingMode"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li class=\"focus\"><a href=\"#\"><span>영유아</span></a></li>\r\n            <li><a href=\"#\"><span>일반</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingModeAwair"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li class=\"focus\"><a href=\"#\"><span>집중력</span></a></li>\r\n            <li><a href=\"#\"><span>유아</span></a></li>\r\n            <li><a href=\"#\"><span>일반</span></a></li>\r\n            <li><a href=\"#\"><span>수면</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airMultiSensor/settingModeGreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li class=\"focus\"><a href=\"#\"><span>집중력</span></a></li>\r\n            <li><a href=\"#\"><span>유아</span></a></li>\r\n            <li><a href=\"#\"><span>일반</span></a></li>\r\n            <li><a href=\"#\"><span>수면</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["airPurifier/airPurifier"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"area_school_air bg_white\"></div>\r\n<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n    <div id=\"mode\"></div>\r\n    <div id=\"volume\"></div>\r\n    <div id=\"plasmaWave\"></div>\r\n    <div id=\"turnOff\"></div>\r\n    <div id=\"filterUsed\"></div>\r\n    <div id=\"alarm\"></div>\r\n    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["airPurifier/airPurifySlider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"box_slide\">\r\n"
    + ((stack1 = (helpers.deviceKindCode || (depth0 && depth0.deviceKindCode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dvcKindCd : depth0),{"name":"deviceKindCode","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\""
    + alias4(((helper = (helper = helpers.dvcCd || (depth0 != null ? depth0.dvcCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcCd","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <p class=\"air_product\">공기청정기</p>\r\n                    <p class=\"air_product_name\">"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    <div class=\"circle_air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">\r\n                        <div class=\"circle\">\r\n                            <p class=\"air\">공기 상태</p>\r\n                            <p class=\"status\">"
    + alias4(((helper = (helper = helpers.airGrd || (depth0 != null ? depth0.airGrd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"airGrd","hash":{},"data":data}) : helper)))
    + "</p>\r\n                            <p class=\"dust\">초미세먼지</p>\r\n                            <p class=\"dust_num\">"
    + alias4(((helper = (helper = helpers.pm25 || (depth0 != null ? depth0.pm25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pm25","hash":{},"data":data}) : helper)))
    + "<em>㎍/㎥</em></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"info_outside\">\r\n                        <p class=\"outside\">실외</p>\r\n                        <p class=\"degree\">온도 "
    + alias4(((helper = (helper = helpers.temp || (depth0 != null ? depth0.temp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temp","hash":{},"data":data}) : helper)))
    + "℃ / 습도 "
    + alias4(((helper = (helper = helpers.humi || (depth0 != null ? depth0.humi : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"humi","hash":{},"data":data}) : helper)))
    + "%</p>\r\n                    </div>\r\n                </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\""
    + container.escapeExpression(((helper = (helper = helpers.dvcCd || (depth0 != null ? depth0.dvcCd : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dvcCd","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <p class=\"air_product\">실내센서</p>\r\n                    <p class=\"air_product_name\">1-1 실내센서</p>\r\n                    <div class=\"circle_air_status good\">\r\n                        <div class=\"circle circle_sensor\">\r\n                            <p class=\"score\">종합점수 85</p>\r\n                            <p class=\"status\">좋음</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"box_btn\">\r\n                        <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--<div class=\"slider\">-->\r\n    <!--<div class=\"box_slide\">-->\r\n        <!--<div>-->\r\n            <!--<p class=\"air_product\">공기청정기</p>-->\r\n            <!--<p class=\"air_product_name\">1-1 공기청정기</p>-->\r\n\r\n            <!--<div class=\"circle_air_status good\">-->\r\n                <!--<div class=\"circle\">-->\r\n                    <!--<p class=\"air\">공기 상태</p>-->\r\n                    <!--<p class=\"status\">좋음</p>-->\r\n                    <!--<p class=\"dust\">초미세먼지</p>-->\r\n                    <!--<p class=\"dust_num\">10<em>㎍/㎥</em></p>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"info_outside\">-->\r\n                <!--<p class=\"outside\">실외</p>-->\r\n                <!--<p class=\"degree\">온도 27℃ / 습도 50%</p>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"box_slide\">-->\r\n        <!--<div>-->\r\n            <!--<p class=\"air_product\">공기청정기</p>-->\r\n            <!--<p class=\"air_product_name\">1-1 공기청정기</p>-->\r\n\r\n            <!--<div class=\"circle_air_status good\">-->\r\n                <!--<div class=\"circle\">-->\r\n                    <!--<p class=\"air\">공기 상태</p>-->\r\n                    <!--<p class=\"status\">좋음</p>-->\r\n                    <!--<p class=\"dust\">초미세먼지</p>-->\r\n                    <!--<p class=\"dust_num\">10<em>㎍/㎥</em></p>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"info_outside\">-->\r\n                <!--<p class=\"outside\">실외</p>-->\r\n                <!--<p class=\"degree\">온도 27℃ / 습도 50%</p>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"box_slide\">-->\r\n        <!--<div>-->\r\n            <!--<p class=\"air_product\">공기청정기</p>-->\r\n            <!--<p class=\"air_product_name\">1-1 공기청정기</p>-->\r\n\r\n            <!--<div class=\"circle_air_status good\">-->\r\n                <!--<div class=\"circle\">-->\r\n                    <!--<p class=\"air\">공기 상태</p>-->\r\n                    <!--<p class=\"status\">좋음</p>-->\r\n                    <!--<p class=\"dust\">초미세먼지</p>-->\r\n                    <!--<p class=\"dust_num\">10<em>㎍/㎥</em></p>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"info_outside\">-->\r\n                <!--<p class=\"outside\">실외</p>-->\r\n                <!--<p class=\"degree\">온도 27℃ / 습도 50%</p>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n\r\n<!--</div>-->\r\n\r\n<div class=\"slider\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["templete"]["airReport/airReport"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n<div class=\"tab_graph col_2\">\r\n    <ul class=\"clearfix\">\r\n        <li class=\"focus\"><a href=\"#\">일간</a></li>\r\n        <li><a href=\"#\">주간</a></li>\r\n    </ul>\r\n</div>\r\n<div class=\"tab_dust\">\r\n    <ul>\r\n        <li class=\"focus\">\r\n            <a href=\"#\">\r\n                <span class=\"sprite sprite_icon_graph sprite_awair\"></span>\r\n                <p>어웨어<br>스코어</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"\">\r\n            <a href=\"#\">\r\n                <span class=\"sprite sprite_icon_graph sprite_degree\"></span>\r\n                <p>온도</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"\">\r\n            <a href=\"#\">\r\n                <span class=\"sprite sprite_icon_graph sprite_humidify\"></span>\r\n                <p>습도</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"\">\r\n            <a href=\"#\">\r\n                <span class=\"sprite sprite_icon_graph sprite_co2\"></span>\r\n                <p>이산화탄소</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"\">\r\n            <a href=\"#\">\r\n                <span class=\"sprite sprite_icon_graph sprite_voc\"></span>\r\n                <p>VOC</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"\">\r\n            <a href=\"#\">\r\n                <span class=\"sprite sprite_icon_graph sprite_dust\"></span>\r\n                <p>미세먼지</p>\r\n            </a>\r\n        </li>\r\n\r\n    </ul>\r\n</div>\r\n<div class=\"img_temp\">\r\n    <img src=\"../../images/@temp_air_report_graph1.png\" alt=\"\" style=\"width: 100%;\">\r\n    <img src=\"../../images/@temp_air_report_graph2.png\" alt=\"\" style=\"width: 100%;position: absolute;bottom: 0;\">\r\n</div>";
},"useData":true});

this["templete"]["branch/branch"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["templete"]["detailProduct/detailProduct"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"area_school_air bg_white\"></div>\r\n<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});

this["templete"]["detailProduct/detailProductSlider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "    <div class=\"box_slide\">\r\n";
  stack1 = ((helper = (helper = helpers.deviceKindCode || (depth0 != null ? depth0.deviceKindCode : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"deviceKindCode","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.deviceKindCode) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <!-- 공기 청정기 일 경우 -->\r\n        <div>\r\n            <p class=\"air_product\">공기청정기</p>\r\n            <p class=\"air_product_name\">1-1 공기청정기</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status good\">\r\n                <div class=\"circle\">\r\n                    <p class=\"air\">공기 상태</p>\r\n                    <p class=\"status\">좋음</p>\r\n                    <p class=\"dust\">초미세먼지</p>\r\n                    <p class=\"dust_num\">10<em>㎍/㎥</em></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"info_outside\">\r\n                <p class=\"outside\">실외</p>\r\n                <p class=\"degree\">온도 27℃ / 습도 50%</p>\r\n            </div>\r\n        </div>\r\n        <!-- // 공기 청정기 일 경우 -->\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <!-- 실내센서 일 경우 -->\r\n        <div>\r\n            <p class=\"air_product\">실내센서</p>\r\n            <p class=\"air_product_name\">1-1 실내센서</p>\r\n            <!--\r\n             good 좋음\r\n             normal 보통\r\n             bad 나쁨\r\n             worse 매우나쁨\r\n             -->\r\n            <div class=\"circle_air_status good\">\r\n                <div class=\"circle circle_sensor\">\r\n                    <p class=\"score\">종합점수 85</p>\r\n                    <p class=\"status\">좋음</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"box_btn\">\r\n                <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <!-- // 실내센서 일 경우 -->\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"slider\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["templete"]["device_awair/airInfo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.isAirTemp || (depth0 && depth0.isAirTemp) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirTemp","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirHumi || (depth0 && depth0.isAirHumi) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirHumi","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirDust || (depth0 && depth0.isAirDust) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirDust","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirFineDust || (depth0 && depth0.isAirFineDust) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirFineDust","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirCo2 || (depth0 && depth0.isAirCo2) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirCo2","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isVoc || (depth0 && depth0.isVoc) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isVoc","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">온도</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>℃</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">습도</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>%</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"name\">미세먼지</p>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">초미세먼지</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">이산화탄소</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>PPM</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">화학물질</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>PPM</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_air_all\">\r\n    <ul class=\"clearfix "
    + container.escapeExpression(((helper = (helper = helpers.colClass || (depth0 != null ? depth0.colClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"colClass","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});

this["templete"]["device_awair/chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_graph\">\n    <div id=\"line_chart\" class=\"graph_line\"></div>\n    <div id=\"container\" class=\"graph_line\"></div>\n    <div class=\"legend\">\n        <p> <span class=\"line\"></span> <span>오늘</span></p>\n        <p><span class=\"dash\"></span> <span>어제</span></p>\n    </div>\n\n    <div class=\"tooltip-marker-good\" style=\"display: none\">\n        <span>90</span>\n    </div>\n    <div class=\"tooltip-marker-bad\" style=\"display: none\">\n        <span>44</span>\n    </div>\n\n</div>";
},"useData":true});

this["templete"]["device_awair/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFavor || (depth0 && depth0.isFavor) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFavor","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"favor\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_school_air bg_white\">\r\n    <div id=\"airInfo\"></div>\r\n    <div id=\"airChart\"></div>\r\n</div>\r\n\r\n<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_awair/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_awair/settingInformation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_awair/settingMode"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<!--<div class=\"box_card _favor\">-->\r\n    <!--<p class=\"card_title title_set\">모드 설정</p>-->\r\n    <!--<div class=\"box_setting\">-->\r\n        <!--<ul class=\"clearfix\">-->\r\n            <!--<li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>일반<br>건강</span></a></li>-->\r\n            <!--<li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>알러지</span></a></li>-->\r\n            <!--<li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수면</span></a></li>-->\r\n            <!--<li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"04\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>집중력</span></a></li>-->\r\n            <!--<li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>육아</span></a></li>-->\r\n        <!--</ul>-->\r\n    <!--</div>-->\r\n<!--</div>-->";
},"useData":true,"useDepths":true});

this["templete"]["device_green/airInfo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.isAirTemp || (depth0 && depth0.isAirTemp) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirTemp","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirHumi || (depth0 && depth0.isAirHumi) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirHumi","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirDust || (depth0 && depth0.isAirDust) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirDust","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirFineDust || (depth0 && depth0.isAirFineDust) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirFineDust","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirCo2 || (depth0 && depth0.isAirCo2) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirCo2","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isVoc || (depth0 && depth0.isVoc) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isVoc","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">온도</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>℃</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">습도</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>%</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"name\">미세먼지</p>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">초미세먼지</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">이산화탄소</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>PPM</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">화학물질</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>PPM</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_air_all\">\r\n    <ul class=\"clearfix "
    + container.escapeExpression(((helper = (helper = helpers.colClass || (depth0 != null ? depth0.colClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"colClass","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});

this["templete"]["device_green/chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_graph\">\n    <div id=\"line_chart\" class=\"graph_line\"></div>\n    <div id=\"container\" class=\"graph_line\"></div>\n    <div class=\"legend\">\n        <p> <span class=\"line\"></span> <span>오늘</span></p>\n        <p><span class=\"dash\"></span> <span>어제</span></p>\n    </div>\n\n    <div class=\"tooltip-marker-good\" style=\"display: none\">\n        <span>90</span>\n    </div>\n    <div class=\"tooltip-marker-bad\" style=\"display: none\">\n        <span>44</span>\n    </div>\n\n</div>";
},"useData":true});

this["templete"]["device_green/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_school_air bg_white\">\r\n    <div id=\"airInfo\"></div>\r\n    <div id=\"airChart\"></div>\r\n</div>\r\n\r\n<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_green/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_green/settingInformation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_green/settingMode"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li class=\"focus\"><a href=\"#\">집중력</a></li>\r\n            <li><a href=\"#\">유아</a></li>\r\n            <li><a href=\"#\">일반</a></li>\r\n            <li><a href=\"#\">수면</a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_hyundai/airInfo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.isAirTemp || (depth0 && depth0.isAirTemp) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirTemp","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirHumi || (depth0 && depth0.isAirHumi) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirHumi","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirDust || (depth0 && depth0.isAirDust) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirDust","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirFineDust || (depth0 && depth0.isAirFineDust) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirFineDust","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAirCo2 || (depth0 && depth0.isAirCo2) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isAirCo2","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isVoc || (depth0 && depth0.isVoc) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),{"name":"isVoc","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">온도</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>℃</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">습도</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>%</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"name\">미세먼지</p>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">초미세먼지</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">이산화탄소</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>PPM</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <!--<p class=\"name\">"
    + alias3(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>-->\r\n                    <p class=\"name\">화학물질</p>\r\n                    <p class=\"index\">"
    + alias3((helpers.checkFncVal || (depth0 && depth0.checkFncVal) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"checkFncVal","hash":{},"data":data}))
    + "<em>PPM</em></p>\r\n                    <span class=\"sprite sprite_status "
    + alias3((helpers.statusIconClass || (depth0 && depth0.statusIconClass) || alias2).call(alias1,(depth0 != null ? depth0.fncCd : depth0),(depth0 != null ? depth0.fncVal : depth0),{"name":"statusIconClass","hash":{},"data":data}))
    + "\"></span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_air_all\">\r\n    <ul class=\"clearfix "
    + container.escapeExpression(((helper = (helper = helpers.colClass || (depth0 != null ? depth0.colClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"colClass","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});

this["templete"]["device_hyundai/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_school_air bg_white\">\r\n    <div id=\"airInfo\"></div>\r\n    <div id=\"airChart\"></div>\r\n</div>\r\n<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>\r\n\r\n";
},"useData":true});

this["templete"]["device_hyundai/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_hyundai/settingInformation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_hyundai/settingMode"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li class=\"focus\"><a href=\"#\"><span>영유아</span></a></li>\r\n            <li><a href=\"#\"><span>일반</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgDplus/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPurifySignLamp || (depth0 && depth0.isPurifySignLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPurifySignLamp","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"purifysignlamp\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"removevirus\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgDplus/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgDplus/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgDplus/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgDplus/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgDplus/settingPuritySignLamp"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPurifySignLamp || (depth0 && depth0.isPurifySignLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPurifySignLamp","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgDplus/settingRemoveVirus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgDplus/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_lgDplus/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>파워</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"07",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동풍</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgGplus/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPurifySignLamp || (depth0 && depth0.isPurifySignLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPurifySignLamp","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"purifysignlamp\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"removevirus\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n    <div id=\"usereport\"></div>\r\n"
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgGplus/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgGplus/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgGplus/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>청정</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>정음</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"06\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"06",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>가습청정</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgGplus/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgGplus/settingPuritySignLamp"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPurifySignLamp || (depth0 && depth0.isPurifySignLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPurifySignLamp","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgGplus/settingRemoveVirus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgGplus/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_lgGplus/settingUseReport"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--<div class=\"box_card _usereport\">\r\n    <p class=\"card_title\">사용 리포트</p>\r\n    <a href=\"#\" class=\"set_date\">2017.12.26(화)</a>\r\n    <div class=\"report_info\">\r\n        <p class=\"report_icon\"><i class=\"sprite sprite_common sprite_history_air_sensor\"></i>공기청정기<br>사용시간</p>\r\n        <div class=\"wrapper_graph clearfix\">\r\n            <div class=\"report_graph\">\r\n                &lt;!&ndash; 원형 퍼센트 p00 숫자로 조절 &ndash;&gt;\r\n                &lt;!&ndash; 50%이상 'over50' 클래스 추가 &ndash;&gt;\r\n                <div class=\"progress-circle over50 p83\">\r\n                    <span><em>9</em>시간</span>\r\n                    <div class=\"left-half-clipper\">\r\n                        <div class=\"first50-bar\"></div>\r\n                        <div class=\"value-bar\"></div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"graph_name\">우리집</p>\r\n            </div>\r\n            <div class=\"report_graph report_household\">\r\n                <div class=\"progress-circle p15\">\r\n                    <span><em>4</em>시간</span>\r\n                    <div class=\"left-half-clipper\">\r\n                        <div class=\"first50-bar\"></div>\r\n                        <div class=\"value-bar\"></div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"graph_name\">이용가구 평균</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n<div class=\"box_card _usereport\">\r\n    <p class=\"card_title\">사용 리포트</p>\r\n    <a href=\"#\" class=\"set_date\">2017.12.26(화)</a>\r\n    <div class=\"report_info\">\r\n        <p class=\"report_icon\"><i class=\"sprite sprite_common sprite_history_air_sensor\"></i>공기청정기<br>사용시간</p>\r\n        <div class=\"wrapper_graph\">\r\n            <div class=\"report_graph\">\r\n                <div id=\"report_house\" style=\"height: 90px; width: 90px\"></div>\r\n                <span><em>4</em>시간</span>\r\n                <p class=\"graph_name\">우리집\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"report_graph report_household\">\r\n                <div id=\"report_household\" style=\"height: 90px; width: 90px\"></div>\r\n                <span><em>9</em>시간</span>\r\n                <p class=\"graph_name\">이용가구 평균\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgGplus/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>파워</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgS/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPurifySignLamp || (depth0 && depth0.isPurifySignLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPurifySignLamp","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"purifysignlamp\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"removevirus\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n    <div id=\"usereport\"></div>\r\n"
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgS/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgS/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgS/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>청정</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgS/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgS/settingPuritySignLamp"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPurifySignLamp || (depth0 && depth0.isPurifySignLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPurifySignLamp","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgS/settingRemoveVirus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_lgS/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_lgS/settingUseReport"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--\r\n<div class=\"box_card _usereport\">\r\n    <p class=\"card_title\">사용 리포트</p>\r\n    <a href=\"#\" class=\"set_date\">2017.12.26(화)</a>\r\n    <div class=\"report_info\">\r\n        <p class=\"report_icon\"><i class=\"sprite sprite_common sprite_history_air_sensor\"></i>공기청정기<br>사용시간</p>\r\n        <div class=\"wrapper_graph clearfix\">\r\n            <div class=\"report_graph\">\r\n                &lt;!&ndash; 원형 퍼센트 p00 숫자로 조절 &ndash;&gt;\r\n                &lt;!&ndash; 50%이상 'over50' 클래스 추가 &ndash;&gt;\r\n                <div class=\"progress-circle over50 p83\">\r\n                    <span><em>9</em>시간</span>\r\n                    <div class=\"left-half-clipper\">\r\n                        <div class=\"first50-bar\"></div>\r\n                        <div class=\"value-bar\"></div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"graph_name\">우리집</p>\r\n            </div>\r\n            <div class=\"report_graph report_household\">\r\n                <div class=\"progress-circle p15\">\r\n                    <span><em>4</em>시간</span>\r\n                    <div class=\"left-half-clipper\">\r\n                        <div class=\"first50-bar\"></div>\r\n                        <div class=\"value-bar\"></div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"graph_name\">이용가구 평균</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n<div class=\"box_card _usereport\">\r\n    <p class=\"card_title\">사용 리포트</p>\r\n    <a href=\"#\" class=\"set_date\">2017.12.26(화)</a>\r\n    <div class=\"report_info\">\r\n        <p class=\"report_icon\"><i class=\"sprite sprite_common sprite_history_air_sensor\"></i>공기청정기<br>사용시간</p>\r\n        <div class=\"wrapper_graph\">\r\n            <div class=\"report_graph\">\r\n                <div id=\"report_house\" style=\"height: 90px; width: 90px\"></div>\r\n                <span><em>4</em>시간</span>\r\n                <p class=\"graph_name\">우리집\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"report_graph report_household\">\r\n                <div id=\"report_household\" style=\"height: 90px; width: 90px\"></div>\r\n                <span><em>9</em>시간</span>\r\n                <p class=\"graph_name\">이용가구 평균\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_lgS/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>파워</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_nicePurifier/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isDustSensor || (depth0 && depth0.isDustSensor) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isDustSensor","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"dustsensor\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isIon || (depth0 && depth0.isIon) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isIon","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"ion\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_nicePurifier/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"# \">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_nicePurifier/settingDustSensor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _dustsensor\">\r\n    <p class=\"card_title title_set\">먼지센서 감도 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li><a href=\"#\"><span>둔감</span></a></li>\r\n            <li class=\"focus\"><a href=\"#\"><span>보통</span></a></li>\r\n            <li><a href=\"#\"><span>민감</span></a></li>\r\n            <li><a href=\"#\"><span>아주민감</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_nicePurifier/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isDeodorizationFilter || (depth0 && depth0.isDeodorizationFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isDeodorizationFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"filter_name\">"
    + alias3((helpers.removeNm || (depth0 && depth0.removeNm) || alias2).call(alias1,(depth0 != null ? depth0.fncNm : depth0),{"name":"removeNm","hash":{},"data":data}))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isBioFilter || (depth0 && depth0.isBioFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isBioFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_nicePurifier/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_nicePurifier/settingIon"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isIon || (depth0 && depth0.isIon) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isIon","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _ion\">\r\n    <p class=\"card_title title_alone\">이온</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>-->\r\n\r\n<div class=\"box_card _ion\">\r\n    <p class=\"card_title title_alone\">이온</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_nicePurifier/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_nicePurifier/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_nicePurifier/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_nicePurifier/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_sample/airPurifySlider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"box_slide\">\r\n"
    + ((stack1 = (helpers.deviceKindCode || (depth0 && depth0.deviceKindCode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dvcKindCd : depth0),{"name":"deviceKindCode","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div>\r\n                    <p class=\"air_product\">공기청정기</p>\r\n                    <p class=\"air_product_name\">"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    <div class=\"circle_air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">\r\n                        <div class=\"circle\">\r\n                            <p class=\"air\">공기 상태</p>\r\n                            <p class=\"status\">"
    + alias4(((helper = (helper = helpers.airGrd || (depth0 != null ? depth0.airGrd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"airGrd","hash":{},"data":data}) : helper)))
    + "</p>\r\n                            <p class=\"dust\">초미세먼지</p>\r\n                            <p class=\"dust_num\">"
    + alias4(((helper = (helper = helpers.pm25 || (depth0 != null ? depth0.pm25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pm25","hash":{},"data":data}) : helper)))
    + "<em>㎍/㎥</em></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"info_outside\">\r\n                        <p class=\"outside\">실외</p>\r\n                        <p class=\"degree\">온도 "
    + alias4(((helper = (helper = helpers.temp || (depth0 != null ? depth0.temp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temp","hash":{},"data":data}) : helper)))
    + "℃ / 습도 "
    + alias4(((helper = (helper = helpers.humi || (depth0 != null ? depth0.humi : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"humi","hash":{},"data":data}) : helper)))
    + "%</p>\r\n                    </div>\r\n                </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                <div>\r\n                    <p class=\"air_product\">실내센서</p>\r\n                    <p class=\"air_product_name\">1-1 실내센서</p>\r\n                    <div class=\"circle_air_status good\">\r\n                        <div class=\"circle circle_sensor\">\r\n                            <p class=\"score\">종합점수 85</p>\r\n                            <p class=\"status\">좋음</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"box_btn\">\r\n                        <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--<div class=\"slider\">-->\r\n    <!--<div class=\"box_slide\">-->\r\n        <!--<div>-->\r\n            <!--<p class=\"air_product\">공기청정기</p>-->\r\n            <!--<p class=\"air_product_name\">1-1 공기청정기</p>-->\r\n\r\n            <!--<div class=\"circle_air_status good\">-->\r\n                <!--<div class=\"circle\">-->\r\n                    <!--<p class=\"air\">공기 상태</p>-->\r\n                    <!--<p class=\"status\">좋음</p>-->\r\n                    <!--<p class=\"dust\">초미세먼지</p>-->\r\n                    <!--<p class=\"dust_num\">10<em>㎍/㎥</em></p>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"info_outside\">-->\r\n                <!--<p class=\"outside\">실외</p>-->\r\n                <!--<p class=\"degree\">온도 27℃ / 습도 50%</p>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"box_slide\">-->\r\n        <!--<div>-->\r\n            <!--<p class=\"air_product\">공기청정기</p>-->\r\n            <!--<p class=\"air_product_name\">1-1 공기청정기</p>-->\r\n\r\n            <!--<div class=\"circle_air_status good\">-->\r\n                <!--<div class=\"circle\">-->\r\n                    <!--<p class=\"air\">공기 상태</p>-->\r\n                    <!--<p class=\"status\">좋음</p>-->\r\n                    <!--<p class=\"dust\">초미세먼지</p>-->\r\n                    <!--<p class=\"dust_num\">10<em>㎍/㎥</em></p>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"info_outside\">-->\r\n                <!--<p class=\"outside\">실외</p>-->\r\n                <!--<p class=\"degree\">온도 27℃ / 습도 50%</p>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"box_slide\">-->\r\n        <!--<div>-->\r\n            <!--<p class=\"air_product\">공기청정기</p>-->\r\n            <!--<p class=\"air_product_name\">1-1 공기청정기</p>-->\r\n\r\n            <!--<div class=\"circle_air_status good\">-->\r\n                <!--<div class=\"circle\">-->\r\n                    <!--<p class=\"air\">공기 상태</p>-->\r\n                    <!--<p class=\"status\">좋음</p>-->\r\n                    <!--<p class=\"dust\">초미세먼지</p>-->\r\n                    <!--<p class=\"dust_num\">10<em>㎍/㎥</em></p>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"info_outside\">-->\r\n                <!--<p class=\"outside\">실외</p>-->\r\n                <!--<p class=\"degree\">온도 27℃ / 습도 50%</p>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n\r\n<!--</div>-->\r\n\r\n<div class=\"slider\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["templete"]["device_sample/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <span class=\"sprite sprite_common sprite_new\">new</span>\r\n    <!-- 알림 메세지 1줄일 경우 -->\r\n    <div class=\"alarm_txt\" style=\"display: none;\">\r\n        <p>[1-1 공기청정기]의 동작을 시작합니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n    <!-- 알림 메세지 2줄일 경우 -->\r\n    <div class=\"alarm_txt\">\r\n        <p>[1-1 공기청정기] 오전 7시 30분에 전원 동작을 예약하였습니다.</p>\r\n        <p class=\"etc\">오전 7:52</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingAutoControls"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _autocontrol\">\r\n    <p class=\"card_title\">자동 제어 설정</p>\r\n    <div class=\"edit_box\">\r\n        <a href=\"#\">편집</a>\r\n        <a href=\"#\">추가</a>\r\n    </div>\r\n    <ul class=\"set_list\">\r\n        <li>\r\n            <p class=\"nugu\">NUGU 음성 알림 받기</p>\r\n            <p class=\"desc\">NUGU를 통해 음성으로도 알림을 받습니다.</p>\r\n            <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n        </li>\r\n        <li>\r\n            <!-- 알림해제시 disabled 클래스 추가 -->\r\n            <p class=\"nugu disabled\">NUGU 음성 알림 받기</p>\r\n            <p class=\"desc\">NUGU를 통해 음성으로도 알림을 받습니다.</p>\r\n            <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n        </li>\r\n        <li class=\"none_border_bottom\">\r\n            <p>학교 지역에 황사주의보<br>/ 미세먼지 주의보 발령 시</p>\r\n            <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingChildLock"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _childlock\">\r\n    <p class=\"card_title title_alone\">차일드락</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingDisinfect"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _disinfect\">\r\n    <p class=\"card_title title_alone\">자동 살균</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingDustSensor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _dustsensor\">\r\n    <p class=\"card_title title_set\">먼지센서 감도 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li><a href=\"#\"><span>약</span></a></li>\r\n            <li class=\"focus\"><a href=\"#\"><span>중</span></a></li>\r\n            <li><a href=\"#\"><span>강</span></a></li>\r\n            <li><a href=\"#\"><span>터보</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingFilterUsed"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n        <li>\r\n            <p class=\"filter_name\">필터이름</p>\r\n            <div class=\"box_filter_use\">\r\n                <!-- 사용량 span width percent로 조정 -->\r\n                <p><span class=\"filter_use\" style=\"width: 95%;\"></span></p>\r\n                <span class=\"filter_per\">95%</span>\r\n            </div>\r\n        </li>\r\n        <li class=\"none_border_bottom\">\r\n            <p>필터 구매하기</p>\r\n            <span class=\"sprite sprite_common sprite_more\">?</span>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingHumidfy"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _humidfy\">\r\n    <p class=\"card_title title_alone\">가습</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\"images/default_img.png\" alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>위닉스 공기청정기</p>\r\n            <p>1-1 공기청정기</p>\r\n            <span>고객센터 1800-0212</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingIon"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _ion\">\r\n    <p class=\"card_title title_alone\">이온</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingMode"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul  class=\"clearfix\">\r\n            <li class=\"focus\"><a href=\"#\"><span>수동</span></a></li>\r\n            <li><a href=\"#\"><span>자동</span></a></li>\r\n            <li><a href=\"#\"><span>황사</span></a></li>\r\n            <li><a href=\"#\"><span>취침</span></a></li>\r\n            <li><a href=\"#\"><span>터보</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingPlasma"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _plasma\">\r\n    <p class=\"card_title title_alone\">플라즈마</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingPlasmaWave"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _plasmawave\">\r\n    <p class=\"card_title title_alone\">공기정화<span>PLASMAWAVE</span></p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingPollutionLamp"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _pollutionlamp\">\r\n    <p class=\"card_title title_alone\">오염도램프</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingPower"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_lg\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingPurify"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _purify\">\r\n    <p class=\"card_title title_alone\">공기정화<span>PLASMAWAVE</span></p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingPuritySignLamp"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _purifysignlamp\">\r\n    <p class=\"card_title title_alone\">청정표시등</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingRemoveVirus"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _removevirus\">\r\n    <p class=\"card_title title_alone\">공기제균</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingUseReport"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _usereport\">\r\n    <p class=\"card_title\">사용 리포트</p>\r\n    <a href=\"#\" class=\"set_date\">2017.12.26(화)</a>\r\n    <div class=\"report_info\">\r\n        <p class=\"report_icon\"><i class=\"sprite sprite_common sprite_history_air_sensor\"></i>공기청정기<br>사용시간</p>\r\n        <div class=\"wrapper_graph clearfix\">\r\n            <div class=\"report_graph\">\r\n                <!-- 원형 퍼센트 p00 숫자로 조절 -->\r\n                <!-- 50%이상 'over50' 클래스 추가 -->\r\n                <div class=\"progress-circle over50 p83\">\r\n                    <span><em>9</em>시간</span>\r\n                    <div class=\"left-half-clipper\">\r\n                        <div class=\"first50-bar\"></div>\r\n                        <div class=\"value-bar\"></div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"graph_name\">우리집</p>\r\n            </div>\r\n            <div class=\"report_graph report_household\">\r\n                <div class=\"progress-circle p15\">\r\n                    <span><em>4</em>시간</span>\r\n                    <div class=\"left-half-clipper\">\r\n                        <div class=\"first50-bar\"></div>\r\n                        <div class=\"value-bar\"></div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"graph_name\">이용가구 평균</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingUV"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _uv\">\r\n    <p class=\"card_title title_alone\">UV+</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>";
},"useData":true});

this["templete"]["device_sample/settingVolume"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n        <ul class=\"clearfix\">\r\n            <li><a href=\"#\"><span>약</span></a></li>\r\n            <li class=\"focus\"><a href=\"#\"><span>중</span></a></li>\r\n            <li><a href=\"#\"><span>강</span></a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_samsungPurifier/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_samsungPurifier/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_samsungPurifier/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isDeodorizationFilter || (depth0 && depth0.isDeodorizationFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isDeodorizationFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"filter_name\">"
    + alias3((helpers.removeNm || (depth0 && depth0.removeNm) || alias2).call(alias1,(depth0 != null ? depth0.fncNm : depth0),{"name":"removeNm","hash":{},"data":data}))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isBioFilter || (depth0 && depth0.isBioFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isBioFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_samsungPurifier/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_samsungPurifier/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                    <ul class=\"clearfix\">\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                    </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n    <div class=\"box_card _mode\">\r\n        <p class=\"card_title title_set\">모드 설정</p>\r\n        <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n";
},"useData":true,"useDepths":true});

this["templete"]["device_samsungPurifier/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_samsungPurifier/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_samsungPurifier/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                    <ul class=\"clearfix\">\r\n                        <!--\"01:강풍,03:약풍,04:미풍 ,06:취침,07:3단\"-->\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"04\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"04",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>미풍</span></a></li>\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"06\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"06",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                        <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"07\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"07",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n    <div class=\"box_card _volume\">\r\n        <p class=\"card_title title_set\">풍량 설정</p>\r\n        <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaHumidity/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"plasma\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaHumidity/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaHumidity/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isDeodorizationFilter || (depth0 && depth0.isDeodorizationFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isDeodorizationFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"filter_name\">"
    + alias3((helpers.removeNm || (depth0 && depth0.removeNm) || alias2).call(alias1,(depth0 != null ? depth0.fncNm : depth0),{"name":"removeNm","hash":{},"data":data}))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isBioFilter || (depth0 && depth0.isBioFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isBioFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaHumidity/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaHumidity/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaHumidity/settingPlasma"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _plasma\">\r\n    <p class=\"card_title title_alone\">플라즈마</p>\r\n"
    + ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaHumidity/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaHumidity/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaHumidity/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaPurifier/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHumidfy || (depth0 && depth0.isHumidfy) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHumidfy","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"humidfy\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"disinfect\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"plasma\"></div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaPurifier/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaPurifier/settingDisinfect"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isRemoveVirus || (depth0 && depth0.isRemoveVirus) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isRemoveVirus","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--<div class=\"box_card _disinfect\">\r\n    <p class=\"card_title title_alone\">자동 살균</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>-->\r\n\r\n<div class=\"box_card _childlock\">\r\n    <p class=\"card_title title_alone\">자동 살균</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaPurifier/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isDeodorizationFilter || (depth0 && depth0.isDeodorizationFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isDeodorizationFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <li>\r\n                    <p class=\"filter_name\">"
    + alias3((helpers.removeNm || (depth0 && depth0.removeNm) || alias2).call(alias1,(depth0 != null ? depth0.fncNm : depth0),{"name":"removeNm","hash":{},"data":data}))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isBioFilter || (depth0 && depth0.isBioFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isBioFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaPurifier/settingHumidfy"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isHumidfy || (depth0 && depth0.isHumidfy) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHumidfy","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--<div class=\"box_card _humidfy\">\r\n    <p class=\"card_title title_alone\">가습</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\">\r\n</div>-->\r\n\r\n<div class=\"box_card _humidfy\">\r\n    <p class=\"card_title title_alone\">가습</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaPurifier/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaPurifier/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>취침</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaPurifier/settingPlasma"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _plasma\">\r\n    <p class=\"card_title title_alone\">플라즈마</p>\r\n"
    + ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaPurifier/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winiaPurifier/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_winiaPurifier/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixNike/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"plasmaWave\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixNike/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixNike/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <li class=\""
    + alias3((helpers.hiddenFilter || (depth0 && depth0.hiddenFilter) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"hiddenFilter","hash":{},"data":data}))
    + "\">\r\n                    <p class=\"filter_name\">"
    + alias3(((helper = (helper = helpers.replaceNm || (depth0 != null ? depth0.replaceNm : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"replaceNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                    <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n";
  stack1 = ((helper = (helper = helpers.openDeviceList || (depth0 != null ? depth0.openDeviceList : depth0)) != null ? helper : alias2),(options={"name":"openDeviceList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.openDeviceList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_winixNike/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixNike/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixNike/settingPlasmaWave"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _plasmawave\">\r\n    <p class=\"card_title title_alone\">공기정화<span>PLASMAWAVE</span></p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixNike/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixNike/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\"  data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_winixNike/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixTitan/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"plasmaWave\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixTitan/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixTitan/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <li class=\""
    + alias3((helpers.hiddenFilter || (depth0 && depth0.hiddenFilter) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"hiddenFilter","hash":{},"data":data}))
    + "\">\r\n                    <p class=\"filter_name\">"
    + alias3(((helper = (helper = helpers.replaceNm || (depth0 != null ? depth0.replaceNm : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"replaceNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n";
  stack1 = ((helper = (helper = helpers.openDeviceList || (depth0 != null ? depth0.openDeviceList : depth0)) != null ? helper : alias2),(options={"name":"openDeviceList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.openDeviceList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_winixTitan/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixTitan/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixTitan/settingPlasmaWave"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _plasmawave\">\r\n    <p class=\"card_title title_alone\">공기정화<span>PLASMAWAVE</span></p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixTitan/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixTitan/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_winixTitan/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isUV || (depth0 && depth0.isUV) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isUV","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"uv\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isChildLock || (depth0 && depth0.isChildLock) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isChildLock","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"childlock\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPollutionLamp || (depth0 && depth0.isPollutionLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPollutionLamp","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"pollutionlamp\"></div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"plasmaWave\"></div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixXq/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixXq/settingChildLock"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isChildLock || (depth0 && depth0.isChildLock) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isChildLock","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _childlock\">\r\n    <p class=\"card_title title_alone\">차일드락</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>\r\n-->\r\n\r\n\r\n<div class=\"box_card _childlock\">\r\n    <p class=\"card_title title_alone\">차일드락</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "            <li class=\""
    + alias3((helpers.hiddenFilter || (depth0 && depth0.hiddenFilter) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"hiddenFilter","hash":{},"data":data}))
    + "\">\r\n                    <p class=\"filter_name\">"
    + alias3(((helper = (helper = helpers.replaceNm || (depth0 != null ? depth0.replaceNm : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"replaceNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n";
  stack1 = ((helper = (helper = helpers.openDeviceList || (depth0 != null ? depth0.openDeviceList : depth0)) != null ? helper : alias2),(options={"name":"openDeviceList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.openDeviceList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_winixXq/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixXq/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/settingPlasmaWave"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _plasmawave\">\r\n    <p class=\"card_title title_alone\">공기정화<span>PLASMAWAVE</span></p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/settingPollutionLamp"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPollutionLamp || (depth0 && depth0.isPollutionLamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPollutionLamp","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _pollutionlamp\">\r\n    <p class=\"card_title title_alone\">오염도램프</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>-->\r\n\r\n<div class=\"box_card _pollutionlamp\">\r\n    <p class=\"card_title title_alone\">오염도램프</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_winixXq/settingUV"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isUV || (depth0 && depth0.isUV) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isUV","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--<div class=\"box_card _uv\">\r\n    <p class=\"card_title title_alone\">UV+</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>-->\r\n\r\n\r\n<div class=\"box_card _uv\">\r\n    <p class=\"card_title title_alone\">UV+</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixXq/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"06\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"06",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수면풍</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixZeroplus/device"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"mode\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"volume\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isChildLock || (depth0 && depth0.isChildLock) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isChildLock","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"childlock\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"plasmaWave\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isFilterused || (depth0 && depth0.isFilterused) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isFilterused","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "            <div id=\"filterUsed\"></div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "        <div id=\"alarm\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"area_box_list\" data-makernm=\""
    + container.escapeExpression(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div id=\"power\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"turnOff\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isAlarm || (depth0 && depth0.isAlarm) || alias2).call(alias1,(depth0 != null ? depth0.actMsg : depth0),{"name":"isAlarm","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div id=\"infomation\"></div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixZeroplus/settingAlarm"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _alarm\">\r\n    <p class=\"card_title _goToHistoryAlarm\" data-rtndvcid=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">이력 및 알림 <span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.newAlarm || (depth0 != null ? depth0.newAlarm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newAlarm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class=\"alarm_txt\">\r\n        <p>"
    + alias4((helpers.bracket || (depth0 && depth0.bracket) || alias2).call(alias1,(depth0 != null ? depth0.dvcNickNm : depth0),{"name":"bracket","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p class=\"etc\">"
    + alias4(((helper = (helper = helpers.deviceDetailReferSendHm || (depth0 != null ? depth0.deviceDetailReferSendHm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferSendHm","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixZeroplus/settingChildLock"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isChildLock || (depth0 && depth0.isChildLock) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isChildLock","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\" data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--\r\n<div class=\"box_card _childlock\">\r\n    <p class=\"card_title title_alone\">차일드락</p>\r\n    <input type=\"checkbox\" class=\"icon_check toggle_default\" checked>\r\n</div>\r\n-->\r\n\r\n\r\n<div class=\"box_card _childlock\">\r\n    <p class=\"card_title title_alone\">차일드락</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixZeroplus/settingFilterUsed"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isHepaFilter || (depth0 && depth0.isHepaFilter) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isHepaFilter","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <li class=\""
    + alias3((helpers.hiddenFilter || (depth0 && depth0.hiddenFilter) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"hiddenFilter","hash":{},"data":data}))
    + "\">\r\n                    <p class=\"filter_name\">"
    + alias3(((helper = (helper = helpers.replaceNm || (depth0 != null ? depth0.replaceNm : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"replaceNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    "
    + ((stack1 = (helpers.fncValCheck || (depth0 && depth0.fncValCheck) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"fncValCheck","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                        <p><span class=\"filter_use\" style=\"width: "
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "%;\"></span></p>\r\n                        <span class=\"filter_per\">"
    + alias3((helpers.remove || (depth0 && depth0.remove) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"remove","hash":{},"data":data}))
    + "%</span>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"box_card _filterused\">\r\n    <p class=\"card_title\">필터 사용량</p>\r\n    <ul class=\"set_list\">\r\n";
  stack1 = ((helper = (helper = helpers.openDeviceList || (depth0 != null ? depth0.openDeviceList : depth0)) != null ? helper : alias2),(options={"name":"openDeviceList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.openDeviceList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li class=\"none_border_bottom _filterbuyurl\">\r\n            <a href=\"#\" style=\"display: block;\" data-link=\""
    + container.escapeExpression(((helper = (helper = helpers.filterBuyUrl || (depth0 != null ? depth0.filterBuyUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filterBuyUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n                <p>필터 구매하기</p>\r\n                <span class=\"sprite sprite_common sprite_more\">?</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["device_winixZeroplus/settingInfomation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box_card _infomation\">\r\n    <p class=\"card_title _goToInformationDetail\"><a href=\"#\">정보<span class=\"sprite sprite_common sprite_more\">?</span></a></p>\r\n    <div class=\"info_product clearfix\">\r\n        <div class=\"img\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img.png\"' alt=\"\"></div>\r\n        <div class=\"info_desc\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <span>고객센터 "
    + alias4(((helper = (helper = helpers.callCenterPhnNum || (depth0 != null ? depth0.callCenterPhnNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callCenterPhnNum","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["device_winixZeroplus/settingMode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isMode || (depth0 && depth0.isMode) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isMode","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>자동</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>수동</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _mode\">\r\n    <p class=\"card_title title_set\">모드 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixZeroplus/settingPlasmaWave"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPlasmaWave || (depth0 && depth0.isPlasmaWave) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPlasmaWave","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_default\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _plasmawave\">\r\n    <p class=\"card_title title_alone\">공기정화<span>PLASMAWAVE</span></p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixZeroplus/settingPower"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isPower || (depth0 && depth0.isPower) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isPower","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <input type=\"checkbox\" class=\"icon_check toggle_lg\" data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\""
    + alias4(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "\" "
    + alias4((helpers.isOn || (depth0 && depth0.isOn) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),{"name":"isOn","hash":{},"data":data}))
    + ">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _power\">\r\n    <p class=\"card_title title_alone\">전원설정</p>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["templete"]["device_winixZeroplus/settingTurnOff"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"box_card turn_off_timer _turnoff\">\r\n    <p class=\"card_title\">꺼짐 예약 </p>\r\n    <a href=\"#\" class=\"set_desc btn_setting _openPopupSettingTImer\">설정</a>\r\n    <a href=\"#\" class=\"set_desc btn_release _releasePopupSettingTImer\" data-mode-ser=\""
    + container.escapeExpression(((helper = (helper = helpers.modeSer || (depth0 != null ? depth0.modeSer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"modeSer","hash":{},"data":data}) : helper)))
    + "\">해제</a>\r\n    <!--<p class=\"time\">오후<span>09:15</span></p>-->\r\n    <p class=\"desc_date\"><span class=\"day\"></span><span class=\"time\">09:15</span></p>\r\n</div>";
},"useData":true});

this["templete"]["device_winixZeroplus/settingVolume"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isVolume || (depth0 && depth0.isVolume) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fncCd : depth0),{"name":"isVolume","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <ul class=\"clearfix\">\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"01\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"01",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>강풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"02\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"02",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>중풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"03\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"03",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>약풍</span></a></li>\r\n                    <li data-fncCd=\""
    + alias4(((helper = (helper = helpers.fncCd || (depth0 != null ? depth0.fncCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncCd","hash":{},"data":data}) : helper)))
    + "\"  data-dvcCd=\""
    + alias4(alias5((depths[1] != null ? depths[1].dvcCd : depths[1]), depth0))
    + "\" data-rtnDvcId=\""
    + alias4(((helper = (helper = helpers.rtnDvcId || (depth0 != null ? depth0.rtnDvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rtnDvcId","hash":{},"data":data}) : helper)))
    + "\" data-fncVal=\"05\" class=\""
    + alias4((helpers.isSameFocus || (depth0 && depth0.isSameFocus) || alias2).call(alias1,(depth0 != null ? depth0.fncVal : depth0),"05",{"name":"isSameFocus","hash":{},"data":data}))
    + "\"><a href=\"#\"><span>터보</span></a></li>\r\n                </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"box_card _volume\">\r\n    <p class=\"card_title title_set\">풍량 설정</p>\r\n    <div class=\"box_setting\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.openDeviceList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["templete"]["error/deviceConnectError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_card error net_error\">\n    <p class=\"error_network\"><span class=\"sprite sprite_common sprite_network_error\"></span>기기전원 또는 네트워크 상태를 확인해 주세요.</p>\n    <a href=\"#\" class=\"sprite sprite_common sprite_close _btnConnectErrorClose\"></a>\n</div>";
},"useData":true});

this["templete"]["error/getDeviceError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p class=\"detail_desc\">기기 상세를 불러오지 못하였습니다.</p>";
},"useData":true});

this["templete"]["globalUtil/pageLoading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page_loading\"></div>";
},"useData":true});

this["templete"]["globalUtil/pageReload"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box_reloader\">\n    <div class=\"loader\"></div>\n</div>";
},"useData":true});

this["templete"]["header/mainHeader"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1><a href=\"#home\"><img src=\"images/img_logo.png\" alt=\"\"></a></h1>\n<!--<a href=\"#indexList\" class=\"main_hidden\">기기상세</a>-->\n<a href=\"#\" class=\"sprite sprite_common sprite_side_menu _openAllMenu\">서브메뉴</a>\n<div class=\"box_title_icon\">\n    <a href=\"#\" class=\"sprite sprite_common sprite_header_search _moveToSearchSchool\">검색</a>\n    <a href=\"#\" class=\"sprite sprite_common  _goToLocaleList "
    + container.escapeExpression(((helper = (helper = helpers.iconLocaleMap || (depth0 != null ? depth0.iconLocaleMap : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"iconLocaleMap","hash":{},"data":data}) : helper)))
    + "\">리스트</a>\n</div>\n";
},"useData":true});

this["templete"]["header/subHeader"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"icon_check check_notice _goToHistoryAlarm\">이력 및 알림</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <input type=\"checkbox\" class=\"icon_check check_class\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.subHeaderTitle || (depth0 != null ? depth0.subHeaderTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"subHeaderTitle","hash":{},"data":data}) : helper)))
    + "</h1>\n<a href=\"#\" class=\"sprite sprite_common sprite_back _btnPrevPage\">뒤로</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isMySchoolDetail : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAirMultiSensor : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["templete"]["historyAlarm/historyAlarm"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "        <div class=\"area_history_box\">\n            <p class=\"day\"><span class=\"sprite sprite_common sprite_history_dot\">?</span>"
    + alias3((helpers.checkSendMd || (depth0 && depth0.checkSendMd) || alias2).call(alias1,(depth0 != null ? depth0.sendMd : depth0),{"name":"checkSendMd","hash":{},"data":data}))
    + "</p>\n            <!--<div class=\"box_alarm\">\n                <div class=\"alarm_desc\">\n                    <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_class\">?</span>수업변경</p>\n                    </div>\n                    <p class=\"desc\">"
    + alias3(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\n                    <p class=\"time\">"
    + alias3(((helper = (helper = helpers.sendHm || (depth0 != null ? depth0.sendHm : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"sendHm","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>-->\n            <div class=\"box_alarm\">\n                <div class=\"alarm_desc\">\n                    <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_air_sensor\">?</span>공기청정기\n                    </p></div>\n                    <p class=\"desc\">"
    + alias3(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "</p>\n                    <p class=\"time\">"
    + alias3((helpers.checkSendHm || (depth0 && depth0.checkSendHm) || alias2).call(alias1,(depth0 != null ? depth0.sendHm : depth0),{"name":"checkSendHm","hash":{},"data":data}))
    + "</p>\n                </div>\n            </div>\n            <!--<div class=\"box_alarm\">-->\n                <!--<div class=\"alarm_desc\">-->\n                    <!--<div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_error\">?</span></p>-->\n                    <!--</div>-->\n                    <!--<p class=\"desc\">"
    + alias3(((helper = (helper = helpers.actMsg || (depth0 != null ? depth0.actMsg : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"actMsg","hash":{},"data":data}) : helper)))
    + "모든 학급의 기기가 오류 상태 입니다.</p>-->\n                    <!--<p class=\"time\">"
    + alias3(((helper = (helper = helpers.sendHm || (depth0 != null ? depth0.sendHm : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"sendHm","hash":{},"data":data}) : helper)))
    + "오후 03:41</p>-->\n                <!--</div>-->\n            <!--</div>-->\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"timeline\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.resultList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<!--    <div class=\"area_history_box none_padding_bottom\">\n        <p class=\"day\"><span class=\"sprite sprite_common sprite_history_dot\">?</span>11월 22일</p>\n        <div class=\"box_alarm\">\n            <div class=\"alarm_desc\">\n                <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_air_sensor\">?</span>공기청정기\n                </p></div>\n                <p class=\"desc\">미세먼지 주의보로 모든 학급의 공기청정기를 가동합니다.</p>\n                <p class=\"time\">오후 03:41</p>\n            </div>\n        </div>\n        <div class=\"box_alarm\">\n            <div class=\"alarm_desc\">\n                <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_error\">?</span></p>\n                </div>\n                <p class=\"desc\">모든 학급의 기기가 오류 상태 입니다.</p>\n                <p class=\"time\">오후 03:41</p>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"area_history_box\">\n        <p class=\"day\"><span class=\"sprite sprite_common sprite_history_dot\">?</span>11월 27일</p>\n        <div class=\"box_alarm\">\n            <div class=\"alarm_desc\">\n                <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_class\">?</span>수업변경</p>\n                </div>\n                <p class=\"desc\">오후 실외수업이 공기상태로 인해 실외수업으로 변경되었습니다.</p>\n                <p class=\"time\">오후 03:41</p>\n            </div>\n        </div>\n        <div class=\"box_alarm\">\n            <div class=\"alarm_desc\">\n                <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_class\">?</span>수업변경</p>\n                </div>\n                <p class=\"desc\">오늘 모든 실외수업은 실내수업으로 변경되었습니다.</p>\n                <p class=\"time\">오후 03:41</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"area_history_box none_padding_bottom\">\n        <p class=\"day\"><span class=\"sprite sprite_common sprite_history_dot\">?</span>11월 22일</p>\n        <div class=\"box_alarm\">\n            <div class=\"alarm_desc\">\n                <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_air_sensor\">?</span>공기청정기\n                </p></div>\n                <p class=\"desc\">미세먼지 주의보로 모든 학급의 공기청정기를 가동합니다.</p>\n                <p class=\"time\">오후 03:41</p>\n            </div>\n        </div>\n        <div class=\"box_alarm\">\n            <div class=\"alarm_desc\">\n                <div class=\"icon_alarm\"><p><span class=\"sprite sprite_common sprite_history_error\">?</span></p>\n                </div>\n                <p class=\"desc\">모든 학급의 기기가 오류 상태 입니다.</p>\n                <p class=\"time\">오후 03:41</p>\n            </div>\n        </div>\n    </div>-->\n</div>";
},"useData":true});

this["templete"]["historyAlarm/historyAlarmNone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p class=\"detail_desc\">이력이 없습니다.</p>";
},"useData":true});

this["templete"]["indexList/indexList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<table class=\"table\">\n    <colgroup>\n        <col style=\"width: 60%;\">\n        <col style=\"width: 17%;\">\n        <col style=\"width: 13%;\">\n        <col style=\"width: 10%;\">\n    </colgroup>\n    <thead>\n    <tr>\n        <th>화면명</th>\n        <th>VIEW</th>\n        <th>Link</th>\n        <th>비고</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>대우 위니아 공기청정기</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierWinia\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>대우 위니아 가습청정기</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierWiniaHumidfy\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>청호나이스 CHA-K700AI</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierChungho\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>삼성전자 공기청정기</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierSamsung\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>LG전자 G+</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierLgG\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>LG전자 몽블랑 S</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierLgS\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>LG전자 몽블랑 D+</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierLgD\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>위닉스 나이키</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierWinixNike\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>위닉스 타이탄</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierWinixTaitan\">Link</a></td>\n        <td>-</td>\n    </tr>\n    <tr>\n        <td>위닉스 XQ</td>\n        <td class=\"O\">O</td>\n        <td><a href=\"#airPurifierWinixXQ\">Link</a></td>\n        <td>-</td>\n    </tr>\n    </tbody>\n</table>";
},"useData":true});

this["templete"]["informationDetail/informationDetail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"area_product_info\">\r\n    <img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/default_img_lg.png\"' alt=\"\">\r\n<p>"
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n<p>"
    + alias4(((helper = (helper = helpers.dvcNickNm || (depth0 != null ? depth0.dvcNickNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcNickNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n<ul class=\"area_info_menu \">\r\n    <li class=\"_dvcguideurl\"><a href=\"#\" data-link=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcGuideUrl || (depth0 != null ? depth0.deviceDetailReferDvcGuideUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcGuideUrl","hash":{},"data":data}) : helper)))
    + "\">제품 사용 가이드</a></li>\r\n    <li><a href=\"#\">고객센터 홈페이지</a></li>\r\n</ul>\r\n<div class=\"area_info_footer\">\r\n    <p><a href=\"#\"><img src=\""
    + alias4(((helper = (helper = helpers.deviceDetailReferDvcBannerImgUrl || (depth0 != null ? depth0.deviceDetailReferDvcBannerImgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deviceDetailReferDvcBannerImgUrl","hash":{},"data":data}) : helper)))
    + "\" onerror='this.src=\"images/@temp_logo_image.png\"' alt=\"\"></a>\r\n        "
    + alias4(((helper = (helper = helpers.makerNm || (depth0 != null ? depth0.makerNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"makerNm","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.dvcKindNm || (depth0 != null ? depth0.dvcKindNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcKindNm","hash":{},"data":data}) : helper)))
    + " 관련 용품을<br>홈페이지에서 만나보세요.</p>\r\n</div>\r\n\r\n";
},"useData":true});

this["templete"]["localeList/localeArea01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\"#\" data-locale-code=\""
    + alias4(((helper = (helper = helpers.sidoCd || (depth0 != null ? depth0.sidoCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sidoCd","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.sidoNm || (depth0 != null ? depth0.sidoNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sidoNm","hash":{},"data":data}) : helper)))
    + "</span></a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"area_local_choice locale01 _localeSelect\">\r\n    <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sidoList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
},"useData":true});

this["templete"]["localeList/localeArea02"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\"#\" data-locale-code=\""
    + alias4(((helper = (helper = helpers.siguCd || (depth0 != null ? depth0.siguCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siguCd","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.siguNm || (depth0 != null ? depth0.siguNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siguNm","hash":{},"data":data}) : helper)))
    + "</span></a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"area_local_choice locale02 _localeSelect\">\r\n    <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.siguList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
},"useData":true});

this["templete"]["localeList/localeArea03"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\"#\" data-school-code=\""
    + alias4(((helper = (helper = helpers.schCd || (depth0 != null ? depth0.schCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schCd","hash":{},"data":data}) : helper)))
    + "\"><p>"
    + alias4(((helper = (helper = helpers.schNm || (depth0 != null ? depth0.schNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schNm","hash":{},"data":data}) : helper)))
    + "</p></a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"active\">\r\n    <ul class=\"search_list choice_list _schoolResultList\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.schList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n<div>\r\n    <ul class=\"search_list choice_list\">\r\n        <li><a href=\"#\"><p>유치원1</p></a></li>\r\n        <li><a href=\"#\"><p>유치원2</p></a></li>\r\n        <li><a href=\"#\"><p>유치원3</p></a></li>\r\n\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["localeList/localeList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tab\">\r\n    <div class=\"tab-menu _tabs\">\r\n        <ul class=\"clearfix\">\r\n            <!-- step 지나갔을 시 visited 클래스 추가 -->\r\n            <li class=\"focus\"><a href=\"#\">광역시/도</a></li>\r\n            <li><a href=\"#\">시/군/구</a></li>\r\n            <li><a href=\"#\">학교/유치원</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"tab-contents\">\r\n\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["localeList/localeListSubTab"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sub_tabs _subTabs\">\r\n    <ul class=\"clearfix\">\r\n        <li class=\"focus\"><a href=\"#\">초등학교</a></li>\r\n        <li><a href=\"#\">유치원</a></li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["templete"]["main/main"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"area_map_ps\">\n    <!-- 위치 활성화 시 focus 클래스 추가 -->\n    <a href=\"#\" class=\"sprite sprite_common sprite_map_ps focus _fnMoveMyLocation\">위치</a>\n    <a href=\"#\" class=\"sprite sprite_common sprite_map_update _fnRefresh\">새로고침</a>\n</div>\n<div class=\"area_my_school\">\n    <a href=\"#\" class=\"sprite sprite_status sprite_my_school _mySchoolList\">MY</a>\n</div>\n\n<div id=\"school_map\" class=\"area_school_map\"></div>\n<div class=\"area_slide school_list_slide\">\n    <div class=\"box_slide slider clearfix\"></div>\n</div>\n<div class=\"area_btn\">\n    <button class=\"btn btn_orange btn_lg btn_block _goToLocaleList\"><span class=\"sprite sprite_common sprite_add_school\">아이콘</span>내\n        학교 등록\n    </button>\n</div>\n";
},"useData":true});

this["templete"]["main/mainLogin"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"area_map_ps\">\n    <!-- 위치 활성화 시 focus 클래스 추가 -->\n    <a href=\"#\" class=\"sprite sprite_common sprite_map_ps focus _fnMoveMyLocation\">위치</a>\n    <a href=\"#\" class=\"sprite sprite_common sprite_map_update _fnRefresh\">새로고침</a>\n</div>\n<div class=\"area_my_school\">\n    <a href=\"#\" class=\"sprite sprite_status sprite_my_school _mySchoolList\">MY</a>\n</div>\n<div id=\"school_map\" class=\"area_school_map\"></div>\n<div class=\"area_slide school_list_slide\">\n    <div class=\"box_slide slider clearfix\"></div>\n</div>";
},"useData":true});

this["templete"]["mySchool/mySchool"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"list_title\">\n    <p>내 학교</p>\n    <button class=\"btn btn_round _moveMainPage\"><span class=\"sprite sprite_common sprite_all_list\"></span>전체학교</button>\n</div>\n<div class=\"list_school_card none_card_list\">\n    <p class=\"none_list_desc\">\n        <span></span>\n        등록된 <em>내 학교</em>가 없습니다.\n    </p>\n    <p class=\"none_list_etc\">\n        자주 찾는 학교/학급을 내 학교로 등록하여<br>편리하게 공기상태를 확인하세요.\n    </p>\n</div>\n<div class=\"area_btn_rg\">\n    <a href=\"#localeList\" class=\"btn\"><span class=\"sprite sprite_common sprite_plus_btn\">+</span>내 학교 등록</a>\n</div>";
},"useData":true});

this["templete"]["mySchool/mySchoolLogin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.clsList : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isClass || (depth0 && depth0.isClass) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.lv : depth0),{"name":"isClass","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <li data-no=\""
    + alias4(((helper = (helper = helpers.no || (depth0 != null ? depth0.no : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"no","hash":{},"data":data}) : helper)))
    + "\" data-lv=\""
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "\" data-cls=\""
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "\" data-userSchId=\""
    + alias4(((helper = (helper = helpers.userSchId || (depth0 != null ? depth0.userSchId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userSchId","hash":{},"data":data}) : helper)))
    + "\">\n                    <div data-user-schId=\""
    + alias4(((helper = (helper = helpers.userSchId || (depth0 != null ? depth0.userSchId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userSchId","hash":{},"data":data}) : helper)))
    + "\">\n                        <span class=\"school_name\">"
    + alias4(alias5((depths[1] != null ? depths[1].schNm : depths[1]), depth0))
    + "</span>\n                        <p class=\"school_title\">"
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "</p>\n                        <ul id=\"deviceList\" class=\"deviceList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.senList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.clnList : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </ul>\n                    </div>\n                    <div class=\"school_air\">\n                        <a href=\"#\" class=\"_clickOutSensor\" data-school-code=\""
    + alias4(alias5((depths[1] != null ? depths[1].schCd : depths[1]), depth0))
    + "\" data-school-name=\""
    + alias4(alias5((depths[1] != null ? depths[1].schNm : depths[1]), depth0))
    + "\">\n                            <i class=\"sprite sprite_status sprite_air_mid "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depths[1] != null ? depths[1].airGrd : depths[1]),(depths[1] != null ? depths[1].connStatYn : depths[1]),{"name":"airStateColor","hash":{},"data":data}))
    + "\">?</i>\n                            <p class=\"status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depths[1] != null ? depths[1].airGrd : depths[1]),(depths[1] != null ? depths[1].connStatYn : depths[1]),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4(alias5((depths[1] != null ? depths[1].airGrd : depths[1]), depth0))
    + "</p>\n                            <p class=\"air_dust\">\n                                미세먼지<span class=\"air_num\">"
    + alias4(alias5((depths[1] != null ? depths[1].pm10 : depths[1]), depth0))
    + "</span><span class=\"place\"><em class=\"sprite sprite_common sprite_position\"></em>"
    + alias4(alias5((depths[1] != null ? depths[1].senLoc : depths[1]), depth0))
    + "</span>\n                            </p>\n                        </a>\n                    </div>\n                </li>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                                <li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n                                    <a href=\"#\" class=\"_moveToDetail\" data-schNm=\""
    + alias4(alias5((depths[2] != null ? depths[2].schNm : depths[2]), depth0))
    + "\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" onclick=\"App.view.mySchool.setSchoolData(this.getAttribute('data-schNm'), this.getAttribute('data-class'))\">\n                                        <i class=\"sprite sprite_common sprite_sensor\">?</i>\n                                        "
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n                                        <p class=\""
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</p>\n                                    </a>\n                                </li>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                                <li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n                                    <a href=\"#\" class=\"_moveToDetail\" data-schNm=\""
    + alias4(alias5((depths[2] != null ? depths[2].schNm : depths[2]), depth0))
    + "\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" onclick=\"App.view.mySchool.setSchoolData(this.getAttribute('data-schNm'), this.getAttribute('data-class'))\">\n                                        <i class=\"sprite sprite_common sprite_air_sensor\"></i>\n                                        "
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n                                        <p class=\""
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</p>\n                                    </a>\n                                </li>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <li data-no=\""
    + alias4(((helper = (helper = helpers.no || (depth0 != null ? depth0.no : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"no","hash":{},"data":data}) : helper)))
    + "\" data-lv=\""
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "\" data-cls=\""
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "\" data-userSchId=\""
    + alias4(((helper = (helper = helpers.userSchId || (depth0 != null ? depth0.userSchId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userSchId","hash":{},"data":data}) : helper)))
    + "\">\n                    <div data-user-schId=\""
    + alias4(((helper = (helper = helpers.userSchId || (depth0 != null ? depth0.userSchId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userSchId","hash":{},"data":data}) : helper)))
    + "\">\n                        <span class=\"school_name\">"
    + alias4(alias5((depths[1] != null ? depths[1].schNm : depths[1]), depth0))
    + "</span>\n                        <p class=\"school_title\">"
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "학년 "
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "반</p>\n                        <ul id=\"deviceList\" class=\"deviceList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.senList : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.clnList : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </ul>\n                    </div>\n                    <div class=\"school_air\">\n                        <a href=\"#\" class=\"_clickOutSensor\" data-school-code=\""
    + alias4(alias5((depths[1] != null ? depths[1].schCd : depths[1]), depth0))
    + "\" data-school-name=\""
    + alias4(alias5((depths[1] != null ? depths[1].schNm : depths[1]), depth0))
    + "\">\n                            <i class=\"sprite sprite_status sprite_air_mid "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depths[1] != null ? depths[1].airGrd : depths[1]),(depths[1] != null ? depths[1].connStatYn : depths[1]),{"name":"airStateColor","hash":{},"data":data}))
    + "\">?</i>\n                            <p class=\"status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depths[1] != null ? depths[1].airGrd : depths[1]),(depths[1] != null ? depths[1].connStatYn : depths[1]),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4(alias5((depths[1] != null ? depths[1].airGrd : depths[1]), depth0))
    + "</p>\n                            <p class=\"air_dust\">\n                                미세먼지<span class=\"air_num\">"
    + alias4(alias5((depths[1] != null ? depths[1].pm10 : depths[1]), depth0))
    + "</span><span class=\"place\"><em class=\"sprite sprite_common sprite_position\"></em>"
    + alias4(alias5((depths[1] != null ? depths[1].senLoc : depths[1]), depth0))
    + "</span>\n                            </p>\n                        </a>\n                    </div>\n                </li>\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                                <li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n                                    <a href=\"#\" class=\"_moveToDetail\" data-schNm=\""
    + alias4(alias5((depths[2] != null ? depths[2].schNm : depths[2]), depth0))
    + "\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "학년 "
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "반\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-schCd=\""
    + alias4(alias5((depths[2] != null ? depths[2].schCd : depths[2]), depth0))
    + "\" onclick=\"App.view.mySchool.setSchoolData(this.getAttribute('data-schNm'), this.getAttribute('data-class'))\">\n                                        <i class=\"sprite sprite_common sprite_sensor\">?</i>\n                                        "
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n                                        <p class=\""
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</p>\n                                    </a>\n                                </li>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                                <li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n                                    <a href=\"#\" class=\"_moveToDetail\" data-schNm=\""
    + alias4(alias5((depths[2] != null ? depths[2].schNm : depths[2]), depth0))
    + "\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "학년 "
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "반\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-schCd=\""
    + alias4(alias5((depths[2] != null ? depths[2].schCd : depths[2]), depth0))
    + "\" onclick=\"App.view.mySchool.setSchoolData(this.getAttribute('data-schNm'), this.getAttribute('data-class'))\">\n                                        <i class=\"sprite sprite_common sprite_air_sensor\"></i>\n                                        "
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n                                        <p class=\""
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</p>\n                                    </a>\n                                </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"list_title\">\n    <p>내 학교</p>\n    <a href=\"#\" class=\"btn btn_round _moveMainPage\"><span class=\"sprite sprite_common sprite_all_list\"></span>전체학교</a>\n</div>\n<div class=\"list_school_card\">\n    <ul class=\"card_school\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.schList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"useData":true,"useDepths":true});

this["templete"]["mySchoolDetail/mySchoolDetailList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = (helpers.isClass || (depth0 && depth0.isClass) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.lv : depth0),{"name":"isClass","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</li>\n\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<!--9학년일 경우-->\n			<li class=\"current\">\n				<a href=\"#\" class=\"grade\">"
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + " <i class=\"sprite sprite_common sprite_arrow\"></i></a>\n				<div class=\"box_class\">\n					<ul class=\"list_class\">\n						<li>\n							<p class=\"class\">"
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = helpers.userSchId || (depth0 != null ? depth0.userSchId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userSchId","hash":{},"data":data}) : helper)))
    + "\" class=\"icon_check check_class _registerMySchool\" data-school-id=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].schCd : depths[1]), depth0))
    + "\" data-lv=\""
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "\" data-cls=\""
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "\"></p>\n							<ul id=\"deviceList\" class=\"deviceList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.senList : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.clnList : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n						</li>\n					</ul>\n				</div>\n			</li>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "									<li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n										<a href=\"#\" class=\"_moveToDetail\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "학년 "
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "반\" data-lv=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "\"  data-cls=\""
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-schCd=\""
    + alias4(alias5((depths[4] != null ? depths[4].schCd : depths[4]), depth0))
    + "\"\n										   onclick=\"App.view.mySchoolDetail.setSchoolLvClass(this.getAttribute('data-lv'), this.getAttribute('data-cls'))\">\n											<span class=\"sprite sprite_common sprite_sensor\"></span>"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n\n												<span class=\"air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"><i class=\"sprite sprite_common sprite_circle "
    + alias4((helpers.airCircleColor || (depth0 && depth0.airCircleColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airCircleColor","hash":{},"data":data}))
    + "\"></i>"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</span>\n\n										</a>\n									</li>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "									<li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n										<a href=\"#\" class=\"_moveToDetail\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "학년 "
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "반\" data-lv=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "\"  data-cls=\""
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-schCd=\""
    + alias4(alias5((depths[4] != null ? depths[4].schCd : depths[4]), depth0))
    + "\"\n										   onclick=\"App.view.mySchoolDetail.setSchoolLvClass(this.getAttribute('data-lv'), this.getAttribute('data-cls'))\">\n											<span class=\"sprite sprite_common sprite_air_sensor\"></span>"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n\n												<span class=\"air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"><i class=\"sprite sprite_common sprite_circle "
    + alias4((helpers.airCircleColor || (depth0 && depth0.airCircleColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airCircleColor","hash":{},"data":data}))
    + "\"></i>"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</span>\n										</a>\n\n									</li>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "			<!--if(level&&class)-->\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].lvList : depths[1]),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<div class=\"box_class\">\n						<ul class=\"list_class\">\n							<li>\n								<p class=\"class\">"
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "학년 "
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "반 <input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = helpers.userSchId || (depth0 != null ? depth0.userSchId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userSchId","hash":{},"data":data}) : helper)))
    + "\" class=\"icon_check check_class _registerMySchool\" data-school-id=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].schCd : depths[1]), depth0))
    + "\" data-lv=\""
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "\" data-cls=\""
    + alias4(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + "\"></p>\n\n								<ul id=\"deviceList\" class=\"deviceList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.senList : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.clnList : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "								</ul>\n							</li>\n						</ul>\n					</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li class=\"current\">\n						<a href=\"#\" class=\"grade\">"
    + alias4(((helper = (helper = helpers.lv || (depth0 != null ? depth0.lv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lv","hash":{},"data":data}) : helper)))
    + "학년 "
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "  <i class=\"sprite sprite_common sprite_arrow\"></i></a>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "										<li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n											<a href=\"#\" class=\"_moveToDetail\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "학년 "
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "반\" data-lv=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "\"  data-cls=\""
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-schCd=\""
    + alias4(alias5((depths[4] != null ? depths[4].schCd : depths[4]), depth0))
    + "\"\n                                               onclick=\"App.view.mySchoolDetail.setSchoolLvClass(this.getAttribute('data-lv'), this.getAttribute('data-cls'))\">\n												<span class=\"sprite sprite_common sprite_sensor\"></span>"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n\n													<span class=\"air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"><i class=\"sprite sprite_common sprite_circle "
    + alias4((helpers.airCircleColor || (depth0 && depth0.airCircleColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airCircleColor","hash":{},"data":data}))
    + "\"></i>"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</span>\n\n											</a>\n										</li>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "										<li data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\" data-senNm=\""
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\">\n											<a href=\"#\" class=\"_moveToDetail\" data-class=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "학년 "
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "반\" data-lv=\""
    + alias4(alias5((depths[1] != null ? depths[1].lv : depths[1]), depth0))
    + "\"  data-cls=\""
    + alias4(alias5((depths[1] != null ? depths[1].cls : depths[1]), depth0))
    + "\" data-dvcid=\""
    + alias4(((helper = (helper = helpers.dvcId || (depth0 != null ? depth0.dvcId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dvcId","hash":{},"data":data}) : helper)))
    + "\"  data-schCd=\""
    + alias4(alias5((depths[4] != null ? depths[4].schCd : depths[4]), depth0))
    + "\"\n                                               onclick=\"App.view.mySchoolDetail.setSchoolLvClass(this.getAttribute('data-lv'), this.getAttribute('data-cls'))\">\n												<span class=\"sprite sprite_common sprite_air_sensor\"></span>"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "\n\n													<span class=\"air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"><i class=\"sprite sprite_common sprite_circle "
    + alias4((helpers.airCircleColor || (depth0 && depth0.airCircleColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airCircleColor","hash":{},"data":data}))
    + "\"></i>"
    + alias4((helpers.responseAirGrd || (depth0 && depth0.responseAirGrd) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"responseAirGrd","hash":{},"data":data}))
    + "</span>\n\n											</a>\n										</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"area_grade_list _fnAccordionMenu\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.clsList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true,"useDepths":true});

this["templete"]["mySchoolDetail/mySchoolDetailSlider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"box_slide\">\n            <div>\n                <!--<p class=\"update\">Update by 12.10 13:30</p>-->\n                <p class=\"update\">Update by "
    + alias4(((helper = (helper = helpers.uptDttm || (depth0 != null ? depth0.uptDttm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uptDttm","hash":{},"data":data}) : helper)))
    + "</p>\n                <div class=\"school_air\">\n                    <span class=\"sprite sprite_status sprite_"
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "_lg\">?</span>\n                    <p class=\"name\">"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "</p>\n                    <p class=\"air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "</p>\n"
    + ((stack1 = (helpers.isOutlist || (depth0 && depth0.isOutlist) || alias2).call(alias1,(depth0 != null ? depth0.senLoc : depth0),{"name":"isOutlist","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n                <ul class=\"info_air clearfix\">\n                    <li>\n                        <p>미세먼지</p>\n                        <p>"
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.pm10 : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\n                    </li>\n                    <li>\n                        <p>초미세먼지</p>\n                        <p>"
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.pm25 : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\n                    </li>\n                    <li>\n                        <p>온습도</p>\n                        <p>"
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.temp : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "<em>℃ /</em>"
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.humi : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "<em>%</em></p>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <!-- 위치정보 제공시 -->\n                        <p class=\"position\"><span class=\"sprite sprite_common sprite_position\"></span>"
    + container.escapeExpression(((helper = (helper = helpers.senLoc || (depth0 != null ? depth0.senLoc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"senLoc","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                        <!-- 위치정보 미제공시 -->\n                        <p class=\"position no_position\">학교주변 관측소에서 제공 정보</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "-->\n        <!--<a href=\"#\" class=\""
    + container.escapeExpression((helpers.airStateColor || (depth0 && depth0.airStateColor) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"></a>-->\n        <!--";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"area_school_air bg_white\">\n    <div class=\"slider\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.outList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <p class=\"desc\"><span class=\"sprite sprite_common sprite_alert\"></span><em class=\"date_today\"></em> 실외 수업이 가능한 상태입니다.</p>\n\n    <!--<div class=\"slide_pager\">-->\n        <!--"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.outList : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->\n    <!--</div>-->\n\n\n\n    <div class=\"slide_pager\">\n        <span class=\"good focus\"></span>\n        <span class=\"normal\"></span>\n        <span class=\"bad\"></span>\n        <span class=\"worse\"></span>\n    </div>\n</div>\n";
},"useData":true});

this["templete"]["popup/allSchoolDelete"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popup popup_delete\">\r\n    <div class=\"popup_contents\">\r\n        <p class=\"alert_desc\">최근 검색 학교를<br>모두 삭제하시겠습니까?</p>\r\n    </div>\r\n    <div class=\"popup_footer\">\r\n        <div class=\"btn_group\">\r\n            <button class=\"btn _btnCancel\">아니요</button>\r\n            <button class=\"btn _btnConfirm\">예</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["templete"]["popup/popupNetworkError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popup_dim\" id=\"networkErrorPopup\">\n    <div class=\"popup popup_full popup_error\">\n        <div class=\"popup_contents\">\n            <p class=\"\">일시적으로 서비스 접속이 원할하지 않습니다.<br>잠시 후 다시 시도해주세요.</p>\n        </div>\n        <div class=\"popup_footer\">\n            <div class=\"btn_group\">\n                <button class=\"btn btn_popup btn_orange _btnOkError\">확인</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["templete"]["popup/settingHoursTurnOffTimer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popup popup_full popup_hours\" id=\"popupSettingHoursTurnOff\">\r\n    <div class=\"popup_header\">\r\n        <h2>꺼짐 예약 설정</h2>\r\n    </div>\r\n    <div class=\"popup_contents\">\r\n        <p class=\"desc_time\">설정된 시간이 지난 후 기기가 꺼집니다.</p>\r\n        <ul class=\"area_timer _settingAfterHours\">\r\n            <li><a href=\"#\" data-hours=\"02\">2시간 후</a></li>\r\n            <li><a href=\"#\" data-hours=\"04\">4시간 후</a></li>\r\n            <li class=\"focus\"><a href=\"#\" data-hours=\"08\">8시간 후</a></li>\r\n            <li><a href=\"#\" data-hours=\"12\">12시간 후</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"popup_footer\">\r\n        <div class=\"btn_group\">\r\n            <button class=\"btn btn_popup _closePopupSettingTImer\">취소</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["templete"]["popup/settingTurnOffTimer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popup popup_full\" id=\"popupSettingTurnOff\">\r\n    <div class=\"popup_header\">\r\n        <h2>꺼짐 예약 설정</h2>\r\n    </div>\r\n    <div class=\"popup_contents\">\r\n        <p class=\"desc_time\">설정된 시간이 지난 후 기기가 꺼집니다.</p>\r\n        <div class=\"area_timer\">\r\n            <div class=\"date_wrapper outside\">\r\n                <form name=\"date\">\r\n                    <div class=\"lines lines_hours\">\r\n                        <div>:</div>\r\n                    </div>\r\n                    <select class=\"drum\" id=\"hours\" name=\"hours\">\r\n                        <option value=\"00\">00</option>\r\n                        <option value=\"01\">01</option>\r\n                        <option value=\"02\">02</option>\r\n                        <option value=\"03\">03</option>\r\n                        <option value=\"04\">04</option>\r\n                        <option value=\"05\">05</option>\r\n                        <option value=\"06\">06</option>\r\n                        <option value=\"07\">07</option>\r\n                        <option value=\"08\">08</option>\r\n                        <option value=\"09\">09</option>\r\n                        <option value=\"10\">10</option>\r\n                        <option value=\"11\">11</option>\r\n                        <option value=\"12\">12</option>\r\n                        <option value=\"13\">13</option>\r\n                        <option value=\"14\">14</option>\r\n                        <option value=\"15\">15</option>\r\n                        <option value=\"16\">16</option>\r\n                        <option value=\"17\">17</option>\r\n                        <option value=\"18\">18</option>\r\n                        <option value=\"19\">19</option>\r\n                        <option value=\"20\">20</option>\r\n                        <option value=\"21\">21</option>\r\n                        <option value=\"22\">22</option>\r\n                        <option value=\"23\">23</option>\r\n                    </select>\r\n                </form>\r\n            </div>\r\n            <div class=\"date_wrapper outside\">\r\n                <form name=\"date\">\r\n                    <div class=\"lines lines_min\">\r\n                        <div>:</div>\r\n                    </div>\r\n                    <select class=\"drum\" id=\"minutes\" name=\"minutes\">\r\n                        <option value=\"00\">00</option>\r\n                        <option value=\"01\">01</option>\r\n                        <option value=\"02\">02</option>\r\n                        <option value=\"03\">03</option>\r\n                        <option value=\"04\">04</option>\r\n                        <option value=\"05\">05</option>\r\n                        <option value=\"06\">06</option>\r\n                        <option value=\"07\">07</option>\r\n                        <option value=\"08\">08</option>\r\n                        <option value=\"09\">09</option>\r\n                        <option value=\"10\">10</option>\r\n                        <option value=\"11\">11</option>\r\n                        <option value=\"12\">12</option>\r\n                        <option value=\"13\">13</option>\r\n                        <option value=\"14\">14</option>\r\n                        <option value=\"15\">15</option>\r\n                        <option value=\"16\">16</option>\r\n                        <option value=\"17\">17</option>\r\n                        <option value=\"18\">18</option>\r\n                        <option value=\"19\">19</option>\r\n                        <option value=\"20\">20</option>\r\n                        <option value=\"21\">21</option>\r\n                        <option value=\"22\">22</option>\r\n                        <option value=\"23\">23</option>\r\n                        <option value=\"24\">24</option>\r\n                        <option value=\"25\">25</option>\r\n                        <option value=\"26\">26</option>\r\n                        <option value=\"27\">27</option>\r\n                        <option value=\"28\">28</option>\r\n                        <option value=\"29\">29</option>\r\n                        <option value=\"30\">30</option>\r\n                        <option value=\"31\">31</option>\r\n                        <option value=\"32\">32</option>\r\n                        <option value=\"33\">33</option>\r\n                        <option value=\"34\">34</option>\r\n                        <option value=\"35\">35</option>\r\n                        <option value=\"36\">36</option>\r\n                        <option value=\"37\">37</option>\r\n                        <option value=\"38\">38</option>\r\n                        <option value=\"39\">39</option>\r\n                        <option value=\"40\">40</option>\r\n                        <option value=\"41\">41</option>\r\n                        <option value=\"42\">42</option>\r\n                        <option value=\"43\">43</option>\r\n                        <option value=\"44\">44</option>\r\n                        <option value=\"45\">45</option>\r\n                        <option value=\"46\">46</option>\r\n                        <option value=\"47\">47</option>\r\n                        <option value=\"48\">48</option>\r\n                        <option value=\"49\">49</option>\r\n                        <option value=\"50\">50</option>\r\n                        <option value=\"51\">51</option>\r\n                        <option value=\"52\">52</option>\r\n                        <option value=\"53\">53</option>\r\n                        <option value=\"54\">54</option>\r\n                        <option value=\"55\">55</option>\r\n                        <option value=\"56\">56</option>\r\n                        <option value=\"57\">57</option>\r\n                        <option value=\"58\">48</option>\r\n                        <option value=\"59\">59</option>\r\n                    </select>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"popup_footer\">\r\n        <div class=\"btn_group\">\r\n            <button class=\"btn btn_popup _closePopupSettingTImer\">취소</button>\r\n            <button class=\"btn btn_popup btn_orange _confirmPopupSettingTImer\">확인</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["templete"]["schoolDetail/schoolDetail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"area_school_air bg_white\" style=\"min-height: 300px;\"></div>\r\n<div class=\"wrap_area_box_list\">\r\n\r\n</div>";
},"useData":true});

this["templete"]["schoolDetail/schoolDetailSlider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        <div class=\"box_slide "
    + container.escapeExpression(((helper = (helper = helpers.dvcCd || (depth0 != null ? depth0.dvcCd : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dvcCd","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = (helpers.deviceKindCode || (depth0 && depth0.deviceKindCode) || alias2).call(alias1,(depth0 != null ? depth0.dvcKindCd : depth0),{"name":"deviceKindCode","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <!--공기청청기-->\r\n                <div>\r\n                    <p class=\"air_product\">공기청정기</p>\r\n                    <p class=\"air_product_name\">"
    + alias4(((helper = (helper = helpers.senNm || (depth0 != null ? depth0.senNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"senNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                    <div class=\"circle_air_status "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.fncInfo : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">\r\n                        <div class=\"circle\">\r\n                            <p class=\"air\">"
    + alias4(((helper = (helper = helpers.fncNm || (depth0 != null ? depth0.fncNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncNm","hash":{},"data":data}) : helper)))
    + "</p>\r\n                            <p class=\"status\">"
    + alias4(((helper = (helper = helpers.fncInfo || (depth0 != null ? depth0.fncInfo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fncInfo","hash":{},"data":data}) : helper)))
    + "</p>\r\n                            <p class=\"dust\">초미세먼지</p>\r\n                            <p class=\"dust_num\">"
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.pm25 : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "<em>㎍/㎥</em></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info_outside\">\r\n                    <p class=\"outside\">실외</p>\r\n                    <p class=\"degree\">온도 "
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.temp : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "℃ / 습도 "
    + alias4((helpers.isDataPreAbs || (depth0 && depth0.isDataPreAbs) || alias2).call(alias1,(depth0 != null ? depth0.humi : depth0),{"name":"isDataPreAbs","hash":{},"data":data}))
    + "%</p>\r\n                </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <!--실내센서-->\r\n                <div>\r\n                    <p class=\"air_product\">실내센서</p>\r\n                    <p class=\"air_product_name\">1-1 실내센서</p>\r\n                    <div class=\"circle_air_status "
    + alias3((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.fncInfo : depth0),(depth0 != null ? depth0.connStatYn : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\">\r\n                        <div class=\"circle circle_sensor\">\r\n                            <p class=\"score\">종합점수 <span id=\"pointFncVal\">"
    + alias3(((helper = (helper = helpers.fncVal || (depth0 != null ? depth0.fncVal : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fncVal","hash":{},"data":data}) : helper)))
    + "</span></p>\r\n                            <p class=\"status\" id=\"diffStatus\">"
    + alias3(((helper = (helper = helpers.fncInfo || (depth0 != null ? depth0.fncInfo : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fncInfo","hash":{},"data":data}) : helper)))
    + "</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"box_btn\">\r\n                        <button class=\"btn_report\"><span class=\"sprite sprite_common sprite_icon_graph_statistic\">아이콘</span>공기리포트</button>\r\n                    </div>\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"slider\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.oDeviceInfo : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["templete"]["searchSchool/searchAutoComplete"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "        <li data-school-num=\""
    + container.escapeExpression(((helper = (helper = helpers.serNo || (depth0 != null ? depth0.serNo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serNo","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">"
    + ((stack1 = ((helper = (helper = helpers.serKey || (depth0 != null ? depth0.serKey : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serKey","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"search_list _searchList\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.serList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"useData":true});

this["templete"]["searchSchool/searchNoRecent"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p class=\"search_desc\">최근 검색 기록이 없습니다.</p>\r\n";
},"useData":true});

this["templete"]["searchSchool/searchNoResult"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p class=\"search_desc search_icon_desc\"><span class=\"no_list\">아이콘</span>검색 결과가 없습니다.</p>\r\n";
},"useData":true});

this["templete"]["searchSchool/searchRecent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li data-school-id=\""
    + alias4(((helper = (helper = helpers.serId || (depth0 != null ? depth0.serId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serId","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">"
    + alias4(((helper = (helper = helpers.serKey || (depth0 != null ? depth0.serKey : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serKey","hash":{},"data":data}) : helper)))
    + "</a> <button class=\"btn_delete\"><span class=\"sprite sprite_common sprite_search_delete_p\">X</span></button></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p class=\"search_title\">최근 검색 학교 <a href=\"#\" class=\"btn_all_delete\">전체삭제</a></p>\r\n<ul class=\"search_list _searchList\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.schList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"useData":true});

this["templete"]["searchSchool/searchResult"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li>\r\n"
    + ((stack1 = (helpers.checkSenList || (depth0 && depth0.checkSenList) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.senYn : depth0),{"name":"checkSenList","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <a href=\"#\" data-school-code=\""
    + alias4(((helper = (helper = helpers.schCd || (depth0 != null ? depth0.schCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schCd","hash":{},"data":data}) : helper)))
    + "\" class=\"_detailLink\">\r\n                <i class=\"sprite sprite_status sprite_air_mid "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"></i>\r\n                <div>\r\n                    <span class=\"result_school school_name\">"
    + ((stack1 = ((helper = (helper = helpers.schNm || (depth0 != null ? depth0.schNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schNm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\r\n                    <span class=\"ps_school\">"
    + alias4(((helper = (helper = helpers.addr || (depth0 != null ? depth0.addr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addr","hash":{},"data":data}) : helper)))
    + "</span>\r\n                </div>\r\n                <span class=\"btn btn_round\">상세<span class=\"sprite sprite_common sprite_btn_more\">&gt;</span></span>\r\n            </a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <a href=\"#\" data-school-code=\""
    + alias4(((helper = (helper = helpers.schCd || (depth0 != null ? depth0.schCd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schCd","hash":{},"data":data}) : helper)))
    + "\">\r\n                <i class=\"sprite sprite_status sprite_air_mid "
    + alias4((helpers.airStateColor || (depth0 && depth0.airStateColor) || alias2).call(alias1,(depth0 != null ? depth0.airGrd : depth0),{"name":"airStateColor","hash":{},"data":data}))
    + "\"></i>\r\n                <div>\r\n                    <span class=\"result_school school_name\">"
    + ((stack1 = ((helper = (helper = helpers.schNm || (depth0 != null ? depth0.schNm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schNm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\r\n                    <span class=\"ps_school\">"
    + alias4(((helper = (helper = helpers.addr || (depth0 != null ? depth0.addr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addr","hash":{},"data":data}) : helper)))
    + "</span>\r\n                </div>\r\n                <span class=\"none_set\">미설치</span>\r\n            </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"search_result _searchResultList\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.schList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n\r\n\r\n";
},"useData":true});

this["templete"]["searchSchool/searchSchoolWrap"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"area_search\">\r\n    <div class=\"search_box\">\r\n        <input type=\"text\" class=\"text_box acitve\" placeholder=\"학교명을 입력해주세요\">\r\n        <button class=\"btn btn_search\">\r\n            <span class=\"sprite sprite_common sprite_search\">검색아이콘</span>\r\n        </button>\r\n        <a href=\"#\" class=\"sprite sprite_common sprite_delete btn_input_delete\">지우기</a>\r\n    </div>\r\n</div>\r\n<div class=\"wrap_search_contents\"></div>";
},"useData":true});

this["templete"]["wrap/wrapContainer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"wrap_header\"></div>\n<div class=\"wrap_contents\"></div>\n<div id=\"reloader\" class=\"reloader\"></div>\n";
},"useData":true});

this["templete"]["airMultiSensor/airMultiSensor.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensor = Backbone.View.extend({\n    classAirCardSlider: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n        // 템플릿팅\n        self.$el.html(templete[\"airMultiSensor/airMultiSensor\"]()).addClass('wrap_contents_gray');\n        // 공기멀티센서 슬라이드\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorSlider\"]());\n        // 멀티센서상태\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/multiSensor\"]());\n        // 센서 그래프\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorStateGraph\"]());\n\n        // 모드설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingMode\"]());\n        // 설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/setting\"]());\n        // 이력 및 알림\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingAlarm\"]());\n        // 정보\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingInfomation\"]());\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n        \n        // 학교 공기상태 슬라이드\n        this.schoolAirStateSlider();\n        // 학교 공기상태 그래프\n        this.airMultiSensorGraph();\n        $('.wrap_contents').scrollTop(0)\n    },\n    schoolAirStateSlider: function(){\n        this.classAirCardSlider = $('.area_school_air .slider');\n        this.classAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            preventDefaultSwipeY: true,\n            pagerSelector: \".slide_pager\",\n            onSliderLoad: function () {\n\n                /*for (var i = 0; i < outSensor.length; i++) {\n                    airGrd = outSensor[i].airGrd\n                    switch (airGrd) {\n                        case \"좋음\" :\n                            $('.bx-pager-item').eq(i).addClass('good');\n                            break;\n                        case \"보통\" :\n                            $('.bx-pager-item').eq(i).addClass('normal');\n                            break;\n                        case \"나쁨\" :\n                            $('.bx-pager-item').eq(i).addClass('bad');\n                            break;\n                        case \"매우나쁨\" :\n                            $('.bx-pager-item').eq(i).addClass('worse');\n                            break;\n                    }\n                }*/\n            }\n        });\n    },\n\n    airMultiSensorGraph: function() {\n        var data = [10.5, 9, 11];\n\n        $('#line_chart').highcharts({\n            chart: {\n                type: 'spline',\n                marginTop: 50,\n                marginLeft: 20,\n                marginRight: 20,\n                marginBottom: 50,\n                height: 220\n            },\n            credits: {\n                enabled: false\n            },\n            title: {\n                text: ''\n            },\n            xAxis: {\n                tyoe: 'time',\n                gridLineWidth: 0,\n                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/\n                tickInterval: 2,\n                min:1,\n                title: {\n                    text: '(시간대 평균)',\n                    align: 'high',\n                    style: {\n                        fontSize:'10'\n                    }\n                }\n            },\n            legend: {\n                enabled: false\n            },\n            yAxis: {\n                min: 0,\n                title: {\n                    text: null\n                },\n                gridLineWidth: 0,\n                minorGridLineWidth: 0, max: 120,\n                lineWidth:0,\n                labels: {\n                    enabled: false\n                }\n            },\n            tooltip: {\n                enabled:false,\n                useHTML: true,\n                style: {\n                    zIndex: 9999\n                },\n                backgroundColor: 'rgba(247,247,247,0.7)'\n            },\n            allowHTML: true,\n            annotations: [{\n                labelOptions: {\n                    useHTML :true,\n                    format:'<div class=\"tooltip-marker-high\"><a href=\"#\">'+'88'+'</a></div>',\n                    backgroundColor: 'transparent',\n                    //verticalAlign: 'bottom',\n                    //padding:6,\n                    borderWidth: 0,\n                    x:-18,\n                    y:-22\n                },\n                zIndex:0,\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 3,\n                        y: 88\n                    }\n                }]\n            },{\n                labelOptions: {\n                    useHTML :true,\n                    format:'<div class=\"tooltip-marker-low\"><a href=\"#\">'+'44'+'</a></div>',\n                    backgroundColor: 'transparent',\n                    //verticalAlign: 'bottom',\n                    //padding:6,\n                    borderWidth: 0,\n                    x:-18,\n                    y:13\n                    //borderColor:'rgba(0,0,0,0)',\n                    //distance:-20\n                },\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 6,\n                        y: 44\n                    },\n                    style: {\n                        fontSize: '10px'\n                    }\n                }]\n            },{\n                labelOptions: {\n                    useHTML :true,\n                    format:''+'<div class=\"overlay_marker good\"></div>',\n                    backgroundColor: Highcharts.color('none').setOpacity(0).get(),\n                    borderWidth: 0,\n                    x:-2,\n                    y:73\n                }\n                ,labels:[{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 16,\n                        y: 75\n                    }\n                }]\n            }\n            ],\n            series: [{\n                type: 'areaspline',\n                name: '어제',\n                dashStyle: 'ShortDot',\n                color: '#d3d4d7',\n                fillColor: '#f6f7f9',\n                marker: {\n                    enabled: false,\n                    radius:2\n                },\n                dataLabels : {\n                    enabled: false\n                },\n                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {\n                    y: 95, marker: {enabled: true,radius: 3}, color: '#727272', dataLabels: {\n                        enabled: true,\n                        y: 1,\n                        /* shadow: true,*/\n                        style: {\n                            fontWeight: 'bold',\n                            fontSize: 12,\n                            color: '#44a9f0'\n                        }\n                    }\n                },\n                    80, 84, 71, 80,60, 55, 60, {\n                        y: 38, marker: {enabled: true,radius: 3}, color: '#727272', dataLabels: {\n                            enabled: true,\n                            x:-1,\n                            y: 28,\n                            /* shadow: true,*/\n                            style: {\n                                fontWeight: 'bold',\n                                fontSize: 12,\n                                color: '#dc3b38'\n                            }\n                        }\n                    }, 50, 55, 60]\n\n            }, {\n                name: '오늘',\n                color: {\n                    linearGradient: {\n                        x1: 0,\n                        y1: 0,\n                        x2: 0,\n                        y2: 1\n                    },\n                    stops: [\n                        [0, '#4aa6ec'],\n                        [0.33, '#5cc37e'],\n                        [0.66, '#ff9f3e'],\n                        [1, '#e1423e']\n                    ]\n                },\n                marker: {\n                    enabled: false,\n                    'symbol': 'circle',\n                    color: '#000',\n                    fillColor: '#000',\n                    radius:2\n                },\n                data: [50, 65, 57, {y: 88, marker: {enabled: true,radius: 3}, color: '#000000'}, 79, 52,\n                    {\n                        y: 44,\n                        marker: {enabled: true,radius: 3},\n                        color: '#000000'\n                    }, 56, 70, 80,66, 70, 60, 55, 75, 60, 89]\n\n            }]\n        });\n    }\n});";
},"useData":true});

this["templete"]["airMultiSensor/airMultiSensorAwair.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensorAwair = Backbone.View.extend({\n    classAirCardSlider: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n        // 템플릿팅\n        self.$el.html(templete[\"airMultiSensor/airMultiSensor\"]()).addClass('wrap_contents_gray');\n        // 공기멀티센서 슬라이드\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorSliderAwair\"]());\n        // 멀티센서상태\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/multiSensorAwair\"]());\n        // 센서 그래프\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorStateGraphAwair\"]());\n\n        // 모드설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingModeAwair\"]());\n        // 설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingAwair\"]());\n        // 이력 및 알림\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingAlarmAwair\"]());\n        // 정보\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingInfomationAwair\"]());\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n        \n        // 학교 공기상태 슬라이드\n        this.schoolAirStateSlider();\n        // 학교 공기상태 그래프\n        this.airMultiSensorGraph();\n        $('.wrap_contents').scrollTop(0)\n    },\n    schoolAirStateSlider: function(){\n        this.classAirCardSlider = $('.area_school_air .slider');\n        this.classAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            preventDefaultSwipeY: true\n        });\n    },\n    airMultiSensorGraph: function(){\n        var data = [10.5, 9, 11];\n\n        $('#line_chart').highcharts({\n            chart: {\n                type: 'spline',\n                marginTop: 50,\n                marginLeft: 20,\n                marginRight: 20,\n                marginBottom: 50,\n                height: 220\n            },\n            title: {\n                text: ''\n            },\n            xAxis: {\n                tyoe: 'time',\n\n                gridLineWidth: 0,\n                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/\n                tickInterval: 2,min:1\n            },\n            legend: {\n                enabled: false\n            },\n            yAxis: {\n                min: 0,\n                title: {\n                    text: null\n                },\n                gridLineWidth: 0,\n                minorGridLineWidth: 0, max: 120,\n                lineWidth:0,\n                labels: {\n                    enabled: false\n                }\n            },\n            tooltip: {\n            },\n            allowHTML: true,\n            annotations: [{\n                labelOptions: {\n                    backgroundColor: '#47a2de',\n                    verticalAlign: 'bottom',\n                    padding:6,\n                    borderRadius: 12,\n                    borderColor:'rgba(0,0,0,0)',\n                    /* distance:30*/\n                    y:-15//default y값 위치\n                },\n\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 3,\n                        y: 88\n                    },\n                    style: {\n                        fontSize: '12px'\n                    },\n                    text: '88 >'\n                }]\n            },{\n                labelOptions: {\n                    backgroundColor: '#df3e3e',\n                    verticalAlign: 'bottom',\n                    padding:6,\n                    borderRadius: 12,\n                    borderColor:'rgba(0,0,0,0)',\n                    distance:-42\n                },\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 6,\n                        y: 44\n                    },\n                    style: {\n                        fontSize: '12px'\n                    },\n                    text: '44 >'\n                }]\n            }\n            ],\n            series: [{\n                type: 'areaspline',\n                name: '어제',\n                dashStyle: 'ShortDash',\n                color: '#d3d4d7',\n                fillColor: '#f6f7f9',\n                marker: {\n                    enabled: false\n                },\n                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {\n                    y: 95, marker: {enabled: true}, color: '#727272', dataLabels: {\n                        enabled: true,\n                        y: 0,\n                        /* shadow: true,*/\n                        style: {\n                            fontWeight: 'bold',\n                            fontSize: 16,\n                            color: '#44a9f0'\n                        }\n                    }\n                },\n                    80, 84, 71, 80,60, 55, 60, {\n                        y: 38, marker: {enabled: true}, color: '#727272', dataLabels: {\n                            enabled: true,\n                            y: 35,\n                            /* shadow: true,*/\n                            style: {\n                                fontWeight: 'bold',\n                                fontSize: 16,\n                                color: '#dc3b38'\n                            }\n                        }\n                    }, 50, 55, 60]\n\n            }, {\n                name: '오늘',\n                color: '#68b0b1',\n                marker: {\n                    enabled: false\n                },\n                data: [50, 65, 57, {y: 88, marker: {enabled: true, 'symbol': 'circle'}, color: '#000000'}, 79, 52,\n                    {\n                        y: 44,\n                        marker: {enabled: true, 'symbol': 'circle'},\n                        color: '#000000'\n                    }, 56, 70, 80,66, 70, 60, 55, 75, 60,\n                    {y: 75, marker: {enabled: true, 'symbol': 'circle',radius: 7}, color: '#49a6e7'}]\n\n            }]\n        });\n    }\n});";
},"useData":true});

this["templete"]["airMultiSensor/airMultiSensorGreen.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensorGreen = Backbone.View.extend({\n    classAirCardSlider: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n        // 템플릿팅\n        self.$el.html(templete[\"airMultiSensor/airMultiSensor\"]()).addClass('wrap_contents_gray');\n        // 공기멀티센서 슬라이드\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorSliderGreen\"]());\n        // 멀티센서상태\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/multiSensorGreen\"]());\n        // 센서 그래프\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorStateGraphGreen\"]());\n\n        // 모드설정\n        // self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingModeGreen\"]());\n        // 설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingGreen\"]());\n        // 이력 및 알림\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingAlarmGreen\"]());\n        // 정보\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingInfomationGreen\"]());\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n        \n        // 학교 공기상태 슬라이드\n        this.schoolAirStateSlider();\n        // 학교 공기상태 그래프\n        this.airMultiSensorGraph();\n        $('.wrap_contents').scrollTop(0)\n    },\n    schoolAirStateSlider: function(){\n        this.classAirCardSlider = $('.area_school_air .slider');\n        this.classAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            preventDefaultSwipeY: true\n        });\n    },\n    airMultiSensorGraph: function(){\n        var data = [10.5, 9, 11];\n\n        $('#line_chart').highcharts({\n            chart: {\n                type: 'spline',\n                marginTop: 50,\n                marginLeft: 20,\n                marginRight: 20,\n                marginBottom: 50,\n                height: 220\n            },\n            title: {\n                text: ''\n            },\n            xAxis: {\n                tyoe: 'time',\n\n                gridLineWidth: 0,\n                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/\n                tickInterval: 2,min:1\n            },\n            legend: {\n                enabled: false\n            },\n            yAxis: {\n                min: 0,\n                title: {\n                    text: null\n                },\n                gridLineWidth: 0,\n                minorGridLineWidth: 0, max: 120,\n                lineWidth:0,\n                labels: {\n                    enabled: false\n                }\n            },\n            tooltip: {\n            },\n            allowHTML: true,\n            annotations: [{\n                labelOptions: {\n                    backgroundColor: '#47a2de',\n                    verticalAlign: 'bottom',\n                    padding:6,\n                    borderRadius: 12,\n                    borderColor:'rgba(0,0,0,0)',\n                    /* distance:30*/\n                    y:-15//default y값 위치\n                },\n\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 3,\n                        y: 88\n                    },\n                    style: {\n                        fontSize: '12px'\n                    },\n                    text: '88 >'\n                }]\n            },{\n                labelOptions: {\n                    backgroundColor: '#df3e3e',\n                    verticalAlign: 'bottom',\n                    padding:6,\n                    borderRadius: 12,\n                    borderColor:'rgba(0,0,0,0)',\n                    distance:-42\n                },\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 6,\n                        y: 44\n                    },\n                    style: {\n                        fontSize: '12px'\n                    },\n                    text: '44 >'\n                }]\n            }\n            ],\n            series: [{\n                type: 'areaspline',\n                name: '어제',\n                dashStyle: 'ShortDash',\n                color: '#d3d4d7',\n                fillColor: '#f6f7f9',\n                marker: {\n                    enabled: false\n                },\n                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {\n                    y: 95, marker: {enabled: true}, color: '#727272', dataLabels: {\n                        enabled: true,\n                        y: 0,\n                        /* shadow: true,*/\n                        style: {\n                            fontWeight: 'bold',\n                            fontSize: 16,\n                            color: '#44a9f0'\n                        }\n                    }\n                },\n                    80, 84, 71, 80,60, 55, 60, {\n                        y: 38, marker: {enabled: true}, color: '#727272', dataLabels: {\n                            enabled: true,\n                            y: 35,\n                            /* shadow: true,*/\n                            style: {\n                                fontWeight: 'bold',\n                                fontSize: 16,\n                                color: '#dc3b38'\n                            }\n                        }\n                    }, 50, 55, 60]\n\n            }, {\n                name: '오늘',\n                color: '#68b0b1',\n                marker: {\n                    enabled: false\n                },\n                data: [50, 65, 57, {y: 88, marker: {enabled: true, 'symbol': 'circle'}, color: '#000000'}, 79, 52,\n                    {\n                        y: 44,\n                        marker: {enabled: true, 'symbol': 'circle'},\n                        color: '#000000'\n                    }, 56, 70, 80,66, 70, 60, 55, 75, 60,\n                    {y: 75, marker: {enabled: true, 'symbol': 'circle',radius: 7}, color: '#49a6e7'}]\n\n            }]\n        });\n    }\n});";
},"useData":true});

this["templete"]["airMultiSensor/airMultiSensorHyundai.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensorHyundai = Backbone.View.extend({\n    classAirCardSlider: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n        // 템플릿팅\n        self.$el.html(templete[\"airMultiSensor/airMultiSensor\"]()).addClass('wrap_contents_gray');\n        // 공기멀티센서 슬라이드\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorSlider\"]());\n        // 멀티센서상태\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/multiSensor\"]());\n        // 센서 그래프\n        self.$el.find('.area_school_air').append(templete[\"airMultiSensor/sensorStateGraph\"]());\n\n        // 모드설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingMode\"]());\n        // 설정\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/setting\"]());\n        // 이력 및 알림\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingAlarm\"]());\n        // 정보\n        self.$el.find('.area_box_list').append(templete[\"airMultiSensor/settingInfomation\"]());\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n        \n        // 학교 공기상태 슬라이드\n        this.schoolAirStateSlider();\n        // 학교 공기상태 그래프\n        this.airMultiSensorGraph();\n        $('.wrap_contents').scrollTop(0)\n    },\n    schoolAirStateSlider: function(){\n        this.classAirCardSlider = $('.area_school_air .slider');\n        this.classAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            preventDefaultSwipeY: true\n        });\n    },\n    airMultiSensorGraph: function(){\n        var data = [10.5, 9, 11];\n\n        $('#line_chart').highcharts({\n            chart: {\n                type: 'spline',\n                marginTop: 50,\n                marginLeft: 20,\n                marginRight: 20,\n                marginBottom: 50,\n                height: 220\n            },\n            title: {\n                text: ''\n            },\n            xAxis: {\n                tyoe: 'time',\n\n                gridLineWidth: 0,\n                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/\n                tickInterval: 2,min:1\n            },\n            legend: {\n                enabled: false\n            },\n            yAxis: {\n                min: 0,\n                title: {\n                    text: null\n                },\n                gridLineWidth: 0,\n                minorGridLineWidth: 0, max: 120,\n                lineWidth:0,\n                labels: {\n                    enabled: false\n                }\n            },\n            tooltip: {\n            },\n            allowHTML: true,\n            annotations: [{\n                labelOptions: {\n                    backgroundColor: '#47a2de',\n                    verticalAlign: 'bottom',\n                    padding:6,\n                    borderRadius: 12,\n                    borderColor:'rgba(0,0,0,0)',\n                    /* distance:30*/\n                    y:-15//default y값 위치\n                },\n\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 3,\n                        y: 88\n                    },\n                    style: {\n                        fontSize: '12px'\n                    },\n                    text: '88 >'\n                }]\n            },{\n                labelOptions: {\n                    backgroundColor: '#df3e3e',\n                    verticalAlign: 'bottom',\n                    padding:6,\n                    borderRadius: 12,\n                    borderColor:'rgba(0,0,0,0)',\n                    distance:-42\n                },\n                labels: [{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 6,\n                        y: 44\n                    },\n                    style: {\n                        fontSize: '12px'\n                    },\n                    text: '44 >'\n                }]\n            }\n            ],\n            series: [{\n                type: 'areaspline',\n                name: '어제',\n                dashStyle: 'ShortDash',\n                color: '#d3d4d7',\n                fillColor: '#f6f7f9',\n                marker: {\n                    enabled: false\n                },\n                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {\n                    y: 95, marker: {enabled: true}, color: '#727272', dataLabels: {\n                        enabled: true,\n                        y: 0,\n                        /* shadow: true,*/\n                        style: {\n                            fontWeight: 'bold',\n                            fontSize: 16,\n                            color: '#44a9f0'\n                        }\n                    }\n                },\n                    80, 84, 71, 80,60, 55, 60, {\n                        y: 38, marker: {enabled: true}, color: '#727272', dataLabels: {\n                            enabled: true,\n                            y: 35,\n                            /* shadow: true,*/\n                            style: {\n                                fontWeight: 'bold',\n                                fontSize: 16,\n                                color: '#dc3b38'\n                            }\n                        }\n                    }, 50, 55, 60]\n\n            }, {\n                name: '오늘',\n                color: '#68b0b1',\n                marker: {\n                    enabled: false\n                },\n                data: [50, 65, 57, {y: 88, marker: {enabled: true, 'symbol': 'circle'}, color: '#000000'}, 79, 52,\n                    {\n                        y: 44,\n                        marker: {enabled: true, 'symbol': 'circle'},\n                        color: '#000000'\n                    }, 56, 70, 80,66, 70, 60, 55, 75, 60,\n                    {y: 75, marker: {enabled: true, 'symbol': 'circle',radius: 7}, color: '#49a6e7'}]\n\n            }]\n        });\n    }\n});";
},"useData":true});

this["templete"]["airPurifier/airPurifier.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifier = Backbone.View.extend({\n    classAirCardSlider: null,\n    oDataAirFurifierList: null,\n    oAirFurifierDetailInfo: null,\n    initialize: function () {\n\n        //위닉스 타이탄\n        App.view.device_winixTitanSettingAlarm = new directory.device_winixTitanSettingAlarm();\n        App.view.device_winixTitanSettingFilterUsed = new directory.device_winixTitanSettingFilterUsed();\n        App.view.device_winixTitanSettingInfomation = new directory.device_winixTitanSettingInfomation();\n        App.view.device_winixTitanSettingMode = new directory.device_winixTitanSettingMode();\n        App.view.device_winixTitanSettingPlasmaWave = new directory.device_winixTitanSettingPlasmaWave();\n        App.view.device_winixTitanSettingPower = new directory.device_winixTitanSettingPower();\n        App.view.device_winixTitanSettingTurnOff = new directory.device_winixTitanSettingTurnOff();\n        App.view.device_winixTitanSettingVolume = new directory.device_winixTitanSettingVolume();\n\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n        self.$el.html(templete[\"airPurifier/airPurifier\"]());\n\n        self.$el.find('#power').html(App.view.device_winixTitanSettingPower.render().$el);\n        self.$el.find('#mode').html(App.view.device_winixTitanSettingMode.render().$el);\n        self.$el.find('#volume').html(App.view.device_winixTitanSettingVolume.render().$el);\n        self.$el.find('#plasmaWave').html(App.view.device_winixTitanSettingPlasmaWave.render().$el);\n        self.$el.find('#turnOff').html(App.view.device_winixTitanSettingTurnOff.render().$el);\n        self.$el.find('#filterUsed').html(App.view.device_winixTitanSettingFilterUsed.render().$el);\n        self.$el.find('#alarm').html(App.view.device_winixTitanSettingAlarm.render().$el);\n        self.$el.find('#infomation').html(App.view.device_winixTitanSettingInfomation.render().$el);\n\n        // 학교 공기상태 슬라이드\n        this.airFurifierSliderBinding();\n        self.optionTempleteBinding();\n\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n\n\n        this.schoolAirStateSlider();\n\n        $('.wrap_contents').scrollTop(0)\n    },\n    airFurifierSliderBinding: function(){\n        var self = this;\n        // 센서 갯수 만큼 슬라이드 바인딩\n        var oRtnDvcIdList = {\"rtnDvcIdList\": []};\n        var oRtnDvcId = {\"rtnDvcId\": \"\"};\n\n        App.model.listDevice.fetch({\n            method: \"GET\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json;charset=UTF-8\",\n                \"company\": \"school\"\n            },\n            data: App.vars.loginId,\n            /*data: {\"loginId\": \"smartair3@sk.com\"},*/\n            success: function (model, response) {\n                console.log('@ App.model.listDevice');\n                console.log(response);\n\n                for (var i = 0; i < response.dvcList.length; i++) {\n                    for (var j = 0; j < response.dvcList[i].clsList.length; j++) {\n                        for (var k = 0; k < response.dvcList[i].clsList[j].clsDvcList.length; k++) {\n                            if (response.dvcList[i].clsList[j] === undefined) {\n                                /*oRtnDvcIdList*/\n                                /*oRtnDvcId*/\n                            }\n                            oRtnDvcId.rtnDvcId = response.dvcList[i].clsList[j].clsDvcList[k].dvcId;\n                            oRtnDvcIdList.rtnDvcIdList.push(oRtnDvcId);\n\n                        }\n                    }\n\n                }\n                console.log(oRtnDvcIdList)\n            },\n            complete: function () {\n\n            },\n            error: function (e) {\n            }\n        }).done(function () {\n            //diplay info\n            App.model.deviceDetailRefer.fetch({\n                method: \"POST\",\n                headers: {\n                    \"Authorization\": App.vars.token,\n                    \"Content-Type\": \"application/json;charset=UTF-8\",\n                    \"company\": \"school\"\n                },\n                data: JSON.stringify(oRtnDvcIdList),\n                success: function (model, response) {\n                    console.log('@ App.model.deviceDetailRefer');\n                    console.log(response);\n                    self.deviceDetailRefer = response;\n\n                    self.$el.find('.area_school_air').append(templete[\"airPurifier/airPurifySlider\"](self.deviceDetailRefer));\n\n                    // response = {\n                    //     \"timeUseYn\": \"N\",\n                    //     \"dvcBannerImgUrl\": null,\n                    //     \"homeUseHour\": \"0\",\n                    //     \"userImgUrl\": \"2\",\n                    //     \"dvcBannerLink\": null,\n                    //     \"filterBuyUrl\": \"http://filtershop.winix.com/\",\n                    //     \"makerNm\": \"위닉스\",\n\n                    //     \"yserterDtm\": \"2018.01.02(화)\",\n                    //     \"offDtm\": \"\",\n                    //     \"dvcImgUrl\": \"20171204095641489001.jpg\",\n                    //     \"actMsg\": \"공기청정기2을 등록했습니다.\",\n                    //     \"modeSer\": \"\",\n                    //     \"resultMsg\": \"성공\",\n                    //     \"sendMd\": \"20180102\",\n                    //     \"userDeviceList\": [{\n                    //         \"dvcCd\": \"DVC0000203\",\n                    //         \"makerCd\": \"008\",\n                    //         \"dvcImgUrl\": \"20171204095641489001.jpg\",\n                    //         \"dvcId\": \"UDC00000000000027321\",\n                    //         \"dvcNickNm\": \"공기청정기2\",\n                    //         \"dvcKindNm\": \"공기청정기\",\n                    //         \"makerNm\": \"위닉스\",\n                    //         \"fncCd\": \"D53\",\n                    //         \"fncNm\": \"청정도\",\n                    //         \"fncVal\": \"03\",\n                    //         \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                    //         \"actMsg\": \"아리아~ 공기청정기2 켜줘/꺼줘\",\n                    //         \"callCenterPhnNum\": \"1544-5081\",\n                    //         \"connStatYn\": \"Y\",\n                    //         \"fncInfo\": \"좋음\",\n                    //         \"title\": \"공기청정도\",\n                    //         \"payUseCd\": \"01\",\n                    //         \"timeUseYn\": \"N\",\n                    //         \"statusSign1\": \"\",\n                    //         \"controlFncCd1\": \"D03\",\n                    //         \"controlFncVal1\": \"off:꺼져있음,on:켜져있음\",\n                    //         \"controlIcon1\": \"power\",\n                    //         \"controlTemp\": \"전원 끄기\",\n                    //         \"sortIndex\": \"-2\",\n                    //         \"controlStatus\": \"on\",\n                    //         \"filterBuyUrl\": \"http://filtershop.winix.com/\",\n                    //         \"openDeviceList\": [{\n                    //             \"fncCd\": \"D03\",\n                    //             \"fncNm\": \"전원\",\n                    //             \"fncVal\": \"on\",\n                    //             \"fncDesc\": \"off:꺼져있음,on:켜져있음\",\n                    //             \"controlYn\": \"Y\",\n                    //             \"fncInfo\": \"켜져있음\",\n                    //             \"statusSign1\": \"Wh\",\n                    //             \"standDay\": 0,\n                    //             \"rtnDvcId\": \"D16943363193\"\n                    //         }, {\n                    //             \"fncCd\": \"D04\",\n                    //             \"fncNm\": \"\",\n                    //             \"fncVal\": \"off\",\n                    //             \"fncDesc\": \"\",\n                    //             \"controlYn\": \"N\",\n                    //             \"fncInfo\": \"\",\n                    //             \"statusSign1\": \"\",\n                    //             \"standDay\": 0,\n                    //             \"rtnDvcId\": \"D16943363193\"\n                    //         }, {\n                    //             \"fncCd\": \"D05\",\n                    //             \"fncNm\": \"모드\",\n                    //             \"fncVal\": \"02\",\n                    //             \"fncDesc\": \"01:자동모드,02:수동모드\",\n                    //             \"controlYn\": \"Y\",\n                    //             \"fncInfo\": \"수동모드\",\n                    //             \"statusSign1\": \"\",\n                    //             \"standDay\": 0,\n                    //             \"rtnDvcId\": \"D16943363193\"\n                    //         }, {\n                    //             \"fncCd\": \"D19\",\n                    //             \"fncNm\": \"풍량\",\n                    //             \"fncVal\": \"03\",\n                    //             \"fncDesc\": \"\",\n                    //             \"controlYn\": \"Y\",\n                    //             \"fncInfo\": \"\",\n                    //             \"statusSign1\": \"\",\n                    //             \"standDay\": 0,\n                    //             \"rtnDvcId\": \"D16943363193\"\n                    //         }, {\n                    //             \"fncCd\": \"D53\",\n                    //             \"fncNm\": \"청정도\",\n                    //             \"fncVal\": \"03\",\n                    //             \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                    //             \"controlYn\": \"N\",\n                    //             \"fncInfo\": \"좋음\",\n                    //             \"statusSign1\": \"\",\n                    //             \"standDay\": 0,\n                    //             \"rtnDvcId\": \"D16943363193\"\n                    //         }, {\n                    //             \"fncCd\": \"D20\",\n                    //             \"fncNm\": \"\",\n                    //             \"fncVal\": \"on\",\n                    //             \"fncDesc\": \"\",\n                    //             \"controlYn\": \"N\",\n                    //             \"fncInfo\": \"\",\n                    //             \"statusSign1\": \"\",\n                    //             \"standDay\": 0,\n                    //             \"rtnDvcId\": \"D16943363193\"\n                    //         }],\n                    //         \"standDay\": 0,\n                    //         \"userId\": \"USR00000000000002875\",\n                    //         \"userGrpId\": \"GRP00000000000002443\",\n                    //         \"rtnDvcId\": \"D16943363193\",\n                    //         \"dvcKindCd\": \"012\",\n                    //         \"company\": \"school\"\n                    //     }],\n                    //     \"otherUseHour\": \"0\",\n                    //     \"notiCnt\": \"1\",\n                    //     \"resultCd\": \"1\",\n                    //     \"sendHm\": \"2102\",\n                    //     \"callCenterPhnNum\": \"1544-5081\",\n                    //     \"readYn\": \"N\"\n                    // }\n\n\n                },\n                complete: function () {\n\n                },\n                error: function (e) {\n                }\n            });\n        });\n\n       /* App.model.intariorSensorDetail.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(data),\n            beforeSend: function(){\n            },\n            success : function (model, response) {\n                self.oDataAirFurifier = response\n            },\n            complete : function(){\n                // 공기정화 상태 슬라이드\n                self.$el.find('.area_school_air').append(templete[\"airPurifier/airPurifySlider\"]());\n            },\n            error : function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n            }\n        });*/\n\n    },\n    optionTempleteBinding: function(){\n        var self = this;\n        // 공기청정기 옵션 바인딩\n\n        // // 전원설정\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingPower\"]());\n        // // 모드설정\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingMode\"]());\n        // // 풍량설정\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingVolume\"]());\n        // // 공기정화\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingPlasmaWave\"]());\n        // // 꺼짐 예약\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingTurnOff\"]());\n        // // 필터 사용량\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingFilterUsed\"]());\n        // // 이력 및 알림\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingAlarm\"]());\n        // // 정보\n        // self.$el.find('.area_box_list').append(templete[\"winixTitan/settingInfomation\"]());\n\n    },\n    schoolAirStateSlider: function(){\n        var self = this;\n        this.classAirCardSlider = $('.area_school_air .slider');\n        this.classAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            pagerSelector: \".slide_pager\",\n            onSliderLoad: function () {\n                // 실내센서 갯수만큼\n               /* for (var i = 0; i < outSensor.length; i++) {\n                    airGrd = outSensor[i].airGrd\n                    switch (airGrd) {\n                        case \"좋음\" :\n                            $('.bx-pager-item').eq(i).addClass('good');\n                            break;\n                        case \"보통\" :\n                            $('.bx-pager-item').eq(i).addClass('normal');\n                            break;\n                        case \"나쁨\" :\n                            $('.bx-pager-item').eq(i).addClass('bad');\n                            break;\n                        case \"매우나쁨\" :\n                            $('.bx-pager-item').eq(i).addClass('worse');\n                            break;\n                    }\n                }*/\n            },\n            onSlideAfter: function(){\n                // 슬라이드 후 해당 기기 옵션 갱신\n\n            }\n        });\n    },\n\n});";
},"useData":true});

this["templete"]["airReport/airReport.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airReport = Backbone.View.extend({\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n        self.$el.html(templete[\"airReport/airReport\"]()).removeClass('wrap_contents_gray');;\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el);\n        $('.wrap_header h1').text(\"공기리포트\");\n    }\n});";
},"useData":true});

this["templete"]["branch/branch.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.branch = Backbone.View.extend({\n    oMySchoolData: {\n        \"size\": \"0\",\n        \"offset\": \"0\",\n        \"loginId\": App.vars.loginId\n    },\n    initialize: function () {\n        this.render();\n    },\n    render: function () {\n\n\n\n\n\n    },\n\n\n});";
},"useData":true});

this["templete"]["detailProduct/detailProduct.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.detailProduct = Backbone.View.extend({\n    classAirCardSlider: null,\n    oDataUserDeviceList: null,\n    oAirFurifierDetailInfo: null,\n    oAirMultiSensorDetailInfo: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n\n        // 제품군에 따라\n        // 템플릿팅\n        self.$el.html(templete[\"airPurifier/airPurifier\"]());\n        this.airFurifierSliderBinding();\n\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n\n        // 학교 공기상태 슬라이드\n        this.schoolAirStateSlider();\n\n        $('.wrap_contents').scrollTop(0)\n    },\n    userDeviceListSliderBinding: function(){\n        var self = this;\n        // 센서 갯수 만큼 슬라이드 바인딩\n\n        var data = {\n            \"resultMsg\": \"성공\",\n            \"userDeviceList\": [\n                {\n                    \"dvcCd\": \"DVC0000203\",\n                    \"makerCd\": \"008\",\n                    \"dvcId\": \"UDC00000000000107390\",\n                    \"dvcNickNm\": \"공기청정기\",\n                    \"dvcKindNm\": \"공기청정기\",\n                    \"makerNm\": \"위닉스\",\n                    \"fncCd\": \"D53\",\n                    \"fncNm\": \"청정도\",\n                    \"fncVal\": \"03\",\n                    \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                    \"actMsg\": \"공기청정기 10시에 켜줘\",\n                    \"connStatYn\": \"Y\",\n                    \"fncInfo\": \"좋음\",\n                    \"title\": \"실내공기상태\",\n                    \"payUseCd\": \"01\",\n                    \"statusSign1\": \"\",\n                    \"controlFncCd1\": \"D03\",\n                    \"controlFncVal1\": \"off:꺼져있음,on:켜져있음\",\n                    \"controlIcon1\": \"power\",\n                    \"controlTemp\": \"전원 끄기\",\n                    \"sortIndex\": \"1\",\n                    \"controlStatus\": \"on\",\n                    \"openDeviceList\": [\n                        {\n                            \"fncCd\": \"D03\",\n                            \"fncNm\": \"전원\",\n                            \"fncVal\": \"on\",\n                            \"fncDesc\": \"off:꺼져있음,on:켜져있음\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"켜져있음\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D51777976497\"\n                        },\n                        {\n                            \"fncCd\": \"D04\",\n                            \"fncNm\": \"차일드락\",\n                            \"fncVal\": \"off\",\n                            \"fncDesc\": \"off:꺼짐,on:켜짐\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"꺼짐\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D51777976497\"\n                        },\n                        {\n                            \"fncCd\": \"D05\",\n                            \"fncNm\": \"모드\",\n                            \"fncVal\": \"02\",\n                            \"fncDesc\": \"01:자동모드,02:수동모드\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"수동모드\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D51777976497\"\n                        },\n                        {\n                            \"fncCd\": \"D19\",\n                            \"fncNm\": \"풍량\",\n                            \"fncVal\": \"03\",\n                            \"fncDesc\": \"01:강풍,02:중풍,03:약풍,05:터보,06:수면풍\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"약풍\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D51777976497\"\n                        },\n                        {\n                            \"fncCd\": \"D53\",\n                            \"fncNm\": \"청정도\",\n                            \"fncVal\": \"03\",\n                            \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"좋음\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D51777976497\"\n                        },\n                        {\n                            \"fncCd\": \"D20\",\n                            \"fncNm\": \"플라즈마\",\n                            \"fncVal\": \"on\",\n                            \"fncDesc\": \"off:꺼짐,on:켜짐\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"켜짐\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D51777976497\"\n                        }\n                    ],\n                    \"standDay\": 0,\n                    \"userId\": \"USR00000000000016916\",\n                    \"rtnDvcId\": \"D51777976497\",\n                    \"dvcKindCd\": \"012\",\n                    \"company\": \"school\"\n                },\n                {\n                    \"dvcCd\": \"DVC0000216\",\n                    \"makerCd\": \"088\",\n                    \"dvcId\": \"UDC00000000000107363\",\n                    \"dvcNickNm\": \"공기청정기4\",\n                    \"dvcKindNm\": \"공기청정기\",\n                    \"makerNm\": \"SK매직\",\n                    \"fncCd\": \"D53\",\n                    \"fncNm\": \"청정도\",\n                    \"fncVal\": \"04\",\n                    \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                    \"actMsg\": \"공기청정기4 10시에 켜줘\",\n                    \"connStatYn\": \"Y\",\n                    \"fncInfo\": \"매우나쁨\",\n                    \"title\": \"실내공기상태\",\n                    \"payUseCd\": \"01\",\n                    \"statusSign1\": \"\",\n                    \"controlFncCd1\": \"D03\",\n                    \"controlFncVal1\": \"off:꺼져있음,on:켜져있음\",\n                    \"controlIcon1\": \"power\",\n                    \"controlTemp\": \"전원 끄기\",\n                    \"sortIndex\": \"-21\",\n                    \"controlStatus\": \"on\",\n                    \"openDeviceList\": [\n                        {\n                            \"fncCd\": \"D03\",\n                            \"fncNm\": \"전원\",\n                            \"fncVal\": \"on\",\n                            \"fncDesc\": \"off:꺼져있음,on:켜져있음\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"켜져있음\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D85637884641\"\n                        },\n                        {\n                            \"fncCd\": \"D05\",\n                            \"fncNm\": \"모드\",\n                            \"fncVal\": \"\",\n                            \"fncDesc\": \"01:자동모드,02:수동모드\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D85637884641\"\n                        },\n                        {\n                            \"fncCd\": \"D19\",\n                            \"fncNm\": \"풍량\",\n                            \"fncVal\": \"03\",\n                            \"fncDesc\": \"01:강풍,02:중풍,03:약풍\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"약풍\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D85637884641\"\n                        },\n                        {\n                            \"fncCd\": \"D53\",\n                            \"fncNm\": \"청정도\",\n                            \"fncVal\": \"04\",\n                            \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"매우나쁨\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D85637884641\"\n                        }\n                    ],\n                    \"standDay\": 0,\n                    \"userId\": \"USR00000000000013901\",\n                    \"rtnDvcId\": \"D85637884641\",\n                    \"dvcKindCd\": \"012\",\n                    \"company\": \"school\"\n                },\n                {\n                    \"dvcCd\": \"DVC0000203\",\n                    \"makerCd\": \"008\",\n                    \"dvcId\": \"UDC00000000000107391\",\n                    \"dvcNickNm\": \"공기청정기\",\n                    \"dvcKindNm\": \"공기청정기\",\n                    \"makerNm\": \"위닉스\",\n                    \"fncCd\": \"D53\",\n                    \"fncNm\": \"청정도\",\n                    \"fncVal\": \"01\",\n                    \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                    \"actMsg\": \"공기청정기 10시에 켜줘\",\n                    \"connStatYn\": \"Y\",\n                    \"fncInfo\": \"좋음\",\n                    \"title\": \"실내공기상태\",\n                    \"payUseCd\": \"01\",\n                    \"statusSign1\": \"\",\n                    \"controlFncCd1\": \"D03\",\n                    \"controlFncVal1\": \"off:꺼져있음,on:켜져있음\",\n                    \"controlIcon1\": \"power\",\n                    \"controlTemp\": \"전원 끄기\",\n                    \"sortIndex\": \"0\",\n                    \"controlStatus\": \"on\",\n                    \"openDeviceList\": [\n                        {\n                            \"fncCd\": \"D03\",\n                            \"fncNm\": \"전원\",\n                            \"fncVal\": \"on\",\n                            \"fncDesc\": \"off:꺼져있음,on:켜져있음\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"켜져있음\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D93033427537\"\n                        },\n                        {\n                            \"fncCd\": \"D04\",\n                            \"fncNm\": \"차일드락\",\n                            \"fncVal\": \"off\",\n                            \"fncDesc\": \"off:꺼짐,on:켜짐\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"꺼짐\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D93033427537\"\n                        },\n                        {\n                            \"fncCd\": \"D05\",\n                            \"fncNm\": \"모드\",\n                            \"fncVal\": \"02\",\n                            \"fncDesc\": \"01:자동모드,02:수동모드\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"수동모드\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D93033427537\"\n                        },\n                        {\n                            \"fncCd\": \"D19\",\n                            \"fncNm\": \"풍량\",\n                            \"fncVal\": \"03\",\n                            \"fncDesc\": \"01:강풍,02:중풍,03:약풍,05:터보,06:수면풍\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"약풍\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D93033427537\"\n                        },\n                        {\n                            \"fncCd\": \"D53\",\n                            \"fncNm\": \"청정도\",\n                            \"fncVal\": \"01\",\n                            \"fncDesc\": \"01:좋음,02:보통,03:좋음,04:매우나쁨\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"좋음\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D93033427537\"\n                        },\n                        {\n                            \"fncCd\": \"D20\",\n                            \"fncNm\": \"플라즈마\",\n                            \"fncVal\": \"on\",\n                            \"fncDesc\": \"off:꺼짐,on:켜짐\",\n                            \"controlYn\": \"N\",\n                            \"fncInfo\": \"켜짐\",\n                            \"statusSign1\": \"\",\n                            \"standDay\": 0,\n                            \"rtnDvcId\": \"D93033427537\"\n                        }\n                    ],\n                    \"standDay\": 0,\n                    \"userId\": \"USR00000000000016980\",\n                    \"rtnDvcId\": \"D93033427537\",\n                    \"dvcKindCd\": \"012\",\n                    \"company\": \"school\"\n                }\n            ],\n            \"resultCd\": \"1\"\n\n        }\n        /*console.log(data)*/\n\n        self.$el.find('.area_school_air').append(templete[\"airPurifier/airPurifySlider\"](data));\n        /* App.model.intariorSensorDetail.fetch({\n             method: \"POST\",\n             headers: {\n                 \"Content-Type\": \"application/json\"\n             },\n             data: JSON.stringify(data),\n             beforeSend: function(){\n             },\n             success : function (model, response) {\n                 self.oDataAirFurifier = response\n             },\n             complete : function(){\n                 // 공기정화 상태 슬라이드\n                 self.$el.find('.area_school_air').append(templete[\"airPurifier/airPurifySlider\"]());\n             },\n             error : function (e) {\n                 //alert(\"서버 데이터 조회에 실패하였습니다\");\n             }\n         });*/\n\n    },\n    optionTempleteBinding: function(){\n        var self = this;\n        // 공기청정기 옵션 바인딩\n        /*App.model.intariorSensorDetail.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(data),\n            beforeSend: function(){\n            },\n            success : function (model, response) {\n                self.oAirFurifierDetailInfo = response\n            },\n            complete : function(){\n                // 옵션 초기화\n                self.$el.find('.area_box_list').remove();\n                // 전원설정\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingPower\"]());\n                // 모드설정\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingMode\"]());\n                // 풍량설정\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingVolume\"]());\n                // 공기정화\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingPurify\"]());\n                // 플라즈마\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingPlasma\"]());\n                // 이온\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingIon\"]());\n                // 먼지센서 감도 설정\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingDustSensor\"]());\n                // 차일드락\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingChildLock\"]());\n                // 꺼짐 예약\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingTurnOff\"]());\n                // 자동 제어 설정\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingAutoControls\"]());\n                // 필터 사용량\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingFilterUsed\"]());\n                // 이력 및 알림\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingAlarm\"]());\n                // 정보\n                self.$el.find('.area_box_list').append(templete[\"airPurifier/settingInfomation\"]());\n            },\n            error : function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n            }\n        });*/\n    },\n    schoolAirStateSlider: function(){\n        var self = this;\n        this.classAirCardSlider = $('.area_school_air .slider');\n        this.classAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            preventDefaultSwipeY: true,\n            onSliderLoad: function(){\n\n                self.optionTempleteBinding();\n            },\n            onSlideAfter: function(){\n                // 슬라이드 후 해당 기기 옵션 갱신\n                self.optionTempleteBinding();\n            }\n        });\n    },\n\n});";
},"useData":true});

this["templete"]["device_awair/airInfo.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_awairAirInfo = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_awair/airInfo\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_awair/chart.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_awairChart = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_awair/chart\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_awair/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensorAwair = Backbone.View.extend({\n    initialize: function () {\n        //그린망고\n        App.view.device_awairAirInfo = new directory.device_awairAirInfo();\n        App.view.device_awairChart = new directory.device_awairChart();\n        App.view.device_awairMode = new directory.device_awairMode();\n        App.view.device_awairSettingAlarm = new directory.device_awairSettingAlarm();\n        App.view.device_awairSettingInformation = new directory.device_awairSettingInformation();\n\n        this.render();\n    },\n    render: function (data) {\n        var self = this;\n        // 템플릿팅\n        self.$el.html(templete[\"device_awair/device\"](data));\n\n        self.$el.find('#airInfo').html(App.view.device_awairAirInfo.render(data).$el);\n        self.$el.find('#airChart').html(App.view.device_awairChart.render(data).$el);\n        self.$el.find('#favor').html(App.view.device_awairMode.render(data).$el);\n        self.$el.find('#alarm').html(App.view.device_awairSettingAlarm.render(data).$el);\n        self.$el.find('#infomation').html(App.view.device_awairSettingInformation.render(data).$el);\n\n        return self;\n    }\n});";
},"useData":true});

this["templete"]["device_awair/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_awairSettingAlarm = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_awair/settingAlarm\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_awair/settingInformation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_awairSettingInformation = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_awair/settingInformation\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_awair/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_awairMode = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_awair/settingMode\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_green/airInfo.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_greenAirInfo = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_green/airInfo\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_green/chart.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_greenChart = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_green/chart\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_green/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensorGreenMango = Backbone.View.extend({\n    initialize: function () {\n        //그린망고\n        App.view.device_greenAirInfo = new directory.device_greenAirInfo();\n        App.view.device_greenChart = new directory.device_greenChart();\n        App.view.device_greenMode = new directory.device_greenMode();\n        App.view.device_greenSettingAlarm = new directory.device_greenSettingAlarm();\n        App.view.device_greenSettingInformation = new directory.device_greenSettingInformation();\n\n        this.render();\n    },\n    render: function (data) {\n        var self = this;\n        // 템플릿팅\n        self.$el.html(templete[\"device_green/device\"](data));\n\n        self.$el.find('#airInfo').html(App.view.device_greenAirInfo.render(data).$el);\n        self.$el.find('#airChart').html(App.view.device_greenChart.render(data).$el);\n        self.$el.find('#mode').html(App.view.device_greenMode.render(data).$el);\n        self.$el.find('#alarm').html(App.view.device_greenSettingAlarm.render(data).$el);\n        self.$el.find('#infomation').html(App.view.device_greenSettingInformation.render(data).$el);\n\n        return self;\n    }\n});";
},"useData":true});

this["templete"]["device_green/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_greenSettingAlarm = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_green/settingAlarm\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_green/settingInformation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_greenSettingInformation = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_green/settingInformation\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_green/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_greenMode = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_green/settingMode\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_hyundai/airInfo.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_hyundaiAirInfo = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_hyundai/airInfo\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_hyundai/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airMultiSensorHyundai = Backbone.View.extend({\n    initialize: function () {\n        //그린망고\n        App.view.device_hyundaiAirInfo = new directory.device_hyundaiAirInfo();\n        App.view.device_awairChart = new directory.device_awairChart();\n        App.view.device_hyundaiMode = new directory.device_hyundaiMode();\n        App.view.device_hyundaiSettingAlarm = new directory.device_hyundaiSettingAlarm();\n        App.view.device_hyundaiSettingInformation = new directory.device_hyundaiSettingInformation();\n\n        this.render();\n    },\n    render: function (data) {\n        var self = this;\n        // 템플릿팅\n        self.$el.html(templete[\"device_hyundai/device\"](data));\n\n        self.$el.find('#airInfo').html(App.view.device_hyundaiAirInfo.render(data).$el);\n        self.$el.find('#airChart').html(App.view.device_awairChart.render(data).$el);\n        self.$el.find('#mode').html(App.view.device_hyundaiMode.render(data).$el);\n        self.$el.find('#alarm').html(App.view.device_hyundaiSettingAlarm.render(data).$el);\n        self.$el.find('#infomation').html(App.view.device_hyundaiSettingInformation.render(data).$el);\n\n        return self;\n    }\n});";
},"useData":true});

this["templete"]["device_hyundai/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_hyundaiSettingAlarm = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_hyundai/settingAlarm\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_hyundai/settingInformation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_hyundaiSettingInformation = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_hyundai/settingInformation\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_hyundai/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_hyundaiMode = Backbone.View.extend({\n    initialize: function () {\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_hyundai/settingMode\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_lgDplus/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierLgDplus = Backbone.View.extend({\r\n    initialize: function () {\r\n        //LgD\r\n        App.view.device_lgDplusSettingAlarm= new directory.device_lgDplusSettingAlarm();\r\n        App.view.device_lgDplusSettingInfomation = new directory.device_lgDplusSettingInfomation();\r\n        App.view.device_lgDplusSettingMode = new directory.device_lgDplusSettingMode();\r\n        App.view.device_lgDplusSettingPower = new directory.device_lgDplusSettingPower();\r\n        App.view.device_lgDplusSettingPuritySignLamp = new directory.device_lgDplusSettingPuritySignLamp();\r\n        App.view.device_lgDplusSettingRemoveVirus = new directory.device_lgDplusSettingRemoveVirus();\r\n        App.view.device_lgDplusSettingTurnOf = new directory.device_lgDplusSettingTurnOff();\r\n        App.view.device_lgDplusSettingVolume = new directory.device_lgDplusSettingVolume();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_lgDplus/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_lgDplusSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_lgDplusSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_lgDplusSettingVolume.render(data).$el);\r\n            self.$el.find('#purifysignlamp').html(App.view.device_lgDplusSettingPuritySignLamp.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_lgDplusSettingTurnOf.render(data).$el);\r\n            self.$el.find('#removevirus').html(App.view.device_lgDplusSettingRemoveVirus.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_lgDplusSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_lgDplusSettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_lgDplusSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_lgDplusSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingAlarm = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_lgDplus/settingAlarm\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingInfomation = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_lgDplus/settingInfomation\"](data));\n        return this;\n\n    }\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgDplus/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgDplus/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingPuritySignLamp.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingPuritySignLamp = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgDplus/settingPuritySignLamp\"](data));\r\n        return this;\r\n\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingRemoveVirus.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingRemoveVirus = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgDplus/settingRemoveVirus\"](data));\r\n        return this;\r\n\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgDplus/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgDplus/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgDplusSettingVolume= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgDplus/settingVolume\"](data));\r\n        return this;\r\n\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierLgGplus = Backbone.View.extend({\r\n    initialize: function () {\r\n        //LgG\r\n        App.view.device_lgGplusSettingAlarm= new directory.device_lgGplusSettingAlarm();\r\n        App.view.device_lgGplusSettingInfomation = new directory.device_lgGplusSettingInfomation();\r\n        App.view.device_lgGplusSettingMode= new directory.device_lgGplusSettingMode();\r\n        App.view.device_lgGplusSettingPower = new directory.device_lgGplusSettingPower();\r\n        App.view.device_lgGplusSettingPuritySignLamp = new directory.device_lgGplusSettingPuritySignLamp();\r\n        App.view.device_lgGplusSettingRemoveVirus = new directory.device_lgGplusSettingRemoveVirus();\r\n        App.view.device_lgGplusSettingTurnOff = new directory.device_lgGplusSettingTurnOff();\r\n        App.view.device_lgGplusSettingUseReport = new directory.device_lgGplusSettingUseReport();\r\n        App.view.device_lgGplusSettingVolume = new directory.device_lgGplusSettingVolume();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_lgGplus/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_lgGplusSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_lgGplusSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_lgGplusSettingVolume.render(data).$el);\r\n            self.$el.find('#purifysignlamp').html(App.view.device_lgGplusSettingPuritySignLamp.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_lgGplusSettingTurnOff.render(data).$el);\r\n            self.$el.find('#removevirus').html(App.view.device_lgGplusSettingRemoveVirus.render(data).$el);\r\n            self.$el.find('#usereport').html(App.view.device_lgGplusSettingUseReport.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_lgGplusSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_lgGplusSettingInfomation.render(data).$el);\r\n            self.highcharts(data);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_lgGplusSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_lgGplusSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    },\r\n\r\n    highcharts: function () {\r\n        $(function() {\r\n            var chart = new Highcharts.Chart({\r\n                    chart: {\r\n                        renderTo: 'report_house',\r\n                        type: 'pie',\r\n                        backgroundColor: '#ffffff'\r\n                    },\r\n                    colors:['#ff9f3e','#eeeeee'],\r\n                    credits: {\r\n                        enabled: false\r\n                    },\r\n                    title: {\r\n                        text: ''\r\n                    },\r\n                    plotOptions: {\r\n                        pie: {\r\n                            borderColor: 'none',\r\n                            size:'80',\r\n                            innerSize: '77'\r\n                        },\r\n                        series: {\r\n                            animation: false\r\n                        }\r\n                    },\r\n                    series: [{\r\n                        dataLabels: {\r\n                            enabled: false\r\n                        },\r\n                        data: [33,67]   //percent\r\n                    }]\r\n                },\r\n                // using\r\n                function(chart) { // on complete\r\n                    // Render the text\r\n                    /*chart.renderer.text('<span style=\"color: #ff9f3e;font-size: 27px;\">9</span><br>' +\r\n                        '시간', 35, 46).css({\r\n                        width: 80,\r\n                        color: '#bababa',\r\n                        fontSize: '11px',\r\n                        textAlign: 'center'\r\n                    }).attr({\r\n                        // why doesn't zIndex get the text in front of the chart?\r\n                        zIndex: 999\r\n                    }).add();*/\r\n\r\n                    //마커 생성\r\n                    var r, x, y, q = 1;\r\n                    Highcharts.each(chart.series[0].data, function(p, i) {\r\n                        if (p.y <= 33) {\r\n                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;\r\n                            q =  p.shapeArgs.end\r\n                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;\r\n                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;\r\n                            chart.renderer.circle(x, y, 2).attr({\r\n                                zIndex: 4,\r\n                                fill: '#ff9f3e'\r\n                            }).add();\r\n                        }\r\n                    })\r\n                });\r\n        });\r\n\r\n        $(function() {\r\n            var chart = new Highcharts.Chart({\r\n                    chart: {\r\n                        renderTo: 'report_household',\r\n                        type: 'pie',\r\n                        backgroundColor: '#ffffff'\r\n                    },\r\n                    colors:['#666666','#eeeeee'],\r\n                    credits: {\r\n                        enabled: false\r\n                    },\r\n                    title: {\r\n                        text: ''\r\n                    },\r\n                    plotOptions: {\r\n                        pie: {\r\n                            borderColor: 'none',\r\n                            size:'80',\r\n                            innerSize: '77'\r\n                        },\r\n                        series: {\r\n                            animation: false\r\n                        }\r\n                    },\r\n                    series: [{\r\n                        dataLabels: {\r\n                            enabled: false\r\n                        },\r\n                        data: [65,35]   //percent\r\n                    }]\r\n                },\r\n                // using\r\n                function(chart) { // on complete\r\n                    // Render the text\r\n                    /*chart.renderer.text('<span style=\"color: #666666;font-size: 27px;\">4</span><br>' +\r\n                        '시간', 35, 46).css({\r\n                        width: 80,\r\n                        color: '#bababa',\r\n                        fontSize: '11px',\r\n                        textAlign: 'center'\r\n                    }).attr({\r\n                        // why doesn't zIndex get the text in front of the chart?\r\n                        zIndex: 999\r\n                    }).add();*/\r\n                    //마커 생성\r\n                    var r, x, y, q = 1;\r\n                    Highcharts.each(chart.series[0].data, function(p, i) {\r\n                        if (p.y >= 65) {\r\n                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;\r\n                            q =  p.shapeArgs.end\r\n                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;\r\n                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;\r\n                            chart.renderer.circle(x, y, 2).attr({\r\n                                zIndex: 4,\r\n                                fill: '#666666'\r\n                            }).add();\r\n                        }\r\n                    })\r\n                });\r\n        });\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingMode\"](data));\r\n        return this;\r\n\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingPuritySignLamp.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingPuritySignLamp = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingPuritySignLamp\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingRemoveVirus.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingRemoveVirus = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingRemoveVirus\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingUseReport.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingUseReport = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingUseReport\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgGplus/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgGplusSettingVolume = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgGplus/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierLgS = Backbone.View.extend({\r\n    initialize: function () {\r\n        //LgS\r\n        App.view.device_lgSSettingAlarm= new directory.device_lgSSettingAlarm();\r\n        App.view.device_lgSSettingInfomation= new directory.device_lgSSettingInfomation();\r\n        App.view.device_lgSSettingMode= new directory.device_lgSSettingMode();\r\n        App.view.device_lgSSettingPower = new directory.device_lgSSettingPower();\r\n        App.view.device_lgSSettingPuritySignLamp = new directory.device_lgSSettingPuritySignLamp();\r\n        App.view.device_lgSSettingRemoveVirus = new directory.device_lgSSettingRemoveVirus();\r\n        App.view.device_lgSSettingTurnOff = new directory.device_lgSSettingTurnOff();\r\n        App.view.device_lgSSettingUseReport = new directory.device_lgSSettingUseReport();\r\n        App.view.device_lgSSettingVolume = new directory.device_lgSSettingVolume();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_lgS/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_lgSSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_lgSSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_lgSSettingVolume.render(data).$el);\r\n            self.$el.find('#purifysignlamp').html(App.view.device_lgSSettingPuritySignLamp.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_lgSSettingTurnOff.render(data).$el);\r\n            self.$el.find('#removevirus').html(App.view.device_lgSSettingRemoveVirus.render(data).$el);\r\n            self.$el.find('#usereport').html(App.view.device_lgSSettingUseReport.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_lgSSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_lgSSettingInfomation.render(data).$el);\r\n            self.highcharts(data);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_lgSSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_lgSSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    },\r\n\r\n    highcharts: function () {\r\n        $(function() {\r\n            var chart = new Highcharts.Chart({\r\n                    chart: {\r\n                        renderTo: 'report_house',\r\n                        type: 'pie',\r\n                        backgroundColor: '#ffffff'\r\n                    },\r\n                    colors:['#ff9f3e','#eeeeee'],\r\n                    credits: {\r\n                        enabled: false\r\n                    },\r\n                    title: {\r\n                        text: ''\r\n                    },\r\n                    plotOptions: {\r\n                        pie: {\r\n                            borderColor: 'none',\r\n                            size:'80',\r\n                            innerSize: '77'\r\n                        },\r\n                        series: {\r\n                            animation: false\r\n                        }\r\n                    },\r\n                    series: [{\r\n                        dataLabels: {\r\n                            enabled: false\r\n                        },\r\n                        data: [33,67]   //percent\r\n                    }]\r\n                },\r\n                // using\r\n                function(chart) { // on complete\r\n                    // Render the text\r\n                    /*chart.renderer.text('<span style=\"color: #ff9f3e;font-size: 27px;\">9</span><br>' +\r\n                        '시간', 35, 46).css({\r\n                        width: 80,\r\n                        color: '#bababa',\r\n                        fontSize: '11px',\r\n                        textAlign: 'center'\r\n                    }).attr({\r\n                        // why doesn't zIndex get the text in front of the chart?\r\n                        zIndex: 999\r\n                    }).add();*/\r\n\r\n                    //마커 생성\r\n                    var r, x, y, q = 1;\r\n                    Highcharts.each(chart.series[0].data, function(p, i) {\r\n                        if (p.y <= 33) {\r\n                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;\r\n                            q =  p.shapeArgs.end\r\n                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;\r\n                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;\r\n                            chart.renderer.circle(x, y, 2).attr({\r\n                                zIndex: 4,\r\n                                fill: '#ff9f3e'\r\n                            }).add();\r\n                        }\r\n                    })\r\n                });\r\n        });\r\n\r\n        $(function() {\r\n            var chart = new Highcharts.Chart({\r\n                    chart: {\r\n                        renderTo: 'report_household',\r\n                        type: 'pie',\r\n                        backgroundColor: '#ffffff'\r\n                    },\r\n                    colors:['#666666','#eeeeee'],\r\n                    credits: {\r\n                        enabled: false\r\n                    },\r\n                    title: {\r\n                        text: ''\r\n                    },\r\n                    plotOptions: {\r\n                        pie: {\r\n                            borderColor: 'none',\r\n                            size:'80',\r\n                            innerSize: '77'\r\n                        },\r\n                        series: {\r\n                            animation: false\r\n                        }\r\n                    },\r\n                    series: [{\r\n                        dataLabels: {\r\n                            enabled: false\r\n                        },\r\n                        data: [65,35]   //percent\r\n                    }]\r\n                },\r\n                // using\r\n                function(chart) { // on complete\r\n                    // Render the text\r\n                    /*chart.renderer.text('<span style=\"color: #666666;font-size: 27px;\">4</span><br>' +\r\n                        '시간', 35, 46).css({\r\n                        width: 80,\r\n                        color: '#bababa',\r\n                        fontSize: '11px',\r\n                        textAlign: 'center'\r\n                    }).attr({\r\n                        // why doesn't zIndex get the text in front of the chart?\r\n                        zIndex: 999\r\n                    }).add();*/\r\n                    //마커 생성\r\n                    var r, x, y, q = 1;\r\n                    Highcharts.each(chart.series[0].data, function(p, i) {\r\n                        if (p.y >= 65) {\r\n                            r = (p.shapeArgs.innerR + p.shapeArgs.r) / 2 ;\r\n                            q =  p.shapeArgs.end\r\n                            x = p.shapeArgs.x + r * Math.cos(q) + chart.plotLeft;\r\n                            y = p.shapeArgs.y + r * Math.sin(q) + chart.plotTop;\r\n                            chart.renderer.circle(x, y, 2).attr({\r\n                                zIndex: 4,\r\n                                fill: '#666666'\r\n                            }).add();\r\n                        }\r\n                    })\r\n                });\r\n        });\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingPuritySignLamp.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingPuritySignLamp= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingPuritySignLamp\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingRemoveVirus.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingRemoveVirus = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingRemoveVirus\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingUseReport.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingUseReport = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingUseReport\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_lgS/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_lgSSettingVolume = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_lgS/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierNicePurifier= Backbone.View.extend({\r\n    initialize: function () {\r\n        //ChunghoNice\r\n        App.view.device_nicePurifierSettingAlarm = new directory.device_nicePurifierSettingAlarm();\r\n        App.view.device_nicePurifierSettingFilterUsed= new directory.device_nicePurifierSettingFilterUsed();\r\n        App.view.device_nicePurifierSettingInfomation = new directory.device_nicePurifierSettingInfomation();\r\n        App.view.device_nicePurifierSettingMode= new directory.device_nicePurifierSettingMode();\r\n        App.view.device_nicePurifierSettingDustSensor = new directory.device_nicePurifierSettingDustSensor();\r\n        App.view.device_nicePurifierSettingPower = new directory.device_nicePurifierSettingPower();\r\n        App.view.device_nicePurifierSettingTurnOff = new directory.device_nicePurifierSettingTurnOff();\r\n        App.view.device_nicePurifierSettingVolume = new directory.device_nicePurifierSettingVolume();\r\n        App.view.device_nicePurifierSettingIon = new directory.device_nicePurifierSettingIon();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_nicePurifier/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_nicePurifierSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_nicePurifierSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_nicePurifierSettingVolume.render(data).$el);\r\n            self.$el.find('#dustsensor').html(App.view.device_nicePurifierSettingDustSensor.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_nicePurifierSettingTurnOff.render(data).$el);\r\n            self.$el.find('#filterUsed').html(App.view.device_nicePurifierSettingFilterUsed.render(data).$el);\r\n            self.$el.find('#ion').html(App.view.device_nicePurifierSettingIon.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_nicePurifierSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_nicePurifierSettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_nicePurifierSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_nicePurifierSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingDustSensor.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingDustSensor = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingDustSensor\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingFilterUsed = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingFilterUsed\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingIon.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingIon = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingIon\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_nicePurifier/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_nicePurifierSettingVolume = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_nicePurifier/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierSamsungPurifier = Backbone.View.extend({\r\n    initialize: function () {\r\n        //Samsung\r\n        App.view.device_samsungPurifierSettingAlarm = new directory.device_samsungPurifierSettingAlarm();\r\n        App.view.device_samsungPurifierSettingFilterUsed = new directory.device_samsungPurifierSettingFilterUsed();\r\n        App.view.device_samsungPurifierSettingInfomation = new directory.device_samsungPurifierSettingInfomation();\r\n        App.view.device_samsungPurifierSettingMode= new directory.device_samsungPurifierSettingMode();\r\n        App.view.device_samsungPurifierSettingPower= new directory.device_samsungPurifierSettingPower();\r\n        App.view.device_samsungPurifierSettingTurnOff = new directory.device_samsungPurifierSettingTurnOff();\r\n        App.view.device_samsungPurifierSettingVolume = new directory.device_samsungPurifierSettingVolume();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_samsungPurifier/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_samsungPurifierSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_samsungPurifierSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_samsungPurifierSettingVolume.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_samsungPurifierSettingTurnOff.render(data).$el);\r\n            self.$el.find('#filterUsed').html(App.view.device_samsungPurifierSettingFilterUsed.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_samsungPurifierSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_samsungPurifierSettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_samsungPurifierSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_samsungPurifierSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingFilterUsed = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingFilterUsed\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingTurnOff\"](data));\r\n        return this;\r\n\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_samsungPurifier/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_samsungPurifierSettingVolume = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_samsungPurifier/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierWiniaHumidfy = Backbone.View.extend({\r\n    initialize: function () {\r\n        //WiniaHumidfy\r\n        App.view.device_winiaHumiditySettingAlarm = new directory.device_winiaHumiditySettingAlarm();\r\n        App.view.device_winiaHumiditySettingFilterUsed = new directory.device_winiaHumiditySettingFilterUsed();\r\n        App.view.device_winiaHumiditySettingInfomation = new directory.device_winiaHumiditySettingInfomation();\r\n        App.view.device_winiaHumiditySettingMode= new directory.device_winiaHumiditySettingMode();\r\n        App.view.device_winiaHumiditySettingPlasma = new directory.device_winiaHumiditySettingPlasma();\r\n        App.view.device_winiaHumiditySettingPower = new directory.device_winiaHumiditySettingPower();\r\n        App.view.device_winiaHumiditySettingTurnOff = new directory.device_winiaHumiditySettingTurnOff();\r\n        App.view.device_winiaHumiditySettingVolume= new directory.device_winiaHumiditySettingVolume();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_winiaHumidity/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_winiaHumiditySettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_winiaHumiditySettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_winiaHumiditySettingVolume.render(data).$el);\r\n            self.$el.find('#plasma').html(App.view.device_winiaHumiditySettingPlasma.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_winiaHumiditySettingTurnOff.render(data).$el);\r\n            self.$el.find('#filterUsed').html(App.view.device_winiaHumiditySettingFilterUsed.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_winiaHumiditySettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winiaHumiditySettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_winiaHumiditySettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winiaHumiditySettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingFilterUsed = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingFilterUsed\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingPlasma.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingPlasma = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingPlasma\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaHumidity/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaHumiditySettingVolume = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaHumidity/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierWiniaPurifier = Backbone.View.extend({\r\n    initialize: function () {\r\n        //WiniaPurifier\r\n        App.view.device_winiaPurifierSettingAlarm = new directory.device_winiaPurifierSettingAlarm();\r\n        App.view.device_winiaPurifierSettingFilterUsed = new directory.device_winiaPurifierSettingFilterUsed();\r\n        App.view.device_winiaPurifierSettingInfomation = new directory.device_winiaPurifierSettingInfomation();\r\n        App.view.device_winiaPurifierSettingMode = new directory.device_winiaPurifierSettingMode();\r\n        App.view.device_winiaPurifierSettingPlasma = new directory.device_winiaPurifierSettingPlasma();\r\n        App.view.device_winiaPurifierSettingPower = new directory.device_winiaPurifierSettingPower();\r\n        App.view.device_winiaPurifierSettingTurnOff = new directory.device_winiaPurifierSettingTurnOff();\r\n        App.view.device_winiaPurifierSettingVolume = new directory.device_winiaPurifierSettingVolume();\r\n        App.view.device_winiaPurifierSettingDisinfect = new directory.device_winiaPurifierSettingDisinfect();\r\n        App.view.device_winiaPurifierSettingHumidfy = new directory.device_winiaPurifierSettingHumidfy();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_winiaPurifier/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_winiaPurifierSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_winiaPurifierSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_winiaPurifierSettingVolume.render(data).$el);\r\n            self.$el.find('#plasma').html(App.view.device_winiaPurifierSettingPlasma.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_winiaPurifierSettingTurnOff.render(data).$el);\r\n            self.$el.find('#filterUsed').html(App.view.device_winiaPurifierSettingFilterUsed.render(data).$el);\r\n            self.$el.find('#disinfect').html(App.view.device_winiaPurifierSettingDisinfect.render(data).$el);\r\n            self.$el.find('#humidfy').html(App.view.device_winiaPurifierSettingHumidfy.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingDisinfect.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingDisinfect = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingDisinfect\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingFilterUsed = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingFilterUsed\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingHumidfy.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingHumidfy= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingHumidfy\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingInfomation= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingMode= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingPlasma.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingPlasma= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingPlasma\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingPower= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingTurnOff= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winiaPurifier/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winiaPurifierSettingVolume= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winiaPurifier/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierWinixNike = Backbone.View.extend({\r\n    initialize: function () {\r\n        //WinixNike\r\n        App.view.device_winixNikeSettingAlarm = new directory.device_winixNikeSettingAlarm();\r\n        App.view.device_winixNikeSettingFilterUsed = new directory.device_winixNikeSettingFilterUsed();\r\n        App.view.device_winixNikeSettingInfomation = new directory.device_winixNikeSettingInfomation();\r\n        App.view.device_winixNikeSettingMode = new directory.device_winixNikeSettingMode();\r\n        App.view.device_winixNikeSettingPlasmaWave = new directory.device_winixNikeSettingPlasmaWave();\r\n        App.view.device_winixNikeSettingPower = new directory.device_winixNikeSettingPower();\r\n        App.view.device_winixNikeSettingTurnOff = new directory.device_winixNikeSettingTurnOff();\r\n        App.view.device_winixNikeSettingVolume = new directory.device_winixNikeSettingVolume();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_winixNike/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_winixNikeSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_winixNikeSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_winixNikeSettingVolume.render(data).$el);\r\n            self.$el.find('#plasmaWave').html(App.view.device_winixNikeSettingPlasmaWave.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_winixNikeSettingTurnOff.render(data).$el);\r\n            self.$el.find('#filterUsed').html(App.view.device_winixNikeSettingFilterUsed.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_winixNikeSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winixNikeSettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_winixNikeSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winixNikeSettingInfomation.render(data).$el);\r\n        }\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingFilterUsed = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingFilterUsed\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingMode = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingPlasmaWave.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingPlasmaWave = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingPlasmaWave\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingPower = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingTurnOff = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixNike/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixNikeSettingVolume = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixNike/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixTitan/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierWinixTaitan = Backbone.View.extend({\n    initialize: function () {\n        //위닉스 타이탄\n        App.view.device_winixTitanSettingAlarm = new directory.device_winixTitanSettingAlarm();\n        App.view.device_winixTitanSettingFilterUsed = new directory.device_winixTitanSettingFilterUsed();\n        App.view.device_winixTitanSettingInfomation = new directory.device_winixTitanSettingInfomation();\n        App.view.device_winixTitanSettingMode = new directory.device_winixTitanSettingMode();\n        App.view.device_winixTitanSettingPlasmaWave = new directory.device_winixTitanSettingPlasmaWave();\n        App.view.device_winixTitanSettingPower = new directory.device_winixTitanSettingPower();\n        App.view.device_winixTitanSettingTurnOff = new directory.device_winixTitanSettingTurnOff();\n        App.view.device_winixTitanSettingVolume = new directory.device_winixTitanSettingVolume();\n        this.render();\n    },\n    render: function (data) {\n        var self = this;\n        // 템플릿팅\n        self.$el.html(templete[\"device_winixTitan/device\"](data));\n\n        if (App.vars.isSchoolCode === true) {\n            self.$el.find('#power').html(App.view.device_winixTitanSettingPower.render(data).$el);\n            self.$el.find('#mode').html(App.view.device_winixTitanSettingMode.render(data).$el);\n            self.$el.find('#volume').html(App.view.device_winixTitanSettingVolume.render(data).$el);\n            self.$el.find('#plasmaWave').html(App.view.device_winixTitanSettingPlasmaWave.render(data).$el);\n            //self.$el.find('#turnOff').html(App.view.device_winixTitanSettingTurnOff.render(data).$el);\n            self.$el.find('#filterUsed').html(App.view.device_winixTitanSettingFilterUsed.render(data).$el);\n            self.$el.find('#alarm').html(App.view.device_winiaPurifierSettingAlarm.render(data).$el);\n            self.$el.find('#infomation').html(App.view.device_winiaPurifierSettingInfomation.render(data).$el);\n        } else {\n            self.$el.find('#alarm').html(App.view.device_winixTitanSettingAlarm.render(data).$el);\n            self.$el.find('#infomation').html(App.view.device_winixTitanSettingInfomation.render(data).$el);\n        }\n        return self;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingAlarm = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingAlarm\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingFilterUsed = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingFilterUsed\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingInfomation = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingInfomation\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingMode= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingMode\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingPlasmaWave.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingPlasmaWave= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingPlasmaWave\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingPower = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingPower\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingTurnOff= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingTurnOff\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixTitan/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixTitanSettingVolume= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixTitan/settingVolume\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixXq/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierWinixXq = Backbone.View.extend({\r\n    initialize: function () {\r\n        //WinixXQ\r\n        App.view.device_winixXqSettingAlarm= new directory.device_winixXqSettingAlarm();\r\n        App.view.device_winixXqSettingFilterUsed = new directory.device_winixXqSettingFilterUsed();\r\n        App.view.device_winixXqSettingChildLock = new directory.device_winixXqSettingChildLock();\r\n        App.view.device_winixXqSettingMode = new directory.device_winixXqSettingMode();\r\n        App.view.device_winixXqSettingPlasmaWave = new directory.device_winixXqSettingPlasmaWave();\r\n        App.view.device_winixXqSettingPower = new directory.device_winixXqSettingPower();\r\n        App.view.device_winixXqSettingTurnOff = new directory.device_winixXqSettingTurnOff();\r\n        App.view.device_winixXqSettingVolume = new directory.device_winixXqSettingVolume();\r\n        App.view.device_winixXqSettingPollutionLamp = new directory.device_winixXqSettingPollutionLamp();\r\n        App.view.device_winixXqSettingUV= new directory.device_winixXqSettingUV();\r\n        App.view.device_winixXqSettingInfomation = new directory.device_winixXqSettingInfomation();\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        var self = this;\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"device_winixXq/device\"](data));\r\n\r\n        if (App.vars.isSchoolCode === true) {\r\n            self.$el.find('#power').html(App.view.device_winixXqSettingPower.render(data).$el);\r\n            self.$el.find('#mode').html(App.view.device_winixXqSettingMode.render(data).$el);\r\n            self.$el.find('#volume').html(App.view.device_winixXqSettingVolume.render(data).$el);\r\n            self.$el.find('#plasmaWave').html(App.view.device_winixXqSettingPlasmaWave.render(data).$el);\r\n            //self.$el.find('#turnOff').html(App.view.device_winixXqSettingTurnOff.render(data).$el);\r\n            self.$el.find('#filterUsed').html(App.view.device_winixXqSettingFilterUsed.render(data).$el);\r\n            self.$el.find('#alarm').html(App.view.device_winixXqSettingAlarm.render(data).$el);\r\n            self.$el.find('#childlock').html(App.view.device_winixXqSettingChildLock.render(data).$el);\r\n            self.$el.find('#pollutionlamp').html(App.view.device_winixXqSettingPollutionLamp.render(data).$el);\r\n            self.$el.find('#uv').html(App.view.device_winixXqSettingUV.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winixXqSettingInfomation.render(data).$el);\r\n        } else {\r\n            self.$el.find('#alarm').html(App.view.device_winixXqSettingAlarm.render(data).$el);\r\n            self.$el.find('#infomation').html(App.view.device_winixXqSettingInfomation.render(data).$el);\r\n        }\r\n\r\n\r\n        return self;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingAlarm = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingAlarm\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingChildLock.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingChildLock = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingChildLock\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingFilterUsed= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingFilterUsed\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingInfomation = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingInfomation\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingMode= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingMode\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingPlasmaWave.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingPlasmaWave= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingPlasmaWave\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingPollutionLamp.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingPollutionLamp= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingPollutionLamp\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingPower= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingPower\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingTurnOff= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingTurnOff\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingUV.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingUV= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingUV\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixXq/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixXqSettingVolume= Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixXq/settingVolume\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/device.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.airPurifierWinixZeroplus = Backbone.View.extend({\n    initialize: function () {\n        //위닉스 제로플러스\n        App.view.device_winixZeroplusSettingAlarm = new directory.device_winixZeroplusSettingAlarm();\n        App.view.device_winixZeroplusSettingFilterUsed = new directory.device_winixZeroplusSettingFilterUsed();\n        App.view.device_winixZeroplusSettingInfomation = new directory.device_winixZeroplusSettingInfomation();\n        App.view.device_winixZeroplusSettingMode = new directory.device_winixZeroplusSettingMode();\n        App.view.device_winixZeroplusSettingPlasmaWave = new directory.device_winixZeroplusSettingPlasmaWave();\n        App.view.device_winixZeroplusSettingPower = new directory.device_winixZeroplusSettingPower();\n        App.view.device_winixZeroplusSettingTurnOff = new directory.device_winixZeroplusSettingTurnOff();\n        App.view.device_winixZeroplusSettingVolume = new directory.device_winixZeroplusSettingVolume();\n        App.view.device_winixZeroplusSettingChildLock = new directory.device_winixZeroplusSettingChildLock();\n        this.render();\n    },\n    render: function (data) {\n        var self = this;\n        // 템플릿팅\n        self.$el.html(templete[\"device_winixZeroplus/device\"](data));\n\n        if (App.vars.isSchoolCode === true) {\n            self.$el.find('#power').html(App.view.device_winixZeroplusSettingPower.render(data).$el);\n            self.$el.find('#mode').html(App.view.device_winixZeroplusSettingMode.render(data).$el);\n            self.$el.find('#volume').html(App.view.device_winixZeroplusSettingVolume.render(data).$el);\n            self.$el.find('#plasmaWave').html(App.view.device_winixZeroplusSettingPlasmaWave.render(data).$el);\n            //self.$el.find('#turnOff').html(App.view.device_winixZeroplusSettingTurnOff.render(data).$el);\n            self.$el.find('#filterUsed').html(App.view.device_winixZeroplusSettingFilterUsed.render(data).$el);\n            self.$el.find('#alarm').html(App.view.device_winixZeroplusSettingAlarm.render(data).$el);\n            self.$el.find('#infomation').html(App.view.device_winixZeroplusSettingInfomation.render(data).$el);\n            self.$el.find('#childlock').html(App.view.device_winixZeroplusSettingChildLock.render(data).$el);\n        } else {\n            self.$el.find('#alarm').html(App.view.device_winixZeroplusSettingAlarm.render(data).$el);\n            self.$el.find('#infomation').html(App.view.device_winixZeroplusSettingInfomation.render(data).$el);\n        }\n        return self;\n    }\n\n\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingAlarm = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingAlarm\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingChildLock.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingChildLock = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function (data) {\r\n        this.$el.html(templete[\"device_winixZeroplus/settingChildLock\"](data));\r\n        return this;\r\n    }\r\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingFilterUsed.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingFilterUsed = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingFilterUsed\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingInfomation.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingInfomation = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingInfomation\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingMode.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingMode= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingMode\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingPlasmaWave.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingPlasmaWave= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingPlasmaWave\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingPower.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingPower = Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingPower\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingTurnOff.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingTurnOff= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data, turnOffMode) {\n        console.log(turnOffMode)\n        this.$el.html(templete[\"device_winixZeroplus/settingTurnOff\"](data, turnOffMode));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["device_winixZeroplus/settingVolume.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.device_winixZeroplusSettingVolume= Backbone.View.extend({\n    initialize: function () {\n        this.render();\n    },\n    render: function (data) {\n        this.$el.html(templete[\"device_winixZeroplus/settingVolume\"](data));\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["globalEvent/deviceEvent.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.deviceEventView = Backbone.View.extend({\r\n    initialize: function () {\r\n        this._assignElements();\r\n        this._attachEventHandlers();\r\n    },\r\n    _assignElements: function () {\r\n        this.welDoc = $(document.body);\r\n    },\r\n    _attachEventHandlers: function () {\r\n        //device 공통 이벤트\r\n        //체크박스\r\n        this.welDoc.on('change', '._power input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._childlock input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._plasmawave input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._pollutionlamp input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._uv input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._purifysignlamp input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._removevirus input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._ion input', $.proxy(this.clickCheck, this));\r\n        this.welDoc.on('change', '._humidfy input', $.proxy(this.clickCheck, this));\r\n        \r\n        //버튼\r\n        this.welDoc.on('click', '._mode a', $.proxy(this.clickBtn, this));\r\n        this.welDoc.on('click', '._volume a', $.proxy(this.clickBtn, this));\r\n        this.welDoc.on('click', '._favor a', $.proxy(this.clickBtn, this));\r\n\r\n        //필터 구매\r\n        this.welDoc.on('click', '._filterbuyurl', $.proxy(this.FilterBuyUrl, this));\r\n\r\n        //제품 가이드\r\n        this.welDoc.on('click', '._dvcguideurl', $.proxy(this.DvcGuideUrl, this));\r\n\r\n\r\n    },\r\n\r\n    /**\r\n     * 전원 제어\r\n     * @param evt\r\n     */\r\n    clickCheck: function (evt) {\r\n        var self = this;\r\n        var target = $(evt.currentTarget);\r\n        var oData = {\r\n            \"dvcCd\": target.data('dvccd'),          // 제품군 코드\r\n            \"rtnDvcId\": target.data('rtndvcid'),        // 인터페이스 디바이스 아이디 제어 PK\r\n            \"commandType\": target.data('fnccd'),                 // 디바이스 기능코드\r\n            \"requestValue\": \"\"                 // 컨트롤 밸류\r\n        }\r\n        //todo : polling\r\n        if (target.is(\":checked\")) {\r\n            //전원 켜짐\r\n            oData.requestValue = \"on\";\r\n        } else {\r\n            //전원 꺼짐\r\n            oData.requestValue = \"off\";\r\n        }\r\n        App.util.showLoading();\r\n        App.model.controlDeviceEach.fetch({\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Authorization\": App.vars.token,\r\n                \"Content-Type\": \"application/json;charset=UTF-8\",\r\n                \"company\": \"school\"\r\n            },\r\n            data: JSON.stringify(oData),\r\n            success: function (model, response) {\r\n                if (response.resultCd == 1) {\r\n                    if(\r\n                        $('.area_box_list').data('makernm') === '삼성전자' ||\r\n                        $('.area_box_list').data('makernm') === 'LG전자'\r\n                    ) {\r\n                        self.polling2(response.commandId, target.data('dvccd'), target.data('rtndvcid'));\r\n                    } else {\r\n                        self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));\r\n                    }\r\n                    // self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));\r\n                } else {\r\n                    App.util.hideLoading();\r\n                    App.util.toast(response.resultMsg);\r\n                    self.setDevice(target.data('dvccd'), target.data('rtndvcid'));\r\n                }\r\n            },\r\n            error: function (model, response) {\r\n                App.util.hideLoading();\r\n                // App.util.toast(response.responseJSON.resultMsg);\r\n                App.util.toast(response.resultMsg);\r\n                /*App.util.hideLoading();*/\r\n                App.util.openNetworkErrorPopup();\r\n                self.setDevice(target.data('dvccd'), target.data('rtndvcid'));\r\n            }\r\n        });\r\n    },\r\n    /**\r\n     * 전원 제어\r\n     * @param evt\r\n     */\r\n    clickBtn: function (evt) {\r\n        var self = this;\r\n        var target = $(evt.currentTarget).parent();\r\n        //todo : polling\r\n        //전원 켜짐\r\n        App.util.showLoading();\r\n        App.model.controlDeviceEach.fetch({\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Authorization\": App.vars.token,\r\n                \"Content-Type\": \"application/json;charset=UTF-8\",\r\n                \"company\": \"school\"\r\n            },\r\n            data: JSON.stringify({\r\n                \"dvcCd\": target.data('dvccd'),          // 제품군 코드\r\n                \"rtnDvcId\": target.data('rtndvcid'),        // 인터페이스 디바이스 아이디 제어 PK\r\n                \"commandType\": target.data('fnccd'),                 // 디바이스 기능코드\r\n                \"requestValue\": target.data('fncval')                // 컨트롤 밸류\r\n            }),\r\n            success: function (model, response) {\r\n                if (response.resultCd == 1) {\r\n                    if(\r\n                        $('.area_box_list').data('makernm') === '삼성전자' ||\r\n                        $('.area_box_list').data('makernm') === 'LG전자'\r\n                    ) {\r\n                        self.polling2(response.commandId, target.data('dvccd'), target.data('rtndvcid'));\r\n                    } else {\r\n                        self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));\r\n                    }\r\n                    // self.polling1(response.commandId, target.data('dvccd'), target.data('rtndvcid'));\r\n                    // if((self.makerCd == \"017\") ||\r\n                    //     (self.makerCd == \"031\" && self.getDeviceFocus().hasClass('smart_device_airfresh')) ||\r\n                    //     (self.makerCd == \"031\" && self.getDeviceFocus().hasClass('smart_device_aircondition'))){\r\n                    //     commandPolling = \"commandPollingSecondModel\"; // 폴링2 모델\r\n                    // }else{\r\n                    //     commandPolling = \"commandPollingModel\"; // 폴링1 모델\r\n                    // }\r\n                } else {\r\n                    App.util.hideLoading();\r\n                    App.util.toast(response.resultMsg);\r\n                    self.setDevice(target.data('dvccd'), target.data('rtndvcid'));\r\n                }\r\n            },\r\n            error: function (model, response) {\r\n                App.util.hideLoading();\r\n                App.util.toast(response.resultMsg);\r\n                self.setDevice(target.data('dvccd'), target.data('rtndvcid'));\r\n            }\r\n        });\r\n    },\r\n    polling1: function (commandId, dvccd, rtndvcid) {\r\n        var self = this;\r\n        var count = 0;\r\n        clearInterval(App.timer.polling1);\r\n        App.timer.polling1 = setInterval(function () {\r\n            App.model.commandPolling.fetch({\r\n                headers: {\r\n                    \"Authorization\": App.vars.token,\r\n                    \"Content-Type\": \"application/json;charset=UTF-8\",\r\n                    \"company\": \"school\"\r\n                },\r\n                data: {\r\n                    \"commandId\": commandId          // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId\r\n                },\r\n                success: function (model, response) {\r\n                    if (response.pollingList.length > 0) {\r\n                        if (response.pollingList[0].result == 1) {\r\n\r\n                            if (response.pollingList[0].fncCd == \"D03\") {\r\n                                if (response.pollingList[0].fncVal == \"on\") {\r\n                                    var isStatus = true;\r\n                                } else {\r\n                                    var isStatus = false;\r\n                                }\r\n                            }\r\n\r\n\r\n                            App.util.hideLoading();\r\n                            clearInterval(App.timer.polling1);\r\n                            self.setDevice(dvccd, rtndvcid, isStatus);\r\n\r\n\r\n                        } else if (response.pollingList[0].result == 0) {\r\n                            if (count < 10) {\r\n                                count++;\r\n                            } else {\r\n                                clearInterval(App.timer.polling1);\r\n                            }\r\n                        } else {\r\n                            App.util.hideLoading();\r\n                            App.util.toast(response.resultMsg);\r\n                            self.setDevice(dvccd, rtndvcid);\r\n                            clearInterval(App.timer.polling1);\r\n                        }\r\n                    }\r\n\r\n                    // this.statusOn();\r\n                    // this.statusOff();\r\n                }\r\n            });\r\n        }, 1000);\r\n\r\n    },\r\n    polling2: function (commandId, dvccd, rtndvcid) {\r\n        var self = this;\r\n        var count = 0;\r\n        clearInterval(App.timer.polling1);\r\n        App.timer.polling2 = setInterval(function () {\r\n            App.model.commandPolling_2.fetch({\r\n                headers: {\r\n                    \"Authorization\": App.vars.token,\r\n                    \"Content-Type\": \"application/json;charset=UTF-8\",\r\n                    \"company\": \"school\"\r\n                },\r\n                data: {\r\n                    \"commandId\": commandId          // 디바이스 제어 ID(필수): 디바이스 제어에서 받는 commandId\r\n                },\r\n                success: function (model, response) {\r\n                    if (response.pollingList.length > 0) {\r\n                        if (response.pollingList[0].result == 1) {\r\n\r\n\r\n                            if (response.pollingList[0].fncCd == \"D03\") {\r\n                                if (response.pollingList[0].fncVal == \"on\") {\r\n                                    var isStatus = true;\r\n                                } else {\r\n                                    var isStatus = false;\r\n                                }\r\n                            }\r\n\r\n\r\n                            App.util.hideLoading();\r\n                            clearInterval(App.timer.polling2);\r\n                            self.setDevice(dvccd, rtndvcid);\r\n\r\n\r\n                        } else if (response.pollingList[0].result == 0) {\r\n                            if (count < 10) {\r\n                                count++;\r\n                            } else {\r\n                                clearInterval(App.timer.polling2);\r\n                            }\r\n                        } else {\r\n                            App.util.hideLoading();\r\n                            App.util.toast(response.resultMsg);\r\n                            self.setDevice(dvccd, rtndvcid);\r\n                            clearInterval(App.timer.polling2);\r\n                        }\r\n                    }\r\n\r\n                }\r\n            });\r\n        }, 1000);\r\n    },\r\n\r\n    setDevice: function (nIndex) {\r\n        var self = this;\r\n        var newIndex = App.view.schoolDetail.detailSlider.getCurrentSlide();\r\n        var code = App.vars.oSchoolDetail.oDeviceInfo[newIndex].dvcCd;\r\n        var rtnDvcId = App.vars.oSchoolDetail.oDeviceInfo[newIndex].rtnDvcId;\r\n        var data = App.vars.oSchoolDetail.oDeviceInfo[newIndex];\r\n\r\n        /**\r\n         * 학교 기기 상세 조회\r\n         */\r\n        App.model.deviceDetailRefer.fetch({\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Authorization\": App.vars.token,\r\n                \"Content-Type\": \"application/json\",\r\n                \"company\": \"school\"\r\n            },\r\n            data: JSON.stringify(App.vars.oSchoolDetail.rtnDvcIdList[newIndex]),\r\n            success: function (model, response) {\r\n                var getDeviceControl = App.util.getDeviceControl(code, response.userDeviceList[0]);\r\n                var welSensorInfoList = getDeviceControl.$el.find('.box_air_all ul');\r\n\r\n                // 센서 정보 갯수에따라 그리드 클래스 추가\r\n                welSensorInfoList.addClass('col' + welSensorInfoList.find('li').length);\r\n                $('.wrap_area_box_list').empty()\r\n                    .html(getDeviceControl.$el);\r\n                var isStatus;\r\n                response.userDeviceList[0].openDeviceList.forEach(function (a, i) {\r\n                    if (a.fncCd === \"D03\") {\r\n                        if (a.fncVal === \"on\") {\r\n                            isStatus = true;\r\n                        } else {\r\n                            isStatus = false;\r\n                        }\r\n                    }\r\n                });\r\n\r\n                if (isStatus === true) {\r\n                    self.statusOn();\r\n                } else if (isStatus === false) {\r\n                    self.statusOff();\r\n                }\r\n\r\n                if (response.dvcKindCd == \"032\") {\r\n                    App.view.schoolDetail.setChart(newIndex);\r\n                }\r\n\r\n\r\n                App.util.hideLoading();\r\n\r\n            },\r\n            error: function (e) {\r\n                App.util.hideLoading();\r\n            }\r\n        });\r\n    },\r\n    statusOn: function () {\r\n        var welList = $('.wrap_area_box_list');\r\n        var welTopArea = $('.area_school_air');\r\n        welList.find('.box_card').removeClass('off');\r\n        welTopArea.find('.slider').find('.active').removeClass('off');\r\n        welTopArea.find('.bx-pager .bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).removeClass('off');\r\n    },\r\n    statusOff: function () {\r\n        var welList = $('.wrap_area_box_list');\r\n        var welTopArea = $('.area_school_air');\r\n        // welList.find('.box_card').addClass('off');\r\n        //welTopArea.find('.bx-pager .bx-pager-item').addClass('off');\r\n\r\n\r\n        App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx].openDeviceList.forEach(function (array, index) {\r\n            if (array.fncCd === 'D03') {\r\n                if(array.fncVal ==\"off\"){\r\n                    welList.find('.box_card').each(function () {\r\n                        if (\r\n                            $(this).hasClass('_filterused') === true ||\r\n                            $(this).hasClass('_alarm') === true ||\r\n                            $(this).hasClass('_infomation') === true\r\n                        ) {\r\n                            return false;\r\n                        } else {\r\n                            $(this).addClass('off');\r\n                        }\r\n                    });\r\n                    welList.find('input').prop('checked', false);\r\n                    welTopArea.find('.slider').find('.active').addClass('off')\r\n                    welTopArea.find('.bx-pager .bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).addClass('off');\r\n                }\r\n\r\n            }\r\n        })\r\n\r\n\r\n\r\n    },\r\n    FilterBuyUrl : function (e) {\r\n        var target = $(e.currentTarget);\r\n        var url = target.children().data(\"link\");\r\n\r\n        if (typeof window.AirManager !== 'undefined') {\r\n            // android\r\n            window.AirManager.fnName(url);\r\n        } else if (typeof window.webkit !== 'undefined') {\r\n            // ios\r\n            var message = {\r\n                command: \"fnName\",\r\n                url: url\r\n            };\r\n            window.webkit.messageHandlers.AirManager.postMessage(message);\r\n        } else {\r\n            // pc\r\n            alert(url)\r\n        }\r\n    },\r\n    DvcGuideUrl : function (e) {\r\n        var target = $(e.currentTarget);\r\n        var url = target.children().data(\"link\");\r\n\r\n        if (typeof window.AirManager !== 'undefined') {\r\n            // android\r\n            window.AirManager.fnName(url);\r\n        } else if (typeof window.webkit !== 'undefined') {\r\n            // ios\r\n            var message = {\r\n                command: \"fnName\",\r\n                url: url\r\n            };\r\n            window.webkit.messageHandlers.AirManager.postMessage(message);\r\n        } else {\r\n            // pc\r\n            alert(url)\r\n        }\r\n    }\r\n\r\n\r\n});\r\n";
},"useData":true});

this["templete"]["globalEvent/globalEvent.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.globalEventView = Backbone.View.extend({\r\n    el: \"body\",\r\n    bLiogin: false,\r\n    localeData: {\r\n        \"sidoCd\": \"\",\r\n        \"siguCd\": \"\",\r\n        \"schType\": \"\"\r\n    },\r\n    oSearchAutoText: {\r\n        \"serKey\": \"\",\r\n        \"size\": \"0\",\r\n        \"offset\": \"0\"\r\n    },\r\n    searchText: {\r\n        \"serKey\": \"\",\r\n        \"size\": \"0\",\r\n        \"offset\": \"0\",\r\n        \"loginId\": App.vars.loginId\r\n    },\r\n    oRegisterInfo: {\r\n        \"loginId\": App.vars.loginId,\r\n        \"schCd\": \"\",\r\n        \"lv\": \"\",\r\n        \"cls\": \"\"\r\n    },\r\n    oDeleteInfo: {\r\n        \"loginId\": App.vars.loginId,\r\n        \"userSchId\": \"\"\r\n    },\r\n    sSelectedSchoolTitle: null,\r\n    initialize: function () {\r\n        this._assignElements();\r\n        this._attachEventHandlers();\r\n\r\n    },\r\n    _assignElements: function () {\r\n        this.welDoc = $(document.body);\r\n    },\r\n    _attachEventHandlers: function () {\r\n        var self = this;\r\n        this.welDoc.on('click', 'a[href=\"#\"]', $.proxy(this.prevent, this));\r\n        // 학교 리스트보기 페이지로 이동\r\n        this.welDoc.on('click', '._goToLocaleList', $.proxy(this.goToLocaleList, this));\r\n        // 이력 및 알림 페이지로 이동\r\n        this.welDoc.on('click', '._goToHistoryAlarm', $.proxy(this.goToHistoryAlarm, this));\r\n        // 정보 상세 페이지로 이동\r\n        this.welDoc.on('click', '._goToInformationDetail', $.proxy(this.goToInformationDetail, this));\r\n        // 공기리포트 상세 페이지로 이동\r\n        //this.welDoc.on('click', '._goToAirReportDetail', $.proxy(this.goToAirReportDetail, this));\r\n        // 내 학교 페이지로 이동\r\n        this.welDoc.on('click', '._mySchoolList', $.proxy(this.mySchoolList, this));\r\n        // 메인 맵 페이지로 이동\r\n        this.welDoc.on('click', '._moveMainPage', $.proxy(this.moveMainPage, this));\r\n        // 이전 페이지로 이동\r\n        this.welDoc.on('click', '._btnPrevPage', $.proxy(this.movePrevPage, this));\r\n        this.welDoc.on('click', '._fnMoveMyLocation', $.proxy(this.moveMyLocation, this));\r\n        this.welDoc.on('click', '._fnRefresh', $.proxy(this.initMap, this));\r\n        this.welDoc.on('click', '._fnAccordionMenu > li > a', $.proxy(this.accordionMenu, this));\r\n        this.welDoc.on('click', '._tabs li.visited > a', $.proxy(this.tabMenu, this));\r\n        this.welDoc.on('click', '._subTabs li > a', $.proxy(this.subTabMenu, this));\r\n        this.welDoc.on('click', '._localeSelect li > a', $.proxy(this.localeSelect, this));\r\n        this.welDoc.on('focus', '.search_box .text_box', $.proxy(this.inputDeleteButtonShow, this));\r\n        this.welDoc.on('blur', '.search_box .text_box', $.proxy(this.inputDeleteButtonHide, this));\r\n        this.welDoc.on('keyup', '.search_box .text_box', $.proxy(this.autoCompleteSearch, this));\r\n        this.welDoc.on('click', '.search_box .btn_search', $.proxy(this.addInputRecentList, this));\r\n        this.welDoc.on('click', '.btn_all_delete', $.proxy(this.openAllSchoolDeleteDialog, this));\r\n        this.welDoc.on('click', '.btn_input_delete', $.proxy(this.inputValueDelete, this));\r\n        this.welDoc.on('click', '._cardSlideLink', $.proxy(this.goToSchoolDetail, this));\r\n        this.welDoc.on('click', '.area_search_wrap .btn_delete', $.proxy(this.deleteRecentSearchList, this));\r\n        this.welDoc.on('click', '._searchList li a', $.proxy(this.clickRecentList, this));\r\n        this.welDoc.on('click', '._schoolResultList li a', $.proxy(this.clickResultList, this));\r\n        this.welDoc.on('click', '._searchResultList li a', $.proxy(this.clickSchoolResultList, this));\r\n        this.welDoc.on('click', '._clickOutSensor', $.proxy(this.clickOutSensor, this));\r\n        this.welDoc.on('click', '._registerMySchool', $.proxy(this.registerMySchool, this));\r\n        // 메뉴 호출\r\n        this.welDoc.on('click', '._openAllMenu', $.proxy(this.openAllMenu, this));\r\n        this.welDoc.on('click', '._moveToSearchSchool', $.proxy(this.moveToSearchSchool, this));\r\n        // this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToAirMultiSensor, this));\r\n        // this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToAirPurifier, this));\r\n        this.welDoc.on('click', '._moveToDetail', $.proxy(this.moveToDetail, this));\r\n\r\n        // 시간 설정 팝업\r\n        this.welDoc.on('click', '._openPopupSettingTImer', $.proxy(this.openPopupSettingTImer, this));\r\n        this.welDoc.on('click', '._closePopupSettingTImer', $.proxy(this.closePopupSettingTImer, this));\r\n        this.welDoc.on('click', '._confirmPopupSettingTImer', $.proxy(this.confirmPopupSettingTImer, this));\r\n        this.welDoc.on('click', '._releasePopupSettingTImer', $.proxy(this.releasePopupSettingTImer, this));\r\n        // 시간 설정 팝업 (몽블랑D)\r\n        this.welDoc.on('click', '._settingAfterHours li a', $.proxy(this.settingAfterHours, this));\r\n\r\n        // 학교 전체 삭제 팝업\r\n        this.welDoc.on('click', '.popup_delete ._btnCancel', $.proxy(this.allSchoolDeleteCancel, this));\r\n        this.welDoc.on('click', '.popup_delete ._btnConfirm', $.proxy(this.allSchoolDeleteConfirm, this));\r\n\r\n        // 공기리포트 이동\r\n        this.welDoc.on('click', '.btn_report', $.proxy(this.moveToAirReport, this));\r\n        //device 공통 이벤트\r\n\r\n        this.welDoc.on('click', '._btnOkError', $.proxy(this.errorPopupClose, this));\r\n\r\n        //connStatYn N 상태일 때\r\n        this.welDoc.on('click', '.wrap_contents .box_card ._btnConnectErrorClose', $.proxy(this.connectErrorPopupClose, this));\r\n\r\n\r\n        setTimeout(function () {\r\n            $('body').find('>div').on('swipedown', function (e, touch) {\r\n                self.refreshPullDown(e, touch)\r\n            });\r\n        }, 500)\r\n\r\n\r\n    },\r\n    moveToAirReport: function () {\r\n        /*window.location.hash =\"#airReport\";*/\r\n    },\r\n    moveToSearchSchool: function () {\r\n        window.location.hash = \"#searchSchool\";\r\n    },\r\n    moveToAirMultiSensor: function () {\r\n        window.location.hash = \"#airMultiSensor\";\r\n    },\r\n    moveToAirPurifier: function () {\r\n        window.location.hash = \"#airPurifier\";\r\n    },\r\n    moveToDetail: function (event) {\r\n        var target = $(event.currentTarget);\r\n\r\n        App.vars.oSchoolDetail = {\r\n            rtnDvcIdList: [],\r\n            oDeviceInfo: [],\r\n            oDeviceInfoRoot: [],\r\n            dvcIdList: [],\r\n            intariorSensorChartData: [],\r\n            nIdx: target.parents('li').index()\r\n        };\r\n\r\n        target.parents('#deviceList').find('>li').each(function () {\r\n            var rtnDvcIdListData = {\"rtnDvcId\": $(this).data('dvcid')};\r\n            var dvcIdListData = {\"dvcId\": $(this).data('dvcid')};\r\n\r\n            App.vars.oSchoolDetail.rtnDvcIdList.push(rtnDvcIdListData);\r\n            App.vars.oSchoolDetail.dvcIdList.push(dvcIdListData);\r\n        });\r\n\r\n        //로그인 schcd\r\n        App.vars.isSchoolCode = false;\r\n\r\n        // 학교코드와 기기코드 비교\r\n        if (App.vars.schCd !== undefined) {\r\n            if (target.data('schcd') === App.vars.schCd) {\r\n                App.vars.isSchoolCode = true;\r\n            }\r\n        }\r\n\r\n        if (App.vars.loginId) {\r\n            window.location.hash = \"#schoolDetail\";\r\n        } else {\r\n            /*if(isMobile.Android()){\r\n                window.AirManager.callLoginView();\r\n            }else{\r\n                window.webkit.messageHandlers.AirManager.postMessage({command:\"callLoginView\"});\r\n            }*/\r\n\r\n            if (typeof window.AirManager !== 'undefined') {\r\n                // android\r\n                window.AirManager.callLoginView();\r\n            } else if (typeof window.webkit !== 'undefined') {\r\n                // ios\r\n                window.webkit.messageHandlers.AirManager.postMessage({command: \"callLoginView\"});\r\n            } else {\r\n                // pc\r\n            }\r\n            App.vars.afterLogin = \"schoolDetail\"\r\n        }\r\n    },\r\n\r\n    openAllMenu: function () {\r\n\r\n        /*if(isMobile.Android()){\r\n            window.AirManager.callSideMenu();\r\n        }else{\r\n            window.webkit.messageHandlers.AirManager.postMessage({command:\"callSideMenu\"});\r\n        }*/\r\n\r\n        if (typeof window.AirManager !== 'undefined') {\r\n            // android\r\n            window.AirManager.callSideMenu();\r\n        } else if (typeof window.webkit !== 'undefined') {\r\n            // ios\r\n            window.webkit.messageHandlers.AirManager.postMessage({command: \"callSideMenu\"});\r\n        } else {\r\n            // pc\r\n        }\r\n    },\r\n    movePrevPage: function () {\r\n        // if (App.vars.multipleWebapp) {\r\n        //     if (window.history.length <= 3) {\r\n        //         if (typeof window.AirManager !== 'undefined') {\r\n        //             // android\r\n        //             window.AirManager.callAppExit();\r\n        //         } else if (typeof window.webkit !== 'undefined') {\r\n        //             // ios\r\n        //             window.webkit.messageHandlers.AirManager.postMessage({command:\"callAppExit\"});\r\n        //         } else {\r\n        //             // pc\r\n        //             alert('앱 종료 혹은 웹뷰 종료');\r\n        //         }\r\n        //     } else {\r\n        //         window.history.back();\r\n        //     }\r\n        // } else {\r\n        // $('h1').text(window.history.length);\r\n        // setTimeout(function () {\r\n\r\n\r\n        if (App.router.history.length <= 2 ||\r\n            (window.location.hash == \"#home\" && App.mainMap.zoom < 17) ||\r\n            window.location.hash == \"mySchool\" ||\r\n            window.location.hash == \"\") {\r\n\r\n            if (typeof window.AirManager !== 'undefined') {\r\n                // android\r\n                window.AirManager.callAppExit();\r\n            } else if (typeof window.webkit !== 'undefined') {\r\n                // ios\r\n                window.webkit.messageHandlers.AirManager.postMessage({command: \"callAppExit\"});\r\n            } else {\r\n                // pc\r\n                alert('앱 종료 혹은 웹뷰 종료');\r\n            }\r\n        } else if (window.location.hash == \"#home\" && App.mainMap.zoom >= 17) {\r\n            App.view.globalEventView.initMap();\r\n        } else {\r\n            //todo\r\n            App.router.history.pop();\r\n            return App.router.navigate(App.router.history.pop(), true);\r\n        }\r\n\r\n\r\n        // if (window.history.length <= 2) {\r\n        //     if (typeof window.AirManager !== 'undefined') {\r\n        //         // android\r\n        //         window.AirManager.callAppExit();\r\n        //     } else if (typeof window.webkit !== 'undefined') {\r\n        //         // ios\r\n        //         window.webkit.messageHandlers.AirManager.postMessage({command:\"callAppExit\"});\r\n        //     } else {\r\n        //         // pc\r\n        //         alert('앱 종료 혹은 웹뷰 종료');\r\n        //     }\r\n        // } else {\r\n        //     window.history.back();\r\n        // }\r\n        // },2000)\r\n\r\n        // }\r\n\r\n    },\r\n    registerMySchool: function (e) {\r\n        var self = this;\r\n        var elRegisterCheckbox = $(e.currentTarget);\r\n        if (elRegisterCheckbox.prop('checked')) {\r\n            console.log(\"elRegisterCheckbox=======> \", elRegisterCheckbox);\r\n            self.oRegisterInfo.schCd = elRegisterCheckbox.data('school-id');\r\n            self.oRegisterInfo.lv = elRegisterCheckbox.data('lv');\r\n            self.oRegisterInfo.cls = elRegisterCheckbox.data('cls');\r\n            self.oRegisterInfo.loginId = App.vars.loginId;\r\n            console.log(self.oRegisterInfo);\r\n            console.log(elRegisterCheckbox.prop('checked'));\r\n            App.view.mySchoolDetail.registerMySchool(self.oRegisterInfo);\r\n\r\n        } else {\r\n            self.oDeleteInfo.userSchId = elRegisterCheckbox.attr('id');\r\n            self.oDeleteInfo.loginId = App.vars.loginId;\r\n            elRegisterCheckbox.attr('id', '');\r\n            App.view.mySchoolDetail.deleteMySchool(self.oDeleteInfo);\r\n\r\n        }\r\n\r\n    },\r\n    addInputRecentList: function () {\r\n        var self = this;\r\n        var sInputValue = $('.search_box .text_box').val();\r\n        self.searchText.serKey = sInputValue;\r\n        self.searchText.loginId = App.vars.loginId;\r\n        App.view.searchSchool.addRecentSearchList(self.searchText);\r\n        App.view.searchSchool.searchResultTempleteBinding(self.searchText);\r\n    },\r\n    openAllSchoolDeleteDialog: function () {\r\n        App.util.openAllSchoolDeletePopup();\r\n    },\r\n    allSchoolDeleteCancel: function () {\r\n        App.util.closeAllSchoolDeletePopup();\r\n        console.log(1)\r\n    },\r\n    allSchoolDeleteConfirm: function () {\r\n        var nTargetListId = \"all\";\r\n        App.view.searchSchool.deleteRecentSearchList(nTargetListId);\r\n        App.util.closeAllSchoolDeletePopup();\r\n        console.log(1)\r\n    },\r\n    autoCompleteSearch: function () {\r\n        var self = this;\r\n        var sInputValue = $('.search_box .text_box').val();\r\n        if (sInputValue !== \"\" && sInputValue.length >= 2) {\r\n            self.oSearchAutoText.serKey = sInputValue;\r\n            App.view.searchSchool.autoCompleteSearch(self.oSearchAutoText);\r\n        } else if (sInputValue.length == 0) {\r\n            App.view.searchSchool.searchRecentTempleteBinding();\r\n        }\r\n    },\r\n    inputDeleteButtonShow: function () {\r\n        var elBtnDelete = $('.btn_input_delete');\r\n        elBtnDelete.css({opacity: 1})\r\n    },\r\n    inputDeleteButtonHide: function () {\r\n        var elBtnDelete = $('.btn_input_delete');\r\n        elBtnDelete.css({opacity: 0})\r\n    },\r\n    inputValueDelete: function () {\r\n        var self = this;\r\n        var elSearchInput = $('.text_box');\r\n        elSearchInput.val('').focus();\r\n        App.view.searchSchool.searchRecentTempleteBinding();\r\n    },\r\n    clickRecentList: function (evt) {\r\n        var self = this;\r\n        var targetText = $(evt.currentTarget).text();\r\n        self.searchText.serKey = targetText;\r\n        self.searchText.loginId = App.vars.loginId;\r\n        App.view.searchSchool.searchResultTempleteBinding(self.searchText);\r\n    },\r\n    clickOutSensor: function (evt) {\r\n        var target = $(evt.currentTarget);\r\n        var nSchoolCode = target.data('school-code');\r\n        var sSchoolTitle = target.data('school-name');\r\n        // 학교이름 저장\r\n        App.vars.oSchoolCode = nSchoolCode;\r\n        App.vars.sSelectedSchoolTitle = sSchoolTitle;\r\n\r\n        window.location.hash = \"#mySchoolDetail\";\r\n    },\r\n    clickResultList: function (evt) {\r\n        var target = $(evt.currentTarget);\r\n        var nSchoolCode = target.data('school-code');\r\n        // 학교이름 저장\r\n        App.vars.oSchoolCode = nSchoolCode;\r\n        App.vars.sSelectedSchoolTitle = target.find('p').text();\r\n\r\n        if (App.vars.loginId) {\r\n            window.location.hash = \"#mySchoolDetail\";\r\n        } else {\r\n            if (typeof window.AirManager !== 'undefined') {\r\n                // android\r\n                window.AirManager.callLoginView();\r\n            } else if (typeof window.webkit !== 'undefined') {\r\n                window.webkit.messageHandlers.AirManager.postMessage({command: \"callLoginView\"});\r\n            }\r\n            /*if(isMobile.Android()){\r\n                window.AirManager.callLoginView();\r\n            }else{\r\n                window.webkit.messageHandlers.AirManager.postMessage({command:\"callLoginView\"});\r\n            }*/\r\n            App.vars.afterLogin = \"mySchoolDetail\";\r\n        }\r\n\r\n    },\r\n    clickSchoolResultList: function (evt) {\r\n        var target = $(evt.currentTarget);\r\n        var nSchoolCode = target.data('school-code');\r\n        var sSchoolTitle = target.find('.school_name').text();\r\n        // 학교이름 저장\r\n        App.vars.oSchoolCode = nSchoolCode;\r\n        App.vars.sSelectedSchoolTitle = sSchoolTitle;\r\n        if (target.hasClass('_detailLink')) {\r\n            if (App.vars.loginId) {\r\n                window.location.hash = \"#mySchoolDetail\";\r\n            } else {\r\n                if (typeof window.AirManager !== 'undefined') {\r\n                    // android\r\n                    window.AirManager.callLoginView();\r\n                } else if (typeof window.webkit !== 'undefined') {\r\n                    window.webkit.messageHandlers.AirManager.postMessage({command: \"callLoginView\"});\r\n                }\r\n                /*if(isMobile.Android()){\r\n                    window.AirManager.callLoginView();\r\n                }else{\r\n                    window.webkit.messageHandlers.AirManager.postMessage({command:\"callLoginView\"});\r\n                }*/\r\n                App.vars.afterLogin = \"mySchoolDetail\";\r\n            }\r\n        }\r\n    },\r\n    tabMenu: function (event) {\r\n        var self = this;\r\n        var target = $(event.currentTarget);\r\n        var elTabMenu = $('.tab-menu li');\r\n        var elFocusMenu = $('.tab-menu li.focus');\r\n        var ntabMenuIndex = target.parent().index();\r\n        target.parent().addClass('focus').removeClass('visited').siblings().removeClass('focus');\r\n        if (ntabMenuIndex == \"0\") {\r\n            self.localeData = {\r\n                \"sidoCd\": \"\",\r\n                \"siguCd\": \"\",\r\n                \"schType\": \"\"\r\n            };\r\n            elTabMenu.removeClass('visited');\r\n            elTabMenu.eq(1).find('a').text('시/군/구');\r\n            App.view.localeList.selectLocale[1].selectItem = null;\r\n        } else {\r\n            self.localeData.siguCd = \"\";\r\n            self.localeData.schType = \"\";\r\n        }\r\n\r\n        App.view.localeList.siguTempleteBinding(self.localeData);\r\n    },\r\n    subTabMenu: function (event) {\r\n        var target = $(event.currentTarget);\r\n        var ntabMenuIndex = target.parent().index();\r\n        var elTabContents = $('.tab-contents > div');\r\n\r\n        target.parent().addClass('focus').siblings().removeClass('focus');\r\n        elTabContents.eq(ntabMenuIndex).addClass('active').siblings().removeClass('active');\r\n    },\r\n    localeSelect: function (event) {\r\n        var self = this;\r\n        var target = $(event.currentTarget);\r\n        var elFocusTab = $('.tab-menu ul li.focus');\r\n        var elFocusTabLink = $('.tab-menu ul li.focus a');\r\n        var nFocusTabIndex = $('.tab-menu ul li.focus').index();\r\n        var nSeletedItemIndex = target.parent().index();\r\n        var sLocaleText = target.text();\r\n        var code = target.data('locale-code');\r\n        // 탭 텍스트 변경\r\n        elFocusTabLink.text(sLocaleText);\r\n\r\n        // 지역 선택\r\n        target.parent().addClass('selected').siblings().removeClass('selected');\r\n\r\n        // 시도 및 시군구 코드값 전달\r\n        if (nFocusTabIndex == 0) {\r\n            self.localeData = {\r\n                \"sidoCd\": code,\r\n                \"siguCd\": \"\",\r\n                \"schType\": \"\"\r\n            };\r\n            elFocusTab.addClass('visited').removeClass('focus').next().addClass('focus');\r\n        }\r\n        if (nFocusTabIndex == 1) {\r\n            self.localeData.siguCd = code;\r\n            self.localeData.schType = \"1\";\r\n            elFocusTab.addClass('visited').removeClass('focus').next().addClass('focus');\r\n        }\r\n        if (nFocusTabIndex == 2) {\r\n            self.localeData.schType = code;\r\n        }\r\n\r\n        App.view.localeList.siguTempleteBinding(self.localeData);\r\n        App.view.localeList.selectLocale[nFocusTabIndex] = {\"selectItem\": nSeletedItemIndex}\r\n\r\n    },\r\n    accordionMenu: function (event) {\r\n        var target = $(event.currentTarget);\r\n        target.parent().toggleClass('current')\r\n    },\r\n    initMap: function (evt) {\r\n        /*App.view.homeMain.mainMap.destroy();*/\r\n        App.view.homeMain.refreshMap(evt);\r\n    },\r\n    moveMyLocation: function () {\r\n        if (App.vars.loginId) {\r\n            App.view.homeMain.moveMyLocation();\r\n        } else {\r\n            if (typeof window.AirManager !== 'undefined') {\r\n                // android\r\n                window.AirManager.callLoginView();\r\n            } else if (typeof window.webkit !== 'undefined') {\r\n                window.webkit.messageHandlers.AirManager.postMessage({command: \"callLoginView\"});\r\n            }\r\n            /*if(isMobile.Android()){\r\n                window.AirManager.callLoginView();\r\n            }else{\r\n                window.webkit.messageHandlers.AirManager.postMessage({command:\"callLoginView\"});\r\n            }*/\r\n        }\r\n\r\n    },\r\n    goToLocaleList: function () {\r\n        if (window.location.hash == \"#home\" || window.location.hash == \"#mySchool\") {\r\n            window.location.hash = \"#localeList\";\r\n        } else {\r\n            window.location.hash = \"#home\";\r\n        }\r\n    },\r\n    mySchoolList: function () {\r\n\r\n        if (App.vars.loginId) {\r\n            window.location.hash = \"#mySchool\";\r\n        } else {\r\n            if (typeof window.AirManager !== 'undefined') {\r\n                // android\r\n                window.AirManager.callLoginView();\r\n            } else if (typeof window.webkit !== 'undefined') {\r\n                window.webkit.messageHandlers.AirManager.postMessage({command: \"callLoginView\"});\r\n            }\r\n            App.vars.afterLogin = \"mySchool\"\r\n        }\r\n\r\n    },\r\n    moveMainPage: function () {\r\n        window.location.hash = \"#home\";\r\n    },\r\n    goToHistoryAlarm: function (e) {\r\n        var target = $(e.currentTarget);\r\n        var rtnDvcId = target.data(\"rtndvcid\");\r\n        if (target.hasClass('icon_check')) {\r\n                App.vars.rtnDvcId = '';\r\n        }else{\r\n            App.vars.rtnDvcId = rtnDvcId;\r\n        }\r\n        App.vars.prevLocation = window.location.hash;\r\n        window.location.hash = \"#historyAlarm\";\r\n    },\r\n    goToInformationDetail: function () {\r\n        App.vars.prevLocation = window.location.hash;\r\n        window.location.hash = \"#informationDetail\";\r\n    },\r\n    /*goToAirReportDetail: function () {\r\n        App.vars.prevLocation = window.location.hash;\r\n        window.location.hash = \"#airReportDetail\";\r\n    },*/\r\n    goToSchoolDetail: function (e) {\r\n        var target = $(e.currentTarget);\r\n        var sParamSchoolCode = target.data('school-code');\r\n        var sSchoolTitle = target.find('.name').text();\r\n        /*App.router.navigate(\"mySchoolDetail\", sParamSchoolCode);*/\r\n\r\n        App.vars.oSchoolCode = sParamSchoolCode;\r\n        App.vars.sSelectedSchoolTitle = sSchoolTitle;\r\n\r\n\r\n        if (App.vars.loginId) {\r\n\r\n            window.location.hash = \"#mySchoolDetail\";\r\n        } else {\r\n            if (typeof window.AirManager !== 'undefined') {\r\n                // android\r\n                window.AirManager.callLoginView();\r\n            } else if (typeof window.webkit !== 'undefined') {\r\n                window.webkit.messageHandlers.AirManager.postMessage({command: \"callLoginView\"});\r\n            }\r\n            /*            if(isMobile.Android()){\r\n                            window.AirManager.callLoginView();\r\n                        }else{\r\n                            window.webkit.messageHandlers.AirManager.postMessage({command:\"callLoginView\"});\r\n                        }*/\r\n            App.vars.afterLogin = \"mySchoolDetail\";\r\n        }\r\n    },\r\n    deleteRecentSearchList: function (e) {\r\n        var target = $(e.currentTarget);\r\n        var nTargetListId = target.parent().data('school-id');\r\n        App.view.searchSchool.deleteRecentSearchList(nTargetListId);\r\n    },\r\n    openPopupSettingTImer: function () {\r\n        App.util.openSettingTurnOffPopup();\r\n        window.location.hash = \"#openPopupSettingTImer\";\r\n\r\n    },\r\n    closePopupSettingTImer: function () {\r\n        App.util.closeSettingTurnOffPopup();\r\n        App.view.popupSettingTurnOffTimer.timeInit();\r\n    },\r\n    confirmPopupSettingTImer: function () {\r\n        var nCurrentTime = moment();\r\n        var oCurrentTime = moment().toObject();\r\n        var nReservationTime = moment().add(App.view.popupSettingTurnOffTimer.nSettingTime.hours, \"hours\").add(App.view.popupSettingTurnOffTimer.nSettingTime.minutes, \"minutes\");\r\n        var oReservationTime = moment().add(App.view.popupSettingTurnOffTimer.nSettingTime.hours, \"hours\").add(App.view.popupSettingTurnOffTimer.nSettingTime.minutes, \"minutes\").toObject();\r\n        var nTransformTime = nReservationTime.format(\"hh:mm\");\r\n        var sReservationTimeDayAmPm = nReservationTime.calendar().slice(0, 5);\r\n        var sReservationTimeAmPm = nReservationTime.calendar().slice(3, 5);\r\n        var nHours = App.view.popupSettingTurnOffTimer.nSettingTime.hours;\r\n        var nMins = App.view.popupSettingTurnOffTimer.nSettingTime.minutes;\r\n        console.log(nHours, nMins)\r\n        if (App.view.popupSettingTurnOffTimer.nSettingTime.hours == \"00\" && App.view.popupSettingTurnOffTimer.nSettingTime.minutes == \"00\") {\r\n            alert(\"시간을 설정해 주세요\")\r\n        } else {\r\n            if (oCurrentTime.date == oReservationTime.date) {\r\n                $('.turn_off_timer .desc_date .day').text(sReservationTimeAmPm);\r\n            } else {\r\n                $('.turn_off_timer .desc_date .day').text(sReservationTimeDayAmPm);\r\n            }\r\n            $('.turn_off_timer .desc_date .time').text(nTransformTime);\r\n\r\n            $('._turnoff').addClass('active');\r\n            this.closePopupSettingTImer();\r\n            App.view.popupSettingTurnOffTimer.sendTurnOffReservation(nHours + nMins);\r\n        }\r\n\r\n    },\r\n    settingAfterHours: function (e) {\r\n        var target = $(e.currentTarget);\r\n        var nHours = target.data('hours');\r\n        var oCurrentTime = moment().toObject();\r\n        var nReservationTime = moment().add(nHours, \"hours\");\r\n        var oReservationTime = moment().add(nHours, \"hours\").toObject();\r\n        var nTransformTime = nReservationTime.format(\"hh:mm\");\r\n        var sReservationTimeDayAmPm = nReservationTime.calendar().slice(0, 5);\r\n        var sReservationTimeAmPm = nReservationTime.calendar().slice(3, 5);\r\n        console.log(nHours)\r\n        $('._turnoff').addClass('active');\r\n        if (oCurrentTime.date == oReservationTime.date) {\r\n            $('.turn_off_timer .desc_date .day').text(sReservationTimeAmPm);\r\n        } else {\r\n            $('.turn_off_timer .desc_date .day').text(sReservationTimeDayAmPm);\r\n        }\r\n        $('.turn_off_timer .desc_date .time').text(nTransformTime)\r\n        this.closePopupSettingTImer();\r\n        App.view.popupSettingTurnOffTimer.sendTurnOffReservation(nHours + \"00\");\r\n    },\r\n    releasePopupSettingTImer: function () {\r\n        $('._turnoff').removeClass('active');\r\n    },\r\n    errorPopupClose: function () {\r\n        $('#networkErrorPopup').remove();\r\n        window.history.back();\r\n\r\n    },\r\n    connectErrorPopupClose: function (e) {\r\n        var target = $(e.currentTarget);\r\n        target.parent('.box_card').remove();\r\n    },\r\n    prevent: function (event) {\r\n        event.preventDefault();\r\n    },\r\n    refreshPullDown: function (e, touch) {\r\n        var self = this;\r\n        if (\r\n            window.location.hash === \"#mySchool\" ||\r\n            window.location.hash === \"#mySchoolDetail\" ||\r\n            window.location.hash === \"#schoolDetail\"\r\n        ) {\r\n            if ($('.wrap_contents').scrollTop() === 0) {\r\n                var startPosY = touch.startEvnt.offset.y;\r\n                var endPosY = touch.endEvnt.offset.y;\r\n                if (Math.abs(startPosY - endPosY) > 50) {\r\n                    // console.log(Math.abs(startPosY - endPosY));\r\n                    App.vars.reload = true;\r\n                    $('#reloader').html(templete[\"globalUtil/pageReload\"]());\r\n                    App.util.updateDistance();\r\n                }\r\n            }\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n});\r\n";
},"useData":true});

this["templete"]["globalUtil/globalUtil.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.globalUtil = Backbone.View.extend({\n    initialize: function () {\n        App.view.popupSettingTurnOffTimer = new directory.popupSettingTurnOffTimer();\n        App.view.popupAllSchoolDelete = new directory.popupAllSchoolDelete();\n        this.render();\n    },\n    pageLoadingShow: function () {\n        $('body').append(templete[\"globalUtil/pageLoading\"]());\n    },\n    pageLoadingHide: function () {\n        $('.page_loading').remove();\n    },\n    getJsonFromUrl: function (hashBased) {\n        var query;\n        // App.util.toast(location.href.split(\"?\")[1]);\n        if (hashBased) {\n            var pos = location.href.indexOf(\"?\");\n            if (pos == -1) return [];\n            query = location.href.substr(pos + 1);\n        } else {\n            query = location.search.substr(1);\n        }\n\n        var result = {};\n        query.split(\"&\").forEach(function (part) {\n            if (!part) return;\n            part = part.split(\"+\").join(\" \"); // replace every + with space, regexp-free version\n            var eq = part.indexOf(\"=\");\n            var key = eq > -1 ? part.substr(0, eq) : part;\n            var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : \"\";\n            var from = key.indexOf(\"[\");\n            if (from == -1) result[decodeURIComponent(key)] = val;\n            else {\n                var to = key.indexOf(\"]\", from);\n                var index = decodeURIComponent(key.substring(from + 1, to));\n                key = decodeURIComponent(key.substring(0, from));\n                if (!result[key]) result[key] = [];\n                if (!index) result[key].push(val);\n                else result[key][index] = val;\n            }\n        });\n        return result;\n    },\n    getDeviceControl: function (dvcCd, data, turnOffMode) {\n        var oData;\n        switch (dvcCd) {\n            //위닉스 타이탄\n            case \"위닉스 타이탄\" :\n                App.device.airPurifierWinixTaitan = new directory.airPurifierWinixTaitan;\n                oData = App.device.airPurifierWinixTaitan.render(data);\n                break;\n\n            //위닉스 XQ\n            case \"DVC0000186\" :\n                App.device.airPurifierWinixXq = new directory.airPurifierWinixXq;\n                oData = App.device.airPurifierWinixXq.render(data);\n                break;\n\n            //삼성전자\n            case \"DVC0000182\" :\n                App.device.airPurifierSamsungPurifier = new directory.airPurifierSamsungPurifier;\n                oData = App.device.airPurifierSamsungPurifier.render(data);\n\n                break;\n\n            //그린망고\n            case \"DVC0001350\" :\n                App.device.airMultiSensorGreenMango = new directory.airMultiSensorGreenMango;\n                oData = App.device.airMultiSensorGreenMango.render(data);\n                break;\n\n            //현대\n            case \"DVC0000204\" :\n                App.device.airMultiSensorHyundai = new directory.airMultiSensorHyundai;\n                oData = App.device.airMultiSensorHyundai.render(data);\n                break;\n\n            //LG전자 몽블랑 D+\n            case \"DVC0000241\" :\n                App.device.airPurifierLgDplus = new directory.airPurifierLgDplus;\n                oData = App.device.airPurifierLgDplus.render(data);\n                break;\n\n            //LG전자 G+\n            case \"LG전자 G+\" :\n                App.device.airPurifierLgGplus = new directory.airPurifierLgGplus;\n                oData = App.device.airPurifierLgGplus.render(data);\n                break;\n\n            //LG전자 몽블랑 S\n            case \"LG전자 몽블랑 S\" :\n                App.device.airPurifierLgS = new directory.airPurifierLgS;\n                oData = App.device.airPurifierLgS.render(data);\n                break;\n\n            //청호나이스\n            case \"청호나이스\" :\n                App.device.airPurifierNicePurifier = new directory.airPurifierNicePurifier;\n                oData = App.device.airPurifierNicePurifier.render(data);\n                break;\n\n            //대유위니아 가습청정기\n            case \"대유위니아 가습청정기\" :\n                App.device.airPurifierWiniaHumidfy = new directory.airPurifierWiniaHumidfy;\n                oData = App.device.airPurifierWiniaHumidfy.render(data);\n                break;\n\n            //대유위니아 공기청정기\n            case \"대유위니아 공기청정기\" :\n                App.device.airPurifierWiniaPurifier = new directory.airPurifierWiniaPurifier;\n                oData = App.device.airPurifierWiniaPurifier.render(data);\n                break;\n\n            //위닉스 나이키 (위닉스 타워)\n            case \"DVC0000173\" :\n                App.device.airPurifierWinixNike = new directory.airPurifierWinixNike;\n                oData = App.device.airPurifierWinixNike.render(data);\n                break;\n\n            //위닉스 제로플러스\n            case \"DVC0000203\" :\n                App.device.airPurifierWinixZeroplus = new directory.airPurifierWinixZeroplus;\n                oData = App.device.airPurifierWinixZeroplus.render(data, turnOffMode);\n                break;\n\n            //어웨어\n            case \"DVC0000185\" :\n                App.device.airMultiSensorAwair = new directory.airMultiSensorAwair;\n                oData = App.device.airMultiSensorAwair.render(data);\n                break;\n\n\n        }\n        return oData;\n    },\n    showLoading: function () {\n\n\n        if (typeof window.AirManager !== 'undefined') {\n            // android\n\n            window.AirManager.callLoadingBar(true);\n\n\n        } else if (typeof window.webkit !== 'undefined') {\n            // ios\n            message = {\n                command: \"callLoadingBar\",\n                show: true\n            };\n\n            window.webkit.messageHandlers.AirManager.postMessage(message);\n\n        } else {\n            // pc\n            // alert('loading show')\n        }\n        /*if(isMobile.Android()){\n            window.AirManager.callLoadingBar(true);\n        }else{\n            message = {\n                command: \"callLoadingBar\",\n                show: true\n            };\n            window.webkit.messageHandlers.AirManager.postMessage(message);\n        }*/\n\n    },\n    hideLoading: function () {\n\n        if (typeof window.AirManager !== 'undefined') {\n            // android\n            window.AirManager.callLoadingBar(false);\n        } else if (typeof window.webkit !== 'undefined') {\n            // ios\n            message = {\n                command: \"callLoadingBar\",\n                show: false\n            };\n            window.webkit.messageHandlers.AirManager.postMessage(message);\n\n        } else {\n            // pc\n            // alert('loading hide');\n        }\n        /*if(isMobile.Android()){\n            window.AirManager.callLoadingBar(false);\n        }else{\n            // ios\n            message = {\n                command: \"callLoadingBar\",\n                show: false\n            };\n            window.webkit.messageHandlers.AirManager.postMessage(message);\n        }*/\n    },\n    toast: function (msg) {\n        if (typeof window.AirManager !== 'undefined') {\n            // android\n            window.AirManager.callToastMsg(msg);\n        } else if (typeof window.webkit !== 'undefined') {\n            // ios\n            var message = {\n                command: \"callToastMsg\",\n                msg: msg\n            };\n            window.webkit.messageHandlers.AirManager.postMessage(message);\n        } else {\n            // pc\n            alert(msg)\n        }\n        /*if(isMobile.Android()){\n            window.AirManager.callToastMsg(msg);\n        }else{\n            // ios\n            var message = {\n                command: \"callToastMsg\",\n                msg: msg\n            };\n            window.webkit.messageHandlers.AirManager.postMessage(message);\n        }*/\n    },\n    openSettingTurnOffPopup: function () {\n        $('.popup_dim').remove();\n        App.view.popupSettingTurnOffTimer.render();\n\n    },\n    closeSettingTurnOffPopup: function () {\n        App.view.popupSettingTurnOffTimer.remove();\n    },\n    openAllSchoolDeletePopup: function () {\n        $('.popup_dim').remove();\n        App.view.popupAllSchoolDelete.render();\n    },\n    closeAllSchoolDeletePopup: function () {\n        App.view.popupAllSchoolDelete.remove();\n    },\n    pageRefresh: function () {\n        var sHash = window.location.hash;\n        switch (sHash) {\n            case \"#mySchool\":\n                break;\n            case \"#mySchoolDetail\":\n                break;\n            case \"#schoolDetail\":\n                break;\n        }\n    },\n    openNetworkErrorPopup: function () {\n        $('body').append(templete[\"popup/popupNetworkError\"]());\n    },\n    updateDistance: function () {\n        // console.log(nDistance);\n        switch (window.location.hash) {\n            case \"#mySchool\" :\n                // console.log('reload');\n                App.view.mySchool.render();\n                break;\n            case \"#mySchoolDetail\" :\n                // console.log('reload');\n                App.view.mySchoolDetail.$el.empty();\n                App.view.mySchoolDetail.render();\n                break;\n            case \"#schoolDetail\" :\n                // console.log('reload');\n                App.view.schoolDetail.render();\n                break;\n        }\n\n        App.vars.reload = true;\n    },\n    hidePageReloading: function () {\n        $('#reloader').empty();\n    }\n});\n\n// 내 현재 위치 가져오기 callback\nwindow.AirManagerWeb = {\n    callbackCurrentPosition: function (lat, lon) {\n        App.vars.latitude = lat;\n        App.vars.longitude = lon;\n        if (lat == 0 && lon == 0) {\n            // 내위치로\n            App.view.homeMain.initMap({\n                \"lat\": App.vars.latitude,\n                \"lon\": App.vars.longitude\n            });\n        }\n        /*$('h1').text('currentPosition lat: ' + lat + '/lon:' + lon);*/\n    },\n    callbackLoginId: function (loginId, userCertTknVal, schCd) {\n        App.vars.loginId = loginId;\n        App.vars.token = userCertTknVal;\n        App.vars.schCd = schCd;\n        /*$('h1').text('userCertTknVal' + userCertTknVal );*/\n        /*\"loginId\": \"seokan@ubivelox.com\"*/\n    },\n    callbackLoginResult: function (loginId, userCertTknVal, schCd) {\n        // $('h1').text('callbackLoginResult: ' + loginId);\n        // $('#callbackLoginResult').text('callbackLoginResult: ' + loginId)\n        App.vars.loginId = loginId;\n        App.vars.token = userCertTknVal;\n        App.vars.schCd = schCd;\n        // if (loginId !== \"\" && App.vars.afterLogin !== null) {\n        //     window.location.hash = App.vars.afterLogin;\n        //     App.vars.afterLogin = null;\n        // }\n        App.router.branch();\n        alert('result brunch');\n    },\n    callbackLogout: function () {\n        App.vars.loginId = \"\";\n        // window.location.hash = \"#home\";\n        App.router.branch();\n        alert('logout brunch');\n    },\n\n    callbackHistoryBack: function () {\n        // App.util.toast(window.history.length);\n        if (\n            window.history.length <= 2 ||\n            (window.location.hash == \"#home\" && App.mainMap.zoom < 17) ||\n            window.location.hash == \"mySchool\" ||\n            window.location.hash == \"\"\n        ) {\n            window.AirManager.callAppExit();\n        } else if (window.location.hash == \"#home\" && App.mainMap.zoom >= 17) {\n            App.view.homeMain.historyBackRefreshMap();\n        } else {\n            window.history.back();\n            /*Backbone.history.history.back();*/\n        }\n        if ($('.popup_dim').length > 0) {\n            $('.popup_dim').remove();\n        }\n    },\n    callbackRegDvc: function () {\n        window.location.hash === \"#home\";\n    }\n};\n\n";
},"useData":true});

this["templete"]["header/mainHeader.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.mainHeader = Backbone.View.extend({\n    render: function () {\n        var sWindowHash = window.location.hash.slice(1);\n        $('.wrap_header').html(templete[\"header/mainHeader\"](sWindowHash)).removeClass('wrap_header_bd');\n        return this;\n    }\n});";
},"useData":true});

this["templete"]["header/subHeader.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.subHeader = Backbone.View.extend({\n    data: {},\n    render: function (opt) {\n        var self = this;\n        var isMySchoolDetail = false;\n        var isAirMultiSensor = false;\n        if(window.location.hash == \"#mySchoolDetail\"){\n            isMySchoolDetail = true;\n        } else if (window.location.hash == \"#airMultiSensor\"){\n            isAirMultiSensor = true;\n        }\n        self.data.isMySchoolDetail = isMySchoolDetail;\n        self.data.isAirMultiSensor = isAirMultiSensor;\n        $('.wrap_header').html(templete[\"header/subHeader\"](self.data)).addClass('wrap_header_bd');\n        return this;\n    }\n})";
},"useData":true});

this["templete"]["historyAlarm/historyAlarm.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.historyAlarm = Backbone.View.extend({\n    schoolCardSlider: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        \n        // 헤더 바인딩\n        App.view.subHeader.render();\n\n\n\n\n        //api\n        App.model.deviceOpr.fetch({\n            method: \"GET\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json\",\n                \"company\": \"school\"\n            },\n            data: {\n                \"count\":20,\n                \"rtnDvcId\": App.vars.rtnDvcId,\n\n            },\n            //data: JSON.stringify(App.vars.oDeviceId),\n            success: function (model, response) {\n                console.log('@ App.model.deviceOpr');\n                console.log(response);\n\n\n                self.oDeviceOpr = response;\n\n\n/*                self.oDeviceOpr = {\n                    \"resultMsg\": \"성공\",\n                    \"notiCnt\": \"0\",\n                    \"resultCd\": \"1\",\n                    \"resultList\": [\n                        {\n                            \"userId\": \"USR00000000000017005\",\n                            \"rtnDvcId\": \"D42307234779\",\n                            \"dvcKindCd\": \"012\",\n                            \"fileNm\": \"https://imgstg.sktsmarthome.com/mobile/IMG20180109195722.jpg\",\n                            \"msgNo\": \"MSG015\",\n                            \"msgSust\": \"DVCNM이 해제되었습니다.\",\n                            \"sendSer\": \"1733480\",\n                            \"msgClassNo\": \"EVT\",\n                            \"msgChCd\": \"PSH\",\n                            \"standDay\": 0,\n                            \"readYn\": \"2018-01-10 10:24:10\",\n                            \"dvcCd\": \"DVC0000173\",\n                            \"dvcNm\": \"위닉스(타워)\",\n                            \"sendMd\": \"20180110\",\n                            \"sendHm\": \"0925\",\n                            \"actMsg\": \"공기청정기4이 해제되었습니다.\",\n                            \"emgYn\": \"N\",\n                            \"viewDtm\": \"2018-01-10 10:24:10\",\n                            \"count\": 0\n                        },\n                        {\n                            \"userId\": \"USR00000000000017005\",\n                            \"rtnDvcId\": \"D42307234779\",\n                            \"dvcKindCd\": \"012\",\n                            \"fileNm\": \"https://imgstg.sktsmarthome.com/mobile/IMG20180109195722.jpg\",\n                            \"msgNo\": \"MSG972\",\n                            \"msgSust\": \"기기에서 DVCNM의 전원을 껐습니다.\",\n                            \"sendSer\": \"1733334\",\n                            \"msgClassNo\": \"EVT\",\n                            \"msgChCd\": \"PSH\",\n                            \"standDay\": 0,\n                            \"readYn\": \"2018-01-10 10:24:10\",\n                            \"dvcCd\": \"DVC0000173\",\n                            \"dvcNm\": \"위닉스(타워)\",\n                            \"sendMd\": \"20180109\",\n                            \"sendHm\": \"2203\",\n                            \"actMsg\": \"기기에서 공기청정기4의 전원을 껐습니다.\",\n                            \"emgYn\": \"N\",\n                            \"viewDtm\": \"2018-01-10 10:24:10\",\n                            \"count\": 0\n                        }\n                    ]\n                };*/\n\n                // 템플릿팅\n                if (response.resultList.length <= 0) {\n                    self.$el.html(templete[\"historyAlarm/historyAlarmNone\"]());\n                } else {\n                    self.$el.html(templete[\"historyAlarm/historyAlarm\"](self.oDeviceOpr));\n                }\n\n                // 컨텐츠 바인딩\n                if (response.resultList.length <= 0) {\n                    $('.wrap_contents').html(self.$el);\n                } else {\n                    $('.wrap_contents').html(self.$el)\n                        .addClass('wrap_contents_gray');\n                }\n\n                App.util.hideLoading();\n            },\n            complete : function(){\n                App.util.hideLoading();\n            },\n            error : function (e, response) {\n                /*App.util.toast(response.responseJSON.resultMsg)*/\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n\n            }\n        });\n        \n    }\n});";
},"useData":true});

this["templete"]["indexList/indexList.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.indexList = Backbone.View.extend({\n    initialize: function (params) {\n\n        this.render();\n    },\n    render: function () {\n\n        this.$el.html(templete[\"indexList/indexList\"]());\n\n        $('.wrap_contents').html(this.$el)\n        $('.wrap_header h1').text(\"\");\n    }\n});";
},"useData":true});

this["templete"]["informationDetail/informationDetail.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.informationDetail = Backbone.View.extend({\r\n    initialize: function () {\r\n        this.render();\r\n    },\r\n    render: function () {\r\n        var self = this;\r\n\r\n        // 헤더 바인딩\r\n        App.view.subHeader.render();\r\n\r\n        var data = App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx];\r\n\r\n        // 템플릿팅\r\n        self.$el.html(templete[\"informationDetail/informationDetail\"](data));\r\n        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');\r\n\r\n    }\r\n});";
},"useData":true});

this["templete"]["localeList/localeList.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.localeList = Backbone.View.extend({\n    selectLocale: [{\n        \"selectItem\": null\n    },\n        {\n            \"selectItem\": null\n        }\n    ],\n    localeData: {\n        \"sidoCd\": \"\",\n        \"siguCd\": \"\",\n        \"schType\": \"\"\n    },\n    activeTabIndex: null,\n    initialize: function () {\n        App.view.mainHeader = new directory.mainHeader();\n        this.render();\n    },\n    render: function () {\n        var self = this;\n\n        // 헤더 바인딩\n        if (App.vars.entryAppDevice) {\n            App.view.subHeader.render();\n        } else {\n            App.view.mainHeader.render();\n        }\n\n        // 템플릿팅\n        self.$el.html(templete[\"localeList/localeList\"]());\n\n\n        this.siguTempleteBinding();\n        this.initLocaleData();\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');\n\n    },\n    initLocaleData: function () {\n        var self = this;\n        self.localeData = {\n            \"sidoCd\": \"\",\n            \"siguCd\": \"\",\n            \"schType\": \"\"\n        };\n        self.selectLocale = [{\n            \"selectItem\": null\n        },\n            {\n                \"selectItem\": null\n            }\n        ]\n    },\n    bindTabContents: function (idx) {\n        var self = this;\n        var elTabContents = (idx) ? (idx + 1) : 1;\n        // 세 번째 탭에서만 서브탭 바인딩\n        if (elTabContents == \"3\") {\n            self.$el.find('.tab-menu').after(templete[\"localeList/localeListSubTab\"]());\n        } else {\n            self.$el.find('.sub_tabs').remove();\n        }\n        // 탭 별 컨텐츠 템플릿팅\n        self.$el.find('.tab-contents').html(templete[\"localeList/localeArea0\" + elTabContents]());\n    },\n    siguTempleteBinding: function (localeData) {\n        var self = this;\n        self.activeTabIndex = self.$el.find('.tab-menu li.focus').index();\n\n        self.localeData = $.extend(self.localeData, localeData);\n        App.model.schoolSearch.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(self.localeData),\n            beforeSend: function () {\n                /*App.util.pageLoadingShow();*/\n            },\n            success: function (model, response) {\n                if (\n                    response.sidoList !== undefined &&\n                    response.sidoList.length === 0\n                ) {\n                    App.util.toast(\"시/도 데이터 조회에 실패하였습니다\");\n                } else if (\n                    response.siguList !== undefined &&\n                    response.siguList.length === 0\n                ) {\n                    App.util.toast(\"시/구 데이터 조회에 실패하였습니다\");\n                } else if (\n                    response.schList !== undefined &&\n                    response.schList.length === 0\n                ) {\n                    App.util.toast(\"등록된 초등학교가 없습니다\");\n                }\n\n                if (self.activeTabIndex == \"0\") {\n                    $('.sub_tabs').remove();\n                    self.$el.find('.tab-contents').html(templete[\"localeList/localeArea01\"](response));\n                    if (App.view.localeList.selectLocale[0].selectItem !== null) {\n                        self.$el.find('.area_local_choice li').eq(App.view.localeList.selectLocale[0].selectItem).addClass('selected')\n                    }\n                } else if (self.activeTabIndex == \"1\") {\n                    $('.sub_tabs').remove();\n                    self.$el.find('.tab-contents').html(templete[\"localeList/localeArea02\"](response));\n                    if (App.view.localeList.selectLocale[1].selectItem !== null) {\n                        self.$el.find('.area_local_choice li').eq(App.view.localeList.selectLocale[1].selectItem).addClass('selected')\n                    }\n                } else {\n                    self.$el.find('.tab-menu').after(templete[\"localeList/localeListSubTab\"]());\n                    self.$el.find('.tab-contents').html(templete[\"localeList/localeArea03\"](response));\n                }\n\n\n            },\n            complete: function () {\n                /*App.util.pageLoadingHide();*/\n            },\n            error: function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    }\n});";
},"useData":true});

this["templete"]["main/homeMain.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.homeMain = Backbone.View.extend({\n    oStartTouchPos: {\n        \"x\": null,\n        \"y\": null\n    },\n    bLogin: false,\n    bZoom: false,\n    bRefresh:false,\n    sLoginId: \"\",\n    mainMap: null,\n    schoolCardSlider: null,\n    oSchoolData: null,\n    loadingComplete: false,\n    selectMarker : null,\n    oMyLocation: null,\n    sliderActive: false,\n    initialize: function (params) {\n\n        App.view.mainHeader = new directory.mainHeader();\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.mainHeader.render();\n        // 템플릿팅\n\n        if(App.vars.loginId){\n            // 로그인 후\n            self.$el.html(templete[\"main/mainLogin\"]());\n        } else {\n            // 기본 메인\n            self.$el.html(templete[\"main/main\"]());\n\n        }\n        self.$el.addClass('wrap_main_map');\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el);\n\n        // 맵 설정\n        this.initMap();\n        /*this.currentSliderMoveMap();*/\n    },\n    initMap: function(option){\n        var self = this;\n\n        // 기본 Default 위치 (SKT타워)\n        var mapData = {\n            \"lon\": \"126.9828357\",\n            \"lat\": \"37.5664558\"\n        };\n        if( App.vars.longitude == 0 || App.vars.latitude == 0){\n            App.vars.longitude = \"126.9828357\";\n            App.vars.latitude = \"37.5664558\";\n        }\n        var varsLonlat = {\n            \"lon\": App.vars.longitude,\n            \"lat\": App.vars.latitude\n        };\n        $.extend(mapData , varsLonlat);\n\n        this.mainMap = App.mainMap = new Tmap.Map({\n            div: 'school_map', // map을 표시해줄 div\n            width: '100%',  // map의 width 설정\n            height: '100%', // map의 height 설정\n            minZoom: 6\n        });\n\n        bounds = new Tmap.Bounds(116.17194101627408,33.13910000993247,138.72760507876697,40.18028650161712).transform(\"EPSG:4326\", \"EPSG:3857\"); //대한민국 영역의 bounds 객체 생성\n        App.mainMap.events.register(\"moveend\", App.mainMap, onMove);\n\n        function onMove(){\n            var center = App.mainMap.getCenter();\n            bounds.containsLonLat(center);\n            if(bounds.containsLonLat(center) == false){ //바뀐 지도의 중심점과 bounds 비교\n                App.mainMap.zoomToExtent(bounds); //지도 중심점이 bounds 영역을 벗어나면 다시 bounds 영역으로 돌아옴\n            }\n        }\n\n        var lonlat = new Tmap.LonLat(mapData.lon, mapData.lat).transform(\"EPSG:4326\", \"EPSG:3857\");\n        App.mainMap.setCenter(lonlat,14);\n        App.mainMap.events.register(\"touchmove\", App.mainMap, self.endTouchPosition);\n        /*App.mainMap.events.register(\"touchend\", App.mainMap, self.onMoveEnd);*/\n        this.getMapData();\n        $('.school_list_slide').css({opacity:0});\n\n    },\n    refreshMap: function(){\n\n        this.getMapData();\n        this.bRefresh = true;\n    },\n    historyBackRefreshMap: function(){\n        var lonlat = new Tmap.LonLat(App.mainMap.getCenter().lon, App.mainMap.getCenter().lat).transform(\"EPSG:4326\", \"EPSG:3857\");\n        App.mainMap.setCenter(lonlat,14);\n        $('.school_list_slide').css({opacity:0});\n    },\n    endTouchPosition: function(e){\n\n        if(App.mainMap.zoom > 16 && App.vars.startPos.distanceTo(App.mainMap.getPixelFromLonLat(new Tmap.LonLat(App.mainMap.getCenter().transform(\"EPSG:3857\", \"EPSG:4326\").lon, App.mainMap.getCenter().transform(\"EPSG:3857\", \"EPSG:4326\").lat))) > 50){\n            $('.school_list_slide').css({opacity:0});\n            $('.tmLayerDiv > div').find('.box_map_icon_air.focus').addClass('dis');\n        }\n    },\n    onMoveEnd: function (){\n        var self = this;\n\n        if(App.mainMap.zoom > 16 ){\n            setTimeout(function(){\n                $('.area_btn .btn').hide();\n                $('.school_list_slide').css({opacity:1});\n            },100);\n            App.vars.startPos = App.mainMap.getPixelFromLonLat(new Tmap.LonLat(App.mainMap.getCenter().transform(\"EPSG:3857\", \"EPSG:4326\").lon, App.mainMap.getCenter().transform(\"EPSG:3857\", \"EPSG:4326\").lat))\n\n        } else if(App.mainMap.zoom < 5){\n\n        } else {\n            setTimeout(function(){\n                $('.area_btn .btn').show();\n                $('.school_list_slide').css({opacity:0});\n            },100)\n            App.view.homeMain.getMapData();\n            self.selectMarker = null;\n        }\n\n\n    },\n    getMapData: function(){\n        var self = this;\n\n        var loginId = App.vars.loginId ;\n\n        var mapData = {\n            \"lat\": App.mainMap.getCenter().transform(\"EPSG:3857\", \"EPSG:4326\").lat,\n            \"lon\": App.mainMap.getCenter().transform(\"EPSG:3857\", \"EPSG:4326\").lon,\n            \"loginId\": loginId,\n            \"zoomLevel\": App.mainMap.zoom,\n            \"mySchYn\": \"N\",\n            \"size\": \"0\",\n            \"offset\": \"0\"\n        };\n\n        App.model.schoolListMap.fetch({\n            method: \"POST\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json\",\n                \"company\": \"school\"\n            },\n            data: JSON.stringify(mapData),\n            beforeSend: function(){\n                /*App.util.pageLoadingShow();*/\n            },\n            success : function (model, response) {\n                App.vars.schoolData = response;\n                console.log(response)\n            },\n            complete : function(){\n                /*App.util.pageLoadingHide();*/\n                self.setMap();\n            },\n            error : function (e) {\n                /*App.util.hideLoading();*/\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    setMap: function(){\n        var self = this;\n        var size, offset, icon;\n\n        // 마커와 팝업을 세팅합니다.\n        function MarkerPopup(marker) {\n            this.marker = marker;\n        }\n        if (App.mainMap.markerLayer != null) App.mainMap.removeLayer(App.mainMap.markerLayer);\n        App.mainMap.markerLayer = new Tmap.Layer.Markers(); // 마커를 추가할 레이어\n        App.mainMap.addLayer(App.mainMap.markerLayer); // 맵에 마커 레이어를 추가합니다.\n        App.mainMap.markerLayer.events.register( 'moveend', App.mainMap.markerLayer, function(evt){\n            if( evt.zoomChanged == true ) {\n                // 지도중심 변경 시 작업\n                self.onMoveEnd();\n\n            } else {\n                self.moveCloseSlider();\n            }\n        });\n        App.mainMap.removeZoomControl();\n        size = new Tmap.Size(44, 53); // 마커 사이즈를 지정합니다.\n        offset = new Tmap.Pixel(-(size.w / 2), -(size.h)); // 마커의 중심점을 조정합니다.(마커의 중앙하단으로 설정)\n\n        // 공기 오염도 아이콘\n        var blueIcon = '<div class=\"box_map_icon_air\"><a href=\"#\" class=\"sprite sprite_status sprite_map_air good\">좋음</a></div>';\n        var greenIcon = '<div class=\"box_map_icon_air\"><a href=\"#\" class=\"sprite sprite_status sprite_map_air normal\">보통</a></div>';\n        var yellowIcon = '<div class=\"box_map_icon_air\"><a href=\"#\" class=\"sprite sprite_status sprite_map_air bad\">나쁨</a></div>';\n        var redIcon = '<div class=\"box_map_icon_air\"><a href=\"#\" class=\"sprite sprite_status sprite_map_air worse\">매우나쁨</a></div>';\n        var schLonlat;\n        var airGrd;\n\n        for (var i = 0; i < App.vars.schoolData.schList.length; i++) {\n            // 마커 위치\n            schLonlat = new Tmap.LonLat(App.vars.schoolData.schList[i].lon, App.vars.schoolData.schList[i].lat).transform(\"EPSG:4326\", \"EPSG:3857\");\n            // 데이터 구분 공기오염도 아이콘\n            switch(App.vars.schoolData.schList[i].airGrd){\n                case \"보통\" :\n                    airGrd = greenIcon;\n                    break;\n                case \"-\" :\n                    airGrd = greenIcon;\n                    break;\n                case \"좋음\" :\n                    airGrd = blueIcon;\n                    break;\n                case \"나쁨\" :\n                    airGrd = yellowIcon;\n                    break;\n                case \"매우나쁨\" :\n                    airGrd = redIcon;\n                    break;\n            }\n            icon = new Tmap.IconHtml(airGrd, size, offset); // 마커 아이콘\n            marker = new Tmap.Marker(schLonlat, icon); // 마커생성\n            App.mainMap.markerLayer.addMarker(marker);  // 마커 레이어에 마커 추가\n            //팝업 생성\n            if(App.mainMap.zoom > 16){\n                $(App.mainMap.markerLayer.markers[0].events.element).find('.box_map_icon_air').addClass('focus')\n            }\n            //마커 이벤트등록\n            marker.events.register(\"click\", new MarkerPopup(marker), onClickMarker); // 마커를 클릭했을 때 이벤트 설정\n            marker.events.register(\"click\", new MarkerPopup(marker), markerGetLonlat); // 마커를 클릭했을 때 이벤트 설정\n        }\n\n        function onClickMarker(evt){\n            // 터치시 마커 중심으로 맵 이동\n            $('.tmLayerDiv > div').find('.box_map_icon_air').removeClass('dis');\n            $('.school_list_slide').css({opacity:1});\n            if(!$(this.marker.events.element).find('.box_map_icon_air').hasClass('focus')){\n                App.mainMap.setCenter(this.marker.lonlat,17);\n                self.selectMarker = this.marker;\n                $(this.marker.icon.imageDiv).find('.box_map_icon_air').addClass('focus');\n\n            } else {\n\n            }\n            /*App.view.homeMain.getMapData();*/\n        }\n        function markerGetLonlat(evt){\n\n            var nMarkerLonlat = evt.object.lonlat.transform(\"EPSG:3857\", \"EPSG:4326\");\n            var nMarkerLon = nMarkerLonlat.lon.toFixed(7);\n            var nMarkerLat = nMarkerLonlat.lat.toFixed(7);\n            var markerNum;\n\n            if(self.loadingComplete){\n                self.schoolCardSlider.destroySlider();\n                $('.box_slide > div').remove();\n\n            } else {\n                self.loadingComplete = true;\n            }\n\n            self.addSliderSchool();\n            self.mapCardSlider();\n\n            self.goToSliderMarker($('.box_map_icon_air.focus').parent().index());\n        }\n\n    },\n\n    mapCardSlider: function(){\n        var self = this;\n        this.schoolCardSlider = $('.slider');\n        this.schoolCardSlider.bxSlider({\n            hideControlOnEnd: true,\n            adaptiveHeight: true,\n            pager: false,\n            slideMargin: 20,\n            infiniteLoop: false,\n            preventDefaultSwipeY: true,\n            onSliderLoad: function(){\n\n            },\n            onSlideBefore: function() {\n                /*self.currentSliderMoveMap($slideElement);*/\n\n            },\n            onSlideAfter: function(el, beforeIndex, currentIndex){\n                App.vars.sliderIndex = currentIndex;\n                self.currentSliderMoveMap(currentIndex);\n                self.setCurrentMarkerAddClass(currentIndex);\n            }\n\n        });\n    },\n    moveCloseSlider: function(e){\n        var self = this;\n\n        if(App.mainMap.zoom > 16 ){\n\n        }\n\n\n\n\n\n    },\n    moveMyLocation: function(){\n        console.log('■■■ 내 위치로 ■■■');\n        // 기본 Default 위치 (SKT타워)\n        var mapData = {\n            \"lon\": \"126.9828357\",\n            \"lat\": \"37.5664558\"\n        };\n        var varsLonlat = {\n            \"lon\": App.vars.longitude,\n            \"lat\": App.vars.latitude\n        };\n        $.extend(mapData , varsLonlat);\n        var lonlat = new Tmap.LonLat(mapData.lon, mapData.lat).transform(\"EPSG:4326\", \"EPSG:3857\");\n        App.mainMap.setCenter(lonlat,14);\n    },\n    goToSliderMarker: function (markerNum){\n        this.schoolCardSlider.goToSlide(markerNum)\n    },\n    setCurrentMarkerAddClass: function(index){\n        for(var i =0;i < App.mainMap.markerLayer.markers.length;i++){\n            $(App.mainMap.markerLayer.markers[i].events.element).find('.box_map_icon_air').removeClass('focus')\n        }\n        $(App.mainMap.markerLayer.markers[index].events.element).find('.box_map_icon_air').addClass('focus');\n    },\n    currentSliderMoveMap: function(slideIndex){\n        var self = this;\n        /*if(self.loadingComplete){\n            var elSlideElements = $(sliderElements);\n            var nSliderIndex = elSlideElements.find('.box_school_list').attr('id').slice(9);\n            var lonlat = new Tmap.LonLat(App.vars.schoolData.schList[nSliderIndex - 1].lon, App.vars.schoolData.schList[nSliderIndex - 1].lat).transform(\"EPSG:4326\", \"EPSG:3857\");\n\n            App.mainMap.setCenter(lonlat, App.mainMap.zoom);\n        }*/\n\n        var lonlat = new Tmap.LonLat(App.vars.schoolData.schList[slideIndex].lon, App.vars.schoolData.schList[slideIndex].lat).transform(\"EPSG:4326\", \"EPSG:3857\");\n        App.mainMap.setCenter(lonlat, App.mainMap.zoom);\n    },\n    addSliderSchool: function (){\n        var self = this;\n        var airState;\n\n        /*console.log(App.vars.schoolData.schList);*/\n        for (var i = 0; i < App.vars.schoolData.schList.length; i++) {\n            switch(App.vars.schoolData.schList[i].airGrd){\n                case \"보통\" :\n                    airState = \"normal\";\n                    break;\n                case \"좋음\" :\n                    airState = \"good\";\n                    break;\n                case \"나쁨\" :\n                    airState = \"bad\";\n                    break;\n                case \"매우나쁨\" :\n                    airState = \"worse\";\n                    break;\n            }\n            var welSchoolList = '<div>' +\n                '<div id=\"schoolNum' + App.vars.schoolData.schList[i].no +'\" class=\"box_school_list\">' +\n                '<a href=\"#\" class=\"_cardSlideLink\" style=\"display: block;width:100%;height:100px;\" data-school-code=\"'+App.vars.schoolData.schList[i].schCd+'\">' +\n                '<div>' +\n                '<span class=\"sprite sprite_status sprite_air_mid '+ airState +'\"></span>' +\n                '<div class=\"school_info\"><p class=\"name\">'+ App.vars.schoolData.schList[i].schNm +'</p>' +\n                '<p class=\"air_info '+ airState +'\"><span>미세먼지</span>' + App.vars.schoolData.schList[i].pm10 + '<em>'+App.vars.schoolData.schList[i].airGrd +'</em></p>' +\n                '<p class=\"none_place\">학교주변 관측소에서 제공하는 정보입니다.</p></div></div></a></div></div>';\n\n            $('.box_slide').append(welSchoolList);\n\n        }\n\n        /*self.mapCardSlider();*/\n    }\n});";
},"useData":true});

this["templete"]["mySchool/mySchool.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.mySchool = Backbone.View.extend({\n    bLogin: true,\n    className: 'my_school_list',\n    oMySchoolData: {\n        \"size\": \"0\",\n        \"offset\": \"0\",\n        \"loginId\": App.vars.loginId\n    },\n    oSchoolList: null,\n    initialize: function () {\n        App.view.mainHeader = new directory.mainHeader();\n        this.render();\n    },\n    render: function () {\n        var self = this;\n\n        if (App.vars.reload !== undefined) {\n            if (App.vars.reload !== true) {\n                App.util.showLoading();\n            } else {\n                App.vars.reload = false;\n            }\n        } else {\n            App.util.showLoading();\n        }\n\n        // 헤더 바인딩\n        App.view.mainHeader.render();\n\n        // 나의 학교 리스트 바인딩\n        if (App.vars.loginId) {\n            this.mySchoolListBind();\n        } else {\n            self.$el.html(templete[\"mySchool/mySchool\"]());\n        }\n\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');\n\n        $('.wrap_contents').scrollTop(0);\n\n\n    },\n    mySchoolListBind: function () {\n        var self = this;\n        var oRtnDvcIdList = {\"rtnDvcIdList\": []};\n\n        self.oMySchoolData.loginId = App.vars.loginId;\n\n        App.model.mySchoolList.fetch({\n            method: \"POST\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json\",\n                \"company\": \"school\"\n            },\n            data: JSON.stringify(self.oMySchoolData),\n            beforeSend: function () {\n\n            },\n            success: function (model, response) {\n                console.log('@ App.model.mySchoolList');\n                console.log(response);\n                App.vars.mySchoolList = self.oSchoolList = response;\n\n                if (self.oSchoolList.schList.length <= 0) {\n                    self.$el.html(templete[\"mySchool/mySchool\"]());\n                } else {\n                    self.$el.html(templete[\"mySchool/mySchoolLogin\"](self.oSchoolList));\n                }\n                App.util.hideLoading();\n                App.util.hidePageReloading();\n                App.vars.reload = false;\n\n            },\n            complete: function () {\n                App.util.hideLoading();\n\n            },\n            error: function (e, response) {\n                /*App.util.toast(response.responseJSON.resultMsg)*/\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n\n    setSchoolData: function (school, lvClass) {\n        App.vars.sSelectedSchoolTitle = school + \" \";\n        App.vars.sSelectedLvClass = lvClass;\n        // App.vars.aDeviceId = {\"rtnDvcIdList\": [{\"rtnDvcId\": dvcId}]}; //상세 조회를 위한 디바이스 ID\n    }\n});";
},"useData":true});

this["templete"]["mySchoolDetail/mySchoolDetail.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.mySchoolDetail = Backbone.View.extend({\n    schoolCardSlider: null,\n    oMySchoolData: {\n        \"size\": \"0\",\n        \"offset\": \"0\",\n        \"loginId\": App.vars.loginId\n    },\n    oSchoolCode: {\n        \"schCd\": App.vars.oSchoolCode\n    },\n    oSchoolDetailInfo: null,\n    subHeaderTitle: \"\",\n    initialize: function () {\n        this.render();\n    },\n    render: function () {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n        this.getSchoolDetailData();\n        this.getAllMySchoolList();\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el)\n            .addClass('wrap_contents_gray');\n\n        // 학교 공기상태 슬라이드\n\n\n        $('.wrap_contents').scrollTop(0);\n        App.vars.reload = false;\n    },\n    getAllMySchoolList: function () {\n        var self = this;\n        var oSchList = null;\n        self.oMySchoolData.loginId = App.vars.loginId;\n        App.model.mySchoolList.fetch({\n            method: \"POST\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json;charset=UTF-8\",\n                \"company\": \"school\"\n            },\n            data: JSON.stringify(self.oMySchoolData),\n            success: function (model, response) {\n                self.oSchoolList = response;\n                console.log(response)\n                for (var i = 0; i < self.oSchoolList.schList.length; i++) {\n                    // 학교 아이디와 전역변수 학교리스트의 값이 맞으면 시작\n                    if (self.oSchoolList.schList[i].schCd == self.oSchoolCode.schCd) {\n                        oSchList = self.oSchoolList.schList[i];\n                    }\n                }\n                setTimeout(function(){\n                    if (oSchList !== null) {\n                        oSchList.clsList.forEach(function (array, index) {\n                            for (var j = 0; j < self.$el.find('.area_grade_list li').length; j++) {\n                                if (\n                                    array.lv == self.$el.find('._registerMySchool').eq(j).data('lv') &&\n                                    array.cls == self.$el.find('._registerMySchool').eq(j).data('cls')\n                                ) {\n                                    self.$el.find('._registerMySchool').eq(j).prop('checked', true)\n                                        .attr('id', oSchList.clsList[index].userSchId);\n                                }\n                            }\n                        });\n                    }\n                },80)\n\n            },\n            error: function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        })\n    },\n    getSchoolDetailData: function (schoolCode) {\n        var self = this;\n        self.oSchoolCode.schCd = App.vars.oSchoolCode;\n        App.model.schoolDetail.fetch({\n            method: \"POST\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json;charset=UTF-8\",\n                \"company\": \"school\"\n            },\n            data: JSON.stringify(self.oSchoolCode),\n            beforeSend: function () {\n                /*App.util.pageLoadingShow();*/\n            },\n            success: function (model, response) {\n\n                App.vars.oSchoolDetailInfo = self.oSchoolDetailInfo = response;\n\n                // self.oSchoolDetailInfo.lvList = [];\n                var lvList = [];\n                var setLvList = [];\n                var schoolAllInfo;\n                for (var i = 0; i < 6; i++) {\n                    for (var j = 0; j < self.oSchoolDetailInfo.clsList.length; j++) {\n                        if (self.oSchoolDetailInfo.clsList[j].lv == i + 1) {\n                            if (lvList[i] == undefined) {\n                                lvList[i] = []\n                            }\n                            lvList[i].push(self.oSchoolDetailInfo.clsList[j])\n                        }\n                    }\n                    if (lvList[i] !== undefined) {\n                        setLvList.push(lvList[i]);\n                    }\n                }\n                self.oSchoolDetailInfo.lvList = [];\n                for (var i = 0; i < setLvList.length; i++) {\n                    self.oSchoolDetailInfo.lvList.push(setLvList[i])\n                }\n\n                App.vars.schoolOutInfo = schoolAllInfo = response;\n                console.log(response)\n                App.vars.sSelectedSchoolTitle = self.oSchoolDetailInfo.schNm + \" \";\n                self.$el.append(templete[\"mySchoolDetail/mySchoolDetailSlider\"](response));\n                self.$el.append(templete[\"mySchoolDetail/mySchoolDetailList\"](schoolAllInfo));\n                self.$el.find('.date_today').html(moment().format(\"MM.DD (dd)\"));\n\n                //기기정보\n                var deviceList = [];\n                for (var k = 0; k < self.oSchoolDetailInfo.outList.length; k++) {\n                    if (deviceList[k] === undefined) {\n                        deviceList[k] = [];\n                    }\n                    deviceList[k].push(self.oSchoolDetailInfo.outList[k].dvcId);\n                }\n\n                App.util.hidePageReloading();\n                App.vars.reload = false;\n\n            },\n            complete: function () {\n                /*App.util.pageLoadingHide();*/\n                var outListInfo = self.oSchoolDetailInfo.outList;\n                self.schoolAirStateSlider(outListInfo);\n            },\n            error: function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    registerMySchool: function (schoolData) {\n\n        var self = this;\n        schoolData.schCd = App.vars.oSchoolCode;\n        console.log(schoolData)\n        App.model.mySchoolRegister.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(schoolData),\n            beforeSend: function () {\n                /*App.util.pageLoadingShow();*/\n            },\n            success: function (model, response) {\n\n                self.getAllMySchoolList();\n                App.util.toast(\"등록 되었습니다\");\n            },\n            complete: function () {\n                /*App.util.pageLoadingHide();*/\n\n            },\n            error: function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    deleteMySchool: function (deleteSchoolId) {\n        var self = this;\n        console.log(deleteSchoolId)\n        App.model.mySchoolDelete.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(deleteSchoolId),\n            beforeSend: function () {\n                /*App.util.pageLoadingShow();*/\n            },\n            success: function (model, response) {\n\n                self.getAllMySchoolList();\n                App.util.toast(\"등록이 취소되었습니다\");\n            },\n            complete: function () {\n                /*App.util.pageLoadingHide();*/\n\n            },\n            error: function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    schoolAirStateSlider: function (outSensor) {\n        var isLoop = false;\n        var touchEnabled = false;\n\n        if ($('.area_school_air .slider .box_slide').length > 1) {\n            isLoop = true;\n            touchEnabled = true;\n        }\n\n        var airGrd = ''\n        this.schoolAirCardSlider = $('.area_school_air .slider');\n        this.schoolAirCardSlider.bxSlider({\n            adaptiveHeight: true,\n            infiniteLoop: isLoop,\n            touchEnabled: touchEnabled,\n            pagerSelector: \".slide_pager\",\n            onSliderLoad: function () {\n\n                for (var i = 0; i < outSensor.length; i++) {\n                    airGrd = outSensor[i].airGrd\n                    switch (airGrd) {\n                        case \"매우좋음\" :\n                            $('.bx-pager-item').eq(i).addClass('best');\n                            break;\n                        case \"좋음\" :\n                        case \"청정\" :\n                            $('.bx-pager-item').eq(i).addClass('good');\n                            break;\n                        case \"보통\" :\n                        case \"저오염\" :\n                            $('.bx-pager-item').eq(i).addClass('normal');\n                            break;\n                        case \"나쁨\" :\n                            $('.bx-pager-item').eq(i).addClass('bad');\n                            break;\n                        case \"중오염\" :\n                            $('.bx-pager-item').eq(i).addClass('harm');\n                            break;\n                        case \"매우나쁨\" :\n                        case \"고오염\" :\n                            $('.bx-pager-item').eq(i).addClass('worse');\n                            break;\n                    }\n                }\n            }\n        });\n    },\n    setSchoolLvClass: function (lv,cls) {\n\n        if (lv <= 6) {\n            App.vars.sSelectedLvClass = lv + \"학년 \" + cls + \"반\" ;\n        } else {\n            App.vars.sSelectedLvClass = cls;\n        }\n        // App.vars.sSelectedLvClass = lvClass;\n        // App.vars.aDeviceId = {\"rtnDvcIdList\": [{\"rtnDvcId\": dvcId}]}\n    }\n});";
},"useData":true});

this["templete"]["popup/allSchoolDelete.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.popupAllSchoolDelete = Backbone.View.extend({\n    className:\"popup_dim\",\n    initialize: function () {\n    },\n    remove: function () {\n        $('.popup_dim').remove();\n    },\n    render: function () {\n\n        $('body').append(this.$el.html(templete[\"popup/allSchoolDelete\"]()));\n\n    }\n\n});";
},"useData":true});

this["templete"]["popup/settingTurnOffTimer.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.popupSettingTurnOffTimer = Backbone.View.extend({\n    className:\"popup_dim\",\n    bSettingLoad: false,\n    nSettingTime:{\n        \"hours\" : null,\n        \"minutes\" : null\n    },\n    oRequestData: {\n        \"rtnDvcId\" : \"\",\n        \"schdStartTime\" : \"\"\n    },\n    initialize: function () {\n    },\n    remove: function () {\n        $('.popup_dim').remove();\n    },\n    render: function () {\n\n        // 컨텐츠 바인딩\n        if($('.active.DVC0000241').length > 0){\n            // 몽블랑 D+ 일 경우만\n            $('body').append(this.$el.html(templete[\"popup/settingHoursTurnOffTimer\"]()));\n        } else {\n            $('body').append(this.$el.html(templete[\"popup/settingTurnOffTimer\"]()));\n            this.init()\n        }\n\n    },\n    init: function(){\n        var self = this;\n        Hammer.plugins.fakeMultitouch();\n\n        $(\"select.drum\").drum({\n            onChange : function (selected) {\n\n                if(selected.id == \"hours\"){\n                    self.nSettingTime.hours = selected.value;\n                } else {\n                    self.nSettingTime.minutes = selected.value;\n                }\n\n            }\n\n        });\n\n        this.update();\n    },\n    update: function (datetime) {\n        var self = this;\n        // $(\"#hours\").drum('setIndex', datetime.getHours());\n        // $(\"#minutes\").drum('setIndex', datetime.getMinutes());\n        if( self.nSettingTime.hours == null && self.nSettingTime.minutes == null && self.bSettingLoad == false){\n            self.nSettingTime.hours = \"00\";\n            self.nSettingTime.minutes = \"00\";\n            self.bSettingLoad = true;\n        } else {\n\n            /*self.nSettingTime.hours = datetime.getHours();\n            self.nSettingTime.minutes = datetime.getMinutes();*/\n        }\n\n\n    },\n    sendTurnOffReservation: function(time){\n        var self = this;\n\n        self.oRequestData = {\n            \"rtnDvcId\" : App.vars.sRtnDvcId,\n            \"schdStartTime\" : time + \"00\"\n        };\n        console.log(self.oRequestData)\n        App.model.bookingDeviceTurnOff.fetch({\n            method: \"POST\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json;charset=UTF-8\",\n                \"company\": \"school\"\n            },\n            data: JSON.stringify(self.oRequestData),\n            success: function (model, response) {\n                console.log(response)\n            },\n            complete: function () {\n\n            },\n            error: function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    timeInit: function(){\n        var self = this;\n        self.nSettingTime = {\n            \"hours\" : \"00\",\n            \"minutes\" : \"00\"\n        }\n    }\n});";
},"useData":true});

this["templete"]["schoolDetail/schoolDetail.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.schoolDetail = Backbone.View.extend({\n    detailSlider: null,\n    sRtnDvcId: null,\n    initialize: function () {\n\n        this.render();\n    },\n    render: function () {\n        var self = this;\n\n        // App.util.toast(window.location.href.split(\"?\")[1])\n\n        if (App.vars.reload !== undefined) {\n            if (App.vars.reload !== true) {\n                App.util.showLoading();\n            } else {\n                App.vars.reload = false;\n            }\n        } else {\n            App.util.showLoading();\n        }\n\n        // 헤더 바인딩\n        App.view.subHeader.render();\n        self.$el.html(templete[\"schoolDetail/schoolDetail\"]());\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el).addClass('wrap_contents_gray').scrollTop(0);\n\n        // 학교 공기상태 슬라이드\n        this.sliderBinding();\n\n    },\n    sliderBinding: function () {\n        var self = this;\n        // 센서 갯수 만큼 슬라이드 바인딩\n        var oRtnDvcIdList = App.vars.oDeviceId;\n\n        async.waterfall([\n            /**\n             * 학교 기기 목록 조회\n             */\n            function (outerCallback) {\n                // },\n                // function (response, callback) {\n                /**\n                 * 학교 기기 상세 조회\n                 */\n                    // App.util.toast(App.vars.oDeviceId)\n\n                var count = 0;\n                async.whilst(\n                    function () {\n                        return count < App.vars.oSchoolDetail.rtnDvcIdList.length;\n                    },\n                    function (callback) {\n                        // console.log('count : ' + count);\n\n                        App.vars.oDeviceId = App.vars.oSchoolDetail.rtnDvcIdList[count];\n\n\n                        App.model.deviceDetailRefer.fetch({\n                            method: \"POST\",\n                            headers: {\n                                \"Authorization\": App.vars.token,\n                                \"Content-Type\": \"application/json\",\n                                \"company\": \"school\"\n                            },\n                            data: JSON.stringify(App.vars.oDeviceId),\n                            success: function (model, response) {\n\n                                if (App.vars.oSchoolDetail.rtnDvcIdList.length == App.vars.oSchoolDetail.oDeviceInfo.length) {\n                                    App.vars.oSchoolDetail.oDeviceInfo = [];\n                                    App.vars.oSchoolDetail.oDeviceInfo.push(response.userDeviceList[0]);\n                                } else if (App.vars.oSchoolDetail.rtnDvcIdList.length != App.vars.oSchoolDetail.oDeviceInfo.length) {\n                                    App.vars.oSchoolDetail.oDeviceInfo.push(response.userDeviceList[0]);\n                                }\n\n\n                                console.log('@ App.model.deviceDetailRefer');\n                                console.log(response);\n                                App.vars.oSchoolDetail.oDeviceInfoRoot.push(response);\n\n\n                                count++;\n                                App.util.hidePageReloading();\n                                App.vars.reload = false;\n                                callback(null, \"\");\n                            },\n                            error: function (e) {\n                                App.util.hideLoading();\n                                App.util.openNetworkErrorPopup();\n                            }\n                        });\n                    },\n                    function (err, n) {\n                        count = 0;\n                        outerCallback(null, null);\n                    }\n                );\n\n            },\n            function (response, callback) {\n\n                /**\n                 * 기기 컨트롤러 호출\n                 */\n                self.deviceDetailRefer = App.vars.oSchoolDetail.oDeviceInfo;\n\n                var data = App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx];\n                var code = data.dvcCd;\n                var turnOffMode = data.modeSer || \"\";\n\n                var getDeviceControl = App.util.getDeviceControl(code, data, turnOffMode);\n                // self.$el.find('.area_box_list').html(getDeviceControl.$el);\n\n\n                // if(data != undefined){\n                //     if(data.connStatYn == \"N\"){\n                //         var welList = $('.wrap_area_box_list');\n                //         $('.area_box_list').append();\n                //         welList.find('.box_card').addClass('off');\n                //         welList.find('.box_card').find('input').prop('checked', false);\n                //         $('.slider').find('.box_slide').addClass('off');\n                //         $('.bx-pager-item').addClass('off');\n                //     } else {\n                //         var welList = $('.wrap_area_box_list');\n                //         $('.area_box_list').append('<span>test</span>');\n                //         welList.find('.box_card').addClass('off');\n                //         welList.find('.box_card').find('input').prop('checked', false);\n                //         $('.slider').find('.box_slide').addClass('off');\n                //         $('.bx-pager-item').addClass('off');\n                //     }\n                // }\n\n                callback(null, getDeviceControl);\n\n            }\n        ], function (err, getDeviceControl) {\n            var welSensorInfoList = getDeviceControl.$el.find('.box_air_all ul');\n            App.vars.dc = welSensorInfoList;\n\n            self.$el.find('.area_school_air').append(templete[\"schoolDetail/schoolDetailSlider\"](App.vars.oSchoolDetail));\n            self.schoolAirStateSlider();\n\n            // 센서 정보 갯수에따라 그리드 클래스 추가\n            welSensorInfoList.attr('class', 'clearfix').addClass('col' + welSensorInfoList.find('li').length);\n            self.$el.find('.wrap_area_box_list').html(getDeviceControl.$el);\n\n            setTimeout(function () {\n                if (App.vars.oSchoolDetail !== undefined) {\n\n                    if (App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx].connStatYn === \"N\") {\n                        var welList = $('.wrap_area_box_list');\n                        $('.area_box_list').prepend(templete[\"error/deviceConnectError\"]);\n\n                        welList.find('.box_card').each(function () {\n                            welList.find('.box_card').addClass('off');\n                            if (welList.find('.box_card').hasClass('net_error') === true) {\n                                welList.find('.net_error').removeClass('off');\n                            }\n                        });\n\n                        welList.find('.box_card').find('input').prop('checked', false);\n                        $('.slider').find('.box_slide').eq(App.vars.oSchoolDetail.nIdx).addClass('off');\n                        $('.bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).addClass('off');\n                    }\n                }\n            }, 10);\n\n\n            App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx].openDeviceList.forEach(function (array, index) {\n                if (array.fncCd === 'D03') {\n                    switch (array.fncVal) {\n                        case \"off\" :\n                            App.view.deviceEventView.statusOff();\n                            break;\n                        case \"on\" :\n                            App.view.deviceEventView.statusOn();\n                            break;\n                    }\n                }\n            });\n\n\n            App.util.hideLoading();\n\n        });\n    },\n\n    setChart : function (nIdx) {\n        var self = this;\n        /**\n         * set Chart\n         */\n        App.vars.oDeviceInfoDeviceId = App.vars.oSchoolDetail.dvcIdList[nIdx];\n\n\n        App.model.intariorSensorChartData.fetch({\n            method: \"POST\",\n            headers: {\n                \"Authorization\": App.vars.token,\n                \"Content-Type\": \"application/json\",\n                \"company\": \"school\"\n            },\n            data: JSON.stringify(App.vars.oDeviceInfoDeviceId),\n            success: function (model, response) {\n\n                App.vars.oSchoolDetail.intariorSensorChartData = response;\n                console.log('@ App.model.intariorSensorChartData');\n                console.log(response);\n\n                self.airMultiSensorGraph(App.vars.oSchoolDetail.intariorSensorChartData);\n\n                //count++;\n                //callback(null, \"\");\n            },\n            error: function (e) {\n                App.util.hideLoading();\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    schoolAirStateSlider: function () {\n        var self = this;\n        var isLoop = false;\n        var touchEnabled = false;\n\n        if ($('.area_school_air .slider .box_slide').length > 1) {\n            isLoop = true;\n            touchEnabled = true;\n        }\n\n\n        var slider = this.detailSlider = $('.area_school_air .slider').bxSlider({\n            adaptiveHeight: true,\n            infiniteLoop: false,\n            touchEnabled: touchEnabled,\n            // startSlide: App.vars.nSlideIndex,\n            startSlide: App.vars.oSchoolDetail.nIdx,\n            preventDefaultSwipeY: true,\n            onSliderLoad: function (currentIndex) {\n\n                App.vars.oSchoolDetail.oDeviceInfo.forEach(function (value, index) {\n                    var airStateColor;\n                    if (value.fncInfo == \"01\" || value.fncInfo == \"02\" || value.fncInfo == \"03\" || value.fncInfo == \"04\") {\n                        switch (value.fncInfo) {\n                            case \"01\" :\n                                airStateColor = \"good\";\n                                break;\n                            case \"02\" :\n                                airStateColor = \"normal\";\n                                break;\n                            case \"03\" :\n                                airStateColor = \"bad\";\n                                break;\n                            case \"04\" :\n                                airStateColor = \"worse\";\n                                break;\n                        }\n                    } else {\n                        switch (value.fncInfo) {\n                            case \"매우좋음\" :\n                                airStateColor = \"best\";\n                                break;\n                            case \"좋음\" :\n                            case \"청정\" :\n                                airStateColor = \"good\";\n                                break;\n                            case \"보통\" :\n                            case \"저오염\" :\n                                airStateColor = \"normal\";\n                                break;\n                            case \"나쁨\" :\n                                airStateColor = \"bad\";\n                                break;\n                            case \"중오염\" :\n                                airStateColor = \"harm\";\n                                break;\n                            case \"매우나쁨\" :\n                            case \"고오염\" :\n                                airStateColor = \"worse\";\n                                break;\n                        }\n                    }\n\n                    App.vars.oSchoolDetail.oDeviceInfo[0].openDeviceList.forEach(function (array, index) {\n                        if (\n                            array.fncCd === 'D318' ||\n                            array.fncCd === 'D238'\n                        ) { //현대 어웨어 분기처리\n                            $('#pointFncVal').html(array.fncVal);\n                        } else if (array.fncCd === 'D239') {\n                            $('#diffStatus').html(array.fncVal);\n                        }\n                    });\n\n\n                    App.vars.oSchoolDetail.oDeviceInfo[index].openDeviceList.forEach(function (array, index) {\n                        if (array.fncCd === 'D03') {\n                            if (array.fncVal == \"off\") {\n                                airStateColor = \"off\";\n                            }\n                        }\n                    });\n\n                    $('.bx-pager').find('.bx-pager-item').eq(index).addClass(airStateColor);\n                });\n                $('.area_school_air .slider .box_slide').eq(currentIndex + 1).addClass('active').siblings().removeClass('active');\n                //App.vars.oSchoolDetail.nIdx = 0;\n                self.getRtnDvcId(currentIndex);\n                self.setChart(currentIndex);\n            },\n            onSlideBefore: function (el, oldIndex, newIndex) {\n                $('.area_school_air .slider .box_slide').eq(newIndex + 1).addClass('active').siblings().removeClass('active');\n                App.view.deviceEventView.setDevice(newIndex);\n                self.getRtnDvcId(newIndex);\n                App.vars.oSchoolDetail.nIdx = newIndex;\n            },\n            onSlideAfter: function (el, oldIndex, newIndex) {\n                // self.airMultiSensorGraph(App.vars.oSchoolDetail.intariorSensorChartData);\n                App.vars.oSchoolDetail.nIdx = newIndex;\n                console.log(newIndex);\n                // App.view.deviceEventView.setDevice();\n                // console.log($('.box_air_all ul li').length);\n\n                var $box = self.$el.find('.box_air_all ul');\n                $box.attr('class', 'clearfix').addClass('col' + $box.find('li').length);\n\n                if (App.vars.oSchoolDetail !== undefined) {\n                    if (App.vars.oSchoolDetail.oDeviceInfo[newIndex].connStatYn === \"N\") {\n                        var welList = $('.wrap_area_box_list');\n                        $('.area_box_list').prepend(templete[\"error/deviceConnectError\"]);\n                        welList.find('.box_card').each(function () {\n                            welList.find('.box_card').addClass('off');\n                            if (welList.find('.box_card').hasClass('net_error') === true) {\n                                welList.find('.net_error').removeClass('off');\n                            }\n                        });\n                        welList.find('.box_card').find('input').prop('checked', false);\n                        $('.area_school_air').find('.slider').find('.active').addClass('off')\n                        $('.bx-pager-item').eq(App.vars.oSchoolDetail.nIdx).addClass('off');\n                    }\n                }\n            }\n        });\n    },\n    getGradeStartByZero: function (bad, nomal, good, nowVal) {\n\n        if (nowVal == \"보통\") {\n            return \"grade2\";\n\n        } else if (nowVal == \"\" || nowVal == undefined) {\n            return \"\";\n        } else {\n            if (nowVal <= good) {\n                return \"grade1\";\n            } else if (nowVal <= nomal) {\n                return \"grade2\";\n            } else if (nowVal <= bad) {\n                return \"grade3\";\n            } else {\n                return \"grade4\";\n            }\n        }\n\n    },\n\n    getGradeStartBySelectedNum: function (tooBad1, tooBad2, bad1, bad2, nomal1, nomal2, nowVal) {\n        if (nowVal == \"보통\") {\n            return \"grade2\";\n        } else if (nowVal == \"\" || nowVal == undefined) {\n            return \"\";\n        } else {\n            if (nowVal <= tooBad1 || nowVal >= tooBad2) {\n                return \"grade4\"\n            } else if (nowVal <= bad1 || nowVal >= bad2) {\n                return \"grade3\"\n            } else if (nowVal <= nomal1 || nowVal >= nomal2) {\n                return \"grade2\"\n            } else {\n                return \"grade1\"\n            }\n        }\n\n    },\n    getRtnDvcId: function (index) {\n        var self = this;\n        App.vars.sRtnDvcId = App.vars.oSchoolDetail.oDeviceInfo[index].rtnDvcId;\n    },\n    // airMultiSensorGraph: function (data) {\n    //\n    //     var self = this;\n    //\n    //\n    //     try {\n    //         //var data = [10.5, 9, 11];\n    //\n    //         var todayScore = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];\n    //         var todayTm = [];\n    //         var yesterdayScore = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];\n    //         var yesterdayTm = [];\n    //         var todayMaxScore = null;\n    //         var todayMinScore = null;\n    //         var yesterdayMaxScore = null;\n    //         var yesterdayMinScore = null;\n    //         var yesterdayLastIndex = 0;\n    //         var todayLastIndex = 0;\n    //         var seriesDataAll = [];\n    //\n    //         /**\n    //          * today 데이터 처리\n    //          */\n    //\n    //         data.chart.today.forEach(function (a, i) {\n    //             todayScore[(a.tm * 1) - 1] = a.score * 1;\n    //         });\n    //         console.log('@@@ todayScore');\n    //         console.log(todayScore);\n    //         //\n    //         // todayScore = [\n    //         //     0,\n    //         //     30,\n    //         //     30,\n    //         //     10,\n    //         //     10,\n    //         //     20,\n    //         //     0,\n    //         //     30,\n    //         //     20,\n    //         //     20,\n    //         //     20,\n    //         //     30,\n    //         //     30,\n    //         //     30,\n    //         //     30,\n    //         //     30,\n    //         //     20,\n    //         //     20,\n    //         //     10,\n    //         //     20,\n    //         //     30,\n    //         //     30,\n    //         //     30,\n    //         //     48\n    //         // ];\n    //\n    //         for (var j = 0; j < todayScore.length; j++) {\n    //             if (todayScore[j] != null) {\n    //                 if (todayMinScore >= todayScore[j] || todayMinScore == null) {\n    //                     todayMinScore = todayScore[j];\n    //                 }\n    //                 if (todayMaxScore < todayScore[j] || todayMaxScore == null) {\n    //                     todayMaxScore = todayScore[j];\n    //                 }\n    //                 todayLastIndex = j;\n    //             }\n    //         }\n    //\n    //         var todayMinScoreIndex;\n    //         var todayMaxScoreIndex;\n    //\n    //         if (todayMinScore != null) {\n    //             todayMinScoreIndex = todayScore.indexOf(todayMinScore);\n    //         }\n    //         if (todayMaxScore != null) {\n    //             todayMaxScoreIndex = todayScore.indexOf(todayMaxScore);\n    //         }\n    //\n    //         todayScore[todayMinScoreIndex] = {\n    //             y: todayScore[todayMinScoreIndex],\n    //             marker: {enabled: true, radius: 3},\n    //             color: '#000000'\n    //         };\n    //         todayScore[todayMaxScoreIndex] = {\n    //             y: todayScore[todayMaxScoreIndex],\n    //             marker: {enabled: true, radius: 3},\n    //             color: '#000000'\n    //         };\n    //\n    //\n    //         /**\n    //          * 선색 정의\n    //          *\n    //          */\n    //\n    //         var oColor = {\n    //             linearGradient: {\n    //                 x1: 0,\n    //                 y1: 0,\n    //                 x2: 0,\n    //                 y2: 1\n    //             },\n    //             stops: [\n    //                 [0, '#4aa6ec'],\n    //                 [0.33, '#5cc37e'],\n    //                 [0.66, '#ff9f3e'],\n    //                 [1, '#e1423e']\n    //             ]\n    //         };\n    //\n    //         if (todayMinScoreIndex == todayMaxScoreIndex) {\n    //             oColor = '#4aa6ec'\n    //         }\n    //\n    //\n    //\n    //         /**\n    //          * 스마일 위치값\n    //          */\n    //         var nPostionMarker = todayScore[todayLastIndex].y;\n    //         if (nPostionMarker == undefined) {\n    //             nPostionMarker = todayScore[todayLastIndex] + 5;\n    //         }\n    //         /**\n    //          * 스마일 표시\n    //          */\n    //         var smileMarker = \"\";\n    //         if (nPostionMarker > 80) {\n    //             smileMarker = \"good\";\n    //         } else if (todayScore[todayLastIndex] > 70) {\n    //             smileMarker = \"normal\";\n    //         } else if (todayScore[todayLastIndex] > 60) {\n    //             smileMarker = \"bad\";\n    //         } else {\n    //             smileMarker = \"worse\";\n    //         }\n    //\n    //\n    //         /**\n    //          * yesterday 데이터 처리\n    //          */\n    //\n    //         data.chart.yesterday.forEach(function (a, i) {\n    //             yesterdayScore[(a.tm * 1) - 1] = a.score * 1;\n    //         });\n    //\n    //         // yesterdayScore = [\n    //         //     10,\n    //         //     20,\n    //         //     30,\n    //         //     40,\n    //         //     50,\n    //         //     60,\n    //         //     70,\n    //         //     80,\n    //         //     90,\n    //         //     20,\n    //         //     10,\n    //         //     20,\n    //         //     30,\n    //         //     40,\n    //         //     50,\n    //         //     60,\n    //         //     70,\n    //         //     80,\n    //         //     90,\n    //         //     10,\n    //         //     20,\n    //         //     30,\n    //         //     40\n    //         // ];\n    //\n    //         for (var j = 0; j < yesterdayScore.length; j++) {\n    //             if (yesterdayScore[j] != null) {\n    //                 if (yesterdayMinScore >= yesterdayScore[j] || yesterdayMinScore == null) {\n    //                     yesterdayMinScore = yesterdayScore[j];\n    //                 }\n    //                 if (yesterdayMaxScore < yesterdayScore[j] || yesterdayMaxScore == null) {\n    //                     yesterdayMaxScore = yesterdayScore[j];\n    //                 }\n    //                 yesterdayLastIndex = j;\n    //             }\n    //         }\n    //\n    //         var yesterdayMinScoreIndex = null;\n    //         var yesterdayMaxScoreIndex = null;\n    //\n    //         if (yesterdayMinScore != null) {\n    //             yesterdayMinScoreIndex = yesterdayScore.indexOf(yesterdayMinScore);\n    //         }\n    //         if (yesterdayMaxScore != null) {\n    //             yesterdayMaxScoreIndex = yesterdayScore.indexOf(yesterdayMaxScore);\n    //         }\n    //\n    //         yesterdayScore[yesterdayMinScoreIndex] = {\n    //             y: yesterdayScore[yesterdayMinScoreIndex],\n    //             marker: {enabled: true, radius: 3},\n    //             color: '#727272',\n    //             dataLabels: {\n    //                 enabled: true,\n    //                 x: -1,\n    //                 y: 0,\n    //                 /* shadow: true,*/\n    //                 style: {\n    //                     fontWeight: 'bold',\n    //                     fontSize: 12,\n    //                     color: '#dc3b38'\n    //                 }\n    //             }\n    //         };\n    //         yesterdayScore[yesterdayMaxScoreIndex] = {\n    //             y: yesterdayScore[yesterdayMaxScoreIndex],\n    //             marker: {enabled: true, radius: 3},\n    //             color: '#727272',\n    //             dataLabels: {\n    //                 enabled: true,\n    //                 y: 1,\n    //                 /* shadow: true,*/\n    //                 style: {\n    //                     fontWeight: 'bold',\n    //                     fontSize: 12,\n    //                     color: '#44a9f0'\n    //                 }\n    //             }\n    //         };\n    //\n    //         App.vars.chart = $('#line_chart').empty().highcharts({\n    //             chart: {\n    //                 type: 'spline',\n    //                 marginTop: 50,\n    //                 marginLeft: 20,\n    //                 marginRight: 20,\n    //                 marginBottom: 50,\n    //                 height: 220\n    //             },\n    //             credits: {\n    //                 enabled: false\n    //             },\n    //             title: {\n    //                 text: ''\n    //             },\n    //             xAxis: {\n    //                 type: 'time',\n    //                 gridLineWidth: 0,\n    //                 categories: [\n    //                     '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',\n    //                     '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],\n    //                 min: 0,\n    //                 title: {\n    //                     text: '(시간대 평균)',\n    //                     align: 'high',\n    //                     style: {\n    //                         fontSize: '10'\n    //                     }\n    //                 }\n    //             },\n    //             legend: {\n    //                 enabled: false\n    //             },\n    //             yAxis: {\n    //                 min: 0,\n    //                 title: {\n    //                     text: null\n    //                 },\n    //                 gridLineWidth: 0,\n    //                 minorGridLineWidth: 0, max: 100,\n    //                 lineWidth: 0,\n    //                 labels: {\n    //                     enabled: false\n    //                 }\n    //             },\n    //             tooltip: {\n    //                 enabled: false,\n    //                 useHTML: true,\n    //                 style: {\n    //                     zIndex: 9999\n    //                 },\n    //                 backgroundColor: 'rgba(247,247,247,0.7)'\n    //             },\n    //             allowHTML: true,\n    //\n    //             /**\n    //              * series\n    //              */\n    //             series: [{\n    //                 type: 'areaspline',\n    //                 name: '어제',\n    //                 dashStyle: 'ShortDot',\n    //                 color: '#d3d4d7',\n    //                 fillColor: '#f6f7f9',\n    //                 marker: {\n    //                     enabled: false,\n    //                     radius: 2\n    //                 },\n    //                 // keys: ['y', 'id'],\n    //                 dataLabels: {\n    //                     enabled: false\n    //                 },\n    //                 data: yesterdayScore\n    //             }, {\n    //                 name: '오늘',\n    //                 color: oColor,\n    //                 marker: {\n    //                     enabled: false,\n    //                     'symbol': 'circle',\n    //                     color: '#000',\n    //                     fillColor: '#000',\n    //                     radius: 2\n    //                 },\n    //                 data: todayScore\n    //             }],\n    //\n    //             /**\n    //              * annotations\n    //              */\n    //\n    //             annotations: [\n    //\n    //                 {\n    //                     labelOptions: {\n    //                         useHTML: true,\n    //                         format: '<div class=\"tooltip-marker-low\"><a href=\"#\">' + todayScore[todayMinScoreIndex].y + '</a></div>',\n    //                         backgroundColor: 'transparent',\n    //                         //verticalAlign: 'bottom',\n    //                         //padding:6,\n    //                         borderWidth: 0,\n    //                         x: -18,\n    //                         y: 10\n    //                         //borderColor:'rgba(0,0,0,0)',\n    //                         //distance:-20\n    //                     },\n    //                     labels: [{\n    //                         point: {\n    //                             xAxis: 0,\n    //                             yAxis: 0,\n    //                             x: todayMinScoreIndex,\n    //                             y: todayScore[todayMinScoreIndex].y\n    //                         },\n    //                         style: {\n    //                             fontSize: '10px'\n    //                         }\n    //                     }]\n    //                 },\n    //                 {\n    //                     labelOptions: {\n    //                         useHTML: true,\n    //                         format: '' + '<div class=\"overlay_marker ' + smileMarker + '\"></div>',\n    //                         backgroundColor: Highcharts.color('none').setOpacity(0).get(),\n    //                         borderWidth: 0,\n    //                         x: -2,\n    //                         y: -60\n    //                     }\n    //                     , labels: [{\n    //                         point: {\n    //                             xAxis: 0,\n    //                             yAxis: 0,\n    //                             x: todayLastIndex,\n    //                             y: nPostionMarker /*- 7*/\n    //                         }\n    //                     }]\n    //                 },\n    //                 {\n    //                     labelOptions: {\n    //                         useHTML: true,\n    //                         format: '<div class=\"tooltip-marker-high\"><a href=\"#\">' + todayScore[todayMaxScoreIndex].y + '</a></div>',\n    //                         backgroundColor: 'transparent',\n    //                         //verticalAlign: 'bottom',\n    //                         //padding:6,\n    //                         borderWidth: 0,\n    //                         x: -18,\n    //                         y: -33\n    //                     },\n    //                     zIndex: 0,\n    //                     labels: [{\n    //                         point: {\n    //                             xAxis: 0,\n    //                             yAxis: 0,\n    //                             x: todayMaxScoreIndex,\n    //                             y: todayScore[todayMaxScoreIndex].y\n    //                         }\n    //                     }]\n    //                 }\n    //             ],\n    //         });\n    //\n    //\n    //         var nLeftMin = ($(window).width() - 40) * (((todayMinScoreIndex - 1) / 2) * 8.3 / 100);\n    //         $('.tooltip-marker-low').parent().parent().css({\n    //             'left': nLeftMin + 17\n    //         });\n    //         if (todayScore[todayMinScoreIndex] == undefined) {\n    //             if (todayScore[todayMinScoreIndex] < 10) {\n    //                 $('.tooltip-marker-low').parent().parent().css({\n    //                     'top': 168\n    //                 });\n    //             }\n    //         } else {\n    //             if (todayScore[todayMinScoreIndex].y < 10) {\n    //                 $('.tooltip-marker-low').parent().parent().css({\n    //                     'top': 168\n    //                 });\n    //             }\n    //         }\n    //\n    //         var nLeftMax = ($(window).width() - 40) * (((todayMaxScoreIndex - 1) / 2) * 8.3 / 100);\n    //         $('.tooltip-marker-high').parent().parent().css({\n    //             'left': nLeftMax + 17\n    //         });\n    //         var nLeftMarker = ($(window).width() - 40) * (((todayLastIndex - 1) / 2) * 8.3 / 100);\n    //         $('.overlay_marker').parent().parent().css({\n    //             // 'left': nLeftMarker + 5\n    //             'left': nLeftMarker + 12\n    //         });\n    //         // if (todayScore[todayLastIndex] <= 10) {\n    //         //     $('.overlay_marker').parent().parent().css({\n    //         //         'top': 110\n    //         //     });\n    //         // }\n    //\n    //     } catch (e) {\n    //         $('.legend').hide();\n    //         $('#line_chart').html('<span style=\"display: inline-block; width: 100%; text-align: center; line-height: 200px;\">데이터가 존재하지 않습니다</span>');\n    //     }\n    //\n    //\n    //\n    //\n    //\n    //\n    // },\n\n\n\n\n\n\n    // dummy\n    airMultiSensorGraph: function () {\n        var data = [10.5, 9, 11];\n\n        $('#line_chart').highcharts({\n            chart: {\n                type: 'spline',\n                marginTop: 50,\n                marginLeft: 20,\n                marginRight: 20,\n                marginBottom: 50,\n                height: 220\n            },\n            credits: {\n                enabled: false\n            },\n            title: {\n                text: ''\n            },\n            xAxis: {\n                type: 'time',\n                gridLineWidth: 0,\n                /*categories: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23']*/\n<<<<<<< .mine\n                categories: todayTm,\n                tickInterval: 1,\n                min:0,\n||||||| .r2577\n                categories: yesterdayTm,\n                tickInterval: 1,\n                min:0,\n=======\n                tickInterval: 2,\n                min:1,\n>>>>>>> .r2653\n                title: {\n                    text: '(시간대 평균)',\n                    align: 'high',\n                    style: {\n                        fontSize:'10'\n                    }\n                }\n            },\n            legend: {\n                enabled: false\n            },\n            yAxis: {\n                min: 0,\n                title: {\n                    text: null\n                },\n                gridLineWidth: 0,\n                minorGridLineWidth: 0, max: 120,\n                lineWidth:0,\n                labels: {\n                    enabled: false\n                }\n            },\n            tooltip: {\n                enabled:false,\n                useHTML: true,\n                style: {\n                    zIndex: 9999\n                },\n                backgroundColor: 'rgba(247,247,247,0.7)'\n            },\n            allowHTML: true,\n            annotations: [{\n                labelOptions: {\n                    useHTML :true,\n<<<<<<< .mine\n                    format:'<div class=\"tooltip-marker-high\"><a href=\"#\">'+ todayMaxScore +'</a></div>',\n||||||| .r2577\n                    format:'<div class=\"tooltip-marker-high\"><a href=\"#\">'+ yesterdayMaxScore +'</a></div>',\n=======\n                    format:'<div class=\"tooltip-marker-high\"><a href=\"#\">'+'88'+'</a></div>',\n>>>>>>> .r2653\n                    backgroundColor: 'transparent',\n                    //verticalAlign: 'bottom',\n                    //padding:6,\n                    borderWidth: 0,\n                    x:-18,\n                    y:-22\n                },\n                zIndex:0,\n                labels: [{\n                    point: {\n<<<<<<< .mine\n                        x: todayMaxScoreIndex,\n                        y: 143\n||||||| .r2577\n                        x: yesterdayMaxScoreIndex,\n                        y: 143\n=======\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 3,\n                        y: 88\n>>>>>>> .r2653\n                    }\n                }]\n            },{\n                labelOptions: {\n                    useHTML :true,\n<<<<<<< .mine\n                    format:'<div class=\"tooltip-marker-low\"><a href=\"#\">'+ todayMinScore +'</a></div>',\n||||||| .r2577\n                    format:'<div class=\"tooltip-marker-low\"><a href=\"#\">'+ yesterdayMinScore +'</a></div>',\n=======\n                    format:'<div class=\"tooltip-marker-low\"><a href=\"#\">'+'44'+'</a></div>',\n>>>>>>> .r2653\n                    backgroundColor: 'transparent',\n                    //verticalAlign: 'bottom',\n                    //padding:6,\n                    borderWidth: 0,\n                    x:-18,\n                    y:13\n                    //borderColor:'rgba(0,0,0,0)',\n                    //distance:-20\n                },\n                labels: [{\n                    point: {\n<<<<<<< .mine\n                        x: todayaMinScoreIndex,\n                        y: 0\n||||||| .r2577\n                        x: yesterdayaMinScoreIndex,\n                        y: 0\n=======\n                        xAxis: 0,\n                        yAxis: 0,\n                        x: 6,\n                        y: 44\n>>>>>>> .r2653\n                    },\n                    style: {\n                        fontSize: '10px'\n                    }\n                }]\n            },{\n                labelOptions: {\n                    useHTML :true,\n                    format:''+'<div class=\"overlay_marker good\"></div>',\n                    backgroundColor: Highcharts.color('none').setOpacity(0).get(),\n                    borderWidth: 0,\n                    x:-2,\n                    y:-3\n                }\n                ,labels:[{\n                    point: {\n                        xAxis: 0,\n                        yAxis: 0,\n<<<<<<< .mine\n                        x: todayLastIndex,\n||||||| .r2577\n                        x: yesterdayLastIndex,\n=======\n                        x: 16,\n>>>>>>> .r2653\n                        y: 75\n                    }\n                }]\n            }\n            ],\n            series: [{\n                type: 'areaspline',\n                name: '어제',\n                dashStyle: 'ShortDot',\n                color: '#d3d4d7',\n                fillColor: '#f6f7f9',\n                marker: {\n                    enabled: false,\n                    radius:2\n                },\n                dataLabels : {\n                    enabled: false\n                },\n                data: [45, 48, 55, 44, 60, 50, 60, 84, 75, 88, 80, 90, {\n                    y: 95, marker: {enabled: true,radius: 3}, color: '#727272', dataLabels: {\n                        enabled: true,\n                        y: 1,\n                        /* shadow: true,*/\n                        style: {\n                            fontWeight: 'bold',\n                            fontSize: 12,\n                            color: '#44a9f0'\n                        }\n                    }\n                },\n                    80, 84, 71, 80,60, 55, 60, {\n                        y: 38, marker: {enabled: true,radius: 3}, color: '#727272', dataLabels: {\n                            enabled: true,\n                            x:-1,\n                            y: 28,\n                            /* shadow: true,*/\n                            style: {\n                                fontWeight: 'bold',\n                                fontSize: 12,\n                                color: '#dc3b38'\n                            }\n                        }\n                    }, 50, 55, 60]\n\n            }, {\n                name: '오늘',\n                color: {\n                    linearGradient: {\n                        x1: 0,\n                        y1: 0,\n                        x2: 0,\n                        y2: 1\n                    },\n                    stops: [\n                        [0, '#4aa6ec'],\n                        [0.33, '#5cc37e'],\n                        [0.66, '#ff9f3e'],\n                        [1, '#e1423e']\n                    ]\n                },\n                marker: {\n                    enabled: false,\n                    'symbol': 'circle',\n                    color: '#000',\n                    fillColor: '#000',\n                    radius:2\n                },\n                data: [50, 65, 57, {y: 88, marker: {enabled: true,radius: 3}, color: '#000000'}, 79, 52,\n                    {\n                        y: 44,\n                        marker: {enabled: true,radius: 3},\n                        color: '#000000'\n                    }, 56, 70, 80,66, 70, 60, 55, 75, 60, 89]\n\n            }]\n        });\n    }\n\n});";
},"useData":true});

this["templete"]["searchSchool/searchSchool.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.searchSchool = Backbone.View.extend({\n    className :'area_search_wrap',\n    oSearchResultData : {},\n    oSearchRecentText : {\n        \"loginId\":App.vars.loginId\n    },\n    oSearchAutoText : {\n        \"serKey\": \"\",\n        \"size\":\"0\",\n        \"offset\": \"0\",\n        \"loginId\":App.vars.loginId\n    },\n    initialize: function (routeParams) {\n\n        this.render(routeParams);\n    },\n    render: function (routeParams) {\n        var self = this;\n        // 헤더 바인딩\n        App.view.subHeader.render();\n        console.log()\n        // 템플릿팅\n        self.$el.html(templete[\"searchSchool/searchSchoolWrap\"]());\n\n        if(\n            App.vars.loginId === undefined ||\n            App.vars.loginId === ''\n        ){\n            self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchNoResult\"]());\n        } else {\n            this.searchRecentTempleteBinding();\n        }\n\n        // 컨텐츠 바인딩\n        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');\n        $('.wrap_contents').scrollTop(0);\n    },\n    searchResultTempleteBinding: function(val){\n        var self = this;\n        self.oSearchAutoText = $.extend(self.oSearchAutoText, val);\n        // 검색 결과 템플릿 바인딩\n        console.log(self.oSearchAutoText)\n        self.oSearchAutoText.loginId = App.vars.loginId;\n        App.model.searchSchoolResult.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(self.oSearchAutoText),\n            beforeSend: function(){\n                /*App.util.pageLoadingShow();*/\n            },\n            success : function (model, response) {\n                self.oSearchResultData = response;\n                if(self.oSearchResultData.schList.length <= 0){\n                    self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchNoResult\"]());\n                } else {\n                    console.log(response)\n                    var sSearchText = $('.text_box').val();\n                    for (var i = 0; i < response.schList.length; i++) {\n                        response.schList[i].schNm = response.schList[i].schNm.replace(sSearchText, \"<em>\" + sSearchText + \"</em>\")\n                    }\n                    self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchResult\"](self.oSearchResultData));\n                }\n            },\n            complete : function(){\n                /*App.util.pageLoadingHide();*/\n            },\n            error : function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                /*App.util.hideLoading();*/\n                App.util.openNetworkErrorPopup();\n            }\n        });\n\n    },\n    searchRecentTempleteBinding: function(){\n        var self = this;\n        console.log(self.oSearchRecentText);\n        // 최근 검색 템플릿 바인딩\n        self.oSearchRecentText.loginId = App.vars.loginId;\n\n        App.model.recentlySearchSchoolList.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(self.oSearchRecentText),\n            beforeSend: function(){\n                /*App.util.pageLoadingShow();*/\n            },\n            success : function (model, response) {\n                self.oSearchResultData = response;\n                if(self.oSearchResultData.schList.length <= 0){\n                    self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchNoRecent\"]());\n                } else {\n\n                    self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchRecent\"](self.oSearchResultData));\n                }\n            },\n            complete : function(){\n                /*App.util.pageLoadingHide();*/\n            },\n            error : function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    addRecentSearchList: function(val){\n        var self = this;\n        self.oSearchRecentText = $.extend(self.oSearchRecentText, val);\n        \n        // 최근검색 텍스트 보내기\n        self.oSearchRecentText.loginId = App.vars.loginId;\n        if(self.oSearchRecentText.serKey !== \"\"){\n            App.model.searchSchoolResult.fetch({\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                data: JSON.stringify(self.oSearchRecentText),\n                beforeSend: function(){\n                    /*App.util.pageLoadingShow();*/\n                },\n                success : function (model, response) {\n\n                },\n                complete : function(){\n                    /*App.util.pageLoadingHide();*/\n                },\n                error : function (e) {\n                    //alert(\"서버 데이터 조회에 실패하였습니다\");\n                    App.util.openNetworkErrorPopup();\n                }\n            });\n        } else {\n            alert('검색어를 입력해주세요');\n        }\n    },\n    autoCompleteSearch: function(val){\n        var self = this;\n        self.oSearchAutoText = $.extend(self.oSearchAutoText, val);\n        self.oSearchAutoText.loginId = App.vars.loginId;\n        App.model.autoCompletedSearchSchool.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(self.oSearchAutoText),\n            beforeSend: function(){\n                /*App.util.pageLoadingShow();*/\n            },\n            success : function (model, response) {\n                // $('._searchList li a').each(function(){\n                //     var sSearchText = $('.text_box').val();\n                //     var nSearchLength = sSearchText.length;\n                //     var sSchoolName = $(this).text();\n                //\n                //     for (var i = 0; i < response.serList.length; i++) {\n                //         response.serList[i].serKey = response.serList[i].serKey.replace(sSearchText, \"<em>\" + sSearchText + \"</em>\")\n                //     }\n                // })\n                var sSearchText = $('.text_box').val();\n                for (var i = 0; i < response.serList.length; i++) {\n                    response.serList[i].serKey = response.serList[i].serKey.replace(sSearchText, \"<em>\" + sSearchText + \"</em>\")\n                }\n\n\n                self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchAutoComplete\"](response));\n\n            },\n            complete : function(){\n                /*App.util.pageLoadingHide();*/\n\n\n                // $('._searchList li a').each(function(){\n                //     var sSearchText = $('.text_box').val();\n                //     var nSearchLength = sSearchText.length;\n                //     var sSchoolName = $(this).text();\n                //     if(sSchoolName.indexOf(sSearchText) >= 0){\n                //         sSchoolName.replace(sSearchText, \"\")\n                //\n                //     }\n                // })\n            },\n            error : function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                App.util.openNetworkErrorPopup();\n            }\n        });\n    },\n    deleteRecentSearchList: function(targetId){\n        var self = this;\n        var deleteTarget = {\"loginId\":App.vars.loginId,\"serId\":targetId};\n        App.model.recentlySearchSchoolDelete.fetch({\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: JSON.stringify(deleteTarget),\n            success : function (model, response) {\n\n            },\n            error : function (e) {\n                //alert(\"서버 데이터 조회에 실패하였습니다\");\n                App.util.openNetworkErrorPopup();\n            },\n            complete: function(){\n                /*App.util.pageLoadingHide();*/\n                self.searchRecentTempleteBinding();\n            }\n        });\n    },\n    noResultTempleteBinding: function(){\n        self.$el.find('.wrap_search_contents').html(templete[\"searchSchool/searchNoResult\"]());\n    }\n});";
},"useData":true});

this["templete"]["wrap/wrapContainer.js"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "directory.wrapContainer = Backbone.View.extend({\n    initialize: function (params) {\n\n        this.render();\n    },\n    render: function () {\n\n        /*App.fn.globalUtil = new directory.globalUtil();*/\n        this.$el.html(templete[\"wrap/wrapContainer\"]());\n\n        return this;\n    }\n});\n";
},"useData":true});