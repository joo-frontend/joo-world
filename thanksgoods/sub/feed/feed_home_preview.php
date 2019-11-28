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
    <div class="feed_post_info first">
    <p class="num"><?php echo $thanks ->get_thanks_count('today');?></p>
    <p class="desc">오늘의 <span>감사글</span></p>
    </div>
    <div class="feed_post_info">
    <p class="num"><?php echo $thanks ->get_thanks_count('total');?></p>
    <p class="desc">전체 <span>감사글</span></p>
    </div>
    </div>
    <div class="section_feed_home">
    <div class="sort_posting_area clearfix">
    <div class="posting_type_box">
        <a href="./feed_home_preview.php?order=1"  <?php if($order==1){ echo 'class="focus"'; }?>>최신순</a>
        <a href="./feed_home_preview.php?order=2" <?php if($order!=1){ echo 'class="focus"'; }?>>공감순</a>
    </div>
    <div class="posting_show_box">
        <a href="/sub/feed/feed_home_list.php">
            <img class="show_off focus" src="/assets/images/feed/type_list_off.png" alt="">
            <img class="show_on " src="/assets/images/feed/type_list.png" alt="">
        </a>
        <a href="/sub/feed/feed_home_preview.php">
            <img class="show_off " src="/assets/images/feed/type_image_off.png" alt="">
            <img class="show_on focus" src="/assets/images/feed/type_image.png" alt="">
        </a>
    </div>
    </div>
    <div class="feed_posting_area feed_preview_area">
    <?php for($i=0;$i<count($data);$i++){
        $like_ck = $thanks -> like_ck($data[$i]["id"]);
        $detail = $thanks->get_thanks_detail($data[$i]["id"]);
         if($data[$i]["is_anonymous"]==1){
            $nickname = "익명";
            }else{
            $nickname = $user ->readNickName($data[$i]["user_id"]);
                }

        ?>
    <div class="feed_preview_item">
        <div class="feed_profile">
            <a href="/sub/feed/other_feed.php" class="feed_img_profile" style="background-image:url(<?php 
                    if($data[$i]["is_anonymous"]==1){
                    echo '/assets/images/feed/no_profile_user.png';
                    }else{
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$data[$i]["user_id"].'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }}?>); background-size:cover; background-position:center;"><img src="/assets/images/feed/myfeed_profile.png" alt="" style="opacity:0;"></a>
            <a href="/sub/feed/other_feed.php" class="nickname"><?=$nickname?></a>
            <div class="link_feed">
                <a onclick="img_down(<?=$data[$i]["id"]?>)"><img src="/assets/images/feed/download.png" alt=""></a>
                <a href="#"><img src="/assets/images/feed/share.png" alt=""></a>
            </div>
        </div>
        <div class="feed_card">
            <img src="<?=$data[$i]["contents_img"]?>" alt="">
        </div>
        <div class="feed_manage" >
            <span class="like_post <?php if($like_ck==1){ echo "active"; }?>"  id="<?=$data[$i]["id"]?>" ><img class="like_off" src="/assets/images/calendar/like category_off.png"
                                         alt="" onclick="like_bt(<?=$data[$i]["id"]?>)">
                <img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="" onclick="like_bt(<?=$data[$i]["id"]?>)">
                <a onclick="view_like(<?=$data[$i]["id"]?>)" class="like_detail"><?=$data[$i]["likes"]?></a></span>
            <p class="date"><?=date("Y-m-d | H:i",strtotime($data[$i]["created_at"]))?></p>
        </div>
        <div class="feed_info">
            <p class="comment_num"><?=count($detail["reply"])?></p>
            <form method="POST" action="/api/add_comments.php" style="display:inline">
            <input type="hidden" name="target" id="target" value="<?=$data[$i]["id"]?>">
            <input type="text" class="textbox_member" name="comments" placeholder="댓글을 남겨보세요!">
        </form>
        </div>
        <div class="feed_comment">
            <div class="comment_list_box">
                <?php for($y=0;$y<count($detail["reply"]);$y++){
                    $nickname = $user->readNickName($detail["reply"][$y]["user_id"]);
                    if($y<4){
                        ?>
                <div class="item_comment">
                    <span class="nick"><?=$nickname?></span>
                    <p class="comment_txt"><?=$detail["reply"][$y]["contents"]?></p>
                </div>
            <?php }else{?>
                    <div class="item_comment hide">
                    <span class="nick"><?=$nickname?></span>
                    <p class="comment_txt"><?=$detail["reply"][$y]["contents"]?></p>
                </div>
          <?php  } }?>
                
            </div>
            <p class="more_comment more_v">
                <a href="#" class="more_comment">댓글 더 보기 +</a>
            </p>
        </div>
    </div>
    <?php } ?>
     
            <!-- <p class="more_comment">
                 <a href="#" class="more_comment">댓글 더 보기 +</a>
             </p>-->
        </div>
        <a class="more_history" onclick ="grid_more_view()" style="margin:15px auto;">MORE +</a>
    </div>

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
    <div class="pop pop_feed_manage">
    <div class="popup">
    <a href="#" class="close_pop"><img src="/assets/images/feed/close.png" alt=""></a>
    <ul class="manage_feed_list">
    <li><a href="/sub/feed/make_feed.php">수정</a></li>
    <li><a href="#">삭제</a></li>
    <li><a href="#">익명 여부 설정</a></li>
    </ul>
    </div>
    </div>
    <script>
        function grid_more_view(){
        var start = $('.feed_posting_area .feed_preview_item').length;
          
        $.ajax({
     type: "POST",
      
     data:{ order:<?=$order?> , start : start},
     url: "/api/grid_more_view.php",
     success: function(response){
       if(response!=null){
        var cnt = response.length;
        }else{
        var cnt = 0;
        }
         
         
         
        for(var i=0; i<response.length;i++){
        $('.feed_posting_area').append(response[i]);

        }
      
                  
     },
     });
    }

    function like_bt(target){
     

    var numLike = $(".like_post#"+target).find("a").html();

     $.ajax({
     type: "POST",
     dataType: 'json',
     data:{ target:target},
     url: "/api/ck_like.php",
     success: function(response){
      if(response==200){
        $(".like_post#"+target+" img").parents(".like_post").toggleClass("active");


    if($(".like_post#"+target+" img").parents(".like_post").hasClass("active") == true){
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
    $(".more_comment.more_v").click(function(){

    $(this).siblings(".comment_list_box").find(".hide").removeClass("hide");

    });
    function img_down(target){




    iframe = document.createElement('iframe');  
    iframe.id = "download-container";
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    iframe.src = '/api/thanks_down.php?target='+target; 
    }
    /*댓글 삭제*/
    $(".delete_comment").click(function () {
    var choicePost = $(this).parents(".feed_preview_item");
    var numComment = choicePost.find(".comment_num").html();
    console.log(numComment);
    if (confirm("댓글을 삭제하시겠습니까?")) {
    $(this).parents(".item_comment").remove();

    numComment--;
    choicePost.find(".comment_num").html(numComment);
    }
    return false;
    });

    /*like*/
    /*$(".like_post img").click(function () {
    var numLike = $(this).parents(".like_post").find("a").html();
    $(this).parents(".like_post").toggleClass("active");

    if ($(this).parents(".like_post").hasClass("active") == true) {
    numLike++;
    $(".feed_manage .like_post a").html(numLike);
    } else {
    numLike--;
    $(".feed_manage .like_post a").html(numLike);
    }

    });*/
    /*like detail*/
    /* $(".like_detail").click(function () {
    $(".pop_like_people").show();
    $(".pop_like_people .close_pop").click(function () {
    $(".pop_like_people").hide();
    return false;
    });
    return false;
    });*/ $(".pop_like_people .close_pop").click(function () {
    $(".pop_like_people").hide();
    return false;
    });
    function view_like(target){

    $.ajax({
     type: "POST",
     dataType: 'json',
     data:{ target:target},
     url: "/api/view_likes.php",
     success: function(response){
        console.log(response);
      if(response!=null){
          $(".like_info_top p span").text(response.length);
          $(".list_people").text("");
          $(".list_people").append(response);
          $(".pop_like_people").show();

    }else{
     $(".like_info_top p span").text(0);
          $(".list_people").text("");
          $(".pop_like_people").show();
    }            
     },
     });
    }
    /*feed manage*/
    $(".btn_manage_feed").click(function () {
    $(".pop_feed_manage").show();
    $(".pop_feed_manage .close_pop").click(function () {
    $(".pop_feed_manage").hide();
    return false;
    });
    return false;
    });
    </script>


    <?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>
