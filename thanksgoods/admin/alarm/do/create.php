<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$type = $_POST['type'];
$category = $_POST['category'];
$price = $_POST['price'];
$is_sale = $_POST['is_sale'];
$sale_price = $_POST['sale_price'];
$delivery_price = $_POST['delivery_price'];
$name = $_POST['name'];
$description = $_POST['description'];