<?php require_once('../assets/elements/header.php');?>


<div class="section_estimate apply_estimate_page">
	<div class="area_step_signup">
		<ul>
			<li class="focus">01 | 견적신청하기</li>
			<li>02 | 시공항목 및 가상견적</li>
			<li>03 | 사용자 정보</li>
		</ul>
	</div>
	<form>
	<div class="apply_estimateStep apply_estimateStep_1">
		<div class="area_apply_estimate">
			<p class="desc_apply_estimate">인테리어 매칭을 위한 정보를 입력해주세요</p>
			<div class="box_apply_estimate">
				<div class="choice_interior_type">
					<dl class="focus clearfix">
						<dt><span>주거</span></dt>
						<dd>
							<input type="radio" id="apartment" class="type_matching" name="choice_living" checked><label for="apartment">아파트</label>
							<input type="radio" id="house" class="type_matching" name="choice_living"><label for="house">주택</label>
							<input type="radio" id="villa" class="type_matching" name="choice_living"><label for="villa">빌라</label>
							<input type="radio" id="oneroom" class="type_matching" name="choice_living"><label for="oneroom">원룸</label>
						</dd>
					</dl>
					<dl class="clearfix">
						<dt><span>상업</span></dt>
						<dd>
							<input type="radio" id="store" class="type_matching" name="choice_commercial"><label for="store">상가 · 매장</label>
							<input type="radio" id="cafe" class="type_matching" name="choice_commercial"><label for="cafe">카페 · 식당</label>
							<input type="radio" id="academy" class="type_matching" name="choice_commercial"><label for="academy">학원 · 교육</label>
							<input type="radio" id="hospital" class="type_matching" name="choice_commercial"><label for="hospital">숙박 · 병원</label>
							<input type="radio" id="type_temp" class="type_matching" name="choice_commercial"><label for="type_temp">간판</label>
							<input type="radio" id="etc_commercial" class="type_matching" name="choice_commercial"><label for="etc_commercial">기타</label>

						</dd>
					</dl>
					<dl class="clearfix">
						<dt><span>부분</span></dt>
						<dd>
							<input type="radio" id="wallpaper" class="type_matching" name="choice_part"><label for="wallpaper">도배장판</label>
							<input type="radio" id="bath" class="type_matching" name="choice_part"><label for="bath">욕실</label>
							<input type="radio" id="kitchen" class="type_matching" name="choice_part"><label for="kitchen">주방</label>
							<input type="radio" id="storage" class="type_matching" name="choice_part"><label for="storage">수납가구</label>
							<input type="radio" id="etc_part" class="type_matching" name="choice_part"><label for="etc_part">기타</label>

						</dd>
					</dl>
				</div>
				<div class="choice_schedule">
					<div class="apply_schedule">
						<div class="schedule_form">
							<dl class="clearfix">
								<dt>시공일</dt>
								<dd><input type="text" class="textbox_schedule" name="calendar_schedule" id="cal_schedule" placeholder="날짜를 선택하세요"><label for="cal_schedule" class="cal_schedule_icon"><img src="/assets/images/sub/12_calender.png"></label></dd>
							</dl>
							<dl>
								<dt>평수</dt>
								<dd><input type="number" class="textbox_schedule" name="pyung_apply" placeholder="숫자만 입력하세요"></dd>
							</dl>

						</div>
						<div class="schedule_form">
							<dl>
								<dt class="form_title_sm">구조</dt>
								<dd>
									<p><input type="number" class="textbox_schedule" name="type_room_number" placeholder="방 개수를 선택하세요"></p>
									<p><input type="number" class="textbox_schedule" name="type_bath_number" placeholder="욕실 개수를 선택하세요"></p>

								</dd>
							</dl>
						</div>
					</div>

					<div class="apply_photo">
						<dl>
							<dt>사진첨부</dt>
							<dd>
								<p class="desc_photo">현재 인테리어와 희망하는 인테리어 사진을 업로드하세요 (최소 1장 이상)</p>
								<div class="upload_current">
									<p class="upload_desc">현재</p>
									<!-- <p class="photo_mb"><span>0MB</span> / 250MB</p> -->
									<div class="upload_photo">
										<div action="/file-upload" class="dropzone" id="currentPhoto">
											<div class="fallback">
												<input name="file" type="file" multiple />
											</div>
										</div>
									</div>
								</div>
								<div class="upload_wish">
									<p class="upload_desc">희망</p>
									<!-- <p class="photo_mb"><span>0MB</span> / 250MB</p> -->
									<div class="upload_photo">
										<div action="/file-upload" class="dropzone" id="wishPhoto">
											<div class="fallback">
												<input name="file" type="file" multiple />
											</div>
										</div>
									</div>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
		<div class="next_step">
			<button type="button" class="btn_applyEstimateStep_2">계속 진행</button>
		</div>
	</div>
	<div class="apply_estimateStep apply_estimateStep_2">
		<div class="area_apply_estimate clearfix">
			<p class="desc_apply_estimate">시공항목을 선택하고 가상견적으로 최소 비용을 확인해보세요 (항목 3개 이상 선택)</p>
			<div class="box_imagine_building">
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>확장공사
					</dt>
					<dd class="totalCost_select_0">
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="거실 확장" id="widen_livingroom" name="widen_work"><label for="widen_livingroom">거실 확장</label>
							<input type="hidden" value="100" class="min_cost_val">
							<input type="hidden" value="1000" class="max_cost_val">
						</span>
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="작은방 확장" id="widen_smallroom" name="widen_work"><label class="last" for="widen_smallroom">작은방 확장</label>
							<input type="hidden" value="200" class="min_cost_val">
							<input type="hidden" value="2000" class="max_cost_val">
						</span>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>바닥
					</dt>
					<dd class="totalCost_select_1">
						<select class="selectbox_estimate_option" name="select_floor">
							<option value="not_select">바닥재 선택</option>
							<option data-min-cost="200" data-max-cost="2000" value="">바닥재 1</option>
							<option data-min-cost="300" data-max-cost="3000" value="">바닥재 2</option>
						</select>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>도장
					</dt>
					<dd class="totalCost_select_2">
						<select class="selectbox_estimate_option" name="select_stamp">
							<option value="not_select">도장재 선택</option>
							<option data-min-cost="200" data-max-cost="2000" value="">도장재 1</option>
							<option data-min-cost="300" data-max-cost="3000" value="">도장재 2</option>
						</select>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>천장
					</dt>
					<dd class="totalCost_select_3">
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="천장 전체 공사" id="ceiling" name="ceiling_work"><label for="ceiling">천장 전체 공사</label>
							<input type="hidden" value="100" class="min_cost_val">
							<input type="hidden" value="1000" class="max_cost_val">
						</span>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>천장몰딩 + 걸레받이
					</dt>
					<dd class="totalCost_select_4">
						<select class="selectbox_estimate_option" name="select_molding">
							<option value="not_select">천장몰딩 + 걸레받이 선택</option>
							<option data-min-cost="200" data-max-cost="2000" value="">천장몰딩 + 걸레받이 1</option>
							<option data-min-cost="300" data-max-cost="3000" value="">천장몰딩 + 걸레받이 2</option>
						</select>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>방문
					</dt>
					<dd class="totalCost_select_5">
						<select class="selectbox_estimate_option" name="select_doorCount">
							<option value="not_select">방문선택 (방 밑 욕실 개수와 동일)</option>
							<option data-min-cost="200" data-max-cost="2000" value="">방문 1개</option>
							<option data-min-cost="300" data-max-cost="3000" value="">방문 2개</option>
						</select>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>중문
					</dt>
					<dd class="totalCost_select_6">
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="현관 중문" id="entrance_door" name="door_work"><label for="entrance_door">현관 중문</label>
							<input type="hidden" value="100" class="min_cost_val">
							<input type="hidden" value="1000" class="max_cost_val">
						</span>
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="거실폴딩도어" id="livingroom_door" name="door_work"><label class="last" for="livingroom_door">거실폴딩도어</label>
							<input type="hidden" value="200" class="min_cost_val">
							<input type="hidden" value="2000" class="max_cost_val">
						</span>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>베란다 중문
					</dt>
					<dd class="totalCost_select_7">
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="터닝도어" id="turn_door" name="veranda_work"><label for="turn_door">터닝도어</label>
							<input type="hidden" value="100" class="min_cost_val">
							<input type="hidden" value="1000" class="max_cost_val">
						</span>
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="목문" id="grain_door" name="veranda_work"><label class="last" for="grain_door">목문</label>
							<input type="hidden" value="200" class="min_cost_val">
							<input type="hidden" value="2000" class="max_cost_val">
						</span>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>욕실(타일포함)
					</dt>
					<dd class="totalCost_select_8">
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="거실욕실" id="livingroom_bath" name="bath_work"><label for="livingroom_bath">거실욕실</label>
							<input type="hidden" value="100" class="min_cost_val">
							<input type="hidden" value="1000" class="max_cost_val">
						</span>
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="안방욕실" id="mainroom_batn" name="bath_work"><label for="mainroom_batn">안방욕실</label>
							<input type="hidden" value="200" class="min_cost_val">
							<input type="hidden" value="2000" class="max_cost_val">
						</span>
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="전체 타일 교체 후 시공" id="all_bath" name="bath_work"><label class="last" for="all_bath">전체 타일 교체 후 시공</label>
							<input type="hidden" value="300" class="min_cost_val">
							<input type="hidden" value="3000" class="max_cost_val">
						</span>

					</dd>
				</dl>
				<dl class="clearfix">
					<dt>
						<a href="#"><img src="/assets/images/sub/15_premium info_black.png"></a>타일
					</dt>
					<dd class="totalCost_select_9">
						<span>
							<input type="radio" class="choice_estimate_option" value="" fw-label="타일 덧방 시공 (주방 + 현관 + 베란다)" id="tile_all" name="tile_work"><label class="last" for="tile_all">타일 덧방 시공 (주방 + 현관 + 베란다)</label>
							<input type="hidden" value="100" class="min_cost_val">
							<input type="hidden" value="1000" class="max_cost_val">
						</span>
					</dd>
				</dl>
			</div>
			<div class="box_imagine_estimate">
				<div class="imagine_estimate">
					<div class="title_imagine">
						<p class="title">선택한 시공항목</p>
						<p class="total"><img src="/assets/images/sub/11_money.png"><span>총 가상견적</span></p>
					</div>
					<ul class="choice_option_estimate">
						<li class="selecter_text_0">-</li>
						<li class="selecter_text_1">-</li>
						<li class="selecter_text_2">-</li>
						<li class="selecter_text_3">-</li>
						<li class="selecter_text_4">-</li>
						<li class="selecter_text_5">-</li>
						<li class="selecter_text_6">-</li>
						<li class="selecter_text_7">-</li>
						<li class="selecter_text_8">-</li>
						<li class="selecter_text_9">-</li>
					</ul>
					<div class="info_imagine_estimate">
						<p class="price_imagine"><span class="total_min_cost">0</span> <span>~</span> <span class="total_max_cost">0</span>만원 대</p>
						<p class="desc_imagine">
							가상 견적은 시공비등 실제와 차이가 있으며,<br>
							방문상담을 받으시면 정확한 견적을 확인할 수 있습니다<br>
							가설 및 폐기물 처리비용, 철거비용은 제외된 금액입니다
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="next_step">
			<button type="button" class="btn_applyEstimateStep_3">계속 진행</button>
		</div>
	</div>
	<div class="apply_estimateStep apply_estimateStep_3">
		<div class="area_apply_estimate">
			<p class="desc_user_info">기본 정보를 입력해주세요 <button type="button" class="import_btn">기본정보 불러오기</button></p>
			<div class="area_user_info_form">
				<dl class="clearfix">
					<dt>이름</dt>
					<dd>
						<input type="text" name="apply_name" class="textbox_apply" placeholder="이름을 입력하세요">
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>이메일</dt>
					<dd>
						<input type="email" class="textbox_apply" name="apply_email" placeholder="이메일을 입력하세요
						">
						<select class="selectbox_apply email">
							<option value="">naver.com</option>
							<option value="">daum.net</option>
							<option value="">gmail.com</option>
						</select>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>연락처</dt>
					<dd>
						<select class="selectbox_apply tel">
							<option value="">010</option>
							<option value="">011</option>
							<option value="">018</option>
						</select>
						<span class="tel_bar">ㅡ</span>
						<input type="tel" name="apply_tel2" class="textbox_apply textbox_apply_md">
						<span class="tel_bar">ㅡ</span>
						<input type="tel" name="apply_tel3" class="textbox_apply textbox_apply_md">
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>주소</dt>
					<dd>
						<input type="text" id="order_zcode" name="apply_address1" class="textbox_apply textbox_apply_md textbox_addr"><button class="btn_address_search" onclick="order_addr()">주소검색</button>
						<p class="apply_form_box"><input type="text" id="order_addr_0" name="apply_address2" class="textbox_apply"></p>
						<p class="apply_form_box"><input type="text" id="order_addr_1" name="apply_address3" class="textbox_apply"></p>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>거주 상태</dt>
					<dd>
						<select class="selectbox_apply">
							<option value="">거주 상태를 선택하세요</option>
							<option value="">아파트</option>
							<option value="">상가</option>
							<option value="">빌라</option>
						</select>
					</dd>
				</dl>
			</div>
			<div class="area_user_info_form more">
				<dl class="clearfix">
					<dt>추가사항</dt>
					<dd>
						<textarea placeholder="추가사항을 입력하세요"></textarea>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt>프리미엄 설정</dt>
					<dd>
						<!--<a href="#" class="premium_btn"><img src="/assets/images/sub/14_premium.png">프리미엄으로 등록</a> -->
						<input type="checkbox" id="chk_premium" class="checkbox_premium" name="premium_check"><label for="chk_premium"><img src="/assets/images/sub/14_premium.png">프리미엄으로 등록</label>
						<a href="#" class="ask_premium"><img src="/assets/images/sub/15_premium info_black.png">프리미엄 견적요청건이란</a>
					</dd>
				</dl>
			</div>
		</div>
		<div class="btn_group_apply">
			<button type="submit" name="btn_matching_saveTemp" class="btn_save_temp">임시 저장</button>
			<button type="submit" name="btn_matching" class="btn_matching">매칭 진행</button>
		</div>
	</div>
	</form>
