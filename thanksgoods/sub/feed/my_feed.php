<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$session = new session();
if(!$session->usCheck()){
    alertMon("aNr","해당 기능은 로그인 후 이용하실 수 있습니다.","/");
    die;
}
$user = new user();
$thanks = new thanks_contents();
$userinfo = $user -> read()[0];
$point_info = $user -> point_read();

if(count($point_info)<1){
$total_point = 0; 
}else{
$total_point = $point_info[0]['total_point'];
}
$thanks = $user -> thanks_read();
$likes = $user -> likes_read();
 
 
?>
<input type="hidden" id="now_target">
  <div class="feed_wra">
        <div class="feed_profile_area">
            <p class="imgBox" style="background-image:url(<?php 
                        $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$_SESSION['user']['id'].'.*') as $value){
                                        if($j==1){
                                        echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                        }
            }?>); background-size:cover; background-position:center;"> 

                <img src="/assets/images/feed/myfeed_profile.png" alt="" style="opacity:0;">
         
            </p>
            <div class="profile_feedbox">
                <p class="name"><?=$userinfo['nickname']?></p>
                <a href="/sub/feed/my_profile_edit.php" class="setting_info">내정보 수정</a>
                <a href="/sub/feed/my_alarm.php" class="setting_alarm ">알림 설정</a>
            </div>
            <div class="my_post_info">
                <div class="each_info">
                    <p class="num"><?=$total_point?></p>
                    <p class="desc">보유 <span>포인트</span></p>
                </div>
                <div class="each_info">
                    <p class="num"><?=count($thanks)?></p>
                    <p class="desc">감사 <span>카드</span></p>
                </div>
                <div class="each_info">
                    <p class="num"><?=count($likes)?></p>
                    <p class="desc">공감 <span>카드</span></p>
                </div>
            </div>
            <a href="/sub/feed/make_feed.php" class="write_card"><img src="/assets/images/feed/write.png" alt=""></a>
        </div>
      <div class="feed_list_area">
          <ul>
            <?php for($i=0;$i<count($thanks);$i++){ ?>
             
             <li><a href="#" value="<?=$thanks[$i]['id']?>">
                <?php if($thanks[$i]['is_anonymous']==1){?> 
                <span><img src="/assets/images/feed/anonymous_big.png" alt=""></span>
            <?php }?>
                <img src="<?=$thanks[$i]['contents_img']?>" alt=""></a></li>

           <?php  } ?>
              
             
          </ul>
          <a href="#" class="more_mobile">MORE +</a>
      </div>

  </div>

<div class="pop pop_feed">
    <div class="popup">
        <a href="#" class="other_post prev"><img src="/assets/images/feed/before.png" alt=""></a>
        <a href="#" class="other_post next"><img src="/assets/images/feed/next.png" alt=""></a>
        <div class="popup_contents">
                <p class="feed_img"><span><img src="/assets/images/feed/anonymous_big.png" alt=""></span><img src="/assets/images/feed/feed_detail1.png" alt=""></p>
                <div class="feed_area">
                    <div class="feed_manage">
                       <span class="like_post"><img class="like_off" src="/assets/images/calendar/like category_off.png" alt="">
                        <img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="">
                        <a href="#" class="like_detail">56</a></span>
                        <div class="link_feed">
                            <a onclick="img_down()"><img src="/assets/images/feed/download.png" alt=""></a>
                            <a href=""><img src="/assets/images/feed/share.png" alt=""></a>
                            <a href="#" class="btn_manage_feed"><img src="/assets/images/feed/option.png" alt=""></a>
                        </div>
                    </div>
                    <div class="feed_info">
                        <p class="comment_num">16</p>
                        <p class="date">2018.08.07  l  18:08</p>
                    </div>
                    <div class="feed_comment">
                        <input type="text" class="textbox_member" placeholder="댓글을 남겨보세요!">
                        <div class="comment_list_box">
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">doflwl</span><p class="comment_txt">좋은 글이네요  :)<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>
                            <div class="item_comment">
                                <span class="nick">rla_anduf</span><p class="comment_txt">공감해요!<a href="#" class="delete_comment"><img
                                                src="/assets/images/feed/delete.png" alt=""></a></p>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
