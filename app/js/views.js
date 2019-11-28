directory.globalEventView = Backbone.View.extend({
    el: "body",
    initialize: function () {
        this._assignElements();
        this._attachEventHandlers();
    },
    _assignElements: function () {
        this.welDoc = $(document.body);
    },
    _attachEventHandlers: function () {
        this.welDoc.on('click', 'a[href="#"]', $.proxy(this.prevent, this));
        this.welDoc.on('click', '._mySchoolList', $.proxy(this.mySchoolList, this));
        this.welDoc.on('click', '._moveMainPage', $.proxy(this.moveMainPage, this));
        this.welDoc.on('click', '._fnMoveMyLocation', $.proxy(this.moveMyLocation, this));
        this.welDoc.on('click', '._fnRefresh', $.proxy(this.initMap, this));
    },
    initMap: function(){
        App.view.homeMain.mainMap.destroy();
        App.view.homeMain.setMap();
    },
    moveMyLocation: function(){
        App.view.homeMain.moveMyLocation();
    },
    mySchoolList: function(){
        App.router.navigate("mySchool");
    },
    moveMainPage: function(){
        App.router.navigate("", App.view.mySchool.bLogin);
        console.log(App.view.mySchool.bLogin)
    },
    prevent: function (event) {
        event.preventDefault();
    }
});

