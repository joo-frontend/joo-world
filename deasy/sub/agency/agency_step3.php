<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header_blue.php');?>
    <div class="briefing_wra">
        <div class="project_summary">
<div class="area_summary_pj">
<div class="box_title_s">
    <p><span>프로젝트의<br>예산, 스케줄, 분야</span>를<br>확인하세요</p>
</div>
    <div class="box_info_s">
        <p class="lb"><img src="/assets/images/project_new/budget.png" alt=""> 예산
            <a href="" class="back_move">재설정</a>
        </p>
        <div class="price">
            <p><b class="f_mont">6,150</b> 만원</p>
        </div>
    </div>
    <div class="box_info_s">
        <p class="lb"><img src="/assets/images/project_new/schedule.png" alt=""> 진행기간
            <a href="" class="back_move">재설정</a>
        </p>
        <div class="range_pj">
            <p class="day">시작일</p>
            <div class="date">
                <p class="year f_mont">2019</p>
                <span class="txt_date">년</span>
                <p class="alone zero f_mont">0</p>
                <p class="alone f_mont">8</p>
                <span class="txt_date">월</span>
                <p class="alone f_mont">1</p>
                <p class="alone f_mont">8</p>
                <span class="txt_date">일</span>
            </div>
            <p class="day">마감일</p>
            <div class="date">
                <p class="year f_mont">2019</p>
                <span class="txt_date">년</span>
                <p class="alone zero f_mont">0</p>
                <p class="alone f_mont">9</p>
                <span class="txt_date">월</span>
                <p class="alone zero f_mont">0</p>
                <p class="alone f_mont">8</p>
                <span class="txt_date">일</span>
            </div>
        </div>
    </div>
    <div class="box_info_s">
        <p class="lb"><img src="/assets/images/project_new/scope.png" alt=""> 프로젝트 분야
            <a href="" class="back_move">재설정</a>
        </p>
        <div class="scope_pj">
            <p>로고 디자인<br>
                UX·UI 디자인<br>
                영상 제작<br>
                개발<br>
                모션그래픽<br>
                패키지 디자인</p>
        </div>
    </div>
