<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="project_partner_wra">
    <div class="project_partner_area">
        <div class="page_title_section">
            <p class="page_title page_title_white f_mont">STEP.2</p>
            <p class="page_title_contents">
                <span>추천 파트너</span>를<br>소개할게요!
            </p>
            <p class="page_desc">파트너스의 포트폴리오를 확인하고<br>원하는 파트너스를 선택하세요<br>(다중 선택 가능)</p>
        </div>
        <div class="choice_partner_step">
            <div class="my_project_condition">
                <p class="title">적용사항</p>
                <div class="condition_pj first">
                    <p class="lb">예산</p>
                    <p class="budget"><span class="f_mont">6,150</span>만원</p>
                    <a class="reset_move" href="budget_type1.php">
                        <img class="hover_off" src="/assets/images/project/P9/reset.png" alt=""><img
                                class="hover_on" src="/assets/images/project/P9/reset_on.png" alt="">
                        예산 다시설정</a>
                </div>
                <div class="condition_pj">
                    <p class="lb">분야</p>
                    <p class="type">로고</p>
                    <a class="reset_move" href="budget_step1.php">
                        <img class="hover_off" src="/assets/images/project/P9/reset.png" alt=""><img
                                class="hover_on" src="/assets/images/project/P9/reset_on.png" alt="">
                        분야 다시설정</a>
                </div>
            </div>
            <div class="reset_btn_group">
                <a class="reset_move" href="budget_type1.php">
                   <span><img class="hover_on" src="/assets/images/project/P9/reset_on.png" alt="">예산</span>
                    다시설정</a>
                <a class="reset_move" href="budget_step1.php">
                <span><img class="hover_on" src="/assets/images/project/P9/reset_on.png" alt="">분야</span>
                    다시설정</a>
            </div>
            <div class="txt_desc">
                <span class="mb_txt">추천 파트너스</span>
                <span class="icon_partner f_mont"><img src="/assets/images/project/P9/partners.png" alt="">6</span>
                <p class="partner_desc">파트너를 선택하여 포트폴리오를 확인하실 수 있습니다 <span>(다중 선택 가능)</span></p>
            </div>
            <div class="custom_partner_list">
                <form>
                    <ul>
                        <li>
                            <input type="checkbox" class="chkbox_chk" id="customPartner1"
                                   name="customPartner1"><label for="customPartner1"></label>
                            <div class="partner_pf">
                                <a href="#" class="show_pf f_mont" data-pf="partnerPf1">A***</a>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="chkbox_chk" id="customPartner2"
                                   name="customPartner2"><label for="customPartner2"></label>
                            <div class="partner_pf">
                                <a href="#" class="show_pf f_mont" data-pf="partnerPf2">C********</a>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="chkbox_chk" id="customPartner3"
                                   name="customPartner3"><label for="customPartner3"></label>
                            <div class="partner_pf">
                                <a href="#" class="show_pf f_mont" data-pf="partnerPf3">W***</a>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="chkbox_chk" id="customPartner4"
                                   name="customPartner4"><label for="customPartner4"></label>
                            <div class="partner_pf">
                                <a href="#" class="show_pf f_mont" data-pf="partnerPf4">D****</a>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="chkbox_chk" id="customPartner5"
                                   name="customPartner5"><label for="customPartner5"></label>
                            <div class="partner_pf">
                                <a href="#" class="show_pf f_mont" data-pf="partnerPf5">N****</a>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="chkbox_chk" id="customPartner6"
                                   name="customPartner6"><label for="customPartner6"></label>
                            <div class="partner_pf">
                                <a href="#" class="show_pf f_mont" data-pf="partnerPf6">P*******</a>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="step_project" >
                <a href="budget_step3.php" class="arrow_step next">
                    <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
                    <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
                </a>
                <a href="budget_step1.php" class="arrow_step before">
                    <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
                    <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
                </a>
            </div>
            <div class="step_project_m">
                <a href="/sub/old/budgetdget/budget_step1.php" class="prev">
                    <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
                </a>
                <a href="/sub/old/budgetdget/budget_step3.php" class="next">
                    NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
                </a>
            </div>
        </div>
    </div>
</div>
<div class="pop_pf_section partnerPf1">
    <div class="partner_pf_box ">
        <div class="pf_contents">
            <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <div class="partner_pf_section">
                <p class="mb_partner_name f_mont">A****</p>
                <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                <div class="slide_pf">
                    <div class="swiper-container slidePortfolio" id="slidePf1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="pop_pf_section partnerPf2">
    <div class="partner_pf_box ">
        <div class="pf_contents">
            <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <div class="partner_pf_section">
                <p class="mb_partner_name f_mont">N**</p>
                <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                <div class="slide_pf">
                    <div class="swiper-container slidePortfolio" id="slidePf2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="pop_pf_section partnerPf3">
    <div class="partner_pf_box ">
        <div class="pf_contents">
            <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <div class="partner_pf_section">
                <p class="mb_partner_name f_mont">P***</p>
                <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                <div class="slide_pf">
                    <div class="swiper-container slidePortfolio" id="slidePf3">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="pop_pf_section partnerPf4">
    <div class="partner_pf_box ">
        <div class="pf_contents">
            <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <div class="partner_pf_section">
                <p class="mb_partner_name f_mont">H**</p>
                <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                <div class="slide_pf">
                    <div class="swiper-container slidePortfolio" id="slidePf4">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="pop_pf_section partnerPf5">
    <div class="partner_pf_box ">
        <div class="pf_contents">
            <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <div class="partner_pf_section">
                <p class="mb_partner_name f_mont">S****</p>
                <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                <div class="slide_pf">
                    <div class="swiper-container slidePortfolio" id="slidePf5">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="pop_pf_section partnerPf6">
    <div class="partner_pf_box ">
        <div class="pf_contents">
            <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <div class="partner_pf_section">
                <p class="mb_partner_name f_mont">W****</p>
                <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                <div class="slide_pf">
                    <div class="swiper-container slidePortfolio" id="slidePf6">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <p class="img_pf"><img src="https://www.placehold.it/1130X610" alt=""></p>
                                <div class="desc_pf">
                                    <p class="type">로고 (B.I / C.I)</p>
                                    <p class="name">DDP 로고 디자인 <span class="date">2018.05.05</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="/assets/js/swiper-master/dist/js/swiper.min.js"></script>
<script>
    var swiper = new Swiper('.slidePortfolio', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                },
                simulateTouch: false,
                allowTouchMove: false,
            }
        }
    });
</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
