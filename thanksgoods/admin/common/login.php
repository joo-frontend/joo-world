<?php

    require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

    $session = new session();
    $user = new user();

    if($session->usCheck()){
        if($user->checkAdmin()){
            alertMon('aNr', '이미 로그인되어있습니다.', '/');
            die;
        } else {
                session_destroy();
                alertMon('aNr', '권한이 없습니다.', '/');
                die;

        }
       
    }

    $email = makeitSafe($_POST['userid']);
    $password = makeitSafe($_POST['userpw']);

    if(!empty($email) && !empty($password)){

        $process = $user->login($email, $password);
        if($process == 200){

            if($user->checkAdmin()){

                alertMon('r', '', '/admin/');
                die;

            } else {

                session_destroy();
                alertMon('aNr', '권한이 없습니다.', '/');
                die;

            }
            
        } elseif($process == 400 || $process == 401 || $process == 404) {
            alertMon('aNr', '아이디나 비밀번호가 잘못되었습니다. 확인 후 다시 시도해주세요.', '/admin/login');
            die;
        } else {
            alertMon('aNr', '일시적인 시스템 오류로 인해 로그인을 완료할 수 없습니다. 확인 후 다시 시도해주세요.', '/admin/login');
            die;
        }
            
    } else {
        alertMon('aNb', '빈 칸 없이 입력해주세요.', '/admin/login');
        die;
    }