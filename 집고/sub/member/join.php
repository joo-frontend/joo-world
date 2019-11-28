<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type1.php');?>
<div class="member_wra">
    <div class="member_area">
        <div class="member_section">
            <div class="member_title_box">
                <p class="title">회원가입</p>
                <p class="sub_title">집고의 회원이 되어 집고의 다양한 서비스를 이용해보세요</p>
            </div>
            <div class="member_input_box input_sm_box">
                <div class="type_login">
                    <span class="focus" data-login="personal">개인회원</span>
                    <span data-login="company">사업자 회원</span>
                </div>
                <div class="member_input personal active">
                    <div class="info_join">
                        <p class="title">집고의 개인회원으로<br>
                            가입하시겠습니까?</p>
                        <p class="desc">개인 회원 등록 시,<br>
                            내 위치 기준, 다양한 스타일의 인테리어 후기들을 확인하고<br>
                            원하는 업체에게 견적 의뢰를 할 수 있습니다  </p>
                    </div>
                    <button type="button" onclick="window.location.href='/sub/member/join_personal.php'" class="btn_gray">가입하기</button>
                </div>
                <div class="member_input company">
                    <div class="info_join">
                        <p class="title">집고의 사업자 회원으로<br>
                            가입하시겠습니까?</p>
                        <p class="desc">사업자 회원 등록 시,<br>
                            포트폴리오 및 시공후기 등을 등록하고 관리할 수 있습니다</p>
                    </div>
                    <button type="button" class="btn_gray" onclick="window.location.href='/sub/member/join_company.php'">가입하기</button>
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