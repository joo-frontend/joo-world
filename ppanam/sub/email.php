<?php require_once('/DK/hosting_users/ppanam/www/public_html/assets/elements/header_white.php'); ?>

    <div class="email_wra">
        <div class="contact_area">
            <ul class="contact_type clearfix">
                <li ><a href="/sub/contact.php">Contact</a></li>
                <li class="focus"><a href="/sub/email.php">Email Us</a></li>
            </ul>
         <div class="email_box">
            <p class="send_desc f_opensans">
                Please feel free to<br>
                contact us with questions!
            </p>
             <form>
                 <div class="item_send">
                     <span class="imgBox"><img src="/assets/images/contact/emailus/category.png" alt=""></span>
                     <select name="select_ask" class="selectbox">
                         <option>견적</option>
                         <option>문의</option>
                     </select>
                 </div>
                 <div class="item_send">
                     <span class="imgBox"><img src="/assets/images/contact/emailus/name.png" alt=""></span>
                     <input type="text" class="textbox textbox_sm" placeholder="성함" name="name_send">
                 </div>
                 <div class="item_send">
                     <span class="imgBox imgBox2"><img src="/assets/images/contact/emailus/email.png" alt=""></span>
                    <div class="input_contents"> <input type="text" class="textbox textbox_sm" placeholder="이메일" name="mail_send">
                     <span class="mail_txt">@</span>
                     <select name="select_email" class="selectbox selectbox_2">
                         <option>naver.com</option>
                         <option>gamil.com</option>
                         <option>hanmail.com</option>
                         <option>hotmail.com</option>
                     </select>
                    </div>
                 </div>
                 <div class="item_send">
                     <input type="text" class="textbox" name="title_send" placeholder="제목">
                 </div>
                 <div class="item_send">
                     <textarea name="contents_send" class="txtbox" placeholder="문의내용"></textarea>
                 </div>
                 <div class="item_send ">
                     <p class="ask_desc">전화상담을 받고  싶으실 경우 연락처를 입력하세요</p>
                     <div class="tel_input"><select name="select_tel" class="selectbox selectbox_2 selectbox_sm">
                         <option>010</option>
                         <option>011</option>
                         <option>012</option>
                     </select>

                     <span class="bar">-</span> </div>
                     <input type="text" class="textbox textbox_xs" name="tel1_send">
                     <span class="bar">-</span>
                     <input type="text" class="textbox textbox_xs" name="tel2_send">
                 </div>
                 <div class="btn_group">
                     <button class="btn">취소하기</button>
                     <button class="btn">문의하기</button>
                 </div>
             </form>
         </div>
        </div>
    </div>

<?php require_once('/DK/hosting_users/ppanam/www/public_html/assets/elements/footer.php'); ?>