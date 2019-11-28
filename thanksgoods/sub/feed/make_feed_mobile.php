<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php'); ?>

<div class="feed_wra feed_style_wra">
    <form>
    <div class="write_feed_area">
        <div class="write_preview_box">
            <p class="preview_txt">스타일 설정</p>
            <div class="my_feed_contents">
                <p class="bg_card"><img id="feedBg" src="" alt=""></p>
                <p class="txt_feed">소중한 너에게 보낸다<br>
                    오늘 하루도 무사하기를, 또 누군가에게 감사한 사람이기를</p>
            </div>
        </div>
    </div>
    <div class="style_setting_area">
        <div class="style_type_box">
            <span class="focus"><img class="focus_off" src="/assets/images/feed/style_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/style.png" alt=""></span>
            <span><img class="focus_off" src="/assets/images/feed/size_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/size.png" alt=""></span>
            <span><img class="focus_off" src="/assets/images/feed/align_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/align.png" alt=""></span>
            <span><img class="focus_off" src="/assets/images/feed/background_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/background.png" alt=""></span>
            <span><img class="focus_off" src="/assets/images/feed/opacity_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/opacity.png" alt=""></span>
            <span><img class="focus_off" src="/assets/images/feed/color_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/color.png" alt=""></span>
            <span><img class="focus_off" src="/assets/images/feed/lock_off.png" alt="">
                <img class="focus_on" src="/assets/images/feed/lock.png" alt=""></span>
        </div>
        <div class="style_section">
            <div class="style_detail_box font_family_box active">
                <p class="info">폰트의 종류를 선택하세요</p>
                <div class="item_font_family f_notoSans">
                    <input type="radio" id="family1" class="chk_blue" name="fontfamily" checked>
                    <label for="family1" class="chk_shape"></label>
                    <label for="family1" class="chk_txt">노토산즈 고딕체</label>
                </div>
                <div class="item_font_family f_notoSerif">
                    <input type="radio" id="family2" class="chk_blue" name="fontfamily">
                    <label for="family2" class="chk_shape"></label>
                    <label for="family2" class="chk_txt">노토산즈 명조체</label>
                </div>
                <div class="item_font_family f_nanumPen">
                    <input type="radio" id="family3" class="chk_blue" name="fontfamily">
                    <label for="family3" class="chk_shape"></label>
                    <label for="family3" class="chk_txt">나눔펜체</label>
                </div>
                <div class="item_font_family f_jua">
                    <input type="radio" id="family4" class="chk_blue" name="fontfamily">
                    <label for="family4" class="chk_shape"></label>
                    <label for="family4" class="chk_txt">주아체</label>
                </div>
            </div>
            <div class="style_detail_box">
                <p class="info">폰트의 크기를 선택하세요</p>
                <div class="slider_size">
                    <p id="custom-handle3" class="ui-slider-handle"></p>
                </div>
                <div class="slider_txt">
                    <span>10</span>
                    <span>30</span>
                </div>
            </div>
            <div class="style_detail_box align_box ">
                <p class="info">텍스트의 정렬을 설정하세요</p>
                <div class="align_type left focus">
                    <span>좌측</span>
                    <img class="focus_off" src="/assets/images/feed/align_left_off.png" alt="">
                    <img class="focus_on" src="/assets/images/feed/align_left.png" alt="">
                </div>
                <div class="align_type center">
                    <span>중앙</span>
                    <img class="focus_off" src="/assets/images/feed/align_middle_off.png" alt="">
                    <img class="focus_on" src="/assets/images/feed/align_middle.png" alt="">
                </div>
                <div class="align_type right">
                    <span>우측</span>
                    <img class="focus_off" src="/assets/images/feed/align_right_off.png" alt="">
                    <img class="focus_on" src="/assets/images/feed/align_right.png" alt="">
                </div>
            </div>
            <div class="style_detail_box style_bg_box">
                <p class="info">배경이미지를 선택하세요.<br> 이미지를 업로드 하거나 제공이미지 선택 혹은 컬러를 선택하세요</p>
                <div class="bg_setting">
                    <div class="feed_bg_img">
                        <span class="lb">이미지 업로드</span>
                        <span class="filetype">
                            <input type="text" class="file-text"/>
                            <span class="file-btn">파일등록</span>
                            <span class="file-select"><input type="file" class="input-file" id="bgCustom" size="3"></span>
                        </span>
                    </div>
                    <div class="feed_bg_default">
                        <span class="lb">이미지 선택</span>
                        <div class="bg_default_img">
                            <p class="focus"><img src="/assets/images/feed/bg1.png" alt=""></p>
                            <p><img src="/assets/images/feed/bg2.png" alt=""></p>
                            <p><img src="/assets/images/feed/bg3.png" alt=""></p>
                            <p><img src="/assets/images/feed/bg4.png" alt=""></p>
                            <p><img src="/assets/images/feed/bg5.png" alt=""></p>
                            <p><img src="/assets/images/feed/bg6.png" alt=""></p>
                        </div>
                    </div>
                    <div class="feed_bg_color">
                        <span class="lb">컬러 선택 </span>
                        <div class="bg_color">
                            <p class="color1"></p>
                            <p class="color2"></p>
                            <p class="color3"></p>
                            <p class="color4"></p>
                            <p class="color5"></p>
                            <p class="color6"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="style_detail_box">
                <p class="info">배경의 투명도를 설정하세요</p>
                <div class="slider_opacity"><p id="custom-handle4" class="ui-slider-handle"></p></div>
                <div class="slider_txt">
                    <span>10</span>
                    <span>100</span>
                </div>
            </div>
            <div class="style_detail_box style_color_box">
                <p class="info">텍스트의 컬러를 선택하세요</p>
                <div class="font_color">
                    <p class="color1 focus"></p>
                    <p class="color2"></p>
                    <p class="color3"></p>
                    <p class="color4"></p>
                    <p class="color5"></p>
                    <p class="color6"></p>
                    <p class="color7"></p>
                    <p class="color8"></p>
                    <p class="color9"></p>
                    <p class="color10"></p>
                    <p class="color11"></p>
                    <p class="color12"></p>
                    <p class="color13"></p>
                </div>
            </div>
            <div class="style_detail_box none_person_box">
                <p class="info">감사카드의 익명여부를 설정하세요</p>
                <p class="none_person">익명여부</p>
                <span class="alarm_status">ON</span>
                <p class="box_icon_alarm">
                    <span></span>
                </p>
                <span class="alarm_status">OFF</span>
            </div>

        </div>
        <div class="btn_group">
            <button class="btn_blue">설정완료</button>
        </div>
    </div>
    </form>
