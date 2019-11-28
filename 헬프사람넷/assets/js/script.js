$(document).ready(function () {
    /*메인 - 전문가*/
    $(".expert_area .cate_box li").click(function () {
        $(".expert_area .cate_box li").removeClass("focus");
        $(this).addClass("focus");
        var indexExpert = $(this).index() +1;
        $(".expert_top_box .expert_pf").removeClass("active");
        $(".expert_top_box .expert_pf:nth-child("+indexExpert+")").addClass("active");
        return false;
    });
    /*글 */
    $(".question_contents .more").click(function () {
        $(this).toggleClass("more_open");
        return false;
    });
    $(".expert_comment .more").click(function () {
        $(this).toggleClass("more_open");
        return false;
    });
    /*전문가답변*/
    $(".write_answer").click(function () {
        $(this).toggleClass("active");
        $(this).parents(".status").find(".write_box").toggle();
        return false;
    });
    /*공지사항*/
    $(".list_qna .title").click(function () {
        $(this).parents(".list_qna").toggleClass("open",200).siblings(".list_qna").removeClass("open",200);
    });
    /*아이디 비밀번호 찾기*/
    $(".find_type .choiceType li a").click(function () {
        $(".find_type li").removeClass("focus");
        $(this).parents("li").addClass("focus");
        var typeFind = $(this).parents("li").index() + 1;
        $(".find_area .member_area").removeClass("active");
        $(".find_area .member_area:nth-child("+typeFind+")").addClass("active");
        return false;
    });

    $(".type_myQ a").click(function () {
        $(".type_myQ a").removeClass("focus");
        $(this).addClass("focus");
    });

    $(".cate_mainBoard li").click(function () {
        $(".cate_mainBoard li").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });
    $(".cate_box li").click(function () {
         $(this).parents(".cate_box").find("li").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });
    $(".pagination ul li").click(function () {
        $(".pagination ul li").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });

    $(".open_board_type a").click(function () {
        $(".open_board_type a").removeClass("active");
        $(this).addClass("active");
        return false;
    });
    $(".order_type a").click(function () {
        $(".order_type a").removeClass("focus");
        $(this).addClass("focus");
        return false;
    });
    $(".board_cate a").click(function () {
        $(".board_cate li").removeClass("focus");
        $(this).parents("li").addClass("focus");
        var boardIndex = $(this).parents("li").index() + 1;

        $(".catebox_section .cate_box_type2").removeClass("active");
        $(".catebox_section .cate_box_type2:nth-child("+boardIndex+")").addClass("active");
        return false;
    });




});