<?php require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$session = new session();
 
if($session->usCheck()){
require_once("/DK/hosting_users/thanksgoods/www/public_html/sub/calendar/calendar.php");
}else {
require_once("/DK/hosting_users/thanksgoods/www/public_html/sub/member/login.php");
}

?>

    