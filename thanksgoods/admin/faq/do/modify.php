<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();
$thanksgoods_faq = new thanksgoods_faq();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$targetId = $_POST['id'];

if (empty($targetId)) {
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}

$data['question'] = $_POST['question'];
$data['answer'] = $_POST['answer'];

$result = $thanksgoods_faq->update($targetId, $data);

if ($result == 200) {
    alertMon('aNr', '수정되었습니다.', '/admin/faq');
    die;
} else if ($result == 400) {
    alertMon('aNr','로그인 후 이용하실 수 있습니다.','');
    die;
} else if ($result == 500) {
    alertMon('aNb', '일시적인 오류로 인해 완료할 수 없습니다. 잠시 후 다시 시도해주세요.', '');
    die;
}