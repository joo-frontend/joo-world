<?php   require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$id = $_POST['id'];
$pw = $_POST['pw'];

$user = new user();
$result = $user ->login($id,$pw);
echo $result;
?>