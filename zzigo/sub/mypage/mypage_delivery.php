<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <div class="mypage-wrap mypage_delivery_wrap">
        <div class="m_mypage_nav01">
            <ul>
                <li>
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
                <li class="active">
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
                    <li class="depth_menu1">
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
                        <a href="#" class="menu1">디자이너 등록</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2">
                                <a href="./mypage_album_register.php">-앨범 디자인등록</a>
                            </li>
                            <li class="depth_menu2">
                                <a href="./mypage_account01.php">-의뢰리스트</a>
                            </li>
                            <li class="depth_menu2">
                                <a href="./mypage_account02.php">-계좌확인</a>
                            </li class="depth_menu2">
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_account_alarm.php">-알림센터</a>-->
<!--                            </li class="depth_menu2">-->
                            <li class="depth_menu2">
                                <a href="./mypage_rating.php">-등급제도</a>
                            </li>
                        </ul>
                    </li>
                    <li class="depth_menu1 focus">
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


        <div class="right_content service_edit" >
            <div class="delivery-section">

                <div class="mypage-title-h2">
                    <h2>현재 이용중인 정기배송 서비스</h2>
                    <button type="button" class="service_history_btn">사용내역</button>
                </div>

                <div class="delivery_table">
                    <div class="table_line">
                        <div class="table_line_th">주소지</div>
                        <div class="table_line_td">
                            서울시 강남구 강남빌딩 203호
                            <a href="#" class="addr_edit_btn">
                                주소지 변경
                            </a>
                        </div>
                    </div>
                    <div class="table_line">
                        <div class="table_line_th">정기배송 사용기간</div>
                        <div class="table_line_td">
                            2019.01.05~2019.04.05까지
                            <a href="#" class="discount_display_btn">
                                3개월(10%할인)
                            </a>
                        </div>
                    </div>
                    <div class="table_line">
                        <div class="table_line_th">사용횟수</div>
                        <div class="table_line_td">
                            <span>1</span> / <span>3</span>회 (잔여횟수 : <span>2</span>)
                        </div>
                    </div>
                </div>


                <div class="delivery_edit_box">
                    <button type="button">해지하기</button>
                    <button type="button">서비스변경</button>
                </div>
            </div>

        </div>


        <div class="right_content service_apply" style="display: none;">
            <div class="delivery_section">

                <div class="mypage-title-h2">
                    <h2>정기배송 서비스</h2>
                </div>

                <div class="service_top_box">
                    <p class="service_subtitle">서비스 소개</p>
                    <p class="service_contents">
                        앨범구매를 3개월, 6개월, 1년 등의 기간의 금액만큼 미리 결제해놓고,<br/>
                        할인된 금액으로 앨범을 정기적으로(매월 초에 지난달의 사진앨범기록) 받아보는 서비스입니다.
                    </p>
                </div>
                <div class="service_bottom_box">
                    <p class="service_subtitle">혜택</p>
                    <div class="service_contents_line">
                        <div class="line_img">
                            <img src="/assets/images/mypage/lowprice_circle.png" alt="">
                        </div>
                        <div class="line_txt">
                            1. <span class="">저렴한 이용가격</span>
                            <p>
                                <span class="txt_bold">3개월</span>&nbsp;<span class="txt_color_point">10%</span>,&nbsp;<span class="txt_bold">6개월은</span>&nbsp;<span class="txt_color_point">20%</span>, 1년이면 무려 <span class="txt_color_point">30%</span>??<br/>
                                파격적인 할인 가격으로 기존 가격보다 저렴하게 이용해보세요. 고객님의 잔고는 소중하니까요.
                            </p>
                        </div>
                    </div>
                    <div class="service_contents_line">
                        <div class="line_img">
                            <img src="/assets/images/mypage/timesave.png" alt="">
                        </div>
                        <div class="line_txt">
                            2. <span class="">효과적인 시간 절약</span>
                            <p>
                                20P 기준 180분이 절약되는 SUPER TIME SAVE!<br/>
                                고객님의 바쁜 일정을 지켜드릴게요.
                            </p>
                        </div>
                    </div>
                    <div class="service_contents_line">
                        <div class="line_img">
                            <img src="/assets/images/mypage/easypay.png" alt="">
                        </div>
                        <div class="line_txt">
                            3. <span class="">편리한 결제 서비스</span>
                            <p>
                                정기 배송등록 한 번이면 추후 복잡한 결제절차는 안녕~<br/>
                                매번 결제 진행 없이 한 번의 결제면 OK!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="delivery_edit_box">
                    <button type="button">서비스신청</button>
                </div>
            </div>

        </div>



        <div class="right_content service_apply_section" style="display: none;" >
            <div class="delivery-section">

                <div class="mypage-title-h2">
                    <h2>정기배송 서비스 신청</h2>
                </div>

                <div class="delivery_table">
                    <div class="table_line">
                        <div class="table_line_th">주소지</div>
                        <div class="table_line_td">
                            서울시 강남구 강남빌딩 203호
                            <a href="#" class="addr_edit_btn">
                                주소지 변경
                            </a>
                        </div>
                    </div>
                    <div class="table_line">
                        <div class="table_line_th">정기배송 사용기간</div>
                        <div class="table_line_td">
                            <input id="month1" type="radio" name="monthly" class="radio_style" checked>
                            <label for="month1" class="radio">3개월(10%할인)</label>

                            <input id="month2" type="radio" name="monthly" class="radio_style">
                            <label for="month2" class="radio">6개월(20%할인)</label>

                            <input id="month3" type="radio" name="monthly" class="radio_style">
                            <label for="month3" class="radio">1년(30%할인)</label>
                        </div>
                    </div>
                    <div class="table_line">
                        <div class="table_line_th">결제 수단</div>
                        <div class="table_line_td">
                            <input id="pay1" type="radio" name="pay_method" class="radio_style" checked>
                            <label for="pay1" class="radio">신용카드</label>

                            <input id="pay2" type="radio" name="pay_method" class="radio_style">
                            <label for="pay2" class="radio">실시간 계좌이체</label>

                            <input id="pay3" type="radio" name="pay_method" class="radio_style">
                            <label for="pay3" class="radio">무통장입금</label>

                            <input id="pay4" type="radio" name="pay_method" class="radio_style">
                            <label for="pay4" class="radio">휴대폰 결제</label>
                        </div>
                    </div>
                    <div class="table_line">
                        <div class="table_line_th">최종금액</div>
                        <div class="table_line_td">
                            <p class="total_pay">00,000원</p>
                        </div>
                    </div>
                </div>


                <div class="delivery_edit_box">
                    <button type="button">취소</button>
                    <button type="button">신청하기</button>
                </div>
            </div>

        </div>
        




