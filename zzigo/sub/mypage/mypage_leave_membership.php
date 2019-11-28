<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="">
        <div class="mypage-wrap">

<!--            <div class="m_mypage_nav">-->
<!--                <ul>-->
<!--                    <li class="">-->
<!--                        <a href="./mypage_order.php">주문관리</a>-->
<!--                    </li>-->
<!--                    <li class="sub_ul">-->
<!--                        <a href="#">앨범 컨펌</a>-->
<!--                        <ul class="m_sub_nav">-->
<!--                            <li class="">-->
<!--                                <a href="./mypage_album_register.php">앨범 컨펌내역</a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a href="">완료된 앨범</a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a href="">백업</a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li class="sub_ul active">-->
<!--                        <a href="#">계정 정보관리</a>-->
<!--                        <ul class="m_sub_nav">-->
<!--                            <li class="">-->
<!--                                <a href="./mypage_account_password.php">비밀번호 변경</a>-->
<!--                            </li>-->
<!--                            <li class="designer_ul" >-->
<!--                                <a href="#">디자이너 등록하기</a>-->
<!--                                <ul class="designer_sub">-->
<!--                                    <li>-->
<!--                                        <a href="./mypage_album_register.php">-앨범 디자인등록</a>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <a href="./mypage_account01.php">-의뢰리스트</a>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <a href="./mypage_account02.php">-계좌확인</a>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <a href="./mypage_rating.php">-등급제도</a>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </li>-->
<!--                            <li class="active">-->
<!--                                <a href="./mypage_leave_membership.php">탈퇴하기</a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <a href="">알림 설정</a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
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
                        <a href="./mypage_account_password.php">비밀번호변경</a>
                    </li>
                    <li class="active">
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
                                <li class="depth_menu2"><a href="./mypage_account_password.php">비밀번호 변경</a></li>
                                <li class="depth_menu2"><a href="./mypage_leave_membership.php" class="active">탈퇴하기</a></li>
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

                    <div class="">
                        <div class="leave_subtitle">
                            <h3>
                                계정탈퇴 확인사항
                            </h3>
                        </div>
                        <div class="leave_checklist_box">
                            <ul class="leave_checklist">
                                <li>
                                    <div>
                                        <p>재가입하셔도 개인정보가 복원되지 않습니다.</p>
                                        <p>찍오에 가지고 계신 주문거래 내역, 편집중인 정보, 캐쉬, 쿠폰 등의 혜택이 자동삭제 되며 재가입 하실 경우에도 복원되지 않습니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>일정기간 동안 회원님의 정보가 보관됩니다.</p>
                                        <p>전자상거래 소비자 보호 법률에 의거, 일정기간 동안 개인정보 등이 보존됩니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>탈퇴 후에는 서비스에 등록된 게시물이 삭제됩니다.</p>
                                        <p>회원님의 이용후기 등은 탈퇴 시 자동으로 삭제되며, 재가입 하실 경우에도 복원되지 않습니다.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="account-area">
                        <div class="leave_subtitle">
                            <h3>
                                찍오 계정탈퇴 사유
                            </h3>
                        </div>
                        <div class="leave-reason-box">
                            <div class="reason-list">
                                <div class="reason-list-item">
                                    <input id="reason1" type="radio" name="reason" class="radio_style">
                                    <label for="reason1" class="radio">다른 아이디로 변경</label>
                                </div>
                                <div class="reason-list-item">
                                    <input id="reason2" type="radio" name="reason" class="radio_style">
                                    <label for="reason2" class="radio">사이트 에러 및 시스템 불만</label>
                                </div>
                                <div class="reason-list-item">
                                    <input id="reason3" type="radio" name="reason" class="radio_style">
                                    <label for="reason3" class="radio">주문취소, 고객센터 응대 불만</label>
                                </div>
                            </div>
                            <div class="reason-list">
                                <div class="reason-list-item">
                                    <input id="reason4" type="radio" name="reason" class="radio_style">
                                    <label for="reason4" class="radio">이용 가능한 상품 및 서비스 부족</label>
                                </div>
                                <div class="reason-list-item">
                                    <input id="reason5" type="radio" name="reason" class="radio_style">
                                    <label for="reason5" class="radio">자주 이용하지 않음</label>
                                </div>
                                <div class="reason-list-item">
                                    <input id="reason6" type="radio" name="reason" class="radio_style">
                                    <label for="reason6" class="radio">타 사이트 이용</label>
                                </div>
                            </div>
                            <div class="reason-list">
                                <div class="reason-list-item">
                                    <input id="reason7" type="radio" name="reason" class="radio_style">
                                    <label for="reason7" class="radio">이벤트 참여 목적</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="mypage-btn-box">
                        <a href=""><button type="button" class="prev">취소</button></a>
                        <button type="submit" class="next">회원 탈퇴</button>
                    </div>
                </div>

            </div>
        </div>
    </form>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>