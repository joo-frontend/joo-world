<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$contents = new thanks_contents();
$session = new session();
if(!$session->usCheck()){
alertMon('aNr','해당 기능은 로그인 후 이용하실 수 있습니다.','/');
die;
}
$user = new user();
$thanks = $user -> thanks_read();
$data = $contents ->my_today_thanks(0,5);

?>

    <div class="calendar_wra">
        <div class="calendar_area">
            <div class="calendar_head">
                <p class="title"><span>작은 것에 감사할 줄 아는 습관</span>이<br>
                    큰 사람을 만듭니다</p>
                <a href="#" class="pop_btn"><img src="/assets/images/calendar/info.png" alt="">캘린더에 표시된 감사란?</a>
                <div class="status_mypoint">
                    <div class="point_box">
                        <p class="my_p"><?php echo $contents -> my_today_count(); ?></p>
                        <p class="desc">오늘의 <span>감사</span></p>
                    </div>
                    <div class="point_box">
                        <p class="my_p"><?php echo $contents -> my_thanks_total(); ?></p>
                        <p class="desc">누적 <span>감사포인트</span></p>
                    </div>
                </div>
            </div>
            <div class="calendar_box">
                <div class="my_calendar">
                    <div class="point_info_calendar">
                        <p class="type_info_point">
                            <span class="color"></span><img src="/assets/images/calendar/thanks_calendar.png" alt="">감사
                        </p>
                      <!--  <p class="type_info_point">
                            <span class="color blue"></span><img src="/assets/images/calendar/like.png" alt="">공감
                        </p>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_day_area">
            <div class="day_cate">
                <a href="#" class="focus">이날의 감사 <img class="focus_off" src="/assets/images/calendar/thanks%20category_off.png" alt=""><img class="focus_on" src="/assets/images/calendar/thanks%20category.png" alt=""><span><?php echo $contents -> my_today_count(); ?></span></a>
<!--                <a href="#">이날의 공감 <img class="focus_off" src="/assets/images/calendar/like category_off.png" alt=""><img class="focus_on" src="/assets/images/calendar/like cataegory.png" alt=""><span>0</span></a>-->
                <p class="etc">※ 이미지를 클릭하면 상세페이지로 이동합니다</p>
            </div>
            <div class="day_activity">
                <!--활동 없는 경우-->
                <div class="no_activity">
                    <p class="none">아직 감사의 글을 작성하지 못했나요?</p>
                    <a href="/sub/feed/make_feed.php" class="add_activity">감사하러 가기</a>
                </div>
                <!--활동 있는 경우-->
                <div class="list_activity">
                    <ul>
                          <?php for($i=0;$i<count($data);$i++){
                     $like_ck = $contents -> like_ck($data[$i]["id"]);

                    if($data[$i]["is_anonymous"]==1){
                    $nickname = "익명";
                    }else{
                    $nickname = $user ->readNickName($data[$i]["user_id"]);
                        }
                    ?>
                <li class="clearfix">
                    <div class="profile_post">
                        <a href="/sub/feed/other_feed.php?id=<?=$data[$i]["user_id"]?>" class="profileBox" style="background-image:url(<?php 
                            if($data[$i]["is_anonymous"]==1){
                            echo '/assets/images/feed/no_profile_user.png';
                            }else{
                        $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$data[$i]["user_id"].'.*') as $value){
                                        if($j==1){
                                        echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                        }
            }}?>); background-size:cover; background-position:center;"><img src="/assets/images/feed/no_profile_user.png" alt="" style="opacity:0;"></a>
                        <a href="/sub/feed/other_feed.php<?=$data[$i]["user_id"]?>" class="profile_name"><?=$nickname?></a>
                        <p class="like <?php if($like_ck==1){ echo "active"; }?>" id="<?=$data[$i]["id"]?>"><img class="like_off" src="/assets/images/calendar/like category_off.png" alt="" onclick="like_bt(<?=$data[$i]["id"]?>)">
                            <img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="" onclick="like_bt(<?=$data[$i]["id"]?>)"> <span><?=$data[$i]["likes"]?></span></p>
                    </div>
                    <div class="contents_post">
                        <p class="posting_txt"><?=$data[$i]["contents"]?></p>
                        <div class="info_post">
                            <p class="like <?php if($like_ck==1){ echo "active"; }?>"><img class="like_off" src="/assets/images/calendar/like category_off.png" alt="" onclick="like_bt(<?=$data[$i]["id"]?>)">
                                <img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="" onclick="like_bt(<?=$data[$i]["id"]?>)"> <span><?=$data[$i]["likes"]?></span></p>
                            <p class="date"><?=date("Y.m.d | H:i",strtotime($data[$i]["created_at"]))?></p>
                        </div>
                    </div>
                    <a href="/sub/feed/feed_detail.php?id=<?=$data[$i]["id"]?>" class="img_post">
                        <img src="<?=$data[$i]['contents_img']?>" alt="">
                    </a>
                </li>
            <?php } ?>

                    </ul>
                    <a href="#" class="more_history" onclick="calendar_more_view()">MORE +</a>

                </div>
            </div>
        </div>
    </div>
