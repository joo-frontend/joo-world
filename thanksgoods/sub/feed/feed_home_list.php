<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php'); 
$session = new session();
if(!$session -> usCheck()){
   alertMon("aNr","해당 기능은 로그인 후 이용하실 수 있습니다.","/");
   die; 
}
$thanks = new thanks_contents();
$order = $_GET['order'];
if(empty($order)){
    $order = "1";
}
$data = $thanks -> get_thanks_list(0,5,$order);
$user = new user();
 

?>

<div class="feed_wra">
    <div class="feed_home_top">
        <a href="/sub/feed/make_feed.php" class="write_post"><img src="/assets/images/feed/write.png" alt=""></a>
        <div class="feed_post_info">
            <p class="num"><?php echo $thanks ->get_thanks_count('today');?></p>
            <p class="desc">오늘의 <span>감사글</span></p>
        </div>
        <div class="feed_post_info">
            <p class="num"><?php echo $thanks ->get_thanks_count('total');?></p>
            <p class="desc">전체 <span>감사글</span></p>
        </div>
    </div>
    <div class="section_feed_home section_feed_home_list">
        <div class="sort_posting_area clearfix">
            <div class="posting_type_box">
                <a href="./feed_home_list.php?order=1" <?php if($order==1){ echo 'class="focus"'; }?> >최신순</a>
                <a href="./feed_home_list.php?order=2" <?php if($order!=1){ echo 'class="focus"'; }?> >공감순</a>
            </div>
            <div class="posting_show_box">
                <a href="/sub/feed/feed_home_list.php">
                    <img class="show_off " src="/assets/images/feed/type_list_off.png" alt="">
                    <img class="show_on focus" src="/assets/images/feed/type_list.png" alt="">
                </a>
                <a href="/sub/feed/feed_home_preview.php">
                    <img class="show_off focus" src="/assets/images/feed/type_image_off.png" alt="">
                    <img class="show_on " src="/assets/images/feed/type_image.png" alt="">
                </a>
            </div>
        </div>
        <div class="feed_posting_area">
            <ul>
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
                    <a href="/sub/feed/feed_detail.php?id=<?=$data[$i]['id']?>" class="img_post">
                        <img src="<?=$data[$i]['contents_img']?>" alt="">
                    </a>
                </li>
            <?php } ?>
                 
            </ul>
            <a class="more_history" onclick ="list_more_view()">MORE +</a>
        </div>
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
                var start = $('.feed_posting_area ul li').length;
                 console.log(start);
                $.ajax({
             type: "POST",
              
             data:{ order:<?=$order?> , start : start},
             url: "/api/list_more_view.php",
             success: function(response){
               if(response!=null){
                var cnt = response.length;
                }else{
                var cnt = 0;
                }
                 
                 
                 
                for(var i=0; i<response.length;i++){
                $('.feed_posting_area ul').append(response[i]);

                }
              
                          
             },
             });
            }


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
