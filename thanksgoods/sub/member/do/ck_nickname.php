<?php   require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$user = new user();
 
$db_conn = load_module();

$ck = $db_conn -> select("users","*");
 

$nickname = $_POST['nickname'];

$result = $user->duplication_nick_Check("users",$nickname);
if($result==true){
echo 500;
}else{
echo 200;
}
?>