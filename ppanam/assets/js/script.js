$(document).ready(function () {
    /*header*/
    $(".lang_box a").click(function () {
        $(".lang_box a").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });
    $(".item_side_m .sub_menu").click(function () {
        $(".item_side_m").removeClass("open");
        $(this).parents(".item_side_m").toggleClass("open");
    });

    /*main*/
    $(".flex .main_pagination li").click(function () {
        $(".flex .main_pagination li").removeClass("focus");
        $(this).addClass("focus");
    });
    $(".menu_icon").click(function () {
        $(this).addClass("active");
        $(".m_menu_box + .bg_cover").addClass("active");
        $(".bg_cover").click(function () {
            $(".menu_icon").removeClass("active");
            $(this).removeClass("active");

        });
    });

    /*about*/
    $(".about_menu li a").click(function () {
        $(".about_menu li").removeClass("focus");
        $(this).parents("li").addClass("focus");
        /*return false;*/
    });
    var currentGet = window.location.search.substr(1);
    var headerHeight = $(".header_wra").height();
    if (currentGet == "hash=1") {
        var move1 = $("#about1").offset().top;
        $('html, body').animate({
            scrollTop: move1 - headerHeight
        }, 500);
        $(".about_menu li").removeClass("focus");
        $(".about_menu li:nth-child(1)").addClass("focus");
    }
    if (currentGet == "hash=2") {
        var move1 = $("#about2").offset();
        $('html, body').animate({
            scrollTop: move1.top - headerHeight
        }, 500);
        $(".about_menu li").removeClass("focus");
        $(".about_menu li:nth-child(2)").addClass("focus");
    }
    if (currentGet == "hash=3") {
        var move1 = $("#about3").offset().top;
        $('html, body').animate({
            scrollTop: move1 - headerHeight
        }, 500);
        $(".about_menu li").removeClass("focus");
        $(".about_menu li:nth-child(3)").addClass("focus");
    }
    if (currentGet == "hash=4") {
        var move1 = $("#about4").offset().top;
        $('html, body').animate({
            scrollTop: move1 - headerHeight
        }, 500);
        $(".about_menu li").removeClass("focus");
        $(".about_menu li:nth-child(4)").addClass("focus");
    }
    if (currentGet == "hash=5") {
        var move = $("#service1").offset().top;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
        $(".service_type li").removeClass("focus");
        $(".service_type li:nth-child(1)").addClass("focus");
    }
    if (currentGet == "hash=6") {
        var move = $("#service2").offset().top;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
        $(".service_type li").removeClass("focus");
        $(".service_type li:nth-child(2)").addClass("focus");
    }
    if (currentGet == "hash=7") {
        var move = $("#service3").offset().top;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
        $(".service_type li").removeClass("focus");
        $(".service_type li:nth-child(3)").addClass("focus");
    }
    if (currentGet == "hash=8") {
        var move = $("#service4").offset().top;
        $('html, body').animate({
            scrollTop: move - headerHeight
        }, 500);
        $(".service_type li").removeClass("focus");
        $(".service_type li:nth-child(4)").addClass("focus");
    }




    $(".detail_vision dl").click(function () {
        $(".detail_vision dl").removeClass("active");
        $(this).addClass("active");
    });

    $(".coworker_num p a").click(function () {
        $(".coworker_num p").removeClass("focus");
        $(this).parents("p").addClass("focus");
        var personIndex = $(this).parents("p").index() + 1;
        $(".detail_coworker .item_coworker").removeClass("active");
        $(".detail_coworker .item_coworker:nth-child("+personIndex+")").addClass("active");
        return false;
    });
    $(".type_partner p").click(function () {
        $(".type_partner p").removeClass("focus");
        $(this).addClass("focus");
        var typePartner = $(this).index() + 1;
        $(".partner_detail .partner_box").removeClass("active");
        $(".partner_detail .partner_box:nth-child("+typePartner+")").addClass("active");
    });
    $(".year_history span").click(function () {
        $(".year_history span").removeClass("focus");
        $(this).addClass("focus");
    });


    /*news*/
    $(".type_news li a").click(function () {
        $(".type_news li").removeClass("focus");
        $(this).parents("li").addClass("focus");
        return false

    });

    /*service*/
    $(".type_platform li a").click(function () {
        $(".type_platform li").removeClass("focus");
        $(this).parents("li").addClass("focus");

        var typePlat = $(this).parents("li").index() + 1;
        $(".platform_contents .platform_detail").removeClass("active");
        $(".platform_contents .platform_detail:nth-child("+typePlat+")").addClass("active");
         return false;
    });
    $(".step_care li").click(function () {
        $(".step_care li").removeClass("focus");
        $(this).addClass("focus");

        var indexStep = $(this).attr("class");
        var res;
        res = indexStep.replace(/[^0-9]/g,"");
        $(".agency_detail_box .item_agency").removeClass("active");
        $(".agency_detail_box .item_agency:nth-child("+res+")").addClass("active");

        var mobileStep = $(this);
        $(".mobile_detail_agency").removeClass("active");
        $(this).sibling(".mobile_detail_agency").addClass("active");

    });


});