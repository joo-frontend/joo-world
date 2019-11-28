<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="pj_name_wra">
    <div class="pj_name_area">
        <div class="page_title_section page_title_white_section">
            <p class="page_title page_title_white f_mont">Project Name</p>
            <p class="page_title_contents">
            <span>마지막으로,<br>
            프로젝트의 이름을</span><br>
                지어주세요!
            </p>
        </div>
        <div class="name_input_area">
            <input type="text" placeholder=" 쉽고 멋진 프로젝트 중개 플랫폼 UX·UI 디자인" class="dk_textbox">
        </div>
    </div>
    <div class="step_project" >
        <div class="tooltip_info"><p>이제, <span>팀을 만들어</span>볼까요?</p></div>
        <a href="/sub/project/complete_register01.php" class="arrow_step next">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="javascript:history.go(-1)" class="arrow_step before">
            <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
            <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
        </a>
    </div>
    <div class="step_project_m">
        <a href="javascript:history.go(-1)" class="prev">
            <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
        </a>
        <a href="/sub/project/complete_register01.php" class="next">
            NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
        </a>
    </div>
</div>
    <script>
        $(document).ready(function () {
            $(".dk_textbox").focus();
        });
    </script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>