<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="" name="formOrder">
        <div class="order-wrap order-detail-wrap">
            <div class="order-section">
                <h1 class="title-h1">주문결제</h1>

                <div class="table-area">
                    <div class="box-title2">
                        <h2>구매 상품</h2>
                    </div>
                    <div class="order-table">
                        <div class="table">
                            <div class="table-head">
                                <div class="row">
                                    <div class="cell col1">주문 상품 정보</div>
                                    <div class="cell col3">상품금액</div>
                                    <div class="cell col2">수량</div>
                                    <!--<div class="cell col4">할인금액</div>-->
                                    <div class="cell col5">주문금액</div>
                                </div>
                            </div>
                            <div class="row order-list">
                                <div class="cell col1">
                                    <img src="/assets/images/product_data/list_item_sIcon.png" alt="" class="order_list_img">
                                    <div>
                                        <p class="item-name">포토북 / 8x8</p>
                                        </br>
                                        <p class="item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                        <p class="cart-item-price">11,270원</p>
                                        <p class="order-item-num">수량 : 1</p>
                                    </div>

                                </div>
                                <div class="cell col3">
                                    <p class="order-item-price">11,270원</p>
                                </div>
                                <div class="cell col2">
                                    1
                                </div>
                               <!-- <div class="cell col4">
                                    <p class="item-discount">-2,270원</p>
                                </div>-->
                                <div class="cell col5">
                                    <p class="order-price">11,270원</p>
                                </div>
                            </div>
                            <div class="row order-list">
                                <div class="cell col1">
                                    <img src="/assets/images/product_data/list_item_sIcon.png" alt="" class="order_list_img">
                                    <div>
                                        <p class="item-name">포토북 / 8x8</p>
                                        </br>
                                        <p class="item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                        <p class="cart-item-price">11,270원</p>
                                        <p class="order-item-num">수량 : 1</p>
                                    </div>
                                </div>
                                <div class="cell col3">
                                    <p class="order-item-price">11,270원</p>
                                </div>
                                <div class="cell col2">
                                    1
                                </div>
                                <!--<div class="cell col4">
                                    <p class="item-discount">-1,270원</p>
                                </div>-->
                                <div class="cell col5">
                                    <p class="order-price">11,270원</p>
                                </div>
                            </div>
                            <div class="row row_total_mb">
                                <div class="line_row">
                                <div class="info_total_pd">
                                    <p>상품 <strong>25,040원</strong> + 배송 <strong>0원</strong></p>
                                </div>
                                <div class="price_total_pd">
                                    <p>주문금액 <strong>25,040원</strong></p>
                                </div>
                                </div>
                                <p class="last_row">총 결제금액 <strong>25,040원</strong></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="order-section order_left">
                <div class="order-info-area">
                    <div class="user-info-box">
                        <div class="box-title">
                            <h2>주문자 정보</h2>
                        </div>
                        <div class="user-ship-info first">
                            <div class="user-info-subtitle">수령인</div>
                            <div class="user-info-content">
                                <input type="text" class="textbox_order" placeholder="이름">
                            </div>
                        </div>
                        <div class="user-ship-info">
                            <div class="user-info-subtitle">휴대폰</div>
                            <div class="user-info-content">
                                <input type="text" class="textbox_order" placeholder="010.000.000">
                            </div>
                        </div>
                        <div class="user-ship-info">
                            <div class="user-info-subtitle">배송주소</div>
                            <div class="user-info-content address">
                                <div class="address_order clearfix">
                                    <button onclick="postCode()" type="button">우편번호</button>
                                    <input type="text" class="textbox_order textbox_order_sm" name="joinPostCode" disabled>
                                </div>

                                <input type="text" class="textbox_order" name="joinAddress1" placeholder="주소지(도로명,지번)">
                                <input type="text" class="textbox_order" name="joinAddress2" placeholder="상세주소">
                            </div>
                           <!-- <div class="info-edit">수정</div>-->
                        </div>
                       <!-- <div class="user-discount-ship-info">
                            <div class="user-info-subtitle">할인·배송비</div>
                            <div class="user-info-content">
                                <p class="coupon-discount">
                                    <span>쿠폰할인</span>
                                    <span>-18,380</span>
                                    <span>원</span>
                                </p>
                                <p class="ship">
                                    <span>배송비</span>
                                    <span>무료</span>
                                </p>
                            </div>
                            <div class="info-edit">수정</div>
                        </div>-->
                    </div>
                </div>
            </div>
            <div class="order-section order_right">
                <div class="order-info-area">

                    <div class="user-payment-box">
                        <div class="box-title">
                            <h2>결제 수단</h2>
                           <!-- <input id="payment" type="checkbox" name="chk" class="checkbox-style">
                            <label for="payment" class="checkbox-style-label">지금 선택하신 결제수단 저장</label>-->
                        </div>

                        <div class="payment-list">
                            <input id="credit" type="radio" name="payment_type" class="radio_style">
                            <label for="credit" class="radio" data-method="pay1">신용카드</label>