<div class="pop pop_feed_manage">
    <div class="popup">
        <a href="#" class="close_pop"><img src="/assets/images/feed/close.png" alt=""></a>
        <ul class="manage_feed_list">
            <li><a onclick="fix()">수정</a></li>
            <li><a onclick="del()">삭제</a></li>
            <li><a onclick="anony()">익명 여부 설정</a></li>
        </ul>
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
       $(".like_detail").click(function(){
        target = $("#now_target").val();
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
    });
        function fix(){
             target = $("#now_target").val();
             location.href="/sub/feed/fix_feed.php?target="+target;
        }
        function del(){
             target = $("#now_target").val();
             if(confirm("정말로 삭제하시겠습니까?")){
             location.href="/sub/feed/del_feed.php?target="+target;
             }
        }
        function anony(){
             target = $("#now_target").val();
             location.href="/sub/feed/fix_anony.php?target="+target;
        }
        function img_down(){

            target = $("#now_target").val();
      
        
            iframe = document.createElement('iframe');  
            iframe.id = "download-container";
            iframe.style.visibility = 'hidden';
            document.body.appendChild(iframe);
        
            iframe.src = '/api/thanks_down.php?target='+target; 
        }
        /*like*/
        $(".like_post img").click(function () {
            target = $("#now_target").val();

            var numLike = $(this).parents(".like_post").find("a").html();

             $.ajax({
             type: "POST",
             dataType: 'json',
             data:{ target:target},
             url: "/api/ck_like.php",
             success: function(response){
              if(response==200){
                $(".like_post img").parents(".like_post").toggleClass("active");


            if($(".like_post img").parents(".like_post").hasClass("active") == true){
                numLike ++;
                $(".feed_manage .like_post a").html(numLike);
            }else {
                numLike --;
                $(".feed_manage .like_post a").html(numLike);
            }
        }else if(response==400){
            alert("해당기능은 로그인 후 이용하실 수 있습니다.");
            location.href="/";
        }            
             },
             });

            

        });
        /*댓글 삭제*/
        $(".delete_comment").click(function () {
            var choicePost = $(this).parents(".feed_area");
            var numComment = choicePost.find(".comment_num").html();
            console.log(numComment);
            if(confirm("댓글을 삭제하시겠습니까?")){
                $(this).parents(".item_comment").remove();

                numComment --;
                choicePost.find(".comment_num").html(numComment);
            }
            return false;
        });
        //feed detail
        function feedDetail(x) {
            if (x.matches) {
                $(".feed_list_area a").click(function () {
                    window.location.href = '/sub/feed/feed_detail.php';
                    return false;
                });
            } else {
                $(".feed_list_area a").click(function () {
                    var target = $(this).attr('value');
                    $("#now_target").val(target);
                        
                    $.ajax({
             type: "POST",
             dataType: 'json',
             data:{ target:target},
             url: "/api/get_thanks_detail.php",
             success: function(response){
             console.log(response);
             $(".feed_img>img").attr("src",response[0]);
             if(response[2]==0){
             $(".feed_img>span").remove();
             }
             $('.feed_info .date').text(response[1]);
             $('.comment_list_box').text('');
             $('.comment_list_box').append(response[3]);
             $('.list_people').text('');
             $('.list_people').append(response[7]);
             $('.like_detail').text(response[4]);
             $('.like_info_top p span').text(response[4]);
             $('.comment_num').text(response[5]);
             if(response[6]==1){
             $('.like_post').addClass("active");
             }else{
             $('.like_post').removeClass("active");
             }
             $(".pop.pop_feed").show();
             
            
             },
             });

                    
                    $(".btn_manage_feed").click(function () {
                        $(".pop_feed_manage").show();
                        $(".pop_feed_manage .close_pop").click(function () {
                            $(".pop_feed_manage").hide();
                        });
                    });
                    $("html").click(function (e) {
                        var feedBox = $(".pop_feed");
                        var feedManage = $(".pop_feed_manage");
                        if(e.target.className == "pop pop_feed_manage"){
                            $(".pop.pop_feed_manage").hide();
                        }else if(e.target.className == "pop pop_feed") {
                            if(e.target.className == "pop pop_feed_manage"){
                                $(".pop.pop_feed_manage").hide();
                            }
                            $(".pop_feed").hide();
                        }
                    });

                    return false;
                });
            }
        }

        var x = window.matchMedia("(max-width: 1024px)");
        feedDetail(x);
        //end feed detail


        /*like detail*/
        $(".like_detail").click(function () {
            $(".pop_like_people").show();
            $(".pop_like_people .close_pop").click(function () {
                $(".pop_like_people").hide();
                return false;
            });
            return false;
        });
    </script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>