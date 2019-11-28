<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="tft_step3_wra">
    <div class="calendar_tft_area">
        <div class="title_team_box">
            <p class="step3_txt"><i class="f_mont">Meeting Schedule</i>
                <span>마지막으로, 미팅 일정</span>을 선택하세요!</p>
           <!-- <div class="pm_profile">
                <p class="name"><strong class="f_mont">Park Kihoon</strong>박기훈</p>
                <span class="detail_btn_pf">PM 프로필 보기</span>
            </div>
            <div class="pop_pf_pm">
                <div class="member_prtf">
                <p class="pm f_mont">Product Manager</p>
                    <span class="close_mb_prtf"><img src="/assets/images/tft/profile_close.png" alt=""></span>
                    <div class="mb_info">
                        <img src="/assets/images/tft/year5.png" alt="">
                    </div>
                    <div class="detail_skill_mb">
                        <div class="item_skill_mb">
                            <p class="lb">기획력</p>
                            <div class="bar_skill first">
                                <p><span class="f_mont" style="width: 70%">70</span></p>
                            </div>
                        </div>
                        <div class="item_skill_mb">
                            <p class="lb">문제해결</p>
                            <div class="bar_skill second_pm">
                                <p><span class="f_mont" style="width: 80%">80</span></p>
                            </div>
                        </div>
                        <div class="item_skill_mb">
                            <p class="lb">소통</p>
                            <div class="bar_skill third_pm">
                                <p><span class="f_mont" style="width: 60%">60</span></p>
                            </div>
                        </div>
                        <div class="item_skill_mb">
                            <p class="lb">일정준수</p>
                            <div class="bar_skill fourth">
                                <p><span class="f_mont" style="width: 40%">40</span></p>
                            </div>
                        </div>
                        <div class="item_skill_mb">
                            <p class="lb">친절함</p>
                            <div class="bar_skill fifth_pm">
                                <p><span class="f_mont" style="width: 50%">50</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="detail_work">
                        <p>역할 <span class="work">기획 / 스케줄관리</span></p>
                        <p>1 Day 금액 <span class="price"><strong class="f_mont">200,000</strong>만원</span></p>
                    </div>
                </div>
            </div>-->
        </div>
        <div class="calendar_meeting">
            <div class="info_cal">
                <p class="startday">미팅일정</p>
                <p class="today">오늘</p>
            </div>
            <input type="text" name="dateSingle" class="dateSingle " id="dateSingle" value=""/>
        </div>
        <!--<div class="pm_profile pm_profile_m">
            <p class="name"><strong class="f_mont">Park Kihoon</strong>박기훈</p>
            <span class="detail_btn_pf">PM 프로필 보기</span>
        </div>
        <div class="pop_pf_pm">
            <div class="member_prtf">
                <p class="pm f_mont">Product Manager</p>
                <span class="close_mb_prtf"><img src="/assets/images/tft/profile_close.png" alt=""></span>
                <div class="mb_info">
                    <img src="/assets/images/tft/year5.png" alt="">
                </div>
                <div class="detail_skill_mb">
                    <div class="item_skill_mb">
                        <p class="lb">기획력</p>
                        <div class="bar_skill first">
                            <p><span class="f_mont" style="width: 70%">70</span></p>
                        </div>
                    </div>
                    <div class="item_skill_mb">
                        <p class="lb">문제해결</p>
                        <div class="bar_skill second_pm">
                            <p><span class="f_mont" style="width: 80%">80</span></p>
                        </div>
                    </div>
                    <div class="item_skill_mb">
                        <p class="lb">소통</p>
                        <div class="bar_skill third_pm">
                            <p><span class="f_mont" style="width: 60%">60</span></p>
                        </div>
                    </div>
                    <div class="item_skill_mb">
                        <p class="lb">일정준수</p>
                        <div class="bar_skill fourth">
                            <p><span class="f_mont" style="width: 40%">40</span></p>
                        </div>
                    </div>
                    <div class="item_skill_mb">
                        <p class="lb">친절함</p>
                        <div class="bar_skill fifth_pm">
                            <p><span class="f_mont" style="width: 50%">50</span></p>
                        </div>
                    </div>
                </div>
                <div class="detail_work">
                    <p>역할 <span class="work">기획 / 스케줄관리</span></p>
                    <p>1 Day 금액 <span class="price"><strong class="f_mont">200,000</strong>만원</span></p>
                </div>
            </div>
        </div>-->
    </div>
    <div class="time_tft_area">
        <div class="time_meeting">
            <p class="title"><i class="f_mont">Meeting Time</i>
                <span class="bold">몇시에</span> 미팅을 원해요?
                <span class="desc">PM과의 미팅이 가능한 시간입니다</span>
            </p>
            <div class="customer_time">
                <span class="lb">오전</span>
                <div class="item_time_group">
                    <p>
                        <input type="radio" name="meetTime" class="meet_time" id="meetTime1">
                        <label for="meetTime1">10 : 30</label>
                    </p>
                </div>
            </div>
            <div class="customer_time">
                <span class="lb">오후</span>
                <div class="item_time_group">
                    <p><input type="radio" name="meetTime" class="meet_time" id="meetTime2">
                        <label for="meetTime2">1 : 00</label></p>
                    <p><input type="radio" name="meetTime" class="meet_time" id="meetTime3" checked>
                        <label for="meetTime3">2 : 00</label></p>
                </div>
            </div>
        </div>
        <div class="time_meeting">
            <p class="title">예상하는 <span class="bold">미팅 소요시간은?</span></p>
            <div class="customer_time">
                <span class="lb">약</span>
                <div class="item_time_group">
                    <p><input type="radio" name="leadTime" class="meet_time" id="leadTime1" checked>
                        <label for="leadTime1">30<span>분</span></label></p>
                    <p><input type="radio" name="leadTime" class="meet_time" id="leadTime2">
                        <label for="leadTime2">1<span>시간</span></label></p>
                </div>
            </div>
        </div>
    </div>
    <div class="ani_here">
        <div class="btnMainBox">
            <a href="/sub/project/name.php" class="f_mont">FINISH !</a>
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
    <!--<div class="step_project">
        <a href="/sub/project/complete_register02.php" class="arrow_step next">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="javascript:history.go(-1)" class="arrow_step before">
            <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
            <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
        </a>
    </div>
    <div class="step_project_m">
        <a href="javascript:history.go(-1)" class="arrow_step before">
            <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
        </a>
        <a href="/sub/project/complete_register02.php" class="arrow_step next">
            NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
        </a>
    </div>-->

</div>
    <script>
        var current = new Date();
        var tomorrow = new Date(current.getTime() + 24 * 60 * 60 * 1000);
        $('.dateSingle').dateRangePicker({
            separator : ' to ',
            singleMonth: true,
            showShortcuts: false,
            container: '.calendar_meeting',
            alwaysOpen: true,
            singleDate : true,
           // extraClass: 'date-range-picker19',
            startOfWeek: 'monday',
            showTopbar: false,
            language: 'custom',
            startDate: tomorrow,
            showDateFilter: function(time, date) {
                return '<div class="wrap-day">'+date+'</div>'
            },
        });



        $(".detail_btn_pf").click(function () {
            $(".pop_pf_pm").addClass("active");
            $(".pop_pf_pm .close_mb_prtf").click(function () {
                $(".pop_pf_pm").removeClass("active");
            });
        });
    </script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>