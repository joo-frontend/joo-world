<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<style>
	.video_box{display: none!important}
</style>
<div class="main_wra">
    <div class="chat_bot" onclick="openChat()">
        <div class="img_chat">
            <img src="/assets/images/project/bot_big.png" alt="">
        </div>
        <div class="ballon step01">
            <p>전문업체 추천해줄까?</p>
        </div>
        <!--<div class="ballon step02">
            <p>혹시 궁금한거 있어?</p>
        </div>-->
    </div>
    <div class="chatting_area">
        <div class="chat_bot_top">
            <span class="img"><img src="/assets/images/project/bot_small.png" alt=""></span>
            <div class="right_menu">
                <a href="#" class="call_consultant"><img src="/assets/images/project/call.png" alt="">상담원에게 전화걸기</a>
                <a href="#" class="close_chatting"><img src="/assets/images/project/close.png" alt=""></a>
            </div>
        </div>
        <div class="chat_content">
           	<!--
            <div class="txt_chat txt_question">
                <span class="time">11:23</span>
                <span class="txt_content">질문질문질문질문 ?</span>
            </div>
            <div class="txt_chat txt_answer">
                <span class="txt_content">답변답변답변답변 !</span>
                <span class="time">11:24</span>
            </div>
            <div class="txt_chat txt_question">
                <span class="time">11:35</span>
                <span class="txt_content">질문질문질문질문 ?</span>
            </div>
            <div class="txt_chat txt_answer">
                <span class="txt_content">답변답변답변답변 !<br>답변답변답변답변답변답변답변답변<br>
                답변답변답변답변답변답변답변답변<br>
                답변답변답변답변답변답변답변답변<br>
                답변답변답변답변답변답변답변답변<br>
                답변답변답변답변답변답변답변답변</span>
                <span class="time">11:36</span>
            </div>
            <p class="date">2018년 12월 11일</p>
            -->
        </div>
        <div class="chat_customer">
            <div class="write_txt">
                <textarea name="txtChat" class="txtbox_chat" placeholder="무엇이 궁금한가요?"></textarea>
                <button class="btn_send"><!--<img src="/assets/images/project/send.png" alt="">-->보내기</button>
            </div>
        </div>
    </div>
    <!--main pc-->
    <div class="main_area" id="typeMain">
        <div class="title_main_box">
            <div class="subtitle_main">프로젝트 아웃소싱</div>
            <div class="title_main"><span>생각하지 마세요</span><br>클릭만 <i></i> 하세요</div>
        </div>
        <div class="info_site">
            <div class="each_info_main clearfix">
                <p class="lb">등록 업체수</p>
                <p class="num f_mont">203</p>
            </div>
            <div class="each_info_main clearfix">
                <p class="lb">매칭 성공률</p>
                <p class="num f_mont">1,058</p>
            </div>
            <div class="each_info_main clearfix">
                <p class="lb">신규 파트너스</p>
                <p class="num f_mont">56</p>
            </div>
            <div class="each_info_main clearfix">
                <p class="lb">DEASY 매력지수</p>
                <p class="num f_mont">2,589,684</p>
            </div>
        </div>
        <div class="main_click_num">
            <p class="title">지난 달 클릭 수</p>
            <div class="number_click clearfix">
                <p class="f_mont countUp_item" data-maxNumber="5">0</p>
                <p class="f_mont countUp_item" data-maxNumber="8">0</p>
                <p class="f_mont countUp_item" data-maxNumber="5">0</p>
            </div>
        </div>
        <div class="click_menu">
            <div class="start_project">
                <p class="title">그럼, 시작해볼까요?</p>
                <a href="#" class="scroll_direct">
                    <img class="pc_img" src="/assets/images/project/P1/scroll.png" alt="">
                    <img class="mb_img" src="/assets/images/project/close.png" alt="">
                </a>
            </div>
            <ul class="clearfix">
