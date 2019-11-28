<?php require_once('/DK/hosting_users/kii/www/public_html/assets/element/header_white.php'); ?>
    <div class="contact_wra">
        <div class="top_banner_area">
            <div class="banner_txt_box">
                <p class="title">CONTACT</p>
                <p class="line_white"></p>
                <p class="desc">문의하시면 친절하게 도와드리겠습니다.</p>
            </div>
        </div>
        <div class="address_info_area">
            <p class="gray_box"></p>
            <div class="address_info_box">
                <p class="address">ADDRESS</p>
                <p class="detail_address"><span>한국인식사업</span>서울시 구로구 디지털로 33길 50, 704호 (구로동, 벽산디지털밸리 7차)</p>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.864833215668!2d126.89181621564639!3d37.48751593640675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e3c96ae1a65%3A0x920261dee086d199!2z7ISc7Jq47Yq567OE7IucIOq1rOuhnOq1rCDqtazroZwz64-ZIOuUlOyngO2EuOuhnDMz6ri4IDUw!5e0!3m2!1sko!2skr!4v1539157439443" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="message_send_area">
            <p class="msg">MESSAGE SEND</p>
            <div class="msg_form">
                <form>
                    <div class="input_box first">
                        <input type="text" class="sendbox" placeholder="제목을 입력하세요" name="titleSend">
                        <div class="ask_type">
                            <input type="radio" class="checkbox" id="typeSend1" name="typeSend" checked>
                            <label for="typeSend1" class="chk_shape"></label>
                            <label for="typeSend1" class="chk_txt">상세내역</label>
                            <input type="radio" class="checkbox" id="typeSend2" name="typeSend">
                            <label for="typeSend2" class="chk_shape"></label>
                            <label for="typeSend2" class="chk_txt">회사소개</label>
                            <input type="radio" class="checkbox" id="typeSend3" name="typeSend">
                            <label for="typeSend3" class="chk_shape"></label>
                            <label for="typeSend3" class="chk_txt">배송관련</label>
                        </div>
                    </div>
                    <div class="input_box clearfix">
                        <div class="content">
                            <textarea name="txtSend" id="txtContentSend" class="txtarea" placeholder="내용을 입력하세요" maxlength="3000"></textarea>
                            <p class="num_txt">현재 0 글자/최대 3000 글자</p>
                        </div>
                        <div class="sendor_info_box">
                            <input type="text" class="sendbox" placeholder="닉네임 ( 보내는사람 )">
                            <input type="text" class="sendbox" placeholder="업체명을 입력하세요">
                            <input type="text" class="sendbox" placeholder="회신 이메일">
                            <button class="btn_ask">문의하기</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>
        $("#txtContentSend").keyup(function () {
            var myEnter = $(this).val();
            $(".num_txt").html("현재 "+myEnter.length+" 글자/최대 3000 글자");
            if(myEnter.length > 3000){
                $("#txtContentSend").val(myEnter.substring(0,3000));
                $(".num_txt").html("현재 3000 글자/최대 3000 글자");
            }
        });
    </script>
<?php require_once('/DK/hosting_users/kii/www/public_html/assets/element/footer.php'); ?>