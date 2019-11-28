$(document).ready(function () {
    $(".type_find li a").click(function () {
        $(".type_find li").removeClass("focus");
        $(this).parents("li").addClass("focus");
        var typeFind = $(this).parents("li").index() +1;
        $(".section_find .find_member_box").removeClass("active");
        $(".section_find .find_member_box:nth-child("+typeFind+")").addClass("active");
        return false;
    });

    $(".btn_login").click(function(){
        var id = $('input[name=loginId]').val();
        var pw = $('input[name=loginPw]').val();
        var save = 0;
        if($('input[name=saveId]').is(':checked')){
        save = 1;
        }
 
         $.ajax({
             type: "POST",
             dataType: 'html',
             data:{ id:id , pw:pw },
             url: "/sub/member/do/ck_login.php",
             success: function(response){
             
             if(response==200){
                if(save==1){
                 setCookie("thanksgoods", id, 7);
                }else{
                  deleteCookie("thanksgoods");   
                }
             location.href="/sub/calendar/calendar.php";

             }else{
             $('.error').attr('style','display:block');
             
             }
             },
             });

    });

    function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
     
        return cookieValue;
    }
    }
         $(document).ready(function(){
    var userInputId = getCookie("thanksgoods");
    
    $('input[name=loginId]').val(userInputId);
    if($('input[name=loginId]').val()!=''){
    $('#saveId').attr('checked',true);
    }
    });
    function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
} 

    $(".customer_q a").click(function () {
        var faqBox = $(this);
        if(faqBox.parents(".faq_box").hasClass("open") == true){
            $(".faq_box").removeClass("open");
        }else {
            $(".faq_box").removeClass("open");
            $(this).parents(".faq_box").toggleClass("open",200);
        }
        return false;
    })
    /*search*/
    $(".searchM").click(function () {
        $(".search_wra").show();
        $(".close_search").click(function () {
            $(".search_wra").hide();
             return false;
        });
        return false;
    });
    /*그룹만들기*/
    $(".make_group").click(function () {
        $(".pop.pop_make").show();
       $(".pop.pop_make .close_pop,.pop.pop_make .btn_close").click(function () {
           $(".pop.pop_make").hide();
       });
    });
    $(".join_group").click(function () {
        $(".pop.pop_join").show();
       $(".pop.pop_join .close_pop,.pop.pop_join .btn_close").click(function () {
           $(".pop.pop_join").hide();
       });
    });
    /*그룹탈퇴*/
    $(".leave_group a").click(function () {
        $(".pop.pop_leave").show();
        $(".pop.pop_leave .close_pop,.pop.pop_leave .btn_close").click(function () {
            $(".pop.pop_leave").hide();
        });
    });

    /**/
    $(".posting_type_box a").click(function () {
        $(".posting_type_box a").removeClass("focus");
        $(this).addClass("focus")
       
    });
    /*mobile menu*/
    $(".menu_icon").click(function () {
        $(".sub_menu").addClass("active");
        return false;
    });
    $(".bg_black").click(function (e) {
        if(!$(e.target).hasClass("sub_menu") ){
            $(".sub_menu").removeClass("active");
        }
    });
    
    /*market menu*/
    $(".type_pd li").click(function () {
        $(".type_pd li").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });

    /*myorder menu*/
    $(".order_type li").click(function () {
        $(".order_type li").removeClass("focus");
        $(this).addClass("focus");
    });

    /*pagination*/
    $(".pagination .page").click(function () {
        $(".pagination .page").removeClass("focus");
        $(this).addClass("focus");
     
    });

    /*다른페이지 이동*/
    var currentGet = window.location.search.substr(1);
    if (currentGet == "hash=1") {
        var move = $("#homeProduct").offset().top;
        var headerHeight = $(".header_wra").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 300);
    }
    /*fav*/
    /*$(".sell_info .fav_chk").click(function () {
        var favPd = $(this).parents(".fav");
        favPd.toggleClass("active");
        var numFav = favPd.find("span").html();
        if ($(this).parents(".fav").hasClass("active") == true) {
            numFav++;
            favPd.find("span").html(numFav);
        }else {
            numFav--;
            favPd.find("span").html(numFav);
        }
    });*/
    /*market*/
    $(".home_cate li").click(function () {
        $(".home_cate li").removeClass("focus");
        $(this).addClass("focus");
         
    });

    /*popup scroll*/
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('.pop').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    $('.pop').off('scroll touchmove mousewheel');
    $('html, body').css({'overflow': 'auto', 'height': '100%'});
});