<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <div class="mypage-wrap">

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
                    <li class="depth_menu1 li_list_right">
                        <a href="./mypage_order.php" class="menu1">주문 관리</a>
                    </li>
                    <li class="depth_menu1 album li_list_right">
                        <a href="#" class="menu1 ">앨범 컨텀</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2"><a href="./mypage_album.php">앨범 컨펌내역</a></li>
                            <li class="depth_menu2"><a href="#">완료된 앨범</a></li>
                            <li class="depth_menu2"><a href="#">백업</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 account li_list_right focus">
                        <a href="#" class="menu1">계정 정보관리</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2"><a href="./mypage_account_password.php">비밀번호 변경</a></li>
                            <li class="depth_menu2"><a href="./mypage_designer.php" class="active">디자이너 등록하기</a></li>
                            <li class="depth_menu2"><a href="./mypage_leave_membership.php">탈퇴하기</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 li_list_right">
                        <a href="./mypage_delivery.php" class="menu1">정기배송 서비스</a>
                    </li>
                    <li class="depth_menu1 li_list_right">
                        <a href="./mypage_alarm.php" class="menu1">알림 설정</a>
                    </li>

                </ul>
            </div>
        </div>


        <div class="right_content">
        <div class="account-section">
            <div class="mypage-title-h2">
                <h2>디자이너 등록하기</h2>
                <div class="step-box">
                    <div class="step-01">01&nbsp;&nbsp;약관동의<span class="step-active-img"></span></div>
                    <div class="step-02">02&nbsp;&nbsp;정보입력<span class="step-active-img"></span></div>
                    <div class="step-03 step-active">03&nbsp;&nbsp;등록완료</div>
                </div>
            </div>

            <div class="account-area">

                <div class="account-register">
                    <div class="account-checked-box"></div>
                    <div class="account-register-msg">
                        <p>
                            축하합니다!<br/>
                            디자이너 등록이 완료되셨습니다.
                        </p>
                        <p>
                            디자이너 승인 심사 후<br/>
                            정식 디자이너 작업이 가능합니다.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mypage-btn-box">
                <a href=""><button type="button" class="prev">홈으로 가기</button></a>
                <a href="./mypage_album_register.php"><button type="button" class="next">프로필 보기</button></a>
            </div>
        </div>
        </div>

    </div>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>