<!--        정기 배송 서비스 변경-->
        <div class="account_modal edit_service_modal display_none">
            <div class="modal-box">
                <div class="close-btn"></div>
                <h3>정기 배송 서비스 변경</h3>
                <div class="info_join_section service_section">
                    <div class="content_info">

                        <div class="item_info_join">
                            <div class="lb"><span>주소지</span></div>
                            <div class="info info_line">
                                서울시 강남구 강남빌딩 203호
                                <a href="" class="serviceAddr_edit_btn">주소지 변경</a>
                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>정기 결제기간</span></div>
                            <div class="info info_line">

                                <input id="month1" type="radio" name="monthly" class="radio_style" checked>
                                <label for="month1" class="radio">3개월(10%할인)</label>

                                <input id="month2" type="radio" name="monthly" class="radio_style">
                                <label for="month2" class="radio">6개월(20%할인)</label>

                                <input id="month3" type="radio" name="monthly" class="radio_style">
                                <label for="month3" class="radio">1년(30%할인)</label>

                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>결제 수단</span></div>
                            <div class="info info_line">

                                <input id="pay1" type="radio" name="pay_method" class="radio_style" checked>
                                <label for="pay1" class="radio">신용카드</label>

                                <input id="pay2" type="radio" name="pay_method" class="radio_style">
                                <label for="pay2" class="radio">실시간 계좌이체</label>

                                <input id="pay3" type="radio" name="pay_method" class="radio_style">
                                <label for="pay3" class="radio">무통장입금</label>

                                <input id="pay4" type="radio" name="pay_method" class="radio_style">
                                <label for="pay4" class="radio">휴대폰 결제</label>
                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>최종금액</span></div>
                            <div class="info info_line">
                                <p class="total_pay">00,000원</p>
                            </div>
                        </div>
                    </div>

                    <div class="deliveryModal_edit_box ">
                        <button type="button">취소</button>
                        <button type="button">신청하기</button>
                    </div>
                </div>

            </div>
            <div class="modal-back"></div>
        </div>


        <!--        정기 배송 서비스 신청 세부사항 변경-->
