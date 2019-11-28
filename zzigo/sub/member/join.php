<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
<div class="join_wra">
    <div class="join_area">
        <div class="top_title_join">
            <p class="title">회원가입</p>
            <div class="step_join">
                <span class="step focus">01 약관동의</span>
                <span class="icon icon1"><img src="/assets/images/join/join_prog_on.png" alt=""></span>
                <span class="step step2">02 정보입력</span>
                <span class="icon icon2"><img src="/assets/images/join/join_prog_off.png" alt=""></span>
                <span class="step">03 가입완료</span>
            </div>
        </div>
        <div class="step_join_box step1 active">
            <form name="joinStepFrm">
            <p class="title_join_term">약관동의</p>
            <p class="all_agree">
                <input type="checkbox" class="chkbox" id="JoinTermAll" name="JoinTermAll">
                <label for="JoinTermAll" class="chkShape"></label>
                <label for="JoinTermAll" class="chkTxt">찍오(ZZIGO) 의 모든 약관을 확인하고 전체 동의합니다.
                    <span class="agree_span_area">(전체동의, 선택항목도 포함됩니다)</span></label>
            </p>
            <div class="agree_join_term required">
                <input type="checkbox" class="chkbox" id="JoinTerm1" name="JoinTerm1">
                <label for="JoinTerm1" class="chkShape"></label>
                <label for="JoinTerm1" class="chkTxt"><span class="required_term">(필수)</span> 이용약관</label>
                <div class="detail_term_join"></div>
            </div>
            <div class="agree_join_term required">
                <input type="checkbox" class="chkbox" id="JoinTerm2" name="JoinTerm2">
                <label for="JoinTerm2" class="chkShape"></label>
                <label for="JoinTerm2" class="chkTxt"><span class="required_term">(필수)</span> 개인정보 수집 및 이용</label>
                <div class="detail_term_join"></div>
            </div>
<!--            <div class="certify_section">-->
<!--                <p class="title">본인 인증방법 선택</p>-->
<!--                <input type="radio" class="radiobox" id="joinCertify" name="joinCertify">-->
<!--                <label for="joinCertify" class="radioShape"></label>-->
<!--                <label for="joinCertify" class="radioTxt">휴대폰 본인인증</label>-->
<!--            </div>-->
            <div class="btn_join_group">
                <button type="button" class="btn">이전단계</button>
                <button type="button" onclick="agreeFrm()" class="btn btn_black">다음단계</button>
            </div>
            </form>
        </div>
        <div class="step_join_box step2">
            <form name="joinInfoFrm" action="join_complete.php">
                <div class="info_join_section">
                    <div class="title_join_info">
                        <p class="title">기본정보</p>
                        <p class="desc">* 표시는 반드시 입력하셔야 하는 항목입니다</p>
                    </div>
                    <div class="content_info">
                        <div class="item_info_join required_info">
                            <div class="lb"><span>아이디(이메일)</span></div>
                            <div class="info">
                                <input type="text" class="textbox_join textbox_join_lg" name="joinID" required>
                                <span class="send_email">중복확인</span>
                            </div>
                        </div>
                        <div class="item_info_join required_info">
                            <div class="lb"><span>비밀번호</span></div>
                            <div class="info">
                                <input type="password" class="textbox_join" name="joinPW" required>
                                <span class="pw_security">안전하지 않음</span>
                            </div>
                        </div>
                        <div class="item_info_join required_info">
                            <div class="lb"><span>비밀번호 확인</span></div>
                            <div class="info">
                                <input type="password" class="textbox_join" name="joinPWChk" required>
                                <span class="pw_security">일치하지 않음</span>
                            </div>
                        </div>
                        <div class="item_info_join required_info">
                            <div class="lb"><span>이름</span></div>
                            <div class="info">
                                <input type="text" class="textbox_join" name="joinName" required>
                            </div>
                        </div>
                        <div class="item_info_join required_info">
                            <div class="lb lb_md"><span>휴대폰번호</span></div>
                            <div class="info">
                                <input type="number" class="textbox_join" placeholder="- 없이 입력하세요" maxlength="11" name="joinPhone" required>
                                <p class="sms_send">
                                    <input type="checkbox" class="chkbox chkbox_sm" name="chkSms" id="chkSms">
                                    <label for="chkSms" class="chkShape"></label>
                                    <label for="chkSms" class="chkTxt">정보/이벤트 SMS수신에 동의합니다.</label>
                                </p>
                            </div>
                        </div>
                        <p class="sms_send m_sms_send">
                            <input type="checkbox" class="chkbox chkbox_sm" name="chkSms" id="chkSmsM">
                            <label for="chkSmsM" class="chkShape"></label>
                            <label for="chkSmsM" class="chkTxt">정보/이벤트 SMS수신에 동의합니다.</label>
                        </p>
                        <div class="item_info_join">
                            <div class="lb"><span>전화번호</span></div>
                            <div class="info">
                                <input type="number" class="textbox_join" placeholder="- 없이 입력하세요" name="joinTel">
                            </div>
                        </div>
                        <div class="item_info_join required_info">
                            <div class="lb lb_lg"><span>주소</span></div>
                            <div class="info info_address">
                                <p><input type="text" class="textbox_join" name="joinPostCode"><span class="btn_postcode" onclick="postCode()" required>주소검색</span></p>
                                <p><input type="text" class="textbox_join" name="joinAddress1" required></p>
                                <p><input type="text" class="textbox_join textbox_join_lg" name="joinAddress2" required></p>
                            </div>
                        </div>
                    </div>
                </div>