<!--                <li class="schedule"><a href="#" class="f_mont">Agency</a></li>-->
<!--                <li class="budget"><a href="#" class="f_mont">Budget</a></li>-->
                <li class="agency_nav">믿고 맡길 회사, 직접 찾겠다!!!!!</li>
                <li class="tft_nav">내 팀은 내가 만든다!!!!!</li>
            </ul>
        </div>
    </div>
    <div class="consult_area" id="typeMainDetail">
        <div class="consult_box consult_box1">
            <div class="title f_mont">
<!--                <img class="hover_off" src="/assets/images/project/P5/calendar_on.png" alt="">-->
<!--                <img class="hover_on" src="/assets/images/project/P5/calendar.png" alt="">-->
                <img src="/assets/images/tft/agency.png" alt="">
                Agency
                <div class="info_agency_box info_agency_btn">
                    <img src="/assets/images/tft/info_agency.png" alt="">
                    <div class="info_helper">
                        <p class="info_title">Agency란?</p>
                        <p class="info_contents">
                            나의 스케줄과 예산에 적합한 업체들을 추천받아<br/>
                            포트폴리오를 확인할 수 있으며,<br/>
                            나의 프로젝트를 공개입찰해 더 많은 업체들이<br/>
                            참여할 수 있도록 '프로젝트 공개입찰'을 등록할 수 있어요
                        </p>
                    </div>
                    <p class="subtitle">믿고 맡길 회사, 직접 찾겠다!!!!! 그렇다면,</p>
                </div>
            </div>

            <p class="consult_desc">믿고 맡길<br>회사를 골라볼래?<br><span>그렇다면,</span></p>

            <div class="video_box">
                <video id="agencyVideo" controls loop>
                    <source src="/assets/images/tft/sample_video.mp4" type="video/mp4">
                </video>
            </div>

            <div class="ani_here">
                <div class="btnMainBox">
                    <a href="sub/agency/agency_budget.php">여기!</a>
                    <svg id="out_line">
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    </svg>
                    <svg id="out_line2">
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    </svg>
                    <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
                </div>
            </div>
        </div>
        <div class="consult_box consult_box2">
            <div class="title f_mont">
