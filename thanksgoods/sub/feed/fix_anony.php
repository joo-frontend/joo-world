<?php
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$thanks = new thanks_contents();
$session = new session();
if(!$session->usCheck()){
	alertMon("aNr","로그인 후 이용하실 수 있습니다.","/");
	die;
}

$target = $_GET["target"];
if(empty($target)){
	alertMon("aNb","잘못된 접근입니다.","");
	die;
}
$data = $thanks -> get_thanks_detail($target);
if($data["thanks"][0]["user_id"]!=$_SESSION["user"]["id"]){
	alertMon("aNb","권한이 없습니다.","");
	die;
}
if($data["thanks"][0]["is_anonymous"]==1){
	$val = 0;
}else{
	$val = 1;
}
$result = $thanks -> fix_anony($target,$val);
if($result==200){
alertMon("aNb","수정되었습니다.","");
die;
}else{
alertMon("aNb","시스템 오류가 발생하였습니다. 관리자에게 문의해주시기 바랍니다.","");
die;
}


?>