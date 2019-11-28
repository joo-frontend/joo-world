App.historyApp = (function () {

    var historyArray = [];
    var historyObj = {
        menuId: "",
        categoryId: "",
        sassetId: "",
        assetId: "",
        seriesId: "",
        productId: "",
        eventId: "",
        sourceId: "",
        purchaseId: "",
        couponId: "",
        noticeId: "",
        coinId: "",
        bannerId: "",
        contentId: "",
        promotionId: "",
        envJson: {}
    };

    function setHistoryArray(historyList) {
        historyArray = historyList;
    }

    function push(options) {
        console.log("@ historyObj");
        console.log(historyObj);
        if (historyObj.menuId != "") {
            historyArray.unshift(JSON.parse(JSON.stringify(historyObj)));
        } else {
            console.warn("menuId가 없습니다.")
        }
        $.extend(true, historyObj, options);
    }

    function pop() {
        var present = historyArray.shift();
        $.extend(historyObj, present);
        /**
         * 20170802 최현원
         * extent를 하여서 결과값이 historyObj로 나와야함
         */
        //return present;
        return historyObj;
    }

    function getHistoryArray() {
        return historyArray;
    }


    function getPresent() {
        return historyObj;
    }

    function setPresent(present) {
        $.extend(historyObj, present);
        console.log(historyObj);
    }

    function all() {
        if (historyObj.menuId != "") {
            historyArray.unshift(JSON.parse(JSON.stringify(historyObj)));
        }
        ;
        clearPresent();

        var allHistory = {
            INTERFACE: {
                TYPE: "response",
                COMMAND: "response",
                DATA: {
                    historyList: []
                }
            }
        };

        for (var i = 0; i < historyArray.length; i++) {
            allHistory.INTERFACE.DATA.historyList.push({history: historyArray[i]});
        }
        App.api.csApi.response(X2JS.json2xml_str(allHistory));
    }

    function clearPresent() {
        historyObj = {
            menuId: "",
            categoryId: "",
            sassetId: "",
            assetId: "",
            seriesId: "",
            productId: "",
            eventId: "",
            sourceId: "",
            purchaseId: "",
            couponId: "",
            noticeId: "",
            coinId: "",
            bannerId: "",
            contentId: "",
            promotionId: "",
            envJson: {}
        };
    }


    return {
        setHistoryArray: setHistoryArray,
        push: push,
        pop: pop,
        getPresent: getPresent,
        setPresent: setPresent,
        getHistoryArray: getHistoryArray,
        all: all
    }
})();
