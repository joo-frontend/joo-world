<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <div class="mypage-wrap mypage_order">

<!--        <div class="m_mypage_nav">-->
<!--            <ul>-->
<!--                <li class="active">-->
<!--                    <a href="./mypage_order.php">주문관리</a>-->
<!--                </li>-->
<!--                <li class="sub_ul">-->
<!--                    <a href="#">앨범 컨펌</a>-->
<!--                    <ul class="m_sub_nav">-->
<!--                        <li>-->
<!--                            <a href="./mypage_album.php">앨범 컨펌내역</a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a href="">완료된 앨범</a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a href="">백업</a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
<!--                <li class="sub_ul">-->
<!--                    <a href="#">계정 정보관리</a>-->
<!--                    <ul class="m_sub_nav">-->
<!--                        <li class="">-->
<!--                            <a href="./mypage_account_password.php">비밀번호 변경</a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a href="./mypage_designer.php">디자이너 등록하기</a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a href="./mypage_leave_membership.php">탈퇴하기</a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="">알림 설정</a>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->

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
<!--                        <ul class="menu_sub_ul">-->
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_album_register.php">-앨범 디자인등록</a>-->
<!--                            </li>-->
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_account01.php">-의뢰리스트</a>-->
<!--                            </li>-->
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_account02.php">-계좌확인</a>-->
<!--                            </li class="depth_menu2">-->
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_account_alarm.php">-알림센터</a>-->
<!--                            </li class="depth_menu2">-->
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_rating.php">-등급제도</a>-->
<!--                            </li>-->
<!--                        </ul>-->
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
                    <div class="m_order_item">
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
                                    결제완료
                                    
                                </p>
                                <p class="item_price">
                                    11,270원
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="m_order_item">
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
                                    디자인확인 대기
                                    <a href="#">디자인확인</a>
                                </p>
                                <p class="item_price">
                                    11,270원
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="m_order_item">
                        <div class="item_top">
                            <a href="#" class="item_number">65412389</a>
                            <p class="item_order_date">
                                2019.01.05
                                <span>입금기한 2019.01.07까지</span>
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
                                    배송준비중
                                </p>
                                <p class="item_price">
                                    11,270원
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="m_order_item">
                        <div class="item_top">
                            <a class="item_number">65412389</a>
                            <p class="item_order_date">
                                2019.01.05
                                <span>입금기한 2019.01.07까지</span>
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
                                    배송중
                                    <a href="#">배송조회</a>
                                </p>
                                <p class="item_price">
                                    11,270원
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="m_order_item">
                        <div class="item_top">
                            <a class="item_number">65412389</a>
                            <p class="item_order_date">
                                2019.01.05
                                <span>입금기한 2019.01.07까지</span>
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
                                    배송완료
                                    <a href="#">배송조회</a>
                                </p>
                                <p class="item_price">
                                    11,270원
                                </p>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="orderList_more_btn">더보기</button>
                </div>
                <div class="mypage-section w_order_list">
                    <div class="mypage-title-h2 m_title_displayNone">
                        <h2>구매내역</h2>
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
                                <button class="order-cancel-btn">주문취소</button>
                            </div>
                        </div>

                        <div class="history-list row">
                            <div class="cell col1">
                                <div class="history-item-img">
                                    <img src="/assets/images/product_data/product_itemBig_1.png" alt="">
                                </div>
                                <div class="history-item-box">
                                    <p class="history-item-name">디자이너 포토북</p>
                                    <p class="history-item-option">옵션 : 유광지/50매/양면</p>
                                </div>
                            </div>
                            <div class="cell col2">
                                <p class="history-order-number">2018.12.16<br/><span>(65412389)</span></p>
                                <!--<p class="order-deadline">입금기한<br/><span>2019.01.07까지</span></p>-->
                            </div>
                            <div class="cell col3">
                                <p class="ship-state-msg">배송중</p>
                                <button class="ship-state-btn">배송조회</button>
                            </div>
                            <div class="cell col4">
                                <p class="history-item-price"><span>34.500</span>원</p>
                                <p class="history-item-ea">(<span>1</span>개)</p>
                            </div>
                            <div class="cell col5">
                                <button class="history-detail-btn">결제/배송지 정보<span></span></button>
                                <!--<button class="order-cancel-btn">주문취소</button>-->
                            </div>
                        </div>

                        <div class="history-list row">
                            <div class="cell col1">
                                <div class="history-item-img">
                                    <img src="/assets/images/product_data/product_itemBig_2.png" alt="">
                                </div>
                                <div class="history-item-box">
                                    <p class="history-item-name">디자이너 포토북</p>
                                    <p class="history-item-option">옵션 : 유광지/50매/양면</p>
                                </div>
                            </div>
                            <div class="cell col2">
                                <p class="history-order-number">2018.12.16<br/><span>(65412389)</span></p>
                                <!--<p class="order-deadline">입금기한<br/><span>2019.01.07까지</span></p>-->
                            </div>
                            <div class="cell col3">
                                <p class="ship-state-msg">배송완료</p>
                                <button class="ship-state-btn">배송조희</button>
                            </div>
                            <div class="cell col4">
                                <p class="history-item-price"><span>34.500</span>원</p>
                                <p class="history-item-ea">(<span>1</span>개)</p>
                            </div>
                            <div class="cell col5">
                                <button class="history-detail-btn">결제/배송지 정보<span></span></button>
                            </div>
                        </div>

                        <div class="history-list row">
                            <div class="cell col1">
                                <div class="history-item-img">
                                    <img src="/assets/images/product_data/product_itemBig_5.png" alt="">
                                </div>
                                <div class="history-item-box">
                                    <p class="history-item-name">디자이너 포토북</p>
                                    <p class="history-item-option">옵션 : 유광지/50매/양면</p>
                                </div>
                            </div>
                            <div class="cell col2">
                                <p class="history-order-number">2018.12.16<br/><span>(65412389)</span></p>
                                <!--<p class="order-deadline">입금기한<br/><span>2019.01.07까지</span></p>-->
                            </div>
                            <div class="cell col3">
                                <p class="ship-state-msg">반품완료</p>
                                <button class="ship-state-btn">배송조회</button>
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


                    <div class="history-paging-box">
                        <button class="history-prev"></button>
                        <ul>
                            <li class="paging-active"><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">5</a></li>
                        </ul>
                        <button class="history-next"></button>
                    </div>

                    <div class="mypage-section">
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
        </div>
    </div>
    <!--결제/배송지 정보 클릭 -> 모달-->
    <div id="historyDetailModal" class="history-detail-modal">
        <div class="history-modal-section">
            <div class="close-btn history-detail-close"></div>
            <div class="history-modal-title">
                결제/배송지 정보
            </div>
            <div class="history-detail-area">
                <div class="modal-title-h2">
                    <h2>구매 정보</h2>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">결제 방법</p>
                        <p class="line-td">무통장입금</p>
                    </div>
                    <div class="history-detail-line">
                        <p class="line-th">배송비</p>
                        <p class="line-td">2,500원</p>
                    </div>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">상품 총 금액</p>
                        <p class="line-td">40,500원</p>
                    </div>
                    <div class="history-detail-line">
                        <p class="line-th">총 결제 금액</p>
                        <p class="line-td">43,00원</p>
                    </div>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">쿠폰할인</p>
                        <p class="line-td">쿠폰미적용</p>
                    </div>
                </div>
            </div>


            <div class="history-detail-area">
                <div class="modal-title-h2">
                    <h2>배송지 정보</h2>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">수령자명</p>
                        <p class="line-td">김요다</p>
                    </div>
                    <div class="history-detail-line">
                        <p class="line-th">연락처</p>
                        <p class="line-td">010-1234-5678</p>
                    </div>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">주소</p>
                        <p class="line-td">경기도 성남시 분당구</p>
                    </div>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">배송시 요청사항</p>
                        <p class="line-td">부재 시</p>
                    </div>
                </div>
                <div class="history-detail-box">
                    <div class="history-detail-line">
                        <p class="line-th">주문상품 및 수량</p>
                        <p class="line-td">포토북 - 1권</p>
                    </div>
                </div>
            </div>

            <div class="modal-close-btn">
                <button id="historyDetailClose" class="history-detail-close" type="button">닫기</button>
            </div>
        </div>
        <div class="modal-back"></div>
    </div>

    <!--주문내역 취소 확인 모달-->
    <div id="orderCancelModal" class="order_modal diplay_none">
        <div class="modal-box">
            <div class="close-btn"></div>
            <p>주문내역을 <span>취소</span>하시겠습니까?</p>
            <div>
                <button id="orderCancelYes" type="button">확인</button>
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
            $('#orderCancelYes').on('click', function() {
                $('#orderCancelModal').toggleClass('modal-display');
                $('#cancelCartModal').toggleClass('modal-display');
            });
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



        })
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>