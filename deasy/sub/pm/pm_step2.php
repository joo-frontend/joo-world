<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="tft_wra tft_step1 pm_wra">
    <div class="freelancer_area">
        <div class="page_title_section page_title_white_section">
            <p class="page_title page_title_white f_mont">STEP.2</p>
            <p class="page_title_contents">
                미팅을 진행할<br>
                <span>PM을 선택하세요</span>
            </p>
        </div>
        <div class="pjct_people_list">
            <ul class="pjct_pm active" data-listPj="menuPm">
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkPm1">
                            <label for="chkPm1" class="chkShape"></label>
                            <label for="chkPm1" class="chkTxt f_mont">Park Kihoon <span>박기훈</span></label>
                        </span>
                            <div class="right_info">
                                <p class="range_work">역할 ㅣ <span>기획 / 스케줄관리</span></p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">100,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">연차</p>
                                <img src="/assets/images/tft/year5.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">강점 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>기획력</p>
                                        <canvas id="chartSkill1" class="pmChart1" width="74" height="74"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>문제해결</p>
                                        <canvas id="chartSkill2" class="pmChart2" width="74" height="74"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>소통</p>
                                        <canvas id="chartSkill3" class="pmChart3" width="74" height="74"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>일정준수</p>
                                        <canvas id="chartSkill4" class="pmChart4" width="74" height="74"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>친절함</p>
                                        <canvas id="chartSkill5" class="pmChart5" width="74" height="74"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="pm1year" value="5">
                            <input type="hidden" name="pm1strength1" value="80">
                            <input type="hidden" name="pm1strength2" value="10">
                            <input type="hidden" name="pm1strength3" value="60">
                            <input type="hidden" name="pm1strength4" value="80">
                            <input type="hidden" name="pm1strength5" value="60">
                            <input type="hidden" name="pm1dayprice" value="100000">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item_people_pjct">
                        <div class="top_people_info">
                        <span class="chk_team">
                            <input type="checkbox" class="chkbox_chk" id="chkPm2">
                            <label for="chkPm2" class="chkShape"></label>
                            <label for="chkPm2" class="chkTxt f_mont">Park Hyeongjin <span>박형진</span></label>
                        </span>
                            <div class="right_info">
                                <p class="range_work">역할 ㅣ <span>기획 / 스케줄관리</span></p>
                                <p class="day_price">1 Day 금액 ㅣ <span><strong class="f_mont">110,000</strong>만원</span></p>
                            </div>
                        </div>
                        <div class="detail_people_info">
                            <div class="year_people">
                                <p class="lb">연차</p>
                                <img src="/assets/images/tft/year10.png" alt="">
                            </div>
                            <div class="skill_people">
                                <p class="lb">강점 </p>
                                <div class="graph_section">
                                    <div class="graph_box">
                                        <p>기획력</p>
                                        <canvas id="chartSkill6" class="pmChart1" width="74" height="74"></canvas>
                                        <div id="chart_percent1" class="chart_percent f_mont"></div>
                                    </div>
                                    <div class="graph_box">
                                        <p>문제해결</p>
                                        <canvas id="chartSkill7" class="pmChart2" width="74" height="74"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>소통</p>
                                        <canvas id="chartSkill8" class="pmChart3" width="74" height="74"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>일정준수</p>
                                        <canvas id="chartSkill9" class="pmChart4" width="74" height="74"></canvas>
                                    </div>
                                    <div class="graph_box">
                                        <p>친절함</p>
                                        <canvas id="chartSkill10" class="pmChart5" width="74" height="74"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dataGroup">
                            <input type="hidden" name="pm2year" value="10">
                            <input type="hidden" name="pm2strength1" value="100">
                            <input type="hidden" name="pm2strength2" value="70">
                            <input type="hidden" name="pm2strength3" value="60">
                            <input type="hidden" name="pm2strength4" value="60">
                            <input type="hidden" name="pm2strength5" value="50">
                            <input type="hidden" name="pm2dayprice" value="110000">
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
    <div class="step_project">
        <a href="/sub/tft/tft_step3.php" class="arrow_step next">
            <img class="step_next" src="/assets/images/project/P6/next_off.png" alt="">
            <img class="step_next focus" src="/assets/images/project/P6/next_on.png" alt="">
        </a>
        <a href="/sub/pm/pm_step1.php" class="arrow_step before">
            <img class="before_next " src="/assets/images/project/P6/before_off.png" alt="">
            <img class="before_next focus" src="/assets/images/project/P6/prev_btn.png" alt="">
        </a>
    </div>
    <div class="step_project_m">
        <a href="/sub/pm/pm_step1.php" class="prev">
            <img src="/assets/images/project/P10/porfolio_before.png" alt=""> PREV
        </a>
        <a href="/sub/tft/tft_step3.php" class="next">
            NEXT <img src="/assets/images/project/P10/porfolio_next.png" alt="">
        </a>
    </div>
</div>
<script src="/assets/js/swiper-master/dist/js/swiper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>
<script>
    $(".pjct_pm .chkbox_chk").click(function () {
        var chkThis = $(this);
        if(chkThis.is(":checked") == true) {
            $(".pjct_pm .chkbox_chk").prop("checked", false);
            chkThis.prop("checked", true);
        }
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

    var chartDataSet = [0][0];
    var chartNum = 1;
    var category = "menuPm";
    var listNum = document.querySelectorAll('.pjct_pm > li').length;
    //차트 데이터 불러오기
    //카테고리별 데이터 불러오기 ( category )
    var chartDataList = function (category) {
        $.ajax({
            url: './datasets.json',
            type: 'get',
            dataset: 'json',
            async: false,
            data: {},
            success: function (data) {
                // console.log(data.dataset[category]);
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
                 //console.log(chartDataSet[i][j])
                $('#'+chartId).parent().find('.chart_txt').remove();
                //데이터값 차트에 표시
                $('#'+chartId).parent().append('<div class="chart_txt" style="">' + chartDataSet[i][j].datasets[0].data[0] +'</div>');
            }
        }
    };
    createChartFn(listNum);

</script>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
