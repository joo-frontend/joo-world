<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
    <form action="./mypage_designer_register.php">
        <div class="mypage-wrap">
            <div class="m_mypage_nav01">
                <ul>
                    <li>
                        <a href="./mypage_order.php">주문관리</a>
                    </li>
                    <li>
                        <a href="./mypage_album.php">앨범 컨펌</a>
                    </li>
                    <li>
                        <a href="./mypage_account_password.php">계정 정보관리</a>
                    </li>
                    <li class="active">
                        <a href="./mypage_designer.php">디자이너 등록</a>
                    </li>
                    <li>
                        <a href="./mypage_delivery.php">정기배송서비스</a>
                    </li>
                    <li>
                        <a href="./mypage_alarm.php">알림 설정</a>
                    </li>
                </ul>
            </div>
            <div class="m_album_subNav">
                <ul>
                    <li>
                        <a href="./mypage_album_register.php">앨범 디자인등록</a>
                    </li>
                    <li>
                        <a href="./mypage_account01.php">의뢰리스트</a>
                    </li>
                    <li>
                        <a href="./mypage_account02.php">계좌확인</a>
                    </li>
                    <li>
                        <a href="./mypage_rating.php">등급제도</a>
                    </li>
                </ul>
            </div>


            <div class="left_content">
                <div class="file_folder_menu">
                    <p class="menu_title">마이페이지</p>
                    <ul>
                        <li class="depth_menu1 li_list_right">
                            <a href="./mypage_order.php" class="menu1">주문 관리</a>
                        </li>
                        <li class="depth_menu1 album li_list_right">
                            <a href="#" class="menu1 ">앨범 컨텀</a>
                            <ul class="menu_sub_ul">
                                <li class="depth_menu2"><a href="./mypage_album.php">앨범 컨펌내역</a></li>
                                <li class="depth_menu2"><a href="#">완료된 앨범</a></li>
                                <li class="depth_menu2"><a href="#">백업</a></li>
                            </ul>
                        </li>
                        <li class="depth_menu1 account li_list_right focus">
                            <a href="#" class="menu1">계정 정보관리</a>
                            <ul class="menu_sub_ul">
                                <li class="depth_menu2"><a href="./mypage_account_password.php">비밀번호 변경</a></li>
                                <li class="depth_menu2"><a href="./mypage_designer.php" class="active">디자이너 등록하기</a></li>
                                <li class="depth_menu2"><a href="./mypage_leave_membership.php">탈퇴하기</a></li>
                            </ul>
                        </li>
                        <li class="depth_menu1 li_list_right">
                            <a href="./mypage_delivery.php" class="menu1">정기배송 서비스</a>
                        </li>
                        <li class="depth_menu1 li_list_right">
                            <a href="./mypage_alarm.php" class="menu1">알림 설정</a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="right_content">

                <div id="step01" class="account-section step- designer_section">
                    <div class="mypage-title-h2">
                        <h2>디자이너 등록하기</h2>

                        <div class="step-box">
                            <div class="step-01 step-active">01&nbsp;&nbsp;약관동의<span class="step-active-img img-active"></span></div>
                            <div class="step-02">02&nbsp;&nbsp;정보입력<span class="step-active-img"></span></div>
                            <div class="step-03">03&nbsp;&nbsp;등록완료</div>
                        </div>

                    </div>

                    <div class="account-area designer_area">
                        <div class="account-step01-subtitle">
                            <h3>약관동의</h3>
                        </div>

                        <div class="account-allAgree-box">
                            <input id="checkAll" type="checkbox" name="all_check" class="checkbox-custom">
                            <label for="checkAll" class="checkbox-label">
                                찍오(ZZIGO)의 모든 약관을 확인하고 전체 동의합니다. <span>(전체동의, 선택항목도 포함됩니다)</span>
                            </label>
                        </div>

                        <div class="account-agree-box">
                            <input id="tosAgree" type="checkbox" name="chk" class="checkbox-custom required_chk">
                            <label for="tosAgree" class="checkbox-label">
                                <span>(필수)</span>이용약관
                            </label>

                            <div class="account-agree-content">
                                    <textarea name="" id="" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis suscipit nibh. Vivamus sollicitudin est ac quam interdum tempor. Duis ornare lacus at mauris eleifend, a laoreet urna malesuada. Curabitur placerat fermentum quam, sed pretium odio mollis non. Nam vehicula felis in neque hendrerit fermentum. Donec iaculis ac eros eget ullamcorper. Nulla et venenatis justo. Sed fermentum est sit amet magna luctus, a vestibulum tortor fringilla. Aliquam ac ex sem. In blandit dapibus egestas. In sit amet ligula et ante congue maximus vitae quis augue. Phasellus nisi purus, varius eu suscipit vel, consequat sit amet nisi.Proin sed mattis nulla. Donec placerat est elit, vitae sagittis est malesuada ac. Nulla aliquam fringilla turpis a tincidunt. Nam risus sapien, lacinia in dui quis, efficitur maximus lectus. Nam a augue vitae nisi aliquet feugiat. Quisque tincidunt congue enim sed ultrices. Nunc mauris tellus, bibendum porta molestie a, maximus sed justo. Quisque egestas mattis lorem sed convallis. Aenean vehicula molestie orci, et aliquet ante tristique at. Fusce bibendum libero id massa ultrices, ac ornare sapien dictum. Proin id tincidunt ligula. Suspendisse sem magna, scelerisque a feugiat eu, iaculis quis urna. Morbi vitae bibendum ex, in ullamcorper metus. Quisque et arcu hendrerit, luctus nisi pulvinar, commodo est. Integer quis urna eu leo blandit facilisis.
                                    </textarea>
                            </div>
                        </div>

                        <div class="account-agree-box marginBottom10">
                            <input id="privacyAgree" type="checkbox" name="chk" class="checkbox-custom required_chk">
                            <label for="privacyAgree" class="checkbox-label">
                                <span>(필수)</span>개인정보 수집 및 이용
                            </label>

                            <div class="account-agree-content">
                                    <textarea name="" id="" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis suscipit nibh. Vivamus sollicitudin est ac quam interdum tempor. Duis ornare lacus at mauris eleifend, a laoreet urna malesuada. Curabitur placerat fermentum quam, sed pretium odio mollis non. Nam vehicula felis in neque hendrerit fermentum. Donec iaculis ac eros eget ullamcorper. Nulla et venenatis justo. Sed fermentum est sit amet magna luctus, a vestibulum tortor fringilla. Aliquam ac ex sem. In blandit dapibus egestas. In sit amet ligula et ante congue maximus vitae quis augue. Phasellus nisi purus, varius eu suscipit vel, consequat sit amet nisi.Proin sed mattis nulla. Donec placerat est elit, vitae sagittis est malesuada ac. Nulla aliquam fringilla turpis a tincidunt. Nam risus sapien, lacinia in dui quis, efficitur maximus lectus. Nam a augue vitae nisi aliquet feugiat. Quisque tincidunt congue enim sed ultrices. Nunc mauris tellus, bibendum porta molestie a, maximus sed justo. Quisque egestas mattis lorem sed convallis. Aenean vehicula molestie orci, et aliquet ante tristique at. Fusce bibendum libero id massa ultrices, ac ornare sapien dictum. Proin id tincidunt ligula. Suspendisse sem magna, scelerisque a feugiat eu, iaculis quis urna. Morbi vitae bibendum ex, in ullamcorper metus. Quisque et arcu hendrerit, luctus nisi pulvinar, commodo est. Integer quis urna eu leo blandit facilisis.
                                    </textarea>
                            </div>
                        </div>
                        <div class="account-agree-box ">
                            <input id="calculateAgree" type="checkbox" name="chk" class="checkbox-custom">
                            <label for="calculateAgree" class="checkbox-label">
                                모든 수익금은 매월 10일에 정산하여 일괄 지급되며, 이에 동의합니다.
                            </label>
                        </div>

                    </div>
                    <div class="mypage-btn-box">
                        <button type="button" class="prev">이전단계</button>
                        <button id="nextStep" type="button" class="next">다음단계</button>
                    </div>
                </div>

                <div id="step02" class="account-section step-02 step_display_none">
                    <div class="mypage-title-h2">
                        <h2>디자이너 등록하기</h2>

                        <div class="step-box">
                            <div class="step-01">01&nbsp;&nbsp;약관동의<span class="step-active-img"></span></div>
                            <div class="step-02 step-active">02&nbsp;&nbsp;정보입력<span class="step-active-img img-active"></span></div>
                            <div class="step-03">03&nbsp;&nbsp;등록완료</div>
                        </div>

                    </div>

                    <div class="account-area">
                        <div class="account-step02-subtitle">
                            <h3>기본정보</h3>
                        </div>

                        <div class="account-step02-box">
                            <div class="step02-input-line">
                                <div class="t-row">
                                    <div class="input-th">닉네임</div>
                                    <div class="input-td">
                                        <input type="text" name="nickname">
                                        <button type="button">중복확인</button>
                                        <input type="hidden" name="nickname_check" value="1">
                                    </div>
                                </div>
                            </div>

                            <div class="step02-input-line">
                                <div class="t-row">
                                    <div class="input-th">이름</div>
                                    <div class="input-td">
                                        <input type="text" name="name">
                                    </div>
                                </div>
                            </div>

                            <div class="step02-input-line">
                                <div class="t-row">
                                    <div class="input-th">연락처</div>

                                    <div class="input-td">
                                        <input type="text" name="phone_number">
                                        <div class="step02-checkbox back_checkbox">
                                            <input id="eventAgree" type="checkbox" name="event_agree" class="checkbox-custom">
                                            <label for="eventAgree" class="checkbox-label">
                                                정보/이벤트 SMS수신에 동의합니다.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="step02-input-line m_back_checkbox">
                                <div class="">
                                    <div class="step02-checkbox">
                                        <input id="eventAgree" type="checkbox" name="event_agree" class="checkbox-custom">
                                        <label for="eventAgree" class="checkbox-label">
                                            정보/이벤트 SMS수신에 동의합니다.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="step02-input-line account_select">
                                <div class="t-row">
                                    <div class="input-th">계좌번호</div>
                                    <div class="input-td">
                                        <select name="bank" id="">
                                            <option value="">은행선택</option>
                                            <option value="">KB은행</option>
                                            <option value="">우리은행</option>
                                            <option value="">신한은행</option>
                                            <option value="">IBK기업은행</option>
                                        </select>
                                        <input type="text" name="account_number" placeholder="-없이 입력하세요">
                                    </div>
                                </div>
                            </div>

                            <div class="step02-input-line m_account_select">
                                <div class="t-row">
                                    <div class="input-th">은행정보</div>
                                    <div class="input-td">
                                        <select name="bank" id="">
                                            <option value="">은행선택</option>
                                            <option value="">KB은행</option>
                                            <option value="">우리은행</option>
                                            <option value="">신한은행</option>
                                            <option value="">IBK기업은행</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="step02-input-line m_account_select">
                                <div class="t-row">
                                    <div class="input-th">계좌번호</div>
                                    <div class="input-td">
                                        <input type="text" name="account_number" placeholder="-없이 입력하세요">
                                    </div>
                                </div>
                            </div>


                            <div class="step02-input-line designer_introduce">
                                <div class="t-row">
                                    <div class="input-th">디자이너 소개</div>
                                    <div class="input-td">
                                        <textarea name="designer_introduce" placeholder="내용을 입력해 주세요."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="step02-input-line">
                                <div class="t-row">
                                    <div class="input-th">포트폴리오 등록</div>
                                    <div class="input-td">
                                        <div class="filebox">
                                            <input class="upload-name" value="" disabled="disabled">
                                            <label for="ex_filename">찾아보기</label>
                                            <input type="file" id="ex_filename" name="file_upload" class="upload-hidden">
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="step02-input-line">
                                <div class="t-row">
                                    <div class="input-th">대표사진</div>
                                    <div class="input-td">
                                        <div class="filebox">
                                            <input class="repres_photo" value="" disabled="disabled">
                                            <label for="ex_filename">찾아보기</label>
                                            <input type="file" id="ex_filename" name="file_upload" class="upload-hidden">
                                        </div>
                                        <div class="repres_img_list">
                                            <div class="repres_img">
                                                <img src="/assets/images/mypage/img1.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="mypage-btn-box">
                        <button id="step02Prev" type="button" class="prev">이전단계</button>

                        <button class="next" type="submit">작성완료</button>

                    </div>

                </div>


            </div>
        </div>
    </form>

    <script>
        $(document).ready(function() {
            $("#checkAll").on('click', function(e){
                if( $("#checkAll").prop("checked") ){
                    $("input[name=chk]").prop("checked",true);
                } else {
                    $("input[name=chk]").prop("checked",false);
                }
            });
            $('input[name=chk]').on('click', function(e) {
                var listSize = $('input[name=chk]').size();
                var checkedNum = 0;
                $('input[name=chk]').each(function() {
                    if( $(this).is(':checked') === true ) {
                        checkedNum++;
                    }
                });
                if( listSize === checkedNum ) {
                    $('#checkAll').prop('checked', true);
                } else {
                    $('#checkAll').prop('checked', false);
                }
            });

            $('#nextStep').on('click', function(e) {
                e.preventDefault();
                var listSize = $('.required_chk').size();
                var checkedNum = 0;
                $('.required_chk').each(function() {
                    if( $(this).is(':checked') === true ) {
                        checkedNum++;
                    }
                });
                if( listSize === checkedNum ) {
                    $('#step01').toggleClass('step_display_none');
                    $('#step02').toggleClass('step_display_none');
                } else {

                }
            });

            $('#step02Prev').on('click', function(e) {
                e.preventDefault();
                $('#step01').toggleClass('step_display_none');
                $('#step02').toggleClass('step_display_none');
            });


            var fileTarget = $('.filebox .upload-hidden');

            fileTarget.on('change', function(){
                if(window.FileReader){
                    var filename = $(this)[0].files[0].name;
                } else {
                    var filename = $(this).val().split('/').pop().split('\\').pop();
                }

                $(this).siblings('.upload-name').val(filename);
            });


            $('form').submit( function() {

            })
        })
    </script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>