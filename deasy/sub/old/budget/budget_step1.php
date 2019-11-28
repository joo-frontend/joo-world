<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header_flex.php');?>
<div class="type_project_wra">
    <div class="type_project_area">
        <div class="page_title_section page_title_white_section">
            <p class="page_title page_title_white f_mont">STEP.1</p>
            <p class="page_title_contents">
                <span>어떤 프로젝트</span>를<br>등록하시겠어요?
            </p>
        </div>
        <div class="type_project_section">
            <form>
                <ul>
                    <li class="empty"></li>
                    <li>
                        <label for="chk_typeProject1">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject1" id="chk_typeProject1">
                            <span class="chkShape" ></span>
                            <p class="sub_title">B.I & C.I</p>
                            <p class="title f_mont">B.I & C.I</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                    <li>
                        <label for="chk_typeProject2">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject2" id="chk_typeProject2">
                            <span class="chkShape" ></span>
                            <p class="sub_title">UX·UI</p>
                            <p class="title f_mont">UX·UI</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                    <li>
                        <label for="chk_typeProject3">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject3" id="chk_typeProject3">
                            <span class="chkShape" ></span>
                            <p class="sub_title">광고디자인</p>
                            <p class="title f_mont">Advertising<br>Design</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                    <li>
                        <label for="chk_typeProject4">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject4" id="chk_typeProject4">
                            <span class="chkShape" ></span>
                            <p class="sub_title"> 편집 디자인</p>
                            <p class="title f_mont">Editorial <br>Design</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                    <li>
                        <label for="chk_typeProject5">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject5" id="chk_typeProject5">
                            <span class="chkShape" ></span>
                            <p class="sub_title">그래픽 디자인</p>
                            <p class="title f_mont">Graphic<br>Design</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                    <li>
                        <label for="chk_typeProject6">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject6" id="chk_typeProject6">
                            <span class="chkShape" ></span>
                            <p class="sub_title">패키지 디자인</p>
                            <p class="title f_mont">Package<br>Design</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                    <li>
                        <label for="chk_typeProject7">
                            <input type="checkbox" class="chkbox_white" name="chk_typeProject7" id="chk_typeProject7">
                            <span class="chkShape" ></span>
                            <p class="sub_title">모션그래픽</p>
                            <p class="title f_mont">Motion<br>Graphic</p>
                            <p class="desc">누가봐도<br>감탄할만한<br>로고가 필요하다면!</p>
                        </label>
                    </li>
                </ul>
            </form>
        </div>
        <div class="step_project">
            <a href="budget_step2.php" class="arrow_step next">
                <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
                <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
            </a>
            <a href="budget_type1.php" class="arrow_step before">
                <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
                <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
            </a>
        </div>
        <div class="step_project_m">
            <a href="budget_type1.php" class="prev">
                <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
            </a>
            <a href="budget_step2.php" class="next">
                NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
            </a>

        </div>
    </div>
</div>
<script>
    function myFunction(x) {
        if (x.matches) {
            $(".type_project_section li label").click(function () {
                $(this).toggleClass("active");
                return false;
            });
        } else {
        }
    }
    var x = window.matchMedia("(max-width: 1024px)")
    myFunction(x);
    x.addListener(myFunction);

    /*$(".type_project_section a").click(function () {
        $(this).not(".chkbox_white").find(".chkbox_white").trigger("click");
    });*/
</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
