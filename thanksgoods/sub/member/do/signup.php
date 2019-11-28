<?php   require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$user = new user();

$data['userid'] = $_POST['signupId'].'@'.$_POST['signupEmail'];
$data['password']= $_POST['signupPw'];
$data['contact'] = $_POST['signupTel1'].$_POST['signupTel2'].$_POST['signupTel3'];
if($_POST['chkAddressDefault']==1){
$data['is_mainaddr'] = '1';
}else{
$data['is_mainaddr'] = '0';	
}
$data['nickname'] = $_POST['signupNick'];
$data['postcode'] = $_POST['signupPost'];
$data['address1'] = $_POST['signupAddress1'];
$data['address2'] = $_POST['signupAddress2'];
$data['gender'] = $_POST['signupGender'];
$data['age'] = $_POST['selectboxAge'];
$data['interests'] = $_POST['signupfv_ck'];

 
$result = $user -> signup($data);

if($result=='_500'){
alertMon('aNb','시스템오류가 발생하였습니다. 관리자에게 문의해주시기 바랍니다.','');
die;
}else if($result=='_409'){
alertMon('aNb','중복된 이메일입니다. 다른 이메일을 입력해주세요.','');
die;
}else{
if($_FILES['file']["name"]){
 if(is_uploaded_file($_FILES['file']['tmp_name'])){
                    $fc_name = $_FILES["file"]["name"];
                    $fc_ext = end(explode(".", $fc_name)); 
                    $filename = $result.'.'.$fc_ext; 
                    if(!is_dir("/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/")){
                    mkdir("/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/",0755);
                    }
                    if(move_uploaded_file($_FILES['file']['tmp_name'], "/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/".$filename)){
                    alertMon('aNr','회원가입이 완료되었습니다.','/sub/member/login.php');
					die;
                    }else{
                    alertMon('aNr','회원가입 후 프로필 이미지를 저장하는 과정에서 오류가 발생하였습니다. 회원정보 수정을 통해 다시 등록해주시기 바랍니다.','/sub/member/login.php');
					die;	
                    }
                    
                }
}else{
alertMon('aNr','회원가입이 완료되었습니다.','/sub/member/login.php');
die;	
}
}
 
?>