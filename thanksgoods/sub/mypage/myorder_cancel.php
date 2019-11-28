<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');?>
<div class="mypage_wra">
    <div class="my_menu">
        <p class="title">주문 취소하기</p>
    </div>
    <div class="mypick_area mycancel_area">
        <div class="detail_order">
            <div class="status_myorder">
                <p class="txt_center">상품이 발송되기 전에 주문 취소 요청을 하실 수 있습니다</p>
            </div>
            <div class="status_myorder">
                <p>상품주문번호 <span class="num">2018082147093960</span></p>
            </div>
        </div>
        <div class="detail_order">
            <dl>
                <dt>주문 정보 <p class="date">2018.08.21</p></dt>
                <dd class="mypick_list">
                    <p class="imgBox">  <img src="/assets/images/mypage/product1.png" alt=""></p>
                    <div class="pd_info">
                        <p class="name">애쉬크로프트의 정수, 류노스케 안경</p>
                        <p class="detail"><span>수량</span>2</p>
                        <p class="detail"><span>옵션</span>Brass, Balck Hard case</p>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="detail_order">
            <dl>
                <dt>결제 정보</dt>
                <dd class="info_pd_order">
                    <p><span>합계 포인트</span>5,000</p>
                    <p><span>배송비</span>0원</p>
                    <p><span>총 구매 금액</span><b class="total">5,000</b></p>
                </dd>
            </dl>
        </div>
        <div class="cancel_detail">
            <dl class="clearfix">
                <dt>사유 선택</dt>
                <dd>
                    <select class="selectbox" name="selectbox_cancel">
                        <option>취소사유를 선택하세요</option>
                    </select>
                </dd>
            </dl>
            <dl class="clearfix">
                <dt>사유 선택</dt>
                <dd>
                    <textarea name="txtareaCancel" class="txtarea"></textarea>
                </dd>
            </dl>
        </div>
        <div class="group_btn">
            <button class="back_btn" onclick="history.go(-1)">이전으로</button>
            <button onclick="window.location.href='/sub/mypage/cancel_complete.php'">취소 요청하기</button>
        </div>
    </div>
</div>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>
