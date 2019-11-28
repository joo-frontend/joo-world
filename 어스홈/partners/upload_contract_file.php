<?php require_once('../assets/elements/header.php');?>


<div class="wra_contract">
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
		<div class="contract_progress contract_upload_partner">
			<p class="title_contract">계약서 및 최종 견적서 작성 완료</p>
			<form>

				<div class="area_upload_document estimate_partner_step estimate_partner_step2 ara_contract_upload_partner">

					<div class="box_upload_document">
						<p class="title_upload">계약서 업로드</p>
						<div class="upload_contract">
							<span class="filetype">
								<input type="text" class="file-text" multiple disabled /><span class="file-btn">+ 파일추가</span>
								<span class="file-select"><input type="file" name="file_contract" class="input-file" size="3"></span>
							</span>
						</div>
					</div>
					<div class="box_upload_document">
						<p class="title_upload">추가자료 업로드</p>
						<div class="upload_contract">
							<span class="filetype">
								<input type="text" class="file-text" multiple disabled /><span class="file-btn">+ 파일추가</span>
								<span class="file-select"><input type="file" name="file_contract" class="input-file" size="3"></span>
							</span>
							<textarea placeholder="추가사항을 입력하세요"></textarea>
						</div>
					</div>
				</div>
				<div class="btn_group">
					<button type="button" class="btn_confirm" id="btn_move_estimate_stop2">등록</button>
				</div>
				
			</form>	
		</div>
	</div>
</div>
<?php require_once('../assets/elements/footer.php');?>