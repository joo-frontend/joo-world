$(document).ready(function () {
    /*파트너 포트폴리오*/
    function myFunction(x) {
        if (x.matches) {
            $(".btn_show_pf").click(function () {
                var clickAgin = $(this);
                var partnerPf = clickAgin.attr("data-pf");
                var popPf = $(".pop_pf_section."+ partnerPf);
                $(".pop_pf_section").not(popPf).removeClass("active");
                popPf.toggleClass("active");
                $(".partner_pf_box .close_pf").click(function () {
                    $(".pop_pf_section").removeClass("active");
                    return false;
                });
                return false;
            });
        } else {
            $(".btn_show_pf").click(function () {
                var clickAgin = $(this);
                var partnerPf = clickAgin.attr("data-pf");
                var positionPartner = clickAgin.siblings(".partner_pf").offset();
                var psBottom = positionPartner.top + 90;
                var popPf = $(".pop_pf_section."+ partnerPf);
                $(".pop_pf_section").not(popPf).removeClass("active");
                popPf.toggleClass("active");
                $(".pop_pf_section").css({"top":psBottom + "px"})
                $(".partner_pf_box .close_pf").click(function () {
                    $(".pop_pf_section").removeClass("active");
                });
                return false;
            });
        }
    }
    var x = window.matchMedia("(max-width: 1024px)")
    myFunction(x);
    x.addListener(myFunction);

    $(".custom_partner_list .chkbox_chk").click(function () {
        var chkThis = $(this);
        if (chkThis.is(":checked") == true) {
            chkThis.parents("li").addClass("choiced");
        } else {
            chkThis.parents("li").removeClass("choiced");
        }
    });

    /*날짜 직접입력*/
    $(".dateBtn").click(function () {
        $(".entry_date_box").toggle();
        $(this).toggleClass("focus");
    });
    /*접근팝업*/
    $(".popup_access .btn_close").click(function () {
        $(".popup_access").hide();
        return false;
    });
    /*알림창 오픈*/
    $(".alarm_menu").click(function () {
        $(this).find("a").toggleClass("focus");
        $(".alarm_section").toggle();

        return false;
    });
    /* css */
    function tbCss(){
        var monthDayChk =  $(".date-picker-wrapper .month-wrapper table .day.checked");
        var firstDay = $(".date-picker-wrapper .month-wrapper table .day.first-date-selected");
        var lastDay = $(".date-picker-wrapper .month-wrapper table .day.last-date-selected");
        monthDayChk.parents("td").addClass("chkTd");
        firstDay.parents("td").addClass("first");
        lastDay.parents("td").addClass("last");
    }
    /*tbCss();*/
    $(".date-picker-wrapper .month-wrapper table").click(function () {
        var monthDay =  $(".date-picker-wrapper .month-wrapper table .day");
        monthDay.parents("td").removeClass("chkTd");
        monthDay.parents("td").removeClass("first");
        monthDay.parents("td").removeClass("last");
        tbCss();
    });
    $(".datetrange").blur(function () {
        /*tbCss();*/
    });

    $(".testInput").change(function () {
        $(".testfocusInput").focus();
    });
    /*function sYear(obj) {
        var directStartYear =  obj.val();
        var directStartMonth = $(".directStartMonth").val();
        var directStartDay = $(".directStartDay").val();
        if($(".directStartMonth").val() !=="" && $(".directStartDay").val() !== ""){
            s1=directStartYear +"-"+ directStartMonth +"-"+ directStartDay;
            $('#date-rangeStart').val(s1);
            $('#date-rangeStart').focus();
        }
    }
    function sMonth(obj){
        var directStartYear =$(".directStartYear").val();
        var directStartMonth = obj.val();
        var directStartDay = $(".directStartDay").val();
        if($(".directStartYear").val() !=="" && $(".directStartDay").val() !== ""){
            s1=directStartYear + "-"+ directStartMonth +"-"+ directStartDay;
            $('#date-rangeStart').val(s1);
            $('#date-rangeStart').focus();
        }
    }
    function sDay(obj){
        var directStartYear = $(".directStartYear").val();
        var directStartMonth = $(".directStartMonth").val();
        var directStartDay = obj.val();
        if($(".directStartMonth").val() !=="" && $(".directStartYear").val() !== ""){
            s1=directStartYear +"-"+ directStartMonth +"-"+ directStartDay;
            $('#date-rangeStart').val(s1);
            $('#date-rangeStart').focus();
        }
    }*/


    /*range*/
    function priceTooltip(){
        $('.ui-slider .ui-slider-handle').append('<div class="bar_price">' +
            '<input type="text" class="f_mont" id="priceValue" ></div>');
    }
    $("#rangeBudget").slider({
        min:0,
        max:300000000,
        value: 61500000,
        step: 10000,
        animate: true,
        range: "min",
        start: function(event, ui) {
            priceTooltip();
        },
        slide: function(event, ui) {
            $(".bar_price").remove();
            priceTooltip();
            $("#priceValue").val(ui.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            var slidePrice = $("#priceValue").val().replace(/,/gi,'');
            var cutPrice = slidePrice.substring(0,slidePrice.length - 4);
            var totalPrice = cutPrice.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            $(".budget_num span").text(totalPrice);
        },
    });
    /*style logo*/
    $("#styleLogo1").slider({
        min:0,
        max:100,
        value: 50,
        step: 5,
        animate: true,
        range: "min",
    });
    $("#styleLogo2").slider({
        min:0,
        max:100,
        value: 50,
        step: 5,
        animate: true,
        range: "min",
    });
    $("#styleLogo3").slider({
        min:0,
        max:100,
        value: 50,
        step: 5,
        animate: true,
        range: "min",
    });
    $("#styleLogo4").slider({
        min:0,
        max:100,
        value: 50,
        step: 5,
        animate: true,
        range: "min",
    });

    /*bidding*/
    $(".project_menu_box li").click(function () {
        $(".project_menu_box li").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".order_box p").click(function () {
        $(".order_box p").removeClass("focus");
        $(this).addClass("focus");
    });



    $(".tab_detail p").click(function () {
        $(".tab_detail p").removeClass("focus");
        $(this).addClass("focus");
        var tabBrief = $(this).index() + 1;
        $(".detail_project_box").removeClass("active");
        $(".detail_project_box:nth-child("+tabBrief+")").addClass("active");
    });

    $(".btn_comment.btn_edit").click(function () {
        $(".client_recomment").hide();
        $(".client_recomment_edit").addClass("active");
        $(".btn_comment.btn_edit_cancel").click(function() {
            $(".client_recomment").show();
            $(".client_recomment_edit").removeClass("active");
        });
    });
    $(".extend_period").click(function(){
        $(".pop_period_extend").show();
        $(".pop_period_extend .close_btn").click(function() {
            $(".pop_period_extend").hide();
        });
    });

    $(".sort_partner p").click(function () {
        $(".sort_partner p").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".my_bidding_type_box p").click(function () {
        $(".my_bidding_type_box p").removeClass("focus");
        $(this).addClass("focus");
        var prjctType = $(this).index() + 1;
        $(".my_bidding_contents .my_bidding_box").removeClass("active");
        $(".my_bidding_contents .my_bidding_box:nth-child("+prjctType+")").addClass("active");
    });
    /*faq*/
    $(".question p").click(function () {
        $(this).parents(".item_faq").toggleClass("open",200).siblings(".item_faq").removeClass("open",200);
    });
    $(".faq_type li p").click(function () {

        $(".faq_contents").removeClass("active");
        var dataType = $(this).parents("li").attr("data-faq");
                $(".faq_contents."+dataType).addClass("active");

                $(".faq_type li").removeClass("focus");
                $(this).parents("li").addClass("focus");
            });
    $(".temp_save,.temp_save_m").click(function () {
        $(".popup.popup_brief_desc").show();
        $(".popup_brief_desc .close_pop, .close_savepop").click(function () {
            $(".popup.popup_brief_desc").hide();
            return false;
        });
        return false;
    });
    /*search*/
    $(".search_header_btn").click(function () {
        function myFunction(x) {
            if (x.matches) {
                window.location.href='/search_result.php';
            } else {
                $(".searchHeader_section").toggleClass("active");
                $(".search_header_btn a").toggleClass("focus");
                $(".bg_blackSearch").toggleClass("active");

                $(".searchHeader_section .close_pop_mb, .bg_blackSearch").click(function () {
                    $(".searchHeader_section").removeClass("active");
                    $(".search_header_btn a").removeClass("focus");
                    $(".bg_blackSearch").removeClass("active");
                });
                return false;
            }
        }
        var x = window.matchMedia("(max-width: 640px)")
        myFunction(x);
        x.addListener(myFunction);
    });

    $(".cate_search_result li").click(function () {
        var cateSearch = $(this);
        var dataTypeSearch = cateSearch.attr("data-search");
        $(".cate_search_result li").removeClass("focus");
        cateSearch.addClass("focus");

        if(dataTypeSearch == 'searchAll') {
            $(".result_box").addClass("active");
        }else {
            $(".result_box").removeClass("active");
            $(".result_box."+dataTypeSearch).addClass("active");
        }
    });
    /*m menu*/
    $(".btn_m_menu").click(function () {
        $(".m_menu_side").addClass("active");
        $(".bg_blackSide").addClass("active");
        $(".bg_blackSide").click(function () {
            $(".m_menu_side").removeClass("active");
            $(".bg_blackSide").removeClass("active");
        });
    });

    /*file upload custom*/
    var $fileBox = $('.filetype');

    $fileBox.each(function() {
        var $fileUpload = $(this).find('.input-file'),
            $fileText = $(this).find('.file-text')
        $fileUpload.on('change', function() {
            var fileName = $(this).val();
            $fileText.attr('disabled', 'disabled').val(fileName);
        })
    })

    /*project step4*/
    $(".item_color").click(function () {
        var chkColor = $(".tone_n_manner .chkbox_chk:checked").length;
        if(chkColor > 3){
            alert("최대 3개까지 선택 가능합니다.");
            return false;
        }
    });
    $(".job_type .chkbox_chk").click(function () {
        var chkLogo = $(".logo_type .chkbox_chk:checked").length;
        if(chkLogo > 3){
            alert("최대 3개까지 선택 가능합니다.");
            return false;
        }
    });
    /*bidding home 공개입찰*/
    $(".project_menu_box .allB").click(function () {
        $(".bidding_section li").show();
    });
    $(".project_menu_box .normalB").click(function () {
        $(".bidding_section li.bidding_normal").show();
        $(".bidding_section li.bidding_premium").hide();
    });
    $(".project_menu_box .premiumB").click(function () {
        $(".bidding_section li.bidding_normal").hide();
        $(".bidding_section li.bidding_premium").show();
    });

    /*팝업 이미지확대*/
    $(".img_reference a").click(function () {
        var imgSrc = $(this).find("img").attr("src");
        $(".popup.popup_img").show();
        $(".popup_img .pop img").attr("src",imgSrc);
        $(".popup_img .close_pop").click(function () {
            $(".popup.popup_img").hide();
        });
        $(".popup_img .download_img").click(function () {
            return false;
        });
        return false;
    });

    $(".day.invalid").click(function () {
        alert("오늘 이후 날짜를 선택해주세요");
    });

    $(".btn_free").click(function () {
        var areaBtn = $(this).parents(".freelancer_area");
        if(areaBtn.hasClass("closed") == false){
            $(".freelancer_area").addClass("closed");
            $(this).find("span").html("펼치기");
        }else {
            $(".freelancer_area").removeClass("closed");
            $(this).find("span").html("접어두기");
        }


    });
    /*파일 추가 custom*/
    var $fileBox = $('.attach_file');

    $fileBox.each(function() {
        var $fileUpload = $(this).find('.hidden_input'),
            $fileText = $(this).find('.file_name')
        $fileUpload.on('change', function() {
            var fileName = $(this).val();
            $fileText.attr('disabled', 'disabled').val(fileName);
        })
    });
    //내프로젝트
    $(".type_my_pj li .item_type_pj").click(function () {
        $(".type_my_pj li").removeClass("focus");
        $(this).parents("li").addClass("focus");
    });
    $(".btn_my_confirm").click(function () {
        $(".popup_confirm.popup").show();
        $(".popup_confirm .close_mypop").click(function () {
            $(".popup_confirm.popup").hide();
        });
    });
    $(".btn_my_edit").click(function () {
        $(".popup_my_edit.popup").show();
        $(".popup_my_edit .close_mypop").click(function () {
            $(".popup_my_edit.popup").hide();
        });
    });
    $(".detail_edit").click(function () {
        $(".popup_chk_ask.popup").show();
        $(".popup_chk_ask .close_mypop").click(function () {
            $(".popup_chk_ask.popup").hide();
        });
        return false;
    });
    $(".add_photo_btn").click(function () {
        $(".popup_register_file.popup").show();
        $(".popup_register_file .close_mypop").click(function () {
            $(".popup_register_file.popup").hide();
        });
    });
    $(".ask_confirm_btn").click(function () {
        $(".popup_finish_my.popup").show();
        $(".popup_finish_my .close_mypop").click(function () {
            $(".popup_finish_my.popup").hide();
        });
    });
    $(".detail_history").click(function () {
        $(".popup_chk_history.popup").show();
        $(".popup_chk_history .close_mypop").click(function () {
            $(".popup_chk_history.popup").hide();
        });
        return false;
    });


    $(".status_step .step").click(function () {
        $(".status_step .step").removeClass("active");
        $(this).addClass("active");
        var step = $(this).index() + 1;
        $(".list_work_pj .section_list").removeClass('active');
        $(".list_work_pj .section_list:nth-child("+ step +")").addClass('active');
    });

    $(".type_my_pj li").click(function () {
        var typeM = $(this).attr("data-typemenu");
        if(typeM == "pj_all"){
            $(".list_my_pj li[data-typepj='pj_ing']").show();
            $(".list_my_pj li[data-typepj='pj_done']").show();
        }else if(typeM == "pj_ing") {
            $(".list_my_pj li[data-typepj='pj_ing']").show();
            $(".list_my_pj li[data-typepj='pj_done']").hide();
        }else if(typeM == "pj_done") {
            $(".list_my_pj li[data-typepj='pj_ing']").hide();
            $(".list_my_pj li[data-typepj='pj_done']").show();
        }
    });

    $(".team_show").click(function () {
        $(".popup_team").show();
        $(".popup_team .close_pop").click(function () {
            $(".popup_team").hide();
            return false;
        });
        return false;
    });
    $(".change_pw.change_cur").click(function () {
        $(".popup_changepw").show();
        $(".popup_changepw .close_changepop").click(function () {
            $(".popup_changepw").hide();
            return false;
        });
        return false;
    });

});




