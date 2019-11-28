<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
<div class="join_wra">
    <div class="join_area">
        <div class="top_title_join">
            <p class="title">회원가입</p>
            <div class="step_join">
                <span class="step ">01 약관동의</span>
                <span class="icon"><img src="/assets/images/join/join_prog_off.png" alt=""></span>
                <span class="step">02 정보입력</span>
                <span class="icon"><img src="/assets/images/join/join_prog_on.png" alt=""></span>
                <span class="step focus">03 가입완료</span>
            </div>
        </div>
        <div class="complete_join_box">
            <p class="desc">
                축하합니다!<br>
                가입이 완료되셨습니다
            </p>
        </div>
        <div class="btn_join_group">
            <button type="button" onclick="window.location.href='/index.php'" class="btn">홈으로 가기</button>
            <button type="button" onclick="loginPop()" class="btn btn_black">로그인하기</button>
        </div>

    </div>
    <div class="join_complete_bottom">
        <img src="/assets/images/join/delivery.png" alt="">
        <p>
            나만의 추억을 담아내는 포토북을<br/>
            <span>정기적으로 배송하는 정기배송 서비스를 이용해보시겠어요?</span>
        </p>
        <div class="btn_join_group">
            <a href="/">
                <button type="button" class="btn btn_black">서비스 이용하기</button>
            </a>
        </div>
    </div>
</div>
    <script>
        function loginPop() {
            $(".pop.pop_login").show();
            $(".pop.pop_login .close_pop").click(function () {
                $(".pop.pop_login").hide();
            });
            return false;
        }
        function findPwPop() {

            $(".pop.pop_find_pw").show();
            $(".pop.pop_find_pw .close_pop").click(function () {
                $(".pop.pop_find_pw").hide();
            });
            return false;
        }
        function login() {
            var form = document.loginFrm;
            if(form.loginID.value == ''){
                $(".item_login.id").addClass("error");
                $(".item_login.pw").removeClass("error");
                form.loginID.focus();
                return;
            } else {
                $(".item_login.id").removeClass("error");
            }
            if(form.loginPW.value == ''){
                $(".item_login.pw").addClass("error");
                form.loginPW.focus();
                return;
            } else {
                $(".item_login.pw").removeClass("error");
            }
            $(".pop.pop_login").hide();
            alert("로그인되었습니다");
            form.submit();
        }
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>