</div>
        </div>
        <!--<div class="briefing_required">
            <div class="briefing_area">
                <div class="page_title_section page_title_white_section">
                    <p class="page_title page_title_white f_mont">STEP.3</p>
                    <p class="page_title_contents">
                        <span>마지막!</span><br>프로젝트 브리핑을<br>작성해주세요
                    </p>
                </div>
                <div class="briefing_section">
                    <div class="item_briefing_type"><span>필수항목</span><span class="bar"></span></div>
                    <div class="item_briefing_box">
                        <p class="label"><span class="num f_mont">1</span>프로젝트명</p>
                        <div class="prjct_item_content">
                            <input type="text" name="prjctTitle" class="textbox_default textbox_block">
                        </div>
                    </div>
                    <div class="item_briefing_box">
                        <p class="label"><span class="num f_mont">2</span>대표 키워드</p>
                        <div class="prjct_item_content clearfix">
                            <div class="keyword_item">
                                <p class="title f_mont">Keyword.1</p>
                                <input type="text" name="prjctKeyword1" class="textbox_default textbox_block">
                            </div>
                            <div class="keyword_item">
                                <p class="title f_mont">Keyword.2</p>
                                <input type="text" name="prjctKeyword2" class="textbox_default textbox_block">
                            </div>
                            <div class="keyword_item">
                                <p class="title f_mont">Keyword.3</p>
                                <input type="text" name="prjctKeyword3" class="textbox_default textbox_block">
                            </div>

                        </div>
                    </div>
                    <div class="item_briefing_box">
                        <p class="label"><span class="num f_mont">3</span>브리핑 내용</p>
                        <div class="prjct_item_content">
                            <textarea name="txtboxBriefing" class="txtbox"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <div class="briefing_selection">
            <div class="briefing_area">
                <div class="page_title_section">
                    <p class="page_title f_mont">Project Briefing</p>
                    <p class="page_title_contents">
                        <span>프로젝트의<br>
                        브리핑을 작성</span>하세요
                    </p>
                    <!--<a href="#" class="skip_btn">나중에 설정</a>-->
                </div>
                <div class="briefing_section">
                    <div class="item_briefing_type"><span>필수항목</span><span class="bar"></span>
                    </div>
                    <div class="item_briefing_box clearfix">
                        <div class="prjct_item_title">
                            <span class="num f_mont">1</span>
                            <p class="label"><b>프로젝트의 업종</b>을<br>선택하세요</p>
                        </div>
                        <div class="prjct_item_content">
                            <span class="job_type">
                                <input type="radio" id="chkJob1" name="chkJob" class="chkbox_white">
                                <label for="chkJob1" class="chkShape"></label>
                                <label for="chkJob1" class="chkTxt">공기업 / 기관</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob2" name="chkJob" class="chkbox_white">
                                <label for="chkJob2" class="chkShape"></label>
                                <label for="chkJob2" class="chkTxt">식당 / 카페</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob3" name="chkJob" class="chkbox_white">
                                <label for="chkJob3" class="chkShape"></label>
                                <label for="chkJob3" class="chkTxt">식품 / 건강</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob4" name="chkJob" class="chkbox_white">
                                <label for="chkJob4" class="chkShape"></label>
                                <label for="chkJob4" class="chkTxt">IT / 미디어</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob5" name="chkJob" class="chkbox_white">
                                <label for="chkJob5" class="chkShape"></label>
                                <label for="chkJob5" class="chkTxt">뷰티 / 패션</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob6" name="chkJob" class="chkbox_white">
                                <label for="chkJob6" class="chkShape"></label>
                                <label for="chkJob6" class="chkTxt">병원</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob7" name="chkJob" class="chkbox_white">
                                <label for="chkJob7" class="chkShape"></label>
                                <label for="chkJob7" class="chkTxt">교육 / 육아</label>
                            </span>
                            <span class="job_type">
                                <input type="radio" id="chkJob8" name="chkJob" class="chkbox_white">
                                <label for="chkJob8" class="chkShape"></label>
                                <label for="chkJob8" class="chkTxt">일반 / 기타</label>
                            </span>
                        </div>
                    </div>
                    <div class="item_briefing_box">
                        <div class="prjct_item_title">
                            <span class="num f_mont">2</span>
                            <p class="label"><b>대표 키워드</b>를<br>
                                선택하세요</p>
                        </div>
                        <div class="prjct_item_content">
                            <div class="tone_n_manner">
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor1" name="tonecolor1" class="chkbox_chk">
                                    <label for="tonecolor1" class="chkShape"></label>
                                    <label for="tonecolor1" class="chkTxt">사내활용 </label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor2" name="tonecolor2" class="chkbox_chk">
                                    <label for="tonecolor2" class="chkShape"></label>
                                    <label for="tonecolor2" class="chkTxt">고상함, 상상력, 지혜</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor3" name="tonecolor3" class="chkbox_chk">
                                    <label for="tonecolor3" class="chkShape"></label>
                                    <label for="tonecolor3" class="chkTxt">창의성, 격려</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor4" name="tonecolor4" class="chkbox_chk">
                                    <label for="tonecolor4" class="chkShape"></label>
                                    <label for="tonecolor4" class="chkTxt">균형, 중립적인</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor5" name="tonecolor5" class="chkbox_chk">
                                    <label for="tonecolor5" class="chkShape"></label>
                                    <label for="tonecolor5" class="chkTxt">에너지, 환희</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor6" name="tonecolor6" class="chkbox_chk">
                                    <label for="tonecolor6" class="chkShape"></label>
                                    <label for="tonecolor6" class="chkTxt">정중함, 럭셔리함</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor7" name="tonecolor7" class="chkbox_chk">
                                    <label for="tonecolor7" class="chkShape"></label>
                                    <label for="tonecolor7" class="chkTxt">치유, 자연, 성장</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor8" name="tonecolor8" class="chkbox_chk">
                                    <label for="tonecolor8" class="chkShape"></label>
                                    <label for="tonecolor8" class="chkTxt">깨끗함, 정돈된</label>
                                </div>
                                <div class="item_color">
                                    <input type="checkbox" id="tonecolor9" name="tonecolor9" class="chkbox_chk">
                                    <label for="tonecolor9" class="chkShape"></label>
                                    <label for="tonecolor9" class="chkTxt">믿음, 평온함, 깨끗함</label>
                                </div>
                            </div>
                        </div>
                        <!--<div class="logo_type">
                            <ul class="clearfix">
                                <li>
                                    <img src="/assets/images/project/logo/logo_type_0.png" alt="">
                                    <div class="desc_logo_type">
                                        <span class="job_type">
                                            <input type="checkbox" id="chkLogo1" name="chkLogo1" class="chkbox_chk">
                                            <label for="chkLogo1" class="chkShape"></label>
                                            <label for="chkLogo1" class="chkTxt">텍스트 타입</label>
                                        </span>
                                        <p class="info">회사명에 폰트 / 스타일을 적용한 로고</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/project/logo/logo_type_1.png" alt="">
                                    <div class="desc_logo_type">
                                         <span class="job_type">
                                            <input type="checkbox" id="chkLogo2" name="chkLogo2" class="chkbox_chk">
                                            <label for="chkLogo2" class="chkShape"></label>
                                            <label for="chkLogo2" class="chkTxt">심볼 타입</label>
                                        </span>
                                        <p class="info">회사의 가치를 내제한 추상적인 모양이나<br>
                                            심볼을 이용한 로고</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/project/logo/logo_type_2.png" alt="">
                                    <div class="desc_logo_type">
                                         <span class="job_type">
                                            <input type="checkbox" id="chkLogo3" name="chkLogo3" class="chkbox_chk">
                                            <label for="chkLogo3" class="chkShape"></label>
                                            <label for="chkLogo3" class="chkTxt">이니셜 타입</label>
                                        </span>
                                        <p class="info">회사명에 폰트 / 스타일을 적용한 로고</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/project/logo/logo_type_3.png" alt="">
                                    <div class="desc_logo_type">
                                        <span class="job_type">
                                            <input type="checkbox" id="chkLogo4" name="chkLogo4" class="chkbox_chk">
                                            <label for="chkLogo4" class="chkShape"></label>
                                            <label for="chkLogo4" class="chkTxt">엠블럼 타입</label>
                                        </span>
                                        <p class="info">회사명이 포함된 그림 / 표장을 이용한 로고</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/project/logo/logo_type_4.png" alt="">
                                    <div class="desc_logo_type">
                                         <span class="job_type">
                                            <input type="checkbox" id="chkLogo5" name="chkLogo5" class="chkbox_chk">
                                            <label for="chkLogo5" class="chkShape"></label>
                                            <label for="chkLogo5" class="chkTxt">캐릭터 타입</label>
                                        </span>
                                        <p class="info">캐릭터나 마스코트를 이용한 로고</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/project/logo/logo_type_5.png" alt="">
                                    <div class="desc_logo_type">
                                         <span class="job_type">
                                            <input type="checkbox" id="chkLogo6" name="chkLogo6" class="chkbox_chk">
                                            <label for="chkLogo6" class="chkShape"></label>
                                            <label for="chkLogo6" class="chkTxt">캘리그라피 타입</label>
                                        </span>
                                        <p class="info">손글씨, 필기체 등 글자 자체를 디자인한 로고</p>
                                    </div>
                                </li>
                            </ul>
                        </div>-->
                    </div>
                    <div class="item_briefing_box">
                        <div class="prjct_item_title">
                            <span class="num f_mont">3</span>
                            <p class="label"><b>제안 요청사항</b>을<br>
                                입력하세요</p>
                        </div>
                        <div class="prjct_item_content">
                            <textarea class="txtarea"></textarea>
                        </div>
                    </div>

                    <div class="item_briefing_type type2"><span>선택항목</span><span class="bar"></span></div>
                    <div class="item_briefing_box">
                        <div class="prjct_item_title">
                            <span class="num f_mont">4</span>
                            <p class="label"><b>대표 키워드</b>를<br>
                                선택하세요</p>
                        </div>
                        <div class="prjct_item_content">
                        <div class="style_logo">
                            <div class="item_style_logo">
                                <span class="label">직선적인</span>
                                <div class="style_bar">
                                     <div id="styleLogo1" class="style_logobar"></div>
                                </div>
                                <span class="label">곡선적인</span>
                            </div>
                            <div class="item_style_logo">
                                <span class="label">단순한</span>
                                <div class="style_bar">
                                    <div id="styleLogo2" class="style_logobar"></div>
                                </div>
                                <span class="label">화려한</span>
                            </div>
                            <div class="item_style_logo">
                                <span class="label">정적인</span>
                                <div class="style_bar">
                                    <div id="styleLogo3" class="style_logobar"></div>
                                </div>
                                <span class="label">동적인</span>
                            </div>
                            <div class="item_style_logo">
                                <span class="label">진중한</span>
                                <div class="style_bar">
                                    <div id="styleLogo4" class="style_logobar"></div>
                                </div>
                                <span class="label">재미있는</span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="item_briefing_box">
                        <div class="prjct_item_title">
                            <span class="num f_mont">5</span>
                            <p class="label"><b>표기되어야 할<br>
                                상호명 / 슬로건</b>이<br>
                                있나요?</p>
                        </div>
                        <div class="prjct_item_content">
                        <div class="company_name">
                            <input type="text" name="txtCName" class="textbox_block textbox_default" placeholder="예) 영문 : DK KINGDOM /  국문 : 디케이브라더스 별도 제작 요청">
                        </div>
                        </div>
                    </div>
                    <div class="item_briefing_box">
                        <div class="prjct_item_title">
                            <span class="num f_mont">6</span>
                            <p class="label"><b>참고 레퍼런스</b>가<br>
                                있다면 첨부해주세요</p>
                            <p class="desc">빠른 이해를 돕기 위한<br>
                                링크, 이미지, 템플릿 등의<br>
                                자료를 업로드하세요<br>
                                <span>(최대 5개까지)</span></p>
                        </div>
                        <div class="prjct_item_content">
                            <div class="custom_box">
                                <span class="type_file">링크</span>
                                <input type="url" class="textbox_default textbox_url" placeholder="링크 입력">
                            </div>
                            <div class="custom_box">
                                <span class="type_file">파일</span>
                                <form action="/file-upload" class="dropzone" id="dropzone">
                                    <div class="fallback">
                                        <input name="file" type="file" multiple/>
                                    </div>
                                    <div class="fileinput-button_box">
                                        <p class="fileinput-button"><span>+ 파일추가</span></p>
                                        <!--<span class="unit">0 / 10MB</span>-->
                                    </div>
                                    <div class="img_preveiw_box" id="preview-img"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--pc-->
                    <a href="" class="temp_save">
                        <!--<img src="/assets/images/bidding/chksave.png" alt="">-->
                        <span>임시저장</span>
                    </a>
                    <div class="btn_group">
                        <button type="button" onclick="window.location.href='/sub/project/complete_register.php'">공개입찰 등록</button>
                    </div>
                    <!--태블릿,모바일-->
                    <div class="btn_group btn_group_m">
                        <button type="button" class="temp_save_m">임시저장</button>
                        <button type="button" onclick="window.location.href='/sub/project/complete_register.php'">등록하기</button>
                    </div>
                    
                </div>
            </div>
        </div>
      <!--  <div class="step_project">
            <a href="javascript:history.go(-1)" class="arrow_step before">
                <img class="before_next " src="../../assets/images/project/P6/before_off.png" alt="">
                <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
            </a>
        </div>
        <div class="step_project_m">
            <a href="javascript:history.go(-1)" class="prev">
                <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
            </a>
        </div>-->
    </div>
