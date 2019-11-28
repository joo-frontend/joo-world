Handlebars.registerHelper('isFirst', function (index, options) {
    if (index === 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper('isIndex', function (nIdx, index, options) {
    if (index === nIdx) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper('isAlone', function (index, options) {
    if (options.data.root.btnList.length === 1) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
/**
 * channelVod 포스터
 */
Handlebars.registerHelper('setChVodPoster', function (index, options) {
    return options.data.root.poster[index];
});

/**
 * 날짜 변경 공통 함수
 */
Handlebars.registerHelper('changeDate', function (date, type, options) {
    // type:"20170614000000"
    // type:"YYYYMMDDhhmmss"
    var sYear = date.substring(0, 4);
    var sMonth = date.substring(4, 6);
    var sDay = date.substring(6, 8);

    if (
        type === "YYYY.MM.DD" ||
        type === "typeDate"
    ) {
        return sYear + "." + sMonth + "." + sDay;
    }
});
Handlebars.registerHelper('changeDateDot', function (time, options) {
    //var sTime = time; //"2017-07-21T22:30:00"
    var sTime = time.split('T')[0];
    return sTime.replace(/-/g, ".");
});

/**
 * 숫자 콤마
 */
Handlebars.registerHelper('numberDot', function (number, options) {
    if (number === undefined) {
        return 0;
    } else {
        var len, point, str;
        number = number + "";
        point = number.length % 3;
        len = number.length;

        str = number.substring(0, point);
        while (point < len) {
            if (str != "") str += ",";
            str += number.substring(point, point + 3);
            point += 3;
        }

        return str;
    }
});
Handlebars.registerHelper('txtPoint', function (number, options) {
    if (number === undefined) {
        return new Handlebars.SafeString('<strong class="txt">데이터를<br>불러올 수 없습니다</strong>')
    } else {
        var len, point, str;
        number = number + "";
        point = number.length % 3;
        len = number.length;

        str = number.substring(0, point);
        while (point < len) {
            if (str != "") str += ",";
            str += number.substring(point, point + 3);
            point += 3;
        }

        return str;
    }
});

/**
 * 시:분 -> 분
 */
Handlebars.registerHelper('changeMin', function (time, options) {

    // number : HH:MM
    var aTime = time.split(":");
    var min = aTime[0] * 60 + aTime[1] *1;

    return min;
});


/**
 * 구매내역 할인 표시
 */
Handlebars.registerHelper('setDiscount', function (data, options) {
    if (data === true) {
        return new Handlebars.SafeString('class="dc_coupon"')
    } else {
        return new Handlebars.SafeString('style="display: none"')
    }
});
/**
 * 구매내역 쿠폰 표시
 */
Handlebars.registerHelper('setCoupon', function (data, options) {
    if (data === true) {
        return new Handlebars.SafeString('<img src="img/07_vod_detail/icon_list_dc.png" alt="">');
    }
});
/**
 * 구매내역 할인 금액 표시
 */
Handlebars.registerHelper('setDiscountPrice', function (data, options) {
    var number = data;
    var len, point, str;
    number = number + "";
    point = number.length % 3;
    len = number.length;

    str = number.substring(0, point);
    while (point < len) {
        if (str != "") str += ",";
        str += number.substring(point, point + 3);
        point += 3;
    }

    if (data) {
        return new Handlebars.SafeString('<div class="dc"><p>' + str + '</p><span>원</span></div>');
    }
});
/**
 * 구매내역 결제수단 분기
 */
Handlebars.registerHelper('setPayment', function (str, options) {
    var sType = Handlebars.escapeExpression(this.deviceType);
    if (sType === 'cpa') {
        return 'App 구매'
    } else if (sType === 'stb') {
        switch (str) {
            case 'bill':
                return '일반결제';
                break;
            case 'coin':
                return 'TV코인';
                break;
            case 'mobile':
                return '휴대폰결제';
                break;
            case 'tvpoint':
                return 'TV포인트';
                break;
            case 'kakaopay':
                return '카카오페이';
                break;
            case 'paynow':
                return '페이나우';
                break;
            case 'cjonepoint':
                return 'CJONE 포인트';
                break;
        }
    }
});
/**
 * 구매내역 만료일 분기
 */
Handlebars.registerHelper('checkDay', function (expiresAt, options) {

    if (moment().isSameOrAfter(moment(expiresAt)) === true) {
        //만료일이 지났거나 같을 경우
        if (moment().isSame(moment(expiresAt)) === true) {
            //오늘날짜와 같을경우
            //return '오늘까지'
            return new Handlebars.SafeString('<div class="remain_day">오늘까지</div>');
        } else {
            //지난경우
            return new Handlebars.SafeString('<div class="remain_day end">기간만료</div>');
            //return '기간만료'
        }
    } else {
        //return '시청가능' + '(' + moment(expiresAt).fromNow('DD') + ')';
        return new Handlebars.SafeString('<div class="remain_day">' + '시청가능 ' + '(' + moment(expiresAt).fromNow('DD') + ')' + '</div>');
    }
});
/**
 * 가입 월  ex) 2017년 1월
 */
Handlebars.registerHelper('subscribeMonth', function (date, options) {
    return moment(date).format('YYYY' + '년 ' + 'MM' + '월');
});
Handlebars.registerHelper('checkSalesType', function (date, options) {
    if (date === 'SS') {
        //월 정액
        return '월'
    }
});
Handlebars.registerHelper('isProductType', function (productType, code, options) {
    if (productType === code) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper('checkProductType', function (serviceType, options) {
    switch (serviceType) {
        case 'CHNMSS':
            //return '채널 가입';
            return new Handlebars.SafeString('<span class="bg_icon_channel"></span>' + '채널 가입');
            break;
        case 'VDCTSS':
            //return 'VOD 월정액';
            return new Handlebars.SafeString('<span class="bg_icon_movie"></span>' + 'VOD 월정액');
            break;
        case 'EXCISS':
            //return 'TV코인 충전';
            return new Handlebars.SafeString('<span class="bg_icon_coin"></span>' + 'TV코인 충전');
            break;
        default :
            return '가입상품';
            break;
    }

});

/**
 * 횟수 each문
 */
Handlebars.registerHelper('times', function (n, block) {
    var accum = '';
    for (var i = 0; i < n; ++i) {
        block.data.index = i;
        block.data.first = i === 0;
        block.data.last = i === (n - 1);
        accum += block.fn(this);
    }
    return accum;
});
/**
 * for문 each문
 */
Handlebars.registerHelper('for', function (from, to, incr, block) {
    var accum = '';
    for (var i = from; i < to; i += incr)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper('calc', function (num, int, string) {
    if (string === "+") {
        return num + int;
    } else if (string === "-") {
        return num - int;
    } else if (string === "*") {
        return num * int;
    } else if (string === "/") {
        return num / int;
    } else if (string === "%") {
        return num % int;
    }


});


/**
 * scrollSize
 */

Handlebars.registerHelper('scrollSize', function (size, options) {
    if (size > 9) {
        return "9";
    } else {
        return size;
    }
});
Handlebars.registerHelper('isScrollSize', function (size, options) {
    if (size > 9) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});


Handlebars.registerHelper('makeHyphen', function (phoneNum, options) {
    if (phoneNum.length === 10) {
        return phoneNum.substr(0, 3) + "-" + phoneNum.substr(3, 3) + "-" + phoneNum.substr(6, 4);
    } else if (phoneNum.length === 11) {
        return phoneNum.substr(0, 3) + "-" + phoneNum.substr(3, 4) + "-" + phoneNum.substr(7, 4);
    } else {
        return phoneNum;
    }
});


/**
 * 홈 - 메인메뉴 설정
 */


Handlebars.registerHelper('isLong', function (title, options) {
    if (title.length > 4) {
        return "long";
    }
});

Handlebars.registerHelper('setGnbType', function (menuType, options) {
    var mode;
    switch (menuType) {
        case "MC0001": //영화//방송//키즈//이벤트//앱//애니//라이프//우리동네 매거진//녹화
            mode = "movie";
            break;
        case "MC0002": //특별관
            mode = "special";
            break;
        case "MC0003": //채널 편성표
            mode = "channel";
            break;
        case "MC0004": //녹화
            mode = "record";
            break;
        case "MC0005": //안내설정
            mode = "setting";
            break;
        case "MC0006": //마이
            mode = "my";
            break;
        case "MC0007": //검색
            mode = "search";
            break;
        case "MC0008": //넷플릭스
            mode = "netflix";
            break;
        case "MC0009": //넷플릭스
            mode = "app";
            break;

        case "MC0010": //넷플릭스
            mode = "event";
            break;
        case "MC0011": //넷플릭스
            mode = "town";
            break;
        case "MC0012": //넷플릭스
            mode = "cug";
            break;
        case "MC0013": //넷플릭스
            mode = "kids";
            break;

    }
    return mode;
});


/**
 * setting category
 */
Handlebars.registerHelper('setRating', function (data, options) {
    if (data === "7" || data === 7) {
        return "7세";
    } else if (data === "12" || data === 12) {
        return "12세";
    } else if (data === "15" || data === 15) {
        return "15세";
    } else if (data === "19" || data === 19) {
        return "19세";
    } else if (data === "0" || data === 0) {
        return "제한없음";
    }
});
Handlebars.registerHelper('setAdult', function (data, options) {
    if (data === "0" || data === 0) {
        return "허용";
    } else if (data === "1" || data === 1) {
        return "제한";
    } else if (data === "2" || data === 2) {
        return "메뉴숨김";
    }
});
Handlebars.registerHelper('setTriple', function (data, options) {
    if (data === "" || data === undefined) {
        return 0;
    } else {
        var str = data.length.toString();
        if (str.length > 2) {
            return 'triple';
        }
    }
});
Handlebars.registerHelper('setBlockedChannels', function (data, options) {
    if (data === "" || data === undefined) {
        return 0;
    } else {
        var pipe = data.split('|');
        if (pipe[0] === "") {
            return 0;
        } else {
            return pipe.length;
        }
    }
});
Handlebars.registerHelper('setFavoriteChannels', function (data, options) {
    if (data === "" || data === undefined) {
        return 0;
    } else {
        var pipe = data.split('|');
        if (pipe[0] === "") {
            return 0;
        } else {
            return pipe.length;
        }
    }
});

Handlebars.registerHelper('setSkippedChannels', function (data, options) {
    if (data === "" || data === undefined) {
        return 0;
    } else {
        var pipe = data.split('|');
        if (pipe[0] === "") {
            return 0;
        } else {
            return pipe.length;
        }
    }

});
Handlebars.registerHelper('setSimplePurchase', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else {
        return "사용안함"
    }
});
Handlebars.registerHelper('setMinibarDuration', function (data, options) {
    if (data === '0' || data === 0) {
        //return "항상표시 안함";
        return new Handlebars.SafeString('<strong class="num num_txt">항상표시 안함</strong>');
    } else if (data === '3' || data === 3) {
        //return "3초";
        return new Handlebars.SafeString('<strong class="num num_alone">3 <span>초</span></strong>');
    } else if (data === '5' || data === 5) {
        //return "5초";
        return new Handlebars.SafeString('<strong class="num num_alone">5 <span>초</span></strong>');
    } else if (data === '10' || data === 10) {
        //return "10초";
        return new Handlebars.SafeString('<strong class="num num_alone">10 <span>초</span></strong>');
    } else if (data === '15' || data === 15) {
        //return "15초";
        return new Handlebars.SafeString('<strong class="num num_alone">15 <span>초</span></strong>');
    }
});
Handlebars.registerHelper('setRestrictionPeriod', function (data, options) {
    if (data === "" || data === undefined) {
        return new Handlebars.SafeString('<span class="txt_value_center">사용안함</span>');
        // return '사용안함';
    } else {
        var pipe = data.split('|');
        var sTxt = pipe.splice(1);
        // return sTxt[1] + '~' + sTxt[2];
        return new Handlebars.SafeString('<span class="txt_value_time">' + sTxt[1] + '~' + sTxt[2] + '</span>');
    }
});
Handlebars.registerHelper('setVodListType', function (data, options) {
    if (data === "Poster") {
        return "포스터";
    } else if (data === "List") {
        return "리스트";
    }
});
Handlebars.registerHelper('setQuickMenu', function (data, options) {
    if (data === "true" || data === true) {
        return "표시";
    } else if (data === "false" || data === false) {
        return "표시안함";
    }
});
Handlebars.registerHelper('setQuickMenuLeft', function (data, options) {
    if (data === "ALL") {
        return "ALL";
    } else if (data === "FAV") {
        return "FAV";
    } else if (data === "POP") {
        return "POP";
    }
});
Handlebars.registerHelper('setMultiView', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else {
        return "사용안함"
    }
});
Handlebars.registerHelper('setSpeechBubble', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else {
        return "사용안함"
    }
});
Handlebars.registerHelper('setPowerSaveMode', function (data, options) {
    if (data === '1') {
        return "사용";
    } else {
        return "사용안함";
    }
});
Handlebars.registerHelper('setEventAlarm', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else {
        return "사용안함"
    }
});
Handlebars.registerHelper('checkAdult', function (data, options) {
    if (data === true || data === "true") {
        return "bg_baby_box";
    }
});
Handlebars.registerHelper('setAgreeSetting', function (data, options) {
    if (data === "true" || data === true) {
        return "동의";
    } else {
        return "동의안함"
    }
});
Handlebars.registerHelper('setPrivateAgree', function (data, options) {
    if (data === "true" || data === true) {
        return "동의";
    } else {
        return "동의안함"
    }
});
Handlebars.registerHelper('setMarketingAgree', function (data, options) {
    if (data === "true" || data === true) {
        return "동의";
    } else {
        return "동의안함"
    }
});

Handlebars.registerHelper('setAdSetting', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else {
        return "사용안함"
    }
});
Handlebars.registerHelper('setChannelResetTime', function (data, options) {
    if (data === '1' || data === 1) {
        // return "1시간";
        return new Handlebars.SafeString('<strong class="num time">1 <span>시간</span></strong>');
    } else if (data === '3' || data === 3) {
        // return "3";
        return new Handlebars.SafeString('<strong class="num time">3 <span>시간</span></strong>');
    } else if (data === '5' || data === 5) {
        // return "5시간";
        return new Handlebars.SafeString('<strong class="num time">5 <span>시간</span></strong>');
    } else if (data === '7' || data === 7) {
        // return "7시간";
        return new Handlebars.SafeString('<strong class="num time">7 <span>시간</span></strong>');
    } else if (data === '10' || data === 10) {
        // return "10시간";
        return new Handlebars.SafeString('<strong class="num time">10 <span>시간</span></strong>');
    } else if (data === '0' || data === 0) {
        // return "사용안함";
        return new Handlebars.SafeString('<strong class="num time"><span>사용안함</span></strong>');
    }
});

Handlebars.registerHelper('setRunningTime', function (data, options) {
    if (data.indexOf(':') > 0) {
        var sType = data.split(':');
        return sType[1] + '분';
    }
});
Handlebars.registerHelper('setAssistanceServiceSub', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else if (data === "false" || data === "") {
        return "사용안함";
    }
});
Handlebars.registerHelper('setAssistanceServiceDesc', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else if (data === "false" || data === "") {
        return "사용안함";
    }
});
Handlebars.registerHelper('setVoiceGuide', function (data, options) {
    if (data === "true" || data === true) {
        return "사용";
    } else if (data === "false" || data === "") {
        return "사용안함";
    }
});
Handlebars.registerHelper('setVoiceSpeed', function (data, options) {
    if (data === undefined) {
        var sType = data.split('|')[0];
        if (sType === "0" || data === 0) {
            return "느림";
        } else if (sType === "1" || data === 1) {
            return "기본";
        } else if (sType === "2" || data === 2) {
            return "빠름";
        } else if (sType === "3" || data === 3) {
            return "매우빠름";
        }
    }
});
/**
 * Smart STB 대상
 */
Handlebars.registerHelper('setVoiceDesc', function (data, options) {
    if (data.indexOf('|') > 0) {
        var sType = data.split('|')[2];
        if (sType === "On") {
            return "사용";
        } else if (sType === "Off") {
            return "사용안함";
        }
    }
});
Handlebars.registerHelper('iconService', function (data, options) {
    var sType = data;
    if (sType === "01") {
        return "i";
    } else if (sType === "02") {
        return "tv";
    }
});

Handlebars.registerHelper('changeBr', function (title, options) {
    return title.replace(' ', '<br>');
});
Handlebars.registerHelper('isCategoryCode', function (categoryCode, code, options) {
    if (categoryCode === code) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper('isRange', function (index, start, end, options) {
    if (index >= start && index <= end) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});


Handlebars.registerHelper('setSettingCode', function (code, options) {
    var nNum;
    switch (code) {
        //사용환경설정
        case "MC2001" :
            nNum = 0;
            break;
        //시스템설정
        case "MC2002" :
            nNum = 3;
            break;
        // 서비스안내
        case "MC2003" :
            nNum = 4;
            break;
        // 스스로진단
        case "MC2004" :
            nNum = 5;
            break;
        //스마트폰연결
        case "MC2005" :
            nNum = 2;
            break;
        //공지사항
        case "MC2006" :
            nNum = 1;
            break;
    }
    return nNum;
});
/**
 * 마이
 */

Handlebars.registerHelper('setMyCode', function (code, options) {
    var code;
    switch (code) {
        //최근시청
        case "MC1010" :
            code = "myVodList0";
            break;
        //가입내역
        case "MC1011" :
            code = "myVodList2";
            break;
        // 구매내역
        case "MC1012" :
            code = "myVodList3";
            break;
        // 충전/쿠폰
        case "MC1013" :
            code = "myVodList1";
            break;
        //VOD선물함
        case "MC1014" :
            code = "myVodList6";
            break;
        //평생소장보관함
        case "MC1015" :
            code = "myVodList5";
            break;
        //찜한목록
        case "MC1016" :
            code = "myVodList4";
            break;
        //개인미디어
        case "MC1017" :
            code = "myVodList7";
            break;
        //즐겨찾기
        case "MC1018" :
            code = "myVodList8";
            break;
        //스마트추천
        case "MC1019" :
            code = "myVodList8";
            break;

    }
    return code;
});

Handlebars.registerHelper('setMyCodeMC0006', function (code, options) {
    var code;
    switch (code) {
        //최근시청채널
        case "MC1005" :
            code = "list0Depth0";
            break;
        //최근시청VOD
        case "MC1006" :
            code = "list0Depth1";
            break;
        //최근시청녹화물
        case "MC1024" :
            code = "list0Depth2";
            break;
    }
    return code;
});


/**
 * 채널
 */
Handlebars.registerHelper('nowTimeChannel', function (options) {
    var nowMin = moment().format('mm');
    var bHalf = true;
    var sTimes = [];
    if (nowMin > 30) {
        bHalf = false;
    }

    if (bHalf) {
        sTimes.push("<li>" + moment().format('HH') + ":00</li>");
        sTimes.push("<li>" + moment().format('HH') + ":30</li>");
        sTimes.push("<li>" + moment().add(1, 'hours').format('HH') + ":00</li>");
        sTimes.push("<li>" + moment().add(1, 'hours').format('HH') + ":30</li>");
    } else {
        sTimes.push("<li>" + moment().format('HH') + ":30 </li>");
        sTimes.push("<li>" + moment().add(1, 'hours').format('HH') + ":00</li>");
        sTimes.push("<li>" + moment().add(1, 'hours').format('HH') + ":30</li>");
        sTimes.push("<li>" + moment().add(2, 'hours').format('HH') + ":00</li>");
    }
    return sTimes.join('');
});
Handlebars.registerHelper('durationTime', function (startTime, endTime, options) {
    var start = startTime; //"2017-07-21T22:30:00"
    var end = endTime; //"2017-07-21T23:40:00"
    var duration;
    duration = moment.utc(moment(end, "YYYY-MM-DDTHH:mm:ss")
        .diff(moment(start, "YYYY-MM-DDTHH:mm:ss")))
        .format("HH:mm");

    var hh = duration.substr(0, 2) * 60;
    var mm = duration.substr(3, 2) * 1;
    return Math.ceil(hh + mm);
});
Handlebars.registerHelper('durationWidth', function (startTime, endTime, options) {
    var start = startTime; //"2017-07-21T22:30:00"
    var end = endTime; //"2017-07-21T23:40:00"
    var duration;
    duration = moment.utc(moment(end, "YYYY-MM-DDTHH:mm:ss")
        .diff(moment(start, "YYYY-MM-DDTHH:mm:ss")))
        .format("HHmm");

    var hh = duration.substr(0, 2) * 440;
    var mm = duration.substr(2, 2) * 440 / 60;
    var width = Math.ceil(hh + mm);
    return width;
});
Handlebars.registerHelper('timeHHmm', function (Time, type, options) {

    if (type === "HHmm") {
        return moment(Time, "YYYY-MM-DDTHH:mm:ss").format("HHmm");
    } else {
        return moment(Time, "YYYY-MM-DDTHH:mm:ss").format("HH:mm");
    }

});

Handlebars.registerHelper('noticeNewIcon', function (startTime, options) {
    var start = startTime; //"2017-07-21T22:30:00" 게시된날짜
    var end = moment().format("YYYYMMDDHHmmss"); //"2017-07-21T23:40:00" 오늘날짜
    var diff = Number(end) - Number(start);
    // console.log(start + '+' + end + '+' + diff);
    if (diff <= 3000000) {
        return 'bg_new';
    } else {
        return '';
    }

});
Handlebars.registerHelper('setResolution', function (str, options) {
    switch (str) {
        case "0" :
            return new Handlebars.SafeString('<strong class="num num_4_3">4:3</strong><span>중앙보기</span>');
            break;
        case "1" :
            return new Handlebars.SafeString('<strong class="num num_4_3">4:3</strong><span>자막보기</span>');
            break;
        case "2" :
            return new Handlebars.SafeString('<strong class="num num_4_3">4:3</strong><span>전체보기</span>');
            break;
        case "3" :
            return new Handlebars.SafeString('<strong class="num">16:9</strong><span>표준</span>');
            break;
        case "4" :
            return new Handlebars.SafeString('<strong class="num">16:9</strong><span>와이드</span>');
            break;
        case "5" :
            return new Handlebars.SafeString('<strong class="num">16:9</strong><span>줌</span>');
            break;
        default :
            break;
    }
});
Handlebars.registerHelper('timeLineWidth', function (startTime, endTime, options) {
    return "50%";
});



/**
 * Part2 개발 유무
 */

Handlebars.registerHelper('part2', function (menuType, options) {
    switch (menuType) {
        case "MC0001": //영화//방송//키즈//이벤트//앱//애니//라이프//우리동네 매거진//녹화
        // return '<div class="box_tutorial"><div class="inner"><strong>좌/우</strong> 키를 눌러 다양한<br>메뉴를 탐색해보세요</div></div>';

        case "MC0003": //채널 편성표
        case "MC0005": //안내설정
        case "MC0006": //마이
        case "MC0007": //검색
        case "MC0009": //app
        case "MC0010": //event
        case "MC0011": //town
            // return '<div class="box_tutorial"><div class="inner">CJ Alaska <br>2차에 개발될 메뉴입니다.</div></div>';
            break;
        case "MC0002": //특별관
            return '<div class="box_tutorial"><div class="inner">데이터가 없어서 <br>링크가 걸리지 않습니다.</div></div>';
            break;
        case "MC0008": //넷플릭스

        case "MC0012": //cug
        case "MC0004": //녹화
            return '<div class="box_tutorial"><div class="inner">CJ Alaska <br>2차에 개발될 메뉴입니다.</div></div>';
            break
    }
});


Handlebars.registerHelper("log", function (optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
});

Handlebars.registerHelper("debugger", function (optionalValue) {
    console.log(optionalValue);
});

/**
 * 경과시간
 */
Handlebars.registerHelper("resumeOffset", function (data, optionalValue) {
    var time = data;
    // time = time/1000; //초
    time = time / 60; //분

    if (time > 100) {
        time = 100;
    }
    return time + "%";
});
/**
 * 최근 시청목록 class 분기처리
 * 날짜 시작 : first
 * 날짜 끝 : last
 * 개행 날짜 끝 : lastline
 */
Handlebars.registerHelper("recentViewClass", function (index, data, optionalValue) {
    // console.log(index);
    // console.log(data);
    var className = "";
    var currentDate = moment(data[index].viewedAt).format("MM[월]DD[일]");
    var prevDate = index > 0 ? moment(data[index - 1].viewedAt).format("MM[월]DD[일]") : "";
    var nextDate = index < data.length - 1 ? moment(data[index + 1].viewedAt).format("MM[월]DD[일]") : "";

    if (prevDate === "") {
        className = "first";
    } else if (currentDate === prevDate && currentDate !== nextDate) {
        className = "last";
    }
    return className;
    // return;
});
Handlebars.registerHelper("recentViewDate", function (index, data, optionalValue) {
    return moment(data[index].viewedAt).format("MM.DD [(]ddd[)]");
});



/* searchResult START ======================================================================================================== */
/*
 작성자 : 오샛별 <> 작성일 : 2017-08-28
 검색결과 나이 아이콘
 */
Handlebars.registerHelper('searchResultDetailAge', function (rating, options) {
    var imgUrl = '';
    switch (rating) {
        case '7' :
            imgUrl = './img/common/age/icon_age_focus_7.png';
            break;
        case '12' :
            imgUrl = './img/common/age/icon_age_focus_12.png';
            break;
        case '15' :
            imgUrl = './img/common/age/icon_age_focus_15.png';
            break;
        case '19' :
        case '19+' :
            imgUrl = './img/common/age/icon_age_focus_19.png';
            break;
    }
    return imgUrl;
});
/*
 작성자 : 오샛별 <> 작성일 : 2017-08-28
 검색결과 별점 아이콘
 */
Handlebars.registerHelper('searchResultDetailStarRating', function (starRating, options) {
    var imgUrl = '';
    if (starRating == 0) {
        imgUrl = './img/common/icon_dark_rating0.png'
    } else if (starRating > 0 && starRating < 1) {
        imgUrl = './img/common/icon_dark_rating0_5.png'
    } else if (starRating == 1) {
        imgUrl = './img/common/icon_dark_rating1.png'
    } else if (starRating > 1 && starRating < 2) {
        imgUrl = './img/common/icon_dark_rating1_5.png'
    } else if (starRating == 2) {
        imgUrl = './img/common/icon_dark_rating2.png'
    } else if (starRating > 2 && starRating < 3) {
        imgUrl = './img/common/icon_dark_rating2_5.png'
    } else if (starRating == 3) {
        imgUrl = './img/common/icon_dark_rating3.png'
    } else if (starRating > 3 && starRating < 4) {
        imgUrl = './img/common/icon_dark_rating3_5.png'
    } else if (starRating == 4) {
        imgUrl = './img/common/icon_dark_rating4.png'
    } else if (starRating > 4 && starRating < 5) {
        imgUrl = './img/common/icon_dark_rating4_5.png'
    } else if (starRating == 5) {
        imgUrl = './img/common/icon_dark_rating5.png'
    }
    return imgUrl;
});
Handlebars.registerHelper('searchResultChanneldurationTimeWidth', function (startTime, endTime, options) {
    //var start = startTime; //"2017-01-21T22:30:00"
    //var end = endTime; //"2017-09-01T23:40:00"
    var start = startTime; //"2017-01-21T22:30:00"
    var end = endTime; //"2017-09-01T23:40:00"
    var now = moment();
    var percent = 0;

    var startMinue = parseInt((moment(start, "YYYY-MM-DDTHH:mm:ss").format("HH") * 60)) + parseInt(moment(start, "YYYY-MM-DDTHH:mm:ss").format("mm"));
    var endMinue = parseInt((moment(end, "YYYY-MM-DDTHH:mm:ss").format("HH") * 60)) + parseInt(moment(end, "YYYY-MM-DDTHH:mm:ss").format("mm"));
    var nowMinue = parseInt((now.format('HH') * 60)) + parseInt(now.format('mm'));

    if(nowMinue-startMinue < 0){
        percent = 0;
    }else if(endMinue - nowMinue < 0){
        percent = 100;
    }else{
        percent = Math.ceil(((nowMinue - startMinue)/(endMinue - startMinue)) * 100);
    }
    return percent;
});

Handlebars.registerHelper('runningTimeFormat', function (runningTime, type, options) {
    var returnData = '00';

    if(type === 'MINUTE'){
        returnData = parseInt((moment(runningTime, 'HH:mm').format('HH') * 60)) + parseInt(moment(runningTime, 'HH:mm').format('mm'));
    }

    return returnData;
});
/* searchResult END ======================================================================================================== */



// 07_vodDetail
Handlebars.registerHelper('resolution', function (resolution, options) {
    var icon = '';
    if(resolution == 'HD'){
        icon = 'img/common/contents/icon_dark_hd.png'
    }else if(resolution == 'UHD'){
        icon = 'img/common/contents/icon_dark_uhd.png'
    }
    return icon;
});

Handlebars.registerHelper('rating', function (rating, options) {
    var icon = '';
    if(rating == '0'){
        icon = 'img/common/age/icon_age_dark_all.png'
    }else if(rating == '7'){
        icon = 'img/common/age/icon_age_dark_7.png'
    }else if(rating == '12'){
        icon = 'img/common/age/icon_age_dark_12.png'
    }else if(rating == '15'){
        icon = 'img/common/age/icon_age_dark_15.png'
    }else if(rating == '19'){
        icon = 'img/common/age/icon_age_default_19.png'
    }else if(rating == '19+'){
        icon = 'img/common/age/icon_age_default_19.png'
    }
    return icon;
});

Handlebars.registerHelper('recommendRating', function (rating, options) {
    var icon = '';
    if(rating == 'ALL'){
        icon = 'img/common/age/icon_age_bg_all.png'
    }else if(rating == '7'){
        icon = 'img/common/age/icon_age_bg_7.png'
    }else if(rating == '12'){
        icon = 'img/common/age/icon_age_bg_12.png'
    }else if(rating == '15'){
        icon = 'img/common/age/icon_age_bg_15.png'
    }else if(rating == '19'){
        icon = 'img/common/age/icon_age_bg_19.png'
    }else if(rating == '19+'){
        icon = 'img/common/age/icon_age_bg_19.png'
    }
    return icon;
});