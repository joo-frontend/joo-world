(function($){
	$(".btn_m_menu").click(function(){
    	$(this).toggleClass("active");
        $(".body_cover").toggleClass("active");
        $(".side_menu").toggleClass("active");   
        $("body").toggleClass("active");  
    });
	
	 $(".body_cover").click(function(){
    	$(".btn_m_menu").removeClass("active");
        $(".body_cover").removeClass("active");  
        $(".side_menu").removeClass("active");   
        $("body").removeClass("active"); 
    });
$(document).ready(function(){
	/*
	$(function(){
		$(".consumer_contentsBox").hide();
		$(".consumer_contentsBox:first").show();
		$("ul.main_consumerItem_tap li").click(function(){
			$("ul.main_consumerItem_tap li").removeClass("active");
			$(this).addClass("active");
			$(".consumer_contentsBox").hide();
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn();
		});
    });
	*/
	$(function(){
		$(".partner_filter_tap").hide();
		$(".partner_filter_tap:first").show();
		$("ul.partner_filter_tapBox li").click(function(){
			$("ul.partner_filter_tapBox li").removeClass("active");
			$(this).addClass("active");
			$(".partner_filter_tap").hide();
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn();
		});
    });
	
	$(function(){
		$(".main_cs_tapContents").hide();
		$(".main_cs_tapContents:first").show();
		$("ul.main_cs_tap li").click(function(){
			$("ul.main_cs_tap li").removeClass("active");
			$(this).addClass("active");
			$(".main_cs_tapContents").hide();
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn();
		});
    });
	
	var winWidth = $(window).width();
	if(winWidth >= 961){
	$(".consumer_listSection .consumer_list_area").hide();
	$(".consumer_listSection .consumer_list_area:first").show();
	$(".consumer_listSection .consumer_user_item").click(function(){
		var btn_has = $(this).hasClass("swiper-slide-active");
		if(!btn_has){
		$(this).prevAll(".consumer_user_item").addClass("end_add");
		$(".consumer_listSection .consumer_user_item").removeClass("swiper-slide-active");
		$(this).addClass("swiper-slide-active");
		$(".consumer_listSection .consumer_user_item").removeClass("swiper-slide-next");
		$(".consumer_listSection .consumer_user_item").removeClass("swiper-slide-prev");	
		$(".consumer_listSection .swiper-wrapper").append($(".end_add"));
		$(this).next(".consumer_user_item").addClass("swiper-slide-next");
		/*	
		$(this).prev(".consumer_user_item").addClass("swiper-slide-prev");
		*/	
		$(".consumer_listSection .consumer_list_area").hide();
		$(".consumer_listSection .consumer_user_item").removeClass("end_add");	
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
		};	
	});
	
	$(".partner_listSection .consumer_list_area").hide();
	$(".partner_listSection .consumer_list_area:first").show();
	$(".partner_listSection .consumer_user_item").click(function(){
		var btn_has = $(this).hasClass("swiper-slide-active");
		if(!btn_has){
		$(this).prevAll(".consumer_user_item").addClass("end_add");
		$(".partner_listSection .consumer_user_item").removeClass("swiper-slide-active");
		$(this).addClass("swiper-slide-active");
		$(".partner_listSection .consumer_user_item").removeClass("swiper-slide-next");
		$(".partner_listSection .consumer_user_item").removeClass("swiper-slide-prev");		
		$(".partner_listSection .swiper-wrapper").append($(".end_add"));
		$(this).next(".consumer_user_item").addClass("swiper-slide-next");	
		$(".partner_listSection .consumer_list_area").hide();
		$(".partner_listSection .consumer_user_item").removeClass("end_add");	
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
		};
	});
	};

	var swiper = new Swiper('.consumer_tap_rolling', {
		slidesPerView: 7,
		slidesPerGroup: 1,
		spaceBetween: 30,
		simulateTouch:false,
		allowTouchMove:false,
		slideToClickedSlide:true,
		breakpoints: {
			960: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				loop:true,
				spaceBetween: 0,
				centeredSlides:true,
				simulateTouch:true,
				allowTouchMove:true,
				slideToClickedSlide:false,
				onSlideChangeStart: function (swiper) {
                    
                },
				onSlideChangeEnd: function (swiper) {
					$(".consumer_listSection .consumer_list_area").hide();
					var activeTab = $(".consumer_listSection .consumer_user_item.swiper-slide-active").attr("rel");
					$("#" + activeTab).fadeIn();
                }
			},
			650: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				loop:true,
				spaceBetween: 0,
				centeredSlides:true,
				simulateTouch:true,
				allowTouchMove:true,
				slideToClickedSlide:false,
				onSlideChangeStart: function (swiper) {
                    
                },
				onSlideChangeEnd: function (swiper) {
					$(".consumer_listSection .consumer_list_area").hide();
					var activeTab = $(".consumer_listSection .consumer_user_item.swiper-slide-active").attr("rel");
					$("#" + activeTab).fadeIn();
                }
			},
		}
    });
	
	var swiper = new Swiper('.partner_tap_rolling', {
		slidesPerView: 7,
		slidesPerGroup: 1,
		spaceBetween: 30,
		simulateTouch:false,
		allowTouchMove:false,
		slideToClickedSlide:true,
		breakpoints: {
			960: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				loop:true,
				spaceBetween: 0,
				centeredSlides:true,
				simulateTouch:true,
				allowTouchMove:true,
				slideToClickedSlide:false,
				onSlideChangeStart: function (swiper) {
                    
                },
				onSlideChangeEnd: function (swiper) {
					$(".partner_listSection .consumer_list_area").hide();
					var activeTab = $(".partner_listSection .consumer_user_item.swiper-slide-active").attr("rel");
					$("#" + activeTab).fadeIn();
                }
			},
			650: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				loop:true,
				spaceBetween: 0,
				centeredSlides:true,
				simulateTouch:true,
				allowTouchMove:true,
				slideToClickedSlide:false,
				onSlideChangeStart: function (swiper) {
                    
                },
				onSlideChangeEnd: function (swiper) {
					$(".partner_listSection .consumer_list_area").hide();
					var activeTab = $(".partner_listSection .consumer_user_item.swiper-slide-active").attr("rel");
					$("#" + activeTab).fadeIn();
                }
			},
		}
    });

	var swiper = new Swiper('.detail_rolling', {
		direction: 'horizontal',
        loop: true,
        nested:true,
		centeredSlides:false,
        autoplay: 1500,  
        nextButton: '.detail_swiper_next',
        prevButton: '.detail_swiper_prev',
    });
	
	$("#btn_commentsReply_open").click(function(){
		$(this).parents(".comment_profileinfoBox").siblings(".comments_reply_inputbox").css("display","block");
	});
	
	/* pagination */
	$(".area_pagination li a").click(function() {
		$(".area_pagination li").removeClass("focus");
		$(this).parents("li").addClass("focus");
	});

	/* 서브메뉴 */
	$(".section_gnb_custom ul li a").click(function() {
		$(".section_gnb_custom ul li").removeClass("focus");
		$(this).parents("li").addClass("focus");
	});

	/* 약관동의 */
	$(".all_agree .agree_check").click(function() {
		if($(this).prop("checked") == true){
			$(".term_each .agree_check").prop("checked",true);
		} else {
			$(".term_each .agree_check").prop("checked",false);
		}
	});
	
	$(".term_each .agree_check").click(function() {
		var checkBoxLength = $(".term_each .agree_check").length;
		var checkedLength = $(".term_each .agree_check:checked").length;

		if(checkBoxLength == checkedLength){
			$(".all_agree .agree_check").prop("checked", true);
		}else {
			$(".all_agree .agree_check").prop("checked", false);
		}
	});

	/* 회원가입 type2 reset */
	$(".reset_custom").click(function() {
		$(".interior_style .each_style").prop("checked",false);
		$(".pyung_choice").prop("checked",false);
		$( "#slider-range" ).slider("option","values",[1100,3200]);
		$(".interior_choice").parents(".type_each").removeClass("active");
		$(".interior_choice").parents(".type_each").find("option").prop("selected",false);
	});
	/* 회원가입 type2 공간유형 */
	$(".interior_choice").focus(function() {
		$(".interior_choice").parents(".type_each").removeClass("active");
		$(this).parents(".type_each").addClass("active");
	});

	/* 회원가입 type2 스타일 */
	
	$(".all_style").click(function() {
		if($(".all_style").prop("checked") == true) {
			$(".interior_style .each_style").prop("checked",true);
		}
		if($(".all_style").prop("checked") == false) {
			$(".interior_style .each_style").prop("checked",false);
		}
	});

	$(".interior_style .each_style").click(function() {
		if($(this).prop("checked") == false) {
			$(".all_style").prop("checked",false);
		}
		var styleLength = $(".interior_style .each_style").length;
		var styleCheckisLength = $(".interior_style .each_style:checked").length;
		if(styleLength == styleCheckisLength){
			$(".all_style").prop("checked",true);
		}else {
			$(".all_style").prop("checked",false);
		}
		
	});

	$(".interior_style .each_style_form .each_style").click(function() {
		if($(this).siblings(".each_style").prop("checked") == true) {
			if((this).parents(".each_style_form").siblings(".each_style_form").find("each_style").prop("checked") == true){
				$(".all_style").prop("checked",true);
			}
			
		}
	});

	/* 회원가입 type2 예산 */
	/*$( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 1100, 3200 ],
			slide: function( event, ui ) {
				$( ".box_range_budget .ui-slider-horizontal" ).find(".ui-slider-handle").eq(0).html("<span class='min_count'>" + $( "#slider-range" ).slider( "values", 0 ) + "</span>");
				$( ".box_range_budget .ui-slider-horizontal" ).find(".ui-slider-handle").eq(1).html("<span class='max_count'>" + $( "#slider-range" ).slider( "values", 1 ) + "</span>");
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	} );*/

	/* 견적신청하기 */
	$(".type_matching").click(function() {
		$(".choice_interior_type dl").removeClass("focus");
		$(".choice_interior_type dl").find(".type_matching").prop("checked",false);
		$(this).parents("dl").addClass("focus");
		$(this).prop("checked",true);
	});

	$(".cal_schedule_icon").click(function(){
		$("#cal_schedule").click();
	});


	/* 프미리엄 견적 */
	$(".ask_premium").click(function(){
		$(".pop.pop_premium").show();
		$("body").addClass("active");
		$(".pop_premium .close_pop").click(function(){
			$(".pop.pop_premium").hide();
			$("body").removeClass("active");
		});
	});

	/* Swiper */
	var swiper = new Swiper('#slideCurrent', {
		slidesPerView: 3,
		/* spaceBetween: 10,*/
		nextButton: '.swiper-button-next',

	});
	var swiper = new Swiper('#slideWish', {
		slidesPerView: 3,
		nextButton: '.swiper-button-next',
		/*spaceBetween: 10,*/

	});
	
	
	$(".sort_list li a").click(function(){
		$(".sort_list li").removeClass("focus");
		$(this).parents("li").addClass("focus");
	});
	
	function confirm()
	{
		msg = "선택한 항목을 삭제하시겠습니까?";
		if (confirm(msg)!=0) {
			$(".area_list_matching_interior .chkbox_custom:checked").parents("li").remove();
			$(".area_list_matching_interior .chkbox_custom").hide();
		} else {
			return;
		}
	}
	/* 매칭 견적 삭제 */
	$(".interior_delete a").click(function() {
		$(".area_list_matching_interior .chkbox_custom").show();
		$(this).click(function(){
			$(".area_list_matching_interior .chkbox_custom:checked").parents("li").remove();
			$(".area_list_matching_interior .chkbox_custom").hide();
		});
	});

	/* 파트너 재매칭 */
	$(".btn_rematching").click(function() {
		$(".pop.pop_rematching_partner").show();
		$(".close_pop, .btn_close_pop").click(function() {
			$(".pop.pop_rematching_partner").hide();
		});
	});
	
	var swiper = new Swiper('.section_gnbCustom_rolling', {
		slidesPerView: 5,
		slidesPerGroup: 1,
		spaceBetween: 0,
		loop:true,
		breakpoints: {
			650: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 0,
				loop:true,
			}
		},
    });
	
	$(".sort_list li a").click(function(){
		$(".sort_list li").removeClass("focus");
		$(this).parents("li").addClass("focus");
	});
	
	function confirm()
	{
		msg = "선택한 항목을 삭제하시겠습니까?";
		if (confirm(msg)!=0) {
			$(".area_list_matching_interior .chkbox_custom:checked").parents("li").remove();
			$(".area_list_matching_interior .chkbox_custom").hide();
		} else {
			return;
		}
	}
	/* 180615 */
	/* 매칭 견적 삭제 */
	$(".interior_delete a").click(function() {
		$(".area_list_matching_interior .chkbox_custom").show();
		$(this).click(function(){
			$(".area_list_matching_interior .chkbox_custom:checked").parents("li").remove();
			$(".area_list_matching_interior .chkbox_custom").hide();
		});
	});

	/* 파트너 재매칭 */
	$(".btn_rematching").click(function() {
		$(".pop.pop_rematching_partner").show();
		$(".close_pop, .btn_close_pop").click(function() {
			$(".pop.pop_rematching_partner").hide();
		});
	});
	
	/* 계약 진행 파일 업로드 */
	var $fileBox = $('.filetype');
	$fileBox.each(function() {
		var $fileUpload = $(this).find('.input-file'),
			$fileText = $(this).find('.file-text')
		$fileUpload.on('change', function() {
			var fileName = $(this).val();
			$fileText.attr('disabled', 'disabled').val(fileName);
		});
	});
	
	$("#btn_move_estimate_stop2").click(function(){
		$(".estimate_partner_step1").hide(200);
		$(".estimate_partner_step2").show(200);
		$(".estimate_partner_step3").hide(200);
		$(".area_step_signup ul li").eq(1).addClass("focus").siblings("li").removeClass("focus");
	});
	$("#btn_move_estimate_stop3").click(function(){
		$(".estimate_partner_step1").hide(200);
		$(".estimate_partner_step2").hide(200);
		$(".estimate_partner_step3").show(200);
		$(".area_step_signup ul li").eq(2).addClass("focus").siblings("li").removeClass("focus");
	});
	/* 180618 */
	$(".contract_method .choice_estimate_option").click(function() {
		var choiceMethod = $(this).parents("p").index() + 2;
		$(".contract_method_desc").removeClass("active");
		$(".contract_method_desc:nth-child("+ choiceMethod +")").addClass("active");
	});
	$(".contract_price_option .choice_all").click(function() {
		$(".cotract_part").removeClass("active");
	});
	$(".contract_price_option .choice_part").click(function() {
		$(".cotract_part").addClass("active");
	});
	/* 견적 상세 펼치기 접기 */
	$(".include_desc").click(function(){
		$(this).toggleClass("open").parents(".detail_interior_item").siblings(".detail_interior_item").find(".interior_item").find(".include_desc").removeClass("open");
	});
	
	/*이미지 슬라이드*/
	$(".box_interior_status li").click(function() {
		$(".box_interior_status li").removeClass("focus");
		$(this).addClass("focus");
			
		var statusInterior = $(this).index() + 1;
		$(".box_postscript_photo .postscript_photo").removeClass("active");
		$(".box_postscript_photo .postscript_photo:nth-child("+statusInterior+")").addClass("active");
	});				

	/* 알람 설정 */
	$(".box_alarm_setting .chk_alarm").click(function() {
		if($(this).is(':checked') == false){
			$(this).parents("li").find("label").html("OFF");
		}else {
			$(this).parents("li").find("label").html("ON");
		}
	});
	
	/* 팔로우 */
	$(".choice_scrap_option li a").click(function() {
		$(".choice_scrap_option li").removeClass("focus");
		$(this).parents("li").addClass("focus");	
		var followeChoice = $(this).parents("li").index() + 2;
		$(".area_scrap .box_follow").removeClass("active");
		$(".area_scrap .box_follow:nth-child("+followeChoice+")").addClass("active");
	});
	
	$(".choice_scrap_option li a").click(function() {
		$(".choice_scrap_option li").removeClass("focus");
		$(this).parents("li").addClass("focus");	
		var followeChoice = $(this).parents("li").index() + 2;
		$(".area_scrap .box_scrap").removeClass("active");
		$(".area_scrap .box_scrap:nth-child("+followeChoice+")").addClass("active");
	});
	/* 견적매칭 */
	$(".box_filter_order li a").click(function() {
		$(".box_filter_order li").removeClass("focus");
		$(this).parents("li").addClass("focus");
		return false;
	});
	
	$(".ask_premium_box a").click(function() {
		$(".pop.pop_premium").show();
		$(".pop_premium .close_pop").click(function() {
			$(".pop.pop_premium").hide();
		});
	});
	/* 메세지 */
	$(".list_talk_people li .talk_box").click(function() {
		$(".area_messenger .box_empty_messenger").hide();
		var talkPerson = $(this).parents("li").index() + 1;
		$(".area_messenger .box_messenger").removeClass("active");
		$(".area_messenger .box_messenger:nth-child("+talkPerson+")").addClass("active");
	});
	
	$(".list_talk_people li .delete_msg_icon").click(function() {
		var talkDelete = $(this).parents("li").index() + 1;
		$(".area_messenger .box_messenger:nth-child("+talkDelete+")").remove();
		$(this).parents("li").remove();		
		$(".area_messenger .box_messenger").removeClass("active");
		$(".area_messenger .box_empty_messenger").show();		
	});
	
	var swiper = new Swiper('#slidePremium', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 15,
		loop:true,
		breakpoints: {
			1500: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				loop:true,
				spaceBetween: 15,
			},
			960: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				centeredSlides:true,
				loop:true,
				spaceBetween: 15,
			},
			650: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				centeredSlides:true,
				loop:true,
				spaceBetween: 15,
			},
		}
    });
	
	/* 팝업 시 스크롤 고정 */
	var scrollHeight = 0;
	function popupOpen() {
		scrollHeight = $("body").scrollTop(); 
		$("body").addClass('layer-open'); 
		$('.wra').css('position', 'fixed'); 
		$('.wra').css({"width":"100%","height":"100%"}); 
		$('.wra').css('top', - scrollHeight);
	}

	function popupClose() {
		$("body").removeClass("layer-open"); 
		$('.wra').css('top', 0);
		$('.wra').css({"width":"auto","height":"auto"}); 
		$('.wra').css('position', 'relative');
		$("body").scrollTop(scrollHeight); 
	}
	/* 프로필 */
	$(".pop_profile .btn_user_link,.pop_profile .contents_item_link").click(function() {
		console.log("1dsf");
		return false;
	});
	$(".preview_profile").click(function() {
		$(".pop.pop_profile").show();
		popupOpen();
		$(".pop_profile .close_pop").click(function() {
			$(".pop.pop_profile").hide();
			popupClose();
		});
	});
	
	$(".btn_applyEstimateStep_2").click(function(){
		$(".apply_estimate_page .area_step_signup ul li").removeClass("focus");
		$(".apply_estimateStep_1").hide(200);
		$(".apply_estimateStep_2").show(200);
		$(".apply_estimateStep_3").hide(200);
		$(".apply_estimate_page .area_step_signup ul li").eq(1).addClass("focus");
	});
	$(".btn_applyEstimateStep_3").click(function(){
		$(".apply_estimate_page .area_step_signup ul li").removeClass("focus");
		$(".apply_estimateStep_1").hide(200);
		$(".apply_estimateStep_2").hide(200);
		$(".apply_estimateStep_3").show(200);
		$(".apply_estimate_page .area_step_signup ul li").eq(2).addClass("focus");
	});
	
	$(".btn_joinStep_2").click(function(){
		var necessary_0 = $("#join_email").val();
		var necessary_1 = $("#join_pw").val();
		var necessary_2 = $("#join_pw_r").val();
		var necessary_3 = $("#join_name").val();
		var necessary_4 = $("#join_phone").val();
		var necessary_5 = $("#join_zcode").val();
		var necessary_6 = $("#join_addr_0").val();
		var necessary_7 = $("#join_addr_1").val();
		
		if($("#agree_required1").prop("checked") == false || $("#agree_required2").prop("checked") == false || necessary_0 == "" || necessary_1 == "" || necessary_2 == "" || necessary_3 == "" || necessary_4 == "" || necessary_5 == "" || necessary_6 == "" || necessary_7 == "") {
			alert("필수항목을 입력해주세요");
		}else{
			$(".join_page .area_step_signup ul li").removeClass("focus");
			$(".join_step_1").hide(200);
			$(".join_step_2").show(200);
			$(".join_page .area_step_signup ul li").eq(1).addClass("focus");
		}
	});
	
	/*faq*/
	$(".area_fnq .fnq_list .each_fnq .question_fnq").click(function(){
		$(this).parents(".each_fnq").toggleClass("open",200).siblings(".each_fnq").removeClass("open",200);
	});
	
	$(function(){
		$(".fnq_tap_item").click(function(){
			$(".fnq_tap_item").removeClass("focus");
			$(".area_fnq .fnq_list .each_fnq").removeClass("open",200);
			$(this).addClass("focus");
			$(".fnq_list").hide();
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn();
		});
    });
	/*//*/
	/* 180621 */
	/* 홈캐스트 top6 */
	$(".homecaster_tap").click(function(){
		$(".homecaster_tap").removeClass("focus");
		$(this).addClass("focus");
		$(".popular_posting").hide().removeClass("active");
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).addClass("active").fadeIn();
	});
	/* pagination */
	var indexSlide = $("#castBestSlide .swiper-slide-active").index() + 1;
	
	/* 견적서 상세내용 입력 펼치기 */
    $(".total_option").click(function() {
    	$(this).parents(".each_fill").toggleClass("text_open");
    });
	/*//*/
	
	var makeEstimate_total_price = 0;
	$(".data_price").change(function(){
		makeEstimate_total_price = 0;
		$(".each_fill").each(function(){
			var makeEstimate_price_val = $(this).find(".data_price").val();
			if(makeEstimate_price_val == ""){
				makeEstimate_price_val = 0;
			};
			$(this).find(".data_price").attr("data-price",makeEstimate_price_val);
			var makeEstimate_price = $(this).find(".data_price").attr("data-price");
			makeEstimate_total_price = parseInt(makeEstimate_total_price) + parseInt(makeEstimate_price);
		});
		
		var total_price_text = (makeEstimate_total_price / 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$("#total_price").val(makeEstimate_total_price);
		$(".total_price span").text(total_price_text);
	});
	
	$(".btn_alarm").click(function(){
		$("#alarmTooltip").toggleClass("active");
		$(".container").toggleClass("active");
	});
});
})(jQuery);