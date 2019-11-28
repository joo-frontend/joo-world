<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header_flex.php');?>
<div class="budget_wra">
    <div class="budget_area clearfix">
        <div class="page_title_section page_title_white_section">
            <p class="page_title page_title_white f_mont">Budget</p>
            <p class="page_title_contents">
                <span>프로젝트의<br>예산</span>은<br>얼마나 되나요?
            </p>
            <p class="page_desc">프로젝트 총 금액<br>
                혹은 최대 금액을 설정하세요</p>
        </div>
        <div class="setting_budget_section">
            <div class="setting_budget_price clearfix">
                <dl>
                    <dt>천만</dt>
                    <dd class="thousand">
                        <input type="hidden" name="budgetPrice1000Value" value="6000" class="pricebox_hidden">
                        <input type="number" name="budgetPrice1000" value="6000" class="pricebox f_mont"
                               disabled>
                        <p class="price_arrow up">
                            <img class="hover_off" src="/assets/images/project/P6/up_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/up_on.png" alt="">
                        </p>
                        <p class="price_arrow down">
                            <img class="hover_off" src="/assets/images/project/P6/down_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/down_on.png" alt="">
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>백만</dt>
                    <dd class="hundred">
                        <input type="hidden" name="budgetPrice100Value" value="100" class="pricebox_hidden">
                        <input type="number" name="budgetPrice100" value="100" class="pricebox f_mont" disabled>
                        <p class="price_arrow up">
                            <img class="hover_off" src="/assets/images/project/P6/up_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/up_on.png" alt="">
                        </p>
                        <p class="price_arrow down">
                            <img class="hover_off" src="/assets/images/project/P6/down_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/down_on.png" alt="">
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>십만</dt>
                    <dd class="ten">
                        <input type="hidden" name="budgetPrice10Value" value="50" class="pricebox_hidden">
                        <input type="number" name="budgetPrice10" value="50" class="pricebox f_mont" disabled>
                        <p class="price_arrow up">
                            <img class="hover_off" src="/assets/images/project/P6/up_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/up_on.png" alt="">
                        </p>
                        <p class="price_arrow down">
                            <img class="hover_off" src="/assets/images/project/P6/down_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/down_on.png" alt="">
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>일</dt>
                    <dd class="one">
                        <input type="hidden" name="budgetPrice1Value" value="0" class="pricebox_hidden">
                        <input type="number" name="budgetPrice1" value="0" class="pricebox f_mont" disabled>
                        <p class="price_arrow up">
                            <img class="hover_off" src="/assets/images/project/P6/up_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/up_on.png" alt="">
                        </p>
                        <p class="price_arrow down">
                            <img class="hover_off" src="/assets/images/project/P6/down_off.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P6/down_on.png" alt="">
                        </p>
                    </dd>
                </dl>
            </div>
           <!-- <div class="setting_budget_input">
                <dl>
                    <dt>직접입력</dt>
                    <dd>
                        <input type="hidden" name="budgetPriceDirectValue" class="pricebox_directHidden">
                        <input type="text" name="budgetPriceDirect" maxlength="6"
                               class="pricebox_direct f_mont" onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)'>
                        <span class="price_unit">만원</span>
                    </dd>
                </dl>
            </div>-->
        </div>
    </div>
    <div class="total_budget_area">
        <div class="total_budget_section">
            <div class="budget_review">
                <p><img src="/assets/images/project/P6/clapping.png" alt=""><span class="f_mont">X10</span></p>
                <p class="desc">예산 부자셨군요!</p>
            </div>
            <!--<div class="budget_num">
                <p class="mb_txt">총 예산</p>
                <p><span class="f_mont">6,150</span>만원</p>
            </div>-->
           <div class="budget_num">
               <input type="hidden" name="budgetPriceDirectValue" class="pricebox_directHidden">
               <input type="text" name="budgetPriceDirect" maxlength="6"
                      class="pricebox_direct f_mont" onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)'>
               <strong class="">만원</strong>
           </div>
        </div>
    </div>
    <div class="step_project">
        <a href="budget_step1.php" class="arrow_step next">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="/index.php#typePJ" class="arrow_step before">
            <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
            <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
        </a>

    </div>
    <div class="step_project_m">
        <a href="/index.php#typePJ2" class="prev">
            <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
        </a>
        <a href="budget_step1.php" class="next">
            NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
        </a>

    </div>
