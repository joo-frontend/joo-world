<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="project_date_wra">
    <div class="project_date_area">
        <div class="page_title_section">
            <p class="page_title page_title_white f_mont">STEP.3</p>
            <p class="page_title_contents"><span>프로젝트의</span><br><span>시작일</span>과 <span>마감일</span>은<br>언제인가요?
            </p>
            <a href="#" class="dateBtn">날짜 직접입력</a>
            <div class="entry_date_box">
            <div class="date_entry_directly start">
                <!--   <input type="text" class="testInput">
                   <input type="text" class="testfocusInput">-->
                <p class="title">시작일</p>

                <p class="entry_date">
                    <input type="text" class="datebox directStartYear" placeholder="숫자 입력" ><span>년</span>
                </p>
                <p class="entry_date">
                    <input type="text" class="datebox directStartMonth" maxlength="2" placeholder="숫자 입력" ><span>월</span>
                    <input type="text" class="datebox directStartDay" maxlength="2" placeholder="숫자 입력" ><span>일</span>
                </p>

                <div class="box_hidden">
                    <input type="text" name="datetrange1" class="datetrange " id="date-rangeStart" value=""/>
                </div>
            </div>
            <div class="date_entry_directly end">
                <p class="title">마감일</p>
                <p class="entry_date">
                    <input type="text" class="datebox directEndYear" maxlength="4" placeholder="숫자 입력"><span>년</span>
                </p>
                <p class="entry_date">
                    <input type="text" class="datebox directEndMonth" maxlength="2" placeholder="숫자 입력"><span>월</span>
                    <input type="text" class="datebox directEndDay" maxlength="2" placeholder="숫자 입력"><span>일</span>
                </p>
                <div class="box_hidden">
                    <input type="text" name="datetrange2" class="datetrange" id="date-rangeEnd" value=""/>
                </div>
            </div>
            </div>
        </div>
        <div class="pj_calendar_section">
            <div class="final_date_box">
                <form>
                    <div class="box_date box_start_date">
                        <p class="title">시작일
                        <p>
                            <input type="number" class="finalDatebox year" name="pjBudgetStartYear" value="2018" disabled><span>년</span>
                            <input type="number" class="finalDatebox month1" name="pjBudgetStartMonth1" value="0" disabled>
                            <input type="number" class="finalDatebox month2" name="pjBudgetStartMonth2" value="8" disabled><span>월</span>
                            <input type="number" class="finalDatebox day1" name="pjBudgetStartDay1" value="0" disabled>
                            <input type="number" class="finalDatebox day2" name="pjBudgetStartDay2" value="3" disabled><span>일</span>
                    </div>
                    <div class="box_date box_end_date">
                        <p class="title">마감일
                        <p>
                            <input type="number" class="finalDatebox year" name="pjBudgetEndYear" value="2018" disabled><span>년</span>
                            <input type="number" class="finalDatebox month1" name="pjBudgetEndMonth1" value="0" disabled>
                            <input type="number" class="finalDatebox month2" name="pjBudgetEndMonth2" value="8" disabled><span>월</span>
                            <input type="number" class="finalDatebox day1" name="pjBudgetEndDay1" value="1" disabled>
                            <input type="number" class="finalDatebox day2" name="pjBudgetEndDay2" value="2" disabled><span>일</span>
                    </div>
                    <div class="period">
                        <p><span class="text">총 진행 기간</span> <span class="f_mont day"><strong>10</strong>Days</span></p>
                    </div>
                </form>
            </div>
            <div class="calendar_box">
                <div class="info_cal">
                    <p class="startday">시작일</p>
                    <p class="endday">마감일</p>
                    <p class="today">오늘</p>
                </div>
            </div>
            <div class="final_date_box m_final_date_box">
                <form>
                    <div class="box_date box_start_date">
                        <p class="title">시작일
                        <p>
                            <input type="number" class="finalDatebox year" name="pjBudgetStartYear" value="2018" disabled><span>년</span>
                            <input type="number" class="finalDatebox month1" name="pjBudgetStartMonth1" value="0" disabled>
                            <input type="number" class="finalDatebox month2" name="pjBudgetStartMonth2" value="8" disabled><span>월</span>
                            <input type="number" class="finalDatebox day1" name="pjBudgetStartDay1" value="0" disabled>
                            <input type="number" class="finalDatebox day2" name="pjBudgetStartDay2" value="3" disabled><span>일</span>
                    </div>
                    <div class="box_date box_end_date">
                        <p class="title">마감일
                        <p>
                            <input type="number" class="finalDatebox year" name="pjBudgetEndYear" value="2018" disabled><span>년</span>
                            <input type="number" class="finalDatebox month1" name="pjBudgetEndMonth1" value="0" disabled>
                            <input type="number" class="finalDatebox month2" name="pjBudgetEndMonth2" value="8" disabled><span>월</span>
                            <input type="number" class="finalDatebox day1" name="pjBudgetEndDay1" value="1" disabled>
                            <input type="number" class="finalDatebox day2" name="pjBudgetEndDay2" value="2" disabled><span>일</span>
                    </div>
                    <div class="period">
                        <p><span class="text">총 진행 기간</span> <span class="f_mont day"><strong>10</strong>Days</span></p>
                    </div>
                </form>
            </div>
        </div>
        <div class="step_project">
            <a href="/sub/project/project_step4.php" class="arrow_step next">
                <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
                <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
            </a>
            <a href="budget_step2.php" class="arrow_step before">
                <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
                <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
            </a>
        </div>
        <div class="step_project_m">
            <a href="/sub/old/budgetdget/budget_step2.php" class="prev">
                <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
            </a>
            <a href="/sub/project/project_step4.php" class="next">
                NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
            </a>
        </div>
    </div>
