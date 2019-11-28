<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');?>
    <div class="mypage_wra">
        <div class="my_menu">
            <ul class="clearfix">
                <li ><a href="/sub/mypage/cart.php">장바구니</a></li>
                <li class="focus"><a href="/sub/mypage/wishlist.php">위시리스트</a></li>
            </ul>
        </div>
        <div class="mypick_area">
            <form>
                <p class="all_cart">총 <span>6</span></p>
                <div class="mypick_list">
                    <div class="mobile_allChk">
                        <p>
                        <input type="checkbox" name="allwishChkM" class="chk_blue" id="allwishChkM" onclick="allChkM();"><label class="chk_shape" for="allwishChk"></label>
                        </p>
                        전체선택
                    </div>
                    <table class="mycart">
                        <colgroup>
                            <col width="13%">
                            <col width="48%">
                            <col width="13%">
                            <col width="13%">
                            <col width="13%">
                        </colgroup>
                        <thead>
                        <tr>
                            <th><input type="checkbox" name="allwishChk" class="chk_blue" id="allwishChk" onclick="allChk();"><label class="chk_shape" for="allwishChk"></label></th>
                            <th>주문정보</th>
                            <th>판매자</th>
                            <th>구매 포인트</th>
                            <th>배송비</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input type="checkbox" name="wishChk1" class="chk_blue" id="wishChk1"><label class="chk_shape" for="wishChk1"></label></td>
                            <td class="pd_box">
                                <a href="#" class="imgBox"><img src="/assets/images/mypage/product1.png" alt=""></a>
                                <div class="pd_info">
                                    <a href="#" class="name">애쉬크로프트의 정수, 류노스케 안경</a>
                                    <p class="detail"><span>수량</span>2</p>
                                    <p class="detail"><span>옵션</span>Brass, Balck Hard case</p>
                                    <div class="detail_hidden">
                                        <p class="detail"><span>판매자</span>류노스케</p>
                                        <p class="detail"><span>구매포인트</span>5,000</p>
                                        <p class="detail"><span>배송비</span>무료</p>
                                    </div>
                                </div>
                            </td>
                            <td>류노스케</td>
                            <td>5,000</td>
                            <td>무료</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="wishChk2" class="chk_blue" id="wishChk2"><label class="chk_shape" for="wishChk2"></label></td>
                            <td class="pd_box">
                                <a href="#" class="imgBox"><img src="/assets/images/mypage/product2.png" alt=""></a>
                                <div class="pd_info">
                                    <a href="#" class="name">애쉬크로프트의 정수, 류노스케 안경</a>
                                    <p class="detail"><span>수량</span>2</p>
                                    <p class="detail"><span>옵션</span>Brass, Balck Hard case</p>
                                    <div class="detail_hidden">
                                        <p class="detail"><span>판매자</span>류노스케</p>
                                        <p class="detail"><span>구매포인트</span>5,000</p>
                                        <p class="detail"><span>배송비</span>무료</p>
                                    </div>
                                </div>
                            </td>
                            <td>류노스케</td>
                            <td>5,000</td>
                            <td>무료</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="wishChk3" class="chk_blue" id="wishChk3"><label class="chk_shape" for="wishChk3"></label></td>
                            <td class="pd_box">
                                <a href="#" class="imgBox"><img src="/assets/images/mypage/product3.png" alt=""></a>
                                <div class="pd_info">
                                    <a href="#" class="name">애쉬크로프트의 정수, 류노스케 안경</a>
                                    <p class="detail"><span>수량</span>2</p>
                                    <p class="detail"><span>옵션</span>Brass, Balck Hard case</p>
                                    <div class="detail_hidden">
                                        <p class="detail"><span>판매자</span>류노스케</p>
                                        <p class="detail"><span>구매포인트</span>5,000</p>
                                        <p class="detail"><span>배송비</span>무료</p>
                                    </div>
                                </div>
                            </td>
                            <td>류노스케</td>
                            <td>5,000</td>
                            <td>무료</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="wishChk4" class="chk_blue" id="wishChk4"><label class="chk_shape" for="wishChk4"></label></td>
                            <td class="pd_box">
                                <a href="#" class="imgBox"><img src="/assets/images/mypage/product4.png" alt=""></a>
                                <div class="pd_info">
                                    <a href="#" class="name">애쉬크로프트의 정수, 류노스케 안경</a>
                                    <p class="detail"><span>수량</span>2</p>
                                    <p class="detail"><span>옵션</span>Brass, Balck Hard case</p>
                                    <div class="detail_hidden">
                                        <p class="detail"><span>판매자</span>류노스케</p>
                                        <p class="detail"><span>구매포인트</span>5,000</p>
                                        <p class="detail"><span>배송비</span>무료</p>
                                    </div>
                                </div>
                            </td>
                            <td>류노스케</td>
                            <td>5,000</td>
                            <td>무료</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="manage_list">
                        <a href="#" onclick="deleteChoice();">선택상품 삭제</a>
                        <a href="#" onclick="deleteAll();">전체상품 삭제</a>
                    </div>
                    <div class="pagination">
                        <a href="#" class="pageArrow prev"><img class="hover_on" src="/assets/images/common/next.png" alt=""><img class="hover_off" src="/assets/images/common/next_off.png" alt=""></a>
                        <a class="page focus" href="#">1</a>
                        <a href="#" class="page">2</a>
                        <a href="#" class="page">3</a>
                        <a href="#" class="page">4</a>
                        <a href="#" class="page">5</a>
                        <a href="#" class="pageArrow next"><img class="hover_on" src="/assets/images/common/next.png" alt=""><img class="hover_off" src="/assets/images/common/next_off.png" alt=""></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script>
        function allChk(){
            if($("#allwishChk").is(":checked")){
                $(".mycart tbody .chk_blue").prop("checked",true);
            }else {
                $(".mycart tbody .chk_blue").prop("checked",false);
            }
        }
        function allChkM(){
            if($("#allwishChkM").is(":checked")){
                $(".mycart tbody .chk_blue").prop("checked",true);
            }else {
                $(".mycart tbody .chk_blue").prop("checked",false);
            }
        }

        function deleteChoice(){
            var wishChk = $(".mycart tbody .chk_blue:checked");
            if(wishChk.length >= 1){
                if(confirm("선택하신 상품을 삭제하시겠습니까?")) {
                    wishChk.parents("tr").remove();
                    return false;
                }
            } else{
                alert("선택하신 상품이 없습니다.");
            }
        }
        function deleteAll(){
            if (confirm("전체 상품을 삭제하시겠습니까?")) {
                $(".mycart tbody tr").remove();
            }

        }
        $(".mycart tbody .chk_blue").click(function () {
            var chkboxNum = $(".mycart tbody .chk_blue").length;
            var chkedNum =  $(".mycart tbody .chk_blue:checked").length;
            if(chkboxNum == chkedNum){
                $("#allwishChk").prop("checked",true);
            }else {
                $("#allwishChk").prop("checked",false);
            }
        });
    </script>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>