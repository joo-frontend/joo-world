<?php 
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$target = $_POST["target"];
$session = new session();
if(!$session -> usCheck()){
	alertMon("aNr","해당 기능은 로그인 후 이용하실 수 있습니다.","");
	die;
}
$comments = $_POST["comments"];
if(empty($target)){
alertMon("aNb","잘못된 접근입니다.","");
die;
}
$thanks = new thanks_contents();
$result = $thanks -> add_comments($target,$comments);
if($result==500){
	alertMon("aNb","시스템 오류가 발생하였습니다. 관리자에게 문의해주시기 바랍니다.","");
	die;
}else if($result==400){
	alertMon("aNr","해당 기능은 로그인 후 이용하실 수 있습니다.","");
	die;
}else if($result==200){
	alertMon("aNb","등록되었습니다.","");
	die;
}
?>