<!--                <img class="hover_off" src="/assets/images/project/P5/budget_on.png" alt="">-->
<!--                <img class="hover_on" src="/assets/images/project/P5/budget.png" alt="">-->
                <img src="/assets/images/tft/tft.png" alt="">
                Task for Team
                <div class="info_tft_box info_tft_btn">
                    <img src="/assets/images/tft/info_tft.png" alt="">
                    <div class="info_helper">
                        <p class="info_title">Task for Team 이란?</p>
                        <p class="info_contents">
                            분야별 다양한 프리랜서들의<br/>
                            전문분야, 강점, 1day 금액 등의 프로필을 확인하고<br/>
                            내가 원하는 팀원들로 팀을 직접 구성할 수 있어요
                        </p>
                    </div>
                </div>
                <p class="subtitle">내 팀은 내가 만든다!!!!! 그렇다면,</p>
            </div>
            <p class="consult_desc">내 팀은<br>내가 만든다!!!!!<br><span>그렇다면,</span></p>

            <div class="video_box">
                <video id="tftVideo" controls loop>
                    <source src="/assets/images/tft/sample_video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="ani_here">
                <div class="btnMainBox">
                    <a href="/sub/tft/tft_step1-2.php">여기!</a>
                    <svg id="out_line">
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    </svg>
                    <svg id="out_line2">
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                        <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    </svg>
                    <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
                </div>
            </div>
        </div>
    </div>
    <!--slide-->
   <!-- <div class="swiper-container" id="mainPagePC">
        <div class="swiper-wrapper">
            <div class="swiper-slide">

            </div>
            <div class="swiper-slide">
                <div class="consult_box" id="typePJ" >
                    <p class="title f_mont">
                        <img class="hover_off" src="/assets/images/project/P5/calendar_on.png" alt="">
                        <img class="hover_on" src="/assets/images/project/P5/calendar.png" alt="">
                        Schedule
                    </p>
                    <p class="consult_desc">마감일정<br>빠듯하지?<br><span>그렇다면,</span></p>
                    <div class="ani_here">
                        <div class="btnMainBox">
                            <a href="sub/schedule/schedule.php">여기!</a>
                            <svg id="out_line">
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg id="out_line2">
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
                        </div>
                    </div>
                </div>
                <div class="consult_box consult_box2" id="typePJ2">
                    <p class="title f_mont">
                        <img class="hover_off" src="/assets/images/project/P5/budget_on.png" alt="">
                        <img class="hover_on" src="/assets/images/project/P5/budget.png" alt="">
                        Budget
                    </p>
                    <p class="consult_desc">예산이<br>정해져있어?<br><span>그렇다면,</span></p>
                    <div class="ani_here">
                        <div class="btnMainBox">
                            <a href="sub/budget/budget_type1.php">여기!</a>
                            <svg id="out_line">
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg id="out_line2">
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!--main mobile-->
</div>
<div class="main_wra main_mobile_wra">
    <div class="main_area" id="typeMain">
        <div class="title_main_box">
            <div class="subtitle_main">프로젝트 아웃소싱</div>
            <div class="title_main"><span>생각하지 마세요</span><br>클릭만 <i></i> 하세요</div>
        </div>
        <div class="info_site">
            <div class="each_info_main clearfix">
                <p class="lb">등록 업체수</p>
                <p class="num f_mont">203</p>
            </div>
            <div class="each_info_main clearfix">
                <p class="lb">매칭 성공률</p>
                <p class="num f_mont">1,058</p>
            </div>
            <div class="each_info_main clearfix">
                <p class="lb">신규 파트너스</p>
                <p class="num f_mont">56</p>
            </div>
            <div class="each_info_main clearfix">
                <p class="lb">DEASY 매력지수</p>
                <p class="num f_mont">2,589,684</p>
            </div>
        </div>
        <div class="main_click_num">
            <p class="title">지난 달 클릭 수</p>
            <div class="number_click clearfix">
                <p class="f_mont countUp_item" data-maxNumber="5">0</p>
                <p class="f_mont countUp_item" data-maxNumber="8">0</p>
                <p class="f_mont countUp_item" data-maxNumber="5">0</p>
            </div>
        </div>
        <div class="click_menu">
            <div class="start_project">
                <p class="title">그럼, 시작해볼까요?</p>
                <a href="#" class="scroll_direct">
                    <img class="pc_img" src="/assets/images/project/P1/scroll.png" alt="">
                    <img class="mb_img" src="/assets/images/project/close.png" alt="">
                </a>
            </div>
            <ul class="clearfix">
              <!--  <li class="schedule" id="mainmenu1"><a href="#" class="f_mont">Schedule</a></li>
                <li class="budget" id="mainmenu2"><a href="#" class="f_mont">Budget</a></li>-->
                <li class="agency_nav" id="mainmenu1"><a href="">믿고 맡길 회사, 직접 찾겠다!!!!!</a></li>
                <li class="tft_nav" id="mainmenu2"><a href="">내 팀은 내가 만든다!!!!!</a></li>
            </ul>
        </div>
    </div>
    <div class="consult_box consult_box1" id="typePJ">
        <div class="title f_mont">
            <!--                <img class="hover_off" src="/assets/images/project/P5/calendar_on.png" alt="">-->
            <!--                <img class="hover_on" src="/assets/images/project/P5/calendar.png" alt="">-->
            <img src="/assets/images/tft/agency.png" alt="">
            Agency
            <div class="info_agency_box info_agency_btn">
                <img src="/assets/images/tft/info_agency.png" alt="">
                <div class="info_helper">
                    <p class="info_title">Agency란?</p>
                    <p class="info_contents">
                        나의 스케줄과 예산에 적합한 업체들을 추천받아<br/>
                        포트폴리오를 확인할 수 있으며,<br/>
                        나의 프로젝트를 공개입찰해 더 많은 업체들이<br/>
                        참여할 수 있도록 '프로젝트 공개입찰'을 등록할 수 있어요
                    </p>
                </div>
                <p class="subtitle">믿고 맡길 회사, 직접 찾겠다!!!!! 그렇다면,</p>
            </div>
        </div>

        <p class="consult_desc">믿고 맡길<br>회사를 골라볼래?<br><span>그렇다면,</span></p>

        <div class="video_box">
            <video id="agencyVideo" controls loop>
                <source src="/assets/images/tft/sample_video.mp4" type="video/mp4">
            </video>
        </div>

        <div class="ani_here">
            <div class="btnMainBox">
                <a href="sub/agency/agency_budget.php">여기!</a>
                <svg id="out_line">
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                </svg>
                <svg id="out_line2">
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                </svg>
                <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
            </div>
        </div>
        <div class="click_menu">
            <ul class="clearfix">
                <li class="tft_nav" id="mainpage2"><a href="#">내 팀은 내가 만든다!!!!!!</a></li>
            </ul>
        </div>
    </div>
    <div class="consult_box consult_box2" id="typePJ2">
        <div class="title f_mont">
            <!--                <img class="hover_off" src="/assets/images/project/P5/budget_on.png" alt="">-->
            <!--                <img class="hover_on" src="/assets/images/project/P5/budget.png" alt="">-->
            <img src="/assets/images/tft/tft_blue.png" alt="">
            Task for Team
            <div class="info_tft_box info_tft_btn">
                <img src="/assets/images/tft/info_agency.png" alt="">
                <div class="info_helper">
                    <p class="info_title">Task for Team 이란?</p>
                    <p class="info_contents">
                        분야별 다양한 프리랜서들의<br/>
                        전문분야, 강점, 1day 금액 등의 프로필을 확인하고<br/>
                        내가 원하는 팀원들로 팀을 직접 구성할 수 있어요
                    </p>
                </div>
            </div>
            <p class="subtitle">내 팀은 내가 만든다!!!!! 그렇다면,</p>
        </div>
        <p class="consult_desc">내 팀은<br>내가 만든다!!!!!<br><span>그렇다면,</span></p>

        <div class="video_box">
            <video id="tftVideo" controls loop>
                <source src="/assets/images/tft/sample_video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="ani_here">
            <div class="btnMainBox">
                <a href="/sub/tft/tft_step1-2.php">여기!</a>
                <svg id="out_line">
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                </svg>
                <svg id="out_line2">
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                    <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                </svg>
                <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
            </div>
        </div>
        <div class="click_menu">
            <ul class="clearfix">
                <li class="agency_nav" id="mainmenu1"><a href="">믿고 맡길 회사, 직접 찾겠다!!!!!</a></li>
            </ul>
        </div>
    </div>

