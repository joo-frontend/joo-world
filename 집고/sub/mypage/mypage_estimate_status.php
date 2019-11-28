<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type2.php');?>
    <div class="pageWrap" id="mypageWrap">
        <div class="mypage_wra">
            <div class="my_profile_area">
                <div class="my_profile_top">
                    <div class="info_pf_box">
                        <p class="photo_pf">
                            <img src="/assets/images/temp/temp_a1.jpg" alt="">
                        </p>
                        <span class="name_pf">개인아이디</span>
                    </div>
                    <div class="my_gnb my_gnb_mb">
                        <ul class="clearfix">
                            <li class="new focus"><a href="/sub/mypage/mypage_estimate.php"><span>견적내역</span></a></li>
                            <li><a href="/sub/mypage/mypage_save_list.php"><span>+ SAVE</span></a></li>
                            <li><a href="/sub/mypage/mypage_edit_info.php"><span>회원정보 수정</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="my_status_area">
                <p class="title_status">[ 진행현황 ]</p>
                <div class="step_status_box">
                    <div class="step_item focus">
                        <div class="circle_step ">
                            <img class="img_off" src="/assets/images/mypage/step1_off.png" alt="">
                            <img class="img_on" src="/assets/images/mypage/step1.png" alt="">
                        </div>
                        <p>매칭 중</p>
                    </div>
                    <p class="dotted_line"></p>
                    <div class="step_item focus">
                        <div class="circle_step">
                            <img class="img_off" src="/assets/images/mypage/step2_off.png" alt="">
                            <img class="img_on" src="/assets/images/mypage/step2.png" alt="">
                        </div>
                        <p>매칭완료</p>
                    </div>
                    <p class="dotted_line"></p>
                    <div class="step_item">
                        <div class="circle_step">
                            <img class="img_off" src="/assets/images/mypage/step3_off.png" alt="">
                            <img class="img_on" src="/assets/images/mypage/step3.png" alt="">
                        </div>
                        <p>시공완료</p>
                    </div>
                </div>
                <ul class="step_status_txt_box">
                    <li class="active">
                        <p class="lb">01 ㅣ 매칭 중</p>
                        <div class="status">
                            <p class="txt_active">업체와의 매칭이 진행 중입니다</p>
                        </div>
                    </li>
                    <li class="active">
                        <p class="lb">02 ㅣ 매칭 완료</p>
                        <div class="status">
                            <p class="txt">진행 예정입니다</p>
                            <p class="txt_active">매칭이 완료되었습니다. 업체 정보를 확인하세요</p>
                            <span class="detail_status">업체정보 보기 ></span>
                        </div>
                    </li>
                    <li class="">
                        <p class="lb">03 ㅣ 시공 완료</p>
                        <div class="status">
                            <p class="txt">진행 예정입니다</p>
                            <p class="txt_active">시공이 완료되었습니다. 시공완료 처리를 해주세요</p>
                            <span class="detail_status">시공완료 처리 ></span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <script src="/assets/js/dropzone/dropzone.js"></script>
    <script>
        $(".dropzone").dropzone({
            url: "/file/post",
            maxFiles: 5,
            uploadMultiple: true,
            dictDefaultMessage: "",
            maxFilesize: 10,
            /*   previewsContainer: "#preview-img",
               clickable: ".fileinput-button",*/
            addRemoveLinks: true,
            dictRemoveFile: '',
            acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
            dictFileSizeUnits: 'mb',
            parallelUploads: 5,
        });

        $(".my_subgnb li a").click(function () {
            $(".my_subgnb li").removeClass("focus");
            $(this).parents("li").addClass("focus");
            var numUl = $(this).parents("li").index() + 1;
            $(".my_estimate_section .list_estm").removeClass("active");
            $(".my_estimate_section .list_estm:nth-child("+numUl+")").addClass("active");
            return false;
        });

        /*mypage menu*/
        function scrollLeft() {
            var focusMenu = $(".my_gnb li.focus").offset();
            $(".my_gnb ul").animate({
                scrollLeft: focusMenu.left
            },300);
        }
        scrollLeft();
    </script>
<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>