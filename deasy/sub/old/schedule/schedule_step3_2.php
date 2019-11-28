<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="budget_wra budget_white_wra">
    <div class="budget_area clearfix">
        <div class="page_title_section">
            <p class="page_title page_title_white f_mont">Budget</p>
            <p class="page_title_contents">
                <span>프로젝트의<br>예산</span>은<br>얼마나 되나요?
            </p>
            <p class="page_desc">프로젝트 총 금액<br>
                혹은 최대 금액을 설정하세요</p>
        </div>
        <div class="setting_budget_section">
            <div class="setting_budget_bar">
                <div id="rangeBudget" class="rangeBudget">
                    <div class="bar_price"><input type="text" class="f_mont" value="61,500,000" id="priceValue" disabled></div>
                </div>
                <div class="budget_range">
                    <p class="start f_mont">0</p>
                    <p class="end">설마 <span class="f_mont">3</span>억</p>
                </div>
            </div>
            <div class="setting_budget_input">
                <dl>
                    <dt>직접입력</dt>
                    <dd>
                        <input type="hidden" name="budgetPriceDirectValue" class="pricebox_directHidden">
                        <input type="text" name="budgetPriceDirect" maxlength="6"
                               class="pricebox_direct f_mont" onkeydown='return onlyNumber(event)'
                               onkeyup='removeChar(event)'>
                        <span class="price_unit">만원</span>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="total_budget_area">
        <div class="total_budget_section">
            <div class="budget_review">
                <p><img src="/assets/images/project/P6/clapping.png" alt=""><span class="f_mont">X10</span></p>
                <p class="desc">예산 부자셨군요!</p>
            </div>
            <div class="budget_num">
                <p><span class="f_mont">6,150</span>만원</p>
            </div>
        </div>
    </div>
    <div class="step_project">
        <a href="/sub/project/project_step4.php" class="arrow_step next">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="schedule_step2.html" class="arrow_step before">
            <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
            <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
        </a>

    </div>
</div>
<script>
    /*최종금액*/
    $(".setting_budget_input .pricebox_direct").keyup(function () {
        var directPrice = $(this).val();
        var directPriceComma = directPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        $(".setting_budget_input .pricebox_directHidden").val(directPriceComma);
        $(this).val(directPriceComma);
        $(".total_budget_area .budget_num span").text(directPriceComma);
    });

    /*숫자만 입력*/
    function onlyNumber(event) {
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
        if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
            return;
        else
            return false;
    }

    function removeChar(event) {
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
        if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
            return;
        else
            event.target.value = event.target.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
