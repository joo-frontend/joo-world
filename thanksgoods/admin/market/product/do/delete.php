<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$targetId = $_GET['id'];

if (empty($targetId)) {
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}