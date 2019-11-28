$(document).ready(function () {
    $(".item_bulid .txtarea").keyup(function () {
        var txtArea = $(this);
        if(txtArea.val().length > 500) {
            alert("최대 500글자까지 입력가능합니다");
            txtArea.val(txtArea.val().substring(0,500));
            $(".limit_txt").html("500 / 500");
        } else {
            $(".limit_txt").html(txtArea.val().length + " / 500")
        }
    });
    /*estimate*/
    $(".link_estm_simple").click(function () {
        $(".popup.popup_estm_simple").show();
        $("body").addClass("modal-open");
        $(".popup.popup_estm_simple .close_pop").click(function () {
            $(".popup.popup_estm_simple").hide();
            $("body").removeClass("modal-open");
        });
        return false;
    });
    $(".link_estm_detail").click(function () {
        $(".popup.popup_estm_detail").show();
        $("body").addClass("modal-open");
        $(".popup.popup_estm_detail .close_pop").click(function () {
            $(".popup.popup_estm_detail").hide();
            $("body").removeClass("modal-open");
        });
        return false;
    });
    $(".link_estm_simple_end").click(function () {
        $(".popup.popup_estm_simple_end").show();
        $("body").addClass("modal-open");
        $(".popup.popup_estm_simple_end .close_pop").click(function () {
            $(".popup.popup_estm_simple_end").hide();
            $("body").removeClass("modal-open");
        });
        return false;
    });
    $(".link_estm_detail_end").click(function () {
        $(".popup.popup_estm_detail_end").show();
        $("body").addClass("modal-open");
        $(".popup.popup_estm_detail_end .close_pop").click(function () {
            $(".popup.popup_estm_detail_end").hide();
            $("body").removeClass("modal-open");
        });
        return false;
    });

    //동의 체크
    $(".item_agree_join .chkagree").click(function () {
        var legnthBox = $(".item_agree_join .chkagree").length;
        var legnthChk = $(".item_agree_join .chkagree:checked").length;
        if(legnthChk == legnthBox){
            $(".item_agree_join.first .chkbox").prop("checked",true);
        }else {
            $(".item_agree_join.first .chkbox").prop("checked",false);
        }
    });
    $(".item_agree_join.first .chkbox").click(function () {
        if($(this).is(":checked") == true){
            $(".item_agree_join .chkagree").prop("checked",true);
        }else {
            $(".item_agree_join .chkagree").prop("checked",false);
        }
    });


    /*qna*/
    $(".tb_row .question").click(function () {
        $(this).parents(".tb_row").toggleClass("active").siblings(".tb_row").removeClass("active");
    });
    $(".delete_qna").click(function () {
        if(confirm("Q&A를 삭제하시겠습니까?")){
            $(this).parents(".qna_box").remove();
        }
        return false;
    });
    $(".delete_answer").click(function () {
        if(confirm("답글을 삭제하시겠습니까?")){
            $(this).parents(".answer_box").remove();
        }
        return false;
    });
    $(".edit_qna").click(function () {
        var qnaBox = $(this);
        qnaBox.parents(".qna_box").addClass("qna_edit");
        var txtBox = $(this).parents(".qna_box").find("textarea");
        txtBox.attr("disabled",false);
        $(".submit_edit").click(function () {
            var txtContents = txtBox.val();
            txtBox.val(txtContents);
            qnaBox.parents(".qna_box").removeClass("qna_edit");
        });
        return false;
    });

    /*alarm setting*/
    $(".setting_btn").click(function () {
        var btnAlarm = $(this);
        if(btnAlarm.hasClass("focus_on")){
            btnAlarm.removeClass("focus_on");
            btnAlarm.html("OFF");
        }else {
            btnAlarm.addClass("focus_on");
            btnAlarm.html("ON");
        }
    });
    $(".ask_direct_btn").click(function () {
        $(".qnaModal_wrap").show();
        $(".qnaModal_wrap .cancel").click(function () {
            $(".qnaModal_wrap").hide();
        });
    });

    /*header*/

    $(".sh_menu").click(function () {
        $(".search_area").toggleClass("active");
        $(".search_area .close_search").click(function () {
            $(".search_area").removeClass("active");
            return false;
        });
        return false;
    });

    /*like*/
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }
    $(".chkLike").click(function () {
        var chkLike = $(this);
        var countLike = parseInt(chkLike.parents(".like_post").find(".like_count").val());
        if(chkLike.is(":checked") == true){
            countLike++;
            chkLike.parents(".like_post").find(".like_count").val(countLike);
            chkLike.parents(".like_post").find("label").html(addComma(countLike));
        } else {
            countLike--;
            chkLike.parents(".like_post").find(".like_count").val(countLike);
            chkLike.parents(".like_post").find("label").html(addComma(countLike));
        }
    });

    $(".popup").on("show",function () {
       $("body").addClass("modal-open");
    }).on("hide", function () {
        $("body").removeClass("modal-open")
    });

    $(".agency_pf_choice .detail_link").click(function () {
        $(this).parents(".agency_pf_choice").addClass("active");
        $(".pf_info_choice .close_desc_pop").click(function () {
            $(this).parents(".agency_pf_choice").removeClass("active");
        });
    });


});
