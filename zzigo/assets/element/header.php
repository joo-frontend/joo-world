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
    <title>찍오</title>
    <!--css-->
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/js/dropzone/dropzone.css">
    <link rel="stylesheet" href="/assets/js/swiper-master/dist/css/swiper.min.css">
    <!--js-->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
</head>
<body>
<div class="wra">
    <div class="header_wra">
        <div class="header_area">
            <a href="/index.php" class="logo"><img src="/assets/images/main/header_logo.png" alt=""></a>
            <div class="gnb">
                <ul>
                    <li><a href="/sub/album/list_album.php">앨범 만들기</a></li>
                    <li><a href="/sub/cloud/cloud.php">클라우드</a></li>
                </ul>
            </div>
            <div class="right_menu">
                <div class="section_member_menu">
                    <a href="#" onclick="loginPop()">Login</a>
                    <a href="/sub/member/join.php">Join</a>
                </div>
                <div class="section_icon_menu">
                    <a href="#" class="searchM">
                        <img class="focus_off" src="/assets/images/header/header_sh_icon.png" alt="">
                        <img class="focus_on" src="/assets/images/header/search_focus.png" alt="">
                    </a>
                    <a href="/sub/cart/cart.php" class="cartM"><img src="/assets/images/header/header_cart_icon.png" alt=""></a>
                    <a href="/sub/mypage/mypage_order.php" class="mypage"><img src="/assets/images/header/header_my_icon.png" alt=""></a>
                    <div class="mb_menu_icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="side_menuM">
        <!--로그인 전-->
        <div class="top_my_profile" style="display: none;">
            <p class="intro">이용하시려면 로그인하세요.</p>
            <p class="delivery_info_my">찍오만의 다양한 혜택이<br>
                기다리고 있습니다.</p>
            <div class="link_my_account">
                <p onclick="loginPop()" class="link_long">Login</p>
            </div>
        </div>
        <!--로그인 후-->
        <div class="top_my_profile" >
            <a href="/sub/mypage/mypage_alarm.php" class="alarm_my new">
                <img src="/assets/images/header/alarm.png" alt="">
            </a>
            <p class="intro">박기훈님, 반가워요</p>
            <p class="delivery_info_my">주문하신 <span>포토북/8x8 외 1개 상품</span>이<br>
                <span class="line">배송중</span> 입니다.</p>
            <div class="link_my_account">
                <a href="/sub/mypage/mypage_order.php">마이페이지</a>
                <a href="">Logout</a>
            </div>
        </div>
        <div class="list_menu">
            <ul>
                <li class="focus"><a href="/sub/album/list_album.php">SHOP</a></li>
                <li><a href="">AI 앨범제작</a></li>
                <li><a href="/sub/mypage/mypage_designer_register.php">디자인 판매자 등록</a></li>
                <li><a href="/sub/cloud/cloud.php">My 클라우드</a></li>
                <li><a href="">환경설정</a></li>
                <li><a href="">공지사항 및 이벤트</a></li>
                <li><a href="">고객센터</a></li>
            </ul>
        </div>
        <div class="bottom_icon_menu">
            <a href="/index.php"><img src="/assets/images/header/side1.png" alt=""></a>
            <a href="" class="search_mb"><img src="/assets/images/header/side2.png" alt=""></a>
            <a href="/sub/cart/cart.php"><img src="/assets/images/header/side3.png" alt=""></a>
            <a href=""><img src="/assets/images/header/side4.png" alt=""></a>
        </div>
    </div>
    <div class="bg_black_menu"></div>
    <!--검색창-->
    <div class="search_wra">
        <div class="search_area">
            <span class="close_search"><img src="/assets/images/all/close_pop.png" alt=""></span>
            <div class="search_txt">
                <form name="searchFrm" action="/sub/search/search_result.php">
                    <input type="text" class="search_textbox" name="searchTxt" placeholder="검색어를 입력하세요">
                    <button type="button" onclick="searchUser()" class="search_btn"><img src="/assets/images/header/header_sh_icon.png" alt=""></button>
                    <button type="submit" class="hide_submit"></button>
                </form>
            </div>
        </div>
    </div>
    <div class="bg_black bg_search"></div>
    <div class="container">
        <!--팝업-로그인-->
        <div class="pop pop_login">
            <div class="popup">
                <span class="close_pop"><img src="/assets/images/all/close_pop.png" alt=""></span>
                <form name="loginFrm" action="/index.php">
                    <div class="login_area">
                        <h1 class="login_logo"><img src="/assets/images/main/header_logo.png" alt=""></h1>
                        <div class="login_box">
                            <p class="title">LOGIN</p>
                            <!--
                            계정 정보 오류시 'item_login'에
                            'error' class 추가
                            -->
                            <div class="item_login id">
                                <input type="email" placeholder="이메일 아이디" name="loginID" class="login_textbox">
                                <p class="error_msg">이메일 계정을 입력해주세요</p>
                                <p class="error_icon"><img src="/assets/images/join/join_sec_icon.png" alt=""></p>
                            </div>
                            <div class="item_login pw">
                                <input type="password" placeholder="패스워드" name="loginPW" class="login_textbox">
                                <p class="error_msg">패스워드를 입력해주세요</p>
                                <p class="error_icon"><img src="/assets/images/join/join_sec_icon.png" alt=""></p>
                            </div>
                            <div class="remember_id">
                                <input type="checkbox" class="chkbox" id="saveId" name="saveId">
                                <label for="saveId" class="chkShape"></label>
                                <label for="saveId" class="chkTxt">아이디 저장</label>
                            </div>


                            <div class="between_line"></div>
                            <div class="password_find">
                                <p class="chkTxt" onclick="findPwPop()">비밀번호 찾기</p>
                            </div>


                        </div>
                        <!--                        <div class="member_btn_box">-->
                        <!--                            <a href="/sub/member/join.php" class="btn btn_black">회원가입</a>-->
                        <!--                            <a href="#" class="btn">아이디 찾기</a>-->
                        <!--                            <a href="#" onclick="findPwPop()" class="btn">비밀번호 찾기</a>-->
                        <!--                        </div>-->

                        <div class="email_join_box">
                            <a href="/sub/member/join.php">이메일로 회원가입하기</a>
                        </div>
                    </div>
                    <div class="login_btn_box">
                        <button type="button" onclick="login()" class="login_btn f_ubun">로그인</button>
                    </div>
                </form>
            </div>
        </div>
        <!--팝업-비밀번호찾기-->
        <div class="pop pop_find_pw">
            <div class="popup">
                <span class="close_pop"><img src="/assets/images/all/close_pop.png" alt=""></span>
                <h1 class="login_logo"><img src="/assets/images/header/logo.png" alt=""></h1>
                <p class="title">비밀번호 찾기</p>
                <div class="find_member_box">
                    <input type="email" class="find_textbox" name="findId" placeholder="이메일 아이디">
                    <input type="text" class="find_textbox" name="findName" placeholder="이름">
                    <div class="find_msg notice_mgs01">
                        <p class="lb">유의사항</p>
                        <p class="desc">이메일 확인이 불가능한 경우, 고객센터로 연락주시기 바랍니다.<br>
                            회원님의 이메일 주소로 임시 비밀번호가 발송됩니다.<br>
                            로그인 후 비밀번호를 꼭 변경해 주세요.</p>
                    </div>
                    <button class="send_temp_pw">임시비밀번호 전송하기</button>
                    <div class="find_msg notice_mgs02">
                        <p class="lb">유의사항</p>
                        <p class="desc">
                            이메일 확인이 불가능한 경우,<br/>
                            고객센터로 연락주시기 바랍니다.<br>
                            회원님의 이메일 주소로 임시 비밀번호가 발송됩니다.<br>
                            로그인 후 비밀번호를 꼭 변경해 주세요.</p>
                    </div>
                </div>
            </div>
        </div>
        <script>
            function loginPop() {
                var loginFrm = document.loginFrm;
                loginFrm.loginID.value = '';
                loginFrm.loginPW.value = '';
                $(".pop.pop_login").show();
                $(".pop.pop_alert_login").hide();
                $(".side_menuM").removeClass("active");
                $(".pop.pop_login .close_pop").click(function () {
                    $(".pop.pop_login").hide();
                    loginFrm.loginID.value = '';
                    loginFrm.loginPW.value = '';
                });

                return false;
            }
            function findPwPop() {
                $(".pop.pop_find_pw").show();
                $(".pop.pop_find_pw .close_pop").click(function () {
                    $(".pop.pop_find_pw").hide();
                });
                return false;
            }
            function login() {
                var form = document.loginFrm;
                if(form.loginID.value == ''){
                    $(".item_login.id").addClass("error");
                    $(".item_login.pw").removeClass("error");
                    form.loginID.focus();
                    return;
                } else {
                    $(".item_login.id").removeClass("error");
                }
                if(form.loginPW.value == ''){
                    $(".item_login.pw").addClass("error");
                    form.loginPW.focus();
                    return;
                } else {
                    $(".item_login.pw").removeClass("error");
                }
                $(".pop.pop_login").hide();
                alert("로그인되었습니다");
                form.submit();
            }
            function searchUser() {
                var formS = document.searchFrm;
                if(formS.searchTxt.value == ''){
                    alert("검색어를 입력하세요");
                }else {
                    $(".search_area .hide_submit").trigger("click");
                }
            }

        </script>