<?php require_once('../assets/elements/header.php');?>


<div class="wra_user">
	<div class="section_gnb_custom">
		<ul>
			<li class="bg_menu focus"><a href="#" class="matching_menu">매칭 중 견적 <img src="/assets/images/sub/matching.png"> </a></li>
			<li class="bg_menu"><a href="#">매칭 완료 견적 <img src="/assets/images/sub/matching complete.png"></a></li>
			<li class=""><a href="#">내 정보</a></li>
			<li class=""><a href="#">프로필 관리</a></li>
			<li class=""><a href="#">맞춤 인테리어 설정</a></li>
			<li class=""><a href="#">메시지 관리</a></li>
			<li class=""><a href="#">스크랩</a></li>
			<li class=""><a href="#">팔로워</a></li>
			<li class=""><a href="#">알림설정</a></li>
		</ul>
		<div class="section_gnbCustom_rolling">
			<div class="swiper-wrapper">
				<div class="swiper-slide myPage_gndMenu">
					<a href="">매칭 중 견적</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">매칭 완료 견적</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">내 정보</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">프로필 관리</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">맞춤 인테리어 설정</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">메시지 관리</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">스크랩</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">팔로워</a>
				</div>
				<div class="swiper-slide myPage_gndMenu">
					<a href="">알림설정</a>
				</div>
			</div>
		</div>
	</div>
	<div class="section_menu_mypage mSection_menu_mypage">
		<div class="area_interior_before_after">
			<p class="title_interior_photo">인테리어 Before & After</p>
			<div class="box_postscript_photo">
				<div class="postscript_photo active">
					<div class="swiper-container" id="slidePhotoBefore">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>

						</div>

					</div>
					<div class="swiper-button-next next1"></div>
				</div>
				<div class="postscript_photo ">
					<div class="swiper-container" id="slidePhotoAfter">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							<div class="swiper-slide">
								<p><img src="http://www.placehold.it/876x540"></p>
							</div>
							
						</div>

					</div>
					<div class="swiper-button-next next2"></div>
				</div>
			</div>
			<div class="box_interior_status">
				<ul class="clearfix">
					<li class="focus"><a href="#" class="status_btn">Before</a></li>
					<li><a href="#" class="status_btn">After</a></li>
				</ul>
				<p class="save_img"><a href="#">이미지 저장</a></p>
			</div>
		</div>


	</div>

</div>
<script>
	var swiper = new Swiper('#slidePhotoBefore', {
		slidesPerView: 'auto',
		/*spaceBetween: 20,*/
		nextButton: '.swiper-button-next.next1',

	});
	var swiper = new Swiper('#slidePhotoAfter', {
		slidesPerView: 'auto',
		/*spaceBetween: 20,*/
		nextButton: '.swiper-button-next.next2',

	});

</script>

<?php require_once('../assets/elements/footer.php');?>