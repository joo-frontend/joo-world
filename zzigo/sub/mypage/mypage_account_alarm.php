<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="">
        <div class="mypage-wrap mypage_alarm_wrap">

            <div class="m_mypage_nav">
                <ul>
                    <li class="">
                        <a href="./mypage_order.php">주문관리</a>
                    </li>
                    <li class="sub_ul">
                        <a href="#">앨범 컨펌</a>
                        <ul class="m_sub_nav">
                            <li class="">
                                <a href="./mypage_album_register.php">앨범 컨펌내역</a>
                            </li>
                            <li>
                                <a href="">완료된 앨범</a>
                            </li>
                            <li>
                                <a href="">백업</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sub_ul active">
                        <a href="#">계정 정보관리</a>
                        <ul class="m_sub_nav">
                            <li class="">
                                <a href="./mypage_account_password.php">비밀번호 변경</a>
                            </li>
                            <li class="designer_ul active" >
                                <a href="#">디자이너 등록하기</a>
                                <ul class="designer_sub active">
                                    <li>
                                        <a href="./mypage_album_register.php">-앨범 디자인등록</a>
                                    </li>
                                    <li>
                                        <a href="./mypage_account01.php">-의뢰리스트</a>
                                    </li>
                                    <li>
                                        <a href="./mypage_account02.php">-계좌확인</a>
                                    </li>
<!--                                    <li class="active">-->
<!--                                        <a href="./mypage_account_alarm.php">-알림센터</a>-->
<!--                                    </li>-->
                                    <li>
                                        <a href="./mypage_rating.php">-등급제도</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="./mypage_leave_membership.php">탈퇴하기</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">알림 설정</a>
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
                                <li class="depth_menu2">
                                    <a href="./mypage_account_alarm.php" class="active">-알림센터</a>
                                </li class="depth_menu2">
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
                </div>
                <div class="account-section">
                    <div class="account-area">
                        <div class="alarm-subtitle">
                            <h2>알림 설정</h2>
                        </div>

                        <div class="alarm-box">
                            <ul>
                                <li>
                                    <div>
                                        <p>자동선별 컨펌요청 알림</p>
                                        <div class="alarm_line">
                                            <p>고객 컨펌 알림</p>
                                            <label class="switch">
                                                <input type="checkbox" checked>
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>주문 관련 알림</p>
                                        <div class="alarm_line">
                                            <p>새 주문서 알림</p>
                                            <label class="switch">
                                                <input type="checkbox">
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                        <div class="alarm_line">
                                            <p>안 읽은 주문서 알림</p>
                                            <label class="switch">
                                                <input type="checkbox">
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                        <div class="alarm_line">
                                            <p>별점 평가 알림</p>
                                            <label class="switch">
                                                <input type="checkbox">
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                        <div class="alarm_line">
                                            <p>미등록 페이지 알림</p>
                                            <label class="switch">
                                                <input type="checkbox">
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>출금 관련 알림</p>
                                        <div class="alarm_line">
                                            <p>출금 시 알림</p>
                                            <label class="switch">
                                                <input type="checkbox">
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="mypage-btn-box">
                                <button type="button" id="reset" class="prev">초기화</button>
                                <button type="submit" id="setting" class="next">설정</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    </form>

<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>