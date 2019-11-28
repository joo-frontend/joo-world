<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/header.php');?>
<div class="design_wra">
    <form name="confirmDesignFrm">
    <div class="top_design_area">
        <div class="design_btn">
            <a href="/sub/cloud/cloud.php" class="back_list"><  앨범컨펌 리스트 페이지로</a>
            <button type="submit">수정 요청</button>
            <button type="button">컨펌 완료</button>
        </div>
    </div>
    <div class="design_book_area">
        <div class="layout_left">
            <div class="design_book_cover">
                <div class="design_book_box">
                    <img src="/assets/images/confirm/confirm_img.png" alt="">
                </div>
            </div>
            <div class="my_design_box">
                <div class="control_desgin_btn">
                    <span class="focus">수정요청 사항</span>
                </div>
                <div class="my_design_detail_section mydesign_edit_section">
                    <div class="detail_my_design active">
                        <textarea name="editDesign" class="edit_txt" onkeyup="leng_chk()" placeholder="수정사항을 입력하세요"></textarea>
                        <span class="num_edit">0 / 200</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout_right">
            <div class="page_section">
                <div class="design_txt">
                    <p class="title">이렇게 디자인되고 있어요!</p>
                    <p class="desc">- 디자인 최종 확인 후 우측상단의 컨펌완료 버튼을 눌러주세요<br>
                        - 디자인 수정 요청을 원하시면 수정이 필요한 페이지를 선택하고, 수정내용을 입력해주세요</p>
                </div>
                <ul class="list_design clearfix">
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm1">
                            <label class="chkShape" for="pageConfirm1">
                        </div>
                        <p class="title">표지</p>
                        <label for="pageConfirm1" class="page_img"><img src="/assets/images/album_setting/page_layout_0.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm2">
                            <label class="chkShape" for="pageConfirm2">
                        </div>
                        <p class="title">속표지</p>
                        <label for="pageConfirm2" class="page_img"><img src="/assets/images/album_setting/page_layout_2.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm3">
                            <label class="chkShape" for="pageConfirm3">
                        </div>
                        <p class="title">p. 1,2</p>
                        <label for="pageConfirm3" class="page_img"><img src="/assets/images/album_setting/page_layout_1.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm4">
                            <label class="chkShape" for="pageConfirm4">
                        </div>
                        <p class="title">p. 3.4</p>
                        <label for="pageConfirm4" class="page_img"><img src="/assets/images/album_setting/page_layout_2.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm5">
                            <label class="chkShape" for="pageConfirm5">
                        </div>
                        <p class="title">p. 5,6</p>
                        <label for="pageConfirm5" class="page_img"><img src="/assets/images/album_setting/page_layout_1.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm6">
                            <label class="chkShape" for="pageConfirm6">
                        </div>
                        <p class="title">p. 7,8</p>
                        <label for="pageConfirm6" class="page_img"><img src="/assets/images/album_setting/page_layout_2.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm7">
                            <label class="chkShape" for="pageConfirm7">
                        </div>
                        <p class="title">p. 9,10</p>
                        <label for="pageConfirm7" class="page_img"><img src="/assets/images/album_setting/page_layout_1.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm8">
                            <label class="chkShape" for="pageConfirm8">
                        </div>
                        <p class="title">p. 11,12</p>
                        <label for="pageConfirm8" class="page_img"><img src="/assets/images/album_setting/page_layout_2.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm9">
                            <label class="chkShape" for="pageConfirm9">
                        </div>
                        <p class="title">p. 13,14</p>
                        <label for="pageConfirm9" class="page_img"><img src="/assets/images/album_setting/page_layout_1.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm10">
                            <label class="chkShape" for="pageConfirm10">
                        </div>
                        <p class="title">p. 15,16</p>
                        <label for="pageConfirm10" class="page_img"><img src="/assets/images/album_setting/page_layout_2.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm11">
                            <label class="chkShape" for="pageConfirm11">
                        </div>
                        <p class="title">p. 17,18</p>
                        <label for="pageConfirm11" class="page_img"><img src="/assets/images/album_setting/page_layout_1.png" alt=""></label>
                    </li>
                    <li class="item_design">
                        <div class="page_btn">
                            <input type="radio" class="chk_page" name="pageConfirm" id="pageConfirm12">
                            <label class="chkShape" for="pageConfirm12">
                        </div>
                        <p class="title">p. 19,20</p>
                        <label for="pageConfirm12" class="page_img"><img src="/assets/images/album_setting/page_layout_2.png" alt=""></label>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    </form>
</div>
<script>
    function leng_chk() {
        var frmEdit = document.confirmDesignFrm.editDesign;
        var numTxt = frmEdit.value.length;
        if(numTxt > 200) {
            alert("글자수는 200자 이하로 입력해주세요");
            frmEdit.value = frmEdit.value.substring(0, 200);
            $(".num_edit").html("200 / 200");
            frmEdit.focus();
        }else {
            $(".num_edit").html(numTxt + " / 200");
        }
    }

</script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets/element/footer.php');?>
