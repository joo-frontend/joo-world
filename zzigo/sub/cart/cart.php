<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets//element/header.php');?>


    <div class="cart-wrap">
        <form name="frmRegular">
        <div class="cart-section">

            <h1 class="title-h1 title-h1-mb">정기배송 리스트</h1>

            <div class="cart-table-area">
                <div class="cart-table">
                    <div class="table">
                        <div class="table-head">
                            <div class="row">
                                <div class="cell col1">
                                    <input id="checkAllAuto" type="checkbox" name="all_check" class="checkbox-custom chk_all_cart">
                                </div>
                                <div class="cell col2">주문 상품 정보</div>
                                <div class="cell col3">상품금액</div>
                                <div class="cell col4">수량</div>
                                <div class="cell col5">주문금액</div>
                            </div>
                        </div>
                        <div class="row cart-list_auto">
                            <input type="hidden" name="item_price" value="11270"/>
                            <div class="cell col1">
                                <input type="checkbox" name="chk" class="checkbox-custom">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly="">
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col2">
                                <img src="/assets/images/product_data/list_item_sIcon.png" alt="">
                                <div>
                                    <p class="cart-item-name">포토북 / 8x8</p>
                                    </br>
                                    <p class="cart-item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                    <p class="cart-order-price">11,270원</p>
                                    <p class="order-item-num">수량 : 1</p>
                                </div>
                                <div class="my_img_num">
                                    <p>등록된 이미지 &nbsp; <span>4</span>/40</p>
                                </div>
                                <div class="btn_upload_book">
                                    <button type="button" class="fileinput-button">데스크톱 업로드</button>
                                    <div id="myDropzone" class="dropzone dropzoneCustom">
                                        <div class="fallback">
                                            <input name="file" type="file" multiple />
                                        </div>
                                    </div>
                                    <button type="button" class="my_cloud_btn">클라우드 업로드</button>
                                </div>
                                <button type="button" class="cart-item-edit">수정</button>
                                <input type="hidden" name="edit_check" value="1">
                            </div>
                            <div class="cell col2_1">
                                <div class="btn_upload_book">
                                    <button type="button" class="fileinput-button">데스크톱 업로드</button>
                                    <div id="myDropzone" class="dropzone dropzoneCustom">
                                        <div class="fallback">
                                            <input name="file" type="file" multiple />
                                        </div>
                                    </div>
                                    <button type="button" class="my_cloud_btn">클라우드 업로드</button>
                                </div>
                                <button type="button" class="cart-item-edit">수정</button>
                            </div>
                            <div class="cell col3">
                                <p class="cart-item-price">11,270원</p>
                            </div>
                            <div class="cell col4">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly/>
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col5">
                                <input type="hidden" name="order_price" value="11270"/>
                                <p class="cart-order-price">11,270원</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-table-bottom">
                    <div class="cart-btn-box">
                        <button type="button" id="allSelectAuto" class="cart-all-chk">전체선택</button>
                        <button type="button" id="itemUnSelectAuto" class="cart-un-chk">선택해제</button>
                        <button type="button" id="delSelectAuto" class="cart-delete">삭제</button>
                    </div>
                    <div class="cart-estimated-amount">
                        결제 에정 금액
                        <p id="estimatedAmountAuto" class="estimated-amount"><span>11,270</span>원</p>
                    </div>
                </div>


            </div>
            <div class="cart-order-box">
                <button type="button" class="cart_regular_btn cart-order-btn">정기배송 주문하기</button>
            </div>
        </div>
        </form>
        <form name="frmCart">
        <div class="cart-section">

            <h1 class="title-h1">장바구니</h1>
            <h1 class="title-h1 title-h1-mb2">장바구니</h1>
            <div class="cart-table-area">
                <div class="cart-table-amount">
                    총<span id="cart-count">3</span>개
                </div>

                <div class="cart-table">
                    <div class="table">
                        <div class="table-head">
                            <div class="row">
                                <div class="cell col1">
                                    <input id="checkAll" type="checkbox" name="all_check" class="checkbox-custom chk_all_cart">
                                </div>
                                <div class="cell col2">주문 상품 정보</div>
                                <div class="cell col3">상품금액</div>
                                <div class="cell col4">수량</div>
                                <div class="cell col5">주문금액</div>
                            </div>
                        </div>
                        <div class="row cart-list">
                            <input type="hidden" name="item_price" value="11270"/>
                            <div class="cell col1">
                                <input type="checkbox" name="chk" class="checkbox-custom">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly="">
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col2">
                                <img src="/assets/images/product_data/list_item_sIcon.png" alt="">
                                <div>
                                    <p class="cart-item-name">포토북 / 8x8</p>
                                    </br>
                                    <p class="cart-item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                    <p class="cart-order-price">11,270원</p>
                                    <p class="order-item-num">수량 : 1</p>
                                </div>
                                <button type="button" class="cart-item-edit">수정</button>
                                <input type="hidden" name="edit_check" value="1">
                            </div>
                            <div class="cell col2_1">
                                <button type="button" class="cart-item-edit">수정</button>
                            </div>
                            <div class="cell col3">
                                <p class="cart-item-price">11,270원</p>
                            </div>
                            <div class="cell col4">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly/>
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col5">
                                <input type="hidden" name="order_price" value="11270"/>
                                <p class="cart-order-price">11,270원</p>
                            </div>
                        </div>
                        <div class="row cart-list">
                            <input type="hidden" name="item_price" value="11270"/>
                            <div class="cell col1">
                                <input type="checkbox" name="chk" class="checkbox-custom">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly="">
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col2">
                                <img src="/assets/images/product_data/list_item_sIcon.png" alt="">
                                <div>
                                    <p class="cart-item-name">포토북 / 9x9</p>
                                    </br>
                                    <p class="cart-item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                    <p class="cart-order-price">11,270원</p>
                                    <p class="order-item-num">수량 : 1</p>
                                </div>
                                <button type="button" class="cart-item-edit">수정</button>
                                <input type="hidden" name="edit_check" value="1">
                            </div>
                            <div class="cell col2_1">
                                <button type="button" class="cart-item-edit">수정</button>
                            </div>
                            <div class="cell col3">
                                <p class="cart-item-price">11,270원</p>
                            </div>
                            <div class="cell col4">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly/>
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col5">
                                <input type="hidden" name="order_price" value="11270"/>
                                <p class="cart-order-price">11,270원</p>
                            </div>
                        </div>
                        <div class="row cart-list">
                            <input type="hidden" name="item_price" value="11270"/>
                            <div class="cell col1">
                                <input type="checkbox" name="chk" class="checkbox-custom">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly="">
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col2">
                                <img src="/assets/images/product_data/list_item_sIcon.png" alt="">
                                <div>
                                    <p class="cart-item-name">포토북 / 10x10</p>
                                    </br>
                                    <p class="cart-item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                    <p class="cart-order-price">11,270원</p>
                                    <p class="order-item-num">수량 : 1</p>
                                </div>
                                <button type="button" class="cart-item-edit">수정</button>
                                <input type="hidden" name="edit_check" value="1">
                            </div>
                            <div class="cell col2_1">
                                <button type="button" class="cart-item-edit">수정</button>
                            </div>
                            <div class="cell col3">
                                <p class="cart-item-price">11,270원</p>
                            </div>
                            <div class="cell col4">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly/>
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col5">
                                <input type="hidden" name="order_price" value="11270"/>
                                <p class="cart-order-price">11,270원</p>
                            </div>
                        </div>
                        <div class="row cart-list">
                            <input type="hidden" name="item_price" value="11270"/>
                            <div class="cell col1">
                                <input type="checkbox" name="chk" class="checkbox-custom">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly="">
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col2">
                                <img src="/assets/images/product_data/list_item_sIcon.png" alt="">
                                <div>
                                    <p class="cart-item-name">포토북 / 11x11</p>
                                    </br>
                                    <p class="cart-item-option">옵션:하드커버, 무광코팅, 무광지</p>
                                    <p class="cart-order-price">11,270원</p>
                                    <p class="order-item-num">수량 : 1</p>
                                </div>
                                <button type="button" class="cart-item-edit">수정</button>
                                <input type="hidden" name="edit_check" value="1">
                            </div>
                            <div class="cell col2_1">
                                <button type="button" class="cart-item-edit">수정</button>
                            </div>
                            <div class="cell col3">
                                <p class="cart-item-price">11,270원</p>
                            </div>
                            <div class="cell col4">
                                <div class="ea_check_wrap">
                                    <button type="button" class="ea_minus">-</button>
                                    <input class="ea_input" type="text" value="1" readonly/>
                                    <button type="button" class="ea_plus">+</button>
                                </div>
                            </div>
                            <div class="cell col5">
                                <input type="hidden" name="order_price" value="11270"/>
                                <p class="cart-order-price">11,270원</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-table-bottom">
                    <div class="cart-btn-box">
                        <button type="button" id="allSelect" class="cart-all-chk">전체선택</button>
                        <button type="button" id="itemUnSelect" class="cart-un-chk">선택해제</button>
                        <button type="button" id="delSelect" class="cart-delete">삭제</button>
                    </div>
                    <div class="cart-estimated-amount">
                        결제 에정 금액
                        <p id="estimatedAmount" class="estimated-amount"><span>11,270</span>원</p>
                    </div>
                </div>


            </div>
            <div class="cart-order-box">
                <button type="submit" class="cart-order-btn">주문하기</button>
            </div>
            <!--<div class="cart-paging-box">
                <button class="cart-prev"></button>
                <ul>
                    <a href=""><li class="paging-active">1</li></a>
                    <a href=""><li>2</li></a>
                    <a href=""><li>3</li></a>
                    <a href=""><li>4</li></a>
                    <a href=""><li>5</li></a>
                </ul>
                <button class="cart-next"></button>
            </div>-->
            <div class="pagination">
                <span class="arrow prev"><img src="/assets/images/all/page_prev.png" alt=""></span>
                <span class="page focus">1</span>
                <span class="page">2</span>
                <span class="page">3</span>
                <span class="page">4</span>
                <span class="page">5</span>
                <span class="arrow next"><img src="/assets/images/all/page_next.png" alt=""></span>
            </div>
        </div>
        </form>
    </div>


