<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="canonical" href="URL입력">
    <title>집고</title>
    <!--style-->
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/js/dropzone/dropzone.css">
    <link rel="stylesheet" href="/assets/js/swiper-master/dist/css/swiper.min.css">
    <!--font-->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css">
    <!--js-->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
</head>
<body>
<div class="wra">
    <div class="header_wra header_type1_wra header_type3_wra">
        <div class="header_area">
            <a href="/index.php" class="logo">logo</a>
            <ul class="gnb_left">
                <li class="focus"><a href="/sub/review/review_home.php">시공사례</a></li>
                <li ><a href="/sub/agency/agency_home.php">시공업체</a></li>
            </ul>
            <div class="right_menu_header">
                <div class="location">
                    <img src="/assets/images/common/location.png" alt="">
                    <span>서울 강남</span>
                </div>
                <a href="#" class="sh_menu"><img src="/assets/images/common/search2.png" alt=""></a>
                <div class="side_open_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <!--검색창-->
        <div class="search_area">
            <div class="search_frm_header">
                <a href="" class="close_search"><img src="/assets/images/search/close.png" alt=""></a>
                <form action="/sub/search/sh_result.php">
                    <div class="search_box">
                        <input type="text" class="searchbox" placeholder="검색어를 입력하세요">
                        <button><img src="/assets/images/search/search.png" alt=""></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container">

        <!--팝업 사업자프로필-->
        <div class="pop_full pop_profile_company">
            <div class="pop_profile_box">
                <span class="close_pop"><img src="/assets/images/common/close_1.png" alt=""></span>
                <div class="profile_preview">
                    <div class="name_box">
                        <span class="pf_img"><img src="/assets/images/temp/temp_a7.jpg" alt=""></span>
                        <span class="txt">집고맨인테리어</span>
                    </div>
                    <div class="link_my">
                        <a href="/sub/agency/agency_detail.php">업체 정보 ></a>
                        <a href="/sub_partner/mypage/mypage_build.php">마이페이지 ></a>
                    </div>
                </div>
                <div class="project_status">
                    <div class="status_item">
                        <p class="lb">매칭 중</p>
                        <p class="num">10</p>
                    </div>
                    <div class="status_item">
                        <p class="lb">매칭완료</p>
                        <p class="num">3</p>
                    </div>
                    <div class="status_item">
                        <p class="lb">등록된 리뷰</p>
                        <p class="num">1</p>
                    </div>
                </div>
                <div class="logout_btn">
                    <button>로그이웃</button>
                </div>
                <!--반응형 메뉴-->
                <div class="mb_gnb">
                    <ul>
                        <li><a href="/index.php">홈</a></li>
                        <li><a href="/sub/review/review_home.php">시공후기</a></li>
                        <li><a href="/sub/agency/agency_home.php">시공업체</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--팝업 개인프로필-->
        <div class="pop_full pop_profile_personal">
            <div class="pop_profile_box">
                <span class="close_pop"><img src="/assets/images/common/close_1.png" alt=""></span>
                <div class="profile_preview">
                    <div class="name_box">
                        <span class="pf_img"><img src="/assets/images/temp/temp_a8.jpg" alt=""></span>
                        <span class="txt">개인 ID</span>
                    </div>
                    <div class="link_my">
                        <a href="/sub/mypage/mypage_estimate.php">마이페이지 ></a>
                    </div>
                </div>
                <div class="project_status">
                    <div class="status_item">
                        <p class="lb">매칭 전</p>
                        <p class="num">2</p>
                    </div>
                    <div class="status_item">
                        <p class="lb">매칭 중</p>
                        <p class="num">1</p>
                    </div>
                </div>
                <div class="logout_btn">
                    <button>로그이웃</button>
                </div>
                <!--반응형 메뉴-->
                <div class="mb_gnb">
                    <ul>
                        <li><a href="/index.php">홈</a></li>
                        <li><a href="/sub/review/review_home.php">시공후기</a></li>
                        <li><a href="/sub/agency/agency_home.php">시공업체</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--팝업 로그인안내-->
        <div class="pop_full pop_login_info">
            <div class="pop_login_box">
                <span class="close_pop"><img src="/assets/images/common/close_1.png" alt=""></span>
                <div class="msg_login">
                    <p class="desc">로그인을 해주세요!</p>
                    <p class="etc">아직 회원이 아니세요?<br>
                        집고의 회원이 되어 집고의 다양한 서비스를 이용해보세요</p>
                </div>
                <div class="member_btn">
                    <button type="button" onclick="window.location.href='/sub/member/login.php'">로그인</button>
                    <button type="button" onclick="window.location.href='/sub/member/join.php'" class="btn_gray">회원가입</button>
                </div>
                <!--반응형 메뉴-->
                <div class="mb_gnb">
                    <ul>
                        <li><a href="/index.php">홈</a></li>
                        <li><a href="/sub/review/review_home.php">시공후기</a></li>
                        <li><a href="/sub/agency/agency_home.php">시공업체</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <script>
            $(".side_open_menu").click(function () {
                $(".pop_profile_company").show();
                $("body").addClass("modal-open");
                $(".pop_profile_company .close_pop").click(function () {
                    $(".pop_profile_company").hide();
                    $("body").removeClass("modal-open");
                });
            });
        </script>