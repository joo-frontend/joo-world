<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$user = new user();
$userinfo = $user -> read()[0];
 
$point_info = $user -> point_read();
if(count($point_info)<1){
$total_point = 0; 
}else{
$total_point = $point_info[0]['total_point'];
}
$thanks = $user -> thanks_read();
$likes = $user -> likes_read();
$interest = explode(',',$userinfo['interests']);

 ?>

    <div class="feed_wra ">
        <div class="feed_profile_area feed_setting_area">
            <p class="imgBox">
                 <div class="profile_box" style="background-image:url(<?php 
                        $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$_SESSION['user']['id'].'.*') as $value){
                                        if($j==1){
                                        echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                        }
            }?>); background-size:cover; background-position:center;">
                <img src="/assets/images/feed/myfeed_profile.png" alt="" style="opacity:0;">
            </div>
            </p>
            <div class="profile_feedbox">
                <p class="name"><?=$userinfo['nickname']?></p>
                <a href="/sub/feed/my_profile_edit.php" class="setting_info focus">내정보 수정</a>
                <a href="/sub/feed/my_alarm.php" class="setting_alarm ">알림 설정</a>
            </div>
            <div class="my_post_info">
                <div class="each_info">
                    <p class="num"><?=$total_point?></p>
                    <p class="desc">보유 <span>포인트</span></p>
                </div>
                <div class="each_info">
                    <p class="num"><?=count($thanks)?></p>
                    <p class="desc">감사 <span>카드</span></p>
                </div>
                <div class="each_info">
                    <p class="num"><?=count($likes)?></p>
                    <p class="desc">공감 <span>카드</span></p>
                </div>
            </div>
            <a href="/sub/feed/make_feed.php" class="write_card"><img src="/assets/images/feed/write.png" alt=""></a>
        </div>
        <div class="feed_profile_area feed_profile_edit_area">
            <form action="/sub/member/do/edit_profile.php" method="POST" onsubmit="return val_ck();" enctype="multipart/form-data">
                <p class="mobile_title">내정보 수정</p>
                <div class="section_signup">
                    <div class="signup_item clearfix">
                        <p class="lb lb_2">프로필 사진</p>
                        <div class="form_signup">
                            <div class="myProfile">
                                <input type="file" name="file" id="profileImg">
                                <label for="profileImg" class="upload-btn"><img
                                            src="/assets/images/member/camera.png" alt=""></label>
                                <div class="profile_box" style="background-image:url(<?php 
                        $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/'.$_SESSION['user']['id'].'.*') as $value){
                                        if($j==1){
                                        echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                        }
            }?>); background-size:cover; background-position:center;">
                                    <img src="" id="profile-img-tag"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section_signup">
                    <div class="signup_item pw_item clearfix">
                        <p class="type_info">비밀번호 변경</p>
                        <div class="signup_item clearfix">
                            <p class="lb">현재 비밀번호</p>
                            <div class="form_signup">
                                <input type="password" class="textbox_member" name="currentPw">
                            </div>
                        </div>
                        <div class="signup_item clearfix">
                            <p class="lb">새 비밀번호</p>
                            <div class="form_signup">
                                <input type="password" class="textbox_member" name="newPw">
                            </div>
                        </div>
                        <div class="signup_item clearfix">
                            <p class="lb">비밀번호 확인</p>
                            <div class="form_signup">
                                <input type="password" class="textbox_member" name="newPwAgain">
                            </div>
                            <!--<a href="#" class="confirm_double">변경완료</a>-->
                        </div>
                    </div>

                </div>
                <div class="section_signup">
                    <p class="type_info">필수정보</p>
                    <div class="signup_item clearfix">
                        <p class="lb">연락처</p>
                        <div class="form_signup form_flex">
                            <input type="tel" class="textbox_member textbox_xs" name="signupTel1" value="<?=substr($userinfo['contact'],0,3)?>">
                            <p class="bar">ㅡ</p>
                            <input type="tel" class="textbox_member textbox_xs" name="signupTel2" value="<?=substr($userinfo['contact'],3,4)?>">
                            <p class="bar">ㅡ</p>
                            <input type="tel" class="textbox_member textbox_xs" name="signupTel3" value="<?=substr($userinfo['contact'],7,4)?>">
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">주소</p>
                        <div class="form_signup form_address">
                            <p class="default_address">
                                <input type="checkbox" id="chkAddress" class="chk_blue" value="1" name="chkAddressDefault"
                                       <?php if($userinfo['is_mainaddr']==1){ echo 'checked'; }?> >
                                <label for="chkAddress" class="chk_shape"></label>
                                <label for="chkAddress" class="chk_txt">기본배송지로 설정</label>
                            </p>
                            <input type="text" class="textbox_member textbox_sm" name="signupPost" id="signupPost" value="<?=$userinfo['postcode']?>">
                            <button type="button" onclick="postCode()" class="find_address" >주소찾기</button><br>
                            <input type="text" class="textbox_member " name="signupAddress1" id="rest1Edit" value="<?=$userinfo['address1']?>"><br>
                            <input type="text" class="textbox_member " name="signupAddress2" id="rest2Edit" value="<?=$userinfo['address2']?>">
                        </div>
                    </div>
                </div>
                <div class="section_signup last">
                    <p class="type_info">선택정보</p>
                    <div class="signup_item clearfix">
                        <p class="lb">닉네임</p>
                        <div class="form_signup">
                            <input type="text" class="textbox_member textbox_sm" name="signupNick" value="<?=$userinfo['nickname']?>">
                            <a href="#" class="confirm_double">중복확인</a>
                        </div>
                    </div>
                    <p class="etc">*익명으로 게시글 작성 시 닉네임으로 표시됩니다</p>
                    <div class="signup_item clearfix">
                        <p class="lb">성별</p>
                        <div class="form_signup">
                            <p class="group_chk">
                                <input type="radio" id="signupGender1" class="chk_blue" value="1" name="signupGender" <?php if($userinfo['gender']==1){ echo 'checked'; }?> >
                                <label for="signupGender1" class="chk_shape"></label>
                                <label for="signupGender1" class="chk_txt">남자</label>
                            </p>
                            <p class="group_chk">
                                <input type="radio" id="signupGender2" class="chk_blue" value="2" name="signupGender"  <?php if($userinfo['gender']==2){ echo 'checked'; }?>>
                                <label for="signupGender2" class="chk_shape"></label>
                                <label for="signupGender2" class="chk_txt">여자</label>
                            </p>
                        </div>
                    </div>
                    <div class="signup_item clearfix">
                        <p class="lb">나이대</p>
                        <div class="form_signup">
                            <select name="selectboxAge" class="selectbox_member">
                                <option value="1" <?php if($userinfo['age']==1){ echo 'selected';}?>>10대</option>
                                <option value="2" <?php if($userinfo['age']==2){ echo 'selected';}?>>20대</option>
                                <option value="3" <?php if($userinfo['age']==3){ echo 'selected';}?>>30대</option>
                                <option value="4" <?php if($userinfo['age']==4){ echo 'selected';}?>>40대</option>
                                <option value="5" <?php if($userinfo['age']==5){ echo 'selected';}?>>50대 이상</option>
                            </select>
                        </div>
                    </div>
                    <div class="signup_item signup_item_type2 clearfix">
                        <p class="lb">주요 관심사 <span>* 복수 선택이 가능합니다</span></p>
                        <div class="form_signup">
                              <p class="group_chk">
                                <input type="checkbox" id="signupfv1" class="chk_icon" value="v" name="signupfv" <?php if( in_array( "v" ,$interest )){ echo 'checked'; }?> >
                                <label for="signupfv1" class="chk_shape"></label>
                                <label for="signupfv1" class="chk_txt">뷰티</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv2" class="chk_icon" value="f" name="signupfv" <?php if( in_array( "f" ,$interest )){ echo 'checked'; }?>>
                                <label for="signupfv2" class="chk_shape"></label>
                                <label for="signupfv2" class="chk_txt">맛집</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv3" class="chk_icon" value="t" name="signupfv" <?php if( in_array( "t" ,$interest )){ echo 'checked'; }?>>
                                <label for="signupfv3" class="chk_shape"></label>
                                <label for="signupfv3" class="chk_txt">여행</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv4" class="chk_icon" value="p" name="signupfv" <?php if( in_array( "p" ,$interest )){ echo 'checked'; }?>>
                                <label for="signupfv4" class="chk_shape"></label>
                                <label for="signupfv4" class="chk_txt">사진</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv5" class="chk_icon" value="l" name="signupfv" <?php if( in_array( "l" ,$interest )){ echo 'checked'; }?>>
                                <label for="signupfv5" class="chk_shape"></label>
                                <label for="signupfv5" class="chk_txt">숙박</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv6" class="chk_icon" value="b" name="signupfv" <?php if( in_array( "b" ,$interest )){ echo 'checked'; }?>>
                                <label for="signupfv6" class="chk_shape"></label>
                                <label for="signupfv6" class="chk_txt">도서</label>
                            </p>
                            <p class="group_chk">
                                <input type="checkbox" id="signupfv7" class="chk_icon" value="g" name="signupfv" <?php if( in_array( "g" ,$interest )){ echo 'checked'; }?>>
                                <label for="signupfv7" class="chk_shape"></label>
                                <label for="signupfv7" class="chk_txt">모임</label>
                            </p>
                        </div>
                    </div>
                     <input type="hidden" name="signupfv_ck" value="">
                    <div class="btn_group">
                        <button class="btn_blue">수정완료</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
    <script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
    <script>
          var ck_nick = 1;
          $('input[name=signupNick]').change(function(){
                ck_nick = 0;

        });
          function val_ck(){
        if($('input[name=signupTel1]').val()==''||$('input[name=signupTel2]').val()==''||$('input[name=signupTel3]').val()==''||$('input[name=signupPost]').val()==''||$('input[name=signupAddress1]').val()==''||$('input[name=signupAddress2]').val()==''){
            alert('유효하지 않는 값이 있습니다.');
            return false;
        }
        if($('input[name=currentPw]').val()!=''){
            if($('input[name=newPw]').val()==''||($('input[name=newPw]').val()!=$('input[name=newPwAgain]').val())){
                alert('새 비밀번호를 입력하지 않으셨거나 비밀번호 확인이 일치하지 않습니다.');
                return false;
            }
        }
        /*if($('input[name=signupPwAgain]').val()!=$('input[name=signupPw]').val()){
          alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
          return false;  
        }*/
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
             url: "/sub/member/do/ck_nickname.php",
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
              $('#profileImg').bind('change',function(){
        console.log($(this).val());
        });
          function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('form .profile_box').attr('style', "background-image:url("+e.target.result+"); background-size:cover; background-position:center;");
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#profileImg").change(function () {
            readURL(this);
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
                    document.getElementById('postEdit').value = data.zonecode; //5자리 새우편번호 사용
                    document.getElementById('rest1Edit').value = fullAddr;

                    // 커서를 상세주소 필드로 이동한다.
                    document.getElementById('rest2Edit').focus();
                }
            }).open();
        }
    </script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>