<!--페이지 삭제 확인 요청 모달-->
<div id="deleteModal" class="delete-modal">
    <div class="modal-box">
        <p>페이지를 삭제하시겠습니까?</p>
        <div>
            <button type="button" id="deleteOk" class="deleteOk">확인</button>
            <button type="button" id="deleteCancel">취소</button>
        </div>
    </div>
    <div class="modal-back"></div>
</div>

<!--수정 완료x -> 모달-->
<div id="editChkModal" class="edit-chk-modal">
    <div class="modal-box">
        <p>편집이 완료되지 않은 상품이 있습니다.</p>
        <div class="edit-un-list">
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </div>
        <button type="button" id="editOk" class="edit-ok-btn">확인</button>
    </div>
    <div class="modal-back"></div>
</div>
<!--사진 미등록 -> 모달-->
<div id="editChkPhoto" class="edit-chk-modal">
    <div class="modal-box">
        <p>이미지가 전부 등록되지 않았습니다</p>
        <div class="photo_desc">
            <p>사진을 모두 등록 후 이용해주세요</p>
        </div>
        <button type="button" class="edit-ok-btn">확인</button>
    </div>
    <div class="modal-back"></div>
</div>
<!--앨범 수정 팝업-->
<div class="pop pop_album_edit">
    <div class="popup">
        <div class="photo_album_pop_box">
            <p class="close_pop"><img src="/assets/images/all/close_pop.png" alt=""></p>
            <div class="photo_album_detail">
                <div class="photo_album_section">
                    <div class="detail_ai_album_box">
                        <p class="photo_album_title">ㅣ 포토앨범 옵션 선택하기</p>
                        <div class="photo_album_contents">
                            <p class="desc">포토북의 사이즈와 커버, 내지 스타일을 선택하세요</p>
                            <div class="option_book">
                                <p class="lb">사이즈</p>
                                <div class="option_list">
                                    <p class="option focus">210 x 297</p>
                                    <p class="option">182 x 257</p>
                                    <p class="option">167 x 236</p>
                                    <p class="option">153 x 225</p>
                                    <p class="option">200 x 200</p>
                                </div>
                            </div>
                            <div class="option_book">
                                <p class="lb">커버</p>
                                <div class="option_list">
                                    <p class="option">하드커버</p>
                                    <p class="option focus">소프트커버</p>
                                </div>
                            </div>
                            <div class="option_book">
                                <p class="lb">내지</p>
                                <div class="option_list">
                                    <p class="option focus">무광지</p>
                                    <p class="option">유광지</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="price_album_box">
                        <div class="info_album_summary">
                            <div class="layout_summary">
                                <div class="item_info_ai">
                                    <p class="lb">사이즈</p>
                                    <p class="txt">210mm x 297mm</p>
                                </div>
                                <div class="item_info_ai">
                                    <p class="lb">총 이미지 개수</p>
                                    <p class="txt">최대 40장</p>
                                </div>
                                <div class="item_info_ai">
                                    <p class="lb">페이지</p>
                                    <p class="txt">15페이지</p>
                                </div>
                            </div>
                            <div class="layout_summary">
                                <div class="item_info_ai">
                                    <p class="lb">페이지 추가 가격</p>
                                    <p class="txt">1장(2p)당 890원</p>
                                </div>
                                <div class="item_info_ai">
                                    <p class="lb">배송안내</p>
                                    <p class="txt">제작 1~2일 및 택배배송 1~2일 소요</p>
                                </div>
                                <div class="item_info_ai">
                                    <p class="lb">배송료</p>
                                    <p class="txt">2,500원 (5만원 이상 주문 시 무료)</p>
                                </div>
                            </div>
                        </div>
                        <div class="total_price">
                            <p>총 가격 <span>₩ 0,000</span></p>
                        </div>
                        <div class="btn_group_deatil_album">
                            <button class="btn_gray">정기배송 디자인으로 지정</button>
                            <button>주문하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--팝업 cloud-->
