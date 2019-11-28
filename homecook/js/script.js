$(document).ready(function () {
    /**/
    /*ready to cook*/
    /**/
    $(".box_product_type li").click(function () {
        $(".box_product_type li").removeClass("focus");
        $(this).addClass("focus");

        var menutypeIndex = $(this).index() + 4;
        console.log(menutypeIndex);
        $(this).parents(".box_product_type").siblings(".product_cook_section").removeClass("active");
        $(this).parents(".box_product_type").siblings(".product_cook_section:nth-child(" + menutypeIndex + ")").addClass("active");

        return false;
    });
    $(".box_menu_cate li").click(function () {
        $(this).parents(".box_menu_cate").find("li").removeClass("focus");
        $(this).addClass("focus");

        var menuIndex = $(this).index() + 1;

        $(this).parents(".box_menu_cate").siblings(".type_product").find(".box_cook_product").removeClass("focus");
        $(this).parents(".box_menu_cate").siblings(".type_product").find(".box_cook_product:nth-child(" + menuIndex + ")").addClass("focus");
        return false;
    });

    /**/
    /*검색창 오픈*/
    /**/
    $(".box_menu .search").click(function () {
        if ($(this).hasClass("focus")) {
            $(this).removeClass("focus");
        } else {
            $(this).addClass("focus");
        }
        $(".wra_search_active").toggle();
    });

    /**/
    /*최근본상품*/
    /**/
    $(".open_recent").click(function () {
        $(".wra_recent .area_recent .box_recent").toggle();
        return false;
    });

    /**/
    /*culistory란*/
    /**/
    $(".culistory_menu li a").click(function () {
        $(".culistory_menu li").removeClass("focus");
        $(this).parents("li").addClass("focus");

        var storyIndex = $(this).parents("li").index() + 1;

        $(".culistory_section .culistory").removeClass("active");
        $(".culistory_section .culistory:nth-child(" + storyIndex + ")").addClass("active").fadeIn();

        return false;
    });

    /**/
    /*배송안내*/
    /**/
    $(".menu_delivery li").click(function () {
        $(".menu_delivery li").removeClass("focus");
        $(this).addClass("focus");

        var deliveryIndex = $(this).index() + 1;

        $(".area_guide_delivery_detail .box_delivery_detail").removeClass("active");
        $(".area_guide_delivery_detail .box_delivery_detail:nth-child(" + deliveryIndex + ")").addClass("active");

        if ($(".box_delivery_detail.box_ask_delivery").hasClass("active")) {
            $(".move_none_third").hide();
            $(".area_guide_delivery").css("padding-bottom", "0");
        } else {
            $(".move_none_third").show();
            $(".area_guide_delivery").css("padding-bottom", "4em");
        }

        return false;
    });

    /**/
    /*주문수량*/
    /**/
    /*마이너스*/
    $('.box_regular_menu .menu_num .field_num .down').click(function (e) {
        e.preventDefault();
        var stat = $(this).siblings('.order_numbox_hide').val();
        var num = parseInt(stat, 10);
        num--;
        if (num <= 0) {
            alert('더이상 줄일수 없습니다.');
            num = 1;
            return;
        }
        $(this).siblings('.order_numbox_hide').val(num);
        $(this).siblings('.order_numbox').val(num);
    });
    /*플러스*/
    $('.box_regular_menu .menu_num .field_num .up').click(function (e) {
        e.preventDefault();
        var stat = $(this).siblings('.order_numbox_hide').val();
        var num = parseInt(stat, 10);
        num++;
        $(this).siblings('.order_numbox_hide').val(num);
        $(this).siblings('.order_numbox').val(num);
    });


    /**/
    /*고정메뉴 선택*/
    /**/
    $(".box_regular_menu .pick_chk").click(function () {
        var chkMenu = $(this);
        var quatityReset = parseInt(1, 10);
        /*메뉴선택*/
        if (chkMenu.is(":checked") == true) {
            chkMenu.parents(".purchase_pd").addClass("focus");
            chkMenu.parents(".purchase_pd").find('.cart_btn').attr('disabled', false);
            $(".purchase_pd .menu_num .field_num span.down").css("pointer-events", "auto");
            $(".purchase_pd .menu_num .field_num span.up").css("pointer-events", "auto");
        } else {
            chkMenu.parents(".purchase_pd").removeClass("focus");
            chkMenu.parents(".purchase_pd").find('.cart_btn').attr('disabled', true);
            chkMenu.parents(".purchase_pd").find(".order_numbox_hide").val(quatityReset);
            chkMenu.parents(".purchase_pd").find(".order_numbox").val(quatityReset);
            $(".purchase_pd .menu_num .field_num span.down").css("pointer-events", "none");
            $(".purchase_pd .menu_num .field_num span.up").css("pointer-events", "none");
        }
        /*장바구니 팝업*/
        $(this).parents(".purchase_pd").find(".cart_btn").click(function () {
            $(".pop.pop_cart").show();
            /*장바구니 가져오기*/
            /*상품이름*/
            var week_fix_1 = $(this).parents(".box_regular_menu").find(".week_fixPd_1").val();
            var week_fix_2 = $(this).parents(".box_regular_menu").find(".week_fixPd_2").val();
            var week_fix_3 = $(this).parents(".box_regular_menu").find(".week_fixPd_3").val();
            $(".list_cart_preview tbody tr:first-child th").html(week_fix_1);
            $(".list_cart_preview tbody tr:nth-child(2) th").html(week_fix_2);
            $(".list_cart_preview tbody tr:nth-child(3) th").html(week_fix_3);
            /*상품가격*/
            var week_price_1 = $(this).parents(".box_regular_menu").find(".week_fixPd_price_1").val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
            var week_price_2 = $(this).parents(".box_regular_menu").find(".week_fixPd_price_2").val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
            var week_price_3 = $(this).parents(".box_regular_menu").find(".week_fixPd_price_3").val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
            $(".list_cart_preview tbody tr:first-child td .price_pop").html(week_price_1);
            $(".list_cart_preview tbody tr:nth-child(2) td .price_pop").html(week_price_2);
            $(".list_cart_preview tbody tr:nth-child(3) td .price_pop").html(week_price_3);
            /*상품갯수*/
            var week_num = parseInt($(this).parents(".box_regular_menu").find(".order_numbox_hide").val());
            $(".list_cart_preview tbody tr td .num_pop").html(week_num);

            /*팝업 장바구니 총액*/
            var week_price_1Num = parseInt($(this).parents(".box_regular_menu").find(".week_fixPd_price_1").val());
            var week_price_2Num = parseInt($(this).parents(".box_regular_menu").find(".week_fixPd_price_2").val());
            var week_price_3Num = parseInt($(this).parents(".box_regular_menu").find(".week_fixPd_price_3").val());
            var week_total_price = (week_price_1Num * week_num) + (week_price_2Num * week_num) + (week_price_3Num * week_num);
            var weekTotal = week_total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
            $(".list_cart_preview").find("tfoot td b").html(weekTotal);

            /*팝업 닫기*/
            $(".close_pop,.btn_close_pop").click(function () {
                $(".pop.pop_cart").hide();
                return false;
            });
            $(".btn_submit_pop").click(function () {
                $(".pop.pop_cart").hide();
                chkMenu.attr("checked", false);
                chkMenu.parents(".purchase_pd").removeClass("focus");
                $(".order_numbox_hide").val(quatityReset);
                $(".order_numbox").val(quatityReset);

                $(".pop.pop_cart_success").show();
                $(".pop_cart_success .btn_close_pop").click(function () {
                    $(".pop.pop_cart_success").hide();
                });
            });
            return false;
        });


    });

    /**/
    /*선택메뉴 선택*/
    /**/
    var totalNumPiece = 0;
    $(".purchase_piece .pick_chk").click(function () {
        var menuChoice = $(this);
        var resetNum = 1;
        if (menuChoice.is(":checked") == true) {
            if (totalNumPiece >= 3) {
                $(".pop.pop_alert_num").show();
                $(".pop_alert_num .btn_close_pop").click(function () {
                    $(".pop.pop_alert_num").hide();
                });
                menuChoice.prop("checked", false);
            } else {
                $(this).parents("li").addClass("focus");
                var numChiceEach = parseInt(menuChoice.parents("li").find(".order_numbox_hide").val());
                totalNumPiece += numChiceEach;
            }
        } else {
            $(this).parents("li").removeClass("focus");
            var unchkNum = parseInt(menuChoice.parents("li").find(".order_numbox_hide").val());
            $(this).parents("li").find(".order_numbox_hide").val(resetNum);
            $(this).parents("li").find(".order_numbox").val(resetNum);
            totalNumPiece -= unchkNum;
        }

    });

    /*마이너스*/
    $('.purchase_piece .field_num .down').click(function (e) {
        e.preventDefault();
        var stat = $(this).siblings('.order_numbox_hide').val();
        var num = parseInt(stat, 10);
        num--;
        totalNumPiece--;
        if (num <= 0) {
            alert('더이상 줄일수 없습니다.');
            num = 1;
            totalNumPiece++;
            return;
        }
        $(this).siblings('.order_numbox_hide').val(num);
        $(this).siblings('.order_numbox').val(num);
    });
    /*플러스*/
    $('.purchase_piece .field_num .up').click(function (e) {
        e.preventDefault();
        var stat = $(this).siblings('.order_numbox_hide').val();
        var num = parseInt(stat, 10);
        num++;
        /*수량 3개 제한*/
        totalNumPiece = 1;
        $(".product_list_piece li").each(function (index, item) {
            if ($(item).find(".pick_chk").is(":checked") == true) {
                var numPiece = parseInt($(item).find(".pick_chk:checked").parents(".purchase_piece").find(".order_numbox_hide").val());
                totalNumPiece += numPiece;
            }
        });
        if (totalNumPiece >= 4) {
            $(".pop.pop_alert_num").show();
            $(".pop_alert_num .btn_close_pop").click(function () {
                $(".pop.pop_alert_num").hide();
            });
            num--;
            totalNumPiece--;

        } else {
            $(this).siblings('.order_numbox_hide').val(num);
            $(this).siblings('.order_numbox').val(num);
        }

    });

    /*장바구니 프리뷰 리스트업*/
    function listUp(nameCartPd, priceCartPd, numCartPd) {
        $(".list_cart_preview tbody").append(
            "<tr>"
            + "<th>" + nameCartPd + "</th>"
            + "<td><span class='price_pop'>" + priceCartPd + "</span>x<span class='num_pop'>" + numCartPd + "개</span></td>"
            + "</tr>"
        );
    }

    /*팝업 장바구니*/
    $(".box_piece_menu .cart_btn").click(function () {
        console.log("장바구니 " + totalNumPiece);
        /*수량 3개 제한*/

        if ($(".purchase_piece .pick_chk").is(":checked") == false) {
            alert("메뉴를 선택해주세요");
        } else if (totalNumPiece != 3) {
            $(".pop.pop_alert_num").show();
            $(".pop_alert_num .btn_close_pop").click(function () {
                $(".pop.pop_alert_num").hide();
            });
        } else {
            $(".pop.pop_cart").show();
        }
        /*장바구니 비우기*/
        $(".list_cart_preview tbody tr").remove();
        /*선택상품 가져오기*/
        var totalPicePiece = 0;
        $(".product_list_piece li").each(function (index, item) {
            if ($(item).find(".pick_chk").is(":checked") == true) {
                var namePd = $(item).find(".piecePd").val();
                var pricePdNum = parseInt($(item).find(".piecePd_price").val());
                var pricePd = pricePdNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
                var numPd = parseInt($(item).find(".order_numbox_hide").val());
                listUp(namePd, pricePd, numPd);

                var priceNnum = pricePdNum * numPd;
                totalPicePiece += priceNnum;
            }
        });
        var totalPriceTxt = totalPicePiece.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
        $(".list_cart_preview tfoot td b").html(totalPriceTxt);


        /*팝업 닫기*/
        $(".close_pop").click(function () {
            $(".pop.pop_cart").hide();
            $(".list_cart_preview tbody tr").empty();
            return false;
        });
        $(".pop.pop_cart .btn_submit_pop").click(function () {
            $(".pop.pop_cart").hide();
            $(".list_cart_preview tbody tr").empty();
            $(".purchase_piece .pick_chk").prop("checked", false);
            $(".product_list_piece li").removeClass("focus");
            totalNumPiece = 0;

            $(".purchase_piece").find(".order_numbox_hide").val(1);
            $(".purchase_piece").find(".order_numbox").val(1);

            $(".pop.pop_cart_success").show();
            $(".pop_cart_success .btn_close_pop").click(function () {
                $(".pop.pop_cart_success").hide();
            });
        });
    });
    /**/
    /*팝업 배송일선택*/
    /**/
    $(".menu_delivery .delivery_btn").click(function () {
        $(".pop.pop_delivery_date").show();
        /*팝업 닫기*/
        $(".close_pop").click(function () {
            $(".pop.pop_delivery_date").hide();
            return false;
        });
        $(".btn_submit_pop").click(function () {
            /*날짜 받아오기*/
            $(".list_delivery_date .chk_circle").parents(".datebox").removeClass("chkOn");
            $(".list_delivery_date .chk_circle:checked").parents(".datebox").addClass("chkOn");
            var dateChoice = $(".datebox.chkOn").find("span").html();

            $(".pop.pop_delivery_date").hide();
            $(".delivery_date p span").html(dateChoice);
        });
    });

    /**/
    /*회원가입 약관동의*/
    /**/
    $(".chk_term .chk_user").click(function () {
        if ($(this).is(":checked") == true) {
            $(".chk_term_each .chk_user").prop("checked", true);
        } else {
            $(".chk_term_each .chk_user").prop("checked", false);
        }
    });
    $(".chk_term_each .chk_user").click(function () {
        var termChoice = $(".chk_term_each .chk_user").length;
        var chkChoice = $(".chk_term_each .chk_user:checked").length;
        if (termChoice == chkChoice) {
            $(".chk_term .chk_user").prop("checked", true);
        } else {
            $(".chk_term .chk_user").prop("checked", false);
        }
    });
    /*---------------------------------------*/
    /*댓글 삭제*/
    $(".comment_list_box .etc_box a").click(function () {
        var commentChoice = $(this).parents(".comment_each");
        $(".pop.pop_delete").show();
        $(".pop_delete .close_pop, .pop_delete .btn_close_pop").click(function () {
            $(".pop.pop_delete").hide();
            return false;
        });
        $(".pop_delete .btn_delete").click(function () {
            commentChoice.remove();
            $(".pop.pop_delete").hide();
            return false;
        });

        return false;
    });

    /*파일업로드*/
    var $fileBox = $('.filetype');
    $fileBox.each(function () {
        var $fileUpload = $(this).find('.input-file'),
            $fileText = $(this).find('.file-text')
        $fileUpload.on('change', function () {
            var fileName = $(this).val();
            $fileText.attr('disabled', 'disabled').val(fileName);
        });
    });

    /*장바구니*/
    /*마이너스*/
    $('.table_cart .field_num .down').click(function (e) {
        e.preventDefault();
        var stat = $(this).siblings('.order_numbox_hide').val();
        var num = parseInt(stat, 10);
        num--;
        if (num <= 0) {
            alert('더이상 줄일수 없습니다.');
            num = 1;
            return;
        }
        $(this).siblings('.order_numbox_hide').val(num);
        $(this).siblings('.order_numbox').val(num);
    });
    /*플러스*/
    $('.table_cart .field_num .up').click(function (e) {
        e.preventDefault();
        var stat = $(this).siblings('.order_numbox_hide').val();
        var num = parseInt(stat, 10);
        num++;
        $(this).siblings('.order_numbox_hide').val(num);
        $(this).siblings('.order_numbox').val(num);

    });
    /*장바구니 수정*/
    $(".change_cart.change_num a").click(function () {
        var changeNum = $(this).parents("td").find(".order_numbox_hide").val();
        $(this).parents("tr").find(".cart_info .quantity").html(changeNum);

        /*장바구니 각 상품 금액 합*/
        var eachPriceCart = $(".info_cart .each_price").html().replace(/[^0-9]/g, "");
        var eachNumCart = parseInt($(".info_cart .quantity").html());
        $(this).parents("tr").find(".cart_pd_price .cart_price").each(function (index, item) {
            var eachTotalPrice = eachPriceCart * eachNumCart;
            var eachTotalPrice_s = eachTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
            $(item).find("p").text(eachTotalPrice_s);
            priceCart();
        });
        return false;
    });
    $(".change_cart.change_delivery a").click(function () {
        $(".pop.pop_delivery_date").show();
        var choiceCart = $(this).parents("tr");
        $(".pop_delivery_date .btn_submit_pop").click(function () {
            $(".list_delivery_date .chk_circle").parents(".datebox").removeClass("chkOn");
            $(".list_delivery_date .chk_circle:checked").parents(".datebox").addClass("chkOn");
            var dateCartChoice = $(".datebox.chkOn").find("span").html();
            var d = new Date();
            var year = d.getFullYear();
            var month = dateCartChoice.substring(0, 2);
            var day = dateCartChoice.substring(4, 6);
            console.log(dateCartChoice);
            $(choiceCart).find(".cart_date p").text(year + "." + month + "." + day);
            $(".pop.pop_delivery_date").hide();
        });
        $(".pop_delivery_date .close_pop").click(function () {
            $(".pop.pop_delivery_date").hide();
            return false;
        });
        return false;
    });

    /*장바구니 합계*/
    function priceCart() {
        var totalCartPrice = 0;
        $(".table_cart tbody tr").each(function (index, item) {
            $(item).find(".cart_price").each(function (index, item) {
                var eachCartPrice = $(item).find("p").html().replace(/[^0-9]/g, "");
                var n_eachCartPrice = parseInt(eachCartPrice);
                totalCartPrice += n_eachCartPrice;
            });
        });
        var totaCartPrice_S = totalCartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(".table_cart tfoot .total_cart .price").text(totaCartPrice_S);

        var totalDeliveryPrice = 0;
        $(".table_cart tbody tr").each(function (index, item) {
            $(item).find(".cart_delivery").each(function (index, item) {
                var eachDeliveryPrice = $(item).find("p").html().replace(/[^0-9]/g, "");
                if (eachDeliveryPrice == "") {
                    totalDeliveryPrice += 0;
                } else {
                    var n_eachDeliveryPrice = parseInt(eachDeliveryPrice);
                    totalDeliveryPrice += n_eachDeliveryPrice;

                }
            });
        });
        var totaDeliveryPrice_S = totalDeliveryPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(".table_cart tfoot .total_delivery_price .price").text(totaDeliveryPrice_S);


        var finalCartPrice = parseInt(totaCartPrice_S.replace(/[^0-9]/g, ""));
        var finalDelivery = parseInt(totaDeliveryPrice_S.replace(/[^0-9]/g, ""));

        var finalPdPrice = finalCartPrice + finalDelivery;
        $(".total_price .price").html(finalPdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

    priceCart();
    /*장바구니 삭제*/
    $(".table_cart thead .chk_user").click(function () {
        if ($(this).is(":checked") == true) {
            $(".table_cart tbody .chk_user").prop("checked", true);
        } else {
            $(".table_cart tbody .chk_user").prop("checked", false);
        }
    });
    $(".table_cart tbody .chk_user").click(function () {
        var cartChoice = $(".table_cart tbody .chk_user").length;
        var cartchkChoice = $(".table_cart tbody .chk_user:checked").length;
        if (cartChoice == cartchkChoice) {
            $(".table_cart thead .chk_user").prop("checked", true);
        } else {
            $(".table_cart thead .chk_user").prop("checked", false);
        }
    });

    $(".area_manage_cart .btn_each_remove").click(function () {
        $(".pop.pop_delete").show();
        $(".pop_delete .btn_delete").click(function () {
            $(".table_cart tbody .chk_user:checked").parents("tr").remove();
            $(".pop.pop_delete").hide();
            priceCart();
        });
        $(".pop_delete .btn_close_pop, .pop_delete .close_pop").click(function () {
            $(".pop.pop_delete").hide();
        });

    })
    $(".area_manage_cart .btn_all_remove").click(function () {
        $(".pop.pop_delete").show();
        $(".pop_delete .btn_delete").click(function () {
            $(".table_cart tbody .chk_user").parents("tr").remove();
            $(".pop.pop_delete").hide();
            priceCart();
        });
        $(".pop_delete .btn_close_pop, .pop_delete .close_pop").click(function () {
            $(".pop.pop_delete").hide();
        });

    });

    /*주문하기 결제방법*/
    $(".pay_choice .chk_user").click(function () {
        var payMethod = $(this).parents("p").index() + 1;
        console.log(payMethod);
        $(".pay_detail .box_pay_detail").removeClass("active");
        $(".pay_detail .box_pay_detail:nth-child(" + payMethod + ")").addClass("active");

    });

    /*이메일 선택*/
    $("select[name='select_email_cart']").click(function () {
        var emailChoice = $("select[name='select_email_cart']").val();
        $("input[name='email_site_cart']").val(emailChoice);
    });

    /*주문배송조회*/
    $(".box_myorder_type li").click(function () {
        $(".box_myorder_type li").removeClass("focus");
        $(this).addClass("focus");
        var myorder = $(this).index() + 1;

        $(".order_type_list .box_myorder_list").removeClass("active");
        $(".order_type_list .box_myorder_list:nth-child(" + myorder + ")").addClass("active");

        return false;
    });

    /*faq*/
    $(".box_list_faq td a").click(function () {
        var faqList = $(this).parents("tr");
        if (faqList.hasClass("open")) {
            faqList.removeClass("open");
        } else {
            faqList.addClass("open");
        }
        return false;
    });
    $(".area_faq_center li").click(function () {
        var faqType = $(this).index() + 1;
        $(".area_faq_center li").removeClass("focus");
        $(this).addClass("focus");

        $(".list_faq .box_list_faq").removeClass("active");
        $(".list_faq .box_list_faq:nth-child(" + faqType + ")").addClass("active");
        return false;
    });

    /* 알러지 */
    $(".setting_btn_group .btn_reset_allergy").click(function () {
        $(this).parents("form").find(".box_allery_food.active .chk_food:checked").prop("checked", false);
        return false;
    });

    $(".box_allery_type td").click(function () {
        $(".box_allery_type td").removeClass("focus");
        var typeA = $(this).attr("class");
        $(this).addClass("focus");
        $(".allery_food .box_allery_food").removeClass("active");
        $(".allery_food .box_allery_food" + "." + typeA).addClass("active");
    });

    /*180709*/
    /*팝업 접근 권한 없음*/
    $(".pop_access_matter .close_pop").click(function () {
        $(".pop.pop_access_matter").hide();
    });

    /*180710*/
    $(".box_emotion .kind_emotion button").click(function () {
        var thisE = $(this);
        var indexEmotion = thisE.parents(".kind_emotion").index() + 1;

        var numEmotion = $(".box_emotion_result .result_emotion:nth-child(" + indexEmotion + ")").find("span").html();
        var numberEmotion = parseInt(numEmotion);

        if(!thisE.hasClass("focus")) {
            $(".box_emotion .kind_emotion").each(function (index,item) {
                if($(this).find("button").hasClass("focus")){
                    var indexAll = $(this).index()+1;
                    $(this).find("button").removeClass("focus");
                    var numAllEmotion = $(".box_emotion_result .result_emotion:nth-child(" + indexAll + ")").find("span").html();
                    var numberAllEmotion = parseInt(numAllEmotion);
                    numberAllEmotion--;
                    $(".box_emotion_result .result_emotion:nth-child(" + indexAll + ")").find("span").html(numberAllEmotion);
                }
            });
            thisE.addClass("focus");
            numberEmotion++;
            $(".box_emotion_result .result_emotion:nth-child(" + indexEmotion + ")").find("span").html(numberEmotion);
        } else if(thisE.hasClass("focus")) {
            thisE.removeClass("focus");
            numberEmotion--;
            $(".box_emotion_result .result_emotion:nth-child(" + indexEmotion + ")").find("span").html(numberEmotion);
        }
        var e_type1 = $(".box_emotion_result .result_emotion:nth-child(1)").find("span").html();
        var e_type2 = $(".box_emotion_result .result_emotion:nth-child(2)").find("span").html();
        var e_type3 = $(".box_emotion_result .result_emotion:nth-child(3)").find("span").html();
        var e_type4 = $(".box_emotion_result .result_emotion:nth-child(4)").find("span").html();
        var arrayE = new Array();
        arrayE.push(e_type1);
        arrayE.push(e_type2);
        arrayE.push(e_type3);
        arrayE.push(e_type4);

    });

    /*레시피비교하기*/
    $(".active_btn button").click(function () {
        $(this).parents(".active_btn").addClass("active");
        $(".compare_chk").show();

        $(".area_list_posting .chk_circle").click(function () {
            var chkThis = $(this);
            var chkTwo = $(".area_list_posting .chk_circle:checked").length;
            if(chkTwo > 2){
               $(".pop.pop_alert_compare").show();
                chkThis.prop("checked",false);
                $(".pop_alert_compare .close_pop").click(function () {
                    $(".pop.pop_alert_compare").hide();
                    return false;
                });
            }
        });
        /*비교 취소*/
        $(".box_btn_compare .btn_cancel").click(function () {
            $(".active_btn").removeClass("active");
            $(".area_list_posting .chk_circle").prop("checked",false);
            $(".compare_chk").hide();
        });
        /*비교 클릭*/
        $(".box_btn_compare .btn_compare").click(function () {
            window.location.href="community_compare_recipe.html"
            $(".area_list_posting .chk_circle").prop("checked",false);
        });
    });

    /*글쓰기 방법 추가*/
    $(".textbox_method").keyup(function() {
        if($(this).val().length > 0){
            $(".box_add_photo").show();
            $(".box_method_img").show();
            $(this).css("height","10.333em");
        }else {
            $(".box_add_photo").hide();
            $(".box_method_img").hide();
            $(this).css("height","3.933em");
        }
    });

    /*필수영양소 메뉴 */
    $(".area_meal_nutrient_type li").click(function () {
        var nutIndex= $(this).index() + 1;

        $(".area_meal_nutrient_type li").removeClass("focus");
        $(this).addClass("focus");

        $(".nutrient_detail_section .area_nutrient_detail").removeClass("active");
        $(".nutrient_detail_section .area_nutrient_detail:nth-child("+nutIndex+")").addClass("active");
    });

    /*월간식 장바구니 팝업*/
    $(".box_month_purchase .cart_btn").click(function () {
        $(".pop.pop_cart_success").show();

        $(".pop_cart_success .btn_submit_pop").click(function () {
            $(".pop.pop_cart_success").hide();
            window.location.href="meal_cart_step1.html"
        });
        $(".pop_cart_success .btn_close_pop").click(function () {
            $(".pop.pop_cart_success").hide();
        });
    });


});