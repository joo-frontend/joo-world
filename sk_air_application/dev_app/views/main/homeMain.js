directory.homeMain = Backbone.View.extend({
    oStartTouchPos: {
        "x": null,
        "y": null
    },
    bLogin: false,
    bZoom: false,
    bRefresh:false,
    sLoginId: "",
    mainMap: null,
    schoolCardSlider: null,
    oSchoolData: null,
    loadingComplete: false,
    selectMarker : null,
    oMyLocation: null,
    sliderActive: false,
    initialize: function (params) {

        App.view.mainHeader = new directory.mainHeader();

        this.render();
    },
    render: function () {
        var self = this;
        // 헤더 바인딩
        App.util.setReloader();
        App.view.mainHeader.render();
        // 템플릿팅

        if(App.vars.loginId){
            // 로그인 후
            self.$el.html(templete["main/mainLogin"]());
        } else {
            // 기본 메인
            self.$el.html(templete["main/main"]());

        }
        self.$el.addClass('wrap_main_map');
        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el);

        // 맵 설정
        this.initMap();
        /*this.currentSliderMoveMap();*/
    },
    initMap: function(option){
        var self = this;

        // 기본 Default 위치 (SKT타워)
        var mapData = {
            "lon": "126.9828357",
            "lat": "37.5664558"
        };

        if( App.vars.longitude == 0 || App.vars.latitude == 0){
            App.vars.longitude = "126.9828357";
            App.vars.latitude = "37.5664558";
        }
        var varsLonlat = {
            "lon": App.vars.longitude,
            "lat": App.vars.latitude
        };

        if(App.vars.saveLastPinLonlat !== undefined){
            mapData = App.vars.saveLastPinLonlat;
        } else {
            $.extend(mapData , varsLonlat);
        }


        this.mainMap = App.mainMap = new Tmap.Map({
            div: 'school_map', // map을 표시해줄 div
            width: '100%',  // map의 width 설정
            height: '100%', // map의 height 설정
            minZoom: 6
        });

        bounds = new Tmap.Bounds(116.17194101627408,33.13910000993247,138.72760507876697,40.18028650161712).transform("EPSG:4326", "EPSG:3857"); //대한민국 영역의 bounds 객체 생성
        App.mainMap.events.register("moveend", App.mainMap, onMove);
        console.log('c')


        var lonlat = new Tmap.LonLat(mapData.lon, mapData.lat).transform("EPSG:4326", "EPSG:3857");
        /*App.mainMap.setCenter(lonlat,14);*/
        if(App.vars.saveLastZoom !== undefined){
            console.log('a')
            App.mainMap.setCenter(App.vars.saveLastPinLonlat ,App.vars.saveLastZoom);
        } else {
            console.log('d')
            App.mainMap.setCenter(lonlat,14);
        }
        function onMove(){
            var center = App.mainMap.getCenter();
            bounds.containsLonLat(center);
            if(bounds.containsLonLat(center) == false){ //바뀐 지도의 중심점과 bounds 비교
                App.mainMap.zoomToExtent(bounds); //지도 중심점이 bounds 영역을 벗어나면 다시 bounds 영역으로 돌아옴
            }
            App.vars.saveLastPinLonlat = App.mainMap.getCenter();
            App.vars.saveLastZoom = App.mainMap.zoom;

        }
        App.mainMap.events.register("touchmove", App.mainMap, self.endTouchPosition);
        /*App.mainMap.events.register("touchend", App.mainMap, self.onMoveEnd);*/
        this.getMapData();


        $('.school_list_slide').css({opacity:0});

    },
    refreshMap: function(){

        this.getMapData();
        this.bRefresh = true;
    },
    historyBackRefreshMap: function(){
        var lonlat = new Tmap.LonLat(App.mainMap.getCenter().lon, App.mainMap.getCenter().lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat,14);
        $('.school_list_slide').css({opacity:0});
    },
    endTouchPosition: function(e){
        /*App.vars.saveLastPinLonlat = undefined;*/

        if(App.mainMap.zoom > 16 && App.vars.startPos.distanceTo(App.mainMap.getPixelFromLonLat(new Tmap.LonLat(App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lon, App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lat))) > 50){
            $('.school_list_slide').css({opacity:0});
            $('.tmLayerDiv > div').find('.box_map_icon_air.focus').addClass('dis');
        }
    },
    onMoveEnd: function (){
        var self = this;

        if(App.mainMap.zoom > 16 ){
            setTimeout(function(){
                $('.area_btn .btn').hide();
                $('.school_list_slide').css({opacity:1});
            },100);
            App.vars.startPos = App.mainMap.getPixelFromLonLat(new Tmap.LonLat(App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lon, App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lat))

        } else if(App.mainMap.zoom < 5){

        } else {
            setTimeout(function(){
                $('.area_btn .btn').show();
                $('.school_list_slide').css({opacity:0});
            },100)
            App.view.homeMain.getMapData();
            self.selectMarker = null;
        }


    },
    getMapData: function(){
        var self = this;

        var loginId = App.vars.loginId ;

        var mapData = {
            "lat": App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lat,
            "lon": App.mainMap.getCenter().transform("EPSG:3857", "EPSG:4326").lon,
            "loginId": loginId,
            "zoomLevel": App.mainMap.zoom,
            "mySchYn": "N",
            "size": "0",
            "offset": "0"
        };

        App.model.schoolListMap.fetch({
            method: "POST",
            headers: {
                "Authorization": App.vars.token,
                "Content-Type": "application/json",
                "company": "school"
            },
            data: JSON.stringify(mapData),
            beforeSend: function(){
                /*App.util.pageLoadingShow();*/
            },
            success : function (model, response) {
                App.vars.schoolData = response;
                console.log(response)
            },
            complete : function(){
                /*App.util.pageLoadingHide();*/
                self.setMap();
            },
            error : function (e) {
                /*App.util.hideLoading();*/
                //alert("서버 데이터 조회에 실패하였습니다");
                App.util.openNetworkErrorPopup();
            }
        });
    },
    setMap: function(){
        var self = this;
        var size, offset, icon;

        // 마커와 팝업을 세팅합니다.
        function MarkerPopup(marker) {
            this.marker = marker;
        }
        if (App.mainMap.markerLayer != null) App.mainMap.removeLayer(App.mainMap.markerLayer);
        App.mainMap.markerLayer = new Tmap.Layer.Markers(); // 마커를 추가할 레이어
        App.mainMap.addLayer(App.mainMap.markerLayer); // 맵에 마커 레이어를 추가합니다.
        App.mainMap.markerLayer.events.register( 'moveend', App.mainMap.markerLayer, function(evt){

            if( evt.zoomChanged == true ) {
                // 지도중심 변경 시 작업
                self.onMoveEnd();

            } else {
                self.moveCloseSlider();
            }
        });
        App.mainMap.removeZoomControl();
        size = new Tmap.Size(44, 53); // 마커 사이즈를 지정합니다.
        offset = new Tmap.Pixel(-(size.w / 2), -(size.h)); // 마커의 중심점을 조정합니다.(마커의 중앙하단으로 설정)

        // 공기 오염도 아이콘
        var blueIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air good">좋음</a></div>';
        var greenIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air normal">보통</a></div>';
        var yellowIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air bad">나쁨</a></div>';
        var redIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air worse">매우나쁨</a></div>';
        var schLonlat;
        var airGrd;

        for (var i = 0; i < App.vars.schoolData.schList.length; i++) {
            // 마커 위치
            schLonlat = new Tmap.LonLat(App.vars.schoolData.schList[i].lon, App.vars.schoolData.schList[i].lat).transform("EPSG:4326", "EPSG:3857");
            // 데이터 구분 공기오염도 아이콘
            switch(App.vars.schoolData.schList[i].airGrd){
                case "보통" :
                    airGrd = greenIcon;
                    break;
                case "-" :
                    airGrd = greenIcon;
                    break;
                case "좋음" :
                    airGrd = blueIcon;
                    break;
                case "나쁨" :
                    airGrd = yellowIcon;
                    break;
                case "매우나쁨" :
                    airGrd = redIcon;
                    break;
            }
            icon = new Tmap.IconHtml(airGrd, size, offset); // 마커 아이콘
            marker = new Tmap.Marker(schLonlat, icon); // 마커생성
            App.mainMap.markerLayer.addMarker(marker);  // 마커 레이어에 마커 추가
            //팝업 생성
           /* if(App.mainMap.zoom > 16){
                $(App.mainMap.markerLayer.markers[0].events.element).find('.box_map_icon_air').addClass('focus')

            }*/
            //마커 이벤트등록
            marker.events.register("click", new MarkerPopup(marker), onClickMarker); // 마커를 클릭했을 때 이벤트 설정
            marker.events.register("click", new MarkerPopup(marker), markerGetLonlat); // 마커를 클릭했을 때 이벤트 설정
        }

        function onClickMarker(evt){

            // 터치시 마커 중심으로 맵 이동
            $('.tmLayerDiv > div').find('.box_map_icon_air').removeClass('dis');
            $('.school_list_slide').css({opacity:1});
            if(!$(this.marker.events.element).find('.box_map_icon_air').hasClass('focus')){
                App.mainMap.setCenter(this.marker.lonlat,17);
                self.selectMarker = this.marker;
                $(this.marker.icon.imageDiv).find('.box_map_icon_air').addClass('focus');

            } else {

            }
            /*App.view.homeMain.getMapData();*/
        }
        function markerGetLonlat(evt){

            var nMarkerLonlat = evt.object.lonlat.transform("EPSG:3857", "EPSG:4326");
            var nMarkerLon = nMarkerLonlat.lon.toFixed(7);
            var nMarkerLat = nMarkerLonlat.lat.toFixed(7);
            var markerNum;

            if(self.loadingComplete){
                self.schoolCardSlider.destroySlider();
                $('.box_slide > div').remove();

            } else {
                self.loadingComplete = true;
            }

            self.addSliderSchool();
            self.mapCardSlider();

            self.goToSliderMarker($('.box_map_icon_air.focus').parent().index());
        }

    },

    mapCardSlider: function(){
        var self = this;
        this.schoolCardSlider = $('.slider');
        this.schoolCardSlider.bxSlider({
            hideControlOnEnd: true,
            adaptiveHeight: true,
            pager: false,
            slideMargin: 20,
            infiniteLoop: false,
            preventDefaultSwipeY: true,
            onSliderLoad: function(){

            },
            onSlideBefore: function() {
                /*self.currentSliderMoveMap($slideElement);*/

            },
            onSlideAfter: function(el, beforeIndex, currentIndex){
                App.vars.sliderIndex = currentIndex;
                self.currentSliderMoveMap(currentIndex);
                self.setCurrentMarkerAddClass(currentIndex);
            }

        });
    },
    moveCloseSlider: function(e){
        var self = this;

        if(App.mainMap.zoom > 16 ){

        }





    },
    moveMyLocation: function(){
        console.log('■■■ 내 위치로 ■■■');
        // 기본 Default 위치 (SKT타워)
        var mapData = {
            "lon": "126.9828357",
            "lat": "37.5664558"
        };
        var varsLonlat = {
            "lon": App.vars.longitude,
            "lat": App.vars.latitude
        };
        $.extend(mapData , varsLonlat);
        var lonlat = new Tmap.LonLat(mapData.lon, mapData.lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat,14);
    },
    goToSliderMarker: function (markerNum){
        this.schoolCardSlider.goToSlide(markerNum)
    },
    setCurrentMarkerAddClass: function(index){
        for(var i =0;i < App.mainMap.markerLayer.markers.length;i++){
            $(App.mainMap.markerLayer.markers[i].events.element).find('.box_map_icon_air').removeClass('focus')
        }
        $(App.mainMap.markerLayer.markers[index].events.element).find('.box_map_icon_air').addClass('focus');
    },
    currentSliderMoveMap: function(slideIndex){
        var self = this;
        /*if(self.loadingComplete){
            var elSlideElements = $(sliderElements);
            var nSliderIndex = elSlideElements.find('.box_school_list').attr('id').slice(9);
            var lonlat = new Tmap.LonLat(App.vars.schoolData.schList[nSliderIndex - 1].lon, App.vars.schoolData.schList[nSliderIndex - 1].lat).transform("EPSG:4326", "EPSG:3857");

            App.mainMap.setCenter(lonlat, App.mainMap.zoom);
        }*/

        var lonlat = new Tmap.LonLat(App.vars.schoolData.schList[slideIndex].lon, App.vars.schoolData.schList[slideIndex].lat).transform("EPSG:4326", "EPSG:3857");
        App.mainMap.setCenter(lonlat, App.mainMap.zoom);
    },
    addSliderSchool: function (){
        var self = this;
        var airState;

        /*console.log(App.vars.schoolData.schList);*/
        for (var i = 0; i < App.vars.schoolData.schList.length; i++) {
            switch(App.vars.schoolData.schList[i].airGrd){
                case "보통" :
                    airState = "normal";
                    break;
                case "좋음" :
                    airState = "good";
                    break;
                case "나쁨" :
                    airState = "bad";
                    break;
                case "매우나쁨" :
                    airState = "worse";
                    break;
            }
            var welSchoolList = '<div>' +
                '<div id="schoolNum' + App.vars.schoolData.schList[i].no +'" class="box_school_list">' +
                '<a href="#" class="_cardSlideLink" style="display: block;width:100%;height:100px;" data-school-code="'+App.vars.schoolData.schList[i].schCd+'">' +
                '<div>' +
                '<span class="sprite sprite_status sprite_air_mid '+ airState +'"></span>' +
                '<div class="school_info"><p class="name">'+ App.vars.schoolData.schList[i].schNm +'</p>' +
                '<p class="air_info '+ airState +'"><span>미세먼지</span>' + App.vars.schoolData.schList[i].pm10 + '<em>'+App.vars.schoolData.schList[i].airGrd +'</em></p>' +
                '<p class="none_place">학교주변 관측소에서 제공하는 정보입니다.</p></div></div></a></div></div>';

            $('.box_slide').append(welSchoolList);

        }

        /*self.mapCardSlider();*/
    }
});