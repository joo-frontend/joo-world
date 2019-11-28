<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type2.php');?>
    <div class="pageWrap" id="mypageWrap">
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
                            <li ><a href="/sub_partner/mypage/mypage_save_list.php"><span>+ SAVE</span></a></li>
                            <li ><a href="/sub_partner/mypage/mypage_edit_info.php"><span>회사정보 수정</span></a></li>
                            <li class="focus"><a href="/sub_partner/mypage/mypage_premium.php"><span>프리미엄 서비스</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--서비스 미신청-->
            <div class="service_p_before" >
                <div class="my_p_service_area active">
                    <div class="title_p_service">
                        <p>프리미엄 서비스란?</p>
                    </div>
                    <div class="detail_service_box">
                        <div class="item_feature_p">
                        <span class="img_feature">
                            <img src="/assets/images/mypage/feature_icon1.png" alt="">
                        </span>
                            <div class="txt_feature">
                                <p class="title">01 ㅣ 집고 스페셜 견적</p>
                                <p class="desc">허위견적 X, 견적량 UP, 디테일한 견적정보, 기존과는 다른 집고만의 견적을 받아보실 수 있습니다</p>
                            </div>
                        </div>
                        <div class="item_feature_p">
                        <span class="img_feature">
                            <img src="/assets/images/mypage/feature_icon2.png" alt="">
                        </span>
                            <div class="txt_feature">
                                <p class="title">02 ㅣ 본사 코칭 시스템</p>
                                <p class="desc">집고 빅데이터 시스템을 통해 인테리어 회사의 계약률과 매출을 높일 수 있도록<br>
                                    솔루션을 제공해주는 고객 맞춤형 코칭 서비스입니다</p>
                            </div>
                        </div>
                    </div>
                    <div class="apply_service_box">
                        <button type="button" class="apply_link">서비스 신청하기</button>
                    </div>
                </div>
                <div class="my_p_service_area my_p_apply_area">
                    <div class="title_p_service">
                        <p>서비스 신청하기</p>
                    </div>
                    <form name="frmService">
                        <div class="item_join">
                            <p class="lb">업체명</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth4">
                            </div>
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
                            <p class="lb">휴대폰 번호</p>
                            <div class="frm_txt">
                                <input type="text" class="textbox_gray box_lgth4" placeholder="- 없이 숫자만 입력하세요">
                            </div>
                        </div>
                        <div class="item_join">
                            <p class="lb">내용</p>
                            <div class="frm_txt">
                                <textarea class="txtarea"></textarea>
                            </div>
                        </div>
                        <div class="item_join last">
                            <p class="lb">첨부</p>
                            <div class="frm_txt">
                                <div class="filebox">
                                    <input class="textbox_gray box_lgth4" disabled="disabled">
                                    <label class="file_trigger" for="serviceFile">파일찾기</label>
                                    <input type="file" id="serviceFile" class="hidden_file">
                                </div>
                            </div>
                        </div>
                        <div class="apply_service_box">
                            <button type="submit">등록 완료</button>
                        </div>
                    </form>
                </div>
            </div>
            <!--서비스 신청후-->
            <div class="service_p_after" style="display: none;">
                <div class="title_p_service">
                    <p>서비스 신청 내역</p>
                </div>
                <div class="list_p_service">
                    <div class="list_col col1">
                        <p class="lb">[ 신청일 ]</p>
                        <p class="desc">2019. 02. 07</p>
                    </div>
                    <div class="list_col col2">
                        <p class="lb">[ 진행상태 ]</p>
                        <p class="desc">심사중입니다</p>
                        <!--<p class="desc">심사가 완료되었습니다</p>-->
                        <!--<p class="desc">서비스 이용중입니다</p>-->
                    </div>
                    <div class="list_col col3">
                        <p class="lb">[ 1개월 당 결제 금액 ]</p>
                        <p class="desc color_desc">결제금액을 심사중입니다</p>
                        <!--<p class="desc"><span class="price">000,000</span>원</p>-->
                    </div>
                    <div class="list_col col4">
                        <p class="detail_form">신청서 조회</p>
                    </div>
                </div>
                <div class="list_p_service">
                    <div class="list_col col1">
                        <p class="lb">[ 신청일 ]</p>
                        <p class="desc">2019. 02. 07</p>
                    </div>
                    <div class="list_col col2">
                        <p class="lb">[ 진행상태 ]</p>
                        <!--<p class="desc">심사중입니다</p>-->
                        <p class="desc">심사가 완료되었습니다</p>
                        <!--<p class="desc">서비스 이용중입니다</p>-->
                    </div>
                    <div class="list_col col3">
                        <p class="lb">[ 1개월 당 결제 금액 ]</p>
                        <!--<p class="desc color_desc">결제금액을 심사중입니다</p>-->
                        <p class="desc"><span class="price">000,000</span>원</p>
                    </div>
                    <div class="list_col col4">
                        <p class="detail_form detail_form_pay">결제하기</p>
                        <p class="detail_form">신청서 조회</p>
                    </div>
                </div>
                <div class="list_p_service">
                    <div class="list_col col1">
                        <p class="lb">[ 신청일 ]</p>
                        <p class="desc">2019. 02. 07</p>
                    </div>
                    <div class="list_col col2">
                        <p class="lb">[ 진행상태 ]</p>
                        <!--<p class="desc">심사중입니다</p>-->
                        <!--<p class="desc">심사가 완료되었습니다</p>-->
                        <p class="desc">서비스 이용중입니다</p>
                    </div>
                    <div class="list_col col3">
                        <p class="lb">[ 1개월 당 결제 금액 ]</p>
                        <!--<p class="desc color_desc">결제금액을 심사중입니다</p>-->
                        <p class="desc"><span class="price">000,000</span>원</p>
                    </div>
                    <div class="list_col col4">
                        <p class="detail_form detail_form_extend">서비스 연장 신청</p>
                        <p class="detail_form">신청서 조회</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!--팝업-->
    <div class="popup popup_pay">
        <div class="pop">
            <p class="close_pop"><img src="/assets/images/common/close_1.png" alt=""></p>
            <div class="pop_head">
                <p class="title_pop">서비스 결제 진행</p>
            </div>
            <div class="pop_body">
                <div class="detail_estm">
                    <p class="lb">서비스명</p>
                    <div class="txtbox">
                        <p class="txt">프리미엄 서비스</p>
                    </div>
                </div>
                <div class="detail_estm">
                    <p class="lb lb_middle">이용기간</p>
                    <div class="txtbox">
                        <select class="selectbox_gray">
                            <option>1개월</option>
                        </select>
                    </div>
                </div>
                <div class="detail_estm">
                    <p class="lb">결제수단</p>
                    <div class="txtbox">
                        <span class="radiobtn_box">
                            <input type="radio" class="radiobox" id="methodPay1" name="methodPay">
                            <label for="methodPay1">신용카드</label>
                        </span>
                        <span class="radiobtn_box">
                            <input type="radio" class="radiobox" id="methodPay2" name="methodPay">
                            <label for="methodPay2">무통장 입금</label>
                        </span>
                    </div>
                </div>
                <div class="detail_estm last">
                    <p class="lb">결제금액</p>
                    <div class="txtbox">
                        <p class="txt"><span class="price">000,000</span>원</p>
                    </div>
                </div>
                <div class="btn_pay">
                    <button>결제하기</button>
                </div>
            </div>
        </div>
    </div>
    <div class="popup popup_extend">
        <div class="pop">
            <p class="close_pop"><img src="/assets/images/common/close_1.png" alt=""></p>
            <div class="pop_head">
                <p class="title_pop">서비스 연창 신청</p>
            </div>
            <div class="pop_body">
                <div class="detail_estm">
                    <p class="lb">서비스명</p>
                    <div class="txtbox">
                        <p class="txt">프리미엄 서비스</p>
                    </div>
                </div>
                <div class="detail_estm">
                    <p class="lb lb_middle">이용기간</p>
                    <div class="txtbox">
                        <select class="selectbox_gray">
                            <option>1개월</option>
                        </select>
                    </div>
                </div>
                <div class="detail_estm">
                    <p class="lb">결제수단</p>
                    <div class="txtbox">
                        <span class="radiobtn_box">
                            <input type="radio" class="radiobox" id="methodPay1" name="methodPay">
                            <label for="methodPay1">신용카드</label>
                        </span>
                        <span class="radiobtn_box">
                            <input type="radio" class="radiobox" id="methodPay2" name="methodPay">
                            <label for="methodPay2">무통장 입금</label>
                        </span>
                    </div>
                </div>
                <div class="detail_estm last">
                    <p class="lb">결제금액</p>
                    <div class="txtbox">
                        <p class="txt"><span class="price">000,000</span>원</p>
                    </div>
                </div>
                <div class="btn_pay">
                    <button>결제하기</button>
                </div>
            </div>
        </div>
    </div>

    <!-- iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요 -->
    <div id="layer_address" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
    </div>
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script>
        //팝업
        $(".detail_form_pay").click(function () {
            $(".popup_pay").show();
            $(".popup_pay .close_pop").click(function () {
                $(".popup_pay").hide();
            });
        });
        $(".detail_form_extend").click(function () {
            $(".popup_extend").show();
            $(".popup_extend .close_pop").click(function () {
                $(".popup_extend").hide();
            });
        });


        //서비스등록 
        $(".apply_service_box .apply_link").click(function () {
            $(".my_p_service_area").removeClass("active");
            $(".my_p_apply_area").addClass("active");
        });
        
        //file input custom
        $(document).ready(function(){
            var fileTarget = $('.filebox .hidden_file');

            fileTarget.on('change', function(){
                if(window.FileReader){
                    var filename = $(this)[0].files[0].name;
                } else {
                    var filename = $(this).val().split('/').pop().split('\\').pop();
                }

                $(this).siblings('.textbox_gray').val(filename);
            });
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