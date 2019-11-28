<?php
require_once ('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$target = $_GET['target'];

$thanks = new thanks_contents();
$data = $thanks -> get_thanks_detail($target);
$img = $data["thanks"][0]["contents_img"];


$file = '/DK/hosting_users/thanksgoods/www/public_html'.$img;
 
 if(file_exists($file)){
$file_name = "thanks_goods.jpeg";
header('Content-type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $file_name . '"');
header('Content-Transfer-Encoding: binary');
header('Content-length: ' . filesize($file));
header('Expires: 0');
header("Pragma: public");
//readfile($file);
$fp = fopen($file, 'rb');
fpassthru($fp);
fclose($fp);
}
?>