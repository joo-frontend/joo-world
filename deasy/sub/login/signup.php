<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="signup_wra">
    <h1 class="title_join signup_m">사전예약 회원가입</h1>
    <div class="join_top_txt">
        <p class="title f_mont">Sign Up</p>
        <p class="msg"><span>회원가입을</span><br>시작합니다</p>
        <p class="etc">클라이언트와 파트너,<br>
            당신은 어느쪽인가요?</p>
    </div>
    <form>
        <div class="type_join_area clearfix">
            <input type="hidden" class="type_join" value="freelancer"><!--value값 (freelancer/agency)-->
            <div class="type_join_box freelancer active">
                <p class="type f_mont">Freelancer</p>
                <p class="name">프리랜서</p>
                <p class="desc">프로젝트 참여를 통해<br>
                    수익창출과 PR의 기회를 함께 얻으세요!</p>
            </div>
            <div class="type_join_box agency">
                <p class="type f_mont">Agency</p>
                <p class="name">에이전시</p>
                <p class="desc">프로젝트 참여를 통해<br>수익창출과 PR의 기회를 함께 얻으세요!</p>
            </div>
        </div>
        <div class="join_frm_area signup_m">
            <div class="edit_profile_box">
                <div class="info_type"><p>기본 정보</p></div>
                <div class="edit_my_section">
                    <div class="col_45">
                        <div class="item_my">
                            <span class="lb">성명</span>
                            <div class="my_content_edit">
                                <input type="text" class="textbox_mbr" name="joinId">
                            </div>
                        </div>
                        <div class="item_my">
                            <span class="lb">아이디</span>
                            <div class="my_content_edit">
                                <input type="text" class="textbox_mbr" name="joinId">
                                <!--<a href="#" class="chk_repeat_id">중복확인</a>-->
                            </div>
                        </div>

                        <div class="item_my">
                            <span class="lb">비밀번호</span>
                            <div class="my_content_edit">
                                <input type="password" class="textbox_mbr" name="joinPw1">
                            </div>
                        </div>
                        <div class="item_my">
                            <span class="lb">비밀번호 확인</span>
                            <div class="my_content_edit">
                                <input type="password" class="textbox_mbr" name="joinPw2">
                            </div>
                        </div>
                        <div class="item_my">
                            <span class="lb">주소</span>
                            <div class="my_content_edit">
                                <div class="address">
                                    <input type="text" class="textbox_mbr textbox_mbr_sm" id="postCode">
                                    <button type="button" onclick="edit_myPost()" class="search_address" value="주소검색">
                                        주소검색
                                    </button>
                                </div>
                                <div class="address">
                                    <input type="text" class="textbox_mbr" id="address1" name="joinAddress1">
                                </div>
                                <div class="address">
                                    <input type="text" class="textbox_mbr" id="address2" name="joinAddress2">
                                </div>
                                <!--<p class="desc">(DK상품 구매 시 인쇄물 수령지 주소를 입력하세요)</p>-->
                            </div>
                        </div>
                    </div>
                    <div class="col_55">
                        <div class="item_my item_my_tel">
                            <span class="lb">연락처</span>
                            <div class="my_content_edit">
                                <div class="tel">
                                    <select name="joinTel1" class="selectbox_mbr">
                                        <option>010</option>
                                    </select>
                                    <span>ㅡ</span>
                                    <input type="text" class="textbox_mbr textbox_mbr_sm" name="joinTel2">
                                    <span>ㅡ</span>
                                    <input type="text" class="textbox_mbr textbox_mbr_sm" name="joinTel3">
                                </div>
                                <!--<a href="#" class="auth_my">본인인증</a>-->
                            </div>
                        </div>
                        <!--<div class="item_my">
                            <span class="lb">인증번호 입력</span>
                            <div class="my_content_edit">
                                <input type="text" class="textbox_mbr">
                                <div class="sns_agree">
                                    <span class="title">SNS 수신동의 여부</span>
                                    <div class="chk_agree_box">
                                    <span><input type="radio" name="chk_sns" id="chk_sns1" class="chk_orange" checked>
                                    <label for="chk_sns1" class="chkShape"></label>
                                    <label for="chk_sns1" class="chkTxt">수신함</label></span>
                                        <span><input type="radio" name="chk_sns" id="chk_sns2" class="chk_orange">
                                    <label for="chk_sns2" class="chkShape"></label>
                                    <label for="chk_sns2" class="chkTxt">수신하지 않음</label></span>
                                    </div>
                                    <p class="desc">이벤트/홍보성 메시지 발송에 대한 동의여부입니다</p>
                                </div>
                            </div>
                        </div>-->
                        <div class="item_my">
                            <span class="lb">이메일</span>
                            <div class="my_content_edit">
                                <div class="email">
                                    <input type="email" class="textbox_mbr" name="joinMailID">
                                    <span>@</span>
                                    <input type="text" class="textbox_mbr" id="mail_type" name="joinMail">
                                    <select name="selectbox_mail" onchange="selectMail()" id="selectMail"
                                            class="selectbox_mbr">
                                        <option>직접선택</option>
                                        <option>naver.com</option>
                                        <option>gmail.com</option>
                                    </select>
                                </div>
                                <div class="sns_agree">
                                    <!--<a href="#" class="confirm_mail">중복확인</a>-->
                                    <span class="title">메일 수신동의 여부</span>
                                    <div class="chk_agree_box">
                                    <span><input type="radio" name="chk_mail" id="chk_mail1" class="chk_orange" checked>
                                    <label for="chk_mail1" class="chkShape"></label>
                                    <label for="chk_mail1" class="chkTxt">수신함</label></span>
                                        <span><input type="radio" name="chk_mail" id="chk_mail2" class="chk_orange">
                                    <label for="chk_mail2" class="chkShape"></label>
                                    <label for="chk_mail2" class="chkTxt">수신하지 않음</label></span>
                                    </div>
                                    <p class="desc">이벤트/홍보성 이메일 발송에 대한 동의여부입니다</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit_profile_box agency_field">
                <div class="info_type"><p>사업자 정보</p></div>
                <div class="edit_my_section">
                    <div class="item_my">
                        <span class="lb">사업자명</span>
                        <div class="my_content_edit">
                            <input type="text" class="textbox_mbr" name="joinLicense">
                        </div>
                    </div>
                    <div class="item_my">
                        <span class="lb">담당자명</span>
                        <div class="my_content_edit">
                            <input type="text" class="textbox_mbr" name="joinName">
                        </div>
                    </div>
                    <div class="item_my">
                        <span class="lb">담당자 연락처</span>
                        <div class="my_content_edit">
                            <div class="my_content_edit">
                                <div class="tel">
                                    <select name="joinTel1P" class="selectbox_mbr">
                                        <option>010</option>
                                    </select>
                                    <span>ㅡ</span>
                                    <input type="text" class="textbox_mbr textbox_mbr_sm" name="joinTel2P">
                                    <span>ㅡ</span>
                                    <input type="text" class="textbox_mbr textbox_mbr_sm" name="joinTel3P">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit_profile_box">
                <div class="info_type"><p>이용약관</p></div>
                <div class="edit_my_section">
                    <div class="item_my">
                        <span class="lb">이용약관</span>
                        <div class="my_content_edit">
                            <div class="join_term">
                                <p class="term_link"><a href="#" target="_blank">회원가입 및 이용약관 &gt;</a></p>
                                <span><input type="checkbox" name="chk_termjoin1" id="chk_termjoin1" class="chk_orange" checked>
                                    <label for="chk_termjoin1" class="chkShape"></label>
                                    <label for="chk_termjoin1" class="chkTxt">동의함</label></span>
                            </div>
                            <div class="join_term">
                                <p class="term_link"><a href="#" target="_blank">개인정보 처리방침 &gt;</a></p>
                                <span><input type="checkbox" name="chk_termjoin2" id="chk_termjoin2" class="chk_orange" checked>
                                    <label for="chk_termjoin2" class="chkShape"></label>
                                    <label for="chk_termjoin2" class="chkTxt">동의함</label></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="btn_group">
                <button>가입완료</button>
            </div>

        </div>
    </form>
