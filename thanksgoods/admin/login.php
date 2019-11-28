<?php

    require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

	$session = new session();
	$user = new user();

	if($session->usCheck()){
        if($user->checkAdmin()){
            alertMon('aNr', '이미 로그인되어있습니다.', '/admin/');
            die;
        } else {
            session_destroy();
            alertMon('aNr', '권한이 없습니다.', '/');
            die;
        }
       
    }

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<title>Thanks GOODS ::</title>

		<link rel="stylesheet" href="/admin/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
		<link rel="stylesheet" href="/admin/assets/vendors/css/vendor.bundle.base.css">
		<link rel="stylesheet" href="/admin/assets/vendors/css/vendor.bundle.addons.css">
		<link rel="stylesheet" href="/admin/assets/css/style.css">
	</head>
	<body>
		<div class="container-scroller">
			<div class="container-fluid page-body-wrapper full-page-wrapper">
				<div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
					<div class="row w-100 mx-auto">
						<div class="col-lg-4 mx-auto">
							<div class="auto-form-wrapper">
								<form action="/admin/common/login.php" method="POST">
									<div class="form-group">
										<label class="label">ID</label>
										<div class="input-group">
											<input type="text" class="form-control" name="userid">
											<div class="input-group-append">
												<span class="input-group-text"></span>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="label">Password</label>
										<div class="input-group">
											<input type="password" class="form-control" name="userpw">
											<div class="input-group-append">
												<span class="input-group-text"></span>
											</div>
										</div>
									</div>
									<div class="form-group">
										<button type="submit" class="btn btn-primary submit-btn btn-block">Login</button>
									</div>
								</form>
							</div>
							<ul class="auth-footer">
								<li><a href="#">Your Action can be logged by some security reasons.</a></li>
							</ul>
							<p class="footer-text text-center">Copyright © 2018 USHOME. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="/admin/assets/vendors/js/vendor.bundle.base.js"></script>
		<script src="/admin/assets/vendors/js/vendor.bundle.addons.js"></script>
		<script src="/admin/assets/js/template.js"></script>

	</body>
</html>