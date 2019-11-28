/*(function ($) {*/
$(document).ready(function () {

    //모바일 헤더 메뉴
    $(".btn_menu_box").click(function(){

        if($(".m_gnb").is(":visible")) {
            $(".m_gnb").slideUp();

        }else {
            $(".m_gnb").slideDown();

        }

        $(".m_gnb li a").click(function () {
            $(".m_gnb").hide();
        });

    });

    //메뉴 이동
    var currentGet = window.location.search.substr(1);
    if (currentGet == "hash=1") {
        var move = $("#wra_monitor").offset().top;
        var headerHeight = $(".wra_header_page").height() - 1;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
   
    if (currentGet == "hash=2") {
        var move = $("#wra_system").offset().top;
        var headerHeight = $(".wra_header_page").height() - 1;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
  
    if (currentGet == "hash=3") {
        var move = $("#wra_copyright_manage").offset().top;
        var headerHeight = $(".wra_header_page").height() - 1;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
   
    if (currentGet == "hash=4") {
        var move = $("#wra_cdn").offset().top;
        var headerHeight = $(".wra_header_page").height() - 1;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
   
    if (currentGet == "hash=5") {
        var move = $("#wra_si").offset().top;
        var headerHeight = $(".wra_header_page").height() - 1;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
    
    if (currentGet == "hash=6") {
        var move = $("#wra_sound_id").offset().top;
        var headerHeight = $(".wra_header_page").height() - 1;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
     var currentGet1 = window.location.search.substr(1);
    if (currentGet1 == "hash=7") {
        var move = $("#wra_company_location").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }


    /* 모바일 메뉴 */
    var mobileGet = window.location.search.substr(1);
    if (mobileGet == "hash=8") {
        var move = $("#wra_monitor").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
    var mobileGet = window.location.search.substr(1);
    if (mobileGet == "hash=9") {
        var move = $("#wra_system").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
    var mobileGet = window.location.search.substr(1);
    if (mobileGet == "hash=10") {
        var move = $("#wra_copyright_manage").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    } var mobileGet = window.location.search.substr(1);
    if (mobileGet == "hash=11") {
        var move = $("#wra_cdn").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    } var mobileGet = window.location.search.substr(1);
    if (mobileGet == "hash=12") {
        var move = $("#wra_si").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }
    var mobileGet = window.location.search.substr(1);
    if (mobileGet == "hash=13") {
        var move = $("#wra_sound_id").offset().top;
        var headerHeight = $(".wra_header_page").height();
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
    }




    /* 문의하기 팝업 */
    $(".wra_pop .close_pop").click(function () {
        $(".wra_pop").hide();
    });

    $(".form_submit_btn button").on("click", function () {
        var notCompany = $(".form_tx_box.company").prop('value');
        var notName = $(".form_tx_box.name").prop('value');
        var notTel = $(".form_tx_box.tel").prop('value');
        var notEmail = $(".form_tx_box.email").prop('value');
        var notAsk = $(".form_txarea_box.ask").val();
        var notAgree = $(".term_radio .term_disagree");
        var isAgree = $(".term_radio .term_agree");
        console.log(notAgree.is(':checked'));

        if (notCompany.length <= 0) {
            $(".wra_pop.not_company").show();
        } else if (notName.length <= 0) {
            $(".wra_pop.not_name").show();
        } else if (notTel.length <= 0) {
            $(".wra_pop.not_tel").show();
        } else if (notEmail.length <= 0) {
            $(".wra_pop.not_email").show();
        } else if (notAsk.length <= 0) {
            $(".wra_pop.not_ask").show();
        } else if (notAgree.is(':checked')) {
            $(".wra_pop.not_agree").show();
        } else {
            location.href = "contact_complete.html"
        }


    });


});
/*
})(jQuery);*/
