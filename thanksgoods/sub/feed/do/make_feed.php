<?php  require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
$session = new session();
$thanks = new thanks_contents();
 
if($_FILES['file']['name']){
	if(is_uploaded_file($_FILES['file']['tmp_name'])){
                    $fc_name = $_FILES["file"]["name"];
                    $fc_ext = end(explode(".", $fc_name));
                    if(strtolower($fc_ext)!='jpg'&&strtolower($fc_ext)!='png'&&strtolower($fc_ext)!='gif'&&strtolower($fc_ext)!='jpeg'){
					alertMon('aNb','이미지만 업로드가 가능합니다.','');
					die;
                    }
                    $filename = $_SESSION['user']['id'].'_'.time().'.'.$fc_ext; 
                    if(!is_dir("/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/")){
                    mkdir("/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/",0755);
                    }
                      
                    if(move_uploaded_file($_FILES['file']['tmp_name'], "/DK/hosting_users/thanksgoods/www/public_html/assets/images/feed/".$filename)){
                  	$_POST['background'] = "/assets/images/feed/".$filename;
                    }else{
                    alertMon('aNr','배경 이미지를 저장하는 과정에서 오류가 발생하였습니다. 다시 시도해주시기 바랍니다.','/sub/feed/my_profile_edit.php');
					die;	
                    }
                    
                }
}
if(!$session->usCheck()){
    alertMon('aNr','해당 기능은 로그인 후 이용하실 수 있습니다.','/');
    die;
}
 
$result = $thanks -> make_feed($_POST);
if($result==200){
	alertMon('aNr','등록되었습니다.','/');
	die;
}else{
	alertMon('aNb','시스템 오류가 발생하였습니다. 관리자에게 문의해주시기 바랍니다.','');
	die;
}

?>