<?php

require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

$session = new session();
$user = new user();
$admin = new admin();

if(!$session->usCheck()){

    alertMon('aNr', '로그인 먼저 해주세요.', '/admin/login.php');
    die;

} elseif(!$user->checkAdmin()){

    session_destroy();
    alertMon('aNr', '권한이 없습니다.', '/');
    die;

}
      
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<title>Thanks goods</title>

		<link rel="stylesheet" href="/admin/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
		<link rel="stylesheet" href="/admin/assets/vendors/css/vendor.bundle.base.css">
		<link rel="stylesheet" href="/admin/assets/vendors/css/vendor.bundle.addons.css">
		<link rel="stylesheet" href="/admin/assets/css/style.css">
	</head>

	<body>
		<div class="container-scroller">
			<nav class="navbar horizontal-layout col-lg-12 col-12 p-0">
				<div class="container d-flex flex-row">
					<div class="text-center navbar-brand-wrapper d-flex align-items-top">
						<a class="navbar-brand brand-logo" href="/admin/"><img src="" alt="logo"/></a>
						<a class="navbar-brand brand-logo-mini" href="/admin/"><img src="" alt="logo"/></a>
					</div>
					<div class="navbar-menu-wrapper d-flex align-items-center">
						<div class="search-field ml-auto" action="#"><!--removed--></div>
						<ul class="navbar-nav navbar-nav-right mr-0">
							
							<li class="nav-item dropdown d-none d-xl-inline-block">
								<a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
								<img class="img-xs rounded-circle" src="https://placehold.it/100x100" alt="Profile image">
								</a>
								<div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
									<a href="/admin/common/logout.php" class="dropdown-item">
									로그아웃
									</a>
								</div>
							</li>
						</ul>
						<button class="navbar-toggler align-self-center" type="button" data-toggle="minimize">
						<span class="mdi mdi-menu"></span>
						</button>
					</div>
				</div>
				<div class="nav-bottom">
					<div class="container">
						<ul class="nav page-navigation">
                            <li class="nav-item dashboard">
								<a href="/admin/" class="nav-link"><i class="link-icon mdi mdi-television"></i><span class="menu-title">DASHBOARD</span></a>
							</li>
							<li class="nav-item user">
								<a href="/admin/user" class="nav-link"><i class="link-icon mdi mdi-asterisk"></i><span class="menu-title">회원 관리</span></a>
							</li>
                            <li class="nav-item thanks">
                                <a href="/admin/thanks" class="nav-link"><i class="link-icon mdi mdi-asterisk"></i><span class="menu-title">감사 관리</span></a>
                            </li>
                            <li class="nav-item market">
                                <a href="#" class="nav-link"><i class="link-icon mdi mdi-asterisk"></i><span class="menu-title">쇼핑몰 관리</span><i class="menu-arrow"></i></a>
                                <div class="submenu">
                                    <ul class="submenu-item">
                                        <li class="nav-item"><a class="nav-link" href="/admin/market/item">상품 관리</a></li>
                                        <li class="nav-item"><a class="nav-link" href="/admin/market/category">카테고리 관리</a></li></li>
                                        <li class="nav-item"><a class="nav-link" href="/admin/market/order">주문 관리</a></li></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item alarm">
                                <a href="/admin/alarm" class="nav-link"><i class="link-icon mdi mdi-asterisk"></i><span class="menu-title">알림관리</span></a>
                            </li>
                            <li class="nav-item faq">
                                <a href="/admin/faq" class="nav-link"><i class="link-icon mdi mdi-asterisk"></i><span class="menu-title">FAQ관리</span></a>
                            </li>
						</ul>
					</div>
				</div>
			</nav>