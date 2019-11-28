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
	<div class="section_menu_mypage">
		<div class="mypage_step">
			<div class="area_step_signup area_step_2">
				<ul>
					<li class="focus">01  ㅣ기본정보 </li>
					<li>02  ㅣ 지역 및 주소설정</li>
				</ul>
			</div>
		</div>
		<div class="mypage_info">
			<form>
			<div class="area_personal_info attr_step_1 active">
				<div class="col_2">
					<div class="box_personal_info clearfix">
						<span class="form_title">이름</span>
						<div class="info_txt">
							<input type="text" class="textbox" name="personal_name" value="김영광">
						</div>
					</div>
					<div class="box_personal_info clearfix">
						<span class="form_title">닉네임</span>
						<div class="info_txt">
							<input type="text" class="textbox" name="personal_nickname" value="CONSUMER 1">
						</div>
					</div>
					<div class="box_personal_info clearfix">
						<span class="form_title">새 비밀번호</span>
						<div class="info_txt">
							<input type="password" class="textbox" name="personal_pw" placeholder="비밀번호를 입력하세요">
						</div>
					</div>
					<div class="box_personal_info clearfix">
						<span class="form_title">새 비밀번호 확인</span>
						<div class="info_txt">
							<input type="password" class="textbox" name="personal_pw_again" placeholder="비밀번호를 재입력하세요">
							
						</div>
					</div>
				</div>
				<div class="col_2">
					<div class="box_personal_info clearfix">
						<span class="form_title">연락처</span>
						<div class="info_txt">
							<p><input type="tel" class="textbox" value="010-9000-0007" name="personal_tel"></p>			
							<div class="radiobox">			
								<input type="radio" class="choice_each" id="tel_agree" name="agree_tel" checked="">
								<label for="tel_agree">수신함
								</label>				
								<input type="radio" class="choice_each" id="tel_disagree" name="agree_tel">
								<label for="tel_disagree">수신하지않음
								</label>
							</div>
							<p class="input_desc">SNS 수신동의 여부는 이벤트/홍보성 메시지 발송에 대한 동의여부입니다</p>
						</div>
					</div>
					<div class="box_personal_info clearfix">
						<span class="form_title">이메일</span>
						<div class="info_txt">
							<p><input type="email" class="textbox" value="1000@naver.com" name="personal_email"></p>			
							<div class="radiobox">			
								<input type="radio" class="choice_each" id="email_agree" name="agree_email" checked="">
								<label for="email_agree">수신함
								</label>				
								<input type="radio" class="choice_each" id="email_disagree" name="agree_email">
								<label for="email_disagree">수신하지않음
								</label>
							</div>
							<p class="input_desc">이메일 수신동의 여부는 이벤트/홍보성 메시지 발송  에 대한 동의여부입니다</p>

						</div>

					</div>
				</div>
				<div class="next_step">
					<button type="button" id="btnAddr_step_2">계속 진행</button>
				</div>
			</div>
			<div class="area_personal_info attr_step_2">
				<div class="box_user_address box_list_address addr_stepWra_0 focus">
					<div class="list_address">
						<p>주소목록</p>
						<bottom type="bottom" class="register_new_address">새 주소 등록</bottom>
					</div>
					<div id="addr_wra" class="addr_wra">
						<dl class="clearfix addr_items">
							<dt>
								<p class="addr_text">서울 성동구 뚝섬로 1길 30-2 한라에코벨리 403호</p>
								<input type="hidden" class="addr_zcode" name="address_num[]" value="62102">
								<input type="hidden" class="addr_0" name="address1[]" value="서울 성동구 뚝섬로 1길 30-2">
								<input type="hidden" class="addr_1" name="address2[]" value="한화에코밸리 403호">
							</dt>
							<dd>
								<div class="address_control">
									<input type="radio" class="choice_each" id="default_address0" name="address_default[]"><label for="default_address0">기본 주소로 설정</label>
									<button type="button" class="btn_address address_edit">수정</button>
									<button type="button" class="btn_address address_remove">삭제</button>
								</div>
							</dd>
						</dl>
						<dl class="clearfix addr_items">
							<dt>
								<p class="addr_text">서울 성동구 뚝섬로 1길 30-2</p>
								<input type="hidden" class="addr_zcode" name="address_num[]" value="12345">
								<input type="hidden" class="addr_0" name="address1[]" value="서울 성동구 뚝섬로 1길 30-2">
								<input type="hidden" class="addr_1" name="address2[]" value="">
							</dt>
							<dd>
								<div class="address_control">
									<input type="radio" class="choice_each" id="default_address1" name="address_default[]"><label for="default_address1">기본 주소로 설정</label>
									<button type="button" class="btn_address address_edit">수정</button>
									<button type="button" class="btn_address address_remove">삭제</button>
								</div>
							</dd>
						</dl>
					</div>
					<div class="btn_group">
						<button type="submit" name="btn_addrInfo" id="btn_addrInfo">저장</button>
					</div>
				</div>
				<div class="box_user_address box_add_address addr_stepWra_1">
					<div class="list_address">
						<p>새 주소 등록</p>
					</div>
					<div class="address_form">
						<span><input type="number" id="new_zonecode" placeholder="우편번호" class="textbox textbox text_ad_search"><button onclick="new_addr()">주소검색</button></span>
						<span><input type="text" id="new_addr_0" placeholder="주소" class="textbox tx_address"></span>
						<span><input type="text" id="new_addr_1" placeholder="상세주소" class="textbox tx_address"></span>
					</div>
					<div class="btn_group">
						<button type="button" id="btn_save_newAddr">등록</button>
					</div>
				</div>
				<div class="box_user_address box_edit_address addr_stepWra_2">
					<div class="list_address">
						<p>수정</p>
						<bottom type="bottom" class="register_new_address">새 주소 등록</bottom>
					</div>
					<div class="address_form">
						<span><input type="number" id="edit_zonecode" placeholder="우편번호" class="textbox textbox text_ad_search"><button onclick="edit_addr()">주소검색</button></span>
						<span><input type="text" id="edit_addr_0" placeholder="주소" class="textbox tx_address"></span>
						<span><input type="text" id="edit_addr_1" placeholder="상세주소" class="textbox tx_address"></span>
					</div>
					<div class="btn_group">
						<button type="button" id="btn_save_editAddr">수정</button>
					</div>
				</div>
			</div>
			</form>
		</div>
	</div>
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
    function new_addr() {
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

                document.getElementById('new_zonecode').value = data.zonecode;
                document.getElementById('new_addr_0').value = fullAddr;
                document.getElementById('new_addr_1').focus();
            }
        }).open();
    }
	
	function edit_addr() {
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

                document.getElementById('edit_zonecode').value = data.zonecode;
                document.getElementById('edit_addr_0').value = fullAddr;
                document.getElementById('edit_addr_1').focus();
            }
        }).open();
    }
	
	$("#btnAddr_step_2").click(function(){
		$(".attr_step_1").hide(200);
		$(".attr_step_2").show(200);
		$(".section_menu_mypage .area_step_signup.area_step_2 ul li").eq(1).addClass("focus").siblings().removeClass("focus");
	});
	$(".register_new_address").click(function(){
		$(".addr_stepWra_0").hide(200);
		$(".addr_stepWra_1").show(200);
		$(".addr_stepWra_2").hide(200);
	});
	$(document).on("click",".address_edit",function(){
		var edit_addr = $(this).parents("dl.clearfix");
		var edit_zcode = edit_addr.find(".addr_zcode").val();
		var edit_addr_0 = edit_addr.find(".addr_0").val();
		var edit_addr_1 = edit_addr.find(".addr_1").val();
		edit_addr.addClass("edit_item");
		$("#edit_zonecode").val(edit_zcode);
		$("#edit_addr_0").val(edit_addr_0);
		$("#edit_addr_1").val(edit_addr_1);
		
		$(".addr_stepWra_0").hide(200);
		$(".addr_stepWra_1").hide(200);
		$(".addr_stepWra_2").show(200);
	});
	$(document).on("click","#btn_save_editAddr",function(){
		var edit_zcode = $("#edit_zonecode").val();
		var edit_addr_0 = $("#edit_addr_0").val();
		var edit_addr_1 = $("#edit_addr_1").val();
		$(".edit_item").find(".addr_zcode").val(edit_zcode);
		$(".edit_item").find(".addr_0").val(edit_addr_0);
		$(".edit_item").find(".addr_1").val(edit_addr_1);
		$(".edit_item").find(".addr_text").html(edit_zcode + "&nbsp;" + edit_addr_0 + "&nbsp;" + edit_addr_1);
		
		$(".addr_stepWra_0").show(200);
		$(".addr_stepWra_1").hide(200);
		$(".addr_stepWra_2").hide(200);

		$(".edit_item").removeClass("edit_item");
	});
	$("#btn_save_newAddr").click(function(){
		var new_zcode = $("#new_zonecode").val();
		var new_addr_0 = $("#new_addr_0").val();
		var new_addr_1 = $("#new_addr_1").val();
		if(new_zcode == "" || new_addr_0 == "" || new_addr_1 == ""){
			alert("주소를 전부 입력해주세요.");
		}else{
		var child_num = $(".addr_items:last-child").index() + 1;
		
		$("#addr_wra").append("<dl class='clearfix addr_items'><dt><p class='addr_text'>" + new_zcode + "&nbsp;" + new_addr_0 + "&nbsp;" + new_addr_1 + "</p><input type='hidden' id='addr_zcode' name='address_num[]' value='" + new_zcode + "'><input type='hidden' id='addr_0' name='address1[]' value='" + new_addr_0 + "'><input type='hidden' id='addr_1' name='address2[]' value='" + new_addr_1 + "'></dt><dd><div class='address_control'><input type='radio' class='choice_each' id='default_address"+ child_num +"' name='address_default[]'><label for='default_address"+ child_num +"'>기본 주소로 설정</label><button type='button' class='btn_address address_edit'>수정</button><button type='button' class='btn_address address_remove'>삭제</button></div></dd></dl>");
		
		$(".addr_stepWra_0").show(200);
		$(".addr_stepWra_1").hide(200);
		$(".addr_stepWra_2").hide(200);
		
		$("#new_zonecode").val("");
		$("#new_addr_0").val("");
		$("#new_addr_1").val("");
		}	
	});
	$(document).on("click",".address_remove",function(){
		if (confirm("주소를 삭제하시겠습니까?") == true){
			$(this).parents("dl.clearfix").remove();
			alert("삭제되었습니다.");
 		}else{
			alert("취소되었습니다.");
     		return false;
 		}
	});
</script>

	<?php require_once('../assets/elements/footer.php');?>