<div class="popup popup_brief_desc">
    <div class="pop">
        <div class="briefing_desc_box">
            <a href="#" class="close_pop"><img src="/assets/images/project/P10/close.png" alt=""></a>
            <p class="title">임시저장</p>
            <div class="desc">
                <p>공개입찰 등록은 모든 항목이 작성되어야 등록이 가능합니다.<br>
                    임시 저장 시, 작성된 내용은 모두 저장되며<br>
                    <span>‘마이페이지 > 입찰내역’</span> 에서 설정 가능합니다.</p>
            </div>
            <div class="pop_footer">
                <a href="" class="close_savepop">확인</a>
                <a href="/sub/mypage/history_request.php">마이페이지로 이동</a>
            </div>
        </div>
    </div>
</div>
    <script src="/assets/js/dropzone/dropzone.js"></script>
    <script>
        $("#dropzone").dropzone({
            url: "/file/post",
            maxFiles: 5,
            uploadMultiple: true,
            dictDefaultMessage: "",
            maxFilesize: 10,
            previewsContainer: "#preview-img",
            clickable: ".fileinput-button",
            addRemoveLinks: true,
            dictRemoveFile: '',
            acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
            dictFileSizeUnits: 'mb',
            parallelUploads: 5,
            /*maxfilesexceeded: function(file) {
                alert("파일은 최대 5개까지 첨부할 수 있습니다.");
            },*/
            init: function () {
                this.on("maxfilesexceeded",function(file) {
                     this.removeFile(file);
                });
               this.on("addedfile",function (file) {
                    if (this.files.length) {
                        var _i, _len;
                        for (_i = 0, _len = this.files.length; _i < _len - 1; _i++) // -1 to exclude current file
                        {
                            if(this.files[_i].name === file.name && this.files[_i].size === file.size && this.files[_i].lastModifiedDate.toString() === file.lastModifiedDate.toString())
                            {
                                alert("이미 첨부된 파일입니다.");
                                this.removeFile(file);
                            }
                        }
                    }/* else if(this.files.length > this.options.maxFiles) {
                        alert("파일은 최대 5개까지 첨부할 수 있습니다.");
                        this.removeFile(file);
                    }*/
                });
            }
        });
        Dropzone.autoDiscover = false;
    </script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>