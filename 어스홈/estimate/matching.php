<?php require_once('../assets/elements/header.php');?>

<div class="wra_matching">
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
	<div class="section_matching_status">
		<div class="area_matching_status">
			<div class="box_status focus box_complete_matching_form">
				<p class="before_n_after"><img src="/assets/images/sub/20 matching status_paper.png"></p>
				<div class="status_contents">
					<p class="title">01. 견적신청서 등록 완료</p>
					<div class="status_date">
						<p class="date">18.05.16</p>
						<p class="desc_focus">견적신청서가 성공적으로 등록되었습니다<br>매칭을 진행해주세요</p>
						<div class="detail_status">
							<button class="btn_match_go">매칭 진행하기</button> 
							<a href="#" class="link_match">견적신청서 확인</a>
						</div>
					</div>
				</div>
			</div>

			<div class="box_status focus box_matching_ing">
				<p class="before_n_after"><img src="/assets/images/sub/20  matching status_matching.png"></p>
				<div class="status_contents">
					<p class="title">02. 파트너스 매칭 진행 중</p>
					<div class="status_date">
						<p class="date">18.05.16</p>
						<p class="desc">파트너스 매칭 전입니다</p>
						<p class="desc_focus">매칭에 참여한 파트너스는 총 10곳 입니다<br>파트너스에 대한 정보는 프로필을 통해 확인 가능합니다</p>
						<div class="matching_partner_info">
							<a href="#" class="link_match">자세히 보기</a>
							<div class="partner_profiles">
								<ul>
									<li><p class="partner_profile_img"><img src="http://www.placehold.it/40X40"></p></li>
									<li><p class="partner_profile_img"><img src="http://www.placehold.it/40X40"></p></li>
									<li><p class="partner_profile_img"><img src="http://www.placehold.it/40X40"></p></li>
									<li><p class="partner_profile_img"><img src="http://www.placehold.it/40X40"></p></li>
									<li><p class="partner_profile_img"><img src="http://www.placehold.it/40X40"></p></li>
								</ul>
								<span class="partner_more">&middot;&middot;&middot;</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="box_status box_complete_matching">
				<p class="before_n_after"><img src="/assets/images/sub/20  matching status_matching complete.png"></p>
				<div class="status_contents">
					<p class="title">03. 파트너 선정 완료</p>
					<div class="status_date">
						<p class="date">18.05.16</p>
						<p class="desc">파트너 매칭 완료 전입니다</p>
					</div>
				</div>
			</div> 
		</div>
	</div>
</div>
<?php require_once('../assets/elements/footer.php');?>