</div>
<script src="/assets/js/swiper-master/dist/js/swiper.min.js"></script>
<script>
    var current = new Date();
    var tomorrow = new Date(current.getTime() + 24 * 60 * 60 * 1000);
    $('.datetrange').dateRangePicker({
        separator : ' to ',
        singleMonth: true,
        showShortcuts: false,
        container: '.calendar_box',
        alwaysOpen: true,
        extraClass: 'date-range-picker19',
        startOfWeek: 'monday',
        showTopbar: false,
        language: 'custom',
        startDate: tomorrow,
        showDateFilter: function(time, date) {
            return '<div class="wrap-day">'+date+'</div>'
        },
        getValue: function()
        {
            $(".directStartYear").on("change",function () {
                var directStartYear =  $(".directStartYear").val();
                var directStartMonth = $(".directStartMonth").val();
                var directStartDay = $(".directStartDay").val();
                if($(".directStartMonth").val() !=="" && $(".directStartDay").val() !== ""){
                    s1=directStartYear +"-"+ directStartMonth +"-"+ directStartDay;
                    $('#date-rangeStart').val(s1);
                    $('#date-rangeStart').focus();
                    $('#date-rangeStart').select();

                }
            });
            $(".directStartMonth").on("change",function () {
                var directStartYear =$(".directStartYear").val();
                var directStartMonth = $(".directStartMonth").val();
                var directStartDay = $(".directStartDay").val();
                if($(".directStartYear").val() !=="" && $(".directStartDay").val() !== ""){
                    s1=directStartYear + "-"+ directStartMonth +"-"+ directStartDay;
                    $('#date-rangeStart').val(s1);
                    $('#date-rangeStart').focus();
                    $('#date-rangeStart').select();

                }
            });
            $(".directStartDay").on("change",function () {
                var directStartYear = $(".directStartYear").val();
                var directStartMonth = $(".directStartMonth").val();
                var directStartDay = $(".directStartDay").val();
                if($(".directStartMonth").val() !=="" && $(".directStartYear").val() !== ""){
                    s1=directStartYear +"-"+ directStartMonth +"-"+ directStartDay;
                    $('#date-rangeStart').val(s1);
                    $('#date-rangeStart').focus();
                    $('#date-rangeStart').select();

                }
            });
            $(".directEndYear").on("change",function () {
                var directEndYear = $(".directEndYear").val();
                var directEndMonth = $(".directEndMonth").val();
                var directEndDay = $(".directEndDay").val();
                if($(".directEndMonth").val() !=="" && $(".directEndDay").val() !== ""){
                    s2=directEndYear +"-"+ directEndMonth +"-"+ directEndDay;
                    $('#date-rangeEnd').val(s2);
                    $('#date-rangeEnd').focus();
                    return s2;
                }
            });
            $(".directEndMonth").on("change",function () {
                var directEndYear = $(".directEndYear").val();
                var directEndMonth = $(".directEndMonth").val();
                var directEndDay = $(".directEndDay").val();
                if($(".directEndYear").val() !=="" && $(".directEndDay").val() !== ""){
                    s2=directEndYear +"-"+ directEndMonth +"-"+ directEndDay;
                    $('#date-rangeEnd').val(s2);
                    $('#date-rangeEnd').focus();
                    return s2;
                }
            });
            $(".directEndDay").on("change",function () {
                var directEndYear = $(".directEndYear").val();
                var directEndMonth = $(".directEndMonth").val();
                var directEndDay = $(".directEndDay").val();
                if($(".directEndMonth").val() !=="" && $(".directEndYear").val() !== ""){
                    s2=directEndYear +"-"+ directEndMonth +"-"+ directEndDay;
                    $('#date-rangeEnd').val(s2);
                    $('#date-rangeEnd').focus();
                    return s2;
                }
            });


            if ($('#date-rangeStart').val() && $('#date-rangeEnd').val() )
                return $('#date-rangeStart').val() + ' to ' + $('#date-rangeEnd').val();
            else
                return '';

        },
        setValue: function(s,s1,s2)
        {

            $('#date-rangeStart').val(s1);
            $('#date-rangeEnd').val(s2);


            if($("#date-rangeStart").focus() ){
                var monthDayChk =  $(".date-picker-wrapper .month-wrapper table .day.checked");
                var firstDay = $(".date-picker-wrapper .month-wrapper table .day.first-date-selected");
                var lastDay = $(".date-picker-wrapper .month-wrapper table .day.last-date-selected");
                monthDayChk.parents("td").addClass("chkTd");
                firstDay.parents("td").addClass("first");
                lastDay.parents("td").addClass("last");
            }else if($("#date-rangeEnd").focus()){
                var monthDayChk =  $(".date-picker-wrapper .month-wrapper table .day.checked");
                var firstDay = $(".date-picker-wrapper .month-wrapper table .day.first-date-selected");
                var lastDay = $(".date-picker-wrapper .month-wrapper table .day.last-date-selected");
                monthDayChk.parents("td").addClass("chkTd");
                firstDay.parents("td").addClass("first");
                lastDay.parents("td").addClass("last");
            }
            /*상단 날짜 표시*/
            var startYear= s1.substring(0,4);
            var startMonth1= s1.substring(5,6);
            var startMonth2= s1.substring(6,7);
            var startDay1= s1.substring(8,9);
            var startDay2= s1.substring(9,10);
            $(".box_start_date .year").val(startYear);
            $(".directStartYear").val(startYear);
            $(".box_start_date .month1").val(startMonth1);
            $(".box_start_date .month2").val(startMonth2);
            $(".directStartMonth").val(startMonth1+startMonth2);
            $(".box_start_date .day1").val(startDay1);
            $(".box_start_date .day2").val(startDay2);
            $(".directStartDay").val(startDay1+startDay2);

            var endYear= s2.substring(0,4);
            var endMonth1= s2.substring(5,6);
            var endMonth2= s2.substring(6,7);
            var endDay1= s2.substring(8,9);
            var endDay2= s2.substring(9,10);
            $(".box_end_date .year").val(endYear);
            $(".directEndYear").val(endYear);
            $(".box_end_date .month1").val(endMonth1);
            $(".box_end_date .month2").val(endMonth2);
            $(".directEndMonth").val(endMonth1+endMonth2);
            $(".box_end_date .day1").val(endDay1);
            $(".box_end_date .day2").val(endDay2);
            $(".directEndDay").val(endDay1+endDay2);

            var diffDate_1 = s1 instanceof Date ? s1 : new Date(s1);
            var diffDate_2 = s2 instanceof Date ? s2 : new Date(s2);

            diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
            diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());

            var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
            diff = Math.ceil((diff / (1000 * 3600 * 24))+1);

            $(".period .day strong").html("0");
            $(".period .day strong").html(diff);
        }

    });

</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