</div>
    <!--slide-->
    <!--<div class="swiper-container" id="mainPageMobile">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="main_area" id="typeMain">
                    <div class="title_main_box">
                        <div class="subtitle_main">프로젝트 아웃소싱</div>
                        <div class="title_main"><span>생각하지 마세요</span><br>클릭만 <i></i> 하세요</div>
                    </div>
                    <div class="info_site">
                        <div class="each_info_main clearfix">
                            <p class="lb">등록 업체수</p>
                            <p class="num f_mont">203</p>
                        </div>
                        <div class="each_info_main clearfix">
                            <p class="lb">매칭 성공률</p>
                            <p class="num f_mont">1058</p>
                        </div>
                        <div class="each_info_main clearfix">
                            <p class="lb">신규 파트너스</p>
                            <p class="num f_mont">56</p>
                        </div>
                        <div class="each_info_main clearfix">
                            <p class="lb">DEASY 매력지수</p>
                            <p class="num f_mont">2,589,684</p>
                        </div>
                    </div>
                    <div class="main_click_num">
                        <p class="title">지난 달 클릭 수</p>
                        <div class="number_click clearfix">
                            <p class="f_mont">5</p>
                            <p class="f_mont">8</p>
                            <p class="f_mont">5</p>
                        </div>
                    </div>
                    <div class="click_menu">
                        <div class="start_project">
                            <p class="title">그럼, 시작해볼까요?</p>
                            <a href="#" class="scroll_direct">
                                <img class="pc_img" src="/assets/images/project/P1/scroll.png" alt="">
                                <img class="mb_img" src="/assets/images/project/close.png" alt="">
                            </a>
                        </div>
                        <ul class="clearfix">
                            <li class="schedule" id="mainmenu1"><a href="#" class="f_mont">Schedule</a></li>
                            <li class="budget" id="mainmenu2"><a href="#" class="f_mont">Budget</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="consult_box" id="typePJ" >
                    <p class="title f_mont">
                        <img class="hover_off" src="/assets/images/project/P5/calendar_on.png" alt="">
                        <img class="hover_on" src="/assets/images/project/P5/calendar.png" alt="">
                        Schedule
                    </p>
                    <p class="consult_desc">마감일정<br>빠듯하지?<br><span>그렇다면,</span></p>
                    <div class="ani_here">
                        <div class="btnMainBox">
                            <a href="sub/schedule/schedule.php">여기!</a>
                            <svg id="out_line">
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg id="out_line2">
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
                        </div>
                    </div>
                    <div class="click_menu">
                        <ul class="clearfix">
                            <li class="budget" id="mainpage2"><a href="#" class="f_mont">Budget</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="consult_box consult_box2" id="typePJ2">
                    <p class="title f_mont">
                        <img class="hover_off" src="/assets/images/project/P5/budget_on.png" alt="">
                        <img class="hover_on" src="/assets/images/project/P5/budget.png" alt="">
                        Budget
                    </p>
                    <p class="consult_desc">예산이<br>정해져있어?<br><span>그렇다면,</span></p>
                    <div class="ani_here">
                        <div class="btnMainBox">
                            <a href="sub/budget/budget_type1.php">여기!</a>
                            <svg id="out_line">
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 40 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg id="out_line2">
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                                <g><path class="out_line_item" d="M0 46 H 0 L 0 0 Z"></path></g>
                            </svg>
                            <svg version="1.1" id="dotted_line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145 144" style="enable-background:new 0 0 145 144;" xml:space="preserve">
			<g>
                <g>
                    <path class="dotted_line_item" d="M63.9,143.3L63.9,143.3L63.9,143.3c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-1.9l0,0
						c1.2,0.1,2.1,1.3,1.9,2.5l0,0c-0.1,1.1-1.1,2-2.2,2l0,0C64.1,143.3,64,143.3,63.9,143.3z M78.7,141.3c-0.2-1.2,0.7-2.3,1.9-2.5
						l0,0c1.2-0.1,2.3,0.7,2.5,2l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c0,0,0,0,0,0l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C79.8,143.3,78.8,142.4,78.7,141.3z M47.1,139.1L47.1,139.1L47.1,139.1c-1.1-0.4-1.7-1.7-1.3-2.9l0,0c0.4-1.1,1.7-1.7,2.9-1.3l0,0
						c1.1,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C47.6,139.3,47.3,139.2,47.1,139.1z M95.1,137.8
						c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.2-0.1,2.4-1.3,2.9l0,0l0,0l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0
						C96.3,139.2,95.4,138.7,95.1,137.8z M31.8,131.1L31.8,131.1L31.8,131.1c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0
						c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0C32.6,131.5,32.2,131.4,31.8,131.1z M110.2,130.5c-0.7-1-0.5-2.4,0.6-3.1l0,0
						c1-0.7,2.4-0.4,3.1,0.6l0,0c0.7,1,0.5,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C111.3,131.4,110.6,131.1,110.2,130.5z
						 M18.8,119.6L18.8,119.6L18.8,119.6c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0
						c-0.4,0.4-1,0.6-1.5,0.6l0,0C19.9,120.4,19.3,120.1,18.8,119.6z M123.1,119.8c-0.9-0.8-1-2.2-0.2-3.1l0,0c0.8-0.9,2.2-1,3.1-0.2
						l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0l0,0l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C124,120.3,123.5,120.1,123.1,119.8z M9,105.4L9,105.4L9,105.4
						c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0c0.6,1.1,0.1,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0
						C10.2,106.6,9.4,106.2,9,105.4z M133.1,106.3c-1.1-0.6-1.5-1.9-0.9-3l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0
						l0,0l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0C133.7,106.5,133.4,106.5,133.1,106.3z M2.8,89.2L2.8,89.2L2.8,89.2c-0.3-1.2,0.4-2.4,1.6-2.7
						l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C4,90.9,3.1,90.3,2.8,89.2z
						 M139.5,90.8c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C139.9,90.9,139.7,90.8,139.5,90.8z M0.7,72.1c0-1.2,1-2.2,2.2-2.2l0,0c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2l0,0
						C1.7,74.3,0.7,73.3,0.7,72.1z M139.8,72C139.8,72,139.8,71.9,139.8,72L139.8,72c0-0.1,0-0.1,0-0.1l0,0c0-1.2,1-2.2,2.2-2.2l0,0
						c1.2,0,2.2,1,2.2,2.2l0,0c0,0,0,0,0,0.1l0,0c0,0,0,0,0,0.1l0,0c0,1.2-1,2.2-2.2,2.2l0,0C140.8,74.2,139.8,73.2,139.8,72z
						 M4.4,57.6c-1.2-0.3-1.9-1.5-1.6-2.7l0,0c0.3-1.2,1.5-1.9,2.7-1.6l0,0c1.2,0.3,1.9,1.5,1.6,2.7l0,0c-0.3,1-1.2,1.7-2.2,1.7l0,0
						C4.8,57.7,4.6,57.6,4.4,57.6z M137.8,55.8L137.8,55.8c-0.3-1.2,0.4-2.4,1.6-2.7l0,0c1.2-0.3,2.4,0.4,2.7,1.6l0,0l0,0l0,0
						c0.3,1.2-0.4,2.4-1.6,2.7l0,0c-0.2,0.1-0.4,0.1-0.5,0.1l0,0C139,57.4,138.1,56.8,137.8,55.8z M9.8,41.7c-1.1-0.6-1.5-1.9-0.9-3
						l0,0c0,0,0,0,0,0l0,0c0.6-1.1,1.9-1.5,3-0.9l0,0c1.1,0.6,1.5,1.9,0.9,3l0,0c-0.4,0.8-1.2,1.2-2,1.2l0,0
						C10.5,42,10.2,41.9,9.8,41.7z M132.1,40.6L132.1,40.6c-0.6-1.1-0.2-2.4,0.9-3l0,0c1.1-0.6,2.4-0.2,3,0.9l0,0
						c0.6,1.1,0.2,2.4-0.9,3l0,0c-0.3,0.2-0.7,0.3-1,0.3l0,0C133.2,41.8,132.4,41.4,132.1,40.6z M18.9,27.6c-0.9-0.8-1-2.2-0.2-3.1l0,0
						c0.8-0.9,2.2-1,3.1-0.2l0,0c0.9,0.8,1,2.2,0.2,3.1l0,0c-0.4,0.5-1,0.8-1.7,0.8l0,0C19.9,28.2,19.3,28,18.9,27.6z M122.8,27.3
						L122.8,27.3c-0.8-0.9-0.7-2.3,0.2-3.1l0,0c0.9-0.8,2.3-0.7,3.1,0.2l0,0c0.8,0.9,0.7,2.3-0.2,3.1l0,0c-0.4,0.4-1,0.6-1.5,0.6l0,0
						C123.8,28,123.2,27.8,122.8,27.3z M31.1,16.1c-0.7-1-0.5-2.4,0.6-3.1l0,0l0,0l0,0c1-0.7,2.4-0.5,3.1,0.6l0,0
						c0.7,1,0.4,2.4-0.6,3.1l0,0c-0.4,0.3-0.8,0.4-1.3,0.4l0,0C32.2,17.1,31.5,16.7,31.1,16.1z M110.6,16.5L110.6,16.5
						c-1-0.7-1.3-2.1-0.6-3.1l0,0c0.7-1,2.1-1.3,3.1-0.6l0,0l0,0l0,0c1,0.7,1.3,2.1,0.6,3.1l0,0c-0.4,0.6-1.1,1-1.8,1l0,0
						C111.5,16.9,111,16.8,110.6,16.5z M45.7,7.8c-0.4-1.1,0.1-2.4,1.3-2.9l0,0c1.1-0.4,2.4,0.1,2.9,1.3l0,0c0.4,1.1-0.1,2.4-1.3,2.9
						l0,0c-0.3,0.1-0.5,0.1-0.8,0.1l0,0C46.8,9.2,46,8.7,45.7,7.8z M96.3,9L96.3,9c-1.1-0.4-1.7-1.7-1.3-2.9l0,0
						c0.4-1.2,1.7-1.7,2.9-1.3l0,0c1.2,0.4,1.7,1.7,1.3,2.9l0,0c-0.3,0.9-1.2,1.4-2.1,1.4l0,0C96.8,9.2,96.5,9.1,96.3,9z M61.8,3.3
						c-0.1-1.2,0.7-2.3,1.9-2.5l0,0c1.2-0.1,2.3,0.7,2.5,1.9l0,0c0.1,1.2-0.7,2.3-1.9,2.5l0,0c-0.1,0-0.2,0-0.3,0l0,0
						C62.9,5.2,61.9,4.4,61.8,3.3z M80.5,5.2c-1.2-0.1-2.1-1.3-2-2.5l0,0c0.1-1.2,1.3-2.1,2.5-2l0,0l0,0l0,0c1.2,0.1,2.1,1.3,2,2.5l0,0
						c-0.1,1.1-1.1,2-2.2,2l0,0C80.7,5.2,80.6,5.2,80.5,5.2z"/>
                </g>
            </g>
			</svg>
                        </div>
                    </div>
                    <div class="click_menu">
                        <ul class="clearfix">
                            <li class="schedule" id="mainpage1"><a href="#" class="f_mont">Schedule</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>-->

