<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type1.php');?>
<div class="member_wra">
    <div class="member_area">
        <div class="member_bg_img"></div>
        <div class="member_section">
            <div class="member_title_box">
                <p class="title">로그인</p>
                <p class="sub_title">로그인하시면 집고의 다양한 서비스를 이용하실 수 있습니다</p>
            </div>
            <div class="member_input_box">
                <div class="type_login">
                    <span class="focus" data-login="personal">개인회원</span>
                    <span data-login="company">사업자 회원</span>
                </div>
                <div class="member_input personal active">
                    <form>
                    <p class="lb"><img src="/assets/images/member/email.png" alt="">이메일</p>
                    <input type="text" class="textbox_gray" placeholder="이메일을 입력해주세요">
                    <p class="lb"><img src="/assets/images/member/pw.png" alt="">비밀번호</p>
                    <input type="text" class="textbox_gray" placeholder="비밀번호를 입력해주세요">
                        <div class="mb_manage">
                            <input type="checkbox" id="idSave" name="idSave" class="chkbox">
                            <label for="idSave">아이디 저장</label>
                            <a href="/sub/member/find_pw.php" class="find_pw">비밀번호 찾기</a>
                        </div>
                        <button class="btn_gray">로그인</button>
                        <div class="sns_login">
                            <p class="desc">집고의 회원이 아니신가요? <a href="/sub/member/join.php">회원가입하기</a></p>
                            <a href="" class="sns1"><img src="/assets/images/member/sns1.png" alt="">페이스북으로 시작하기</a>
                            <a href="" class="sns2"><img src="/assets/images/member/sns2.png" alt="">네이버로 시작하기</a>
                            <a href="" class="sns3"><img src="/assets/images/member/sns3.png" alt="">카카오톡으로 시작하기</a>
                        </div>
                    </form>
                </div>
                <div class="member_input company">
                    <form>
                    <!--<p class="lb"><img src="/assets/images/member/id.png" alt="">회사명</p>
                    <input type="text" class="textbox_gray" placeholder="회사명을 입력해주세요">-->
                        <p class="lb"><img src="/assets/images/member/email.png" alt="">이메일</p>
                    <input type="text" class="textbox_gray" placeholder="이메일을 입력해주세요">
                    <p class="lb"><img src="/assets/images/member/pw.png" alt="">비밀번호</p>
                    <input type="text" class="textbox_gray" placeholder="비밀번호를 입력해주세요">
                        <div class="mb_manage">
                            <input type="checkbox" id="idSave2" name="idSave2" class="chkbox">
                            <label for="idSave2">아이디 저장</label>
                            <a href="/sub/member/find_pw.php" class="find_pw">비밀번호 찾기</a>
                        </div>
                        <button class="btn_gray">로그인</button>
                        <div class="sns_login">
                            <p class="desc">집고의 회원이 아니신가요? <a href="/sub/member/join.php">회원가입하기</a></p>
                           <p class="msg_join">* 사업자 회원가입은 PC에서만 가능합니다</p>
                        </div>
                    </form>
                </div>
                <!--<div class="only_pc">
                    <div class="sns_login">
                        <a href="" class="sns1"><img src="/assets/images/member/sns1.png" alt="">페이스북으로 시작하기</a>
                        <a href="" class="sns2"><img src="/assets/images/member/sns2.png" alt="">네이버로 시작하기</a>
                        <a href="" class="sns3"><img src="/assets/images/member/sns3.png" alt="">카카오톡으로 시작하기</a>
                    </div>
                </div>-->
            </div>
        </div>
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