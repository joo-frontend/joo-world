<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>KII</title>
    <!--css-->
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/js/Swiper-3.4.2/dist/css/swiper.min.css">
    <!--js-->
    <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="/assets/js/jquery-1.11.2.min.js"></script>
</head>
<body>
<div class="wra">
    <div class="header_wra">
        <div class="header_area">
            <a href="/index.php" class="logo"><img class="logo_pc" src="/assets/images/about/logo_header.png" alt=""><img class="logo_mobile" src="/assets/images/main/logo_header.png" alt=""></a>
            <ul class="gnb clearfix">
                <li class="focus"><a href="/index.php">HOME</a></li>
                <li><a href="/sub/technology.php">TECHNOLOGY</a></li>
                <li><a href="/sub/customer.php">CUSTOMER</a></li>
                <li><a href="/sub/newsroom.php">NEWSROOM</a></li>
                <li><a href="https://www.kiiface.com/" target="_blank">SDK DEMO</a></li>
                <li><a href="/sub/about.php">ABOUT US</a></li>
                <li><a href="/sub/contact.php">CONTACT</a></li>
            </ul>
            <div class="menu_icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="gnb_mobile clearfix">
                <li class="focus"><a href="/index.php">HOME</a></li>
                <li><a href="/sub/technology.php">TECHNOLOGY</a></li>
                <li><a href="/sub/customer.php">CUSTOMER</a></li>
                <li><a href="/sub/newsroom.php">NEWSROOM</a></li>
                <li><a href="https://www.kiiface.com/" target="_blank">SDK DEMO</a></li>
                <li><a href="/sub/about.php">ABOUT US</a></li>
                <li><a href="/sub/contact.php">CONTACT</a></li>
            </ul>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            $(".menu_icon").click(function () {
                $(this).toggleClass("open",200);
                $(".header_wra").toggleClass("open_mb");
            });
        });
    </script>