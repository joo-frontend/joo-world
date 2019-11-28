<?php
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$session = new session();
$user = new user();
$thanks = new thanks_contents();
if(!$session -> usCheck()){
	echo 400;

}
$target = $_POST["target"];

$result = $thanks -> ck_wish($target);
echo $result;

?>