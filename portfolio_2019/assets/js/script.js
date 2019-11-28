$(document).ready(function () {
    /*scroll*/
    $(".scroll_btn").click(function (e) {
        e.preventDefault();
        var profile = $(".section_profile").offset();
        $("html,body").animate({scrollTop: profile.top},500);
        return false;
    });

    $(".tab_type span").click(function () {
        $(".tab_type span").removeClass("focus");
        $(this).addClass("focus");
    });
});