</div>
<script>
    /*파일업로드*/
    var $fileBox = $('.filetype');

    $fileBox.each(function () {
        var $fileUpload = $(this).find('.input-file'),
            $fileText = $(this).find('.file-text')
        $fileUpload.on('change', function () {
            var fileName = $(this).val();
            $fileText.attr('disabled', 'disabled').val(fileName);
        })
    })

    /*style type*/
    $(".style_type_box span").click(function () {
        $(".style_type_box span").removeClass("focus");
        $(this).addClass("focus");
        /*style choice*/
        var indexStyle = $(this).index() + 1;
        $(".style_section .style_detail_box").removeClass("active");
        $(".style_section .style_detail_box:nth-child(" + indexStyle + ")").addClass("active");
    });
    /*font family*/
    $(".item_font_family .chk_blue").click(function () {
        var fontFamily = $(this).parents(".item_font_family");
        if (fontFamily.hasClass("f_notoSerif") == true) {
            $(".txt_feed").css({"font-family": "'NotoSerifKR',serif"})
        } else if (fontFamily.hasClass("f_nanumPen") == true) {
            $(".txt_feed").css({"font-family": "'Nanum Pen Script', cursive"})
        } else if (fontFamily.hasClass("f_notoSans") == true) {
            $(".txt_feed").css({"font-family": "'Noto Sans KR', sans-serif"})
        } else if (fontFamily.hasClass("f_jua") == true) {
            $(".txt_feed").css({"font-family": "'Jua', sans-serif"})
        }

        console.log(fontFamily);
    });

    /*font size*/
    var handle = $("#custom-handle3");
    $(".slider_size").slider({
        min: 10,
        max: 30,
        value: 16,
        change: function (event, ui) {
            var valueSize = ui.value;
            $(".txt_feed").css({"font-size": valueSize + "px"})
        },
        create: function () {
            handle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });
    var handle2 = $("#custom-handle4");
    $(".slider_opacity").slider({
        min: 10,
        max: 100,
        value: 100,
        change: function (event, ui) {
            var valueSize = ui.value;
            var calcOpacity = valueSize/100;
            $(".bg_card").css({"opacity": calcOpacity})
        },
        create: function () {
            handle2.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle2.text(ui.value);
        }
    });

    /*text align*/
    $(".align_type").click(function () {
        var txtAlign = $(this);
        $(".align_type").removeClass("focus");
        $(this).addClass("focus");
        if (txtAlign.hasClass("left") == true) {
            $(".txt_feed").css({"text-align": "left"});
        } else if (txtAlign.hasClass("center") == true) {
            $(".txt_feed").css({"text-align": "center"});
        } else if (txtAlign.hasClass("right") == true) {
            $(".txt_feed").css({"text-align": "right"});
        }
    });

    /*image upload*/
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#feedBg').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#bgCustom").change(function() {
        $(".bg_default_img p").removeClass("focus");
        $(".bg_color p").removeClass("focus");
        $("#feedBg").css({"background-color":"transparent"});
        readURL(this);
    });
    /*bg image choice*/
    $(".bg_default_img p").click(function () {
        $(".bg_default_img p").removeClass("focus");
        $(".bg_color p").removeClass("focus");
        $("#feedBg").css({"background-color":"transparent"});
        $(this).addClass("focus");
        $("#bgCustom").val("");
        var defaultBg = $(this).find("img").attr('src');
        $("#feedBg").attr('src',defaultBg);
    });
    /*bg color choice*/
    $(".bg_color p").click(function () {
        $(".bg_color p").removeClass("focus");
        $(".bg_default_img p").removeClass("focus");
        $(this).addClass("focus");
        $("#bgCustom").val("");
        var colorBg = $(this).css('background');
        $("#feedBg").attr('src','');
        $("#feedBg").css({"background-color":colorBg});
    });

    /*font color choice*/
    $(".font_color p").click(function () {
        $(".font_color p").removeClass("focus");
        $(this).addClass("focus");
        var colorFont = $(this).css('background');
        $(".txt_feed").css({"color":colorFont});
    });

    /*none person*/
    $(".box_icon_alarm").click(function () {
        $(this).toggleClass("active");
    });

    /*mobile card area*/
    function feedCard(x) {
        if (x.matches) {
            var widthCard = $(".my_feed_contents").outerWidth();
            $(".my_feed_contents").css({"height":widthCard+"px"});
        } else {

        }
    }
    var x = window.matchMedia("(max-width: 650px)")
    feedCard(x)
    x.addListener(feedCard)
</script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>
