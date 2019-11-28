<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type2.php');?>
<div class="estimate_wra">
    <div class="estimate_section">
        <div class="top_estimate_title">
            <p class="cate">[ 견적신청서 작성 ]</p>
            <div class="step_txt_box active" data-steptitle="step1">
                <p class="step">l  STEP.1</p>
                <p class="title">먼저, 기본정보를 입력하세요</p>
            </div>
            <div class="step_txt_box" data-steptitle="step2">
                <p class="step">l  STEP.2</p>
                <p class="title">첨부파일이 있다면 첨부하세요</p>
            </div>
            <div class="step_txt_box" data-steptitle="step3">
                <p class="step">l  STEP.3</p>
                <p class="title">혹시, 요청사항이 있으세요?</p>
            </div>
            <div class="step_progress">
                <span class="focus"></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="estimate_contents">
            <form action="/sub/estimate_agency/complete_simple.php">
            <div class="step_paper_area active" data-stepdetail="step1">
                <div class="step_paper">
                    <div class="detail_estm">
                        <p class="lb">주소</p>
                        <div class="txtbox">
                            <select class="selectbox_gray">
                                <option>서울특별시</option>
                            </select>
                            <select class="selectbox_gray">
                                <option>강남구</option>
                            </select>
                        </div>
                    </div>
                    <div class="detail_estm">
                        <p class="lb">이름</p>
                        <div class="txtbox">
                            <input type="text" class="textbox_gray box_lgth4" placeholder="고객님의 이름을 입력하세요">
                        </div>
                    </div>
                    <div class="detail_estm">
                        <p class="lb">휴대폰 번호</p>
                        <div class="txtbox">
                            <input type="text" class="textbox_gray box_lgth4" placeholder="- 없이 숫자만 입력하세요">
                        </div>
                    </div>
                    <div class="detail_estm last">
                        <div class="lb lb_block">
                            비교견적 신청하기
                            <div class="q_apply">
                                <img src="/assets/images/apply/info.png" alt="">
                                <div class="pop_desc">
                                    <p>비교견적 신청 시,<br>
                                        복수의 인네리어 회사로부터<br>
                                        무료로 견적을 받아 볼 수 있어요</p>
                                </div>
                            </div>
                        </div>
                        <div class="agree_join">
                            <div class="item_agree_join first">
                                <input type="checkbox" class="chkbox" id="agrEstm1All">
                                <label for="agrEstm1All"><b>아래 사항에 모두 동의합니다</b></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agrEstmS1">
                                <label for="agrEstmS1">(필수) <span>개인정보수집 및 이용내용</span></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agrEstmS2">
                                <label for="agrEstmS2">(필수) <span>개인정보 제3자 제공</span></label>
                            </div>
                            <div class="item_agree_join">
                                <input type="checkbox" class="chkbox chkagree" id="agrEstmS3">
                                <label for="agrEstmS3">(선택) <span>인테리어 정보 및 이벤트 알림 수신</span></label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="step_paper_area" data-stepdetail="step2">
                <div class="step_paper">
                    <p class="attach_title">첨부파일</p>
                    <div class="file_desktop">
                        <div class="call_file">
                            <button type="button" class="btn_call btn_call_desktop">파일선택</button>
                            <span class="desc_call">첨부파일을 선택하세요</span>
                        </div>
                        <div class="dropzone drop_custom dz-clickable" id="dropzoneFile"></div>
                        <div class="preview_list_file"></div>
                    </div>
                    <div class="file_save">
                        <div class="call_file">
                            <button type="button" class="btn_call btn_call_save">SAVE 불러오기</button>
                            <span class="desc_call">SAVE한 시공사례, 시공업체를 불러옵니다</span>
                        </div>
                        <div class="list_save_ex">
                            <p class="sub_save_title">시공업체</p>
                            <div class="ex_estm">
                                <p class="imgbox">
                                    <img src="/assets/images/review/banner.png" alt="">
                                </p>
                                <p class="title">블랙 앤 우드가 어우러진 빈티지 카페</p>
                            </div>
                            <div class="ex_estm">
                                <p class="imgbox">
                                    <img src="/assets/images/review/img_normal.png" alt="">
                                </p>
                                <p class="title">집고맨 인테리어의 성수동 디저트샵</p>
                            </div>
                            <div class="ex_estm">
                                <p class="imgbox">
                                    <img src="/assets/images/temp/temp_img8.jpg" alt="">
                                </p>
                                <p class="title">공간마다 포인트 컬러를 준 50평대 아파트</p>
                            </div>
                            <div class="ex_estm">
                                <p class="imgbox">
                                    <img src="/assets/images/review/img3_normal.png" alt="">
                                </p>
                                <p class="title">패턴으로 포인트 주기</p>
                            </div>
                        </div>
                        <div class="list_save_agency">
                            <p class="sub_save_title">시공업체</p>
                            <div class="agency_pf_box">
                                <span class="img_agency">
                                    <img src="/assets/images/temp/temp_a1.jpg" alt="">
                                </span>
                                <span class="name_agency">집고맨 인테리어</span>
                                <span class="premium_agency"><img src="/assets/images/review/premium.png" alt=""></span>
                            </div>
                            <div class="agency_pf_box">
                                <span class="img_agency">
                                    <img src="/assets/images/temp/temp_a2.jpg" alt="">
                                </span>
                                <span class="name_agency">하우스102</span>
                                <span class="premium_agency"><img src="/assets/images/review/premium.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step_paper_area" data-stepdetail="step3">
                <div class="step_paper">
                    <p class="ask_title">요청사항</p>
                    <textarea class="txtarea" placeholder="요청사항을 입력해주세요  ex) 스타일, 공사기간, 공사예산 등"></textarea>
                    <div class="apply_estm_btn_box">
                    <button type="submit" class="apply_estm_btn">견적서 제출하기</button>
                    </div>
                </div>
            </div>
            <div class="step_btn_group">
                <span class="page before op5"><img src="/assets/images/review/before_on.png" alt=""> 이전단계로</span>
                <span class="page next">다음단계로 <img src="/assets/images/review/next_on.png" alt=""></span>
            </div>
            </form>
        </div>
    </div>
