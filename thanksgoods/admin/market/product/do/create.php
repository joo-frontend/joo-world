<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$type = filter_var(makeitSafe($_POST['type']), FILTER_SANITIZE_NUMBER_INT);
$category = filter_var(makeitSafe($_POST['category']), FILTER_SANITIZE_NUMBER_INT);
$price = filter_var(makeitSafe($_POST['price']), FILTER_SANITIZE_NUMBER_INT);
$is_sale = empty($_POST['is_sale']) ? 0 : filter_var(makeitSafe($_POST['is_sale']), FILTER_SANITIZE_NUMBER_INT);
$sale_price = filter_var(makeitSafe($_POST['sale_price']), FILTER_SANITIZE_NUMBER_INT);
$delivery_price = filter_var(makeitSafe($_POST['delivery_price']), FILTER_SANITIZE_NUMBER_INT);
$name = filter_var(makeitSafe($_POST['name']), FILTER_SANITIZE_STRING);
$description = filter_var(makeitSafe($_POST['description']), FILTER_SANITIZE_STRING);

echo $is_sale;