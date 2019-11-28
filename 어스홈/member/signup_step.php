<?php require_once('../assets/elements/header.php');?>

<div class="wra_m">
	<div class="section_signup join_page">
		<p class="title_signup"><span></span>회원가입</p>
		<div class="area_step_signup">
			<ul>
				<li class="focus">01 | 기본정보 및 약관동의</li>
				<li>02 | 맞춤 인테리어 설정</li>
			</ul>
		</div>
		<form>
			<div class="join_step join_step_1">
				<div class="area_step_contents step1">
					<div class="box_step1_form">
						<div class="each_form">
							<span>이메일</span>
							<div class="user_text">
								<p><input type="email" id="join_email" class="textbox" placeholder="이메일을 입력하세요" name="emailbox"></p>
								<div class="radiobox">			
									<input type="radio" class="choice_each" id="email_agree" name="agree_email" checked>
									<label for="email_agree">수신함
									</label>				
									<input type="radio" class="choice_each" id="email_disagree" name="agree_email">
									<label for="email_disagree">수신하지않음
									</label>
								</div>
								<p class="input_desc">이메일 수신동의 여부는 이벤트/홍보성 메시지 발송  에 대한 동의여부입니다</p>
							</div>
						</div>	
						<div class="each_form">
							<span>비밀번호</span>
							<div class="user_text">
								<p><input type="password" id="join_pw" class="textbox" placeholder="비밀번호를 입력하세요" name="pwbox1"></p>			
								<p class="input_desc">영문, 숫자를 조합하여 8~16자 이내로 입력하세요</p>
							</div>
						</div>	
						<div class="each_form">
							<span>비밀번호 확인</span>
							<div class="user_text">
								<p><input type="password" id="join_pw_r" class="textbox" placeholder="비밀번호를 재입력하세요" name="pwbox2"></p>		
							</div>
						</div>	
						<div class="each_form">
							<span>이름</span>
							<div class="user_text">
								<p><input type="text" id="join_name" class="textbox" placeholder="이름을 입력하세요" name="namebox"></p>		
							</div>
						</div>	
						<div class="each_form">
							<span>연락처</span>
							<div class="user_text">
								<p><input type="number" id="join_phone" class="textbox" placeholder="-없이 숫자만 입력하세요" name="telbox"></p>			
								<div class="radiobox">
									<input type="radio" class="choice_each" id="tel_agree" name="agree_msg" checked>
									<label for="tel_agree">수신함
									</label>				
									<input type="radio" class="choice_each" id="tel_disagree" name="agree_msg">
									<label for="tel_disagree">수신하지않음
									</label>
								</div>
								<p class="input_desc">SNS 수신동의 여부는 이벤트/홍보성 메시지 발송에 대한 동의여부입니다</p>
							</div>
						</div>	
						<div class="each_form">
							<span>주소</span>
							<div class="user_text">
								<p><input type="text" id="join_zcode" class="textbox text_ad_search" name="join_zcode"><button type="button" onclick="join_addr()">주소검색</button></p>
								<p><input type="text" id="join_addr_0" class="textbox text_address" name="join_addr_0"></p>
								<p><input type="text" id="join_addr_1" class="textbox text_address" name="join_addr_1"></p>
								<input type="checkbox" class="choice_each" name="default_address" checked>
								<label for="email_agree">기본 주소로 설정</label>
							</div>
						</div>	
					</div>
				</div>
				<div class="area_step_contents step2">
					<div class="box_term_agree">
						<div class="all_agree">
							<input type="checkbox" id="agree_all" name="agree_all" class="agree_check"><label class="agree_label" for="agree_all">아래약관에 모두 동의합니다</label>
						</div>
						<div class="term_each">
							<input type="checkbox" id="agree_required1" name="agree_required1" class="agree_check agree_required"><label class="agree_label" for="agree_required1">(필수) 개인정보 처리방침에 동의합니다</label>
							<a href="#">약관보기</a>
						</div>
						<div class="term_each">
							<input type="checkbox" id="agree_required2" name="agree_required2" class="agree_check agree_required"><label class="agree_label" for="agree_required2">(필수) 회원가입 약관에 동의합니다</label>
							<a href="#">약관보기</a>
						</div>
						<div class="term_each">
							<input type="checkbox" id="agree_alarm" name="agree_alarm" class="agree_check"><label class="agree_label" for="agree_alarm">(선택) 인테리어 정보 및 이벤트 알림 수신에 동의합니다</label>
							<a href="#">약관보기</a>
						</div>
					</div>
				</div>
				<div class="next_step">
					<button type="button" class="btn_joinStep_2">계속 진행</button>
				</div>
			</div>
			<div class="join_step join_step_2">
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
				<div class="step2_btn_group">
					<button class="btn_skip" type="submit" name="btn_join_skip">나중에 하기</button>
					<button class="btn_save" type="submit" name="btn_join">저장</button>
				</div>
			</div>
		</form>
	</div>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
    function join_addr() {
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

                document.getElementById('join_zcode').value = data.zonecode;
                document.getElementById('join_addr_0').value = fullAddr;
                document.getElementById('join_addr_1').focus();
            }
        }).open();
    };
</script>
<?php require_once('../assets/elements/footer.php');?>