<!--        <div class="account_modal edit_service_modal display_none">-->
<!--            <div class="modal-box">-->
<!--                <div class="close-btn"></div>-->
<!--                <h3>정기 배송 서비스 신청</h3>-->
<!--                <div class="info_join_section service_section">-->
<!--                    <div class="title_join_info">-->
<!--                        <p class="title">정기 배송 서비스 세부사항 변경</p>-->
<!--                    </div>-->
<!--                    <div class="content_info">-->
<!---->
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>포토북 크기</span></div>-->
<!--                            <div class="info info_line">-->
<!---->
<!--                                <input id="photobook1" type="radio" name="photobook" class="radio_style" checked>-->
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
<!--                                <input id="photoAmount1" type="radio" name="photo_amount" class="radio_style" checked>-->
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
<!--                                <input id="addr1" type="radio" name="addr" class="radio_style" checked>-->
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
<!--                                <input id="month1" type="radio" name="monthly" class="radio_style" checked>-->
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
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>선호하는 디자인</span></div>-->
<!--                            <div class="info info_line">-->
<!--                                <div>-->
<!--                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="modern" checked>-->
<!--                                    <label for="modern" class="chkShape"></label>-->
<!--                                    <label for="modern" class="chkTxt">모던(Modern)</label>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="lovely">-->
<!--                                    <label for="lovely" class="chkShape"></label>-->
<!--                                    <label for="lovely" class="chkTxt">러블리(Lovely)</label>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="warm">-->
<!--                                    <label for="warm" class="chkShape"></label>-->
<!--                                    <label for="warm" class="chkTxt">따뜻(Warm)</label>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="natural">-->
<!--                                    <label for="natural" class="chkShape"></label>-->
<!--                                    <label for="natural" class="chkTxt">자연(Natural)</label>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="lomo">-->
<!--                                    <label for="lomo" class="chkShape"></label>-->
<!--                                    <label for="lomo" class="chkTxt">인물(Lomo)</label>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="monotone">-->
<!--                                    <label for="monotone" class="chkShape"></label>-->
<!--                                    <label for="monotone" class="chkTxt">흑백(Monotone)</label>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item_info_join">-->
<!--                            <div class="lb"><span>결제 수단</span></div>-->
<!--                            <div class="info info_line">-->
<!---->
<!--                                <input id="pay1" type="radio" name="pay_method" class="radio_style" checked>-->
<!--                                <label for="pay1" class="radio">신용카드</label>-->
<!---->
<!--                                <input id="pay2" type="radio" name="pay_method" class="radio_style">-->
<!--                                <label for="pay2" class="radio">실시간 계좌이체</label>-->
<!---->
<!--                                <input id="pay3" type="radio" name="pay_method" class="radio_style">-->
<!--                                <label for="pay3" class="radio">무통장입금</label>-->
<!---->
<!--                                <input id="pay4" type="radio" name="pay_method" class="radio_style">-->
<!--                                <label for="pay4" class="radio">휴대폰 결제</label>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!---->
<!--                    <div class="deliveryModal_edit_box ">-->
<!--                        <button type="button">취소</button>-->
<!--                        <button type="button">신청하기</button>-->
<!--                    </div>-->
<!--                </div>-->
<!---->
<!--            </div>-->
<!--            <div class="modal-back"></div>-->
<!--        </div>-->
<!--        정기 배송 서비스 해지-->
        <div class="account_modal edit_service_modal display_none">
            <div class="modal-box">
                <div class="close-btn"></div>
                <h3>정기 배송 서비스 해지</h3>

                <div class="modal_contents_box">
                    <p class="modal_subtitle">해지 사유</p>
                    <p class="sub_ps">
                        서비스 해지 사유를 입력해주세요.<br/>
                        보다 더 나은 서비스로 찾아뵙도록 하겠습니다.
                    </p>
                    <div class="contents_detail">
                        <div class="reason-list">
                            <div class="reason-list-item">
                                <input id="reason1" type="radio" name="reason" class="radio_style">
                                <label for="reason1" class="radio">다른 아이디로 변경</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason2" type="radio" name="reason" class="radio_style">
                                <label for="reason2" class="radio">이용 가능한 상품 및 서비스 부족</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason3" type="radio" name="reason" class="radio_style">
                                <label for="reason3" class="radio">이벤트 참여 목정</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason4" type="radio" name="reason" class="radio_style">
                                <label for="reason4" class="radio">주문취소, 고객센터 응대 불만</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason5" type="radio" name="reason" class="radio_style">
                                <label for="reason5" class="radio">타 사이트 이용</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason6" type="radio" name="reason" class="radio_style">
                                <label for="reason6" class="radio">사이트 에러 및 시스템 불만</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason7" type="radio" name="reason" class="radio_style">
                                <label for="reason7" class="radio">자주 이용하지 않음</label>
                            </div>
                            <div class="reason-list-item">
                                <input id="reason8" type="radio" name="reason" class="radio_style">
                                <label for="reason8" class="radio">기타</label>
                            </div>
                            <div class="reason-list-item">
                            </div>
                        </div>
                        <textarea name="" id="" placeholder="기타 사유를 입력해주세요."></textarea>

                    </div>
                    <div class="deliveryModal_edit_box ">
                        <button type="button">취소</button>
                        <button type="button">해지하기</button>
                    </div>
                </div>


            </div>
            <div class="modal-back"></div>
        </div>
        <div class="account_modal edit_service_complete display_none">
            <div class="modal-box">
                <div class="close-btn"></div>

                <p><span>정기배송 서비스 해지가 완료</span>되었습니다.<br/>이용해주셔서 감사합니다.</p>
                <button type="button">닫기</button>
            </div>
            <div class="modal-back"></div>
        </div>

