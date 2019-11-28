<?php
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$session = new session();
if(!$session -> usCheck()){
	echo 400;
}

$img = $_POST['image'];
$image_parts = explode(";base64,", $img);
    $image_base64 = base64_decode($image_parts[1]);
$UPLOAD_DIR = "/DK/hosting_users/thanksgoods/www/public_html/assets/images/thanks/";
$id = uniqid();
 $file = $UPLOAD_DIR . $id . '.jpeg';
 $save_file = '/assets/images/thanks/'.$id.'.jpeg';
 $success = file_put_contents($file, $image_base64);
if($success){ 
$contents = $save_file;
 echo $contents;
 }else{

}

?>