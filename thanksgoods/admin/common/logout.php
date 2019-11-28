<?php
	
	require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');

	$session = new session();

	session_destroy();

	echo '<script>location.href="/";</script>';