<!--                <div class="info_join_section service_setting">-->
<!--                    <div class="title_join_info">-->
<!--                        <p class="title">정기배송 서비스 설정</p>-->
<!--                        <p class="subtitle">정기배송 서비스로 좀 더 편리하게 찍오를 즐겨보세요.</p>-->
<!--                    </div>-->
<!--                    <div class="content_info">-->
<!---->
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>포토북 크기</span></div>-->
<!--                            <div class="info info_line">-->
<!---->
<!--                                <input id="photobook1" type="radio" name="photobook" class="radio_style">-->
<!--                                <label for="photobook1" class="radio">(소)13x19</label>-->
<!---->
<!--                                <input id="photobook2" type="radio" name="photobook" class="radio_style">-->
<!--                                <label for="photobook2" class="radio">(중)14.3x20</label>-->
<!---->
<!--                                <input id="photobook3" type="radio" name="photobook" class="radio_style">-->
<!--                                <label for="photobook3" class="radio">(대)15.3x22</label>-->
<!---->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>사진매수</span></div>-->
<!--                            <div class="info info_line">-->
<!---->
<!--                                <input id="photoAmount1" type="radio" name="photo_amount" class="radio_style">-->
<!--                                <label for="photoAmount1" class="radio">30매</label>-->
<!---->
<!--                                <input id="photoAmount2" type="radio" name="photo_amount" class="radio_style">-->
<!--                                <label for="photoAmount2" class="radio">50매</label>-->
<!---->
<!--                                <input id="photoAmount3" type="radio" name="photo_amount" class="radio_style">-->
<!--                                <label for="photoAmount3" class="radio">100매</label>-->
<!---->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>주소지</span></div>-->
<!--                            <div class="info info_line">-->
<!---->
<!--                                <input id="addr1" type="radio" name="addr" class="radio_style">-->
<!--                                <label for="addr1" class="radio">본인</label>-->
<!---->
<!--                                <input id="addr2" type="radio" name="addr" class="radio_style">-->
<!--                                <label for="addr2" class="radio">선물</label>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>정기 결제기간</span></div>-->
<!--                            <div class="info info_line">-->
<!---->
<!--                                <input id="month1" type="radio" name="monthly" class="radio_style">-->
<!--                                <label for="month1" class="radio">3개월(10%할인)</label>-->
<!---->
<!--                                <input id="month2" type="radio" name="monthly" class="radio_style">-->
<!--                                <label for="month2" class="radio">6개월(20%할인)</label>-->
<!---->
<!--                                <input id="month3" type="radio" name="monthly" class="radio_style">-->
<!--                                <label for="month3" class="radio">1년(30%할인)</label>-->
<!---->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item_info_join m_like_design">-->
<!--                            <div class="lb"><span>선호하는<br/>디자인</span></div>-->
<!--                            <div class="info info_line">-->
<!--                                <div class="radio_line">-->
<!--                                    <input id="modern" type="radio" name="modern" class="radio_style">-->
<!--                                    <label for="modern" class="radio">모던(Modern)</label>-->
<!--                                </div>-->
<!--                                <div class="radio_line">-->
<!--                                    <input id="lovely" type="radio" name="lovely" class="radio_style">-->
<!--                                    <label for="lovely" class="radio">러블리(Lovely)</label>-->
<!--                                </div>-->
<!--                                <div class="radio_line">-->
<!--                                    <input id="warm" type="radio" name="warm" class="radio_style">-->
<!--                                    <label for="warm" class="radio">따뜻(Warm)</label>-->
<!--                                </div>-->
<!--                                <div class="radio_line">-->
<!--                                    <input id="natural" type="radio" name="natural" class="radio_style">-->
<!--                                    <label for="natural" class="radio">자연(Natural)</label>-->
<!--                                </div>-->
<!--                                <div class="radio_line">-->
<!--                                    <input id="lomo" type="radio" name="lomo" class="radio_style">-->
<!--                                    <label for="lomo" class="radio">인물(Lomo)</label>-->
<!--                                </div>-->
<!--                                <div class="radio_line">-->
<!--                                    <input id="monotone" type="radio" name="monotone" class="radio_style">-->
<!--                                    <label for="monotone" class="radio">흑백(Monotone)</label>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!---->
<!--                        <div class="item_info_join like_design">-->
<!--                            <div class="lb"><span>선호하는 디자인</span></div>-->
<!--                            <div class="info info_line">-->
<!--                                <input type="checkbox" class="chkbox chkbox_sm" name="design" id="modern">-->
<!--                                <label for="modern" class="chkShape"></label>-->
<!--                                <label for="modern" class="chkTxt">모던(Modern)</label>-->
<!--                                <input type="checkbox" class="chkbox chkbox_sm" name="design" id="lovely">-->
<!--                                <label for="lovely" class="chkShape"></label>-->
<!--                                <label for="lovely" class="chkTxt">러블리(Lovely)</label>-->
<!--                                <input type="checkbox" class="chkbox chkbox_sm" name="design" id="warm">-->
<!--                                <label for="warm" class="chkShape"></label>-->
<!--                                <label for="warm" class="chkTxt">따뜻(Warm)</label>-->
<!--                                <input type="checkbox" class="chkbox chkbox_sm" name="design" id="natural">-->
<!--                                <label for="natural" class="chkShape"></label>-->
<!--                                <label for="natural" class="chkTxt">자연(Natural)</label>-->
<!--                                <input type="checkbox" class="chkbox chkbox_sm" name="design" id="lomo">-->
<!--                                <label for="lomo" class="chkShape"></label>-->
<!--                                <label for="lomo" class="chkTxt">인물(Lomo)</label>-->
<!--                                <input type="checkbox" class="chkbox chkbox_sm" name="design" id="monotone">-->
<!--                                <label for="monotone" class="chkShape"></label>-->
<!--                                <label for="monotone" class="chkTxt">흑백(Monotone)</label>-->
<!--                            </div>-->
<!--                        </div>-->
<!---->
<!--                        <div class="monthly_service_agree">-->
<!--                            <input type="checkbox" class="chkbox chkbox_sm" name="monthly_service" id="monthlyService">-->
<!--                            <label for="monthlyService" class="chkShape"></label>-->
<!--                            <label for="monthlyService" class="chkTxt">정기배송 서비스를 이용하겠습니다.</label>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->



                <div class="btn_join_group">
                    <button type="button" class="btn">취소</button>
                    <button type="button" onclick="joinEnd()" class="btn btn_black">회원가입</button>
