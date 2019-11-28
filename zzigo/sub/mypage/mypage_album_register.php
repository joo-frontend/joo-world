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
                        <a href="./mypage_designer.php">정기배송서비스</a>
                    </li>
                    <li>
                        <a href="./mypage_alarm.php">알림 설정</a>
                    </li>
                </ul>
            </div>
            <div class="m_album_subNav">
                <ul>
                    <li class="active">
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
                                    <a href="./mypage_album_register.php" class="active">-앨범 디자인등록</a>
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
                <div class="account-area waiting_finished">
<!--                    <div class="m_mypage_title">-->
<!--                        <h2>디자이너 등록하기</h2>-->
<!--                    </div>-->

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
<!--                                    <a href=""><button type="" class="state_btn state_p_btn">1:1의뢰 문의 허용중</button></a>-->
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div class="account-section">
                    <div class="mypage-title-h2 borderBottom01">
                        <h2>내 앨범 디자인등록</h2>
                    </div>

                    <div class="album_register_box">
                        <div class="register_line">
                            <div class="line_title">앨범 디자인명</div>
                            <div class="line_contents">
                                <input type="text">
                            </div>
                        </div>
                        <div class="register_line">
                            <div class="line_title">
                                디자인 설명
                            </div>
                            <div class="line_contents">
                                <textarea name="" id="" >

                                </textarea>
                            </div>
                        </div>
                        <div class="register_line">
                            <div class="line_title">
                                포토북 디자인 등록
                            </div>
                            <div class="line_contents">
                                
                                <div class="filebox">
                                    <input class="upload-name" value="" disabled="disabled">
                                    <label for="ex_filename">찾아보기...</label>
                                    <input type="file" id="ex_filename" name="file_upload" class="upload-hidden">
                                </div>

                            </div>
                        </div><div class="register_line">
                            <div class="line_title">
                                연락처
                            </div>
                            <div class="line_contents">
                                <input type="text">
                            </div>
                        </div>

                    </div>



                </div>
                <div class="register_btn_box">
                    <button type="submit">등록하기</button>
                </div>
            </div>


            <div class="mypage_modal album_register_modal diplay_none">
                <div class="modal-box">
                    <div class="close-btn"></div>
                    <p class="main_txt"><span>내 앨범 디자인 등록</span>이<br/>
                    완료되었습니다.</p>

                    <p class="sub_txt"><span class="color_point">72시간 내</span>에 전달주신 디자인을 검토 후,<br/>
                    별도로 연락드리겠습니다.</p>
                    <div class="modal_control_box">
                        <a href="" ><button id="orderCancelYes" type="button">확인</button></a>
                    </div>
                </div>
                <div class="modal-back"></div>
            </div>


        </div>
    </form>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>