<div class="pop pop_info_point">
    <div class="popup">
        <a href="#" class="close_pop"><img src="/assets/images/common/close.png"></a>
            <p class="title_point"><img src="/assets/images/calendar/info_popup.png" alt="">캘린더에 표시된 감사란?</p>
            <p class="desc_point">감사를 통해<br>
                상품을 구매할 수 있는 포인트를 획득 할 수 있습니다</p>
            <p class="point_type_info">
                <span><img src="/assets/images/calendar/thanks_popup.png" alt="">감사</span>감사에 대한 설명
            </p>
    </div>
</div>
    <div class="pop pop_like_people">
        <div class="popup">
            <a href="#" class="close_pop"><img src="/assets/images/feed/close.png" alt=""></a>
            <div class="like_info_top">
                <p>총 <span>46</span></p>
            </div>
            <div class="list_people">
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/myfeed_profile.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">rla_anduf</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/feed_profile.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">rlaanduf.2</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">JENNY_</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">rlaanduf.2</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">dlraud.user</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">dlraud.user</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">dlraud.user</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">dlraud.user</a>
                </div>
                <div class="people_box">
                    <a href="/sub/feed/other_feed.php" class="feed_img_profile"><img src="/assets/images/feed/no_profile_user.png" alt=""></a>
                    <a href="/sub/feed/other_feed.php" class="nickname">dlraud.user</a>
                </div>
            </div>
        </div>
    </div>
    <script>
    var select_date = '<?=date('Y-m-d')?>';
     function calendar_more_view(){
                var start = $('.list_activity ul li').length;
                 console.log(start);
                $.ajax({
             type: "POST",
              
             data:{ date:select_date , start : start},
             url: "/api/calendar_more_view.php",
             success: function(response){
               if(response!=null){
                var cnt = response.length;
                }else{
                var cnt = 0;
                }
                 
                 
                $('.day_cate .focus span').text(parseInt(start)+cnt);
                for(var i=0; i<response.length;i++){
                $('.list_activity ul').append(response[i]);

                }
              
                          
             },
             });
            }
        
        $(document).ready(function () {
            
      
            var today = new Date();
            var typeDates = [<?php for($i=0;$i<count($thanks);$i++){ echo '"'.date('d-m-Y',strtotime($thanks[$i]['created_at'])).'",';}?>];
            $(".my_calendar .ui-datepicker td").prepend("<div class='type_box'><span></span></div>");

            function available(date) {
                
                var day = date.getDate();
                var month = (date.getMonth() + 1);
                if(day<10){
                day = '0'+day;
                }
                if(month<10){
                month = '0'+month;
                }
                var dmy = day + "-" + month + "-" + date.getFullYear();
             
                if (typeDates.indexOf(dmy) != -1) {

                   
                     setTimeout(function () {
                         $(".my_calendar .ui-datepicker td .type_box").remove();
                         $(".my_calendar .ui-datepicker td").append("<div class='type_box'><span></span></div>");
                     });
                    return [true, "active"];
                } else {
                    return [true];
                }
            }

            $(".my_calendar").datepicker({
                monthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                dayNamesMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
                maxDate: today,
                dateFormat: "dd-mm-yy",
                onSelect: function(dateText,inst){
                var imsi_date = dateText.split('-');
                select_date = imsi_date[2]+'-'+imsi_date[1]+'-'+imsi_date[0];
                console.log(select_date);
                 
                    $.ajax({
             type: "POST",
            
             data:{ date:dateText},
             url: "/api/date_change.php",
             success: function(response){
               if(response!=null){
                var cnt = response.length;
                }else{
                var cnt = 0;
                }
                 
                $('.list_activity ul').text('');
                $('.day_cate .focus span').text(cnt);
                for(var i=0; i<response.length;i++){
                $('.list_activity ul').append(response[i]);

                }
              
                          
             },
             });


                },
                beforeShowDay: available,
            });


            /*팝업*/
            $(".calendar_head .pop_btn").click(function () {
                $(".pop_info_point").show();
                $(".pop_info_point .close_pop").click(function () {
                    $(".pop_info_point").hide();
                });
                return false;
            });
            /*like*/
            $(".like img").click(function () {
                var numLike = $(this).parents(".like").find("span").html();
                $(this).parents(".like").toggleClass("active");

                if ($(this).parents(".like").hasClass("active") == true) {
                    numLike++;
                    $(this).parents(".like").find("span").html(numLike);
                } else {
                    numLike--;
                    $(this).parents(".like").find("span").html(numLike);
                }
            });

            /*like detail*/
            $(".like span").click(function () {
                $(".pop_like_people").show();
                $(".pop_like_people .close_pop").click(function () {
                    $(".pop_like_people").hide();
                    return false;
                });
                return false;
            });
        });
        function like_bt(target){
             
            
            var numLike = $(".like#"+target).find("a").html();
           
             $.ajax({
             type: "POST",
             dataType: 'json',
             data:{ target:target},
             url: "/api/ck_like.php",
             success: function(response){
              
              if(response==200){
                $(".like#"+target+" img").parents(".like").toggleClass("active");


            if($(".like#"+target+" img").parents(".like").hasClass("active") == true){
                numLike ++;
                $(".feed_manage .like_post#"+target+" a").html(numLike);
            }else {
                numLike --;
                $(".feed_manage .like_post#"+target+" a").html(numLike);
            }
        }else if(response==400){
            alert("해당기능은 로그인 후 이용하실 수 있습니다.");
            location.href="/";
        }            
             },
             });

            

      }
    </script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>