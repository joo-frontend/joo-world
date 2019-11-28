<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();
$thanksgoods_user = new thanksgoods_user();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$targetId = $_POST['id'];

if (empty($targetId)) {
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}

$data = array();

$data['userid'] = $_POST['userid'];
$data['nickname'] = $_POST['nickname'];
$data['contact'] = $_POST['contact'];
$data['postcode'] = $_POST['postcode'];
$data['address1'] = $_POST['address1'];
$data['address2'] = $_POST['address2'];
$data['gender'] = $_POST['gender'];
$data['age'] = $_POST['age'];
$data['interests'] = $_POST['interests_value'];

$result = $thanksgoods_user->update($targetId, $data);

if ($result == '_400') {
    alertMon('aNr','로그인 후 이용하실 수 있습니다.','');
    die;
} else if ($result == '_500') {
    alertMon('aNb', '일시적인 오류로 인해 완료할 수 없습니다. 잠시 후 다시 시도해주세요.', '');
    die;
}

if ($_FILES['profile']['name']) {
    if (is_uploaded_file($_FILES['profile']['tmp_name'])) {
        $fc_name = $_FILES['profile']['name'];
        $fc_ext = explode('.', $fc_name)[1];
        $filename = $targetId . '.' . $fc_ext;

        if (!is_dir('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/')) {
            mkdir('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/', 0755);
        }

        if (move_uploaded_file($_FILES['profile']['tmp_name'], '/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/' . $filename)) {
            alertMon('aNr', '수정되었습니다.', '/admin/user/detail.php?id=' . $targetId);
            die;
        } else {
            alertMon('aNr', '회원가입 후 프로필 이미지를 저장하는 과정에서 오류가 발생하였습니다. 회원정보 수정을 통해 다시 등록해주시기 바랍니다.', '/admin/user/detail.php?id=' . $targetId);
            die;
        }
    }
}

alertMon('aNr', '수정되었습니다.', '/admin/user/detail.php?id=' . $targetId);
die;