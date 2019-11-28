<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php'); 
$thanksgoods_market = new thanksgoods_market();
$target = $_GET['target'];
if(empty($target)){
    alertMon('aNb','잘못된 접근입니다.','');
    die;
}
$data = $thanksgoods_market->get_item_detail($target);
$option_name = $data['option'];
$option_value = $data['option_value'];
$options = explode('|',$option_name);
$values = explode(']',$option_value);

 if ($data['is_sale'] == 1) {
    $ori_p = $data['sale_price'];
    }else{
    $ori_p = $data['price'];
    }
?>

    <div class="market_wra">
        <div class="my_menu my_market">
            <div class="menu_area">
                <a href="#" class="link_chk_my">주문·배송 조회</a>
                <ul class="clearfix">
                    <li ><a href="/sub/market/market_home.php">HOME</a></li>
                    <li><a href="#">스탠드업펀딩</a></li>
                    <li class="focus"><a href="/sub/market/market_new.php">신제품</a></li>
                    <li><a href="/sub/market/market_custom.php">맞춤상품</a></li>
                </ul>
            </div>
        </div>
        <div class="product_detail_area">
            <div class="product_imgBg" style="background-image:url(<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$target.'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }?>);background-size:cover; background-position:center;"><img src="/assets/images/market/product.png" alt="" style="opacity:0;"></div>
            <div class="product_card">
                <div class="product_card_box">
                    <div class="sell_info">
                        <p class="fav">105<input type="checkbox" class="fav_chk"></p>
                    </div>
                    <p class="name"><?php echo $data['name']; ?></p>
                    <div class="pd_card_info">
                        <p class="price"><?php if ($data['is_sale'] == 1) { ?> <del><?php echo number_format($data['price']).'P'; ?></del> → <?php echo number_format($data['sale_price']).'P'; ?> <?php } else { ?>
                                                <?php echo number_format($data['price']).'P'; ?> <?php } ?></p>
                        <a href="/sub/point/my_point.php" class="charge_point">포인트 충전 +</a>
                        <div class="option_box open">
                            <form action="/sub/order/order.php" method="POST" onsubmit="return val_ck();">
                                <input type="hidden" name="target" value="<?=$target?>">
                            <p class="option_btn">옵션선택 <img class="hide" src="/assets/images/market/before_off.png" alt=""><img class="show" src="/assets/images/market/next.png" alt=""></p>
                            <div class="detail_option">
                                <div class="quantity">
                                    <div>수량
                                        <p class="minus" onclick="minusNum()">-</p>
                                        <span class="num">1</span>
                                        <p class="plus" onclick="plusNum()">+</p>
                                    </div>
                                    <p class="pd_price"><span class="pd_price_text"><?=number_format($ori_p)?></span> Point
                                        <input type="hidden" value="<?=$ori_p?>" class="pdPriceEach">
                                    </p>
                                </div>
                                <?php for($i=0; $i<count($options)-1;$i++){
                                $op_val = explode('`',$options[$i]);
                                $detail_option = explode('`',$values[$i]);
                                 ?>
                                <p style="text-align:left;"><span class="op_name"><?=$op_val[0]?></span> <?php if(count($op_val)>1){ echo '<span style="color:red">*필수 선택</span>';}?></p>
                                <select name="selectType" class="select_pd <?php if(count($op_val)>1){ echo 'req';}?>" >
                                    <option value=''>-선택-</option>
                                 <?php for($y=0;$y<count($detail_option);$y++){
                                    $val = explode('|',$detail_option[$y]);
                                    if($val[1]!=0){
                                    $add_price = '(+'.$val[1].'P)';
                                    }else{
                                    $add_price = '';
                                    }
                                    echo '<option value="'.$val[1].'">'.$val[0].$add_price.'</option>';

                                }?>
                                </select>
                                <?php }?>
                                <!--<select name="selectType" class="select_pd">
                                    <option value="">타입</option>
                                </select>
                                <select name="selectColor" class="select_pd">
                                    <option value="">색상</option>
                                </select>-->
                                <div class="total_price">
                                    총 구매 포인트 <span><?=number_format($ori_p)?></span>
                                </div>
                            </div>
                                <div class="btn_group btn_group_2">
                                    <button type="button" onclick="add_cart();" class="btn_gray">장바구니 담기</button>
                                    <button class="btn_blue">구매하기</button>
                                </div>
                                <input type="hidden" name="total_price" id="total_price" value="<?=$ori_p?>">
                                <input type="hidden" name="total_option" id="total_option" value="">
                                <input type="hidden" name="qty" id="qty" value="1">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product_detail">
                <?=$data['description']?>
                <!--<p class="title">워싱감이 살아있는 거친 느낌의 발색</p>
                <p class="desc">아쿠타가와 류노스케(芥川 龍之介)와 안경 류노스케, 아쿠타가와 류노스케는 일본 근대에 활동했던 소설가다. 그는 주로 고전 설화 등에서 소재를 가져와 각색한 단편 소설을 내놓았다. 전체적인 작품 분위기는 어둡고, 암울하며, 다양한 인간군상이 등장하고 이를 세세하게 톺는 데 주력한다. 말년에는 신경쇠약에 빠져, 결국 젊은 나이에 음독자살하고 말았다. 그리고 그런 그를 우상으로 바라봤던 인물이 &lt;인간 실격> 등으로 유명한 다자이 오사무가 되겠다.</p>
                <img src="/assets/images/market/img_detail1.png" alt="">
                <p class="desc">
                    상반된 인상의 발색과 프레임은 애쉬크로프트가 발견한 류노스케의 ‘날카롭지만 공격적이지 않은’ 테마를 훌륭하게 풀어냈고, 기본 모델이 조금 작다고 느끼는 소비자를 위해 조금 크기를 키운 류노스케 II가 탄생하게 됐다.
                </p>
                <img src="/assets/images/market/img_detail2.png" alt=""> -->
            </div>
            <div class="product_review">
                <div class="review_top">
                    <p class="title">Review 5</p>
                    <div class="desc_review">
                        <p class="desc">후기작성 시 100Point를 드립니다</p>
                        <a href="/sub/market/write_review.php" class="write_review"><img src="/assets/images/market/write_icon.png" alt="">후기작성</a>
                    </div>
                </div>
                <div class="review_photo">
                    <div class="desc_review desc_review_mobile">
                        <a href="/sub/market/write_review.php" class="write_review"><img src="/assets/images/market/write_icon.png" alt="">후기작성</a>
                        <p class="desc">후기작성 시 100Point를 드립니다</p>
                    </div>
                    <img src="/assets/images/market/review1.png" alt="">
                    <img src="/assets/images/market/review2.png" alt="">
                </div>
                <ul class="list_review">
                    <li>
                        <span class="evaluation">매우만족</span>
                        <p class="review_txt">오늘 드디어 받았습니다! 확실히 무게감도 가볍고 워싱된 느낌까지 완벽하게 좋습니다</p>
                        <div class="writer">
                            <p class="id">yng****</p>
                            <p class="date">2018.08.07</p>
                        </div>
                    </li>
                    <li>
                        <span class="evaluation">만족</span>
                        <p class="review_txt">사진 그대로라고 생각하면 되네요. 만족</p>
                        <div class="writer">
                            <p class="id">kkk****</p>
                            <p class="date">2018.08.07</p>
                        </div>
                    </li>
                    <li>
                        <span class="evaluation">보통</span>
                        <p class="review_txt">기대 안했는데 생각보다 디자인이 잘 빠졌네요</p>
                        <div class="writer">
                            <p class="id">wef****</p>
                            <p class="date">2018.08.07</p>
                        </div>
                    </li>
                    <li>
                        <span class="evaluation">불만족</span>
                        <p class="review_txt">컬러가 좀 더 다양했으면 좋았을걸, 아쉽지만 골드도 괜찮습니다</p>
                        <div class="writer">
                            <p class="id">sdg****</p>
                            <p class="date">2018.08.07</p>
                        </div>
                    </li>
                </ul>
                <a href="#" class="more_pd">MORE +</a>
            </div>
        </div>

        <script src="/assets/js/swiper-4.3.3/dist/js/swiper.min.js"></script>
        <script>
            function add_cart(){
                val_ck(); 
                var qty = $('#qty').val();
                var total_price = $('#total_price').val();
                var option = $('#total_option').val();
                var target = <?=$target?>;
                 
                 $.ajax({
             type: "POST",
             data:{qty:qty , total_price : total_price , option : option , target : target },
             url: "/api/add_cart.php",
             success: function(response){
               if(response==500){
                alert('시스템 오류가 발생하였습니다. 관리자에게 문의해주시기 바랍니다.');
               }else if(response==400){
                alert('해당 기능은 로그인 후 이용하실 수 있습니다.');
                location.href="/";

               }else if(response==200){
                alert('장바구니에 추가되었습니다.');
               }
              
                          
             },
             });

                }
            function val_ck(){
                var o_length = $('.select_pd.req').length;
                for(var i=0;i<o_length;i++){
                    if($('.select_pd.req').eq(i).val()==''){
                        alert('필수 선택 옵션을 선택해주시기 바랍니다.');
                        return false;
                    }

                }

                var option = '';
              
                for(var i=0;i<$('.select_pd').length;i++){
                if($('.select_pd').eq(i).val()!=''){
                if(option==''){

                option += $('.op_name').eq(i).text()+' : '+$('.select_pd').eq(i).find('option:selected').text();
                }else{
                option += ' , '+$('.op_name').eq(i).text()+' : '+$('.select_pd').eq(i).find('option:selected').text();
                }
            }
                }
                $('#total_option').val(option);
                $('#qty').val(parseInt($('.num').text()));
            }



            var swiper = new Swiper('#slideMarket10', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
            var swiper = new Swiper('#slideRecent', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                loop: true,
            });

            $(".option_btn").click(function () {
                $(this).parents(".option_box").toggleClass("open");
            });

            /*수량*/
            var numPd = $(".quantity .num").html();
           /* var totalPrice = $(".total_price span").html();*/

           /* function totalPd() {
                var pdPrice = document.getElementById("pdPriceEach").replace(/[^0-9]/g,'');
                var calcPrice = numPd * Number(pdPrice);
                totalPrice = calcPrice;
                console.log(calcPrice);
                console.log(pdPrice);
            }*/
            var previous=0;
            var total_p = <?=$ori_p?>;
            $('.select_pd').on('focus',function(){ previous = $(this).val();}).change(function(){
               if(previous==''){
               var prev = 0;
               }else{
                var prev = previous;
               }
               if($(this).val()==''){
                var next = 0;
               }else{
                var next = $(this).val();
               }

               previous = $(this).val();
               console.log(prev);
               console.log(previous);
               var cg_p = next - prev;
               total_p += cg_p;
               console.log(total_p);
               change_point(total_p);
            });
            function change_point(point){
                var qty = parseInt($('.num').text());
                $('.pdPriceEach').val(point);
                $('.pd_price_text').text(point.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ","));
                $('.total_price span').text((qty*point).toString().replace( /\B(?=(\d{3})+(?!\d))/g, ","));
                $('#total_price').val((qty*point));
            }
            function minusNum() {
                if(numPd > 1){
                    numPd --;
                    $(".quantity .num").html(numPd);
                    var pdPrice = Number($(".pdPriceEach").val());
                    var calcPrice = numPd * pdPrice;
                    var total = calcPrice.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ",");
                    $(".total_price span").html(total);
                    $("#total_price").val(calcPrice);
                }else {
                    alert("1개 이상 선택해주세요.");
                }
            }
            function plusNum() {
                numPd ++;
                $(".quantity .num").html(numPd);
                var pdPrice = $(".pdPriceEach").val();
                var calcPrice = numPd * pdPrice;
                var total = calcPrice.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ",");
                $(".total_price span").html(total);
                $("#total_price").val(calcPrice);
            }


        </script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>