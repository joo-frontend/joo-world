<?php 
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
 header('Content-Type: application/json');
$thanks = new thanks_contents();
$session = new session();
$user = new user();
$target = $_POST['target'];
$data = $thanks -> get_thanks_detail($target);
$likes = $thanks ->get_target_likes($target);
 
$return["img"] = $data["thanks"][0]["contents_img"];
$return["date"] = date('Y.m.d | H:i',strtotime($data["thanks"][0]["created_at"]));
$return['is_anonymous'] = $data["thanks"][0]["is_anonymous"];

$reply ='';
for($i=0;$i<count($data["reply"]);$i++){
$nickname = $user -> readNickName($data["reply"][$i]["user_id"]);
$reply .='<div class="item_comment"><span class="nick">'.$nickname.'</span><p class="comment_txt">'.$data['reply'][$i]['contents'];
if($data["thanks"][0]['created_by'] == $_SESSION['user']['id']){
$reply .='<a href="#" class="delete_comment"><img src="/assets/images/feed/delete.png" alt=""></a>';
}
$reply .='</p></div>';
}
$return['reply']=$reply;
$return['likes']=$data["thanks"][0]["likes"];
$return["re_cnt"] = count($data["reply"]);
$like_ck = $thanks -> like_ck($target);
if($like_ck>0){
$return["like_ck"] = 1;
}else{
$return["like_ck"] = 0;
}
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