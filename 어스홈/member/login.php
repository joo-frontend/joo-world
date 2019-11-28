<?php require_once('../assets/elements/header.php');?>


<div class="wra_m">
	<div class="section_login">
		<div class="area_ushome_login">
			<div class="box_login_txt">
				
				<p class="title_login">
					<span>US HOME</span><br>회원이신가요?
				</p>
				<p class="desc_login">회원가입 시 등록하셨던 이메일 혹은 아이디를 입력하세요</p>
				
			</div>
			<div class="box_login_user">
				<form>
					<div class=login_main>
						<div class="login_user">
							<p>
								<input type="text" class="textbox_login" placeholder="이메일 혹은 아이디" name="login_id">
							</p>
							<p>
								<input type="password" class="textbox_login" placeholder="비밀번호" name="login_pw">
							</p>
						</div>
						<div class="login_btn">
							<button type="submit" class="login">로그인</button>
						</div>
					</div>
					<div class="login_etc">
						<a class="user_signup" href="signup_step1.php">회원가입</a>
						<p class="user_forget">
							<a href="#">아이디 찾기</a>
							<a href="#">비밀번호 찾기</a>
						</p>
					</div>
				</form>
			</div>
		</div>
		<div class="area_simple_login">
			<div class="box_login_txt">
				<p class="title_simple">SNS 간편 로그인</p>
				<p class="desc_simple">사용하시는 SNS 계정을 통해 간편하게 로그인하실 수 있습니다</p>
			</div>
			<div class="box_simple_login_user">
				<div class="sns_login">
					<a href="#">
						<img src="/assets/images/sub/52 sns login1.png"><span>카카오톡</span>
					</a>
				</div>
				<div class="sns_login">
					<a href="#">
						<img src="/assets/images/sub/52 sns login2.png"><span>네이버</span>
					</a>
				</div>
				<div class="sns_login">
					<a href="#">
						<img src="/assets/images/sub/52 sns login3.png"><span>페이스북</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>


<?php require_once('../assets/elements/footer.php');?>