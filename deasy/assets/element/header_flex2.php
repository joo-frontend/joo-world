<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="canonical" href="URL입력">
    <title>Deasy</title>
    <!--style-->
    <link rel="stylesheet" href="/assets/js/date-range-picker-master/dist/daterangepicker.css">
    <link rel="stylesheet" href="/assets/css/all.css">
    <link rel="stylesheet" href="/assets/js/swiper-master/dist/css/swiper.min.css">
    <link rel="stylesheet" href="/assets/js/dropzone/dropzone.css">
    <!--js-->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
    <script src="/assets/js/jquery.ui.touch-punch.min.js"></script>
    <!--calendar-->
    <script src="/assets/js/fullcalendar-3.9.0/lib/moment.min.js"></script>
    <script src="/assets/js/date-range-picker-master/dist/jquery.daterangepicker.min.js"></script>
</head>
<body>
<div class="wra">
    <div class="header_wra header_flex_wrap2">
        <div class="header_area">
            <div class="btn_m_menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="m_menu_side">
                <div class="top_m_menu">
                    <!--login 후-->
                    <!--<div class="my_profile">
                        <a href="/sub/mypage/history_bidding.php" class="mypage_link"><img src="/assets/images/header/mypage.png" alt=""></a>
                        <p class="id_txt"><a href="/sub/mypage/history_bidding.php" class="f_mont">DK BROTHERS</a>님</p>
                        <a href="#" class="logout"><img src="/assets/images/header/logout.png" alt=""></a>
                    </div>
                    <div class="my_info_preview">
                        <span class="label f_mont">DK Point</span>
                        <span class="point f_mont">500</span>
                    </div>
                    <div class="my_info_preview">
                        <span class="label f_mont">My Project</span>
                        <div class="prjct_status">
                            <p>검토 중 <strong class="f_mont">5</strong></p>
                            <p>계약완료 <strong class="f_mont">2</strong></p>
                        </div>
                    </div>-->
                    <!--login 전-->
                    <div class="my_profile">
                        <a href="/sub/login/login.php" class="link_login">LOGIN</a>
                        <a href="/sub/login/signup_home.php" class="link_login">JOIN</a>
                    </div>
                </div>
                <div class="content_m_menu">
                    <ul>
                        <li><a href="/sub/bidding/bidding_home.php">공개입찰</a></li>
                        <li><a href="/sub/partner/partner_home.php">추천 파트너</a></li>
                        <li><a href="/sub/myproject/project_list.php">내 프로젝트</a></li>
                        <li><a href="/sub/about/about.php" class="f_mont">ABOUT</a></li>
                        <li><a href="/sub/customer/location.php" class="f_mont">CONTACT</a></li>
                        <li class="pm_step_btn"><a href="/sub/pm/pm_step1.php">PM에게 빠른 미팅신청</a></li>
                    </ul>
                </div>
                <div class="bottom_m_menu">
                    <div class="dk_info">
                        <div class="dk_box">
                            <p class="tel"><img src="/assets/images/header/call.png" alt=""><span>1500-1234</span></p>
                            <p class="mail"><img src="/assets/images/header/mail.png" alt=""><span>dkbrothers@gmail.com</span></p>
                            <p class="time"><img src="/assets/images/header/time.png" alt=""><span>AM 10:00  -  PM 19:00</span></p>
                        </div>
                    </div>
                    <a href="#" class="term">이용약관</a>
                </div>
            </div>
            <div class="bg_black bg_blackSide"></div>
            <a href="/index.php" class="logo_box"><img src="/assets/images/header/header_logo.png" alt=""></a>
            <ul class="clearfix gnb_header">
                <li class="focus"><a href="/sub/bidding/bidding_home.php">공개입찰</a></li>
                <!--<li><a href="#">DK 상품</a></li>-->
                <li><a href="/sub/partner/partner_home.php">추천 파트너</a></li>
                <li><a href="/sub/myproject/project_list.php">내 프로젝트</a></li>
                <li><a href="/sub/about/about.php">ABOUT</a></li>
                <li><a href="/sub/customer/location.php">CONTACT</a></li>
                <!--<li><a href="#" class="ask_menu"><img src="/assets/images/project/P1/ask_whitebg.png" alt="">1:1문의</a></li>-->
            </ul>
            <div class="icon_gnb">
                <ul class="clearfix">
                    <li class="pm_step_btn"><a href="/sub/pm/pm_step1.php">PM에게 빠른 미팅신청</a></li>
                    <li class="search_header_btn"><a href="#">
                            <img class="hover_off" src="/assets/images/project/P1/header_search.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P1/header_search_on.png" alt="">
                        </a></li>
                    <!--login전-->

                      <li class="login_menu"><a href="/sub/login/signup.php">JOIN</a></li>
                    <li class="login_menu"><a href="/sub/login/login.php">LOGIN</a></li>

                    <!--login후-->
                    <!--<li class="alarm_menu alarm_new"><a href="#">
                            <img class="hover_off" src="/assets/images/project/P1/header_notice.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P1/header_notice_on.png" alt="">
                        </a></li>-->
                    <!--<li class="mypage_menu"><a href="/sub/mypage/history_bidding.php">
                            <img class="hover_off" src="/assets/images/project/P1/header_mypage.png" alt="">
                            <img class="hover_on" src="/assets/images/project/P1/header_mypage_on.png" alt="">
                        </a></li>
                    <li class="logout_menu"><a href="">LOGOUT</a></li>-->
                </ul>
            </div>
            <div class="searchHeader_section">
                <a href="#" class="close_pop_mb"><img src="/assets/images/project/P10/close.png" alt=""></a>
                <div class="search_top_box">
                    <p>
                        <input type="text" placeholder="검색어를 입력하세요" class="textbox_search">
                        <button type="button" onclick="window.location.href='/search_result.php'"><img src="/assets/images/project/P1/search.png" alt=""></button>
                    </p>
                </div>
            </div>
            <div class="bg_black bg_blackSearch"></div>
            <div class="alarm_section">
                <div class="alarm_box">
                    <ul>
                        <li>
                            <p class="type_alarm"><img src="/assets/images/project/P2/message.png" alt=""></p>
                            <div class="contents_alarm">
                                <p class="title"><a href="#">DK BROTHERS</a>님의 메세지 <i class="new_icon">N</i></p>
                                <a href="#" class="detail">로고 제작만 의뢰하시는 건가요?</a>
                                <p class="date">2018.07.27</p>
                            </div>
                        </li>
                        <li>
                            <p class="type_alarm"><img src="/assets/images/project/P2/message.png" alt=""></p>
                            <div class="contents_alarm">
                                <p class="title"><a href="#">CDR.ASSOCIATES</a>님의 메세지 <i class="new_icon">N</i></p>
                                <a href="#" class="detail">네 안녕하세요. 답변이 늦어서 죄송합니다. 견적과 같은 견적과 같은</a>
                                <p class="date">2018.07.27</p>
                            </div>
                        </li>
                        <li>
                            <p class="type_alarm"><img src="/assets/images/project/P2/comment.png" alt=""></p>
                            <div class="contents_alarm">
                                <p class="title"><a href="#">PLUS.X</a>님의 댓글</p>
                                <a href="#" class="detail">브리핑 내용 문의드립니다</a>
                                <p class="date">2018.07.26</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