<div class="pop pop_cloud">
    <div class="popup">
        <p class="close_pop"><img src="/assets/images/all/close_pop.png" alt=""></p>
        <div class="area_cloud_pop">
            <div class="title_pop_box">
                <p>내 클라우드</p>
                <div class="layout_list_icon">
                    <span class="focus">
                        <img class="img_off" src="/assets/images/mypage/cloud_layout_icon.png" alt="">
                        <img class="img_on" src="/assets/images/mypage/cloud_layout_icon_on.png" alt="">
                    </span>
                    <span>
                        <img class="img_off" src="/assets/images/mypage/list_icon_off.png" alt="">
                        <img class="img_on" src="/assets/images/mypage/list_icon.png" alt="">
                    </span>
                </div>
            </div>
            <div class="cloud_pop_box">
                <div class="list_cloud_file active">
                    <ul class="clearfix">
                        <li>
                            <div class="item_my_photo item_my_folder">
                                <svg version="1.1" id="cl_item_layout" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" style="enable-background:new 0 0 160 160;opacity:0;display:block" xml:space="preserve"></svg>
                                <div class="bg"><img src="/assets/images/list/folder.png" alt=""></div>
                                <div class="my_cloud_chk">
                                    <input type="checkbox" class="chkbox" id="fileChk1" name="fileChk1">
                                    <label for="fileChk1" class="chkShape"></label>
                                </div>
                                <p class="date">2018-05-21</p>
                                <div class="name">
                                    <p>일본여행</p>
                                    <span>1.2GB</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item_my_photo">
                                <svg version="1.1" id="cl_item_layout" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" style="enable-background:new 0 0 160 160;opacity:0;display:block" xml:space="preserve"></svg>
                                <div class="bg"><img src="https://www.placehold.it/160X160" alt=""></div>
                                <div class="my_cloud_chk">
                                    <input type="checkbox" class="chkbox" id="fileChk2" name="fileChk2">
                                    <label for="fileChk2" class="chkShape"></label>
                                </div>
                                <p class="date">2018-05-21</p>
                                <div class="name">
                                    <p>chocolate1212.jpg</p>
                                    <span>568KB</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item_my_photo">
                                <svg version="1.1" id="cl_item_layout" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" style="enable-background:new 0 0 160 160;opacity:0;display:block" xml:space="preserve"></svg>
                                <div class="bg"><img src="https://www.placehold.it/160X160" alt=""></div>
                                <div class="my_cloud_chk">
                                    <input type="checkbox" class="chkbox" id="fileChk2" name="fileChk2">
                                    <label for="fileChk2" class="chkShape"></label>
                                </div>
                                <p class="date">2018-05-21</p>
                                <div class="name">
                                    <p>chocolate121dfefd2.jpg</p>
                                    <span>568KB</span>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="list_cloud_file">
                    <table class="tb_files">
                        <colgroup>
                            <col width="5%">
                            <col width="43%">
                            <col width="35%">
                            <col width="17%">
                        </colgroup>
                        <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" class="chkbox" id="fileChkT1" name="fileChkT1">
                                <label for="fileChkT1" class="chkShape"></label>
                            </td>
                            <td><a href="#" class="name">-일본여행</a></td>
                            <td>2018. 12. 31</td>
                            <td>1.2GB</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="chkbox" id="fileChkT2" name="fileChkT2">
                                <label for="fileChkT2" class="chkShape"></label>
                            </td>
                            <td><a href="#" class="name">-중국여행</a></td>
                            <td>2018. 06. 24</td>
                            <td>1.2GB</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="chkbox" id="fileChkT3" name="fileChkT3">
                                <label for="fileChkT3" class="chkShape"></label>
                            </td>
                            <td><a href="#" class="name">chocolate1212.jpg</a></td>
                            <td>2018. 05. 21</td>
                            <td>568KB</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="chkbox" id="fileChkT4" name="fileChkT4">
                                <label for="fileChkT4" class="chkShape"></label>
                            </td>
                            <td><a href="#" class="name">d%1203dafjkldabn.jpg</a></td>
                            <td>2018. 04. 23</td>
                            <td>22.0KB</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cloud_file_btn">
                <button>가져오기</button>
            </div>
        </div>
    </div>
