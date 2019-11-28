<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>

    <div class="mypage-wrap mypage_account_wrap">
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
                <li class="active">
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
        <div class="m_album_subNav">
            <ul>
                <li>
                    <a href="./mypage_album_register.php">앨범 디자인등록</a>
                </li>
                <li>
                    <a href="./mypage_account01.php">의뢰리스트</a>
                </li>
                <li>
                    <a href="./mypage_account02.php">계좌확인</a>
                </li>
                <li class="active">
                    <a href="./mypage_rating.php">등급제도</a>
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
                    <li class="depth_menu1 album ">
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
                            <li class="depth_menu2"><a href="./mypage_leave_membership.php" class="active">탈퇴하기</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 account li_list_bottom focus">
                        <a href="#" class="menu1">디자이너 등록</a>
                        <ul class="menu_sub_ul focus">
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
                                <a href="./mypage_rating.php" class="active">-등급제도</a>
                            </li>
                        </ul>
                    </li>
                    <li class="depth_menu1 li_list_bottom">
                        <a href="./mypage_delivery.php" class="menu1">정기배송 서비스</a>
                    </li>
                    <li class="depth_menu1 li_list_bottom">
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

        <div class="right_content">
            <div class="account-main-section rating_main_section">
                <div class="account-area">
                    <div class="profile_top_box">
                        <div class="profile-img-box">
                            <div class="profile-img">
                                <button type="button" class="profile-setting-btn"></button>
                            </div>
                        </div>

                        <div class="profile_detail_box">
                            <p>
                            <span class="position">
                                <img src="/assets/images/mypage/Lv1_big.png" alt="">
                                Designer.
                            </span>
                                <span class="designer_name">히히히</span>
                                [<span class="rank">인턴</span>]
                            </p>
                            <p class="ps_state_box">
                                박기훈 고객님의 디자이너 등급은 <span>인턴사원</span>입니다.
                            </p>

                            <div class="profile_state">
                                <p>현재의뢰 <span class="active">1</span>건</p>
                                <p>종료의뢰 <span>1</span>건</p>
                                <p>판매자순위 <span>2567</span>건</p>

                                <div class="state_edit_box">
                                    <a href=""><button type="" class="state_btn profile_edit_btn">디자이너 정보 수정하기</button></a>
                                    <a href=""><button type="" class="state_btn state_p_btn">1:1의뢰 문의 허용중</button></a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="account-section rating_section">
                <div class="account-area">
                    <div class="rating_subtitle">
                        <h2>등급제도</h2>
                    </div>

                    <div class="rating_box">

                        <div class="rating_left">
                            디자이너 등급이란?
                            <p>디자이너 등록 시 얻게되는 등급제도이며<br/>판매수량에 따라 등급이 업그레이드 되며 디자인수익금 배분도 달라집니다.</p>
                        </div>
                        <div class="rating_right">
                            <div class="rating_table">
                                <div class="rating_thead">
                                    <div class="rating_row">
                                        <div class="cell col1">등급 심볼</div>
                                        <div class="cell col2">직급명</div>
                                        <div class="cell col3">판매횟수</div>
                                        <div class="cell col4">판매수익금</div>
                                        <div class="cell col5">수익금(%)</div>
                                    </div>
                                </div>
                                <div class="rating_tbody">
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv1.png" alt="">
                                        </div>
                                        <div class="cell col2">대표</div>
                                        <div class="cell col3">500회</div>
                                        <div class="cell col4">500만원</div>
                                        <div class="cell col5">50</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv2.png" alt="">
                                        </div>
                                        <div class="cell col2">이사</div>
                                        <div class="cell col3">300회</div>
                                        <div class="cell col4">300만원</div>
                                        <div class="cell col5">30</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv3.png" alt="">
                                        </div>
                                        <div class="cell col2">본부장</div>
                                        <div class="cell col3">200회</div>
                                        <div class="cell col4">200만원</div>
                                        <div class="cell col5">20</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv4.png" alt="">
                                        </div>
                                        <div class="cell col2">부장</div>
                                        <div class="cell col3">100회</div>
                                        <div class="cell col4">100만원</div>
                                        <div class="cell col5">14</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv5.png" alt="">
                                        </div>
                                        <div class="cell col2">과장</div>
                                        <div class="cell col3">30회</div>
                                        <div class="cell col4">30만원</div>
                                        <div class="cell col5">10</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv6.png" alt="">
                                        </div>
                                        <div class="cell col2">대리</div>
                                        <div class="cell col3">10회</div>
                                        <div class="cell col4">5만원</div>
                                        <div class="cell col5">8</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv7.png" alt="">
                                        </div>
                                        <div class="cell col2">주임</div>
                                        <div class="cell col3">5회</div>
                                        <div class="cell col4">-</div>
                                        <div class="cell col5">5</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv8.png" alt="">
                                        </div>
                                        <div class="cell col2">신입</div>
                                        <div class="cell col3">1회</div>
                                        <div class="cell col4">-</div>
                                        <div class="cell col5">3</div>
                                    </div>
                                    <div class="rating_row">
                                        <div class="cell col1">
                                            <img src="/assets/images/mypage/Lv9.png" alt="">
                                        </div>
                                        <div class="cell col2">인턴</div>
                                        <div class="cell col3">-</div>
                                        <div class="cell col4">-</div>
                                        <div class="cell col5">-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>


        <div class="account_modal display_none">
            <div class="modal-box">
                <div class="close-btn"></div>
                <h3>출금신청 확인서</h3>
                <div class="account_line">
                    <div class="line_th">출금할 금액</div>
                    <div class="line_td">
                        <input type="text">
                        <br/>
                        <div class="all_withdraw_box">
                            <input type="checkbox" class="chkbox chkbox_sm" name="all_withdraw" id="allWithdraw">
                            <label for="allWithdraw" class="chkShape"></label>
                            <label for="allWithdraw" class="chkTxt">전액출금</label>
                        </div>
                    </div>
                </div>

                <div class="account_line">
                    <div class="line_th">출금할 금액</div>
                    <div class="line_td">
                        <p>우리은행 / 110784561234</p>
                    </div>
                </div>

                <div class="account_line">
                    <div class="line_th">예금주</div>
                    <div class="line_td">
                        <p>박기훈</p>
                    </div>
                </div>

                <div class="account_line">
                    <div class="line_th">비밀번호 확인</div>
                    <div class="line_td">
                        <input type="password" name="account_password">
                    </div>
                </div>
                <div class="btn_box">
                    <a href="" ><button id="orderCancelYes" type="button">확인</button></a>
                    <a href=""><button id="orderCancelNo" class="" type="button">마이페이지로</button></a>
                </div>
            </div>
            <div class="modal-back"></div>
        </div>
    </div>


<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>