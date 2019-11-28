<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/header.php');?>
<div class="find_wra">
   <div class="find_member_area">
       <form>
       <div class="title_find">
           <p>아이디 찾기</p>
       </div>
       <div class="content_find">
           <p class="desc">가입하실 때 등록했던 정보를 입력해주세요</p>
           <div class="item_find_m">
               <span class="lb">성명(상호명)</span>
               <div class="find_mb">
                   <input type="text" class="textbox_mbr" name="findId_name">
               </div>
           </div>
           <div class="item_find_m">
               <span class="lb">휴대폰 번호</span>
               <div class="find_mb">
                   <input type="text" class="textbox_mbr textbox_mbr_sm" name="findId_tel1">
                   <span class="bar">-</span>
                   <input type="text" class="textbox_mbr textbox_mbr_sm" name="findId_tel2">
                   <span class="bar">-</span>
                   <input type="text" class="textbox_mbr textbox_mbr_sm" name="findId_tel3">
                   <a href="#" class="send_number">본인인증</a>
               </div>
           </div>
           <div class="item_find_m">
               <span class="lb">인증번호 입력</span>
               <div class="find_mb">
                   <input type="text" class="textbox_mbr" name="findId_num">
               </div>
           </div>
       </div>
           <div class="btn_group">
               <button>아이디 찾기</button>
           </div>
       </form>
   </div>

</div>
<?php require_once ('/DK/inhouse/deasy-frontend/www/public_html/assets/element/footer.php');?>
