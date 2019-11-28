<?php 
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
  header('Content-Type: application/json');
$thanks = new thanks_contents();
$session = new session();
$user = new user();
$date = $_POST['date'];
$start = $_POST['start'];

$data = $thanks ->my_today_thanks($start,5,$date);

 for($i=0;$i<count($data);$i++){
                     $like_ck = $thanks -> like_ck($data[$i]["id"]);

                    if($data[$i]["is_anonymous"]==1){
                    $nickname = "익명";
                    }else{
                    $nickname = $user ->readNickName($data[$i]["user_id"]);
                        }
            $return[$i] ='<li class="clearfix">';
            $return[$i].='<div class="profile_post">';
            $return[$i].='<a href="/sub/feed/other_feed.php?id='.$data[$i]["user_id"].'" class="profileBox" style="background-image:url(';
                       
            if($data[$i]["is_anonymous"]==1){
            $return[$i].='/assets/images/feed/no_profile_user.png';
                            }else{
                        $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$data[$i]["user_id"].'.*') as $value){
                                        if($j==1){
            $return[$i] .=''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                        }
            }}
            $return[$i] .='); background-size:cover; background-position:center;"><img src="/assets/images/feed/no_profile_user.png" alt="" style="opacity:0;"></a>';
            $return[$i] .='<a href="/sub/feed/other_feed.php'.$data[$i]["user_id"].'" class="profile_name">'.$nickname.'</a>';
            $return[$i] .='<p class="like ';
            if($like_ck==1){
            $return[$i] .= "active"; }
            $return[$i] .= '" id="'.$data[$i]["id"].'"><img class="like_off" src="/assets/images/calendar/like category_off.png" alt="" onclick="like_bt('.$data[$i]["id"].')">';
            $return[$i] .= '<img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="" onclick="like_bt('.$data[$i]["id"].')"> <span>'.$data[$i]["likes"].'</span></p>';
            $return[$i] .= '</div><div class="contents_post"><p class="posting_txt">'.$data[$i]["contents"].'</p>';
            $return[$i] .='<div class="info_post">';
            $return[$i] .= '<p class="like ';
            
            if($like_ck==1){ $return[$i] .= "active"; }
            $return[$i] .='" ><img class="like_off" src="/assets/images/calendar/like category_off.png" alt="" onclick="like_bt('.$data[$i]["id"].')">';
 			$return[$i] .='<img class="like_on" src="/assets/images/calendar/like cataegory.png" alt="" onclick="like_bt('.$data[$i]["id"].')"> <span>'.$data[$i]["likes"].'</span></p>';
            $return[$i] .='<p class="date">'.date("Y.m.d | H:i",strtotime($data[$i]["created_at"])).'</p></div>
                    </div>
                    <a href="/sub/feed/feed_detail.php" class="img_post">
                        <img src="'.$data[$i]['contents_img'].'" alt="">
                    </a>
                </li>';
                        
          } 
 
 
 
 echo json_encode(array_values($return), JSON_UNESCAPED_UNICODE);

?>