<!--                            <input id="affiliate" type="radio" name="payment_type" class="radio_style">-->
<!--                            <label for="affiliate" class="radio">제휴카드</label>-->

                            <input id="bank" type="radio" name="payment_type" class="radio_style">
                            <label for="bank" class="radio" data-method="pay2">실시간 계좌이체</label>

                            <input id="depositless" type="radio" name="payment_type" class="radio_style">
                            <label for="depositless" class="radio" data-method="pay3">무통장 입금</label>

                            <input id="phone" type="radio" name="payment_type" class="radio_style">
                            <label for="phone" class="radio" data-method="pay4">휴대폰 결제</label>
                        </div>
                        <!--<div class="payment-list-detail active">
                            <p>카드선택</p>
                            <div class="card-select">
                                <select name="card_company" id="1" class="select_style">
                                    <option value="">카드사 선택</option>
                                </select>
                                <select name="card_installment" id="2" class="select_style">
                                    <option value="">할부선택</option>
                                </select>
                            </div>
                        </div>-->
                    </div>

                </div>
            </div>
            <div class="clear"></div>

            <div class="order-section ">
                <div class="total-payment-area">
                    <div class="total-payment-box">
                        <div class="box-title">
                            <h2>최종결제 금액</h2>
                        </div>

                        <div class="order-total-price">
                            <p>합계</p>
                            <p class="price_order"><span class="order-total">22,540</span>원</p>
                        </div>

                        <div class="order-total-detail">
                            <div class="total-detail-item">
                                <p>상품금액</p>
                                <p class="detail_price"><span class="product-price">22,540</span>원</p>
                            </div>
                            <!--<div class="total-detail-discount">
                                <p>할인금액</p>
                                <p><span class="discount-amount">1,270</span>원</p>
                            </div>-->
                            <div class="total-detail-ship">
                                <p>배송비</p>
                                <p class="detail_price"><span class="ship-fee">0</span>원</p>
                            </div>
                            <div class="delivery_desc">
                                <p>※ 도서산간 지역은 배송비가 추가로 발생합니다</p>
                            </div>
                        </div>

                        <div class="order-agree-box">
                            <div class="order-agree-msg">
                                <p>주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의하시겠습니까?</p>
                                <a href="tos.php" target="_blank"><button type="button" class="">약관보기</button></a>
                            </div>
                            <div class="agree-check">
                                <input id="tosAgree" type="checkbox" name="tos_agree" class="checkbox-style">
                                <label for="tosAgree" class="checkbox-style-label">동의합니다</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-section order-section-last order-section-mb">
                <div class="total-payment-area">
                    <div class="order-agree-box">
                        <h2 class="title_no_line">약관동의</h2>
                        <div class="order-agree-msg">
                            <p>주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, <br>구매에 동의하시겠습니까?
                                <a href="tos.php" target="_blank">
                                    <button type="button" class="">약관보기</button>
                                </a></p>

                        </div>
                        <div class="agree-check">
                            <input id="tosAgreeM" type="checkbox" name="tos_agree" class="checkbox-style">
                            <label for="tosAgreeM" class="checkbox-style-label">동의합니다</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-checkout">
                <button type="submit">결제하기</button>
            </div>
        </div>

    </form>
    <div id="orderAddress" class="postcode_page">
        <div class="address_close" onclick="postCodeClose()">
            <img src="//t1.daumcdn.net/postcode/resource/images/close.png" alt="">
        </div>
    </div>

    <script src="/assets/js/dropzone/dropzone.js"></script>
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script>
        $("div#myDropzone").dropzone({
            url: "/file/post",
            dictDefaultMessage: "",
            uploadMultiple: true,
            clickable: ".fileinput-button",
        });


        $(document).ready(function() {
            // var eachItemPrice = 0;
            // var totalItemPrice = 0;

            /*var numberPick = function(num) {
                return num.replace(/[^0-9]/g,"");
            };
            var numberWithCommas = function(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };


            var itemOrderPriceSet = function() {
                var itemPrice = 0;
                var itemDiscount = 0;
                var itemOrderPrice = 0;

                $('.order-list').each(function() {
                    itemPrice = $(this).find('.order-item-price').html();
                    // console.log( itemPrice );
                    itemDiscount = $(this).find('.item-discount').html();
                    // console.log( itemDiscount );
                    itemOrderPrice = parseInt( numberPick(itemPrice) ) - parseInt( numberPick(itemDiscount) );
                    itemOrderPrice = numberWithCommas( itemOrderPrice ) + '원';

                    $(this).find('.order-price').html( itemOrderPrice );
                })
            };
            itemOrderPriceSet();


            //총 상품 금액액
            var itemTotalPriceSet = function() {
                var totalItemPrice = 0;
                var eachItemPrice = 0;
                $('.order-item-price').each(function () {
                    // console.log($(this).html());
                    eachItemPrice = $(this).html();
                    totalItemPrice += parseInt( numberPick( eachItemPrice ) );

                    // console.log(totalItemPrice);
                });
                $('.product-price').html( numberWithCommas( totalItemPrice ) );
            };
            itemTotalPriceSet();

            //총 할인 금액
            var itemTotalDiscountSet = function() {
                var totalItemDiscount = 0;
                var eachItemDiscount = 0;
                $('.item-discount').each(function() {
                    eachItemDiscount = $(this).html();
                    totalItemDiscount += parseInt( numberPick( eachItemDiscount ) );
                })
                // console.log('할인 총 금액 : ', totalItemDiscount);
                $('.discount-amount').html('-' + numberWithCommas( totalItemDiscount ) );
            };
            itemTotalDiscountSet();

            var totalOrderPrice = function() {
                var totalPrice = 0;
                var totalDiscount = 0;
                var totalShip = 0;
                var totalAmount = 0;
                totalPrice = numberPick( $('.product-price').html() );
                totalDiscount = numberPick( $('.discount-amount').html() );
                totalShip = numberPick( $('.ship-fee').html() );

                totalAmount = parseInt(totalPrice) - parseInt(totalDiscount) + parseInt(totalShip);

                $('.order-total').html( numberWithCommas( totalAmount) );
            }
            totalOrderPrice();*/
        })
        /*결제 수단*/
        $(".radio").click(function () {
            var dataName = $(this).attr("data-method");
            if(dataName !== 'pay1'){
                $(".payment-list-detail").removeClass("active");
            }else {
                $(".payment-list-detail").addClass("active");
            }
        });

        /*우편번호*/
        var element_wrap = document.getElementById('orderAddress');
        function postCodeClose() {
            element_wrap.style.display = 'none';
        }
        /*postcode*/
        function postCode() {
            var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            new daum.Postcode({
                oncomplete: function(data) {
                    var addr = '';
                    var extraAddr = '';
                    if (data.userSelectedType === 'R') {
                        addr = data.roadAddress;
                    } else {
                        addr = data.jibunAddress;
                    }

                    if(data.userSelectedType === 'R'){
                        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                            extraAddr += data.bname;
                        }
                        if(data.buildingName !== '' && data.apartment === 'Y'){
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        if(extraAddr !== ''){
                            extraAddr = ' (' + extraAddr + ')';
                        }
                    }
                    var form = document.formOrder;
                    form.joinPostCode.value = data.zonecode;
                    form.joinAddress1.value = addr;
                    form.joinAddress2.focus();
                    element_wrap.style.display = 'none';
                    document.body.scrollTop = currentScroll;
                },
               /* onresize : function(size) {
                    element_wrap.style.height = size.height+'px';
                },*/
                width : '100%',
                height : '100%'
            }).embed(element_wrap);

            element_wrap.style.display = 'block';
        }
       /* function postCode() {
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
                    var form = document.formOrder;
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
        }*/
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer_empty.php');?>