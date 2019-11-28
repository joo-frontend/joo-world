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
	<div class="section_menu_mypage">

		<div class="area_alarm_setting">
			<div class="box_alarm_setting">	
				<p class="title_alarm">기본 알림</p>
				<ul>
					<li>
						<p class="alarm_contents">댓글,답글</p>
						<p class="alarm_box">
							<input type="checkbox" id="chk_comment" class="chk_alarm" name="alarm_comment" checked>
							<label for="chk_comment">ON</label>
						</p>
					</li>
					<li>
						<p class="alarm_contents">좋아요</p>
						<p class="alarm_box">
							<input type="checkbox" id="chk_like" class="chk_alarm" name="alarm_comment">
							<label for="chk_like">OFF</label>
						</p>
					</li>
					<li>
						<p class="alarm_contents">스크랩</p>
						<p class="alarm_box">
							<input type="checkbox" id="chk_crip" class="chk_alarm" name="alarm_comment">
							<label for="chk_crip">OFF</label>
						</p>
					</li>
					<li>
						<p class="alarm_contents">메시지</p>
						<p class="alarm_box">
							<input type="checkbox" id="chk_msg" class="chk_alarm" name="alarm_comment">
							<label for="chk_msg">OFF</label>
						</p>
					</li>

				</ul>
			</div>
			<div class="box_alarm_setting">	
				<p class="title_alarm">진행 현황 알림</p>
				<ul>
					<li>
						<p class="alarm_contents">진행 중 견적</p>
						<p class="alarm_box">
							<input type="checkbox" id="chk_estimating" class="chk_alarm" name="alarm_comment">
							<label for="chk_estimating">OFF</label>
						</p>
					</li>
					<li>
						<p class="alarm_contents">완료된 견적</p>
						<p class="alarm_box">
							<input type="checkbox" id="chk_estimate_end" class="chk_alarm" name="alarm_comment">
							<label for="chk_estimate_end">OFF</label>
						</p>
					</li>
			
				</ul>
			</div>
		</div>

	</div>
</div>

<?php require_once('../assets/elements/footer.php');?>