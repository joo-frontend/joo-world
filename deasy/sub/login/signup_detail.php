<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="signup_wra ">
    <div class="signup_detail_section">
    <h1 class="type_member f_mont">Client</h1>
    <div class="join_frm_area">
        <form>
            <div class="edit_profile_box">
                <div class="info_type"><p>기본 정보</p></div>
                <div class="edit_my_section">
                    <div class="col_45">
                        <div class="item_my">
                            <span class="lb">성명(상호명)</span>
                            <div class="my_content_edit">
                                <input type="text" class="textbox_mbr" name="joinId">
                            </div>
                        </div>
                        <div class="item_my">
                            <span class="lb">아이디</span>
                            <div class="my_content_edit">
                                <input type="text" class="textbox_mbr" name="joinId">
                                <a href="#" class="chk_repeat_id">중복확인</a>
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
                                <p class="desc">(DK상품 구매 시 인쇄물 수령지 주소를 입력하세요)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col_55">
                        <div class="item_my item_my_tel">
                            <span class="lb">휴대전화 인증</span>
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
                                <a href="#" class="auth_my">본인인증</a>
                            </div>
                        </div>
                        <div class="item_my">
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
                        </div>
                        <div class="item_my">
                            <span class="lb">이메일</span>
                            <div class="my_content_edit">
                                <div class="email">
                                    <div class="email_m_box">
                                    <input type="email" class="textbox_mbr" name="joinMailID">
                                    <span>@</span>
                                    <input type="text" class="textbox_mbr" id="mail_type" name="joinMail">
                                    </div>
                                    <select name="selectbox_mail" onchange="selectMail()" id="selectMail"
                                            class="selectbox_mbr">
                                        <option>직접선택</option>
                                        <option>naver.com</option>
                                        <option>gmail.com</option>
                                    </select>
                                </div>
                                <div class="sns_agree">
                                    <a href="#" class="confirm_mail">중복확인</a>
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
            <div class="edit_profile_box">
                <div class="info_type"><p>사업자 정보</p></div>
                <div class="edit_my_section">
                    <div class="item_my">
                        <span class="lb">사업자 등록번호</span>
                        <div class="my_content_edit">
                            <input type="text" class="textbox_mbr" name="joinLicense">
                        </div>
                    </div>
                    <div class="item_my">
                        <span class="lb">대표자명</span>
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
                        <span class="lb lb_none">이용약관</span>
                        <div class="my_content_edit">
                            <div class="join_term">
                                <p class="term_link"><a href="#">회원가입 및 이용약관 &gt;</a></p>
                                <span><input type="checkbox" name="chk_term1" id="chk_term1" class="chk_orange" checked>
                                    <label for="chk_term1" class="chkShape"></label>
                                    <label for="chk_term1" class="chkTxt">동의함</label></span>
                            </div>
                            <div class="join_term">
                                <p class="term_link"><a href="#">개인정보 처리방침 &gt;</a></p>
                                <span><input type="checkbox" name="chk_term1" id="chk_term1" class="chk_orange" checked>
                                    <label for="chk_term1" class="chkShape"></label>
                                    <label for="chk_term1" class="chkTxt">동의함</label></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="btn_group">
                <button>가입완료</button>
            </div>
        </form>
    </div>
    </div>
</div>
<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<script>
    function selectMail() {
        var target = document.getElementById("selectMail");
        var choiceMail = target.options[target.selectedIndex].text;
        document.getElementById("mail_type").value = choiceMail;
    }
    function edit_myPost() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = ''; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수

                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    fullAddr = data.roadAddress;

                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    fullAddr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postCode').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('address1').value = fullAddr;

                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('address2').focus();
            }
        }).open();
    }
</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
