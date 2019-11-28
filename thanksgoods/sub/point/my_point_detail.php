<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$thanks = new thanks_contents();
$user = new user();
$total_p = $thanks -> my_today_point();
if(empty($total_p)){
$total_p = 0;
}
$point_info = $user -> point_read();

if(count($point_info)<1){
$total_point = 0; 
}else{
$total_point = $point_info[0]['total_point'];
}
$date = $_GET['date'];
if(empty($date)){
    alertMon('aNr','잘못된 접근입니다.','/');
    die;
}
 
$data = $thanks -> my_today_thanks(0,3,date('Y-m-d',strtotime($date)));
$get_point = $thanks -> my_today_point($date);

?>

  <div class="thanks_point_wra">
        <div class="section_top">
            <div class="thanks_point_my">
                <div class="my_point_box">
                    <p class="title_today">오늘 나의<br><span>포인트를 확인</span>하세요!</p>
                    <a href="#"><img src="/assets/images/calendar/info.png" alt="">포인트 적립 기준은?</a>
                </div>
                <div class="status_mypoint">
                    <div class="point_box">
                        <p class="my_p"><?=$total_p?></p>
                        <p class="desc">오늘의 <span>활동 포인트</span></p>
                    </div>
                    <div class="point_box">
                        <p class="my_p"><?=$total_point?></p>
                        <p class="desc"><span>총 포인트</span></p>
                    </div>
                </div>
            </div>
            <div class="thanks_point_group">
                <div class="group_point">
                    <p class="title"> <span>I TODAY</span> 하루 최대 적립 포인트 ㅣ 평일 70P,  주말 80P</p>
                    <p class="status_point"><span><?=$total_p?></span> / <?php if(date('w')>5){ echo 80;}else{ echo 70;}?> Point</p>
                    <div class="point_progress">
                        <p class="bar" style="width: <?php if(date('w')>5){ echo $total_p/80*100;}else{ echo $total_p/70*100;}?>%;"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ad_section">
            <div class="ad_product_area">
                <span class="imgBox"><img src="/assets/images/point/box.png" alt=""></span>
                <p class="txt_ad">현재 포인트로<br>
                    <span>구매할 수 있는 상품</span>을 확인하세요!</p>
                <a href="/sub/market/market_home.php" class="link_pd">상품 확인하기</a>
            </div>
        </div>
        <div class="history_point_section">
            <p class="title_blue">I HISTORY <span class="date"><?=date('Y.m.d',strtotime($date))?></span></p>
            <p class="today_get">이날의 획득 포인트 <span>+<?=$get_point?></span></p>
            <ul class="history_post_area">
                <?php for($i=0;$i<count($data);$i++){
                     $like_ck = $thanks -> like_ck($data[$i]["id"]);

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
            <a  class="more_history" onclick="list_more_view();">MORE +</a>
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
            function list_more_view(){
                var start = $('.history_post_area li').length;
                 
                $.ajax({
             type: "POST",
              
             data:{ date:'<?=$date?>' , start : start},
             url: "/api/list_more_view2.php",
             success: function(response){
                console.log(response);
           
                 
                 
                 
                for(var i=0; i<response.length;i++){
                $('.history_post_area').append(response[i]);

                }
              
                          
             },
             });
            }
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
    </script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>