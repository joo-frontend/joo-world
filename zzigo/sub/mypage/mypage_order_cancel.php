<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <div class="mypage-wrap order_cancel_wrap">

        <div class="m_mypage_nav01">
            <ul>
                <li class="active">
                    <a href="./mypage_order.php">주문관리</a>
                </li>
                <li>
                    <a href="./mypage_album.php">앨범 컨펌</a>
                </li>
                <li>
                    <a href="./mypage_account_password.php">계정 정보관리</a>
                </li>
                <li>
                    <a href="./mypage_designer.php">디자이너 등록</a>
                </li>
                <li>
                    <a href="./mypage_delivery.php">정기배송서비스</a>
                </li>
                <li>
                    <a href="./mypage_alarm.php">알림 설정</a>
                </li>
            </ul>
        </div>


        <div class="left_content">
            <div class="file_folder_menu">
                <p class="menu_title">마이페이지</p>
                <ul>
                    <li class="depth_menu1 focus">
                        <a href="./mypage_order.php" class="menu1">주문 관리</a>
                    </li>
                    <li class="depth_menu1 album li_list_bottom">
                        <a href="#" class="menu1 ">앨범 컨텀</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2"><a href="./mypage_album.php">앨범 컨펌내역</a></li>
                            <li class="depth_menu2"><a href="#">완료된 앨범</a></li>
                            <li class="depth_menu2"><a href="#">백업</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 account li_list_bottom">
                        <a href="#" class="menu1">계정 정보관리</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2"><a href="./mypage_account_password.php">비밀번호 변경</a></li>
                            <li class="depth_menu2"><a href="./mypage_leave_membership.php">탈퇴하기</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 account li_list_bottom">
                        <a href="./mypage_designer.php" class="menu1">디자이너 등록</a>
                    </li>
                    <li class="depth_menu1">
                        <a href="./mypage_delivery.php" class="menu1">정기배송 서비스</a>
                    </li>
                    <li class="depth_menu1">
                        <a href="./mypage_alarm.php" class="menu1">알림 설정</a>
                    </li>
                </ul>
            </div>
            <div class="left_menu_bottom">
                <div class="app_down_box">
                    <a href="">
                        <img src="/assets/images/cloud/btn_appdown.png" alt="">
                    </a>
                </div>
                <div class="delivery_box">
                    <a href="">
                        <img src="/assets/images/cloud/btn_delivery_sqaure.png" alt="">
                    </a>
                </div>
                <div class="top_btn">
                    <a href="">
                        <img src="/assets/images/mypage/btn_square_top.png" alt="">
                    </a>
                </div>
            </div>
        </div>

        <div class="right_content mypage_order_wrap">
            <div class="mypage-section">
                <div class="mypage-title-h2">
                    <h2>주문/배송 내역</h2>
                </div>
                <div class="order-history-area">
                    <div>
                        <p>입금확인중</p>
                        <div class="state-box">
                            <div class="state-back state-01"></div>
                            <p><span>1</span>건</p>
                        </div>
                    </div>
                    <div>
                        <p>결제확인/완료</p>
                        <div class="state-box">
                            <div class="state-back state-02 state-active"></div>
                            <p><span>0</span>건</p>
                        </div>
                    </div>
                    <div>
                        <p>배송중/완료</p>
                        <div class="state-box">
                            <div class="state-back state-03"></div>
                            <p><span>3</span>건</p>
                        </div>
                    </div>
                    <div>
                        <p>취소/반품/교환</p>
                        <div class="state-box">
                            <div class="state-back state-04"></div>
                            <p><span>1</span>건</p>
                        </div>
                    </div>
                </div>

                <div class="m_detail_search">
                    <button class="order_detail_list" type="button">상세조회</button>
                    <div class="order_detail_searchDisplay display_none">
                        <select name="sort_state" class="sort-state-selectbox">
                            <option value="">전체상태</option>
                            <option value="">결제완료</option>
                            <option value="">입금확인중</option>
                            <option value="">디자인확인대기</option>
                            <option value="">배송준비중</option>
                            <option value="">배송중</option>
                            <option value="">배송완료</option>
                            <option value="">취소신청완료</option>
                            <option value="">취소완료</option>
                            <option value="">반품신청완료</option>
                            <option value="">반품완료</option>
                            <option value="">교환신청완료</option>
                            <option value="">교환완료</option>
                        </select>
                        <button type="button" class="order_detail_search">조회</button>
                    </div>
                </div>

                <div class="order-date-area">
                    <div class="order-date-box">
                        <button type="button" class="date-lated-box">10월</button>
                        <button type="button" class="date-lated-box">11월</button>
                        <button type="button" class="date-lated-box">12월</button>
                    </div>
                    <div class="order-date-box">
                        <input id="datepicker1" type="text">
                        <span>~</span>
                        <input id="datepicker2" type="text">
                        <select name="sort_state" class="sort-state-selectbox">
                            <option value="">전체상태</option>
                            <option value="">결제완료</option>
                            <option value="">입금확인중</option>
                            <option value="">디자인확인대기</option>
                            <option value="">배송준비중</option>
                            <option value="">배송중</option>
                            <option value="">배송완료</option>
                            <option value="">취소신청완료</option>
                            <option value="">취소완료</option>
                            <option value="">반품신청완료</option>
                            <option value="">반품완료</option>
                            <option value="">교환신청완료</option>
                            <option value="">교환완료</option>
                        </select>
                        <button type="button" class="sort-date-btn">조회</button>
                    </div>
                </div>
            </div>


            <div class="list_section">
                <div class="m_order_list">
                    <div class="list_not">
                        <img src="" alt="">
                        <p>조건에 맞는 내역이 없습니다.</p>
                    </div>
                    <div class="m_order_item pay_yet">
                        주문취소
                        <div class="item_top">
                            <a href="#" class="item_number">65412389</a>
                            <p class="item_order_date">
                                2019.01.05
                            </p>
                        </div>
                        <div class="item_bottom">
                            <div class="item_img">
                                <img src="/assets/images/product_data/product_itemBig_4.png" alt="">
                            </div>
                            <div class="item_contents">
                                <p class="item_name">포토북 / 8x8</p>
                                <p class="item_option">옵션 : 하드커버, 무광코팅, 무광지</p>
                                <p class="item_delivery">
                                    <span><img src="/assets/images/mypage/delivery_small.png" alt=""></span>정기배송(10%할인)</p>
                                <p class="item_state">
                                    입금확인중
                                    <a href="#">입금안내</a>
                                </p>
                                <p class="item_price">
                                    11,270원
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="history-list-table table">
                <div class="order-history-head table-head">
                    <div class="row">
                        <div class="cell col1">상품정보</div>
                        <div class="cell col2">주문일/주문번호</div>
                        <div class="cell col3">배송상태</div>
                        <div class="cell col4">수량/금액</div>
                        <div class="cell col5">주문 상세조회</div>
                    </div>
                </div>
                <div class="history-list row">
                    <div class="cell col1">
                        <div class="history-item-img">
                            <img src="/assets/images/product_data/product_itemBig_4.png" alt="">
                        </div>
                        <div class="history-item-box">
                            <p class="history-item-name">디자이너 포토북</p>
                            <p class="history-item-option">옵션 : 유광지/50매/양면</p>
                        </div>
                    </div>
                    <div class="cell col2">
                        <p class="history-order-number">2018.12.16<br/><span>(65412389)</span></p>
                        <p class="order-deadline">입금기한<br/><span>2019.01.07까지</span></p>
                    </div>
                    <div class="cell col3">
                        <p class="ship-state-msg">입금확인중</p>
                        <button class="ship-state-btn">입금안내</button>
                    </div>
                    <div class="cell col4">
                        <p class="history-item-price"><span>34.500</span>원</p>
                        <p class="history-item-ea">(<span>1</span>개)</p>
                    </div>
                    <div class="cell col5">
                        <button class="history-detail-btn">결제/배송지 정보<span></span></button>
                    </div>
                </div>
            </div>


            <div class="cancel_reason_box">
                <div class="order_cancel_box">
                    <p>분류선택</p>
                    <div class="order_cancel_item">
                        <input id="type1" type="radio" name="type" class="radio_style">
                        <label for="type1" class="radio">취소</label>
                    </div>
                    <div class="order_cancel_item">
                        <input id="type2" type="radio" name="type" class="radio_style">
                        <label for="type2" class="radio">반품</label>
                    </div>
                    <div class="order_cancel_item">
                        <input id="type3" type="radio" name="type" class="radio_style">
                        <label for="type3" class="radio">교환</label>
                    </div>
                </div>

                <div class="order_cancel_box">
                    <p>사유선택</p>
                    <div class="order_cancel_item">
                        <input id="reason1" type="radio" name="reason" class="radio_style">
                        <label for="reason1" class="radio">고객변심</label>
                    </div>
                    <div class="order_cancel_item">
                        <input id="reason2" type="radio" name="reason" class="radio_style">
                        <label for="reason2" class="radio">배송지연</label>
                    </div>
                    <div class="order_cancel_item">
                        <input id="reason3" type="radio" name="reason" class="radio_style">
                        <label for="reason3" class="radio">상품옵션을 선택 잘못함</label>
                    </div>
                    <div class="order_cancel_item">
                        <input id="reason4" type="radio" name="reason" class="radio_style">
                        <label for="reason4" class="radio">기타</label>
                    </div>
                </div>

                <div class="order_cancel_box">
                    <p>상세내용</p>
                    <div class="order_cancel_textarea">
                        <textarea name="" id=""></textarea>
                    </div>
                </div>

                <div class="order_cancel_control">
                    <button type="button">취소</button>
                    <button type="button">신청하기</button>
                </div>
            </div>
            <div class="mypage-section order_detail_notice">
                <div class="mypage-title-h2">
                    <h2>주문/배송 관련 안내</h2>
                </div>
                <div class="order-notice-area">
                    <p>
                        주문내역에 대해 메일 및 SMS를 발송해드립니다.<br/>
                        무통장입금의 주문한 날부터 7일 이내 입금확인이 되어야 주문이 취소되지 않습니다. 배송조회는 상품이 출고 된 날의 익일 오전부터 가능합니다.<br/>
                        출고일로부터 2일 경과후에도 배송조회가 되지 않을 경우, 고객센터로 연락 부탁드립니다.
                    </p>
                </div>
            </div>


        </div>
    </div>


    <script src="/assets/js/datepicker.min.js"></script>
    <script src="/assets/js/datepicker.ko-KR.js"></script>
    <script>
        $(document).ready(function() {
            $( "#datepicker1" ).datepicker({
                yearFirst: true,
                yearSuffix: '년',
                format: 'yyyy.mm.dd',
                language: 'ko-KR'
            });
            $( "#datepicker2" ).datepicker({
                yearFirst: true,
                yearSuffix: '년',
                format: 'yyyy.mm.dd',
                language: 'ko-KR'
            });

            $('.history-detail-btn').on('click', function() {
                $('#historyDetailModal').toggleClass('modal-display');
            });
            $('.history-detail-close').on('click', function() {
                $('#historyDetailModal').toggleClass('modal-display');
            });


            $('.order-cancel-btn').on('click', function() {
                $('#orderCancelModal').toggleClass('modal-display');
            });
            // $('#orderCancelYes').on('click', function() {
            //     $('#orderCancelModal').toggleClass('modal-display');
            //     $('#cancelCartModal').toggleClass('modal-display');
            // });
            $('.order-cancel-no').on('click', function() {
                $('#orderCancelModal').toggleClass('modal-display');
            });


            $('.cancel-cart-ok').on('click', function() {
                $('#cancelCartModal').toggleClass('modal-display');
            });
            $('#goCart').on('click', function() {
                // $('#cancelCartModal').toggleClass('modal-display');
                location.href = '/sub/cart/cart.php'
            })


            $('.order_cancel_btn').on('click', function() {

                $('#orderCancelModal').css('display', 'block');
            });

        })
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>