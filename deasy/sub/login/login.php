<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header_blue.php');?>
<div class="login_wrap">
    <div class="login_section">
    <p class="title_login">로그인</p>
    <p class="title_login title_login_m f_mont">Login</p>
    <p class="sub_title">Deasy에서 제공하는 다양한 서비스를 경험하세요!</p>
    <form>
        <div class="login_area">
            <input type="text" placeholder="아이디" name="user_id" class="textbox_default textbox_block id">
            <input type="password" placeholder="비밀번호" name="user_pw" class="textbox_default textbox_block">
            <div class="member_box">
                <input type="checkbox" class="chk_black" name="saveId" id="saveChk">
                <label for="saveChk" class="chkShape"></label>
                <label for="saveChk" class="chkTxt">아이디 저장</label>
                <p class="error_msg">* 아이디 오류입니다. 확인 후 다시 입력하세요</p>
                <div class="find_box">
                    <a href="/sub/login/find_id.php">아이디 찾기</a>
                    <a href="/sub/login/find_pw.php">비밀번호 찾기</a>
                </div>
            </div>
            <div class="login_btn">
                <button>로그인하기</button>
                <button type="button" class="signup_btn">회원가입</button>
            </div>
        </div>
        <div class="login_sns">
            <p class="title">SNS 간편 로그인</p>
            <!--<p class="desc">사용하시는 SNS 계정을 통해 간편하게 로그인하세요</p>-->
            <ul class="sns_box clearfix">
                <li><a href="#" onClick="alert('준비중인 기능입니다!')">
                        <img src="/assets/images/project/P4/sns1.png" alt="">
                        카카오톡
                    </a></li>
                <li><a href="#" onClick="alert('준비중인 기능입니다!')">
                        <img src="/assets/images/project/P4/sns2.png" alt="">
                        네이버
                    </a></li>
                <li><a href="#" onClick="alert('준비중인 기능입니다!')">
                        <img src="/assets/images/project/P4/sns3.png" alt="">
                        페이스북
                    </a></li>

            </ul>
        </div>

    </form>
    </div>
</div>
<script>
    function myFunction(x) {
        if (x.matches) {
           $('.signup_btn').click(function () {
               window.location.href='/sub/login/signup_home.php'
           });
        } else {
            $('.signup_btn').click(function () {
                window.location.href='/sub/login/signup.php'
            });
        }
    }
    var x = window.matchMedia("(max-width: 1024px)")
    myFunction(x);
    x.addListener(myFunction);
</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
