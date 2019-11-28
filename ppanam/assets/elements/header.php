<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="format-detection" content="telephone=no"/>
    <title>빠남</title>
    <link rel="stylesheet" href="/assets/js/swiper-master/dist/css/swiper.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <!--js-->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>

</head>
<body>
<div class="wra">
    <div class="header_wra">
        <div class="header_area">
            <div class="menu_icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="m_menu_box">
                <div class="top_menuBox">
                    <a href="/index.php" class="logo_m"><img src="/assets/images/main/logo_color.png" alt=""></a>
                    <div class="lang_box">
                        <a href="#" class="kor focus">
                            <img class="focus_off" src="/assets/images/main/korean_off.png" alt="">
                            <img class="focus_on" src="/assets/images/main/korean_on.png" alt="">
                        </a>
                        <a href="#" class="eng">
                            <img class="focus_off" src="/assets/images/main/english_off.png" alt="">
                            <img class="focus_on" src="/assets/images/main/english_on.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="m_gnb">
                    <ul>
                        <li class="item_side_m">
                            <a href="#" class="sub_menu"><span>ABOUT</span></a>
                            <ul>
                                <li class="item_sub"><a href="/sub/about.php?hash=1">PRESENTATION</a></li>
                                <li class="item_sub"><a href="/sub/about.php?hash=2">VISION & IDENTITY</a></li>
                                <li class="item_sub"><a href="/sub/about.php?hash=3">HISTORY</a></li>
                                <li class="item_sub"><a href="/sub/about.php?hash=4">CEO&TEAM</a></li>
                            </ul>
                        </li>
                        <li class="item_side_m">
                            <a href="#" class="sub_menu"><span>SERVICE</span></a>
                            <ul>
                                <li class="item_sub"><a href="/sub/service.php?hash=5">PLATFORM</a></li>
                                <li class="item_sub"><a href="/sub/service.php?hash=6">INFLUENCER MARKETING</a></li>
                                <li class="item_sub"><a href="/sub/service.php?hash=7">BRANDED VIDEO</a></li>
                                <li class="item_sub"><a href="/sub/service.php?hash=8">B2B SERVICE</a></li>
                            </ul>
                        </li>
                        <li class="item_side_m"><a href="/sub/news.php"><span>NEWS</span></a></li>
                        <li class="item_side_m"><a href="/sub/contact.php"><span>CONTACT</span></a></li>
                    </ul>
                </div>
                <div class="bottom_menuBox">
                    <div class="sns_channel">
                        <a href="https://www.youtube.com/channel/UCRIecHkZoVzOOpwPzH7FQVw" target="_blank"><img src="/assets/images/main/youtube_gray.png" alt=""></a>
                        <a href="https://www.instagram.com/ppanam_official/?hl=ko" target="_blank"><img src="/assets/images/main/instagram_gray.png" alt=""></a>
                    </div>
                   <!-- <div class="info_c"><a href="#">이용약관</a></div>
                    <div class="info_c"><a href="#">고객센터 <span>1500-0000</span></a></div>
                    <div class="info_c"><a href="#">FAQ</a></div>-->
                </div>

            </div>
            <div class="bg_cover"></div>
            <div class="left_menuBox">
            <a href="/index.php" class="logo"><img src="/assets/images/main/logo_color.png" alt=""></a>
            <div class="gnb">
                <ul>
                    <li class="focus"><a href="/sub/about.php">ABOUT</a></li>
                    <li><a href="/sub/service.php">SERVICE</a></li>
                    <li><a href="/sub/news.php">NEWS</a></li>
                    <li><a href="/sub/contact.php">CONTACT</a></li>
                </ul>
            </div>
            </div>
            <div class="right_menuBox">
               <!-- <a href="#" class="search"><img src="/assets/images/main/search_black.png" alt=""></a>-->
                <div class="lang_box">
                    <a href="#" class="kor focus">
                        <img class="focus_off" src="/assets/images/main/korean_off.png" alt="">
                        <img class="focus_on" src="/assets/images/main/korean_on.png" alt="">
                    </a>
                    <a href="#" class="eng">
                        <img class="focus_off" src="/assets/images/main/english_off.png" alt="">
                        <img class="focus_on" src="/assets/images/main/english_on.png" alt="">
                    </a>

                </div>
            </div>
        </div>
    </div>
   <!-- <div class="search_wra">
        <p class="close_pop"><img src="/assets/images/main/close_pop.png" alt=""></p>
        <div class="search_area">
            <p class="desc">검색어를 입력하세요</p>
            <form>
                <p class="search_content">
                    <input type="text" class="textbox textbox_search">
                    <button class="btn_search"><img src="/assets/images/main/search_black.png" alt=""></button>
                </p>
            </form>
        </div>
    </div>-->
    <div class="bg_cover"></div>

    <script>
        $(".right_menuBox .search").click(function () {
            $(".search_wra").addClass("active");
            $(".search_wra .close_pop").click(function () {
                $(".search_wra").removeClass("active");
            });
        });
    </script>