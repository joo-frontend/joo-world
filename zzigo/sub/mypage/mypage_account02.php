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
                    <a href="./mypage_designer.php">정기배송서비스</a>
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
                <li class="active">
                    <a href="./mypage_account02.php">계좌확인</a>
                </li>
                <li>
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
                                <a href="./mypage_account02.php" class="active">-계좌확인</a>
                            </li class="depth_menu2">
<!--                            <li class="depth_menu2">-->
<!--                                <a href="./mypage_account_alarm.php">-알림센터</a>-->
<!--                            </li class="depth_menu2">-->
                            <li class="depth_menu2">
                                <a href="./mypage_rating.php">-등급제도</a>
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
            <div class="account-main-section">
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

                <div class="account-list-box">
                    <div class="account-list-content">
                        <h3>계좌확인</h3>
                        <div class="account_list_table og_list_table">
                            <div class="account_list_thead">
                                <div class="account_list_row">
                                    <div class="account_list_col1 cell">No</div>
                                    <div class="account_list_col2 cell">내역</div>
                                    <div class="account_list_col3 cell">날짜</div>
                                    <div class="account_list_col4 cell">거래액</div>
                                    <div class="account_list_col5 cell">거래 후 잔액</div>
                                </div>
                            </div>

                            <div class="account_list_tbody">
                                <div class="account_list_row">
                                    <div class="account_list_col1 cell">3</div>
                                    <div class="account_list_col2 cell">입금</div>
                                    <div class="account_list_col3 cell">2019-01-10</div>
                                    <div class="account_list_col4 cell point_color">204,600</div>
                                    <div class="account_list_col5 cell">204,600</div>
                                </div>
                                <div class="account_list_row">
                                    <div class="account_list_col1 cell">2</div>
                                    <div class="account_list_col2 cell">입금</div>
                                    <div class="account_list_col3 cell">2019-01-10</div>
                                    <div class="account_list_col4 cell">204,600</div>
                                    <div class="account_list_col5 cell">204,600</div>
                                </div>
                                <div class="account_list_row">
                                    <div class="account_list_col1 cell">1</div>
                                    <div class="account_list_col2 cell">입금</div>
                                    <div class="account_list_col3 cell">2019-01-10</div>
                                    <div class="account_list_col4 cell point_color">204,600</div>
                                    <div class="account_list_col5 cell">204,600</div>
                                </div>
                            </div>
                        </div>

                        <div class="m_list_table account_confirm">
                            <div class="account_list_line">
                                <div class="num_box">
                                    3
                                </div>
                                <div class="line_left">
                                    <p>2019.01월 정산내역</p>
                                    <p>2019-01-10</p>
                                </div>
                                <div class="line_right">
                                    <p class="pay_in">입금 <span>206,400</span></p>
                                    <p>잔액 <span>206,400</span></p>
                                </div>
                            </div>
                            <div class="account_list_line">
                                <div class="num_box">
                                    2
                                </div>
                                <div class="line_left">
                                    <p>계좌출금</p>
                                    <p>2018.12-11</p>
                                </div>
                                <div class="line_right">
                                    <p class="pay_out">출근 <span>98,300</span></p>
                                    <p>잔액 <span>0</span></p>
                                </div>
                            </div>
                            <div class="account_list_line">
                                <div class="num_box">
                                    1
                                </div>
                                <div class="line_left">
                                    <p>2018.12월 정산내역</p>
                                    <p>2018.12-10</p>
                                </div>
                                <div class="line_right">
                                    <p class="pay_in">입금 <span>98,300</span></p>
                                    <p>잔액 <span>98,300</span></p>
                                </div>
                            </div>

                            <p class="account_confirm_notice">모든 수익금은 매월 10일에 정산하여 일괄 지급됩니다.</p>
                        </div>

                        
                        <div class="withdraw_btn_box">
                            <button type="button">출금신청</button>
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
                    <a href=""><button id="orderCancelNo" class="" type="button">취소</button></a>
                    <a href="" ><button id="orderCancelYes" type="button">전송</button></a>
                </div>
            </div>
            <div class="modal-back"></div>
        </div>
    </div>


<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>