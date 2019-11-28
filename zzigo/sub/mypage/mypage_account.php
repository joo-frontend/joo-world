<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="">
        <div class="mypage-wrap">
            <div class="mypage-top-section">
                <h1 class="mypage-title-h1">마이페이지</h1>
                <div class="mypage-list">
                    <ul>
                        <li><a href="/sub/mypage/mypage_order.php" class="">주문관리</a></li>
                        <li><a href="/sub/mypage/mypage_album.php" >앨범 컨펌</a></li>
                        <li class="sub-nav">
                            <a href="/sub/mypage/mypage_account.php" class="a-active">계정 정보관리</a>
                            <ul class="sub-nav-ul">
                                <li><a href="/sub/mypage/mypage_account_password.php" class="">비밀번호 변경</a></li>
                                <li><a href="/sub/mypage/mypage_designer.php" >디자이너 계약 체결</a></li>
                                <li><a href="/sub/mypage/mypage_leave_membership.php">탈퇴하기</a></li>
                            </ul>
                        </li>
                        <li><a href="/sub/mypage/mypage_alarm.php" >알림 설정</a></li>
                    </ul>
                </div>
            </div>

            <div class="account-main-section">
                <div class="account-main-area">
                    <div class="profile-img-box">
                        <div class="profile-img">
                            <button type="button" class="profile-setting-btn"></button>
                        </div>
                    </div>
                    <div class="profile-detail-box">
                        <p><span class="profile-name">히히히</span>&nbsp;디자이너&nbsp;(총<span class="design-amount">2</span>개의 의뢰건수)</p>
                        <p>현재의뢰 <span>1</span>건</p>
                        <p>종료의뢰 <span>1</span>건</p>
                    </div>
                    <div class="profile-addi-box">
                        <button>디자이너정보 수정하기</button>
                        <div class="question-allow">
                            <p>1:1 의뢰 문의 허용중</p>
                        </div>
                    </div>
                </div>

                <div class="account-list-box">
                    <div class="account-list-nav">
                        <ul>
                            <a href=""><li class="li-active">의뢰리스트</li></a>
                            <a href=""><li class="">메세지</li></a>
                            <a href=""><li>포트폴리오</li></a>
                            <a href=""><li>계좌확인</li></a>
<!--                            <a href=""><li>알림센터</li></a>-->
                        </ul>
                    </div>
                    <div class="account-list-content">
                        <h3>의뢰 전체보기</h3>
                        <div class="list-table">
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

                        <div class="list-upload-box">
                            <button type="button">업로드하기</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </form>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>