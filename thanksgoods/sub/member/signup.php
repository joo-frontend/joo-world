<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');?>

    <div class="signup_wra">
        <p class="title"><span>회원가입</span>을 시작합니다</p>
        <div class="signup_area">
            <form action="./do/signup.php" method="POST" enctype="multipart/form-data" onsubmit="return val_ck()">
                <div class="section_signup">
                    <p class="type_info">필수정보</p>
                    <div class="signup_item clearfix">
                        <p class="lb">아이디(이메일)</p>
                        <div class="form_signup form_flex form_flex_2">
                            <input type="text" class="textbox_member textbox_mail" name="signupId">
                            <span class="emailtxt">@</span>
                            <input type="text" class="textbox_member textbox_mail" name="signupEmail" id="emailName">
                            <select name="selectboxEmail" id="selectMail" class="selectbox_member selectbox_mail">
                                <option value="direct">직접입력</option>
                                <option value="">naver.com</option>
                                <option value="">daum.net</option>
                            </select>
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">비밀번호</p>
                        <div class="form_signup">
                            <input type="password" class="textbox_member" name="signupPw">
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">비밀번호 확인</p>
                        <div class="form_signup">
                            <input type="password" class="textbox_member" name="signupPwAgain">
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">연락처</p>
                        <div class="form_signup form_flex">
                            <input type="tel" class="textbox_member textbox_xs" name="signupTel1">
                            <p class="bar">ㅡ</p>
                            <input type="tel" class="textbox_member textbox_xs" name="signupTel2">
                            <p class="bar">ㅡ</p>
                            <input type="tel" class="textbox_member textbox_xs" name="signupTel3">
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">주소</p>
                        <div class="form_signup form_address">
                            <p class="default_address">
                                <input type="checkbox" id="chkAddress" class="chk_blue" value="1" name="chkAddressDefault" checked>
                                <label for="chkAddress" class="chk_shape"></label>
                                <label for="chkAddress" class="chk_txt">기본배송지로 설정</label>
                            </p>
                            <input type="text" class="textbox_member textbox_sm" name="signupPost" id="addressPostJoin">
                            <button type="button" class="find_address" onclick="postCode()">주소찾기</button><br>
                            <input type="text" class="textbox_member " name="signupAddress1" id="addressRest1Join"><br>
                            <input type="text" class="textbox_member " name="signupAddress2" id="addressRest2Join">
                        </div>
                    </div>
                </div>
                <div class="section_signup">
                    <p class="type_info">선택정보</p>
                    <div class="signup_item clearfix">
                        <p class="lb">닉네임</p>
                        <div class="form_signup">
                            <input type="text" class="textbox_member textbox_sm" name="signupNick">
                            <a href="#" class="confirm_double">중복확인</a>
                        </div>
                    </div>
                    <p class="etc">*익명으로 게시글 작성 시 닉네임으로 표시됩니다</p>
                    <div class="signup_item clearfix">
                        <p class="lb">프로필 사진</p>
                        <div class="form_signup">
                            <div class="myProfile">
                                <input type="file" name="file" id="profileImg">
                                <label for="profileImg" class="upload-btn"><img
                                        src="/assets/images/member/camera.png" alt=""></label>
                                <div class="profile_box">
                                    <img src="" id="profile-img-tag"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">성별</p>
                        <div class="form_signup">
                            <p class="group_chk">
                                <input type="radio" id="signupGender1" class="chk_blue" value="1" name="signupGender" checked>
                                <label for="signupGender1" class="chk_shape"></label>
                                <label for="signupGender1" class="chk_txt">남자</label>
                            </p>
                            <p class="group_chk">
                                <input type="radio" id="signupGender2" class="chk_blue" value="2" name="signupGender">
                                <label for="signupGender2" class="chk_shape"></label>
                                <label for="signupGender2" class="chk_txt">여자</label>
                            </p>
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">나이대</p>
                        <div class="form_signup">
                            <select name="selectboxAge" class="selectbox_member">
                                <option value="1">10대</option>
                                <option value="2">20대</option>
                                <option value="3">30대</option>
                                <option value="4">40대</option>
                                <option value="5">50대 이상</option>
                            </select>
                        </div>
                    </div>
                    <div class="signup_item signup_item_type2 clearfix">
                        <p class="lb">주요 관심사 <span>* 복수 선택이 가능합니다</span></p>
                        <div class="form_signup">
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv1" class="chk_icon" value="v" name="signupfv" checked>
                                <label for="signupfv1" class="chk_shape"></label>
                                <label for="signupfv1" class="chk_txt">뷰티</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv2" class="chk_icon" value="f" name="signupfv">
                                <label for="signupfv2" class="chk_shape"></label>
                                <label for="signupfv2" class="chk_txt">맛집</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv3" class="chk_icon" value="t" name="signupfv">
                                <label for="signupfv3" class="chk_shape"></label>
                                <label for="signupfv3" class="chk_txt">여행</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv4" class="chk_icon" value="p" name="signupfv">
                                <label for="signupfv4" class="chk_shape"></label>
                                <label for="signupfv4" class="chk_txt">사진</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv5" class="chk_icon" value="l" name="signupfv">
                                <label for="signupfv5" class="chk_shape"></label>
                                <label for="signupfv5" class="chk_txt">숙박</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv6" class="chk_icon" value="b" name="signupfv">
                                <label for="signupfv6" class="chk_shape"></label>
                                <label for="signupfv6" class="chk_txt">도서</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv7" class="chk_icon" value="g" name="signupfv">
                                <label for="signupfv7" class="chk_shape"></label>
                                <label for="signupfv7" class="chk_txt">모임</label>
                            </p>

                        </div>
                    </div>
                </div>
                <input type="hidden" name="signupfv_ck" value="">
                <div class="btn_group">
                    <button class="btn_signup">등록하기</button>
                </div>
            </form>
        </div>
    </div>
    <script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
    <script>
        var ck_nick = 0;
        
        function val_ck(){
        if($('input[name=signupId]').val()==''||$('input[name=signupEmail]').val()==''||$('input[name=signupPw]').val()==''||$('input[name=signupPwAgain]').val()==''||$('input[name=signupTel1]').val()==''||$('input[name=signupTel2]').val()==''||$('input[name=signupTel3]').val()==''||$('input[name=signupPost]').val()==''||$('input[name=signupAddress1]').val()==''||$('input[name=signupAddress2]').val()==''){
            alert('필수 항목중 입력하지 않은 항목이 있습니다.');
            return false;
        }
        if($('input[name=signupPwAgain]').val()!=$('input[name=signupPw]').val()){
          alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
          return false;  
        }
        if(ck_nick==0){
            alert("닉네임 중복 확인을 해주시기 바랍니다.");
            return false;
        }
     
        for(var i=0;i<$('input[name=signupfv]').length;i++){
            if($('input[name=signupfv]').eq(i).is(':checked')){
                if($('input[name=signupfv_ck]').val()==''){
                 $('input[name=signupfv_ck]').val($('input[name=signupfv]').eq(i).val());   
                }else{
                 $('input[name=signupfv_ck]').val($('input[name=signupfv_ck]').val()+','+$('input[name=signupfv]').eq(i).val());   
                }
            }
        }
       
        }
        
        $('.confirm_double').click(function(){
            var nickname = $('input[name=signupNick]').val();
            console.log(nickname);
            if(nickname==''){
            alert("닉네임을 입력해주세요.");
            return false;
            }
         $.ajax({
             type: "POST",
             dataType: 'html',
             data:{ nickname:nickname },
             url: "./do/ck_nickname.php",
             success: function(response){
                
              if(response==500){
             alert('중복된 닉네임입니다.');
             
             }else if(response==200){
             alert('사용하실 수 있는 닉네임입니다.');
             ck_nick = 1;

             }
             },
             });

        });
        $('input[name=signupNick]').change(function(){
                ck_nick = 0;

        });
        $('#profileImg').bind('change',function(){
        console.log($(this).val());
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.profile_box').attr('style', "background-image:url("+e.target.result+"); background-size:cover; background-position:center;");
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#profileImg").change(function () {
            readURL(this);
        });
        
        $("#selectMail").change(function () {
            var mailSelect = document.getElementById("selectMail");
            var mailOPtion = mailSelect.options[mailSelect.selectedIndex].text;
            var mailValue = mailSelect.options[mailSelect.selectedIndex].value;

            if(mailValue == "direct") {
                $("#emailName").val("");
                $("#emailName").attr("disabled",false);
            }else{
                $("#emailName").val(mailOPtion);
                $("#emailName").attr("disabled",true);
            }
        });

        //우편번호
        function postCode() {
            new daum.Postcode({
                oncomplete: function(data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var fullAddr = ''; // 최종 주소 변수
                    var extraAddr = ''; // 조합형 주소 변수

                    // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                        fullAddr = data.roadAddress;

                    } else { // 사용자가 지번 주소를 선택했을 경우(J)
                        fullAddr = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                    if(data.userSelectedType === 'R'){
                        //법정동명이 있을 경우 추가한다.
                        if(data.bname !== ''){
                            extraAddr += data.bname;
                        }
                        // 건물명이 있을 경우 추가한다.
                        if(data.buildingName !== ''){
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                        fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    document.getElementById('addressPostJoin').value = data.zonecode; //5자리 새우편번호 사용
                    document.getElementById('addressRest1Join').value = fullAddr;

                    // 커서를 상세주소 필드로 이동한다.
                    document.getElementById('addressRest2Join').focus();
                }
            }).open();
        }
    </script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>