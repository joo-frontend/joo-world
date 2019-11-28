directory.popupSettingTurnOffTimer = Backbone.View.extend({
    className:"popup_dim",
    bSettingLoad: false,
    nSettingTime:{
        "hours" : null,
        "minutes" : null
    },
    oRequestData: {
        "rtnDvcId" : "",
        "schdStartTime" : ""
    },
    initialize: function () {
    },
    remove: function () {
        $('.popup_dim').remove();
    },
    render: function () {

        // 컨텐츠 바인딩
        if($('.active.DVC0000241').length > 0){
            // 몽블랑 D+ 일 경우만
            $('body').append(this.$el.html(templete["popup/settingHoursTurnOffTimer"]()));
        } else {
            $('body').append(this.$el.html(templete["popup/settingTurnOffTimer"]()));
            this.init()
        }

    },
    init: function(){
        var self = this;
        Hammer.plugins.fakeMultitouch();

        $("select.drum").drum({
            onChange : function (selected) {

                if(selected.id == "hours"){
                    self.nSettingTime.hours = selected.value;
                } else {
                    self.nSettingTime.minutes = selected.value;
                }

            }

        });

        this.update();
    },
    update: function (datetime) {
        var self = this;
        // $("#hours").drum('setIndex', datetime.getHours());
        // $("#minutes").drum('setIndex', datetime.getMinutes());
        if( self.nSettingTime.hours == null && self.nSettingTime.minutes == null && self.bSettingLoad == false){
            self.nSettingTime.hours = "00";
            self.nSettingTime.minutes = "00";
            self.bSettingLoad = true;
        } else {

            /*self.nSettingTime.hours = datetime.getHours();
            self.nSettingTime.minutes = datetime.getMinutes();*/
        }


    },
    sendTurnOffReservation: function(time){
        var self = this;

        self.oRequestData = {
            "rtnDvcId" : App.vars.sRtnDvcId,
            "schdStartTime" : time + "00"
        };
        console.log(self.oRequestData)
        App.model.bookingDeviceTurnOff.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json;charset=UTF-8",
                "company": "school"
            },
            data: JSON.stringify(self.oRequestData),
            success: function (model, response) {
                console.log(response)
            },
            complete: function () {

            },
            error: function (e) {
                //alert("서버 데이터 조회에 실패하였습니다");
                /*App.util.hideLoading();*/
                App.util.openNetworkErrorPopup();
            }
        });
    },
    timeInit: function(){
        var self = this;
        self.nSettingTime = {
            "hours" : "00",
            "minutes" : "00"
        }
    }
});