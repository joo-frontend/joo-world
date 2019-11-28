<?php require_once('../assets/elements/header.php');?>



<div class="wra_user">
	<div class="section_gnb_custom">
		<ul>
			<li class="bg_menu"><a href="#" class="matching_menu">매칭 중 견적 <img src="/assets/images/sub/matching.png"> </a></li>
			<li class="bg_menu"><a href="#">매칭 완료 견적 <img src="/assets/images/sub/matching complete.png"></a></li>
			<li class=""><a href="#">내 정보</a></li>
			<li class=""><a href="#">프로필 관리</a></li>
			<li class="focus"><a href="#">맞춤 인테리어 설정</a></li>
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
	<div class="section_menu_mypage section_signup mypage_m_bottomPadding">
		<form>
			<div class="area_custom_interior">
				<p class="custom_desc">
					<span class="desc_img"><img src="/assets/images/sub/48 my type.png"></span>선호하는 인테리어 스타일을 선택해주세요! 회원님의 취향을 파악하여 추천해드립니다</p>
					<a class="reset_custom" href="#">설정 초기화 <img src="/assets/images/sub/48 reset.png">	</a>
					<div class="box_custom_interior">
						<div class="custom_interior">
							<p class="title">스타일 <span>중복선택 가능</span></p>
							<div class="interior_style">
								<span><input type="checkbox" id="style1" class="style_check all_style" name="style_interior1"><label for="style1">all</label></span>
								
								<span class="each_style_form">
									<input type="checkbox" id="style2" class="style_check each_style" name="style_interior2"><label for="style2">모던</label>
								</span>
								<span class="each_style_form">
									<input type="checkbox" id="style3" class="style_check each_style" name="style_interior3"><label for="style3">심플</label>
								</span>
								<span class="each_style_form">
									<input type="checkbox" id="style4" class="style_check each_style" name="style_interior3"><label for="style4">빈티지</label>
								</span>
								<span class="each_style_form">
									<input type="checkbox" id="style5" class="style_check each_style" name="style_interior4"><label for="style5">엔티크</label>
								</span>
								<span class="each_style_form">
									<input type="checkbox" id="style6" class="style_check each_style" name="style_interior5"><label for="style6">럭셔리</label>
								</span>
								<span class="each_style_form">
									<input type="checkbox" id="style7" class="style_check each_style" name="style_interior6"><label for="style7">러블리</label>
								</span>
								<span class="each_style_form">								
									<input type="checkbox" id="style8" class="style_check each_style" name="style_interior7"><label for="style8">북유럽</label>
								</span>
							</div>
						</div>
						<div class="custom_interior">
							<p class="title">공간유형</p>
							<div class="interior_type">
								<div class="type_each">
									<span><img class="off" src="/assets/images/sub/48 my type_house off.png"><img class="on" src="/assets/images/sub/48 my type_house.png">주거</span>

									<select class="interior_choice">
										<option value="">세부 공간 유형을 선택하세요</option>
										<option value="">type1</option>
									</select>
								</div>


								<div class="type_each">
									<span><img class="off" src="/assets/images/sub/48 my type_market off.png"><img class="on" src="/assets/images/sub/48 my type_market.png">상업</span>
									<select class="interior_choice">
										<option value="">세부 공간 유형을 선택하세요</option>
										<option value="">type1</option>
									</select>
								</div>

								<div class="type_each">
									<span><img class="off" src="/assets/images/sub/48 my type_part off.png"><img class="on" src="/assets/images/sub/48 my type_part.png">부분</span>
									<select class="interior_choice">
										<option value="">세부 공간 유형을 선택하세요</option>
										<option value="">type1</option><option value="">type2</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="box_custom_interior">
						<div class="custom_interior">
							<p class="title">평수 <span>1평 ~ 200평 이상</span></p>
							<div class="area_pyung">
								<input type="radio" name="pyung" id="pyung1" class="pyung_choice"><label for="pyung1">1~10</label>
								<input type="radio" name="pyung" id="pyung2" class="pyung_choice"><label for="pyung2">11~20</label>
								<input type="radio" name="pyung" id="pyung3" class="pyung_choice"><label for="pyung3">21~30</label>
								<input type="radio" name="pyung" id="pyung4" class="pyung_choice" checked><label for="pyung4">31~40</label>
								<input type="radio" name="pyung" id="pyung5" class="pyung_choice"><label for="pyung5">41~50</label>
								<input type="radio" name="pyung" id="pyung6" class="pyung_choice"><label for="pyung6">51~60</label>
								<input type="radio" name="pyung" id="pyung7" class="pyung_choice"><label for="pyung7">61~70</label>
								<input type="radio" name="pyung" id="pyung8" class="pyung_choice"><label for="pyung8">71~80</label>
								<input type="radio" name="pyung" id="pyung9" class="pyung_choice"><label for="pyung9">81~90</label>
								<input type="radio" name="pyung" id="pyung10" class="pyung_choice"><label for="pyung10">100<span>평 이상</span></label>

							</div>
						</div>
						<div class="custom_interior">
							<p class="title">예산 <span>1원 ~ 5천만원 이상</span></p>
							<!-- input -->
							<div class="box_range_budget">	
								<input type="number" class="budget_box" name="min_budget">
								<span>~</span>
								<input type="number" class="budget_box" min="0" max="5000" name="max_budget">
							</div>	
							<!-- slider widget -->
							<!-- <div class="box_range_budget">
								<p class="show_range">
									<span class="min">0</span>
									<span class="max">5000~</span>
								</p>
								<div id="slider-range"></div>
							</div> -->
						</div>
					</div>
				</div>
			<div class="btn_group">
				<button class="btn_save" name="btn_save_intStyle" type="submit">저장</button>
			</div>
		</form>
	</div>
</div>
<?php require_once('../assets/elements/footer.php');?>