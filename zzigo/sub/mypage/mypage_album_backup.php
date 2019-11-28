<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <div class="mypage-wrap mypage_album">

        <!--   -->
        <div class="m_mypage_nav01">
            <ul>
                <li>
                    <a href="./mypage_order.php">주문관리</a>
                </li>
                <li class="active">
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
        <div class="m_album_subNav">
            <ul>
                <li>
                    <a href="./mypage_album.php">앨범 컨펌내역</a>
                </li>
                <li>
                    <a href="">완료된 앨범</a>
                </li>
                <li class="active">
                    <a href="./mypage_album_backup.php">백업</a>
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
                    <li class="depth_menu1 album li_list_right focus ">
                        <a href="#" class="menu1 ">앨범 컨텀</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2"><a href="./mypage_album.php" class="active">앨범 컨펌내역</a></li>
                            <li class="depth_menu2"><a href="#">완료된 앨범</a></li>
                            <li class="depth_menu2"><a href="#">백업</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 account li_list_right">
                        <a href="#" class="menu1">계정 정보관리</a>
                        <ul class="menu_sub_ul">
                            <li class="depth_menu2"><a href="./mypage_account_password.php">비밀번호 변경</a></li>
                            <li class="depth_menu2"><a href="./mypage_leave_membership.php">탈퇴하기</a></li>
                        </ul>
                    </li>
                    <li class="depth_menu1 account li_list_bottom">
                        <a href="#" class="menu1">디자이너</a>
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
                            <!--                        <li class="depth_menu2">-->
                            <!--                            <a href="./mypage_account_alarm.php">-알림센터</a>-->
                            <!--                        </li class="depth_menu2">-->
                            <li class="depth_menu2">
                                <a href="./mypage_rating.php">-등급제도</a>
                            </li>
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
            <div class="album-section">
                <div class="mypage-title-h2">
                    <h2>앨범 컨펌내역</h2>
                    <select name="sort_list" class="sort_list">
                        <option value="">정렬방식</option>
                        <option value="">앨범명</option>
                        <option value="">업로드 날짜</option>
                        <option value="">파일크기</option>
                        <option value="">진행현황</option>
                    </select>
                </div>

                <div class="album-area">
                    <div class="album-list-contents">
                        <div class="album-table">
                            <div class="album-thead">
                                <div class="album-list-row">
                                    <div class="cell col2">앨범명(오른차순)</div>
                                    <div class="cell col3">업로드 날짜</div>
                                    <div class="cell col4">파일 크기</div>
                                    <div class="cell col5"></div>
                                </div>
                            </div>
                            <div class="album-tbody">
                                <div class="album-list album-list-row">
                                    <div class="cell col2">웨딩앨범 의뢰</div>
                                    <div class="cell col3">2018.12.31</div>
                                    <div class="cell col4">10.56GB</div>
                                    <div class="cell col5">
                                        <a href="">
                                            <button type="button" class="design-view-btn">백업하기</button>
                                        </a>
                                    </div>
                                </div>
                                <div class="album-list album-list-row">
                                    <div class="cell col2">웨딩앨범 의뢰</div>
                                    <div class="cell col3">2018.12.31</div>
                                    <div class="cell col4">10.56GB</div>
                                    <div class="cell col5">
                                        <a href="">
                                            <button type="button" class="design-view-btn">백업하기</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    </div>
    <script>
        $(document).ready(function () {
            $('.album-list div:not(:last-child)').on('click',function() {
                var checkbox = $(this).parent().find('.checkbox-custom');
                checkbox.prop("checked", !checkbox.prop("checked"));
            });
            $('.album-list input').on('click',function() {
                var checkbox = $(this);
                checkbox.prop("checked", !checkbox.prop("checked"));
            });



            // $('.sub_ul').on('click', function() {
            //     $(this).addClass('active');
            // });
        })
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>