</div>

<script src="/assets/js/swiper-master/dist/js/swiper.js"></script>
<script>
    /**/
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('#element').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    function myFunction(x) {
        if (x.matches) {
            var consultArea = $("#typePJ").offset();
            var consultArea2 = $("#typePJ2").offset();
            $(".click_menu li.tft_nav").click(function () {
                $("html,body").animate({scrollTop: consultArea2.top}, 500);
                return false;
            });
            $(".scroll_direct,.click_menu li.agency_nav").click(function () {
                $("html,body").animate({scrollTop: consultArea.top}, 500);
                return false;
            });
        } else {
            $(".scroll_direct,.click_menu li").click(function (event) {
                event.preventDefault();
                var scrollPosition = $("#typeMainDetail").offset();
                $("html,body").animate({
                    scrollTop: scrollPosition.top
                },500);
            });
        }
    }
    var x = window.matchMedia("(max-width: 1024px)")
    myFunction(x);
    x.addListener(myFunction);



    /*var swiper1 = new Swiper('#mainPagePC', {
        direction: 'vertical',
        speed: 500,
        allowTouchMove: false,
        mousewheel: true,
    });
    document.querySelector('.scroll_direct').addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.slideTo(1, 500);
    });
    document.querySelector('.click_menu li.schedule').addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.slideTo(1, 500);
    });
    document.querySelector('.click_menu li.budget').addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.slideTo(1, 500);
    });

    var swiper = new Swiper('#mainPageMobile', {
        direction: 'vertical',
        speed: 500,
    });
    document.querySelector('#mainmenu1').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(1, 500);
    });
    document.querySelector('#mainmenu2').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(2, 500);
    });
    document.querySelector('#mainpage1').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(1, 500);
    });
    document.querySelector('#mainpage2').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(2, 500);
    });
*/


    /*chat bot*/
    setInterval(function () {
        $(".chat_bot .ballon").toggleClass("active");
    },4000);
    function openChat() {
        $(".chatting_area").addClass("active");
        $(".close_chatting").click(function () {
            $(".chatting_area").removeClass("active");
            return false;
        });
    }

	$(".countUp_item").each(function() {
		var count_point = $(this).attr("data-maxnumber");
  		$(this).animate({countNum: count_point},{
			duration: 500,
			easing:"linear",
			step: function() {
				$(this).text(Math.floor(this.countNum));
			},
			complete: function() {
				$(this).text(this.countNum);
			}
		});  
	});

    $(".consult_box1").hover(function() {
        var aVideo = document.querySelector("#agencyVideo");
        aVideo.currentTime = 0;
        aVideo.play();
    }, function () {
        var aVideo = document.querySelector("#agencyVideo");
        aVideo.pause();
    });

    $(".consult_box2").hover(function() {
        var tVideo = document.querySelector("#tftVideo");
        tVideo.currentTime = 0;
        tVideo.play();
    }, function () {
        var tVideo = document.querySelector("#tftVideo");
        tVideo.pause();
    });
	
	
	/*챗봇 임시*/
	var date_chk_item = [];
	var date_chk = true;
	var date_day_text = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
	
	$(".btn_send").click(function(){
		var date = new Date();
		console.log(date);
		var date_y = date.getFullYear();
		var date_m = (date.getMonth() + 1);
		var date_d = date.getDate();
		var time_h = date.getHours();
		var time_m = date.getMinutes();
		var date_day_number = date.getDay();
		var date_day = date_day_text[date_day_number];
		var date_text = date_y + "." + date_m + "." + date_d + " " + date_day;
		var msg_val = $(".txtbox_chat").val();
		$(".date").each(function(i){
			var date_chk_text = $(this).text();
			date_chk_item.push(date_chk_text);
		});
		$.each(date_chk_item,function(i,dateChk){
			if(dateChk == date_text){
				date_chk = false;
			}
		});
		if(msg_val !== ""){
			if(date_chk){
			$(".chat_content").append("<p class='date'>" + date_text + "</p>");
			}
			$(".chat_content").append("<div class='txt_chat txt_question'><span class='time'>" + time_h + ":" + time_m + "</span><span class='txt_content'>" + msg_val + "</span></div>");
			$(".txtbox_chat").val("");
			$(".chat_content").scrollTop($(".chat_content")[0].scrollHeight);
		}else{
			alert("메세지를 입력해주세요");
		}
	});
	$(".txtbox_chat").focus(function(){
		$(document).keypress(function(event){
			var keycode = event.keyCode || event.which;
			if(keycode == '13') {
				var date = new Date();
				var date_y = date.getFullYear();
				var date_m = (date.getMonth() + 1);
				var date_d = date.getDate();
				var date_day_number = date.getDay();
				var date_day = date_day_text[date_day_number];
				var date_text = date_y + "." + date_m + "." + date_d + " " + date_day;
				var msg_val = $(".txtbox_chat").val();
				$(".date").each(function(i){
					var date_chk_text = $(this).text();
					date_chk_item.push(date_chk_text);
				});
				$.each(date_chk_item,function(i,dateChk){
					if(dateChk == date_text){
						date_chk = false;
					}
				});
				if(msg_val !== ""){
					if(date_chk){
						$(".chat_content").append("<p class='date'>" + date_text + "</p>");
					}
					$(".chat_content").append("<div class='txt_chat txt_question'><span class='time'>" + time_h + ":" + time_m + "</span><span class='txt_content'>" + msg_val + "</span></div>");
					$(".txtbox_chat").val("");
					$(".chat_content").scrollTop($(".chat_content")[0].scrollHeight);
					$(".txtbox_chat").focusout();
					setTimeout(function(){
						$(".txtbox_chat").focusin();
					},100);
				}else{
					$(".txtbox_chat").focusout();
					setTimeout(function(){
						$(".txtbox_chat").focusin();
					},100);
				}
			}
		});
	});
	/*//*/
</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
