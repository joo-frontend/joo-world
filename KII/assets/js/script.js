$(document).ready(function () {
    $(".pagination .page").click(function () {
        $(".pagination .page").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });
});