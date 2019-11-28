<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$thanks = new thanks_contents();
$session = new session();
if(!$session -> usCheck()){
alertMon('aNr','해당 기능은 로그인 후 이용하실 수 있습니다.','/');
die;
}
$thanks -> view_cart();
$cart = $thanks -> get_cart();
$thanksgoods_market = new thanksgoods_market();
?>
<div class="mypage_wra">
    <div class="my_menu">
        <ul class="clearfix">
            <li class="focus"><a href="/sub/mypage/cart.php">장바구니</a></li>
            <li><a href="/sub/mypage/wishlist.php">위시리스트</a></li>
        </ul>
    </div>
    <div class="mypick_area">
        <form>
            <p class="all_cart">총 <span>6</span></p>
            <div class="mypick_list">
                <!--pc/tablet-->
                <div class="mobile_allChk">
                   <p>
                       <input type="checkbox" name="allcartChk" class="chk_blue" id="allcartChkM" onclick="allChkM();"><label class="chk_shape" for="allcartChk"></label>
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
                        <th><input type="checkbox" name="allcartChk" class="chk_blue" id="allcartChk" onclick="allChk();"><label class="chk_shape" for="allcartChk"></label></th>
                        <th>주문정보</th>
                         
                        <th>구매 포인트</th>
                        <th>배송비</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    <?php for($i=0;$i<count($cart);$i++){   
                        $data = $thanksgoods_market->get_item_detail($cart[$i]['target_item']);
                        ?>
                         <tr>
                        <td><input type="checkbox" name="cartChk1" class="chk_blue" id="cartChk<?=$i?>"><label class="chk_shape" for="cartChk<?=$i?>"></label></td>
                        <td class="pd_box">
                            <a href="#" class="imgBox" style="background-image:url(<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$cart[$i]['target_item'].'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }?>); background-size:cover; background-position:center;"><img src="/assets/images/mypage/product1.png" alt="" style="opacity:0;"></a>
                            <div class="pd_info">
                                <a href="#" class="name"><?=$data['name']?></a>
                                <p class="detail"><span >수량</span><small data-num="1"><?=$cart[$i]['qty']?></small></p>
                                <p class="detail"><span>옵션</span><?=$cart[$i]['option']?></p>
                                <div class="detail_hidden">
                                    <p class="detail"><span>판매자</span>류노스케</p>
                                    <p class="detail"><span>구매포인트</span>5,000</p>
                                    <p class="detail"><span>배송비</span>무료</p>
                                </div>
                            </div>
                        </td>
                   
                        <td><?=number_format($cart[$i]['price'])?></td>
                        <td><?=number_format($data['delivery_price'])?></td>
                        </tr>
                    <?php } ?>
                
                       
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
                <div class="total_point">
                    <p class="order_point_box">총 구매 포인트 <span>5,000</span></p>
                    <p class="btn_order_box"><button>주문하기</button></p>
                </div>
            </div>
        </form>
    </div>
</div>
<script>
    /*총 구매 금액*/
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }
    function calcPoint() {
        var tableNum = $(".mycart tbody tr").length;
        var totalP = 0;
        for(i=1; i<=tableNum; i++){
            var quantity = $(".mycart tr:nth-child("+i+") td:nth-child(2) .pd_info .detail small").data("num");
            var pointEach = String($(".mycart tbody tr:nth-child("+i+") td:nth-child(3)").html());
            var numPoint = pointEach.replace(/[^\d]+/g, '');
            var numberP = Number(numPoint);
            totalP += numberP * quantity;
            var totalPoint = addComma(totalP);
            $(".order_point_box span").html(totalPoint);
        }
    }
    calcPoint();
    function allChk(){
        if($("#allcartChk").is(":checked")){
            $("#allcartChk").attr("checked",true);
            $(".mycart tbody .chk_blue").prop("checked",true);
        }else {
            $("#allcartChk").attr("checked",false);
            $(".mycart tbody .chk_blue").prop("checked",false);
        }
    }
    function allChkM(){
        if($("#allcartChkM").is(":checked")){
            $("#allcartChkM").attr("checked",true);
            $(".mycart tbody .chk_blue").prop("checked",true);
        }else {
            $("#allcartChkM").attr("checked",false);
            $(".mycart tbody .chk_blue").prop("checked",false);
        }
    }

    $(".mycart tbody .chk_blue").click(function () {
        var chkboxNum = $(".mycart tbody .chk_blue").length;
        var chkedNum =  $(".mycart tbody .chk_blue:checked").length;
        if(chkboxNum == chkedNum){
            $("#allcartChk").prop("checked",true);
        }else {
            $("#allcartChk").prop("checked",false);
        }
    });
    function deleteChoice(){
        var cartChk = $(".mycart tbody .chk_blue:checked");
        if(cartChk.length >= 1){
            if(confirm("선택하신 상품을 삭제하시겠습니까?")) {
                cartChk.parents("tr").remove();
                calcPoint();
                return false;
            }
        } else{
            alert("선택하신 상품이 없습니다.");
        }
    }
    function deleteAll(){
        if (confirm("전체 상품을 삭제하시겠습니까?")) {
            $(".mycart tbody tr").remove();
            $(".order_point_box span").html("0");
        }
    }


</script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>