</div>
<div class="pop pop_premium">
	<div class="popup">
		<div class="area_premium">
			<a href="#" class="close_pop">&#215;</a>
			<ul>
				<li class="">
					<div class="box_ask_premium">
						<p>프리미엄 견적신청은<br><span>일반 견적신청과 어떻게 다른가요?</span></p>
					</div>
					<div class="box_answer_premium">
						<p>프리미엄 견적신청을 하시면<br>
							견적매칭 페이지 상단의 ‘프리미엄 견적요청건’에 등록되어,<br><span>일반 견적요청건 보다 파트너스에게 빠르게 노출되어 좀 더 빠르고 정확한 매칭에 효과적입니다</span>
						</p>
					</div>
				</li>
				<li class="">
					<div class="box_ask_premium">
						<p>프리미엄 견적신청은<br><span>어떻게 등록하나요?</span></p>
					</div>
					<div class="box_answer_premium">
						<p>견적신청서 작성 시 ‘프리미엄 견적으로 등록’을 통해 등록하실 수 있으며,<br>
							견적신청서 작성 시 등록하지 못하셨다면, 마이페이지의 ‘진행중인 견적’에서 견적서 수정을 통해
							<br><span>프리미엄 견적으로 전환이 가능합니다</span>
						</p>
					</div>
				</li>
				<li class="">
					<div class="box_ask_premium">
						<p>프리미엄 견적신청을 할 경우 <br><span>어떠한 혜택이 있나요?</span></p>
					</div>
					<div class="box_answer_premium">
						<p>프리미엄 견적신청 시<br>
							<span>일반 견적신청 시 얻게 되는 포인트의 두배를 지급해드립니다 </span>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>    
