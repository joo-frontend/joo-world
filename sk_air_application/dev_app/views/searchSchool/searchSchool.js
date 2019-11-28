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
        App.util.setReloader();
        // 헤더 바인딩
        App.view.subHeader.render();
        console.log()
        // 템플릿팅
        self.$el.html(templete["searchSchool/searchSchoolWrap"]());

        if(
            App.vars.loginId === undefined ||
            App.vars.loginId === ''
        ){
            self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchNoRecent"]());
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
                "Authorization": App.vars.token,
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
                "Authorization": App.vars.token,
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
                console.log(e)
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
                "Authorization": App.vars.token,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(deleteTarget),
            success : function (model, response) {
                self.searchRecentTempleteBinding();
            },
            error : function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                App.util.openNetworkErrorPopup();
            }
        });
    },
    noResultTempleteBinding: function(){
        self.$el.find('.wrap_search_contents').html(templete["searchSchool/searchNoResult"]());
    }
});