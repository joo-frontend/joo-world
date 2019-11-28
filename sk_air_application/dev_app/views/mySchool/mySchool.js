directory.mySchool = Backbone.View.extend({
    bLogin: true,
    className: 'my_school_list',
    oMySchoolData: {
        "size": "0",
        "offset": "0",
        "loginId": App.vars.loginId
    },
    oSchoolList: null,
    initialize: function () {
        App.view.mainHeader = new directory.mainHeader();
        this.render();
    },
    render: function () {
        var self = this;
        App.util.setReloader();
        if (App.vars.reload !== undefined) {
            if (App.vars.reload !== true) {
                App.util.showLoading();
            } else {
                App.vars.reload = false;
            }
        } else {
            App.util.showLoading();
        }

        // 헤더 바인딩
        App.view.mainHeader.render();

        // 나의 학교 리스트 바인딩
        if (App.vars.loginId) {
            this.mySchoolListBind();
        } else {
            self.$el.html(templete["mySchool/mySchool"]());
        }


        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');

        $('.wrap_contents').scrollTop(0);


    },
    mySchoolListBind: function () {
        var self = this;
        var oRtnDvcIdList = {"rtnDvcIdList": []};

        self.oMySchoolData.loginId = App.vars.loginId;

        App.model.mySchoolList.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: JSON.stringify(self.oMySchoolData),
            beforeSend: function () {

            },
            success: function (model, response) {
                console.log('@ App.model.mySchoolList');
                console.log(response);
                App.vars.mySchoolList = self.oSchoolList = response;

                if (self.oSchoolList.schList.length <= 0) {
                    self.$el.html(templete["mySchool/mySchool"]());
                } else {
                    self.$el.html(templete["mySchool/mySchoolLogin"](self.oSchoolList));
                }
                App.util.hideLoading();
                App.util.hidePageReloading();
                App.vars.reload = false;

            },
            complete: function () {
                App.util.hideLoading();

            },
            error: function (e, response) {
                /*App.util.toast(response.responseJSON.resultMsg)*/
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    },

    setSchoolData: function (school, lvClass) {
        App.vars.sSelectedSchoolTitle = school + " ";
        App.vars.sSelectedLvClass = lvClass;
        // App.vars.aDeviceId = {"rtnDvcIdList": [{"rtnDvcId": dvcId}]}; //상세 조회를 위한 디바이스 ID
    }
});