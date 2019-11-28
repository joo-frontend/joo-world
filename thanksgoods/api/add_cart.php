<?php
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$session = new session();
$user = new user();
$thanks = new thanks_contents();
if(!$session -> usCheck()){
	echo 400;

}
$qty = $_POST['qty'];
$target = $_POST["target"];
$option = $_POST['option'];
$price = $_POST['total_price'];

$data['qty'] = $qty;
$data['target'] = $target;
$data['option'] = $option;
$data['price'] = $price;
$result = $thanks -> add_cart($data);
echo $result;

?>