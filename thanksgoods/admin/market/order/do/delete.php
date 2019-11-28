<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();
$thanksgoods_market = new thanksgoods_market();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$targetId = $_GET['id'];

if (empty($targetId)) {
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}

$result = $thanksgoods_market->update_order_status($targetId, -1);
if ($result == 200) {
    alertMon('aNr', '취소되었습니다.', '/admin/market/order');
    die;
} else if ($result == 400) {
    alertMon('aNr','로그인 후 이용하실 수 있습니다.','');
    die;
} else if ($result == 500) {
    alertMon('aNb', '일시적인 오류로 인해 완료할 수 없습니다. 잠시 후 다시 시도해주세요.', '');
    die;
}