</div>
<script>
    $(document).ready(function () {
        $(".budget_num .pricebox_direct").focus();
    });

    /*예산 합계*/
    function calcPrice(){
        var thousandP = parseInt($(".thousand .pricebox_hidden").val());
        var hundredP = parseInt($(".hundred .pricebox_hidden").val());
        var tenP = parseInt($(".ten .pricebox_hidden").val());
        var oneP = parseInt($(".one .pricebox_hidden").val());
        var arrowTotalP = thousandP + hundredP + tenP + oneP;
        var textArrowTotalP = arrowTotalP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(".pricebox_directHidden").val(textArrowTotalP);
        $(".pricebox_direct").val(textArrowTotalP);
    }
    calcPrice();
    /*예산 up down*/
    /*thousand*/
    /*down*/
    $(document).on("click", ".thousand .price_arrow.down", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) - 1000;
        if(controlPrice >= "0") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 줄일 수 없습니다")
        }
    });
    /*up*/
    $(document).on("click", ".thousand .price_arrow.up", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) + 1000;
        if(controlPrice <= "9000") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("1억 이상은 직접입력을 이용해주세요")
        }
    });
    /*hundred*/
    /*down*/
    $(document).on("click", ".hundred .price_arrow.down", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) - 100;
        if(controlPrice >= "0") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 줄일 수 없습니다")
        }
    });
    /*up*/
    $(document).on("click", ".hundred .price_arrow.up", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) + 100;
        if(controlPrice <= "900") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 늘릴 수 없습니다")
        }
    });
    /*ten*/
    /*down*/
    $(document).on("click", ".ten .price_arrow.down", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) - 10;
        if(controlPrice >= "0") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 줄일 수 없습니다")
        }
    });
    /*up*/
    $(document).on("click", ".ten .price_arrow.up", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) + 10;
        if(controlPrice <= "90") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 늘릴 수 없습니다")
        }
    });
    /*one*/
    /*down*/
    $(document).on("click", ".one .price_arrow.down", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) - 1;
        if(controlPrice >= "0") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 줄일 수 없습니다")
        }
    });
    /*up*/
    $(document).on("click", ".one .price_arrow.up", function() {
        var arrowClick = $(this).parents("dd");
        var controlPrice = $(this).parents("dd").find(".pricebox").val();
        controlPrice = parseInt(controlPrice) + 1;
        if(controlPrice <= "9") {
            arrowClick.find(".pricebox").val(controlPrice);
            arrowClick.find(".pricebox_hidden").val(controlPrice);
            calcPrice();
        } else {
            alert("더 이상 늘릴 수 없습니다")
        }
    });

    /*최종금액*/
    /*$(".setting_budget_input .pricebox_direct").keyup(function () {
        var directPrice = $(this).val();
        var directPriceComma = directPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(".setting_budget_input .pricebox_directHidden").val(directPriceComma);
        $(this).val(directPriceComma);
        $(".total_budget_area .budget_num span").text(directPriceComma);
    });*/
    $(".budget_num .pricebox_direct").keyup(function () {
        var budgetInput = $(this).val();
        var budgetInputHidden = $(".pricebox_directHidden").val();
        budgetInputHidden = budgetInput;
        var txtBudget = budgetInput.replace(/,/g, '').toString();
        var oneB = txtBudget.substring(txtBudget.length,txtBudget.length-1);
        var twoB = txtBudget.substring(txtBudget.length-1,txtBudget.length-2);
        var threeB = txtBudget.substring(txtBudget.length-2,txtBudget.length-3);
        var fourB = txtBudget.substring(txtBudget.length-3,txtBudget.length-4);
        $(".one .pricebox_hidden").val(oneB);
        $(".one .pricebox").val(oneB);
        $(".ten .pricebox_hidden").val(twoB*10);
        $(".ten .pricebox").val(twoB*10);
        $(".hundred .pricebox_hidden").val(threeB*100);
        $(".hundred .pricebox").val(threeB*100);
        $(".thousand .pricebox_hidden").val(fourB*1000);
        $(".thousand .pricebox").val(fourB*1000);
        if(budgetInput== ""){
            $(".one .pricebox_hidden").val("0");
            $(".one .pricebox").val("0");
        }
    });
    $(".budget_num .pricebox_direct").focusout(function () {
        var budgetInput = $(this).val();
        var commaPlus = budgetInput.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        $(".budget_num .pricebox_direct").val(commaPlus);
    });

    /*숫자만 입력*/
    function onlyNumber(event){
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
        if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 )
            return;
        else
            return false;
    }
    function removeChar(event) {
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
        if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 )
            return;
        else
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }

</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
