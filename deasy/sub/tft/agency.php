<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="tft_wra tft_step1">
    <div class="responsive_area">
        <div class="title_team_box">
            <p class="step1_txt"><span>전문 에이전시를<br></span>
                선택하세요!</p>
            <p class="step2_txt">
                <i class="f_mont">Agency</i>
                <span>원하는 에이전시를</span><br>선택하였나요?
            </p>
            <p class="etc">선택한 에이전시를 다시 한번 확인하세요</p>
        </div>
    </div>
    <div class="freelancer_area">
        <div class="type_request">
            <ul>
                <li ><a href="tft_step1-2.php">FREELANCER</a></li>
                <li class="focus"><a href="agency.php">AGENCY</a></li>
            </ul>
        </div>
        <div class="type_pjct_menu">
            <ul class="clearfix">
                <li class="focus" data-typePj="menu1">
                    <p>
                        <span class="content_type">로고 디자인</span>
                        <span class="choice_num f_mont"></span>
                    </p>
                </li>
                <li data-typePj="menu2">
                    <p>
                        <span class="content_type">UX·UI 디자인</span>
                        <span class="choice_num f_mont"></span>
                    </p>
                </li>
                <li data-typePj="menu3"><p>
                        <span class="content_type">광고 디자인</span>
                        <span class="choice_num f_mont"></span>
                    </p></li>
                <li data-typePj="menu4"><p>
                        <span class="content_type">편집 디자인</span>
                        <span class="choice_num f_mont"></span>
                    </p></li>
                <li data-typePj="menu5"><p>
                        <span class="content_type">개발</span>
                        <span class="choice_num f_mont"></span>
                    </p></li>
            </ul>
           <!-- <div class="arrow_menu">
                <span><img src="/assets/images/tft/before.png" alt=""></span>
                <span><img src="/assets/images/tft/next.png" alt=""></span>
            </div>-->
        </div>
        <div class="pm_info_tft">
            <div class="box_tft_pm">
                <span class="lb f_mont">Deasy PM</span>
                <div class="info">
                    <p class="name f_mont">Park Kihoon <span>박기훈</span></p>
                    <p class="role"><span>역할&nbsp; | </span> 프로젝트 총괄 관리</p>
                </div>
            </div>
        </div>
        <div class="pjct_people_list">
            <ul class="pjct_mb pjct_mb1 active" data-listPj="menu1">
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb1">
                            <label for="chkMb1" class="chkShape"></label>
                            <label for="chkMb1" class="chkTxt f_mont">J*****</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">180,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year3.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill1" width="74" height="74" class=""></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill2" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill3" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill4" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill5" width="74" height="74" class=""></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb1name" value="J*****">
                            <input type="hidden" name="mb1year" value="3">
                            <input type="hidden" name="mb1strength1" value="80">
                            <input type="hidden" name="mb1strength2" value="10">
                            <input type="hidden" name="mb1strength3" value="60">
                            <input type="hidden" name="mb1strength4" value="80">
                            <input type="hidden" name="mb1strength5" value="90">
                            <input type="hidden" name="mb1dayprice" value="180,000">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb2">
                            <label for="chkMb2" class="chkShape"></label>
                            <label for="chkMb2" class="chkTxt f_mont">B**</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">180,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year2.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill6" width="74" height="74" class=""></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill7" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill8" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill9" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill10" width="74" height="74" class=""></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb2name" value="B****">
                            <input type="hidden" name="mb2year" value="2">
                            <input type="hidden" name="mb2strength1" value="80">
                            <input type="hidden" name="mb2strength2" value="40">
                            <input type="hidden" name="mb2strength3" value="100">
                            <input type="hidden" name="mb2strength4" value="60">
                            <input type="hidden" name="mb2strength5" value="50">
                            <input type="hidden" name="mb2dayprice" value="180,000">
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="pjct_mb pjct_mb2" data-listPj="menu2">
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb3">
                            <label for="chkMb3" class="chkShape"></label>
                            <label for="chkMb3" class="chkTxt f_mont">C*****</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">200,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year5.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야</p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill11" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill12" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill13" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill14" width="74" height="74" class=""></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill15" width="74" height="74" class=""></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb3name" value="C****">
                            <input type="hidden" name="mb3year" value="5">
                            <input type="hidden" name="mb3strength1" value="80">
                            <input type="hidden" name="mb3strength2" value="10">
                            <input type="hidden" name="mb3strength3" value="60">
                            <input type="hidden" name="mb3strength4" value="80">
                            <input type="hidden" name="mb3strength5" value="50">
                            <input type="hidden" name="mb3dayprice" value="200,000">
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="pjct_mb pjct_mb3" data-listPj="menu3">
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb4">
                            <label for="chkMb4" class="chkShape"></label>
                            <label for="chkMb4" class="chkTxt f_mont">O*****</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">150,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year2.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill16" width="74" height="74" class="chartSkill1"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill17" width="74" height="74" class="chartSkill2"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill18" width="74" height="74" class="chartSkill3"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill19" width="74" height="74" class="chartSkill4"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill20" width="74" height="74" class="chartSkill5"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb4name" value="O****">
                            <input type="hidden" name="mb4year" value="2">
                            <input type="hidden" name="mb4strength1" value="90">
                            <input type="hidden" name="mb4strength2" value="80">
                            <input type="hidden" name="mb4strength3" value="50">
                            <input type="hidden" name="mb4strength4" value="60">
                            <input type="hidden" name="mb4strength5" value="70">
                            <input type="hidden" name="mb4dayprice" value="150,000">
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="pjct_mb pjct_mb4" data-listPj="menu4">
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb5">
                            <label for="chkMb5" class="chkShape"></label>
                            <label for="chkMb5" class="chkTxt f_mont">D*****</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">200,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year5.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill21" width="74" height="74" class="chartSkill1"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill22" width="74" height="74" class="chartSkill2"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill23" width="74" height="74" class="chartSkill3"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill24" width="74" height="74" class="chartSkill4"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill25" width="74" height="74" class="chartSkill5"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb5name" value="D****">
                            <input type="hidden" name="mb5year" value="5">
                            <input type="hidden" name="mb5strength1" value="50">
                            <input type="hidden" name="mb5strength2" value="40">
                            <input type="hidden" name="mb5strength3" value="70">
                            <input type="hidden" name="mb5strength4" value="100">
                            <input type="hidden" name="mb5strength5" value="40">
                            <input type="hidden" name="mb5dayprice" value="200,000">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb6">
                            <label for="chkMb6" class="chkShape"></label>
                            <label for="chkMb6" class="chkTxt f_mont">A****</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">130,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year1.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill26" width="74" height="74" class="chartSkill1"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill27" width="74" height="74" class="chartSkill2"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill28" width="74" height="74" class="chartSkill3"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill29" width="74" height="74" class="chartSkill4"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill30" width="74" height="74" class="chartSkill5"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb6name" value="A****">
                            <input type="hidden" name="mb6year" value="1">
                            <input type="hidden" name="mb6strength1" value="50">
                            <input type="hidden" name="mb6strength2" value="60">
                            <input type="hidden" name="mb6strength3" value="50">
                            <input type="hidden" name="mb6strength4" value="100">
                            <input type="hidden" name="mb6strength5" value="100">
                            <input type="hidden" name="mb6dayprice" value="130,000">
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="pjct_mb pjct_mb5" data-listPj="menu5">
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb7">
                            <label for="chkMb7" class="chkShape"></label>
                            <label for="chkMb7" class="chkTxt f_mont">Y***</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">120,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year4.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill31" width="74" height="74" class="chartSkill1"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill32" width="74" height="74" class="chartSkill2"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill33" width="74" height="74" class="chartSkill3"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill34" width="74" height="74" class="chartSkill4"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill35" width="74" height="74" class="chartSkill5"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb7name" value="Y***">
                            <input type="hidden" name="mb7year" value="4">
                            <input type="hidden" name="mb7strength1" value="60">
                            <input type="hidden" name="mb7strength2" value="50">
                            <input type="hidden" name="mb7strength3" value="50">
                            <input type="hidden" name="mb7strength4" value="80">
                            <input type="hidden" name="mb7strength5" value="80">
                            <input type="hidden" name="mb7dayprice" value="120,000">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkMb8">
                            <label for="chkMb8" class="chkShape"></label>
                            <label for="chkMb8" class="chkTxt f_mont">N****</label>
                        </span>
                            <div class="right_info">
                                <p class="btn_pp">포트폴리오</p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">200,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">경력</p>
                                <img src="/assets/images/tft/year8.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">전문분야 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>로고</p>
                                        <canvas id="chartSkill36" width="74" height="74" class="chartSkill1"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>UX·UI</p>
                                        <canvas id="chartSkill37" width="74" height="74" class="chartSkill2"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>영상</p>
                                        <canvas id="chartSkill38" width="74" height="74" class="chartSkill3"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>개발</p>
                                        <canvas id="chartSkill39" width="74" height="74" class="chartSkill4"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>편집물</p>
                                        <canvas id="chartSkill40" width="74" height="74" class="chartSkill5"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="mb8name" value="N****">
                            <input type="hidden" name="mb8year" value="8">
                            <input type="hidden" name="mb8strength1" value="70">
                            <input type="hidden" name="mb8strength2" value="60">
                            <input type="hidden" name="mb8strength3" value="60">
                            <input type="hidden" name="mb8strength4" value="50">
                            <input type="hidden" name="mb8strength5" value="40">
                            <input type="hidden" name="mb8dayprice" value="200,000">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <p class="btn_free"><span>접어두기</span><img src="/assets/images/product/open.png" alt=""> </p>
    </div>
    <div class="team_make_area">
        <div class="title_team_box">
            <p class="step1_txt"><span>전문 에이전시를<br></span>
                선택하세요!</p>
            <p class="step2_txt"><i class="f_mont">Agency</i> <span>원하는 에이전시를</span><br>선택하였나요?</p>
            <p class="etc">선택한 에이전시를 다시 한번 확인하세요</p>
            <div class="card_agency">
                <div class="head_agency">
                    <p class="name f_mont">P****</p>
                    <p class="btn_agency_pp">포트폴리오</p>
                </div>
                <div class="body_agency">
                    <div class="info_body_agnecy">
                        <p class="lb">경력</p>
                        <div class="contents_info">
                            <img src="/assets/images/tft/year5.png" alt="">
                        </div>
                    </div>
                    <div class="info_body_agnecy">
                        <p class="lb">전문분야</p>
                        <div class="contents_info clearfix">
                            <div class="graph_field_box">
                                <p class="field">로고</p>
                                <canvas id="agencyChart1" width="62" height="62"></canvas>
                            </div>
                            <div class="graph_field_box">
                                <p class="field">UX·UI</p>
                                <canvas id="agencyChart1" width="62" height="62"></canvas>
                            </div>
                            <div class="graph_field_box">
                                <p class="field">영상</p>
                                <canvas id="agencyChart1" width="62" height="62"></canvas>
                            </div>
                            <div class="graph_field_box">
                                <p class="field">개발</p>
                                <canvas id="agencyChart1" width="62" height="62"></canvas>
                            </div>
                            <div class="graph_field_box">
                                <p class="field">편집물</p>
                                <canvas id="agencyChart1" width="62" height="62"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table_team_section">
            <div class="seat_pm active">
                <input type="hidden" class="hidden_value" value="">
                <div class="pp_seat">
                    <span>PM</span>
                </div>
            </div>
            <div class="table_line clearfix">
                <div class="table_contents">
                    <div class="seat_section seat_section_line1">
                        <div class="seat_team seat_mb none-active left" data-team="team1">
                            <input type="hidden" class="hidden_value" value="">
                            <div class="pp_seat" data-year="year5">
                                <span>로고</span>
                            </div>
                        </div>
                        <div class="seat_team seat_mb none-active" data-team="team2">
                            <input type="hidden" class="hidden_value" value="">
                            <div class="pp_seat" data-year="year2">
                                <span>로고</span>
                            </div>
                        </div>
                    </div>
                    <div class="table_team">
                        <div class="txt_table">
                            <p class="f_mont">Team Table</p>
                            <span class="f_mont"><img src="/assets/images/tft/member.png" alt=""><strong>1</strong></span>
                        </div>
                    </div>
                    <div class="seat_section">
                        <div class="seat_team seat_mb none-active left" data-team="team3">
                            <input type="hidden" class="hidden_value" value="">
                            <div class="pp_seat" data-year="year10">
                                <span>UX·UI</span>
                            </div>
                        </div>
                        <div class="seat_team seat_mb none-active" data-team="team4">
                            <input type="hidden" class="hidden_value" value="">
                            <div class="pp_seat" data-year="year3">
                                <span>UX·UI</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rest_seat">
                    <div class="left">
                        <div class="seat_team seat_mb none-active" data-team="team5">
                            <input type="hidden" class="hidden_value" value="">
                            <div class="pp_seat" data-year="year10">
                                <span>영상</span>
                            </div>
                        </div>
                    </div>
                    <div class="seat_team seat_mb none-active" data-team="team6">
                        <input type="hidden" class="hidden_value" value="">
                        <div class="pp_seat" data-year="year1">
                            <span>개발</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="price_team">
        <p class="oneday_txt">1 Day 총 금액</p>
        <p class="oneday_price"><span class="f_mont">00</span>만원</p>
    </div>
    <div class="step_project">
        <a href="/sub/tft/tft_step3.php" class="arrow_step next tftstep3">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="" class="arrow_step next tftstep2">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="/index.php#typePJ" class="arrow_step before">
            <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
            <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
        </a>
    </div>
    <div class="step_project_m">
        <a href="/index.php#typePJ2" class="before">
            <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
        </a>
        <a href="/sub/tft/tft_step3.php" class="arrow_step next tftstep3">
            NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
        </a>
        <a href="" class="next tftstep2">
            NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
        </a>
    </div>

    <!--popup-->
    <div class="pop_pf_section pop_mb_pf1">
        <div class="partner_pf_box ">
            <div class="pf_contents">
                <a href="#" class="close_pf"><img src="/assets/images/project/P10/close.png" alt=""></a>
                <div class="partner_pf_section">
                    <p class="mb_partner_name f_mont">N**</p>
                    <p class="title_pf">포트폴리오 <span class="f_mont">5</span></p>
                    <div class="slide_pf">
                        <div class="swiper-container slidePortfolio" id="slidePfMb">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="desc_pf">
                                        <p class="type">로고 (B.I / C.I)</p>
                                        <p class="name">DDP 로고 디자인 </p>
                                        <span class="date">2018.05.05</span>
                                    </div>
                                    <p class="img_pf"><img src="https://www.placehold.it/650X360" alt=""></p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="desc_pf">
                                        <p class="type">로고 (B.I / C.I)</p>
                                        <p class="name">DDP 로고 디자인 </p>
                                        <span class="date">2018.05.05</span>
                                    </div>
                                    <p class="img_pf"><img src="https://www.placehold.it/650X360" alt=""></p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="desc_pf">
                                        <p class="type">로고 (B.I / C.I)</p>
                                        <p class="name">DDP 로고 디자인 </p>
                                        <span class="date">2018.05.05</span>
                                    </div>
                                    <p class="img_pf"><img src="https://www.placehold.it/650X360" alt=""></p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="desc_pf">
                                        <p class="type">로고 (B.I / C.I)</p>
                                        <p class="name">DDP 로고 디자인 </p>
                                        <span class="date">2018.05.05</span>
                                    </div>
                                    <p class="img_pf"><img src="https://www.placehold.it/650X360" alt=""></p>
                                </div>
                                <div class="swiper-slide">
                                    <div class="desc_pf">
                                        <p class="type">로고 (B.I / C.I)</p>
                                        <p class="name">DDP 로고 디자인 </p>
                                        <span class="date">2018.05.05</span>
                                    </div>
                                    <p class="img_pf"><img src="https://www.placehold.it/650X360" alt=""></p>
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
</div>
<script src="/assets/js/swiper-master/dist/js/swiper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>
<script>
    $(".pjct_mb .chkbox_chk").click(function () {
        var clickChk = $(this);
        if(clickChk.is(":checked") == true){
            $(".pjct_mb .chkbox_chk").prop("checked", false);
            clickChk.prop("checked",true    );
            $(".seat_mb").removeClass("none-active").addClass("active");
        } else {
            $(".seat_mb").removeClass("active").addClass("none-active");
        }
    });

    //portfolio
    $('.btn_pp').click(function () {
        $(".pop_pf_section ").addClass("active");
        $(".pop_pf_section .close_pf").click(function () {
            $(".pop_pf_section ").removeClass("active");
        });

    });

    //button
    $(".step_project .next.tftstep2").click(function () {
        $(".tft_wra").removeClass("tft_step1");
        $(".tft_wra").addClass("tft_step2"); /*step class*/
        $(".step_project .before").attr("href","");
        $(".step1_txt").hide();
        $(".step2_txt").show();/*step title*/
        $(".pp_seat").removeClass("focus");
        $(".step_project .before").click(function () {
            $(".tft_wra").addClass("tft_step1");
            $(".tft_wra").removeClass("tft_step2");
            $(".step_project .before").attr("href","/index.php#typePJ");
            $(".step2_txt").hide();
            $(".step1_txt").show();
            return false;
        });
        return false;
    });
    $(".step_project_m .next.tftstep2").click(function () {
        $(".tft_wra").removeClass("tft_step1");
        $(".tft_wra").addClass("tft_step2m"); /*step class*/
        $(".step_project_m .before").attr("href","");
        $(".step1_txt").hide();
        $(".step2_txt").show();/*step title*/
        $(".pp_seat").removeClass("focus");
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        $(".step_project_m .before").click(function () {
            $(".tft_wra").addClass("tft_step1");
            $(".tft_wra").removeClass("tft_step2m");
            $(".step_project_m .before").attr("href","/index.php#typePJ2");
            $(".step2_txt").hide();
            $(".step1_txt").show();
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
            return false;
        });
        return false;
    });
    
    /*graph option*/
    var optionsTeam = {
        tooltips: {
            enabled: false,
        },
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    display: false,
                },
            }],
            yAxes: [{
                display: false,
                gridLines: {
                    display: false,
                },
            }]
        }
    };
    var menuData = '';
    var chartDataSet = [0][0];
    var chartNum = 1;
    var category = "menu1";
    var listNum = $('.pjct_mb1 > li').length;
    //차트 데이터 불러오기
    //카테고리별 데이터 불러오기 ( category )
    var chartDataList = function(category) {
        $.ajax({
            url: './datasets2.json',
            type: 'get',
            dataset: 'json',
            async: false,
            data: {
            },
            success: function(data) {
                /*console.log(data.dataset[category]);*/
                chartDataSet = data.dataset[category];
            }
        });
    };
    chartDataList(category);

    // 해당 ID당 매칭 후 차트 그래프 그려주기
    // num은 카테고리에 해당하는 멤버 리스트 수(동적)
    // ex) document.querySelectorAll('.pjct_pm > li').length
    var createChartFn = function(num) {
        for( var i = 0; i < num; i++ ) {
            for( var j = 0; j < 5; j ++ ) {
                var chartId = document.getElementById("chartSkill" + (chartNum) ).id;
                var ctx = document.getElementById("chartSkill" + (chartNum++) ).getContext('2d');
                new Chart(ctx, {
                    type: 'pie',
                    data: chartDataSet[i][j],
                    options: optionsTeam
                });
                $('#'+chartId).parent().find('.chart_txt').remove();
                //데이터값 차트에 표시
                $('#'+chartId).parent().append('<div class="chart_txt" style="">' + chartDataSet[i][j].datasets[0].data[0] +'</div>');
            }
        }
    };
    createChartFn(listNum);
    $(".type_pjct_menu li").click(function () {
        $(".type_pjct_menu li").removeClass("focus");
        $(this).addClass("focus");
        menuData = $(this).attr("data-typePj");
        /*var menuData = $(this).attr("data-typePj");*/
        $(".pjct_people_list ul").removeClass("active");
        $(".pjct_people_list ul[data-listPj='"+menuData+"']").addClass("active");

        //탭 메뉴에 해당하는 데이터 불러오기
        chartDataList(menuData);

        //탭 메뉴 리스트 갯수
        var listSize = $('ul[data-listpj="'+menuData+'"] li' ).size();

        //탭 메뉴 해당 첫 Chart(canvas)의 id값 가져오기
        var ulFirstId = $('ul[data-listpj="'+ menuData +'"] > '+ 'li:first-child .graph_section > .graph_box:first-child canvas')[0].id;
        // var ulFirstId = $(`ul[data-listpj="${menuData}"] > li:first-child .graph_section > .graph_box:first-child canvas`)[0].id;

        //아이디값 맨 뒤 숫자값만 가져오기
        chartNum = ulFirstId.replace(/[^0-9]/g,"");

        createChartFn(listSize);
    });


    /*포트폴리오*/
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
