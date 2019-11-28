<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type2.php');?>
    <div class="pageWrap" id="mypageAlarmWrap">
        <div class="mypage_wra">
            <div class="my_profile_area">
                <div class="my_profile_top">
                    <div class="info_pf_box">
                        <p class="photo_pf">
                            <img src="/assets/images/temp/temp_a1.jpg" alt="">
                        </p>
                        <span class="name_pf">개인아이디</span>
                    </div>
                    <div class="my_gnb my_gnb_mb">
                        <ul class="clearfix">
                            <li class="new"><a href="/sub/mypage/mypage_estimate.php"><span>견적내역</span></a></li>
                            <li><a href="/sub/mypage/mypage_save_list.php"><span>+ SAVE</span></a></li>
                            <li class="focus"><a href="/sub/mypage/mypage_edit_info.php"><span>회원정보 수정</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="info_edit_area">
                <form name="frmEditP">
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
                            <p class="lb">주소</p>
                            <div class="frm_txt address">
                                <input type="text" class="textbox_gray box_lgth2" name="postcode">
                                <a onclick="postcodeC()" class="btn_address">주소찾기</a>
                                <input type="text" class="textbox_gray box_lgth3" name="address1">
                                <input type="text" class="textbox_gray box_lgth3" name="address2">
                            </div>
                        </div>
                        <div class="item_join">
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
                            <div class="detail_join_option">
                                <p class="lb lb_big">관심지역 설정</p>
                                <div class="frm_txt">
                                    <select class="selectbox_gray" name="personalWish1">
                                        <option>1지망</option>
                                    </select> &nbsp;
                                    <select class="selectbox_gray" name="personalWish2">
                                        <option>2지망</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="agree_join">
                            <div class="item_agree_join first">
                                <input type="checkbox" class="chkbox" id="agreePAll">
                                <label for="agreePAll"><b>아래 사항에 모두 동의합니다</b></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agreeP1">
                                <label for="agreeP1">(필수) <span>개인정보수집 및 이용내용</span></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agreeP2">
                                <label for="agreeP2">(필수) <span>개인정보 제3자 제공</span></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agreeP3">
                                <label for="agreeP3">(선택) <span>인테리어 정보 및 이벤트 알림 수신</span></label>
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
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script>
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


        /*mypage menu*/
        function scrollLeft() {
            var focusMenu = $(".my_gnb li.focus").offset();
            $(".my_gnb ul").animate({
                scrollLeft: focusMenu.left
            },300);
        }
        scrollLeft();
    </script>
<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>