<script>
	function order_addr() {
        new daum.Postcode({
            oncomplete: function(data) {
                var fullAddr = '';
                var extraAddr = '';
                if (data.userSelectedType === 'R') {
                    fullAddr = data.roadAddress;
                } else {
                    fullAddr = data.jibunAddress;
                }

                if(data.userSelectedType === 'R'){
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                document.getElementById('order_zcode').value = data.zonecode;
                document.getElementById('order_addr_0').value = fullAddr;
                document.getElementById('order_addr_1').focus();
            }
        }).open();
    };
	
	var myDropzone = new Dropzone("#currentPhoto", { 
		url: "/file/post",
		maxFilesize: 250
	});
	var myDropzone = new Dropzone("#wishPhoto", { 
		url: "/file/post",
		maxFilesize: 250
	});
	$("#cal_schedule").datepicker({
		minDate: 0,
		dateFormat: 'yy-mm-dd',
	    prevText: '이전 달',
	    nextText: '다음 달',
	    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	    dayNames: ['일','월','화','수','목','금','토'],
	    dayNamesShort: ['일','월','화','수','목','금','토'],
	    dayNamesMin: ['일','월','화','수','목','금','토'],
	    showMonthAfterYear: true,
	    yearSuffix: '년',
	});
	
	var total_minCost = 0;
	var total_maxCost = 0;
	var select_0_minCost = 0;
	var select_0_maxCost = 0;
	var select_1_minCost = 0;
	var select_1_maxCost = 0;
	var select_2_minCost = 0;
	var select_2_maxCost = 0;
	var select_3_minCost = 0;
	var select_3_maxCost = 0;
	var select_4_minCost = 0;
	var select_4_maxCost = 0;
	var select_5_minCost = 0;
	var select_5_maxCost = 0;
	var select_6_minCost = 0;
	var select_6_maxCost = 0;
	var select_7_minCost = 0;
	var select_7_maxCost = 0;
	var select_8_minCost = 0;
	var select_8_maxCost = 0;
	var select_9_minCost = 0;
	var select_9_maxCost = 0;
	
	$(".totalCost_select_0 input").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_0_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_0_maxCost);
		var selecter_text_0 = $(".totalCost_select_0 input:checked").attr("fw-label");
		$(".selecter_text_0").text(selecter_text_0);
		
		var min_cost = $(this).siblings(".min_cost_val").val();
		var max_cost = $(this).siblings(".max_cost_val").val();
		total_minCost = parseInt(total_minCost) + parseInt(min_cost);
		total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
		select_0_minCost = parseInt(min_cost);
		select_0_maxCost = parseInt(max_cost);

		$(".total_min_cost").text(total_minCost);
		$(".total_max_cost").text(total_maxCost);
	});
	$(".totalCost_select_1 select").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_1_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_1_maxCost);
		
		var selecter_val_1 = $(".totalCost_select_1 select option:selected").val();
		if(selecter_val_1 == "not_select"){
			$(".selecter_text_1").text("-");	
			select_1_minCost = 0;
			select_1_maxCost = 0;

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		}else{	
			var selecter_text_1 = $(".totalCost_select_1 select option:selected").text();
			$(".selecter_text_1").text(selecter_text_1);
			var min_cost = $(".totalCost_select_1 select option:selected").attr("data-min-cost");
			var max_cost = $(".totalCost_select_1 select option:selected").attr("data-max-cost");
			total_minCost = parseInt(total_minCost) + parseInt(min_cost);
			total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
			select_1_minCost = parseInt(min_cost);
			select_1_maxCost = parseInt(max_cost);

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		};
	});
	$(".totalCost_select_2 select").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_2_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_2_maxCost);
		var selecter_val_2 = $(".totalCost_select_2 select option:selected").val();
		if(selecter_val_2 == "not_select"){
			$(".selecter_text_2").text("-");
			select_2_minCost = 0;
			select_2_maxCost = 0;

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		}else{	
			var selecter_text_2 = $(".totalCost_select_2 select option:selected").text();
			$(".selecter_text_2").text(selecter_text_2);
			var min_cost = $(".totalCost_select_2 select option:selected").attr("data-min-cost");
			var max_cost = $(".totalCost_select_2 select option:selected").attr("data-max-cost");
			total_minCost = parseInt(total_minCost) + parseInt(min_cost);
			total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
			select_2_minCost = parseInt(min_cost);
			select_2_maxCost = parseInt(max_cost);

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		};
	});
	$(".totalCost_select_3 input").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_3_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_3_maxCost);
		var selecter_text_3 = $(".totalCost_select_3 input:checked").attr("fw-label");
		$(".selecter_text_3").text(selecter_text_3);
		
		var min_cost = $(this).siblings(".min_cost_val").val();
		var max_cost = $(this).siblings(".max_cost_val").val();
		total_minCost = parseInt(total_minCost) + parseInt(min_cost);
		total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
		select_3_minCost = parseInt(min_cost);
		select_3_maxCost = parseInt(max_cost);

		$(".total_min_cost").text(total_minCost);
		$(".total_max_cost").text(total_maxCost);
	});
	$(".totalCost_select_4 select").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_4_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_4_maxCost);
		var selecter_val_4 = $(".totalCost_select_4 select option:selected").val();
		if(selecter_val_4 == "not_select"){
			$(".selecter_text_4").text("-");
			select_4_minCost = 0;
			select_4_maxCost = 0;

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		}else{	
			var selecter_text_4 = $(".totalCost_select_4 select option:selected").text();
			$(".selecter_text_4").text(selecter_text_4);
			var min_cost = $(".totalCost_select_4 select option:selected").attr("data-min-cost");
			var max_cost = $(".totalCost_select_4 select option:selected").attr("data-max-cost");
			total_minCost = parseInt(total_minCost) + parseInt(min_cost);
			total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
			select_4_minCost = parseInt(min_cost);
			select_4_maxCost = parseInt(max_cost);

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		};
	});
	$(".totalCost_select_5 select").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_5_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_5_maxCost);
		var selecter_val_5 = $(".totalCost_select_5 select option:selected").val();
		if(selecter_val_5 == "not_select"){
			$(".selecter_text_5").text("-");
			select_5_minCost = 0;
			select_5_maxCost = 0;

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		}else{	
			var selecter_text_5 = $(".totalCost_select_5 select option:selected").text();
			$(".selecter_text_5").text(selecter_text_5);
			var min_cost = $(".totalCost_select_5 select option:selected").attr("data-min-cost");
			var max_cost = $(".totalCost_select_5 select option:selected").attr("data-max-cost");
			total_minCost = parseInt(total_minCost) + parseInt(min_cost);
			total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
			select_5_minCost = parseInt(min_cost);
			select_5_maxCost = parseInt(max_cost);

			$(".total_min_cost").text(total_minCost);
			$(".total_max_cost").text(total_maxCost);
		};
	});
	$(".totalCost_select_6 input").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_6_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_6_maxCost);
		var selecter_text_6 = $(".totalCost_select_6 input:checked").attr("fw-label");
		$(".selecter_text_6").text(selecter_text_6);
		
		var min_cost = $(this).siblings(".min_cost_val").val();
		var max_cost = $(this).siblings(".max_cost_val").val();
		total_minCost = parseInt(total_minCost) + parseInt(min_cost);
		total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
		select_6_minCost = parseInt(min_cost);
		select_6_maxCost = parseInt(max_cost);

		$(".total_min_cost").text(total_minCost);
		$(".total_max_cost").text(total_maxCost);
	});
	$(".totalCost_select_7 input").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_7_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_7_maxCost);
		var selecter_text_7 = $(".totalCost_select_7 input:checked").attr("fw-label");
		$(".selecter_text_7").text(selecter_text_7);
		
		var min_cost = $(this).siblings(".min_cost_val").val();
		var max_cost = $(this).siblings(".max_cost_val").val();
		total_minCost = parseInt(total_minCost) + parseInt(min_cost);
		total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
		select_7_minCost = parseInt(min_cost);
		select_7_maxCost = parseInt(max_cost);

		$(".total_min_cost").text(total_minCost);
		$(".total_max_cost").text(total_maxCost);
	});
	$(".totalCost_select_8 input").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_8_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_8_maxCost);
		var selecter_text_8 = $(".totalCost_select_8 input:checked").attr("fw-label");
		$(".selecter_text_8").text(selecter_text_8);
		
		var min_cost = $(this).siblings(".min_cost_val").val();
		var max_cost = $(this).siblings(".max_cost_val").val();
		total_minCost = parseInt(total_minCost) + parseInt(min_cost);
		total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
		select_8_minCost = parseInt(min_cost);
		select_8_maxCost = parseInt(max_cost);

		$(".total_min_cost").text(total_minCost);
		$(".total_max_cost").text(total_maxCost);
	});
	$(".totalCost_select_9 input").change(function(){
		total_minCost = parseInt(total_minCost) - parseInt(select_9_minCost);
		total_maxCost = parseInt(total_maxCost) - parseInt(select_9_maxCost);
		var selecter_text_9 = $(".totalCost_select_9 input:checked").attr("fw-label");
		$(".selecter_text_9").text(selecter_text_9);
		
		var min_cost = $(this).siblings(".min_cost_val").val();
		var max_cost = $(this).siblings(".max_cost_val").val();
		total_minCost = parseInt(total_minCost) + parseInt(min_cost);
		total_maxCost = parseInt(total_maxCost) + parseInt(max_cost);
		select_9_minCost = parseInt(min_cost);
		select_9_maxCost = parseInt(max_cost);

		$(".total_min_cost").text(total_minCost);
		$(".total_max_cost").text(total_maxCost);
	});
</script>
<?php require_once('../assets/elements/footer.php');?>