<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="">
        <div class="mypage-wrap">

            <div class="m_mypage_nav01">
                <ul>
                    <li>
                        <a href="./mypage_order.php">주문관리</a>
                    </li>
                    <li>
                        <a href="./mypage_album.php">앨범 컨펌</a>
                    </li>
                    <li class="active">
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
            <div class="m_album_subNav">
                <ul>
                    <li class="active">
                        <a href="./mypage_account_password.php">비밀번호변경</a>
                    </li>
                    <li>
                        <a href="./mypage_leave_membership.php">탈퇴하기</a>
                    </li>
                </ul>
            </div>

            <div class="left_content">
                <div class="file_folder_menu">
                    <p class="menu_title">마이페이지</p>
                    <ul>
                        <li class="depth_menu1 li_list_bottom">
                            <a href="./mypage_order.php" class="menu1">주문 관리</a>
                        </li>
                        <li class="depth_menu1 album li_list_bottom ">
                            <a href="#" class="menu1 ">앨범 컨텀</a>
                            <ul class="menu_sub_ul">
                                <li class="depth_menu2"><a href="./mypage_album.php">앨범 컨펌내역</a></li>
                                <li class="depth_menu2"><a href="#">완료된 앨범</a></li>
                                <li class="depth_menu2"><a href="#">백업</a></li>
                            </ul>
                        </li>
                        <li class="depth_menu1 account li_list_bottom focus">
                            <a href="#" class="menu1">계정 정보관리</a>
                            <ul class="menu_sub_ul">
                                <li class="depth_menu2"><a href="./mypage_account_password.php" class="active">비밀번호 변경</a></li>
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
                <div class="account-section">
                    <div class="mypage-title-h2">
                        <h2>비밀번호 변경</h2>
                    </div>
                    <div class="account-area">
                        <div class="account-password-box">
                            <div class="password-input-line">
                                <div>
                                    <span class="star">*</span>
                                    현재 비밀번호
                                </div>
                                <div>
                                    <input type="text"/>
                                    <div class="password-validation checked">안전</div>
                                </div>
                            </div>
                            <div class="password-input-line">
                                <div>
                                    <span class="star">*</span>
                                    새 비밀번호
                                </div>
                                <div>
                                    <input type="text"/>
                                    <div class="password-validation">안전</div>
                                </div>
                            </div>
                            <div class="password-input-line">
                                <div>
                                    <span class="star">*</span>
                                    비밀번호 확인
                                </div>
                                <div>
                                    <input type="text"/>
                                    <div class="password-validation">일치</div>
                                </div>
                            </div>
                        </div>

                        <div class="account-password-box">
                            <div class="password-prevent">
                                <p>아래 보이는대로 입력해주세요.</p>
                                <div class="prevent-char-box">
                                    <input type="text" class="char-input-box" value="test" readonly/>
                                    <div class="addi-box">
                                        <button class="refresh">새로고침</button>
                                        <button class="voice">음성으로 듣기</button>
                                    </div>
                                </div>
                                <input type="text" class="auto-prevent" placeholder="자동입력 방지문자"/>
                            </div>
                        </div>

                        <p class="m_password_notice">
                            6-16자의 영문+숫자 조합으로 만드세요. (대/소문자 구분, 공백은 입력
                            불가)
                            <br/><br/>
                            다른 사람이 쉽게 알아낼 수 있는 아이디, 전화번호, 생일 등 개인정보와
                            관련된 것, 연속된 숫자/문자 등은 사용하지 않는 것이 좋습니다.
                            <br/><br/>
                            비밀번호에 특수문자를 추가하여 사용하시면 기억하기도 쉽고, 비밀
                            번호 안전도가 높아집니다.
                        </p>
                    </div>

                    <div class="account-edit-btn-box">
                        <button class="account-edit-btn edit-btn" type="submit">확인</button>
                        <button class="account-edit-btn" type="button">취소</button>
                    </div>
                </div>

            </div>

        </div>
    </form>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>