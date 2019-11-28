<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');?>

    <div class="login_wra">
        <div class="login_area">
            <p class="title">회원가입이 성공적으로 완료되었습니다!<br>
                <span>로그인을 진행해주세요</span></p>
            <!-- login 실패시 'error_login' class 추가 -->
            <div class="section_login">
                <form>
                    <div class="login_form">
                    <input type="text" name="loginId" class="textbox_blue" placeholder="아이디(이메일)">
                    <input type="text" name="loginPw" class="textbox_blue" placeholder="비밀번호">
                    <p class="error">아이디 오류입니다. 확인 후 다시 입력하세요</p>
                    <div class="detail_login">
                        <input type="checkbox" class="chk_blue" id="saveId" name="saveId"><label for="saveId" class="chk_shape"></label>
                        <label for="saveId" class="chk_txt">아이디 저장</label>
                        <div class="find_box">
                            <a href="#">아이디 찾기</a>
                            <span class="bar"></span>
                            <a href="#">비밀번호 찾기</a>
                        </div>
                    </div>
                    </div>
                    <div class="btn_group">
                        <button class="btn_login">로그인</button>

                    </div>
                    <div class="sns_login">
                        <p class="title_sns">SNS 간편 로그인</p>
                        <p class="desc">사용하시는 SNS 계정을 통해 간편하게 로그인하세요</p>
                        <ul class="clearfix">
                            <li><a href="#">
                                    <img src="/assets/images/member/sns1.png" alt=""><span>카카오톡</span>
                                </a></li>
                            <li><a href="#">
                                    <img src="/assets/images/member/sns2.png" alt=""><span>네이버</span>
                                </a></li>
                            <li><a href="#">
                                    <img src="/assets/images/member/sns3.png" alt=""><span>페이스북</span>
                                </a></li>

                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>