</div>
<!--팝업 정기배송-->
<div id="deliveryRegular" class="delivery-modal">
    <div class="modal-box">
        <p>정기배송 상품의 디자인으로 지정하시겠습니까?</p>
        <div class="photo_desc">
            <p>기존에 지정된 디자인에 들어가 있는 사진들은 모두 초기화됩니다</p>
        </div>
        <button type="submit" class="regular_ok">예</button>
        <button type="button" class="regular_no">아니요</button>
    </div>
    <div class="modal-back"></div>
</div>
<!--팝업 정기배송 확인-->
<div id="deliveryRegularConfirm" class="delivery-modal">
    <div class="modal-box">
        <p>정기배송 상품의 디자인으로 지정하였습니다</p>
        <div class="photo_desc">
            <p>장바구니에서 확인하세요</p>
        </div>
        <button type="button" onclick="window.location.href='/sub/mypage/mypage_order.php'" class="link_mypage">마이페이지로 이동</button>
        <button type="button" class="close_pop">닫기</button>
    </div>
    <div class="modal-back"></div>
</div>
<script src="/assets/js/dropzone/dropzone.js"></script>
<script>
    $(document).ready(function () {
        $(".btn_group_deatil_album .btn_gray").click(function () {
            $("#deliveryRegular").show();
            $("#deliveryRegular button.regular_no").click(function () {
                $("#deliveryRegular").hide();
            });
            $("#deliveryRegular button.regular_ok").click(function () {
                $("#deliveryRegular").hide();
                $("#deliveryRegularConfirm").show();
                $("#deliveryRegularConfirm .close_pop").click(function () {
                    $("#deliveryRegularConfirm").hide();
                });
            });
        });


        var myDropzone = new Dropzone("div#myDropzone", {
            url: "/file/post",
            dictDefaultMessage: "",
            uploadMultiple: true,
            clickable: ".fileinput-button",
            init: function() {
                this.on("addedfile", function(file) {
                    var count= myDropzone.files.length;
                    $(".my_img_num span").html(count);
                });
            }
        });
        Dropzone.autoDiscover = false;

        var unEditCheck = true; //수정여부 체크

        //화폐단위 정규식
        var numberWithCommas = function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };


        var itemPriceSet = function (item) {
            // console.log( $(item).parents('.cart-list').find('.ea_input').val() );
            // console.log( $(item).parents('.cart-list').find('input[name=item_price]').val() );

            var ea = $(item).parents('.cell').find('.ea_input').val();
            var itemPrice = $(item).parents('.cart-list').find('input[name=item_price]').val();
            var itemPriceSet = parseInt(ea) * parseInt(itemPrice);
            $(item).parents('.cart-list').find('.cart-order-price').html(numberWithCommas(itemPriceSet)+ '원');
            $(item).parents('.cart-list').find('.col5 .cart-order-price').html(numberWithCommas(itemPriceSet)+ '원');
            $(item).parents('.cart-list').find('input[name=order_price]').val(itemPriceSet);

            //정기배송
            var ea2 = $(item).parents('.cell').find('.ea_input').val();
            var itemPrice2 = $(item).parents('.cart-list_auto').find('input[name=item_price]').val();
            var itemPriceSet2 = parseInt(ea2) * parseInt(itemPrice2);
            $(item).parents('.cart-list_auto').find('.cart-order-price').html(numberWithCommas(itemPriceSet2)+ '원');
            $(item).parents('.cart-list_auto').find('.col5 .cart-order-price').html(numberWithCommas(itemPriceSet2)+ '원');
            $(item).parents('.cart-list_auto').find('input[name=order_price]').val(itemPriceSet2);


        };

        var itemTotalPriceSet = function () {
            var estimatedAmount = 0;
            var estimatedAmountAuto = 0;
            $('.cart-list').each(function() {
                estimatedAmount += parseInt($(this).find('input[name=order_price]').val());
                // console.log(estimatedAmount);
            });
            $('.cart-list_auto').each(function() {
                estimatedAmountAuto += parseInt($(this).find('input[name=order_price]').val());
            });

            $('#estimatedAmount span').html(numberWithCommas(estimatedAmount));
            //정기배송
            $('#estimatedAmountAuto span').html(numberWithCommas(estimatedAmountAuto));
        };
        itemTotalPriceSet();

        $('input[name=chk]').on('click', function(e) {
                   var tableChk = $(this).parents(".cart-table-area");
                   var cartListSize = tableChk.find('.cart-list').size();
                   var cartListSize2 = tableChk.find('.cart-list_auto').size();
                   var checkedNum = 0;
                   tableChk.find('input[name=chk]').each(function() {
                       if( $(this).is(':checked') === true ) {
                           checkedNum++;
                       }
                   });
                   if( cartListSize === checkedNum ) {
                       tableChk.find('.chk_all_cart').prop('checked', true);
                   } else if(cartListSize2 === checkedNum) {
                       tableChk.find('.chk_all_cart').prop('checked', true);
                   } else {
                       tableChk.find('.chk_all_cart').prop('checked', false);
                   }
               });
        //전체선택
        $(".chk_all_cart").on('click', function(e){
            var allChk = $(this);
            if( allChk.prop("checked") ){
                allChk.parents(".cart-table-area").find("input[name=chk]").prop("checked",true);
            } else {
                allChk.parents(".cart-table-area").find("input[name=chk]").prop("checked",false);
            }
        });

       /* $("input[name=chk]").click(function () {
            var tableChk = $(this).parents(".cart-table-area");
            var cartListSize = tableChk.find('.cart-list').size();
        });*/

        //전체선택
        $(".cart-all-chk").on('click', function(e){
            $(this).parents(".cart-table-area").find("input[name=all_check]").prop("checked",true);
            $(this).parents(".cart-table-area").find("input[name=chk]").prop("checked",true);
        });
        /*$("#allSelect").on('click', function(e){
            $(this).parents(".cart-table-area").find("input[name=all_check]").prop("checked",true);
            $(this).parents(".cart-table-area").find("input[name=chk]").prop("checked",true);
        });*/

      /*  $("#allSelectAuto").on('click', function(e){
            $(this).parents(".cart-table").find("input[name=all_check]").prop("checked",true);
            $("input[name=chk]").prop("checked",true);
        });*/

        //선택해제
        $('.cart-un-chk').on('click', function(e) {
            e.preventDefault();
            $(this).parents(".cart-table-area").find('input[name=chk]').each( function() {
                if( $(this).is(":checked") === true ) {
                    $(this).prop('checked', false);
                }
            });
            $(this).parents(".cart-table-area").find(".chk_all_cart").prop('checked', false);
        });

        //삭제
        // $('#delSelect').on('click', function(e) {
        //     e.preventDefault();
        //     $('input[name=chk]').each( function() {
        //         if( $(this).is(":checked") === true ) {
        //             $(this).parents('.cart-list').remove();
        //         }
        //     });
        //     $("#checkAll").prop('checked', false);
        // });
        $('.cart-delete').on('click', function(e) {
            e.preventDefault();
            var choiceCartTable = $(this).parents(".cart-table-area");
            var chkCartList = $(this).parents(".cart-table-area").find('input[name=chk]');
            var checkNum = 0;
            $(this).parents(".cart-table-area").find('input[name=chk]').each( function() {
                if( $(this).is(":checked") === true ) {
                    checkNum++;
                }
            });
            if( checkNum > 0) {
                $('#deleteModal').css('display', 'block');
                $('.deleteOk').on('click',function(e) {
                    e.preventDefault();
                    chkCartList.each( function() {
                        if( $(this).is(":checked") === true ) {
                            $(this).parents('.cart-list').remove();
                            $(this).parents('.cart-list_auto').remove();
                        }
                    });
                    choiceCartTable.find(".chk_all_cart").prop('checked', false);
                    $('#deleteModal').css('display','none');
                    itemTotalPriceSet();
                });
            }
        });
       /* $('#deleteOk').on('click',function(e) {
            e.preventDefault();
            $('input[name=chk]').each( function() {
                if( $(this).is(":checked") === true ) {
                    $(this).parents('.cart-list').remove();
                }
            });
            $("#checkAll").prop('checked', false);
            $('#deleteModal').css('display','none');
            itemTotalPriceSet();
        });*/


        $('#deleteCancel').on('click',function(e) {
            e.preventDefault();
            $('#deleteModal').css('display','none');
        });


        //수량+
        $('.ea_plus').on('click', function(e) {
            e.preventDefault();
            var eaInput = $(this).siblings('.ea_input');
            var eaVal = parseInt( eaInput.val() );
            eaInput.val( eaVal + parseInt(1) );
            // itemPriceSet(this);
            // itemTotalPriceSet();

            //editUnCheck(this); //수정 미완료
            editCheck(this); //수정 완료
            itemPriceSet(this); //주문금액 셋팅
            itemTotalPriceSet(); //결제예정금액 전체 셋팅
        });
        //수량-
        $('.ea_minus').on('click', function(e) {
            e.preventDefault();
            var eaInput = $(this).siblings('.ea_input');
            var eaVal = parseInt(eaInput.val());
            if ( eaVal > 1 ) {
                eaInput.val( eaVal - parseInt(1) );
                // itemPriceSet(this);
                // itemTotalPriceSet();

                //editUnCheck(this); //수정 미완료
                editCheck(this); //수정 완료
                itemPriceSet(this); //주문금액 셋팅
                itemTotalPriceSet(); //결제예정금액 전체 셋팅
            }
        });

        // 수정버튼
        /*$('.cart-item-edit').on('click', function () {

        });*/

        //수정미완료 false
        var editUnCheck = function(item) {
            // true = 1, false = 0
            $(item).parents('.cart-list').find('input[name=edit_check]').val('0');
        };
        //수정완료 true
        var editCheck = function(item) {
            // true = 1(수정), false = 0(미수정)
            $(item).parents('.cart-list').find('input[name=edit_check]').val('1');
        };

        //상품 수정여부 확인
        var allEditCheck = function() {
            var unEditList = '';
            var unEditItemName = '';
            unEditCheck = true;

            $('#editChkModal .edit-un-list').empty();

            $('input[name=edit_check]').each(function(){
                if ( $(this).val() === '0' ) {
                    // console.log( $(this).parents('.cart-list').find('.cart-item-name').text() );
                    unEditItemName = $(this).parents('.cart-list').find('.cart-item-name').text();
                    unEditList += '<p>상품명 : '+ unEditItemName + '</p>';
                    unEditCheck = false;
                }
            });
            $('#editChkModal .edit-un-list').append(unEditList);
            return unEditCheck;
        }

        //
        $('#editOk').on('click', function() {
            $('#editChkModal').css('display','none');
        });

        //버튼 활성화 이벤트
        $('.cart-btn-box button').hover(
            function() { $(this).addClass('btn-active') },
            function() { $('.cart-btn-box button').removeClass('btn-active'); }
        );
        $('.ea_check_wrap button').hover(
            function() { $(this).addClass('hover-active') },
            function() { $('.ea_check_wrap button').removeClass('hover-active'); }
        );
        $('.cart-item-edit').hover(
            function() { $(this).addClass('btn-active'); },
            function() { $('.cart-item-edit').removeClass('btn-active'); }
        );

        //수정여부 체크 후 submit
        $('form').submit(function() {
            if( allEditCheck() === false ) {
                $('#editChkModal').css('display','block');
                return false;
            } else {
                return true;
            }
        });
        /*edit popup*/
        $(".cart-item-edit").click(function () {
            $(".pop_album_edit").show();
            $(".pop_album_edit .close_pop").click(function () {
                $(".pop_album_edit").hide();
            });
        });

        $(".my_cloud_btn").click(function () {
            $(".pop.pop_cloud").show();
            $(".pop.pop_cloud .close_pop").click(function () {
                $(".pop.pop_cloud").hide();
            });
        });
        $(".my_file_btn").click(function () {
            $(".hidden_file").trigger();
        });

        $(".cart_regular_btn").click(function () {
            $("#editChkPhoto").show();
            $("#editChkPhoto .edit-ok-btn").click(function () {
                $("#editChkPhoto").hide();
            });
        });

    })
</script>
<?php require_once ('/DK/hosting_users/zzigo/www/public_html/assets//element/footer_empty.php');?>
