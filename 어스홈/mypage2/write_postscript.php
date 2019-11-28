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
	<div class="section_menu_mypage write_postscript_page">
		
		<div class="area_postscript">
			<p class="title_interior_photo">후기작성</p>
			<div class="box_postscript">
				<div class="postscript_each">
					<p class="title_post">이미지 등록</p>
					<p class="desc_post">공사 전·후 인테리어 사진을 업로드하세요 (각각 최소 1장 이상)</p>
					<div class="status_contruct">
						<p class="status_txt">공사 전</p>
						<div class="upload_photo">
							<form action="/file-upload" class="dropzone dz-clickable" id="currentPhoto">

								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>

					<div class="status_contruct">
						<p class="status_txt after">공사 후</p>
						<div class="upload_photo">
							<form action="/file-upload" class="dropzone dz-clickable" id="currentPhoto">

								<div class="dz-default dz-message"><span>Drop files here to upload</span></div>
							</form>
						</div>
					</div>
				</div>
				<div class="postscript_each">
					<p class="title_post">후기 작성</p>
					<p class="desc_post">후기를 작성해주세요</p>
					<div class="write_post">
						<textarea placeholder="내용을 입력하세요"></textarea>
					</div>
				</div>

				<div class="postscript_each">
					<p class="title_post">평점 등록</p>
					<div class="receive_grade">
						<ul class="clearfix">
							<li>
								<a href="#"><img src="/assets/images/sub/40 review star.png"></a>
							</li>
							<li>
							<a href="#"><img src="/assets/images/sub/40 review star.png"></a>
							</li>
							<li>
								<a href="#"><img src="/assets/images/sub/40 review star.png"></a>
							</li>
							<li>
							<a href="#"><img src="/assets/images/sub/40 review star.png"></a>
							</li>
							<li>
								<a href="#"><img src="/assets/images/sub/40 review star_off.png"></a>
							</li>

						</ul>
						<span>4</span>
					</div>
				</div>

			</div>
		</div>
		<div class="btn_group">
			<button tyep="submit">등록</button>
		</div>
	</div>

</div>



<?php require_once('../assets/elements/footer.php');?>