<!--                    <button type="submit" class="hide_submit" ></button>-->
                </div>
            </form>
        </div>
    </div>
</div>
<!--이메일 인증 팝업-->
<!--<div class="pop_side_email">
    <div class="email_send_box">
        <p class="email">abcdefg456@naver.com</p>
        <p class="desc">위 메일로 인증메일이 발송되었습니다.</p>
        <a href="#" class="link_myemail">이메일 인증하러가기</a>
        <p class="resend_box">
            인증 메일을 받지 못하셨나요? <a href="#">메일 재발송</a>
        </p>
        <p class="resend_box">
            이메일을 잘못 입력하셨나요? <a href="#">아매알 번경</a>
        </p>
    </div>
</div>-->
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script>
        function agreeFrm() {
            var requiredItem = $(".agree_join_term.required").length;
            var chkItem = $(".agree_join_term.required .chkbox:checked").length;
            // var certifyItem = document.querySelectorAll('input[name="joinCertify"]:checked').length;
            if(requiredItem !== chkItem){
                alert("필수 항목에 동의해주세요");
            }
            // else if(certifyItem < 1) {
            //     alert("본인 인증방법을 선택해주세요");
            // }
            else {
                $(".step_join_box").removeClass("active");
                $(".step_join_box.step2").addClass("active");
                $(".step_join .step").removeClass("focus");
                $(".step_join .step.step2").addClass("focus");
                $(".step_join .icon.icon1 img").attr("src","/assets/images/join/join_prog_off.png");
                $(".step_join .icon.icon2 img").attr("src","/assets/images/join/join_prog_on.png");
            }
        }

        function joinEnd() {
            var joinform = document.joinInfoFrm;
            if(joinform.joinPW.value !== joinform.joinPWChk.value){
                alert("비밀번호가 일치하지 않습니다");
            }else {
                $(".btn_join_group .hide_submit").trigger("click");
            }
        }

        /*우편번호*/
        function postCode() {
            new daum.Postcode({
                oncomplete: function(data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

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
                    var form = document.joinInfoFrm;
                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    form.joinPostCode.value = data.zonecode;
                    form.joinAddress1.value = addr;
                    form.joinAddress2.focus();
                    //document.getElementById('sample6_postcode').value = data.zonecode;
                    //document.getElementById("sample6_address").value = addr;
                    // 커서를 상세주소 필드로 이동한다.
                    //document.getElementById("sample6_detailAddress").focus();
                }
            }).open();
        }
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>