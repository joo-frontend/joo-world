<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$thanksgoods_market = new thanksgoods_market();

$category = $thanksgoods_market->get_category_lists();
$cate = $_GET['cate'];
if(empty($cate)){
  $cate = $category[0]['id'];
}
$datas = $thanksgoods_market->get_item_list($cate);
$thanks = new thanks_contents();

?>

   <div class="market_wra">
       <div class="my_menu my_market">
           <div class="menu_area">
               <a href="/sub/mypage/myorder.php" class="link_chk_my">주문·배송 조회</a>
               <ul class="clearfix">
                   <li class="focus"><a href="/sub/market/market_home.php">HOME</a></li>
                   <li><a href="#" onclick="scrollMove()">스탠드업펀딩</a></li>
                   <li><a href="/sub/market/market_new.php">신제품</a></li>
                   <li><a href="/sub/market/market_custom.php">맞춤상품</a></li>
               </ul>
           </div>
       </div>
       <div class="market_area">
           <div class="swiper-container slideMarket" id="slideMarket">
               <div class="swiper-wrapper">

                   <div class="swiper-slide">
                       <a href="#">
                           <img src="/assets/images/market/banner.png" alt="">
                       </a>
                   </div>
                   <div class="swiper-slide">
                       <a href="#">
                           <img src="/assets/images/market/banner.png" alt="">
                       </a>
                   </div>
                   <div class="swiper-slide">
                       <a href="#">
                           <img src="/assets/images/market/banner.png" alt="">
                       </a>
                   </div>

               </div>
               <div class="swiper-pagination"></div>

               <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>

           </div>
           <div class="home_cate">
               <p class="market_title">감사하면<br>
                   <span>생활</span>이 <span>풍성</span>해진다</p>
               <ul class="cate_hash">
                <?php for($i=0;$i<count($category);$i++){ ?>
                  <li class=" <?php if($cate == $category[$i]['id']){ echo 'focus'; }?>"><a href="./market_home.php?cate=<?=$category[$i]['id']?>">#<?=$category[$i]['group_name']?></a></li>
                <?php } ?>
                    
               </ul>
           </div>
           <div class="home_product" id="homeProduct">
               <ul class="type_pd clearfix">
                    <li ><a href="#"><span>New Arrivals</span>신제품</a></li>
                    <li class="focus"><a href="#"><span>Startup Funding</span>스타트업 펀딩</a></li>
               </ul>
           </div>

       </div>
       <div class="section_product">
           <div class="home_product_box active">
               <div class="best_pd_repre">
                   <p class="title">Best 10</p>
                   <a href="#" class="more_pd">MORE +</a>
                   <div class="detail_pd">
                       <a href="/sub/market/market_product.php?target=<?=$datas[0]['id']?>" class="imgBox" style="background-image:url(<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$datas[0]['id'].'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }?>); background-size:cover; background-position:center;">
                           <img src="/assets/images/market/product1.png" alt="" style="opacity:0;"">
                       </a>

                       <div class="pd_infoBox">
                         <p class="name"><?=$datas[0]['name']?></p>
                           <div class="info">
                               <a href="/sub/point/my_point.php" class="charge_point">포인트 충전 +</a>
                               <div class="sell_info">
                               <p class="fav active" id="fav_<?=$datas[0]['id']?>"><span>
                                <?php echo $thanks->get_wist_cnt($datas[0]['id']);?></span><input type="checkbox" id="favPdH" class="fav_chk"  value="<?=$datas[0]['id']?>" <?php echo $thanks->my_wish_ck($datas[0]['id']);?>><label for="favPdH" class="shapeChk"></p>
                              <a href="/sub/market/market_product.php?target=<?=$datas[0]['id']?>"><p class="cart"></p></a>
                               </div>
                           </div>
                           <div class="price">
                              <?php if ($datas[0]['is_sale'] == 1) { ?> <del class="original_p"><?php echo $datas[0]['price'].'P'; ?></del> <span class="sale_p"><?php echo $datas[0]['sale_price'].'P'; ?></span> <?php } else { ?>
                                               <span class="original_p"><?php echo $datas[0]['price'].'P'; ?></span> <?php } ?>
                              
                           </div>
                       </div>
                   </div>
               </div>
               <div class="best_pd_slide">
                   <div class="swiper-container slideBest" id="slideBest">
                       <div class="swiper-wrapper">
                        <?php for($i=1;$i<count($datas);$i++){?>
                          <div class="swiper-slide"><a href="/sub/market/market_product.php?target=<?=$datas[$i]['id']?>" style="background-image:url(<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$datas[$i]['id'].'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }?>); background-size:cover; background-position:center;"><img src="/assets/images/market/product2.png" alt="" style="opacity:0;"></a></div>
                        <?php } ?>
                           
                         
                       </div>
                       <div class="swiper-pagination"></div>
                       <div class="swiper-button-prev"></div>
                       <div class="swiper-button-next"></div>
                   </div>
               </div>
           </div>
       </div>
   </div>
    <script src="/assets/js/swiper-4.3.3/dist/js/swiper.min.js"></script>
    <script>
        function scrollMove() {
            var moveArea = $("#homeProduct").offset();
            var header = $(".header_wra").outerHeight();
            $("html,body").animate({
                scrollTop : moveArea.top - header
            },500);
        }

        var swiper = new Swiper('#slideMarket', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        var swiper = new Swiper('#slideBest', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 35,
            breakpoints: {
                1024: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                },
                650: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                }
            }

        });
          $('#favPdH').change(function(){
           $ck =  $(this).is(':checked');
          var target = $(this).val();
          var numLike = $('#fav_'+target).find('span').html();
            $.ajax({
             type: "POST",
             dataType: 'json',
             data:{ target:target},
             url: "/api/ck_wish.php",
             success: function(response){
              console.log(response);
              if(response==200){

                
            if($ck == true){
                numLike ++;
               $('#fav_'+target).find('span').html(numLike);
            }else {
                numLike --;
                $('#fav_'+target).find('span').html(numLike);
            }
        }else if(response==400){
            alert("해당기능은 로그인 후 이용하실 수 있습니다.");
            location.href="/";
        }            
             },
             });

          });
          function wish_bt(target){
             
            
            var numLike = $(".like#"+target).find("a").html();
           
             $.ajax({
             type: "POST",
             dataType: 'json',
             data:{ target:target},
             url: "/api/ck_like.php",
             success: function(response){
              
              if(response==200){
                $(".like#"+target+" img").parents(".like").toggleClass("active");


            if($(".like#"+target+" img").parents(".like").hasClass("active") == true){
                numLike ++;
                $(".feed_manage .like_post#"+target+" a").html(numLike);
            }else {
                numLike --;
                $(".feed_manage .like_post#"+target+" a").html(numLike);
            }
        }else if(response==400){
            alert("해당기능은 로그인 후 이용하실 수 있습니다.");
            location.href="/";
        }            
             },
             });

            

      }

    </script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>