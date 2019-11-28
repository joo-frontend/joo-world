<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header_flex.php');?>
<div class="review_wra">
    <form name="reviewFrm">
        <div class="top_review_area">
            <div class="top_review_box">
                <p class="title_review f_mont">Review</p>
                <p class="write_msg"><span>프로젝트의 리뷰</span>를 작성해주세요!</p>
                <p class="write_msg_m"><strong>후기작성</strong>
                    <span>프로젝트의 결과는</span><br>만족스러우셨나요?</p>
            </div>
        </div>
        <div class="write_review_area">
            <div class="item_review">
                <p class="lb"><span>프로젝트의 만족도</span>를<br>별점으로 나타낸다면?</p>
                <div class="score_register">
                    <img src="/assets/images/my/star_off.png" alt="">
                    <img src="/assets/images/my/star_off.png" alt="">
                    <img src="/assets/images/my/star_off.png" alt="">
                    <img src="/assets/images/my/star_off.png" alt="">
                    <img src="/assets/images/my/star_off.png" alt="">
                    <span class="num_score f_mont">0.0</span>
                </div>
            </div>
            <div class="item_review">
                <p class="lb"><span>간략한 후기</span>를<br>작성해주세요!</p>
                <div class="txtarea">
                    <textarea name="txtbox_review" class="txtbox" placeholder="간략한 후기를 작성해주세요"></textarea>
                    <span class="txt_num">0 / 100</span>
                </div>
            </div>

            <div class="btn_group">
                <button type="button" class="btn_review" onclick="movePop()">등록하기</button>
            </div>
        </div>
    </form>
</div>
<!--팝업 후기등록 완료-->
<div class="pop_full pop_full_b pop_review_complete">
    <div class="period_edit_box">
        <p class="title">후기가 등록되었습니다</p>
        <p class="desc">작성된 후기는 파트너 상세보기 페이지에서 확인 가능합니다</p>
        <p class="desc_m">작성된 후기는 파트너 상세보기 페이지에서<br> 확인 가능합니다</p>
        <div class="pop_btn_group">
            <button type="button" onclick="closePop()">확인</button>
        </div>
    </div>
</div>
<script>
    /*글자수세기*/
    $("textarea[name='txtbox_review']").keyup(function () {
        var currentTxt = $(this).val();
        var currentNum = $(this).val().length;
        if(currentNum > 100){
            alert("100자 이하로 입력해주세요");
            $(".item_review .txtarea span").html("100 / 100");
            $("textarea[name='txtbox_review']").val(currentTxt.substring(0,100));
        }else {
            $(".item_review .txtarea span").html(currentNum + " / 100");
        }

    });

    /*별점*/
    $(".score_register img").click(function () {
        $(".score_register img").attr("src",$(".score_register img").attr("src").replace("_on","_off"));
        var scoreImg = $(this);
        var score = scoreImg.index() + 1;
        for(i=1; i<=score; i++){
            var imgOn = $(".score_register img:nth-child("+i+")");
            imgOn.attr("src",imgOn.attr("src").replace("_off","_on"));
            $(".score_register .num_score").html(score+".0");
        }
    });
    function movePop() {
        $(".pop_full.pop_review_complete").show();
        return false;
    }
    function closePop() {
        $(".pop_full.pop_review_complete").hide();
        document.reviewFrm.submit();
    }

</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
