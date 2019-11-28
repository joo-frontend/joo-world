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
                <p class="title">리모델링 타입을 선택하세요</p>
            </div>
            <div class="step_txt_box" data-steptitle="step3">
                <p class="step">l  STEP.3</p>
                <p class="title">첨부파일이 있다면 첨부하세요</p>
            </div>
            <div class="step_txt_box" data-steptitle="step4">
                <p class="step">l  STEP.4</p>
                <p class="title">시공날짜를 선택하고 요청사항이 입력하세요</p>
            </div>
            <div class="step_progress step_progress2">
                <span class="focus"></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="agency_pf_choice">
                <p class="cate">[ 의뢰 업체 ]</p>
                <p class="cate detail_link">의뢰업체 정보</p>
                <div class="pf_info_choice">
                    <p class="close_desc_pop"><img src="/assets/images/search/close.png" alt=""></p>
                    <span class="imgbox"><img src="/assets/images/temp/temp_a6.jpg" alt=""></span>
                    <span class="name">집고맨인테리어</span>
            <span class="premium"><img src="/assets/images/review/premium.png" alt=""></span>
        </div>
    </div>
        </div>
        <div class="estimate_contents">
            <form action="/sub/estimate/complete_detail.php">
            <div class="step_paper_area active" data-stepdetail="step1">
                <div class="step_paper">
                    <div class="detail_estm">
                        <p class="lb lb_a">주소</p>
                        <div class="frm_txt address">
                            <input type="text" class="textbox_gray box_lgth2" name="postcode">
                            <a onclick="postcodeC()" class="btn_address">주소찾기</a>
                            <input type="text" class="textbox_gray box_lgth3" name="address1">
                            <input type="text" class="textbox_gray box_lgth3" name="address2">
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
                            <div class="alarm_apply_box">
                                <input type="checkbox" name="alarmEstm" class="chk_alarm" id="alarmEstm">
                                <label for="alarmEstm"></label>
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
                <div class="step_paper_bgnone">
                    <div class="type_rebuild">
                        <div class="item_type_estm">
                            <p class="img_type"><img src="/assets/images/apply/type1_interior.png" alt=""></p>
                            <a href="/sub/estimate/estimate_step_simple.php" class="link_step">일반 리모델링</a>
                            <p class="desc_type">“창호, 도어, 화장실, 부엌 등<br>토탈 인테리어를 원해요”</p>
                        </div>
                        <div class="item_type_estm">
                            <p class="img_type"><img src="/assets/images/apply/type2_interior.png" alt=""></p>
                            <a href="/sub/estimate/estimate_step_detail.php" class="link_step">기타 리모델링</a>
                            <p class="desc_type">“철거, 블라인드, 소방 및 배관, 청소 등<br>기타 리모델링을 원해요”</p>
                        </div>
                    </div>
                    <div class="rebuild_type_box">
                        <div class="rebuild_type">
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_1" name="rebuild1_1">
                                <label for="rebuild1_1">토탈 인테리어</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_2" name="rebuild1_2">
                                <label for="rebuild1_2">창호</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_3" name="rebuild1_3">
                                <label for="rebuild1_3">도어/중문(도어락)</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_4" name="rebuild1_4">
                                <label for="rebuild1_4">화장실/타일</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_5" name="rebuild1_5">
                                <label for="rebuild1_5">부엌/싱크대</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_6" name="rebuild1_6">
                                <label for="rebuild1_6">페인트/탄성</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_3" name="rebuild1_7">
                                <label for="rebuild1_7">도배/장판/마루</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_3" name="rebuild1_8">
                                <label for="rebuild1_8">전기/조명</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild1_9" name="rebuild1_9">
                                <label for="rebuild1_9">붙박이장/옷장(신발장)</label>
                            </div>
                        </div>
                        <div class="rebuild_type">
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_1" name="rebuild2_1">
                                <label for="rebuild2_1">철거/폐기물</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_2" name="rebuild2_2">
                                <label for="rebuild2_2">냉난방기</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_3" name="rebuild2_3">
                                <label for="rebuild2_3">필름/시트</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_4" name="rebuild2_4">
                                <label for="rebuild2_4">블라인드</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_5" name="rebuild2_5">
                                <label for="rebuild2_5">목공업</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_6" name="rebuild2_6">
                                <label for="rebuild2_6">설비</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_7" name="rebuild2_7">
                                <label for="rebuild2_7">소방/배관</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_8" name="rebuild2_8">
                                <label for="rebuild2_8">청소</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_9" name="rebuild2_9">
                                <label for="rebuild2_9">이사</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_10" name="rebuild2_10">
                                <label for="rebuild2_10">도어락</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_11" name="rebuild2_11">
                                <label for="rebuild2_11">가구/가구수리</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_12" name="rebuild2_12">
                                <label for="rebuild2_12">간판</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_13" name="rebuild2_13">
                                <label for="rebuild2_13">사다리 줄눈시공</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_14" name="rebuild2_14">
                                <label for="rebuild2_14">누수탐지</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_15" name="rebuild2_15">
                                <label for="rebuild2_15">코킹</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_16" name="rebuild2_16">
                                <label for="rebuild2_16">상가폐업정리</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_17" name="rebuild2_17">
                                <label for="rebuild2_17">몰딩</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_18" name="rebuild2_18">
                                <label for="rebuild2_18">유리교체</label>
                            </div>
                            <div class="type_chk">
                                <input type="checkbox" class="chkbox" id="rebuild2_19" name="rebuild2_19">
                                <label for="rebuild2_19">고인유품정리</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step_paper_area" data-stepdetail="step3">
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
                            <div class="agency_pf_box">
                                <span class="img_agency">
                                    <img src="/assets/images/temp/temp_a3.jpg" alt="">
                                </span>
                                <span class="name_agency">제이앤인테리어</span>
                                <span class="premium_agency"><img src="/assets/images/review/premium.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step_paper_area" data-stepdetail="step4">
                <div class="step_paper">
                    <div class="detail_estm last">
                        <p class="lb">시공날짜</p>
                        <div class="txtbox select_estmbox">
                            <select class="selectbox_gray">
                                <option>2019년</option>
                            </select>
                            <select class="selectbox_gray">
                                <option>01월</option>
                            </select>
                            <select class="selectbox_gray">
                                <option>23일</option>
                            </select>
                        </div>
                    </div>
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

    <!-- iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요 -->
    <div id="layer_address" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
    </div>
    <script src="/assets/js/dropzone/dropzone.js"></script>
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
    $(".type_rebuild .link_step").click(function () {
        var reBuildType = $(this).parents(".item_type_estm").index() + 1;
        console.log(reBuildType);
        $(this).parents(".type_rebuild").addClass("active",200);
        $(".type_rebuild .desc_type").hide("200");
        $(".type_rebuild .link_step").removeClass("focus");
        $(this).addClass("focus",200);

        $(".rebuild_type_box .rebuild_type").hide();
        $(".rebuild_type .chkbox").prop("checked",false);
        $(".rebuild_type_box .rebuild_type:nth-child("+reBuildType+")").show();
        return false;
    });

    $(".q_apply").on('click',function () {
        $(".pop_desc").addClass('active');
    });
    $('body').on('click', function(e){
        var $tgPoint = $(e.target);
        var $popCallBtn = $tgPoint.hasClass('q_apply');
        var $popArea = $tgPoint.hasClass('pop_desc');
        if ( !$popCallBtn && !$popArea ) {
            $('.pop_desc').removeClass('active');
        }
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
            if(pageCount > 4) {
                pageCount = 4;
            }else {
                $(".step_btn_group .page").removeClass("op5");
                $(".step_txt_box").removeClass("active");
                $(".step_txt_box[data-steptitle=step" + pageCount + "]").addClass("active");
                $(".step_paper_area").removeClass("active");
                $(".step_paper_area[data-stepdetail=step" + pageCount + "]").addClass("active");
                $(".step_progress span").removeClass("focus");
                for(i=1;i<=4;i++){
                    $(".step_progress span:nth-child(-n+"+pageCount+")").addClass("focus");
                }
                if(pageCount == 4){
                    $(".step_progress span:nth-child(-n+5)").addClass("focus");
                    $(".step_btn_group .page.next").hide();
                }
            }


        }
    });

    //우편번호
    var element_layer = document.getElementById('layer_address');
    function closeDaumPostcode() {
        element_layer.style.display = 'none';
    }
    function postcodeC() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                var frmJoin = document.forms.frmJoinC;
                frmJoin.postcode.value = data.zonecode;
                frmJoin.address1.value = addr;
                frmJoin.address2.focus();
                /* document.getElementById('sample2_postcode').value =
                 document.getElementById("sample2_address").value = addr;
                 // 커서를 상세주소 필드로 이동한다.
                 document.getElementById("sample2_detailAddress").focus();*/

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_layer.style.display = 'none';
            },
            width : '100%',
            height : '100%',
            maxSuggestItems : 5
        }).embed(element_layer);

        element_layer.style.display = 'block';

        initLayerPosition();
    }

    function initLayerPosition(){
        var width = 300;
        var height = 400;
        var borderWidth = 5;

        element_layer.style.width = width + 'px';
        element_layer.style.height = height + 'px';
        element_layer.style.border = borderWidth + 'px solid';
        element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
    }
</script>
<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>