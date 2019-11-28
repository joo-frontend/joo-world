<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();
$thanksgoods_market = new thanksgoods_market();

if(!$session->usCheck() && $user->checkAdmin()){
    alertMon('aNr', '로그인 먼저 해주세요.', '/');
    die;
}

$data = array();

$data['type'] = filter_var(makeitSafe($_POST['type']), FILTER_SANITIZE_NUMBER_INT);
$data['category'] = filter_var(makeitSafe($_POST['category']), FILTER_SANITIZE_NUMBER_INT);
$data['price'] = filter_var(makeitSafe($_POST['price']), FILTER_SANITIZE_NUMBER_INT);
$data['is_sale'] = empty($_POST['is_sale']) ? 0 : filter_var(makeitSafe($_POST['is_sale']), FILTER_SANITIZE_NUMBER_INT);
$data['sale_price'] = filter_var(makeitSafe($_POST['sale_price']), FILTER_SANITIZE_NUMBER_INT);
$data['delivery_price'] = filter_var(makeitSafe($_POST['delivery_price']), FILTER_SANITIZE_NUMBER_INT);
$data['name'] = filter_var(makeitSafe($_POST['name']), FILTER_SANITIZE_STRING);
$data['description'] = $_POST['description'];
$data['option'] = $_POST['option_name'];
$data['option_value'] = $_POST['option_value'];
if (!empty($data['type']) && !empty($data['category']) && !empty($data['price']) && is_numeric($data['is_sale']) && !empty($data['delivery_price']) && !empty($data['name']) && !empty($data['description'])) {
    $result = $thanksgoods_market->create_item($data);

     if ($result == '_400') {
        alertMon('aNr','로그인 후 이용하실 수 있습니다.','');
        die;
    } else if ($result == '_500') {
        alertMon('aNb', '일시적인 오류로 인해 완료할 수 없습니다. 잠시 후 다시 시도해주세요.', '');
        die;
    }else{
            if(is_uploaded_file($_FILES['thumbnail']['tmp_name'])){
                    $fc_name = $_FILES["thumbnail"]["name"];
                    $fc_ext = end((explode(".", $fc_name))); 
                    $filename = $result.'.'.$fc_ext; 
                            if (move_uploaded_file($_FILES['thumbnail']['tmp_name'], '/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$filename) ){
                                 alertMon('aNr', '추가되었습니다.', '/admin/market/item');
                                die;
                            }else{
                                alertMon('aNb', '시스템에 문제가 발생했습니다. 시스템 관리자에게 문의하세요.', '/admin/item/list');
                                die;
                                }
                    }else{

                         alertMon('aNr', '추가되었습니다.', '/admin/market/item');
                        die;
                    }
    } 
} else {
    alertMon('aNb','필수 입력 항목 중 입력되지 않은 항목이 있어 완료할 수 없습니다. 빈 칸이 있는지 확인하신 후 다시 시도해주세요.','');
    die;
}