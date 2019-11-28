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
	<div class="section_menu_mypage section_matching_status section_partner_matching">
		<div class="area_matching_status area_partner_matching_status success">
			<!-- 매칭 성공 -->
			<div class="box_matching_status_txt success_matching">
				<p class="status_txt">매칭에 성공 하였습니다</p>
				<p class="status_desc">의뢰인과의 대화를 시작하세요!</p>
				<p class="status_etc">의로인의 프로필 혹은 메시지를 통해 정보를 확인하고 보다 빠른 소통이 가능합니다</p>
				<div class="box_partner_info">
					<p class="partner_info"><i><img src="http://www.placehold.it/53X53"></i><span>partner 1</span></p>
					<button class="partner_msg">메시지 전송</button>
				</div>
			</div>

			<!-- 단계 진행시 'focus' 클래스 추가 -->
			<div class="box_status focus">
				<p class="before_n_after"><img src="/assets/images/sub/20 matching status_paper.png"></p> 
				<div class="status_contents">
					<p class="title">01. 입찰신청 완료</p>
					<div class="status_date">
						<p class="date">18.05.16</p>
						<p class="desc_focus">입찰신청이 성공적으로 등록되었습니다</p>
						<div class="detail_status">
							<button class="btn_match_go">보낸 견적서 보기</button> 
							
						</div>
					</div>
				</div>
			</div>
			<!-- 파트너 매칭 시 -->
			<div class="box_status focus">
				<p class="before_n_after"><img src="/assets/images/sub/20  matching status_matching.png"></p>
				<div class="status_contents">
					<p class="title">02. 파트너스 매칭 진행 중</p>
					<div class="status_date">
						<p class="date">18.05.16</p>
						<p class="desc">파트너스 매칭 전입니다</p>
						<p class="desc_focus">매칭에 참여한 파트너스는 총 10곳 입니다<br>파트너스에 대한 정보는 프로필을 통해 확인 가능합니다</p>
						<div class="matching_partner_info">
							<a href="matching_join_partner.php" class="link_match">자세히 보기</a>
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
			

			<div class="box_status focus">
				<p class="before_n_after"><img src="/assets/images/sub/20  matching status_matching complete.png"></p>
				<div class="status_contents">
					<p class="title">03. 파트너 선정 완료</p>
					<div class="status_date">
						<p class="date">18.05.16</p>
						<p class="desc">파트너 매칭 완료 전입니다</p>
						<p class="desc_focus">
							축하합니다! 파트너로 선정되었습니다
						</p>
						
					</div>
				</div>
			</div> 
		</div>
	</div>
</div>
<?php require_once('../assets/elements/footer.php');?>