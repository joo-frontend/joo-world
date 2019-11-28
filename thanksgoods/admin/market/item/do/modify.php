<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();
$thanksgoods_market = new thanksgoods_market();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$targetId = filter_var(makeitSafe($_POST['id']), FILTER_SANITIZE_NUMBER_INT);

if (empty($targetId)) {
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}

$data = array();

$data['type'] = filter_var(makeitSafe($_POST['type']), FILTER_SANITIZE_NUMBER_INT);
$data['category'] = filter_var(makeitSafe($_POST['category']), FILTER_SANITIZE_NUMBER_INT);
$data['price'] = filter_var(makeitSafe($_POST['price']), FILTER_SANITIZE_NUMBER_INT);
$data['is_sale'] = empty($_POST['is_sale']) ? 0 : filter_var(makeitSafe($_POST['is_sale']));
$data['sale_price'] = filter_var(makeitSafe($_POST['sale_price']), FILTER_SANITIZE_NUMBER_INT);
$data['delivery_price'] = filter_var(makeitSafe($_POST['delivery_price']), FILTER_SANITIZE_NUMBER_INT);
$data['name'] = filter_var(makeitSafe($_POST['name']), FILTER_SANITIZE_STRING);
$data['description'] = $_POST['description'];
$data['option'] = $_POST['option_name'];
$data['option_value'] = $_POST['option_value'];
$result = $thanksgoods_market->update_item($targetId, $data);
if ($result == 200) {
     if(is_uploaded_file($_FILES['thumbnail']['tmp_name'])){
                       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$targetId.'.*') as $value){
                    unlink($value);
                    }
                    $fc_name = $_FILES["thumbnail"]["name"];
                    $fc_ext = end((explode(".", $fc_name))); 
                    $filename = $targetId.'.'.$fc_ext; 
                            if (move_uploaded_file($_FILES['thumbnail']['tmp_name'], '/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$filename) ){
                                
                            }else{
                                alertMon('aNb', '시스템에 문제가 발생했습니다. 시스템 관리자에게 문의하세요.', '/admin/item/list');
                                die;
                                }
                    } 
    alertMon('aNr', '수정되었습니다.', '/admin/market/item/detail.php?id=' . $targetId);
    die;
} else if ($result == 400) {
    alertMon('aNr','로그인 후 이용하실 수 있습니다.','');
    die;
} else if ($result == 500) {
    var_dump($FILES);
    die;
    alertMon('aNb', '일시적인 오류로 인해 완료할 수 없습니다. 잠시 후 다시 시도해주세요.', '');
    die;
}