</div>
<!--save 가져오기 팝업-->
    <div class="popup popup_save">
        <div class="pop">
            <p class="close_pop"><img src="/assets/images/common/close_1.png" alt=""></p>
            <div class="pop_head">
                <p class="save_pop_title">SAVE 불러오기</p>
                <div class="search_save_box ui-widget">
                    <input type="text" class="textbox_gray" id="saveTextSh">
                    <label for="saveTextSh"></label>
                    <button>검색</button>
                </div>
            </div>
            <div class="pop_body">
                <div class="list_save_ex">
                    <p class="sub_save_title">시공업체</p>
                    <div class="ex_estm">
                        <div class="chk_save_build">
                            <input type="checkbox" class="chkbox" id="saveBuild1" name="saveBuild1">
                            <label for="saveBuild1"></label>
                        </div>
                        <p class="imgbox">
                            <img src="/assets/images/review/banner.png" alt="">
                        </p>
                        <p class="title">블랙 앤 우드가 어우러진 빈티지 카페</p>
                    </div>
                    <div class="ex_estm">
                        <div class="chk_save_build">
                            <input type="checkbox" class="chkbox" id="saveBuild2" name="saveBuild2">
                            <label for="saveBuild2"></label>
                        </div>
                        <p class="imgbox">
                            <img src="/assets/images/review/img_normal.png" alt="">
                        </p>
                        <p class="title">집고맨 인테리어의 성수동 디저트샵</p>
                    </div>
                </div>
                <div class="list_save_agency">
                    <p class="sub_save_title">시공업체</p>
                    <div class="agency_pf_box">
                        <div class="chk_save_agency">
                            <input type="checkbox" class="chkbox" id="saveAgency1" name="saveAgency1">
                            <label for="saveAgency1"></label>
                        </div>
                        <span class="img_agency">
                        <img src="/assets/images/temp/temp_a1.jpg" alt="">
                    </span>
                        <span class="name_agency">집고맨 인테리어</span>
                        <span class="premium_agency"><img src="/assets/images/review/premium.png" alt=""></span>
                    </div>
                    <div class="agency_pf_box">
                        <div class="chk_save_agency">
                            <input type="checkbox" class="chkbox" id="saveAgency2" name="saveAgency2">
                            <label for="saveAgency2"></label>
                        </div>
                        <span class="img_agency"><img src="/assets/images/temp/temp_a2.jpg" alt=""></span>
                        <span class="name_agency">하우스102</span>
                    </div>
                    <div class="agency_pf_box">
                        <div class="chk_save_agency">
                            <input type="checkbox" class="chkbox" id="saveAgency3" name="saveAgency3">
                            <label for="saveAgency3"></label>
                        </div>
                        <span class="img_agency"><img src="/assets/images/temp/temp_a3.jpg" alt=""></span>
                        <span class="name_agency">제이앤엔지니어링</span>
                        <span class="premium_agency"><img src="/assets/images/review/premium.png" alt=""></span>
                    </div>
                    <div class="agency_pf_box">
                        <div class="chk_save_agency">
                            <input type="checkbox" class="chkbox" id="saveAgency4" name="saveAgency4">
                            <label for="saveAgency4"></label>
                        </div>
                        <span class="img_agency"><img src="/assets/images/temp/temp_a4.jpg" alt=""></span>
                        <span class="name_agency">SHUM</span>
                    </div>
                    <div class="agency_pf_box">
                        <div class="chk_save_agency">
                            <input type="checkbox" class="chkbox" id="saveAgency5" name="saveAgency5">
                            <label for="saveAgency5"></label>
                        </div>
                        <span class="img_agency"><img src="/assets/images/temp/temp_a5.jpg" alt=""></span>
                        <span class="name_agency">디자인하우스</span>
                        <span class="premium_agency"><img src="/assets/images/review/premium.png" alt=""></span>
                    </div>
                    <div class="agency_pf_box">
                        <div class="chk_save_agency">
                            <input type="checkbox" class="chkbox" id="saveAgency6" name="saveAgency6">
                            <label for="saveAgency6"></label>
                        </div>
                        <span class="img_agency"><img src="/assets/images/temp/temp_a7.jpg" alt=""></span>
                        <span class="name_agency">서울공작소</span>
                    </div>
                </div>
            </div>
            <div class="pop_footer">
                <button>등록하기</button>
            </div>
        </div>
    </div>

