<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/header_type1.php');?>
<div class="join_wra">
    <div class="join_title_area">
        <p>개인 회원 가입</p>
    </div>
    <div class="join_area">
        <form>
        <div class="item_join">
            <p class="lb">아이디</p>
            <div class="frm_txt">
                <input type="text" class="textbox_gray box_lgth_sm">
            </div>
        </div>
        <div class="item_join">
            <p class="lb">비밀번호</p>
            <div class="frm_txt">
                <input type="text" class="textbox_gray box_lgth1">
                <p class="chk_frm_msg red">8~16자의 영문 + 숫자 조합으로 입력</p>
            </div>
        </div>
        <div class="item_join">
            <p class="lb">비밀번호 확인</p>
            <div class="frm_txt">
                <input type="text" class="textbox_gray box_lgth1">
                <p class="chk_frm_msg">비밀번호가 일치합니다</p>
            </div>
        </div>
        <div class="item_join">
            <p class="lb">이메일</p>
            <div class="frm_txt frm_email">
                <input type="text" class="textbox_gray box_lgth_sm">
                <span class="bar">@</span>
                <select class="selectbox_gray">
                    <option>naver.com</option>
                    <option>gamil.com</option>
                </select>
                <p class="chk_frm_msg">사용하실 수 있습니다</p>
            </div>
        </div>
        <div class="agree_join">
            <div class="item_agree_join first">
                <input type="checkbox" class="chkbox" id="agreePAll">
                <label for="agreePAll"><b>아래 사항에 모두 동의합니다</b></label>
            </div>
            <div class="item_agree_join">
                <input type="checkbox" class="chkbox chkagree" id="agreeP1">
                <label for="agreeP1">(필수) <span>개인정보수집 및 이용내용</span></label>
            </div>
            <div class="item_agree_join">
                <input type="checkbox" class="chkbox chkagree" id="agreeP2">
                <label for="agreeP2">(필수) <span>개인정보 제3자 제공</span></label>
            </div>
            <div class="item_agree_join">
                <input type="checkbox" class="chkbox chkagree" id="agreeP3">
                <label for="agreeP3">(선택) <span>인테리어 정보 및 이벤트 알림 수신</span></label>
            </div>
        </div>
        <div class="submit_btn">
            <button>가입하기</button>
        </div>
        </form>
    </div>
    
</div>

<?php require_once ('/DK/hosting_users/zipgo/www/public_html/assets/element/footer.php');?>