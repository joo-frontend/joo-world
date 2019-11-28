<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$thanksgoods_market = new thanksgoods_market();
$target = $_POST['target'];
if(empty($target)){
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}
$data = $thanksgoods_market->get_item_detail($target);
$option = $_POST['total_option'];
$price = $_POST['total_price'];
$qty = $_POST['qty'];
?>

<div class="order_wra">
    <div class="my_menu">
        <p class="title">구매하기</p>
    </div>

    <div class="order_section">
        <div class="order_info_area">
            <div class="order_pd_info">
                <p class="info_title">주문 정보</p>
                <p class="imgBox" style="background-image:url(<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$target.'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }?>);background-size:cover; background-position:center;"><img src="/assets/images/mypage/product1.png" alt="" style="opacity:0;"></p></dt>

                <div class="infoBox">
                    <div class="pd_info">
                        <p class="name"><?=$data['name']?></p>
                        <p class="detail"><span>수량</span><?=$qty?></p>
                        <p class="detail"><span>옵션</span><?=$option?></p>
                    </div>
                    <div class="pd_info">
                        <p class="detail"><span>합계 포인트</span>5,000 Point</p>
                        <p class="detail"><span>배송비</span>0원</p>
                    </div>
                    <div class="pd_total">
                        <p class="total">총 구매 포인트 <span><?=number_format($price)?></span></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="order_detail_section">
        <form>
        <div class="order_info_area">
            <div class="info_form_box">
                <p class="type_info">주문자 정보</p>
                <div class="signup_item clearfix">
                    <p class="lb">주문자명</p>
                    <div class="form_signup">
                        <input type="text" class="textbox_member" name="orderName">
                    </div>
                </div>
                <div class="signup_item clearfix">
                    <p class="lb">연락처</p>
                    <div class="form_signup form_flex">
                        <input type="tel" class="textbox_member textbox_xs" name="orderTel1">
                        <p class="bar">ㅡ</p>
                        <input type="tel" class="textbox_member textbox_xs" name="orderTel2">
                        <p class="bar">ㅡ</p>
                        <input type="tel" class="textbox_member textbox_xs" name="orderTel3">
                    </div>
                </div>
                <div class="signup_item clearfix">
                    <p class="lb">주문자명</p>
                    <div class="form_signup">
                        <input type="email" class="textbox_member" name="orderEmail">
                    </div>
                </div>
            </div>
            <div class="info_form_box last">
                <div class="signup_item clearfix">
                    <div class="type_info_2"><p>배송 정보</p>
                        <p class="lb lb_show_m">배송지</p>
                        <div class="form_signup">
                            <div class="group_chk">
                                <input type="radio" id="orderDelivery1" class="chk_blue" name="signupGender" checked="">
                                <label for="orderDelivery1" class="chk_shape"></label>
                                <label for="orderDelivery1" class="chk_txt">기본배송지</label>
                            </div>
                            <div class="group_chk">
                                <input type="radio" id="orderDelivery2" class="chk_blue" name="signupGender">
                                <label for="orderDelivery2" class="chk_shape"></label>
                                <label for="orderDelivery2" class="chk_txt">최근배송지</label>
                            </div>
                            <div class="group_chk last">
                                <input type="radio" id="orderDelivery3" class="chk_blue" name="signupGender">
                                <label for="orderDelivery3" class="chk_shape"></label>
                                <label for="orderDelivery3" class="chk_txt">신규배송지</label>
                            </div>

                        </div>
                    </div>
                    <!--<p class="lb f_blue">배송 정보</p>-->

                </div>
                <div class="signup_item clearfix">
                    <p class="lb lb_hidden_m lb_m">배송지</p>
                    <div class="form_signup form_address">
                        <input type="text" class="textbox_member textbox_sm" name="orderPost" id="addressPost">
                        <button type="button" onclick="postCode()" class="find_address">주소찾기</button>
                        <input type="text" class="textbox_member " name="orderAddress1" id="addressRest1">
                        <input type="text" class="textbox_member " name="orderAddress2" id="addressRest2">
                    </div>
                </div>
                <div class="signup_item clearfix">
                    <p class="same_person">
                        <input type="checkbox" id="chkSamePerson" class="chk_blue" name="chkSamePerson" checked>
                        <label for="chkSamePerson" class="chk_shape"></label>
                        <label for="chkSamePerson" class="chk_txt">주문자와 동일</label>
                    </p>
                    <p class="lb">받으실 분</p>
                    <div class="form_signup">
                        <input type="text" class="textbox_member" name="orderPerson">
                    </div>
                </div>
                <div class="signup_item clearfix">
                    <p class="lb">연락처</p>
                    <div class="form_signup form_flex">
                        <input type="tel" class="textbox_member textbox_xs" name="orderPersonTel1">
                        <p class="bar">ㅡ</p>
                        <input type="tel" class="textbox_member textbox_xs" name="orderPersonTel1">
                        <p class="bar">ㅡ</p>
                        <input type="tel" class="textbox_member textbox_xs" name="orderPersonTel1">
                    </div>
                </div>
                <div class="signup_item clearfix">
                    <p class="lb lb_m">요청사항</p>
                    <div class="form_signup">
                        <textarea name="orderAsk"></textarea>
                    </div>
                </div>
            </div>
        </div>
            <div class="order_info_area">
                <div class="order_info_method">
                    <div class="type_method">
                        <p>결제 방법</p>
                       <!-- <p>
                            <input type="checkbox" id="methodOrder" class="chk_blue" name="methodOrder" checked><label for="methodOrder" class="chk_shape"></label><label for="methodOrder" class="chk_txt">지금 선택한 결제수단을 다음에도 사용</label>
                        </p>-->
                    </div>
                    <div class="choice_method">
                        <p><input type="radio" id="method1" class="chk_blue" name="methodPay"><label for="method1" class="chk_shape"></label><label for="method1" class="chk_txt">포인트 결제</label></p>
                        <p><input type="radio" id="method2" class="chk_blue" name="methodPay" checked><label for="method2" class="chk_shape"></label><label for="method2" class="chk_txt">신용카드</label></p>
                        <p><input type="radio" id="method3" class="chk_blue" name="methodPay"><label for="method3" class="chk_shape"></label><label for="method3" class="chk_txt">계좌이체</label></p>
                        <p><input type="radio" id="method4" class="chk_blue" name="methodPay"><label for="method4" class="chk_shape"></label><label for="method4" class="chk_txt">무통장 입금</label></p>
                    </div>
                    <div class="method_detail">
                        <div class="method_box"></div>
                        <div class="method_box active">
                            <select class="selectbox" name="selectboxCard">
                                <option selected disabled>카드 선택</option>
                                <option>국민카드</option>
                                <option>신한카드</option>
                                <option>현대카드</option>
                            </select>
                           <div class="more_method">
                                <p>
                                    <input type="checkbox" id="payDirect" class="chk_blue" name="payDirect"><label for="payDirect" class="chk_shape"></label><label for="payDirect" class="chk_txt">일시불</label>
                                    <select name="selectMonth" class="selectbox selectbox_month">
                                        <option selected disabled>할부</option>
                                        <option>3개월</option>
                                        <option>6개월</option>
                                    </select>
                                </p>
                           </div>
                        </div>
                        <div class="method_box"></div>
                        <div class="method_box">
                            <select class="selectbox" name="selectboxBank">
                                <option selected disabled>은행 선택</option>
                                <option>국민은행</option>
                                <option>신한은행</option>
                                <option>우리은행</option>
                            </select>
                            <div class="more_method">
                                <p><span class="account_person">예금주</span> <input type="text" class="textbox_member"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order_agree">
                <input type="checkbox" id="orderAgree" class="chk_blue" name="orderAgree"><label for="orderAgree" class="chk_shape"></label><label for="orderAgree" class="chk_txt">구매하실 상품의 상품정보 및 가격을 확인하였으며, 이에 동의합니다
                    <br>(전자상거래법 제8조 2항)</label>
            </div>
            <div class="bottom_btn_group">
                <button>결제하기</button>
            </div>
        </form>
    </div>
</div>
<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<script>
    $(".choice_method p .chk_blue").click(function () {
        var indexMethod = $(this).parents("p").index() + 1;
        $(".method_detail .method_box").removeClass("active");
        $(".method_detail .method_box:nth-child("+indexMethod+")").addClass("active");
    });
    $("#payDirect").click(function () {
        if($(this).is(":checked")){
            $(this).siblings("select").val("할부")
            $(this).siblings("select").prop("disabled",true);
        }else {
            $(this).siblings("select").prop("disabled",false);
        }
    });
    
    //우편번호
    function postCode() {
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
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('addressPost').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('addressRest1').value = fullAddr;

                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('addressRest2').focus();
            }
        }).open();
    }
</script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>