directory.mainHeader = Backbone.View.extend({
    render: function () {
        $('.wrap_header').html(templete["header/mainHeader"]())
        return this;
    }
})
directory.homeMain = Backbone.View.extend({
    bLogin: true,
    mainMap: null,
    schoolCardSlider: null,
    initialize: function (params) {
        App.view.mainHeader = new directory.mainHeader();
        console.log(params)
        this.render();
    },
    render: function () {
        var self = this;
        
        // 헤더 바인딩
        App.view.mainHeader.render();
        // 템플릿팅
        if(self.bLogin){
            // 로그인 후
            self.$el.html(templete["main/mainLogin"]());
        } else {
            // 기본 메인
            self.$el.html(templete["main/main"]());
        }

        
        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el);
        
        // 맵 설정
        this.setMap();
        
        // 학교정보 슬라이더
        this.mapCardSlider();
    },
    setMap: function(){
        var self = this;
        var marker, popup, markerLayer;
        var lonlat, size, offset, icon;
        var selectMarker = null;
        var arrMarkerPopup = [];
        this.mainMap = new Tmap.Map({
            div: 'school_map', // map을 표시해줄 div
            width: '100%',  // map의 width 설정
            height: '100%' // map의 height 설정
        })
        // 마커와 팝업을 세팅합니다.
        function MarkerPopup(marker) {
            this.marker = marker;
            /*this.popup = popup;*/
        }

        // var mapData = {
        //     "lat": "37.485451",
        //     "lon": "126.901500"
        // }
        // $.ajax({
        //     url: "http://iot.ubiveloxmobile.com/skt/sch/list?lat=37.485451&lon=126.901500",
        //     dataType:"json",
        //     contentType : "application/json; charset=UTF-8",
        //     data: mapData,
        //     type:"POST",
        //     success : function(data) {
        //         console.log(data);
        //         },
        //     error: function(jqXHR) {
        //         console.log(jqXHR);
        //     }
        // });
        var schoolData = {"schList":[{"no":1,"schNm":"서울영림초등학교","schCd":"B000002008","lat":37.4872977,"lon":126.9025393,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":2,"schNm":"서울영서초등학교","schCd":"B000001967","lat":37.4884254,"lon":126.8947429,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":3,"schNm":"서울조원초등학교","schCd":"B000002329","lat":37.4841778,"lon":126.909581,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":4,"schNm":"서울신대림초등학교","schCd":"B000002007","lat":37.491924,"lon":126.9058543,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":5,"schNm":"서울대동초등학교","schCd":"B000002000","lat":37.4935997,"lon":126.9004978,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":6,"schNm":"서울구로남초등학교","schCd":"B000001968","lat":37.4854831,"lon":126.890983,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":7,"schNm":"서울가산초등학교","schCd":"B000001982","lat":37.4779453,"lon":126.896405,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":8,"schNm":"서울문창초등학교","schCd":"B000002322","lat":37.4887988,"lon":126.9136647,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":9,"schNm":"서울문성초등학교","schCd":"B000001984","lat":37.4745437,"lon":126.8993703,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":10,"schNm":"서울미성초등학교","schCd":"B000002332","lat":37.4779314,"lon":126.9125391,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":11,"schNm":"서울영남초등학교","schCd":"B000001978","lat":37.4756806,"lon":126.9094339,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":12,"schNm":"서울동구로초등학교","schCd":"B000001965","lat":37.4949077,"lon":126.8925517,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":13,"schNm":"서울도신초등학교","schCd":"B000002005","lat":37.498728,"lon":126.9008446,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":14,"schNm":"서울영일초등학교","schCd":"B000001953","lat":37.485191,"lon":126.8837685,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":15,"schNm":"서울보라매초등학교","schCd":"B000002321","lat":37.4956749,"lon":126.916097,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":16,"schNm":"서울신영초등학교","schCd":"B000002006","lat":37.500349,"lon":126.8959027,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":17,"schNm":"서울난우초등학교","schCd":"B000002344","lat":37.4768265,"lon":126.9178675,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":18,"schNm":"서울정심초등학교","schCd":"B000001983","lat":37.4707047,"lon":126.9079059,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":19,"schNm":"서울대길초등학교","schCd":"B000002014","lat":37.4981124,"lon":126.9138234,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":20,"schNm":"서울남부초등학교","schCd":"B000002326","lat":37.4848612,"lon":126.9220969,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":21,"schNm":"서울구로초등학교","schCd":"B000001969","lat":37.4969041,"lon":126.8860083,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":22,"schNm":"서울신구로초등학교","schCd":"B000001966","lat":37.4993774,"lon":126.8892874,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":23,"schNm":"서울대영초등학교","schCd":"B000002011","lat":37.5024468,"lon":126.9058247,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":24,"schNm":"서울문교초등학교","schCd":"B000001977","lat":37.4664123,"lon":126.9086835,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":25,"schNm":"서울독산초등학교","schCd":"B000001985","lat":37.4655786,"lon":126.9004487,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":26,"schNm":"서울두산초등학교","schCd":"B000001976","lat":37.467422,"lon":126.8906367,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":27,"schNm":"서울난곡초등학교","schCd":"B000002330","lat":37.4692404,"lon":126.9166641,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":28,"schNm":"서울대방초등학교","schCd":"B000002013","lat":37.5023889,"lon":126.9194861,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":29,"schNm":"서울신림초등학교","schCd":"B000002328","lat":37.4773529,"lon":126.9275253,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":30,"schNm":"서울미래초등학교","schCd":"B000001954","lat":37.5052038,"lon":126.8880137,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":31,"schNm":"서울당곡초등학교","schCd":"B000002339","lat":37.4900001,"lon":126.9299853,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":32,"schNm":"서울도림초등학교","schCd":"B000001999","lat":37.5081227,"lon":126.9071795,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":33,"schNm":"서울구일초등학교","schCd":"B000001970","lat":37.4927407,"lon":126.8729387,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":34,"schNm":"광명광성초등학교","schCd":"B000004276","lat":37.4782962,"lon":126.8728636,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":35,"schNm":"서울대림초등학교","schCd":"B000002316","lat":37.5006148,"lon":126.925733,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":36,"schNm":"도덕초등학교","schCd":"B000004258","lat":37.484272,"lon":126.8703096,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":37,"schNm":"연서초등학교","schCd":"B000004265","lat":37.4661354,"lon":126.8818382,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":38,"schNm":"서울영원초등학교","schCd":"B000001995","lat":37.5105594,"lon":126.9022665,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":39,"schNm":"서울우신초등학교","schCd":"B000002012","lat":37.5094273,"lon":126.9117849,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":40,"schNm":"하일초등학교","schCd":"B000004280","lat":37.4687991,"lon":126.8766713,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":41,"schNm":"철산초등학교","schCd":"B000004278","lat":37.4694164,"lon":126.8748714,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":42,"schNm":"서울난향초등학교","schCd":"B000002345","lat":37.4623207,"lon":126.9179108,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":43,"schNm":"광명북초등학교","schCd":"B000004275","lat":37.4866882,"lon":126.868059,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":44,"schNm":"서울신흥초등학교","schCd":"B000001981","lat":37.4594072,"lon":126.9086512,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":45,"schNm":"하안남초등학교","schCd":"B000004279","lat":37.4618601,"lon":126.885524,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":46,"schNm":"서울신미림초등학교","schCd":"B000001971","lat":37.5067663,"lon":126.8797159,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":47,"schNm":"서울영등포초등학교","schCd":"B000002001","lat":37.5128795,"lon":126.898215,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":48,"schNm":"서울원신초등학교","schCd":"B000002325","lat":37.4669489,"lon":126.9273104,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":49,"schNm":"서울금나래초등학교","schCd":"B000024775","lat":37.4580993,"lon":126.8960891,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":50,"schNm":"서울영신초등학교","schCd":"B000002010","lat":37.5098533,"lon":126.9181917,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":51,"schNm":"서울안천초등학교","schCd":"B000001986","lat":37.4581789,"lon":126.8885094,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":52,"schNm":"광명동초등학교","schCd":"B000004274","lat":37.4834627,"lon":126.8632584,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":53,"schNm":"서울신도림초등학교","schCd":"B000001972","lat":37.5122765,"lon":126.8828823,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":54,"schNm":"안현초등학교","schCd":"B000004262","lat":37.4707076,"lon":126.8676426,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":55,"schNm":"광명광덕초등학교","schCd":"B000004277","lat":37.4733162,"lon":126.8659323,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":56,"schNm":"서울시흥초등학교","schCd":"B000001992","lat":37.4547748,"lon":126.9048222,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":57,"schNm":"서울고원초등학교","schCd":"B000001955","lat":37.4974706,"lon":126.865676,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":58,"schNm":"하안초등학교","schCd":"B000004263","lat":37.4627844,"lon":126.8741756,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":59,"schNm":"서울신성초등학교","schCd":"B000002346","lat":37.4717967,"lon":126.9372757,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":60,"schNm":"서울고산초등학교","schCd":"B000001956","lat":37.4992418,"lon":126.8655182,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":61,"schNm":"서울상도초등학교","schCd":"B000002320","lat":37.4999516,"lon":126.9372288,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":62,"schNm":"서울신길초등학교","schCd":"B000002315","lat":37.5103872,"lon":126.9266448,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":63,"schNm":"서울금천초등학교","schCd":"B000001987","lat":37.4546475,"lon":126.9125446,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":64,"schNm":"가림초등학교","schCd":"B000004264","lat":37.4583179,"lon":126.8791167,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":65,"schNm":"서울은천초등학교","schCd":"B000002342","lat":37.4869848,"lon":126.9427248,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":66,"schNm":"하안북초등학교","schCd":"B000004281","lat":37.4642087,"lon":126.8694787,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":67,"schNm":"서울관악초등학교","schCd":"B000002343","lat":37.4806583,"lon":126.9429238,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":68,"schNm":"서울신우초등학교","schCd":"B000002327","lat":37.4625898,"lon":126.9328245,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":69,"schNm":"서울문래초등학교","schCd":"B000002009","lat":37.5186645,"lon":126.8932886,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":70,"schNm":"서울탑동초등학교","schCd":"B000001988","lat":37.4529204,"lon":126.9147652,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":71,"schNm":"서울영화초등학교","schCd":"B000002314","lat":37.5091459,"lon":126.9331672,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":72,"schNm":"서울개봉초등학교","schCd":"B000001961","lat":37.4897274,"lon":126.858306,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":73,"schNm":"광명초등학교","schCd":"B000004268","lat":37.4803592,"lon":126.8577659,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":74,"schNm":"구름산초등학교","schCd":"B000004260","lat":37.4528967,"lon":126.8841355,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":75,"schNm":"동광초등학교","schCd":"B000001993","lat":37.4519969,"lon":126.9166976,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":76,"schNm":"서울삼성초등학교","schCd":"B000002331","lat":37.467907,"lon":126.9410205,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":77,"schNm":"서울영문초등학교","schCd":"B000002002","lat":37.5196819,"lon":126.8876868,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":78,"schNm":"서울갈산초등학교","schCd":"B000002198","lat":37.5117434,"lon":126.8699978,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":79,"schNm":"서울구암초등학교","schCd":"B000002341","lat":37.4893991,"lon":126.9469801,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":80,"schNm":"서울신상도초등학교","schCd":"B000002305","lat":37.5001738,"lon":126.9439776,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":81,"schNm":"서울은정초등학교","schCd":"B000002192","lat":37.5112577,"lon":126.8673755,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":82,"schNm":"서울신봉초등학교","schCd":"B000002340","lat":37.4852959,"lon":126.9491081,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":83,"schNm":"소하초등학교","schCd":"B000004261","lat":37.4489929,"lon":126.8873732,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":84,"schNm":"서울문백초등학교","schCd":"B000001980","lat":37.4470903,"lon":126.8992804,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":85,"schNm":"서울영중초등학교","schCd":"B000001996","lat":37.5238382,"lon":126.9039467,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":86,"schNm":"서울윤중초등학교","schCd":"B000002016","lat":37.5199146,"lon":126.9230217,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":87,"schNm":"서울고척초등학교","schCd":"B000001962","lat":37.5010425,"lon":126.8569791,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":88,"schNm":"서울신목초등학교","schCd":"B000002210","lat":37.5169159,"lon":126.8728673,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":89,"schNm":"서울백산초등학교","schCd":"B000001989","lat":37.4467398,"lon":126.9050156,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":90,"schNm":"광명남초등학교","schCd":"B000004270","lat":37.4755251,"lon":126.8538613,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":91,"schNm":"서울금동초등학교","schCd":"B000001979","lat":37.4475308,"lon":126.9164244,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":92,"schNm":"서울개명초등학교","schCd":"B000001958","lat":37.4831226,"lon":126.8507003,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":93,"schNm":"서울노량진초등학교","schCd":"B000002307","lat":37.5111586,"lon":126.9410107,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":94,"schNm":"서울청룡초등학교","schCd":"B000002334","lat":37.4757897,"lon":126.9512057,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":95,"schNm":"서울개웅초등학교","schCd":"B000001957","lat":37.4883986,"lon":126.850121,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":96,"schNm":"서울계남초등학교","schCd":"B000002191","lat":37.5099655,"lon":126.8601556,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":97,"schNm":"서울덕의초등학교","schCd":"B000001963","lat":37.5060568,"lon":126.8566854,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":98,"schNm":"서울상현초등학교","schCd":"B000022774","lat":37.4949618,"lon":126.9526884,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":99,"schNm":"서울영동초등학교","schCd":"B000001997","lat":37.5269054,"lon":126.9075114,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":100,"schNm":"서울당중초등학교","schCd":"B000002004","lat":37.5265188,"lon":126.889994,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":101,"schNm":"서울봉현초등학교","schCd":"B000002333","lat":37.4908943,"lon":126.9550476,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":102,"schNm":"서울목동초등학교","schCd":"B000002209","lat":37.5224822,"lon":126.8720819,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":103,"schNm":"서울원당초등학교","schCd":"B000002336","lat":37.4811233,"lon":126.9564572,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":104,"schNm":"광문초등학교","schCd":"B000004272","lat":37.4665771,"lon":126.8515482,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":105,"schNm":"광명서초등학교","schCd":"B000004269","lat":37.4781649,"lon":126.846844,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":106,"schNm":"서울금산초등학교","schCd":"B000001990","lat":37.4416488,"lon":126.9081994,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":107,"schNm":"서울영본초등학교","schCd":"B000002317","lat":37.5105022,"lon":126.9488388,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":108,"schNm":"서울봉천초등학교","schCd":"B000002335","lat":37.48309,"lon":126.9583231,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":109,"schNm":"서울신기초등학교","schCd":"B000002195","lat":37.5113683,"lon":126.8543083,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":110,"schNm":"서울세곡초등학교","schCd":"B000001964","lat":37.5046189,"lon":126.8492552,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":111,"schNm":"광일초등학교","schCd":"B000004271","lat":37.4712778,"lon":126.84668,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":112,"schNm":"서울강남초등학교","schCd":"B000002306","lat":37.5061928,"lon":126.9532007,"outSenLoc":"","pm10":"30","airGrd":"좋음"},{"no":113,"schNm":"서울당서초등학교","schCd":"B000001998","lat":37.5317056,"lon":126.8994612,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":114,"schNm":"서울양명초등학교","schCd":"B000002194","lat":37.5151175,"lon":126.8564126,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":115,"schNm":"서울여의도초등학교","schCd":"B000001994","lat":37.5228903,"lon":126.9364713,"outSenLoc":"","pm10":"37","airGrd":"보통"},{"no":116,"schNm":"서울신서초등학교","schCd":"B000002193","lat":37.5202464,"lon":126.8624156,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":117,"schNm":"서울목운초등학교","schCd":"B000002190","lat":37.5267817,"lon":126.8734243,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":118,"schNm":"서울서정초등학교","schCd":"B000002189","lat":37.5239444,"lon":126.8674026,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":119,"schNm":"서울인헌초등학교","schCd":"B000002338","lat":37.4763327,"lon":126.9603445,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":120,"schNm":"서울선유초등학교","schCd":"B000002003","lat":37.5326309,"lon":126.8926715,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":121,"schNm":"서울남명초등학교","schCd":"B000002196","lat":37.5152537,"lon":126.8539776,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":122,"schNm":"서울본동초등학교","schCd":"B000002308","lat":37.5102015,"lon":126.9536623,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":123,"schNm":"서울오류초등학교","schCd":"B000001973","lat":37.4980449,"lon":126.8423578,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":124,"schNm":"서울매봉초등학교","schCd":"B000001960","lat":37.5045027,"lon":126.8444876,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":125,"schNm":"서울경인초등학교","schCd":"B000002188","lat":37.5330378,"lon":126.8862812,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":126,"schNm":"서울양목초등학교","schCd":"B000002197","lat":37.5237548,"lon":126.8616964,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":127,"schNm":"서울은로초등학교","schCd":"B000002309","lat":37.5033544,"lon":126.9599535,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":128,"schNm":"서면초등학교","schCd":"B000004273","lat":37.4384746,"lon":126.8801915,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":129,"schNm":"서울행림초등학교","schCd":"B000002312","lat":37.4816178,"lon":126.9645735,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":130,"schNm":"서울오류남초등학교","schCd":"B000001975","lat":37.4893815,"lon":126.8384138,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":131,"schNm":"중앙대학교사범대학부속초등학교","schCd":"B000002324","lat":37.5053803,"lon":126.9601067,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":132,"schNm":"서울신남성초등학교","schCd":"B000002313","lat":37.4889652,"lon":126.9651691,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":133,"schNm":"서울천왕초등학교","schCd":"B000001952","lat":37.4816096,"lon":126.8371548,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":134,"schNm":"서울장수초등학교","schCd":"B000002212","lat":37.512868,"lon":126.8454266,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":135,"schNm":"충현초등학교","schCd":"B000004259","lat":37.4329875,"lon":126.8863027,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":136,"schNm":"서울당산초등학교","schCd":"B000002015","lat":37.5395844,"lon":126.8961552,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":137,"schNm":"서울신남초등학교","schCd":"B000002207","lat":37.5161218,"lon":126.8444965,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":138,"schNm":"서울흑석초등학교","schCd":"B000002323","lat":37.5085821,"lon":126.9651701,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":139,"schNm":"서울영도초등학교","schCd":"B000002215","lat":37.5359626,"lon":126.871927,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":140,"schNm":"서울양동초등학교","schCd":"B000002213","lat":37.526006,"lon":126.8511587,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":141,"schNm":"서울양강초등학교","schCd":"B000002206","lat":37.523998,"lon":126.8480459,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":142,"schNm":"서울정목초등학교","schCd":"B000002201","lat":37.5371216,"lon":126.870245,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":143,"schNm":"서울지향초등학교","schCd":"B000002211","lat":37.5129416,"lon":126.8371342,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":144,"schNm":"서울월촌초등학교","schCd":"B000002214","lat":37.5402367,"lon":126.8767678,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":145,"schNm":"서울삼일초등학교","schCd":"B000002311","lat":37.4882355,"lon":126.9751016,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":146,"schNm":"서울사당초등학교","schCd":"B000002337","lat":37.4734843,"lon":126.9743018,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":147,"schNm":"서울남성초등학교","schCd":"B000002318","lat":37.4844416,"lon":126.9760922,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":148,"schNm":"서울목원초등학교","schCd":"B000002187","lat":37.5429195,"lon":126.8823543,"outSenLoc":"","pm10":"-","airGrd":"-"},{"no":149,"schNm":"서울오정초등학교","schCd":"B000001974","lat":37.4897358,"lon":126.8263073,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":150,"schNm":"연현초등학교","schCd":"B000024200","lat":37.4254856,"lon":126.9026342,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":151,"schNm":"서울동작초등학교","schCd":"B000002310","lat":37.4941016,"lon":126.9768411,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":152,"schNm":"서울온수초등학교","schCd":"B000001959","lat":37.4938714,"lon":126.826079,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":153,"schNm":"서울강서초등학교","schCd":"B000002204","lat":37.522293,"lon":126.8405408,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":154,"schNm":"서울신정초등학교","schCd":"B000002218","lat":37.5327438,"lon":126.852547,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":155,"schNm":"온신초등학교","schCd":"B000004267","lat":37.4425785,"lon":126.8462726,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":156,"schNm":"서울남사초등학교","schCd":"B000002319","lat":37.4823436,"lon":126.9788622,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":157,"schNm":"서울강월초등학교","schCd":"B000002208","lat":37.5160261,"lon":126.8339055,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":158,"schNm":"서울신은초등학교","schCd":"B000002186","lat":37.5140491,"lon":126.8320115,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":159,"schNm":"서울양화초등학교","schCd":"B000002200","lat":37.5438298,"lon":126.874714,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":160,"schNm":"서울신강초등학교","schCd":"B000002205","lat":37.5259562,"lon":126.8416536,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":161,"schNm":"옥길버들초등학교","schCd":"B000024042","lat":37.4640596,"lon":126.8259832,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":162,"schNm":"서울한강초등학교","schCd":"B000002116","lat":37.5252266,"lon":126.965079,"outSenLoc":"","pm10":"46","airGrd":"보통"},{"no":163,"schNm":"서울원효초등학교","schCd":"B000002109","lat":37.5360798,"lon":126.9514815,"outSenLoc":"","pm10":"19","airGrd":"좋음"},{"no":164,"schNm":"서울신곡초등학교","schCd":"B000002219","lat":37.5387777,"lon":126.8558353,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":165,"schNm":"서울등마초등학교","schCd":"B000002220","lat":37.5419906,"lon":126.8617624,"outSenLoc":"","pm10":"35","airGrd":"보통"},{"no":166,"schNm":"서울신석초등학교","schCd":"B000001942","lat":37.5441612,"lon":126.9378894,"outSenLoc":"","pm10":"19","airGrd":"좋음"},{"no":167,"schNm":"서울마포초등학교","schCd":"B000001933","lat":37.5387776,"lon":126.9496417,"outSenLoc":"","pm10":"19","airGrd":"좋음"},{"no":168,"schNm":"안양호암초등학교","schCd":"B000003851","lat":37.420836,"lon":126.9165642,"outSenLoc":"","pm10":"31","airGrd":"보통"},{"no":169,"schNm":"서울서강초등학교","schCd":"B000001936","lat":37.5482699,"lon":126.9268512,"outSenLoc":"","pm10":"20","airGrd":"좋음"},{"no":170,"schNm":"서울이수초등학교","schCd":"B000002263","lat":37.478099,"lon":126.984565,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":171,"schNm":"삼성초등학교","schCd":"B000003844","lat":37.4195128,"lon":126.9120031,"outSenLoc":"","pm10":"67","airGrd":"보통"},{"no":172,"schNm":"서울염리초등학교","schCd":"B000001946","lat":37.5424465,"lon":126.945885,"outSenLoc":"","pm10":"19","airGrd":"좋음"},{"no":173,"schNm":"동곡초등학교","schCd":"B000003792","lat":37.4904164,"lon":126.8171219,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":174,"schNm":"서울방배초등학교","schCd":"B000002265","lat":37.4874866,"lon":126.9871924,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":175,"schNm":"부천양지초등학교","schCd":"B000003830","lat":37.4806795,"lon":126.8158129,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":176,"schNm":"서울성산초등학교","schCd":"B000001948","lat":37.5532958,"lon":126.9110836,"outSenLoc":"","pm10":"20","airGrd":"좋음"},{"no":177,"schNm":"서울신용산초등학교","schCd":"B000002121","lat":37.5200122,"lon":126.9758975,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":178,"schNm":"서울화일초등학교","schCd":"B000002216","lat":37.540726,"lon":126.8474076,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":179,"schNm":"서울서래초등학교","schCd":"B000002264","lat":37.4962954,"lon":126.9893083,"outSenLoc":"","pm10":"53","airGrd":"보통"},{"no":180,"schNm":"서울염동초등학교","schCd":"B000002242","lat":37.5522919,"lon":126.8722223,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":181,"schNm":"서울등촌초등학교","schCd":"B000002237","lat":37.5475646,"lon":126.8583713,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":182,"schNm":"서울방현초등학교","schCd":"B000002266","lat":37.4764899,"lon":126.99015,"outSenLoc":"","pm10":"36","airGrd":"보통"},{"no":183,"schNm":"부천부안초등학교","schCd":"B000003831","lat":37.4800487,"lon":126.8121542,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":184,"schNm":"서울월정초등학교","schCd":"B000002244","lat":37.5343843,"lon":126.8363946,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":185,"schNm":"옥길산들초등학교","schCd":"B000024041","lat":37.4624046,"lon":126.8165317,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":186,"schNm":"서울용강초등학교","schCd":"B000001932","lat":37.5487232,"lon":126.9437543,"outSenLoc":"","pm10":"19","airGrd":"좋음"},{"no":187,"schNm":"서울남정초등학교","schCd":"B000002120","lat":37.5365648,"lon":126.9649864,"outSenLoc":"","pm10":"46","airGrd":"보통"},{"no":188,"schNm":"서울신원초등학교","schCd":"B000002203","lat":37.5295028,"lon":126.829855,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":189,"schNm":"서울서교초등학교","schCd":"B000001938","lat":37.5549247,"lon":126.924974,"outSenLoc":"","pm10":"20","airGrd":"좋음"},{"no":190,"schNm":"계수초등학교","schCd":"B000004074","lat":37.4530582,"lon":126.820472,"outSenLoc":"","pm10":"32","airGrd":"보통"},{"no":191,"schNm":"고리울초등학교","schCd":"B000003810","lat":37.5272479,"lon":126.8271472,"outSenLoc":"","pm10":"45","airGrd":"보통"},{"no":192,"schNm":"서울염창초등학교","schCd":"B000002223","lat":37.5529516,"lon":126.8680558,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":193,"schNm":"서울금양초등학교","schCd":"B000002118","lat":37.5404868,"lon":126.9612596,"outSenLoc":"","pm10":"46","airGrd":"보통"},{"no":194,"schNm":"서울동교초등학교","schCd":"B000001934","lat":37.5580959,"lon":126.9025892,"outSenLoc":"","pm10":"20","airGrd":"좋음"},{"no":195,"schNm":"서울화곡초등학교","schCd":"B000002243","lat":37.5433094,"lon":126.8459511,"outSenLoc":"","pm10":"27","airGrd":"좋음"},{"no":196,"schNm":"서울반포초등학교","schCd":"B000002261","lat":37.503158,"lon":126.9910009,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":197,"schNm":"서울공덕초등학교","schCd":"B000001930","lat":37.5459266,"lon":126.9535775,"outSenLoc":"","pm10":"19","airGrd":"좋음"},{"no":198,"schNm":"화창초등학교","schCd":"B000003845","lat":37.4120558,"lon":126.9038329,"outSenLoc":"","pm10":"67","airGrd":"보통"},{"no":199,"schNm":"범박초등학교","schCd":"B000003822","lat":37.4703982,"lon":126.8107096,"outSenLoc":"","pm10":"38","airGrd":"보통"},{"no":200,"schNm":"서울신월초등학교","schCd":"B000002245","lat":37.5399953,"lon":126.8391141,"outSenLoc":"","pm10":"27","airGrd":"좋음"}]}


        // map 생성
        // Tmap.map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.

        lonlat = new Tmap.LonLat(126.901500, 37.485451).transform("EPSG:4326", "EPSG:3857");
        this.mainMap.setCenter(lonlat,14);
        markerLayer = new Tmap.Layer.Markers(); // 마커를 추가할 레이어
        this.mainMap.addLayer(markerLayer); // 맵에 마커 레이어를 추가합니다.
        this.mainMap.removeZoomControl();
        size = new Tmap.Size(41, 46); // 마커 사이즈를 지정합니다.
        offset = new Tmap.Pixel(-(size.w / 2), -(size.h)); // 마커의 중심점을 조정합니다.(마커의 중앙하단으로 설정)

        // 공기 오염도 아이콘
        var blueIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air good">좋음</a></div>';
        var greenIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air normal">보통</a></div>';
        var yellowIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air bad">나쁨</a></div>';
        var redIcon = '<div class="box_map_icon_air"><a href="#" class="sprite sprite_status sprite_map_air worse">매우나쁨</a></div>';
        var schLonlat, airGrd;

        for (var i = 0; i < schoolData.schList.length; i++) {
            // 마커 위치
            schLonlat = new Tmap.LonLat(schoolData.schList[i].lon, schoolData.schList[i].lat).transform("EPSG:4326", "EPSG:3857");
            // 데이터 구분 공기오염도 아이콘
            switch(schoolData.schList[i].airGrd){
                case "보통" :
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
            var icon = new Tmap.IconHtml(airGrd, size, offset); // 마커 아이콘
            var title = "1";
            marker = new Tmap.Marker(schLonlat, icon, title); // 마커생성
            markerLayer.addMarker(marker);  // 마커 레이어에 마커 추가
            //팝업 생성

            //마커 이벤트등록
            marker.events.register("click", new MarkerPopup(marker), onClickMarker); // 마커를 클릭했을 때 이벤트 설정
            marker.events.register("click", new MarkerPopup(marker), markerGetLonlat); // 마커를 클릭했을 때 이벤트 설정
        }
        function onClickMarker(evt){
            // 터치시 마커 중심으로 맵 이동
            self.mainMap.setCenter(this.marker.lonlat,17);
        }
        function markerGetLonlat(evt){
            var nMarkerLonlat = evt.object.lonlat.transform("EPSG:3857", "EPSG:4326");
            var nMarkerLon = nMarkerLonlat.lon.toFixed(7);
            var nMarkerLat = nMarkerLonlat.lat.toFixed(7);
            var markerNum;
            for (var i = 0; i < schoolData.schList.length; i++) {

                if(nMarkerLon == schoolData.schList[i].lon && nMarkerLat == schoolData.schList[i].lat){
                    console.log('클릭한 마커 위치', nMarkerLon, nMarkerLat);
                    console.log('데이터 마커 위치', schoolData.schList[i].lon, schoolData.schList[i].lat);
                    markerNum = schoolData.schList[i].no;
                    self.goToSliderMarker(markerNum);
                    break;
                } else {
                    console.log('none')
                }
            }
        }

        function addSliderSchool(){
            var airState;
            for (var i = 0; i < schoolData.schList.length; i++) {
                switch(schoolData.schList[i].airGrd){
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
                var welSchoolList = '<div><div id="schoolNum' + schoolData.schList[i].no +'" class="box_school_list"><div>' +
                    '<span class="sprite sprite_status sprite_air_mid '+ airState +'"></span>' +
                    '<div class="school_info"><p class="name">'+ schoolData.schList[i].schNm +'</p>' +
                    '<p class="air_info '+ airState +'"><span>미세먼지</span>' + schoolData.schList[i].pm10 + '<em>'+schoolData.schList[i].airGrd +'</em></p>' +
                    '<p class="none_place">학교주변 관측소에서 제공하는 정보입니다.</p></div></div></div></div>';
                $('.box_slide').append(welSchoolList);
            }

        }

        addSliderSchool();

    },
    mapCardSlider: function(){
        this.schoolCardSlider = $('.slider');
        this.schoolCardSlider.bxSlider({
            hideControlOnEnd: true,
            pager: false,
            slideMargin: 12
        });
    },
    moveMyLocation: function(){
        console.log('■■■ 내 위치로 ■■■');
        var lonlat = new Tmap.LonLat(126.901500, 37.485451).transform("EPSG:4326", "EPSG:3857");
        this.mainMap.setCenter(lonlat,14);
    },
    goToSliderMarker: function (markerNum){
        this.schoolCardSlider.goToSlide(markerNum - 1)
    }
});
directory.mySchool = Backbone.View.extend({
    bLogin: true,
    initialize: function () {
        App.view.mainHeader = new directory.mainHeader();
        this.render();
    },
    render: function () {
        var self = this;
        
        // 헤더 바인딩
        App.view.mainHeader.render();

        // 템플릿팅
        if(self.bLogin){
            self.$el.html(templete["mySchool/mySchoolLogin"]());
        } else {
            self.$el.html(templete["mySchool/mySchool"]());
        }

        // 컨텐츠 바인딩
        $('.wrap_contents').html(self.$el);
        
        // 나의 학교 리스트 바인딩
        this.mySchoolListBind();
    },
    mySchoolListBind: function(){
        var schoolData = {"schList":[{"schNm":"가석초등학교","schCd":"a123","lat":132.453,"lon":1212.23232,"outSenLoc":"실외센서 설치정보1","pm10":"20","airGrd":"1","lv":"1","cls":"3","clsCd":"E308DEF","senList":[{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"},{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"}],"clnList":[{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"},{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"}]},{"schNm":"석남초등학교","schCd":"B343","lat":132.4131,"lon":1212.84315,"outSenLoc":"실외센서 설치정보2","pm10":"45","airGrd":"2","lv":"3","cls":"4","clsCd":"E84DEF","senList":[{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"},{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"}],"clnList":[{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"},{"dvcId":"AVC-100","senNm":"센서","airGrd":"3"},{"dvcId":"AVC-300","senNm":"센서요","airGrd":"2"}]}]}
        var airGrd;
        var circleBlueIcon = '<span class="sprite sprite_status sprite_air_mid good"></span><p class="status good">좋음</p>';
        var circleGreenIcon = '<span class="sprite sprite_status sprite_air_mid normal"></span><p class="status normal">보통</p>';
        var circleYellowIcon = '<span class="sprite sprite_status sprite_air_mid bad"></span><p class="status bad">나쁨</p>';
        var circleRedIcon = '<span class="sprite sprite_status sprite_air_mid worse"></span><p class="status worse">매우나쁨</p>';

        function _fnAirState(){
            switch(schoolData.schList[i].airGrd){
                case "1" :
                    airGrd = circleBlueIcon;
                    break;
                case "2" :
                    airGrd = circleGreenIcon;
                    break;
                case "3" :
                    airGrd = circleYellowIcon;
                    break;
                case "4" :
                    airGrd = circleRedIcon;
                    break;
            }
        }
        var colorIcon;
        var radiusBlueIcon = '<p class="good">좋음</p>';
        var radiusGreenIcon = '<p class="normal">보통</p>';
        var radiusYellowIcon = '<p class="bad">나쁨</p>';
        var radiusRedIcon = '<p class="worse">매우나쁨</p>';

        for(var i = 0;i < schoolData.schList.length;i++){
            _fnAirState();

            // 센서 for 문
            var welSensList = '';
            for(var j = 0;j < schoolData.schList[i].senList.length;j++){
                switch(schoolData.schList[i].clnList[j].airGrd){
                    case "1" :
                        colorIcon = radiusBlueIcon;
                        break;
                    case "2" :
                        colorIcon = radiusGreenIcon;
                        break;
                    case "3" :
                        colorIcon = radiusYellowIcon;
                        break;
                    case "4" :
                        colorIcon = radiusRedIcon;
                        break;
                }

                welSensList = welSensList + '<li><span class="sprite sprite_common sprite_sensor"></span>' + schoolData.schList[i].senList[j].senNm +schoolData.schList[i].senList[j].dvcId + colorIcon +'</li>'
            }

            // 공기청정기 for 문
            var welCleanerList = '';
            for(var j = 0;j < schoolData.schList[i].senList.length;j++){
                switch(schoolData.schList[i].senList[j].airGrd){
                    case "1" :
                        colorIcon = radiusBlueIcon;
                        break;
                    case "2" :
                        colorIcon = radiusGreenIcon;
                        break;
                    case "3" :
                        colorIcon = radiusYellowIcon;
                        break;
                    case "4" :
                        colorIcon = radiusRedIcon;
                        break;
                }

                welCleanerList = welCleanerList + '<li><span class="sprite sprite_common sprite_air_sensor"></span>' + schoolData.schList[i].clnList[j].senNm +schoolData.schList[i].clnList[j].dvcId + colorIcon + '</li>'
            }

            var sAirInfo = "";
            if(schoolData.schList[i].outSenLoc !== ""){
                sAirInfo = sAirInfo + '<span class="place"><em class="sprite sprite_common sprite_position"></em>'+schoolData.schList[i].outSenLoc+'</span>'
            } else {
                sAirInfo = sAirInfo + '<span class="none_place">※학교 주변 관측소 제공 정보</span>'
            }

            var welSchoolCard = '<li><p class="school_title"><span>' + schoolData.schList[i].schNm + '</span>'+schoolData.schList[i].lv+'학년'+ schoolData.schList[i].cls+'반</p>'+
                '<ul>' +
                welSensList +
                welCleanerList +
                '</ul>'+
                '<div class="school_air">' + airGrd +
                '<p class="air_dust">미세먼지<span class="air_num">'+ schoolData.schList[i].pm10 +'</span>'+ sAirInfo +'</p></div></li>'
            $('.card_school').append(welSchoolCard);
        }
    }

});
directory.wrapContainer = Backbone.View.extend({
    initialize: function (params) {
        App.view.globalEventView = new directory.globalEventView();
        this.render();
    },
    render: function () {
        /*App.fn.globalUtil = new directory.globalUtil();*/
        this.$el.html(templete["wrap/wrapContainer"]());
        return this;
    }
});