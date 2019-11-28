<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="">
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
                    <li class="active">
                        <a href="./mypage_account01.php">의뢰리스트</a>
                    </li>
                    <li>
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
                                    <a href="./mypage_account01.php" class="active">-의뢰리스트</a>
                                </li>
                                <li class="depth_menu2">
                                    <a href="./mypage_account02.php">-계좌확인</a>
                                </li class="depth_menu2">
<!--                                <li class="depth_menu2">-->
<!--                                    <a href="./mypage_account_alarm.php">-알림센터</a>-->
<!--                                </li class="depth_menu2">-->
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
                <div class="m_mypage_title">
                    <h2>디자이너 등록하기</h2>
                </div>

                <div class="account-area waiting">
                    <div class="profile_top_box">
                        <div class="profile-img-box">
                            <div class="profile-img">
                                <button type="button" class="profile-setting-btn"></button>
                            </div>
                        </div>

                        <div class="profile_detail_box">
                            <p><span class="position">Designer.</span><span class="designer_name">히히히</span>[<span>디자이너 심사 승인 대기중</span>]</p>
                            <p class="ps_state_box">현재 디자이너 심사중입니다.</p>
                        </div>
                    </div>

                </div>



                <div class="account-area waiting_finished">
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
                        <h3>의뢰리스트</h3>
                        <div class="list-table og_list_table">
                            <div class="list-thead">
                                <div class="list-row">
                                    <div class="list-col1 cell">의뢰자명</div>
                                    <div class="list-col2 cell">의뢰명</div>
                                    <div class="list-col3 cell">의뢰일</div>
                                    <div class="list-col4 cell">파일 크기</div>
                                    <div class="list-col5 cell">의뢰현황</div>
                                </div>
                            </div>

                            <div class="list-tbody">
                                <div class="list-row">
                                    <div class="list-col1 cell">홍길동</div>
                                    <div class="list-col2 cell">웨딩스낵북 의뢰</div>
                                    <div class="list-col3 cell">2019.01.01</div>
                                    <div class="list-col4 cell">1.2GB</div>
                                    <div class="list-col5 cell">미확인</div>
                                </div>
                                <div class="list-row">
                                    <div class="list-col1 cell">홍길동</div>
                                    <div class="list-col2 cell">웨딩스낵북 의뢰</div>
                                    <div class="list-col3 cell">2019.01.01</div>
                                    <div class="list-col4 cell">1.2GB</div>
                                    <div class="list-col5 cell">미확인</div>
                                </div>
                                <div class="list-row">
                                    <div class="list-col1 cell">홍길동</div>
                                    <div class="list-col2 cell">웨딩스낵북 의뢰</div>
                                    <div class="list-col3 cell">2019.01.01</div>
                                    <div class="list-col4 cell">1.2GB</div>
                                    <div class="list-col5 cell">미확인</div>
                                </div>
                            </div>
                        </div>
                        <div class="m_list_table">
                            <div class="account_list_line">
                                <div class="line_left">
                                    <p>웨딩스냅북 의뢰합니다</p>
                                    <p>abced</p>
                                </div>
                                <div class="line_right">
                                    <p>2018.12.31</p>
                                    <a href="">확인</a>
                                </div>
                            </div>
                            <div class="account_list_line">
                                <div class="line_left">
                                    <p>웨딩스냅북 의뢰합니다</p>
                                    <p>abced</p>
                                </div>
                                <div class="line_right">
                                    <p>2018.12.31</p>
                                    <a href="">확인</a>
                                </div>
                            </div>
                            <div class="account_list_line">
                                <div class="line_left">
                                    <p>웨딩스냅북 의뢰합니다</p>
                                    <p>abced</p>
                                </div>
                                <div class="line_right">
                                    <p>2018.12.31</p>
                                    <a href="">확인</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            </div>
        </div>
    </form>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>