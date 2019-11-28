<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type2.php');?>
    <div class="pageWrap" id="mypageAlarmWrap">
        <div class="mypage_wra">
            <div class="my_profile_area">
                <div class="my_profile_top">
                    <div class="info_pf_box">
                        <p class="photo_pf">
                            <img src="/assets/images/temp/temp_a7.jpg" alt="">
                        </p>
                        <span class="name_pf">집고맨인테리어</span>
                        <span class="icon_premium"><img src="/assets/images/review/premium.png" alt=""></span>
                        <a href="/sub/agency/agency_detail.php" class="detail_link">업체 정보 ></a>
                    </div>
                    <div class="my_gnb">
                        <ul class="clearfix">
                            <li ><a href="/sub_partner/mypage/mypage_build.php"><span>시공사례</span></a></li>
                            <li class="new"><a href="/sub_partner/mypage/mypage_estimate.php"><span>견적내역</span></a></li>
                            <li><a href="/sub_partner/mypage/mypage_save_list.php"><span>+ SAVE</span></a></li>
                            <li class="focus"><a href="/sub_partner/mypage/mypage_edit_info.php"><span>회사정보 수정</span></a></li>
                            <li><a href="/sub_partner/mypage/mypage_premium.php"><span>프리미엄 서비스</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="info_edit_area">
                <form name="frmEditC">
                    <div class="join_item_type">
                        <div class="lb_join_type">
                            <p>필수항목</p>
                            <a href="" class="leave_mb">회원탈퇴 ></a>
                        </div>
                        <div class="item_join">
                            <p class="lb">아이디</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth_sm">
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">비밀번호</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth1">
                                <p class="chk_frm_msg red">8~16자의 영문 + 숫자 조합으로 입력</p>
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">비밀번호 확인</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth1">
                                <p class="chk_frm_msg">비밀번호가 일치합니다</p>
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">이메일</p>
                            <div class="frm_txt frm_email">
                                <input type="text" class="textbox_gray box_lgth_sm">
                                <span class="bar">@</span>
                                <select class="selectbox_gray">
                                    <option>naver.com</option>
                                    <option>gamil.com</option>
                                </select>
                                <p class="chk_frm_msg">사용하실 수 있습니다</p>
                            </div>
                        </div>
                    </div>
                    <div class="join_item_type">
                        <div class="lb_join_type">
                            <p>선택항목</p>
                        </div>
                        <div class="item_join">
                            <p class="lb">회사 주소</p>
                            <div class="frm_txt address">
                                <input type="text" class="textbox_gray box_lgth2" name="postcode">
                                <a onclick="postcodeC()" class="btn_address">주소찾기</a>
                                <input type="text" class="textbox_gray box_lgth3" name="address1">
                                <input type="text" class="textbox_gray box_lgth3" name="address2">
                            </div>
                        </div>
                        <div class="item_join">
                            <div class="num_info_join">
                                <p class="lb">전화번호</p>
                                <div class="frm_txt">
                                    <input type="text" class="textbox_gray box_lgth4" placeholder="- 없이 숫자만 입력하세요">
                                </div>
                            </div>
                            <div class="num_info_join">
                                <p class="lb">휴대폰 번호</p>
                                <div class="frm_txt">
                                    <input type="text" class="textbox_gray box_lgth4" placeholder="- 없이 숫자만 입력하세요">
                                    <a href="" class="btn_certify">인증번호 발송</a>
                                    <p class="chk_frm_msg">
                                        <input type="checkbox" class="chkbox" id="chkAgreeSns">
                                        <label for="chkAgreeSns">SMS 수신에 동의합니다</label>
                                    </p>
                                </div>
                            </div>
                            <div class="num_info_join">
                                <p class="lb">인증번호 입력</p>
                                <div class="frm_txt">
                                    <input type="text" class="textbox_gray box_lgth4">
                                    <a href="" class="btn_certify">인증완료</a>
                                    <p class="chk_frm_msg">인증이 완료되었습니다</p>
                                </div>
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">회사명</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth4">
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">대표명</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth4">
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">홈페이지</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth4">
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">사업자번호</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth4">
                            </div>
                        </div>
                        <div class="item_join item_join_upload">
                            <p class="lb">사업자 등록증 업로드 <span class="btn_upload">파일찾기</span></p>
                            <div class="dropzone drop_customC" id="dropzoneC">
                                <div class="fallback">
                                    <input name="file" type="file" multiple/>
                                </div>
                            </div>
                        </div>
                        <div class="item_join">
                            <div class="detail_join_option">
                                <p class="lb lb_big">서비스 가능한 지역</p>
                                <div class="frm_txt">
                                    <select class="selectbox_gray" name="localSelect1"></select> &nbsp;
                                    <select class="selectbox_gray" name="localSelect2"></select>
                                    <div class="local_possible"></div>
                                </div>
                            </div>
                            <div class="detail_join_option">
                                <p class="lb lb_big">희망 시공 규모</p>
                                <div class="frm_txt">
                                    <select class="selectbox_gray">
                                        <option>0만원</option>
                                    </select>
                                    <span class="bar">~</span>
                                    <select class="selectbox_gray">
                                        <option>0만원</option>
                                    </select>
                                </div>
                            </div>
                            <div class="detail_join_option">
                                <p class="lb">사업분야</p>
                                <div class="frm_txt">
                                    <div class="field_job">
                                        <span class="type_field_job">일반 리모델링</span>
                                        <div class="option_box">
                               <span class="all"><input type="checkbox" class="chkbox chkfieldall" id="optionJob1_all">
                               <label for="optionJob1_all">전체선택</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_1">
                               <label for="optionJob1_1">토탈 인테리어</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_2">
                               <label for="optionJob1_2">창호</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_3">
                               <label for="optionJob1_3">도어/중문(도어락)</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_4">
                               <label for="optionJob1_4">화장실/타일</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_5">
                               <label for="optionJob1_5">부엌/싱크대</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_6">
                               <label for="optionJob1_6">페인트/탄성</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_7">
                               <label for="optionJob1_7">도배/장판/마루</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob1_8">
                               <label for="optionJob1_8">전기/조명</label></span>
                                        </div>
                                    </div>
                                    <div class="field_job">
                                        <span class="type_field_job">기타 리모델링</span>
                                        <div class="option_box">
                               <span class="all"><input type="checkbox" class="chkbox chkfieldall" id="optionJob2_all">
                               <label for="optionJob2_all">전체선택</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_1">
                               <label for="optionJob2_1">철거/폐기물</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_2">
                               <label for="optionJob2_2">냉난방기</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_3">
                               <label for="optionJob2_3">필름/시트</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_4">
                               <label for="optionJob2_4">블라인드</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_5">
                               <label for="optionJob2_5">목공업</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_6">
                               <label for="optionJob2_6">설비</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_7">
                               <label for="optionJob2_7">소방/배관</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_8">
                               <label for="optionJob2_8">청소</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_9">
                               <label for="optionJob2_9">가구/가구수리</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_10">
                               <label for="optionJob2_10">간판</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_11">
                               <label for="optionJob2_11">사다리 줄눈시공</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_12">
                               <label for="optionJob2_12">누수탐지</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_13">
                               <label for="optionJob2_13">도어락</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_14">
                               <label for="optionJob2_14">고인유품정리</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_15">
                               <label for="optionJob2_15">상가폐업정리</label></span>
                                            <span><input type="checkbox" class="chkbox chkfield" id="optionJob2_16">
                               <label for="optionJob2_16">청유리교체소</label></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="agree_join">
                            <div class="item_agree_join first">
                                <input type="checkbox" class="chkbox" id="agreeCAll">
                                <label for="agreeCAll"><b>아래 사항에 모두 동의합니다</b></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agreeC1">
                                <label for="agreeC1">(필수) <span>개인정보수집 및 이용내용</span></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agreeC2">
                                <label for="agreeC2">(필수) <span>개인정보 제3자 제공</span></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agreeC3">
                                <label for="agreeC3">(선택) <span>인테리어 정보 및 이벤트 알림 수신</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="submit_btn">
                        <button>수정완료</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요 -->
    <div id="layer_address" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
    </div>
    <script src="/assets/js/dropzone/dropzone.js"></script>
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script>
        //리모델링 체크
        $(".option_box .chkfield").click(function () {
            var fieldType = $(this).parents(".option_box");
            var legnthBox = fieldType.find(".chkfield").length;
            var legnthChk = fieldType.find(".chkfield:checked").length;
            if(legnthChk == legnthBox){
                fieldType.find(".chkfieldall").prop("checked",true);
            }else {
                fieldType.find(".chkfieldall").prop("checked",false);
            }
        });
        $(".option_box .chkfieldall").click(function () {
            var fieldType = $(this).parents(".option_box");
            if($(this).is(":checked") == true){
                fieldType.find(".chkfield").prop("checked",true);
            }else {
                fieldType.find(".chkfield").prop("checked",false);
            }
        });

        //우편번호
        var element_layer = document.getElementById('layer_address');
        function closeDaumPostcode() {
            element_layer.style.display = 'none';
        }
        function postcodeC() {
            new daum.Postcode({
                oncomplete: function(data) {
                    // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var addr = ''; // 주소 변수
                    var extraAddr = ''; // 참고항목 변수

                    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                        addr = data.roadAddress;
                    } else { // 사용자가 지번 주소를 선택했을 경우(J)
                        addr = data.jibunAddress;
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    var frmJoin = document.forms.frmJoinC;
                    frmJoin.postcode.value = data.zonecode;
                    frmJoin.address1.value = addr;
                    frmJoin.address2.focus();
                    /* document.getElementById('sample2_postcode').value =
                     document.getElementById("sample2_address").value = addr;
                     // 커서를 상세주소 필드로 이동한다.
                     document.getElementById("sample2_detailAddress").focus();*/

                    // iframe을 넣은 element를 안보이게 한다.
                    // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                    element_layer.style.display = 'none';
                },
                width : '100%',
                height : '100%',
                maxSuggestItems : 5
            }).embed(element_layer);

            element_layer.style.display = 'block';

            initLayerPosition();
        }

        function initLayerPosition(){
            var width = 300;
            var height = 400;
            var borderWidth = 5;

            element_layer.style.width = width + 'px';
            element_layer.style.height = height + 'px';
            element_layer.style.border = borderWidth + 'px solid';
            element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
            element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
        }
        //사업자등록증 업로드
        var myDropzone = new Dropzone("#dropzoneC", {
            url: "/file/post",
            maxFiles: 1,
            uploadMultiple: false,
            maxFilesize: 10,
            clickable: '.btn_upload',
            dictRemoveFile: '',
            addRemoveLinks: true,
            acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
            dictFileSizeUnits: 'mb',
            dictDefaultMessage: '',
            init: function () {
                this.on("maxfilesexceeded",function(file) {
                    this.removeFile(file);
                });
                this.on("addedfile",function (file) {
                    if(this.files.length > this.options.maxFiles) {
                        alert("업로드는 1장만 할 수 있습니다.");
                        this.removeFile(file);
                    }
                });
            }
        });
        Dropzone.autoDiscover = false;



        /*mypage menu*/
        function scrollLeft() {
            var focusMenu = $(".my_gnb li.focus").offset();
            $(".my_gnb ul").animate({
                scrollLeft: focusMenu.left
            },300);
        }
        scrollLeft();


        //시군구 선택
        var area0 = ["시/도 선택","서울시","인천시","대전시","광주시","대구시","울산시","부산시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주도"];
        var area1 = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
        var area2 = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
        var area3 = ["대덕구","동구","서구","유성구","중구"];
        var area4 = ["광산구","남구","동구", "북구","서구"];
        var area5 = ["남구","달서구","동구","북구","서구","수성구","중구","달성군"];
        var area6 = ["남구","동구","북구","중구","울주군"];
        var area7 = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
        var area8 = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
        var area9 = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
        var area10 = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
        var area11 = ["계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
        var area12 = ["군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
        var area13 = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
        var area14 = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
        var area15 = ["거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
        var area16 = ["서귀포시","제주시","남제주군","북제주군"];


        $("select[name=localSelect1]").each(function () {
            $selsido = $(this);
            $.each(eval(area0), function() {
                $selsido.append("<option value='"+this+"'>"+this+"</option>");
            });
            $selsido.next().append("<option value=''>구/군 선택</option>");
        });
        $("select[name=localSelect1]").change(function() {
            var area = "area"+$("option",$(this)).index($("option:selected",$(this))); // 선택지역의 구군 Array
            var $gugun = $(this).next(); // 선택영역 군구 객체
            $("option",$gugun).remove(); // 구군 초기화

            if(area == "area0")
                $gugun.append("<option value=''>구/군 선택</option>");
            else {
                $gugun.append("<option value=''>구/군 선택</option>");
                $.each(eval(area), function() {
                    $gugun.append("<option value='"+this+"'>"+this+"</option>");
                });
            }

        });
        $("select[name=localSelect2]").change(function () {
            var local1 = $("select[name=localSelect1]").val();
            var local2 = $("select[name=localSelect2]").val();
            $(".local_possible").show();
            $(".local_possible").append("<p class='local_item'>"+local1 +" "+ local2 +" <img src='/assets/images/apply/remove_img.png' alt=''></p>");
            $(".local_item img").click(function () {
                $(this).parents(".local_item").remove();
            });
        });
    </script>
<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>