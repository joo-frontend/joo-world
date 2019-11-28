<?php require_once('../assets/elements/header.php');?>

<div class="wra_m">
	<div class="section_signup join_page">
		<p class="title_signup"><span></span>회원가입</p>
		<form>
			<div class="join_step join_step_1">
				<div class="area_step_contents step1">
					<div class="box_step1_form">
						<div class="each_form">
							<span>이메일</span>
							<div class="user_text">
								<p><input type="email" id="join_email" class="textbox" placeholder="이메일을 입력하세요" name="emailbox_partner"></p>
								<div class="radiobox">			
									<input type="radio" class="choice_each" id="email_agree" name="agree_email_partner" checked>
									<label for="email_agree">수신함
									</label>				
									<input type="radio" class="choice_each" id="email_disagree" name="agree_email_partner">
									<label for="email_disagree">수신하지않음
									</label>
								</div>
								<p class="input_desc">이메일 수신동의 여부는 이벤트/홍보성 메시지 발송  에 대한 동의여부입니다</p>
							</div>
						</div>	
						<div class="each_form">
							<span>비밀번호</span>
							<div class="user_text">
								<p><input type="password" id="join_pw" class="textbox" placeholder="비밀번호를 입력하세요" name="pwbox1_partner"></p>			
								<p class="input_desc">영문, 숫자를 조합하여 8~16자 이내로 입력하세요</p>
							</div>
						</div>	
						<div class="each_form">
							<span>비밀번호 확인</span>
							<div class="user_text">
								<p><input type="password" id="join_pw_r" class="textbox" placeholder="비밀번호를 재입력하세요" name="pwbox2_partner"></p>		
							</div>
						</div>	
						<div class="each_form">
							<span>이름</span>
							<div class="user_text">
								<p><input type="text" id="join_name" class="textbox" placeholder="이름을 입력하세요" name="namebox_partner"></p>		
							</div>
						</div>	
						<div class="each_form">
							<span>연락처</span>
							<div class="user_text">
								<p><input type="number" id="join_phone" class="textbox" placeholder="-없이 숫자만 입력하세요" name="telbox_partner"></p>			
								<div class="radiobox">
									<input type="radio" class="choice_each" id="tel_agree" name="agree_msg_partner" checked>
									<label for="tel_agree">수신함
									</label>				
									<input type="radio" class="choice_each" id="tel_disagree" name="agree_msg_partner">
									<label for="tel_disagree">수신하지않음
									</label>
								</div>
								<p class="input_desc">SNS 수신동의 여부는 이벤트/홍보성 메시지 발송에 대한 동의여부입니다</p>
							</div>
						</div>	
						<div class="each_form">
							<span>주소</span>
							<div class="user_text">
								<p><input type="text" id="join_zcode" class="textbox text_ad_search" name="join_zcode_partner"><button type="button" onclick="join_addr()">주소검색</button></p>
								<p><input type="text" id="join_addr_0" class="textbox text_address" name="join_addr_0_partner"></p>
								<p><input type="text" id="join_addr_1" class="textbox text_address" name="join_addr_1_partner"></p>
								<input type="checkbox" class="choice_each" name="default_address" checked>
								<label for="email_agree">기본 주소로 설정</label>
							</div>
						</div>	
						<div class="each_form">
							<span>지역 범위</span>
							<div class="user_text">
								<select class="selectbox_bank">
									<option>전국</option>
									<option>서울</option>
								</select>
							</div>
						</div>	
					</div>
				</div>
				<div class="area_step_contents step2">
					<div class="box_term_agree">
						<div class="all_agree">
							<input type="checkbox" id="agree_all" name="agree_all_partner" class="agree_check"><label class="agree_label" for="agree_all">아래약관에 모두 동의합니다</label>
						</div>
						<div class="term_each">
							<input type="checkbox" id="agree_required1" name="agree_required1_partner" class="agree_check agree_required"><label class="agree_label" for="agree_required1">(필수) 개인정보 처리방침에 동의합니다</label>
							<a href="#">약관보기</a>
						</div>
						<div class="term_each">
							<input type="checkbox" id="agree_required2" name="agree_required2_partner" class="agree_check agree_required"><label class="agree_label" for="agree_required2">(필수) 회원가입 약관에 동의합니다</label>
							<a href="#">약관보기</a>
						</div>
						<div class="term_each">
							<input type="checkbox" id="agree_alarm" name="agree_alarm_partner" class="agree_check"><label class="agree_label" for="agree_alarm">(선택) 인테리어 정보 및 이벤트 알림 수신에 동의합니다</label>
							<a href="#">약관보기</a>
						</div>
					</div>
				</div>
				<div class="next_step">
					<button type="button" class="btn_joinStep_2">저장 후 계속 진행</button>
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