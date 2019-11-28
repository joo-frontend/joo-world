<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <div class="mypage-wrap order_detail_wrap">

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


            <div class="history-list-table table">
                <div class="order-history-head table-head">
                    <div class="row">
                        <div class="cell col1">상품정보</div>
                        <div class="cell col2">주문일/주문번호</div>
                        <div class="cell col3">배송상태</div>
                        <div class="cell col4">수량/금액</div>
                        <div class="cell col5"></div>
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
                    </div>
                </div>
            </div>
            <div class="order_detail_control">
                <a href="#">배송조회</a>
                <a href="#">별점주기</a>
            </div>


            <div class="list_section">
                <div class="m_order_list">
                    <div class="m_order_item pay_yet">
                        <div class="item_top">
                            <p class="item_number">65412389</p>
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

                        <div class="order_control_box">
                            <a href="#" class="order_cancel_btn">주문취소</a>
                            <a href="#" class="order_cancel_btn">배송지 변경</a>
                        </div>
                    </div>
                </div>

                <div class="m_order_info">
                    <div class="order_info_Item">
                        <p class="order_info_title">주문자정보</p>
                        <div class="order_info_line">
                            <div class="info_th">이름</div>
                            <div class="info_td">박기훈</div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">휴대폰</div>
                            <div class="info_td">010-0000-0000</div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">이메일</div>
                            <div class="info_td">abc@abc.com</div>
                        </div>
                    </div>
                    <div class="order_info_Item">
                        <p class="order_info_title">배송지 정보</p>
                        <div class="order_info_line">
                            <div class="info_th">수령인</div>
                            <div class="info_td">박기훈</div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">휴대폰</div>
                            <div class="info_td">010-0000-0000</div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">배송주소</div>
                            <div class="info_td">
                                <div class="info_td">12048</div>
                                <div class="info_td">서울시 뚝섬1로 25</div>
                                <div class="info_td">한화에코밸리 DK브라더스 4층 403호</div>
                            </div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">배송메모</div>
                            <div class="info_td">
                                부재 시 문앞에 놔주세요
                            </div>
                        </div>
                    </div>

                    <div class="order_info_Item">
                        <p class="order_info_title pay_method">결제수단</p>
                        <div class="order_info_line">
                            <div class="info_td"><span>신용카드</span> : <span>신한LOVE카드</span></div>
                        </div>
                    </div>
                    
                    <div class="order_info_Item">
                        <p class="order_info_title">최종 결제금액</p>
                        <div class="order_info_line">
                            <div class="info_th">총 상품금액</div>
                            <div class="info_td total_item_price">22,540원</div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">배송비</div>
                            <div class="info_td">0원</div>
                        </div>
                        <div class="order_info_line">
                            <div class="info_th">총 결제예상 금액</div>
                            <div class="info_td total_price_all">
                                22,540원
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <!--주문내역 취소 확인 모달-->
    <div id="orderCancelModal" class="order_modal diplay_none">
        <div class="modal-box">
            <div class="close-btn"></div>
            <p>주문내역을 <span>취소</span>하시겠습니까?</p>
            <div>
                <a href="./mypage_order_cancel.php"><button id="orderCancelYes" type="button">확인</button></a>
                <button id="orderCancelNo" class="" type="button">취소</button>
            </div>
        </div>
        <div class="modal-back"></div>
    </div>

    <!--주문내역 취소 확인 후 모달-->
    <div id="cancelCartModal" class="order_modal diplay_none">
        <div class="modal-box">
            <div class="close-btn cancel-cart-ok"></div>
            <p>
                취소된 주문내역은<br/>
                <span>장바구니로</span>&nbsp;이동되었습니다.
            </p>
            <div>
                <button id="cancelCartOk" class="" type="button">확인</button>
                <button id="goCart" type="button">장바구니 가기</button>
            </div>
        </div>
        <div class="modal-back"></div>
    </div>

    <!--    별점주기 단계1-->
    <div id="orderStartModal01" class="order_modal diplay_none">
        <div class="modal-box">
            <div class="close-btn"></div>
            <p>찍오 포토북 구매에 대한<br/>별점 후기 부탁드립니다.</p>
            <div>
                <a href="" ><button id="orderCancelYes" type="button">다음에</button></a>
                <a href=""><button id="orderCancelNo" class="" type="button">별점주러 가기</button></a>
            </div>
        </div>
        <div class="modal-back"></div>
    </div>
    <!--    별점주기 단계2-->
    <div id="orderStartModal02" class="order_modal diplay_none">
        <div class="modal-box">
            <div class="close-btn"></div>
            <form action="">
                <h3 class="star_modal_title">별점주기</h3>
                <div class="star_contents_box">
                    <p class="star_contents_title">구매상품</p>
                    <div class="contents_line">
                        <div class="line_th">주문상품</div>
                        <div class="line_td">디자이너 포토북</div>
                    </div>
                    <div class="contents_line">
                        <div class="line_th">옵션</div>
                        <div class="line_td">유광지 / 50매 / 양면 / 8x8</div>
                    </div>
                    <div class="contents_line">
                        <div class="line_th">수량</div>
                        <div class="line_td">1권</div>
                    </div>
                    <div class="contents_line">
                        <div class="line_th">구매일</div>
                        <div class="line_td">2019.01.02</div>
                    </div>
                </div>

                <div class="star_contents_box">
                    <p class="star_contents_title">별점평가</p>
                    <div class="contents_line">
                        <div class="line_th">내부디자인</div>
                        <div class="line_td">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_half.png" alt="">
                            <img src="/assets/images/mypage/star_empty.png" alt="">
                        </div>
                    </div>
                    <div class="contents_line">
                        <div class="line_th">앨범 편집구성</div>
                        <div class="line_td">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_empty.png" alt="">
                            <img src="/assets/images/mypage/star_empty.png" alt="">
                        </div>
                    </div>
                    <div class="contents_line">
                        <div class="line_th">종이상태</div>
                        <div class="line_td">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_empty.png" alt="">
                            <img src="/assets/images/mypage/star_empty.png" alt="">
                        </div>
                    </div>
                    <div class="contents_line">
                        <div class="line_th">배송속도</div>
                        <div class="line_td">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                            <img src="/assets/images/mypage/star_full.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="star_send_btn">
                    <a href="">
                        <button class="send_btn">제출</button>
                    </a>
                </div>
            </form>
        </div>
        <div class="modal-back"></div>
    </div>
    <!--    별점주기 단계3-->
    <div class="order_modal diplay_none">
        <div class="modal-box">
            <div class="close-btn"></div>
            <p>고객님의 소중한 의견 감사합니다.<br/>반영하여 더욱 좋은 품질의 앨범으로 찾아뵙겠습니다.</p>
            <div>
                <a href="" ><button id="orderCancelYes" type="button">확인</button></a>
                <a href=""><button id="orderCancelNo" class="" type="button">마이페이지로</button></a>
            </div>
        </div>
        <div class="modal-back"></div>
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