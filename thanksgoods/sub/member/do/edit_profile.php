<?php   require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$user = new user();
$session = new session();
if(!$session->usCheck()){
     alertMon('aNr','해당 기능은 로그인 후 이용하실 수 있습니다.','/');
     die;
}
 

if(!empty($_POST['newPw'])){
if($_POST['newPw']!=$_POST['newPwAgain']){
     alertMon('aNb','새 비밀번호와 비밀번호 확인이 일치하지 않습니다. 다시 확인해주시기 바랍니다.','');
     die;
}else{
$data['newPw'] = $_POST['newPw'];
$data['currentPw'] = $_POST['currentPw'];
} 
}
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

 
$result = $user -> edit_profile($data);

if($result=='500'){
alertMon('aNb','시스템오류가 발생하였습니다. 관리자에게 문의해주시기 바랍니다.','');
die;
}else if($result=='401'){
alertMon('aNb','현재 비밀번호가 일치하지 않습니다. 다시 확인해주시기 바랍니다.','');
die;
}else{
if($_FILES['file']["name"]){

 if(is_uploaded_file($_FILES['file']['tmp_name'])){
                    $fc_name = $_FILES["file"]["name"];
                    $fc_ext = end(explode(".", $fc_name)); 
                    $filename = $_SESSION['user']['id'].'.'.$fc_ext; 
                    if(!is_dir("/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/")){
                    mkdir("/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/",0755);
                    }
                     foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$_SESSION['user']['id'].'.*') as $value){
                         unlink($value);
                     }
                    if(move_uploaded_file($_FILES['file']['tmp_name'], "/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/".$filename)){
                    alertMon('aNr','수정이 완료되었습니다.','/sub/feed/my_profile_edit.php');
					die;
                    }else{
                    alertMon('aNr','프로필 이미지 변경하는 과정에서 오류가 발생하였습니다. 다시 시도해주시기 바랍니다.','/sub/feed/my_profile_edit.php');
					die;	
                    }
                    
                }
}else{
alertMon('aNr','수정이 완료되었습니다.','/sub/feed/my_profile_edit.php');
die;	
}
}
 
?>