<!--        정기배송 서비스 사용내역-->
        <div class="service_history_modal display_none">
            <div class="modal_box">
                <div class="close-btn"></div>
                <p class="modal_title">정기배송 서비스 사용내역</p>


                <div class="m_service_history">
                    <div class="service_item">
                        <img src="/assets/images/mypage/img.png" alt="">
                    </div>
                    <div class="service_item_detail">
                        <p class="item_useDay">2019.01.14</p>
                        <p class="item_name">디자이너 포토북</p>
                        <p class="item_option">옵션 : <span>소프트커버/유광코팅/무광지</span></p>
                        <div class="item_addi">
                            <img src="/assets/images/mypage/delivery_small.png" alt="">
                            <p>(<span>10</span>% 할인)</p>
                        </div>
                    </div>
                    <p class="item_price">11,270원</p>
                </div>


                <div class="modal_table">
                    <div class="modal_thead">
                        <div class="modal_trow">
                            <div class="cell col1">사용일</div>
                            <div class="cell col2">상품 정보</div>
                            <div class="cell col3">주문일/주문번호</div>
                            <div class="cell col4">배송 상태</div>
                            <div class="cell col5">수량/금액</div>
                        </div>
                    </div>
                    <div class="modal_tbody">
                        <div class="modal_trow">
                            <div class="cell col1">2019.01.14</div>
                            <div class="cell col2">
                                <div class="service_item_box">
                                    <div class="service_item">
                                        <img src="/assets/images/mypage/img.png" alt="">
                                    </div>
                                    <div class="service_item_detail">
                                        <p class="item_name">디자이너 포토북</p>
                                        <p class="item_option">옵션 : <span>소프트커버/유광코팅/무광지</span></p>
                                        <div class="item_addi">
                                            <img src="/assets/images/mypage/delivery_small.png" alt="">
                                            <p>(<span>10</span>% 할인)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cell col3">
                                <p>2019.01.16</p>
                                <p>(<span>40112389</span>)</p>
                            </div>
                            <div class="cell col4">
                                <p>배송완료</p>
                                <a href="#">배송조회</a>
                            </div>
                            <div class="cell col5">
                                <p>20.500원</p>
                                <p>(<span>1</span>)개</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="history-paging-box">
                    <button class="history-prev"></button>
                    <ul>
                        <li class="paging-active"><a href="">1</a></li>

                    </ul>
                    <button class="history-next"></button>
                </div>
                <button type="button" class="modal_close_btn">닫기</button>
            </div>
            <div class="modal-back"></div>
        </div>
        <!--        정기 배송 서비스 신청-->
        <div class="account_modal edit_service_modal display_none">
            <div class="modal-box">
                <div class="close-btn"></div>
                <h3>정기 배송 서비스 신청</h3>
                <div class="info_join_section service_section">
                    <div class="title_join_info">
                        <p class="title">정기 배송 서비스 신청</p>
                    </div>
                    <div class="content_info">

                        <div class="item_info_join">
                            <div class="lb"><span>포토북 크기</span></div>
                            <div class="info info_line">

                                <input id="photobook1" type="radio" name="photobook" class="radio_style">
                                <label for="photobook1" class="radio">(소)13x19</label>

                                <input id="photobook2" type="radio" name="photobook" class="radio_style">
                                <label for="photobook2" class="radio">(중)14.3x20</label>

                                <input id="photobook3" type="radio" name="photobook" class="radio_style">
                                <label for="photobook3" class="radio">(대)15.3x22</label>

                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>사진매수</span></div>
                            <div class="info info_line">

                                <input id="photoAmount1" type="radio" name="photo_amount" class="radio_style">
                                <label for="photoAmount1" class="radio">30매</label>

                                <input id="photoAmount2" type="radio" name="photo_amount" class="radio_style">
                                <label for="photoAmount2" class="radio">50매</label>

                                <input id="photoAmount3" type="radio" name="photo_amount" class="radio_style">
                                <label for="photoAmount3" class="radio">100매</label>

                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>주소지</span></div>
                            <div class="info info_line">

                                <input id="addr1" type="radio" name="addr" class="radio_style">
                                <label for="addr1" class="radio">본인</label>

                                <input id="addr2" type="radio" name="addr" class="radio_style">
                                <label for="addr2" class="radio">선물</label>
                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>정기 결제기간</span></div>
                            <div class="info info_line">

                                <input id="month1" type="radio" name="monthly" class="radio_style">
                                <label for="month1" class="radio">3개월(10%할인)</label>

                                <input id="month2" type="radio" name="monthly" class="radio_style">
                                <label for="month2" class="radio">6개월(20%할인)</label>

                                <input id="month3" type="radio" name="monthly" class="radio_style">
                                <label for="month3" class="radio">1년(30%할인)</label>

                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>선호하는 디자인</span></div>
                            <div class="info info_line">
                                <div>
                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="modern">
                                    <label for="modern" class="chkShape"></label>
                                    <label for="modern" class="chkTxt">모던(Modern)</label>
                                </div>
                                <div>
                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="lovely">
                                    <label for="lovely" class="chkShape"></label>
                                    <label for="lovely" class="chkTxt">러블리(Lovely)</label>
                                </div>
                                <div>
                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="warm">
                                    <label for="warm" class="chkShape"></label>
                                    <label for="warm" class="chkTxt">따뜻(Warm)</label>
                                </div>
                                <div>
                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="natural">
                                    <label for="natural" class="chkShape"></label>
                                    <label for="natural" class="chkTxt">자연(Natural)</label>
                                </div>
                                <div>
                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="lomo">
                                    <label for="lomo" class="chkShape"></label>
                                    <label for="lomo" class="chkTxt">인물(Lomo)</label>
                                </div>
                                <div>
                                    <input type="checkbox" class="chkbox chkbox_sm" name="design" id="monotone">
                                    <label for="monotone" class="chkShape"></label>
                                    <label for="monotone" class="chkTxt">흑백(Monotone)</label>
                                </div>
                            </div>
                        </div>
                        <div class="item_info_join">
                            <div class="lb"><span>결제 수단</span></div>
                            <div class="info info_line">

                                <input id="pay1" type="radio" name="pay_method" class="radio_style" checked>
                                <label for="pay1" class="radio">신용카드</label>

                                <input id="pay2" type="radio" name="pay_method" class="radio_style">
                                <label for="pay2" class="radio">실시간 계좌이체</label>

                                <input id="pay3" type="radio" name="pay_method" class="radio_style">
                                <label for="pay3" class="radio">무통장입금</label>

                                <input id="pay4" type="radio" name="pay_method" class="radio_style">
                                <label for="pay4" class="radio">휴대폰 결제</label>
                            </div>
                        </div>
                    </div>

                    <div class="deliveryModal_edit_box ">
                        <button type="button">취소</button>
                        <button type="button">신청하기</button>
                    </div>
                </div>

            </div>
            <div class="modal-back"></div>
        </div>

    </div>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>