<script src="/assets/js/dropzone/dropzone.js"></script>
<script>
    $(".q_apply").on('click',function () {
        $(this).find(".pop_desc").addClass('active');

        $(document).on('click', function(e){
            if (  !$(".q_apply").has(e.target).length ) {
                $('.pop_desc').removeClass('active');
            }else {

            }
        });
    });


    $("#dropzoneFile").dropzone({
        url: "/file/post",
        maxFiles: 5,
        uploadMultiple: true,
        dictDefaultMessage: "",
        maxFilesize: 10,
        //previewsContainer: ".preview_list_file",
        clickable: ".btn_call_desktop",
        addRemoveLinks: true,
        dictRemoveFile: '',
        acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
        dictFileSizeUnits: 'mb',
        parallelUploads: 5,
    });
    Dropzone.autoDiscover = false;

    $(".btn_call_save").click(function () {
        $(".popup_save").show();
        $("body").addClass("modal-open");
        $(".popup_save .close_pop").click(function () {
            $(".popup_save").hide();
            $("body").removeClass("modal-open");
        });
    });

    $( function() {
        var shAvailable = [];
        $.getJSON("datasets.json", function (data) {
            $.each(data.shWord, function (key, val) {
                shAvailable.push(val.name);
            });
        });
        $("#saveTextSh").autocomplete({
            source: shAvailable
        });
    });

    var pageCount = 1;
    $(".step_btn_group .page").click(function () {
        var clickP = $(this);
        $('html,body').animate({
            scrollTop : 0
        });
        if(clickP.hasClass("before")) {
            if(pageCount <= 1) {
                pageCount = 1;
            } else {
                pageCount--;
                $(".step_btn_group .page.next").show();
                $(".step_btn_group .page").removeClass("op5");
                $(".step_txt_box").removeClass("active");
                $(".step_txt_box[data-steptitle=step"+pageCount+"]").addClass("active");
                $(".step_paper_area").removeClass("active");
                $(".step_paper_area[data-stepdetail=step"+pageCount+"]").addClass("active");
                $(".step_progress span").removeClass("focus");
                for(i=1;i<=3;i++){
                    $(".step_progress span:nth-child(-n+"+pageCount+")").addClass("focus");
                }
                if(pageCount == 1){
                    $(".step_btn_group .page.before").addClass("op5");
                    $(".step_progress span:nth-child(1)").addClass("focus");
                }
            }
        } else if(clickP.hasClass("next")) {
            pageCount++;
            if(pageCount > 3) {
                pageCount = 3;
            }else {
                $(".step_btn_group .page").removeClass("op5");
                $(".step_txt_box").removeClass("active");
                $(".step_txt_box[data-steptitle=step" + pageCount + "]").addClass("active");
                $(".step_paper_area").removeClass("active");
                $(".step_paper_area[data-stepdetail=step" + pageCount + "]").addClass("active");
                $(".step_progress span").removeClass("focus");
                for(i=1;i<=3;i++){
                    $(".step_progress span:nth-child(-n+"+pageCount+")").addClass("focus");
                }
                if(pageCount == 3){
                    $(".step_progress span:nth-child(-n+4)").addClass("focus");
                    $(".step_btn_group .page.next").hide();
                }
            }


        }
    });
</script>
<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>