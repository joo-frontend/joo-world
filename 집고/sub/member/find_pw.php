<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type1.php');?>
<div class="member_wra">
    <div class="member_area">
        <div class="member_section">
            <div class="member_title_box">
                <p class="title">비밀번호 찾기</p>
                <p class="sub_title">가입했던 이메일 주소로 비밀번호를 찾을 수 있습니다</p>
            </div>
            <div class="member_input_box input_sm_box input_pw_box">
                <div class="type_login">
                    <span class="focus" data-login="personal">개인회원</span>
                    <span data-login="company">사업자 회원</span>
                </div>
                <div class="member_input personal active">
                    <form>
                        <p class="lb"><img src="/assets/images/member/email.png" alt="">가입했던 이메일 주소 입력</p>
                        <input type="text" class="textbox_gray" placeholder="이메일을 입력해주세요">
                    <button class="btn_gray">비밀번호 찾기</button>
                    </form>
                </div>
                <div class="member_input company">
                    <form>
                        <p class="lb"><img src="/assets/images/member/email.png" alt="">가입했던 이메일 주소 입력</p>
                        <input type="text" class="textbox_gray" placeholder="이메일을 입력해주세요">
                        <button class="btn_gray">비밀번호 찾기</button>
                    </form>
                </div>

            </div>
        </div>
        <div class="member_bg_img"></div>
        <div class="member_bg_white"></div>
    </div>
</div>
    <script>
    $(".type_login span").click(function () {
        $(".type_login span").removeClass("focus");
        $(this).addClass("focus");
        var dataTxt = $(this).attr("data-login");
        $(".member_input").removeClass("active");
        $(".member_input."+dataTxt).addClass("active");
    });
    </script>
<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>