    <?php 
    require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
    header('Content-Type: application/json');
    $thanks = new thanks_contents();
    $session = new session();
    $user = new user();
    $order = $_POST['order'];
    $start = $_POST['start'];

    $data = $thanks ->get_thanks_list($start,5,$order);

    for($i=0;$i<count($data);$i++){
    $like_ck = $thanks -> like_ck($data[$i]["id"]);
     $detail = $thanks->get_thanks_detail($data[$i]["id"]);
    if($data[$i]["is_anonymous"]==1){
    $nickname = "익명";
    }else{
    $nickname = $user ->readNickName($data[$i]["user_id"]);
    }
    $return[$i] ='<div class="feed_preview_item">';
    $return[$i].='<div class="feed_profile">';
    $return[$i].='<a href="/sub/feed/other_feed.php?id='.$data[$i]["user_id"].'" class="feed_img_profile" style="background-image:url(';

    if($data[$i]["is_anonymous"]==1){
    $return[$i].='/assets/images/feed/no_profile_user.png';
        }else{
    $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$data[$i]["user_id"].'.*') as $value){
                    if($j==1){
    $return[$i] .=''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                    }
    }}
    $return[$i] .='); background-size:cover; background-position:center;"><img src="/assets/images/feed/myfeed_profile.png" alt="" style="opacity:0;"></a>';
    $return[$i] .='<a href="/sub/feed/other_feed.php'.$data[$i]["user_id"].'" class="nickname">'.$nickname.'</a>';
    $return[$i] .='<div class="link_feed">';
    $return[$i] .='<a onclick="img_down('.$data[$i]["id"].')"><img src="/assets/images/feed/download.png" alt=""></a>';
    $return[$i] .='<a href="#"><img src="/assets/images/feed/share.png" alt=""></a></div></div>';
    $return[$i] .='<div class="feed_card"><img src="'.$data[$i]["contents_img"].'" alt=""></div>';
    $return[$i] .='<div class="feed_manage" >';
    $return[$i] .='<span class="like_post';
    if($like_ck==1){ 
    $return[$i] .=" active"; }
    $return[$i] .='"  id="'.$data[$i]["id"].'" ><img class="like_off" src="/assets/images/calendar/like category_off.png" alt="" onclick="like_bt('.$data[$i]["id"].')">';
    $return[$i] .='<img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="" onclick="like_bt('.$data[$i]["id"].')">';
    $return[$i] .='<a onclick="view_like('.$data[$i]["id"].')" class="like_detail">'.$data[$i]["likes"].'</a></span>';
    $return[$i] .='<p class="date">'.date("Y-m-d | H:i",strtotime($data[$i]["created_at"])).'</p></div>';
    $return[$i] .='<div class="feed_info"><p class="comment_num">'.count($detail["reply"]).'</p>';
    $return[$i] .='<form method="POST" action="/api/add_comments.php" style="display:inline"><input type="hidden" name="target" id="target" value="'.$data[$i]["id"].'">';
    $return[$i] .='<input type="text" class="textbox_member" name="comments" placeholder="댓글을 남겨보세요!"></form></div><div class="feed_comment"><div class="comment_list_box">';
    for($y=0;$y<count($detail["reply"]);$y++){
    $nickname = $user->readNickName($detail["reply"][$y]["user_id"]);
    if($y<4){
    
    $return[$i] .='<div class="item_comment">';
    $return[$i] .='<span class="nick">'.$nickname.'</span>';
    $return[$i] .='<p class="comment_txt">'.$detail["reply"][$y]["contents"].'</p></div>';
     }else{
    $return[$i] .='<div class="item_comment hide"><span class="nick">'.$nickname.'</span>';
    $return[$i] .='<p class="comment_txt">'.$detail["reply"][$y]["contents"].'</p></div>';
      } }

    $return[$i] .='</div><p class="more_comment more_v"><a href="#" class="more_comment">댓글 더 보기 +</a></p></div></div>';  } 

 
  
   

    echo json_encode(array_values($return), JSON_UNESCAPED_UNICODE);

    ?>