</div>
<div id="layerPost" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
    <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
</div>
<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<script>
    //signup type
    $(".type_join_box").click(function () {
		var win_size = $(window).width();
        $(".type_join_box").removeClass("active");
        $(this).addClass("active");
		if(win_size <= 1024){
			$(".type_join_area").addClass("active");
			$(".join_frm_area").addClass("active");
			$(".join_top_txt").addClass("active");
		}
        if($(this).hasClass("freelancer") == true){
            $(".type_join").val("freelancer");
            $(".edit_profile_box.agency_field").hide();
        }else if($(this).hasClass("agency") == true){
            $(".type_join").val("agency");
            $(".edit_profile_box.agency_field").show();			
        }
    });


    //우편번호
    var element_layer = document.getElementById('layerPost');

    function closeDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element_layer.style.display = 'none';
    }
    function edit_myPost() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postCode').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('address1').value = addr;

                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('address2').focus();

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_layer.style.display = 'none';
            },
            width : '100%',
            height : '100%',
            maxSuggestItems : 5
        }).embed(element_layer);

        // iframe을 넣은 element를 보이게 한다.
        element_layer.style.display = 'block';

        // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
        initLayerPosition();
    }

    // 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
    // resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
    // 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
    function initLayerPosition(){
        //var width = 300; //우편번호서비스가 들어갈 element의 width
        var height = 400; //우편번호서비스가 들어갈 element의 height
        var borderWidth = 1; //샘플에서 사용하는 border의 두께

        // 위에서 선언한 값들을 실제 element에 넣는다.
        element_layer.style.width = '100%';
        element_layer.style.height = '50vh';
        element_layer.style.border = borderWidth + 'px solid #e2e2e2';
        // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
        element_layer.style.left = '50%';
        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
    }
</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
