<?php
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
 header('Content-Type: application/json');
$thanks = new thanks_contents();
$target = $_POST["target"];
$likes = $thanks ->get_target_likes($target);
$user = new user();
if(count($likes)>0){
$like = '';
for($i=0;$i<count($likes);$i++){
	$nickname = $user -> readNickName($likes[$i]["user_id"]);
$like.='<div class="people_box">';
$like.='<a href="/sub/feed/other_feed.php?id='.$likes[$i]['user_id'].'" class="feed_img_profile"><img src="'; 
                        $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$likes[$i]['user_id'].'.*') as $value){
                                        if($j==1){
                                        $like.=str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value);
                                        }
            
            $like.='" alt=""></a>';
            $like.='<a href="/sub/feed/other_feed.php?id'.$likes[$i]['user_id'].'" class="nickname">'.$nickname.'</a></div>';
           
}
$return['like_list'] = $like;
}
}
 echo json_encode(array_values($return), JSON_UNESCAPED_UNICODE);


?>