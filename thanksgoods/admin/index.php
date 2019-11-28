<?php
require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();

if ($session->usCheck()) {
    if ($user->checkAdmin()) {
        require_once('home.php');
    } else {
        alertMon('aNr', '권한이 없습니다.', '/');
        die;
    }
} else {
    require_once('login.php');
}

?>