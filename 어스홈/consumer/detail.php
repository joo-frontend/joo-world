<?php require_once('../assets/elements/header.php');?>
<div class="detail_wra" id="page_wra">
	<div class="detail_section">
		<div class="detail_area">
			<div class="detail_swiperBox">
				<div class="detail_rolling">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="http://www.placehold.it/1018x600">
							<img src="/assets/images/main/big_play_icon.png" class="detail_play_icon">
						</div>
						<div class="swiper-slide">
							<img src="http://www.placehold.it/1018x600">
						</div>
						<div class="swiper-slide">
							<img src="http://www.placehold.it/1018x600">
						</div>
					</div>
				</div>
				<div class="swiper-button-prev detail_swiper_prev"></div>
				<div class="swiper-button-next detail_swiper_next"></div>
			</div>
			<div class="detail_btnBox">
				<form>
					<div class="detail_left_btnBox">
						<a href=""><span>글 수정</span><img src="/assets/images/sub/write.png"></a>
						<button type="button" class="btn_detail_delet"><img src="/assets/images/sub/delete.png"></button>
					</div>
					<div class="detail_right_btnBox">
						<button type="button" class="btn_detail_share"><img src="/assets/images/sub/detail_share.png"><span class="detail_share_count">100</span></button>
						<button type="button" class="btn_detail_scrap"><img src="/assets/images/sub/detail_scrap_off.png"><span class="detail_scrap_count">100</span></button>
						<button type="button" class="btn_detail_like"><img src="/assets/images/sub/detail_like_off.png"><span class="detail_like_count">100</span></button>
					</div>
				</form>	
			</div>
			<div class="detail_textBox">
				<h1 class="detail_title">White & Gray</h1>
				<p>white<p>
				<img src="http://www.placehold.it/911x600">
			</div>
		</div>
		<div class="detail_info_area">
			<div class="detail_infoBox">
				<div class="detail_profileBox">
					<span class="detail_profile_img"><img src="http://www.placehold.it/84x84"></span>
					<span class="detail_profile_name">Consumer1</span>
				</div>
				<div class="consumer_profile_infoBox">
					<form>
						<button type="submit" name="btn_follow" class="btn_follow">Follow</button>
						<a href="" class="btn_note"><img src="/assets/images/main/share_icon_on.png"></a>
					</form>	
				</div>
				<p class="detail_profile_text">인테리어에 관심이 많아 인테리어 디자인부터 소품까지 직접 셀렉하고 디자인까지 도맡아 하고 있는
인테리어에 관심이 많아 인테리어 디자인부터 인테리어에 관심이 많아 인테리어 디자인부터 소품에 관심이 많아 인테리어 디자인부터 소품에 관심이 많아 인테리어 디자인부터 소품에 관심이 많아 인테리어 디자인부터 소품</p>
			</div>
			<div class="detail_commentBox">
				<div class="detail_comment_inputBox">
					<form>
						<input type="text" name="detail_comment" class="detail_comment">
						<button type="submit" name="btn_detail_comment" class="btn_detail_comment">등록</button>
					</form>
				</div>
				<div class="detail_commentListBox">
					<ul>
						<li class="detail_comment_item">
							<div class="comment_profileinfoBox">
								<div class="comment_profileBox">
									<a href="">
										<img src="http://www.placehold.it/84x84">
										<span class="comment_profile_name">consumer2</span>
									</a>
								</div>
								<div class="comment_profile_textBox">
									<p class="comment_profile_text">화이트침구 다인패브릭 80수호텔침구 무지화이트제품인가용? 솜은 따로 구입하셧는지 사각사각거리는지 궁금합니다. 침구류 구매하려는데 좋아보여서요!!</p>
									<div class="comment_profile_info">
										<span class="comment_date">4일전</span>
										<div class="comment_like_countBox"><img src="/assets/images/sub/commnet_like_off.png"><span class="comment_like_count">26</span></div>
										<button type="button" class="btn_commentsReply_open" id="btn_commentsReply_open">답글 달기</button>
									</div>
								</div>
							</div>
							<div class="comments_reply_inputbox">
								<form>
									<input type="text" name="comments_reply" class="comments_reply">
									<button type="submit" name="btn_comments_reply" class="btn_comments_reply">등록</button>
								</form>
							</div>
						</li>
						<li class="detail_comment_item detail_commentReply_item">
							<div class="comment_profileBox">
								<a href="">
									<div class="commentReply_icon">
										<img src="/assets/images/sub/matching_status_next.png">
									</div>
									<img src="http://www.placehold.it/84x84">
									<span class="comment_profile_name">consumer2</span>
								</a>
							</div>
							<div class="comment_profile_textBox">
								<p class="comment_profile_text">화이트침구 다인패브릭 80수호텔침구 무지화이트제품인가용? 솜은 따로 구입하셧는지 사각사각거리는지 궁금합니다. 침구류 구매하려는데 좋아보여서요!!</p>
								<div class="comment_profile_info">
									<span class="comment_date">4일전</span>
									<div class="comment_like_countBox"><img src="/assets/images/sub/commnet_like_off.png"><span class="comment_like_count">26</span></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('../assets/elements/footer.php');?>