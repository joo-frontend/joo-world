this["templete"] = this["templete"] || {};

this["templete"]["01_popupSetting/popupSetting"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popup_dim\">\n    <div class=\"popup_cs\" style=\"width: 267px;height: 283px;\">\n        <div class=\"popup_header\">\n            <div class=\"title\">스마트 수화방송</div>\n        </div>\n        <div class=\"popup_body\">\n            <ul class=\"_section active\">\n                <li class=\"focus\"><span>수화 크기조절</span></li>\n                <li><span>수화 위치변경</span></li>\n                <li><span>수화 화면분할</span></li>\n                <li><span>설정초기화</span></li>\n            </ul>\n        </div>\n        <div class=\"popup_footer\">\n            <div class=\"btn_group _section\">\n                <div class=\"btn focus\"><span>닫기</span></div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["templete"]["01_settingDivide/settingDivide"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div style=\"width: 960px; height: 540px; background: #000\">\n\n    <div class=\"area_red_key\">\n        <span>빨간버튼</span>바로보기\n    </div>\n\n    <div class=\"area_pip\">\n        <img src=\"img/img_sign_person.jpg\" alt=\"\">\n    </div>\n\n    <!--<div class=\"tooltip medium\"><img src=\"img/img_position.png\" alt=\"\"></div>-->\n        <div class=\"tooltip medium\"><img src=\"img/img_size.png\" alt=\"\"></div>\n        <!--<div class=\"tooltip small\" style=\"display: none;\"><img src=\"img/img_display.png\" alt=\"\"></div>-->\n\n</div>";
},"useData":true});

this["templete"]["01_settingPosition/settingPosition"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div style=\"width: 960px; height: 540px; background: #000\">\n\n    <div class=\"area_red_key\">\n        <span>빨간버튼</span>바로보기\n    </div>\n\n    <div class=\"area_position _section\">\n        <div class=\"_moveFocus\">\n            <ul>\n                <li class=\"focus\"></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"area_pip\">\n        <img src=\"img/img_sign_person.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"tooltip medium\"><img src=\"img/img_position.png\" alt=\"\"></div>\n</div>";
},"useData":true});

this["templete"]["01_settingSize/settingSize"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div style=\"width: 960px; height: 540px; background: #000\">\n\n    <div class=\"area_red_key\">\n        <span>빨간버튼</span>바로보기\n    </div>\n\n    <div class=\"area_pip\">\n        <img src=\"img/img_sign_person.jpg\" alt=\"\">\n    </div>\n\n    <!--<div class=\"tooltip medium\"><img src=\"img/img_position.png\" alt=\"\"></div>-->\n        <div class=\"tooltip medium\"><img src=\"img/img_size.png\" alt=\"\"></div>\n        <!--<div class=\"tooltip small\" style=\"display: none;\"><img src=\"img/img_display.png\" alt=\"\"></div>-->\n\n</div>";
},"useData":true});

this["templete"]["01_smartSign/smartSign"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div style=\"width: 960px; height: 540px; background: #000\">\n\n    <div class=\"area_red_key\">\n        <span>빨간버튼</span>바로보기\n    </div>\n    \n    <div class=\"area_pip\">\n        <img src=\"img/img_sign_person.jpg\" alt=\"\">\n    </div>\n\n</div>";
},"useData":true});

this["templete"]["wrap/wrapContainer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"wrap\">\n    <div id=\"container\"></div>\n</div>\n<div id=\"wrap_popup\" class=\"_wrap_popup\">\n	<div id=\"container_popup\"></div>\n</div>";
},"useData":true});