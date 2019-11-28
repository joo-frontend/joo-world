<?php   require_once('/DK/hosting_users/thanksgoods/www/_DK/hello.php');
 $session = new session();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="canonical" href="URL입력">
    <title>ThanksGoods</title>
    <!--css-->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/js/swiper-4.3.3/dist/css/swiper.min.css">
    <!--js-->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
</head>
<body>
<div class="wra">
    <div class="header_wra header_gradient_wra">
        <div class="header_area">
            <a href="/sub/calendar/calendar.php" class="logo_header"><img src="/assets/images/calendar/bi.png" alt=""></a>
            <a href="/sub/calendar/calendar.php" class="logo_header gradient"><img src="/assets/images/common/logo_white.png" alt=""></a>
            <div class="gnb">
                <ul class="clearfix">
                    <li class="focus"><a href="/sub/calendar/calendar.php">Calendar</a></li>
                    <li><a href="/sub/feed/feed_home_list.php">Thanks Feed</a></li>
                    <li><a href="/sub/point/my_point.php">Thanks Point</a></li>
                    <li><a href="/sub/feed/my_feed.php">My Thanks</a></li>
                    <li><a href="/sub/group/group_home.php">Thanks Group</a></li>
                    <li><a href="/sub/market/market_home.php">Thanks Market</a></li>
                </ul>
            </div>
            <?php if($session->usCheck()){?>
            <div class="right_menu">
                <ul class="clearfix">
                    <li class="right_item searchM"><a href="#">
                            <img class="hover_off" src="/assets/images/calendar/search_off.png" alt="">
                            <img class="hover_on" src="/assets/images/calendar/search.png" alt="">
                        </a></li>
                    <li class="right_item cartM"><a href="/sub/mypage/cart.php">
                            <img class="hover_off" src="/assets/images/calendar/cart_off.png" alt="">
                            <img class="hover_on" src="/assets/images/calendar/cart.png" alt="">
                            <span class="numCart">3</span>
                        </a></li>
                    <li class="right_item myM">
                            <p><img src="/assets/images/calendar/profile.png" alt=""></p>
                            <ul class="submenu">
                                <li><a href="#">
                                        <img class="hover_off" src="/assets/images/calendar/setting_off.png" alt="">
                                        <img class="hover_on" src="/assets/images/calendar/setting.png" alt="">
                                        내정보 수정
                                    </a></li>
                                <li><a href="/sub/member/logout.php">
                                        <img class="hover_off" src="/assets/images/calendar/logout_off.png" alt="">
                                        <img class="hover_on" src="/assets/images/calendar/logout.png" alt="">
                                        로그아웃
                                    </a></li>
                            </ul>
                       </li>
                </ul>
            </div>
        <?php } ?>
            <div class="right_menu right_menu_white">
                <ul class="clearfix">
                    <li class="right_item searchM"><a href="#">
                            <img class="hover_off" src="/assets/images/common/search.png" alt="">
                        </a></li>
                    <li class="right_item cartM"><a href="/sub/mypage/cart.php">
                            <img class="hover_off" src="/assets/images/common/cart_white.png" alt="">
                            <span class="numCart">3</span>
                        </a></li>
                </ul>
            </div>

            <div class="menu_icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="sub_menu">
                <a class="user_login" href="#"><img src="/assets/images/calendar/logout.png" alt="">Logout</a>
                <ul>
                    <li class="focus"><a href="/sub/calendar/calendar.php">Calendar</a></li>
                    <li><a href="/sub/feed/feed_home_list.php">Thanks Feed</a></li>
                    <li><a href="/sub/point/my_point.php">Thanks Point</a></li>
                    <li><a href="/sub/feed/my_feed.php">My Thanks</a></li>
                    <!--<li><a href="/sub/group/group_home.php">Thanks Group</a></li>-->
                    <li><a href="/sub/market/market_home.php">Thanks Market</a></li>
                </ul>
                <div class="customer_menu">
                    <a href="/sub/mypage/myorder.php" class="link_chk_my">주문·배송 조회</a>
                    <div class="center"><a href="/sub/customer/term.php">이용약관</a></div>
                    <div class="center"><a href="/sub/customer/customer_center.php">고객센터</a>
                        <div class="call">
                            <p><img src="/assets/images/center/tell.png" alt="">1500-0000</p>
                            <p><img src="/assets/images/center/time.png" alt="">10:00-18:00</p>
                        </div>
                    </div>
                    <div class="center active"><a href="/sub/customer/faq.php">FAQ </a></div>
                </div>
            </div>
            <div class="bg_black"></div>
        </div>

    </div>
    <div class="search_wra">
        <div class="search_area">
            <form>
            <a href="#" class="close_search"><img src="/assets/images/common/close.png" alt=""></a>
            <p class="search_keyword">검색어를 입력하세요</p>
            <p class="search_input"><input type="text" class="textbox textbox_search">
            <button><img src="/assets/images/common/search.png" alt=""></button></p>
            </form>
        </div>
    </div>

    <div class="container">