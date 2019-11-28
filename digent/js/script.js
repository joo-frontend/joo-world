$(document).ready(function () {
    /*soultion*/
    $(".solution_menu li").click(function () {
        $(".solution_menu li").removeClass("focus");
        $(this).addClass("focus");
        var menuIndex = $(this).index() + 1;
        $(".solution_contents .solution_box").removeClass("active");
        $(".solution_contents .solution_box:nth-child("+menuIndex+")").addClass("active");
    });

    $(".mb_menu_icon").click(function () {
        $(".mb_menu").addClass("active");
        $(".bg_black").addClass("active");
        $(".mb_menu .close_menu,.bg_black").click(function () {
            $(".mb_menu").removeClass("active");
            $(".bg_black").removeClass("active");
        });
    });


});