<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="partner_wra">
    <div class="prjct_repre_banner">
        <div class="imgBg"><img src="/assets/images/temp/partner_detail_banner.png" alt=""></div>
        <div class="profile_pj_area">
            <div class="profile_pj_box">
                <span class="img_logo"><img src="/assets/images/partners/user1.png" alt=""></span>
                <span class="name">DK BROTHERS</span>
                <span class="lv"><img src="/assets/images/partners/lv3.png" alt=""></span>
            </div>
        </div>
    </div>
    <div class="prjct_detail_content">
        <div class="prjct_desc">
            <div class="desc_element">
                <span class="lb lb_eng f_mont">SCORE</span>
                <div class="desc">
                    <span class="score">
                        <img src="/assets/images/partners/score_on.png" alt="">
                        <img src="/assets/images/partners/score_on.png" alt="">
                        <img src="/assets/images/partners/score_on.png" alt="">
                        <img src="/assets/images/partners/score_on.png" alt="">
                        <img src="/assets/images/partners/score_on.png" alt="">
                    </span>
                    <span class="f_mont scroe_num">5.0</span>
                </div>
            </div>
            <div class="desc_element">
                <span class="lb">진행기간</span>
                <div class="desc">
                    <p class="period f_mont"><span>20</span>Days</p>
                </div>
            </div>
            <div class="desc_element">
                <span class="lb">범위</span>
                <div class="desc">
                    <p class="type">로고, 패키지</p>
                </div>
            </div>
        </div>
        <div class="prjct_desc2">
            <div class="txt_box">
                <p class="client">DK BROTHERS</p>
                <p class="prjct_name"> DK BROTHERS 브랜딩 디자인 <span><img src="/assets/images/partners/icon_premium.png" alt=""></span></p>
                <p class="detail_txt">
                    DK BROTHERS의 identity인 정의하다의 의미를 높은 활용성을 가지기 위해 단순화한 '[ ]'로 표현하여 BI에 적용 하였으며<br>
                    '[ ]'의 심볼화 및 개별사용, BI화 혼합 사용으로 DK BROTHERS의 identity를 범용성 있게 녹이는것을 목적으로 디자인하였습니다.
                </p>
            </div>
            <div class="img_box">
                <img src="/assets/images/temp/partner_detail_img.png" alt="">
            </div>
        </div>
    </div>
    <div class="client_review_area">
        <div class="client_review_box">
            <p class="title">클라이언트 후기</p>
            <p class="review_txt">실력있는 디자이너분들께 여러 디자인을 받아볼 수 있어서 좋습니다. 너무 좋은 디자인들이 많아서 1개만 고르기가 너무 아쉬울 정도였습니다. 감사합니다 ^^</p>
            <div class="score_pj">
                <i>
                    <img src="/assets/images/partners/score_white.png" alt="">
                    <img src="/assets/images/partners/score_white.png" alt="">
                    <img src="/assets/images/partners/score_white.png" alt="">
                    <img src="/assets/images/partners/score_white.png" alt="">
                    <img src="/assets/images/partners/score_white.png" alt="">
                    <!--<img class="off" src="/assets/images/partners/score_white.png" alt="">-->
                </i>
                <span class="score_num f_mont">5.0</span>
            </div>
        </div>
    </div>
</div>
<script src="/assets/js/swiper-master/dist/js/swiper.min.js"></script>
<script>
    function myFunction(x) {
        if (x.matches) {
            $(".prjct_repre_banner .imgBg img").attr("src","/assets/images/partners/img6.png");
        }
    }
    var x = window.matchMedia("(max-width: 1024px)")
    myFunction(x);
    x.addListener(myFunction);

</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
