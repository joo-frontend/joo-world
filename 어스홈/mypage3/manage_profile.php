<?php require_once('../assets/elements/header.php');?>
<div class="wra_user">
	<div class="section_gnb_custom">
		<ul>
			<li class="bg_menu "><a href="#" class="matching_menu">매칭 중 견적 <img src="/assets/images/sub/matching.png"> </a></li>
			<li class="bg_menu"><a href="#">매칭 완료 견적 <img src="/assets/images/sub/matching complete.png"></a></li>
			<li class=""><a href="#">내 정보</a></li>
			<li class=""><a href="#">프로필 관리</a></li>
			<li class=""><a href="#">맞춤 인테리어 설정</a></li>
			<li class=""><a href="#">메시지 관리</a></li>
			<li class=""><a href="#">스크랩</a></li>
			<li class="focus"><a href="#">팔로워</a></li>
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
	<div class="section_menu_mypage mypage_m_bottomPadding mypage_profile_wra">
		<form>
			<div class="area_manage_profile">
				<div class="box_manage_basis_profile">
					<p class="title_profile">기본 프로필</p>
					<div class="my_profile clearfix">
						<div class="my_img_profile">
							<div class="dropzone" id="profileImg">
								<div class="fallback">
									<input name="file" type="file" multiple />
								</div>
							</div>

						</div>
						<div class="my_nickname_profile">
							<input type="text" name="edit_nick" class="nick_box" value="Consumer 1">
						</div>
					</div>
					<div class="my_intro_txt">
						<textarea>인테리어에 관심이 많아 인테리어 디자인부터 소품까지 직접 셀렉하는게 취미에요 </textarea>

					</div>
				</div>
				<div class="box_manage_best_post">
					<div class="best_post_title">
						<p class="title_profile">베스트 게시물 설정</p>
						<p class="best_post_desc">나의 피드에 등록되는 게시물 중 BEST 게시물을 설정하면 우측상단에 크게 노출됩니다</p>
						<a class="preview_profile">미리보기</a>
					</div>
					<div class="my_post">
						<ul class="clearfix">
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
							<li>
								<input type="radio" class="chkbox_custom" name="best_post">
								<a class="best_interior" href="#">
									<div class="img_interior_matching">
										<p class="post_img"><img src="http://www.placehold.it/275X275"></p>
										<div class="post_item_desc">
											<p class="item_optionBox">
												<span class="item_option_0">
													<img src="/assets/images/main/item_icon_0.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_1">
													<img src="/assets/images/main/item_iconOff_1.png">
													<span class="item_count">200</span>
												</span>
												<span class="item_option_2">
													<img src="/assets/images/main/item_iconOn_2.png">
													<span class="item_count">200</span>
												</span>
											</p>
										</div>
									</div>	
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="btn_group">
				<button class="">저장</button>
			</div>
		</form>
	</div>
</div>
<!-- 프로필 미리보기 팝업 -->
<div class="pop pop_profile">
	<div class="popup">
		<a href="#" class="close_pop">&#215;</a>
		<div class="popup_contents">
			<div class="list_wra">
				<div class="contents_itemBox">
					<ul>
						<li class="contents_item consumer_list_titleItem">
							<div class="contents_textBox">
								<div class="contents_profile_imgBox">
									<img src="http://www.placehold.it/130x130">
								</div>
								<div class="consumer_list_infoBox">
									<div class="consumer_list_btnBox">
										<div class="consumer_profile_infoBox">
											<h1 class="consumer_list_name">Consumer1</h1>
											<form>
												<button type="submit" name="btn_follow" class="btn_follow">Follow</button>
												<a href="" class="btn_note"><img src="/assets/images/main/share_icon_on.png"></a>
											</form>	
										</div>
										<div class="consumer_profile_infoBox">
											<ul>
												<li class="consumer_list_infoItem">
													<img src="/assets/images/main/item_iconOn_1.png">
													<span class="consumer_list_infoICount">256</span>
												</li>
												<li class="consumer_list_infoItem">
													<span class="consumer_list_infoItemTitle">게시물</span>
													<span class="consumer_list_infoICount">256</span>
												</li>
												<li class="consumer_list_infoItem boxForm">
													<span class="consumer_list_infoItemTitle">팔로워</span>
													<span class="consumer_list_infoICount">256</span>
												</li>
												<li class="consumer_list_infoItem boxForm">
													<span class="consumer_list_infoItemTitle">팔로잉</span>
													<span class="consumer_list_infoICount">256</span>
												</li>
											</ul>
										</div>
									</div>

									<p class="consumer_list_introText_pop">
										인테리어에 관심이 많아 인테리어 디자인부터 소품까지 직접 셀렉하고 디자인까지 도맡아 하고 있는 인테리어에 관심이 많아 인테리어 디자인부터 인테리어에 관심이 많아 인테리어에 관심이 많아 인테리어 디자인부터 소품까지
										인테리어에 관심이 많아 인테리어에 관심이 많아 인테리어 디자인부터 소품까지
									</p>
									<a href="#" class="more_introText">더보기</a>
									<p class="consumer_list_introText">인테리어에 관심이 많아 인테리어 디자인부터 소품까지 직접 셀렉하고 디자인까지 도맡아 하고 있는 인테리어에 관심이 많아 인테리어 디자인부터 인테리어에 관심이 많아 인테리어에 관심이 많아 인테리어 디자인부터 소품까지</p>
								</div>
							</div>
						<!-- <div class="link_writing">
							<a href=""><img src="/assets/images/sub/write.png">글쓰기</a>
						</div> -->
						<img src="http://www.placehold.it/969x323" class="opacity0">
					</li>
					<li class="contents_item first_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/646x646" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>	
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
					<li class="contents_item">
						<a href="" class="contents_item_link">
							<img src="http://www.placehold.it/323x323" class="sizeImg">
							<div class="item_infoBox">
								<div class="play_iconBox">
									<img src="/assets/images/main/mid_play_icon.png">
								</div>
								<div class="item_textInfo_box">
									<h2 class="item_title">필요하면 다 만드는 뚝딱뚝딱 몽가이버 하우스</h2>
									<div class="item_info">
										<p class="category_text">셀프 인테리어</p>
										<p class="item_optionBox">
											<span class="item_option_0">
												<img src="/assets/images/main/item_icon_0.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_1">
												<img src="/assets/images/main/item_iconOff_1.png">
												<span class="item_count">200</span>
											</span>
											<span class="item_option_2">
												<img src="/assets/images/main/item_iconOff_2.png">
												<span class="item_count">200</span>
											</span>
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href="" class="btn_user_link">
							<img src="http://www.placehold.it/51x51">
							<span>Consumer1</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</div>

<script type="text/javascript">
	var myDropzone = new Dropzone("#profileImg", {
		url: "/file/post",
		maxFiles: 2,
	});
</script>
<?php require_once('../assets/elements/footer.php');?>