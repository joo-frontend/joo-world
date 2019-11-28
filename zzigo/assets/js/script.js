$(document).ready(function () {
    /*header*/
    /*search*/
    $(".section_icon_menu a.searchM").click(function () {
        $(this).toggleClass("focus");
        $(".search_wra").toggle();
        $(".bg_black.bg_search").toggleClass("active");
        $(".search_wra .close_search,.bg_black.bg_search").click(function () {
            $(".search_wra").hide();
            $(".section_icon_menu a.searchM").removeClass("focus");
            $(".bg_black.bg_search").removeClass("active");
        });
        return false;
    });
    /*list album*/
    /*$(".theme_album_list_area li").click(function () {
        $(".theme_album_list_area li").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".type_album li").click(function () {
        $(".type_album li").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".sort_album span").click(function () {
        $(".sort_album span").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".condition_order_box .condition span").click(function () {
        $(this).parents(".condition").find("span").removeClass("focus");
        $(this).addClass("focus");
    });*/

    /*pagination*/
    $(".pagination .page").click(function () {
        $(".pagination .page").removeClass("focus");
        $(this).addClass("focus");
    });

    /*join*/
    /*이메일*/
    $(".item_info_join .send_email").click(function () {
        if($(this).parents(".item_info_join").find("input").val() == ""){
            alert("이메일을 입력해주세요");
        }else {
           /* $(".pop_side_email").show();*/
            alert("메일로 인증메일이 발송되었습니다");
        }
    });
    /*약관동의*/
    $(".all_agree .chkbox").click(function () {
        var allChk = $(this);
        if(allChk.is(":checked") == true) {
            $(".agree_join_term .chkbox").prop("checked",true);
        }else {
            $(".agree_join_term .chkbox").prop("checked",false);
        }
    });
    $(".agree_join_term .chkbox").click(function () {
        var agreeChkNum = $(".agree_join_term").length;
        var agreeChk = $(".agree_join_term .chkbox:checked").length;
        console.log(agreeChk);
        if(agreeChkNum == agreeChk) {
            $(".all_agree .chkbox").prop("checked",true);
        }else {
            $(".all_agree .chkbox").prop("checked",false);
        }
    });
    /*비밀번호*/
    var form = document.joinInfoFrm;
    $(".textbox_join[name='joinPW']").keyup(function () {
        var userPw = $(this).val();
        var textAlert =$(this).parents(".item_info_join").find(".pw_security");
        textAlert.css({"display":"inline-block"});
        var pattern1 = /[0-9]/;
        var pattern2 = /[a-zA-Z]/;
        if(!pattern1.test(userPw)||!pattern2.test(userPw)||userPw.length < 6){
            textAlert.removeClass("pass").html("안전하지 않음");
        }else {
            textAlert.addClass("pass").html("안전");
        }
    });
    $(".textbox_join[name='joinPWChk']").keyup(function () {
        var textAlert =$(this).parents(".item_info_join").find(".pw_security");
        textAlert.css({"display":"inline-block"});
        if(form.joinPW.value == form.joinPWChk.value){
            textAlert.addClass("pass").html("일치");
        }else {
            textAlert.removeClass("pass").html("일치하지 않음");
        }
    });

    /*cloud*/
    $(".depth_menu1 .new_docu").click(function () {
        $(".file_manage_menu").removeClass("active");
        var modalMenu = $(this).siblings(".file_manage_menu");
        modalMenu.toggleClass("active");
        //var $newDocu = $(".new_docu");
        $("html").click(function (e) {

            if(!$(".new_docu").has(e.target).length){
            //if(!$(e.target).hasClass("file_manage_menu") == true){
                modalMenu.removeClass("active");
            }
        });
        return false;
    });
    $(".cloud_folder_name .title_folder").click(function () {
        $(".file_manage_menu").removeClass("active");
        var modalMenu = $(this).find(".file_manage_menu");
        modalMenu.toggleClass("active");
        $("html").click(function (e) {
            if(!$(e.target).hasClass("file_manage_menu") == true){
                modalMenu.removeClass("active");
            }
        });
        return false;
    });

    $(".depth_menu1 .menu1").click(function () {
        $(".depth_menu1").removeClass("focus");
        $(this).parents(".depth_menu1").addClass("focus");
    });
    $(".sub_menu_ul").click(function () {
        // $(".sub_menu_ul").removeClass("focus");
        $(".sub_menu_ul").addClass("focus");
        $(".sub_menu_ul > a").addClass("active");
    });
    $(".file_manage_menu .add_folder").click(function () {
        $(".file_manage_menu").removeClass("active");
        $(".pop.pop_add_folder").show();
        $(".pop_add_folder .close_pop,.pop_add_folder .btn_cancel").click(function () {
            $(".pop.pop_add_folder").hide();
        });
    });
    $('.tb_files tbody .chkbox_file').click(function () {
        if($(this).is(":checked") == true){
            $(this).parents("tr").addClass("choiced");
        } else {
            $(this).parents("tr").removeClass("choiced");
        }
        var chkFile = $('.tb_files tbody .chkbox_file:checked').length;
        var itemFile = $('.tb_files tbody tr').length;
        if(chkFile == itemFile) {
            $(".tb_files thead .chkbox_file").prop("checked",true);
        }else {
            $(".tb_files thead .chkbox_file").prop("checked",false);
        }
    });
    $(".tb_files thead .chkbox_file").click(function () {
        var allChkFile = $(this);
        if(allChkFile.is(":checked") == true) {
            $('.tb_files tbody .chkbox_file').prop("checked",true);
            $('.tb_files tbody tr').addClass("choiced");
        }else {
            $('.tb_files tbody .chkbox_file').prop("checked",false);
            $('.tb_files tbody tr').removeClass("choiced");
        }
    });
    $(".tb_files tr .delete").click(function () {
        var itemFile = $(this);
        var nameFile = itemFile.parents("tr").find(".name").html();
        $(".pop.pop_delete_file").show();
        itemFile.parents("tr").addClass("click");
        $(".delete_msg_box .desc span").html("'"+nameFile+"'");
        $(".pop_delete_file .close_pop, .pop_delete_file .btn_cancel").click(function () {
            $(".pop.pop_delete_file").hide();
            itemFile.parents("tr").removeClass("click");
        });
        $(".pop_delete_file .btn_delete").click(function () {
            $(".pop.pop_delete_file").hide();
            if(itemFile.parents("tr").hasClass("click")){
                itemFile.parents("tr").remove();
            }

        });
    });
    $(".layout_list_icon span").click(function () {
        $(".layout_list_icon span").removeClass("focus");
        $(this).addClass("focus");
        var typeList = $(this).index() + 1;
        $(".section_file_list .list_files").removeClass("active");
        $(".section_file_list .list_files:nth-child("+typeList+")").addClass("active");
        $(".cloud_pop_box .list_cloud_file").removeClass("active");
        $(".cloud_pop_box .list_cloud_file:nth-child("+typeList+")").addClass("active");

    });
   /* $(".item_album_file").click(function () {
        var choiceFile = $(this);
        var popFile = $(this).find(".manage_file_box");
        if($(e.target).hasClass("menu_file") == true){
            choiceFile.toggleClass("active");
            popFile.addClass("active");
            $("html").click(function (e) {
                if(!$(e.target).hasClass("manage_file_box") == true){
                    popFile.removeClass("active");
                }
            });
        }
    });*/
    $(".item_album_file .menu_file").click(function () {
        var itemFile = $(this).parents(".item_album_file");
        var popFile = $(this).find(".manage_file_box");
        $(".manage_file_box").removeClass("active");
        $(".item_album_file").removeClass("active");
        $(".item_file_each").removeClass("active");
        itemFile.addClass("active");
        popFile.addClass("active");
    });
    $(".item_album_file .manage_file_box .delete_folder").click(function () {
        $(".manage_file_box").removeClass("active");
        var itemFile = $(this).parents(".item_album_file");
        var nameFile = itemFile.find(".name_album").html();
        $(".pop.pop_delete_folder").show();
        itemFile.addClass("click");
        itemFile.removeClass("active");
        $(".delete_msg_box .desc span").html("'"+nameFile+"'");
        $(".pop_delete_folder .close_pop, .pop_delete_folder .btn_cancel").click(function () {
            $(".pop.pop_delete_folder").hide();
            itemFile.removeClass("click");
        });
        $(".pop_delete_folder .btn_delete").click(function () {
            $(".pop.pop_delete_folder").hide();
            if(itemFile.hasClass("click")){
                itemFile.remove();
            }
        });
    });
    $(".item_file_each .menu_file").click(function () {
        var itemFile = $(this).parents(".item_file_each");
        var popFile = $(this).find(".manage_file_box");
        $(".manage_file_box").removeClass("active");
        $(".item_album_file").removeClass("active");
        $(".item_file_each").removeClass("active");
        itemFile.addClass("active");
        popFile.addClass("active");
    });
    $(".item_file_each .manage_file_box .delete_folder").click(function () {
        $(".manage_file_box").removeClass("active");
        var itemFile = $(this).parents(".item_file_each");
        var nameFile = itemFile.find(".name_file .name").html();
        $(".pop.pop_delete_file").show();
        itemFile.addClass("click");
        $(".delete_msg_box .desc span").html("'"+nameFile+"'");
        $(".pop_delete_file .close_pop, .pop_delete_file .btn_cancel").click(function () {
            $(".pop.pop_delete_file").hide();
            itemFile.removeClass("click");
        });
        $(".pop_delete_file .btn_delete").click(function () {
            $(".pop.pop_delete_file").hide();
            if(itemFile.hasClass("click")){
                itemFile.remove();
            }
        });
    });
    var $filebox = $(".menu_file");
    $("html").not($filebox).click(function(e) {
        if($(".manage_file_box").hasClass("active") == true){
            if(!$(".manage_file_box,.menu_file,.pop_delete_folder,.pop_add_folder").has(e.target).length) {
                $(".item_album_file").removeClass("active");
                $(".item_file_each").removeClass("active");
                $(".manage_file_box").removeClass("active");
            }
        }
    });
    $(".manage_file_box .edit_folder").click(function () {
        $(".file_manage_menu").removeClass("active");
        $(".pop.pop_edit_folder").show();
        $(".pop_edit_folder .close_pop,.pop_edit_folder .btn_cancel").click(function () {
            $(".pop.pop_edit_folder").hide();
        });
    });

    /*mobile menu*/
    $(".mb_menu_icon").click(function () {
        $(".side_menuM").addClass("active");
        $(".bg_search").removeClass("active");
        $(".search_wra").hide();
        $(".bg_black_menu").click(function () {
            $(".side_menuM").removeClass("active");
        });
    });
    $(".btn_profile_d a").click(function () {
        $(".pop.pop_detail_designer").show();
        $(".pop_detail_designer .close_pop").click(function () {
            $(".pop.pop_detail_designer").hide();
        });
        return false;
    });
    $(".option_list .option").click(function () {
        $(this).parents(".option_list").find(".option").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".select_type .selectType").click(function () {
        $(".select_type .selectType").removeClass("focus");
        $(this).addClass("focus");
        var numType = $(this).index() + 1;
        $(".menu_type ul").removeClass("active");
        $(".menu_type ul:nth-child("+numType+")").addClass("active");
    });





    $('.sub_ul').on('click', function() {
        $('.sub_ul.focus').each(function(){
            $(this).removeClass('focus');
        });
        $(this).addClass('focus');

    });

    $('.designer_ul').on('click', function() {
        $(this).addClass('focus');
    });


    $('.order_detail_list').on('click', function() {
        $('.order_detail_searchDisplay').toggleClass('display_none');
    })

    $(".search_mb").click(function () {
        $(".search_wra").show();
        $(".side_menuM ").removeClass("active");
        $(".bg_search ").addClass("active");
        return false;
    });
});