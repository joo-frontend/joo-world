<?php 
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

  
$filename = $_FILES['image']['name'];
$ext = explode('.',$filename)[1];
$img_path = '/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/wg/';
$id = uniqid();
$product_img  = $img_path.$id.'.'.$ext;
if (move_uploaded_file($_FILES['image']['tmp_name'], $product_img)){
	echo '/assets/images/market/wg/'.$id.'.'.$ext;
}



?>