<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php'); 
$thanks = new thanks_contents();
$user = new user();
$total_p = $thanks -> my_today_point();
if(empty($total_p)){
$total_p = 0;
}
$point_info = $user -> point_read();
$session = new session();
if(!$session->usCheck()){
alertMon('aNr','해당 기능은 로그인 후 이용하실 수 있습니다.','/');
die;
}
if(count($point_info)<1){
$total_point = 0; 
}else{
$total_point = $point_info[0]['total_point'];
}

$point_list = $thanks -> point_list(0,3);
$market = new thanksgoods_market();
$need_point_items = $market->get_item_list($category_id, $total_point, ['sale_price' => 'ASC'], 0, 6);
 
$need_point = $need_point_items[0]['sale_price'] - $total_point;
?>
<style>
.more_history.none{
display:none;
}
</style>

    <div class="thanks_point_wra">
        <div class="section_top">
            <div class="thanks_point_my">
                <div class="my_point_box">
                    <p class="title_today">오늘 나의<br><span>포인트를 확인</span>하세요!</p>
                    <a href="#" class="pop_btn"><img src="/assets/images/calendar/info.png" alt="">포인트 적립 기준은?</a>
                </div>
                <div class="status_mypoint">
                    <div class="point_box">
                        <p class="my_p"><?=number_format($total_p)?></p>
                        <p class="desc">오늘의 <span>활동 포인트</span></p>
                    </div>
                    <div class="point_box">
                        <p class="my_p"><?=number_format($total_point)?></p>
                        <p class="desc"><span>총 포인트</span></p>
                    </div>
                </div>
            </div>
            <div class="thanks_point_group">
                <div class="group_point">
                    <p class="title"> <span>I TODAY</span> 하루 최대 적립 포인트 ㅣ 평일 70P,  주말 80P</p>
                    <p class="status_point"><span><?=$total_p?></span> / <?php if(date('w')>5){ echo 80;}else{ echo 70;}?> Point</p>
                    <div class="point_progress">
                        <p class="bar" style="width: <?php if(date('w')>5){ echo $total_p/80*100;}else{ echo $total_p/70*100;}?>%;"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ad_section">
            <div class="ad_product_area">
                <span class="imgBox"><img src="/assets/images/point/box.png" alt=""></span>
                <p class="txt_adver">현재 포인트로<br>
                    <span>구매할 수 있는 상품</span>을 확인하세요!</p>
                <a href="/sub/market/market_custom.php" class="link_pd">상품 확인하기</a>
            </div>
        </div>
        <div class="ad_2_section">
            <div class="ad_product_area">
                <span class="imgBox"><img src="/assets/images/point/notice.png" alt=""></span>
				<?php if(count($need_point_items)>0){?>
                <p class="txt_adver"><span class="want"><?=number_format($need_point)?></span><span>포인트만 더 모으면</span><br><span class="f_black">구매할 수 있는 <em>상품들이에요!</em></span></p>
                <div class="preview_pd_img">
				<?php for($i=0;$i<count($need_point_items);$i++){
				if($i<4){
				?>
				<a href="/sub/market/market_product.php?target=<?=$need_point_items[$i]['id']?>" style="background-image:url(<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$need_point_items[$i]['id'].'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }}?>); background-size:cover;background-position:center;"><img src="/assets/images/point/item1.png" alt="" style="opacity:0;"></a>
				<?php  } } ?>
                    
                     
                    <a href="/sub/market/market_custom.php" class="link_pd_2">MORE +</a>
					<?php }else { ?>
					<p class="txt_adver"><span>와우! 보유하신 포인트로 모든 상품을 구매하실 수 있습니다!</span></p>
					<a href="/sub/market/market_custom.php" class="link_pd_2" style="float:right;">상품 보러가기</a>
					<?php } ?>
                </div>
            </div>
        </div>
        <div class="history_point_section">
            <p class="title_blue">I HISTORY</p>
            <ul class="history_area">
                <?php for($i=0;$i<count($point_list);$i++){
				$t_c = $thanks ->get_thanks_cnt($point_list[$i]['date']);
				$b_c = $thanks ->get_buy_cnt($point_list[$i]['date']);
				$r_c = $thanks ->get_review_cnt($point_list[$i]['date']);
			 
				?>
                <li>
                    <div class="date_box"><p class="date"><?=date('Y.m.d',strtotime($point_list[$i]['date']))?></p><a href="/sub/point/my_point_detail.php?date=<?=$point_list[$i]['date']?>" class="detail_history">감사 포인트 상세내역</a></div>
                    <div class="point_type">
                        <?php if($t_c>0){?><p class="txt"><span>감사 포인트</span><span class="f_rajd"><?=$t_c?></span>가지</p><br><?php }?>
                        <?php if($b_c>0){?><p class="txt"><span>상품 구매</span><a href="/sub/mypage/myorder.php"><span class="f_rajd"><?=$b_c?></span></a>가지</p><br><?php }?>
						<?php if($r_c>0){?><p class="txt"><span>후기 작성</span><span class="f_rajd"><?=$r_c?></span>가지</p><br><?php }?>
                        <p class="score"><?php if($point_list[$i]['point']>0){echo '+';}?><?=number_format($point_list[$i]['point'])?></p>
                    </div>
                </li>
            <?php } ?>
                 
            </ul>
            <a href="#" class="more_history <?php if(count($point_list)<3){ echo 'none'; }?>" onclick="list_more_view()">MORE +</a>
        </div>
    </div>
	<div class="pop pop_info_point">
    <div class="popup">
        <a href="#" class="close_pop"><img src="/assets/images/common/close.png"></a>
            <p class="title_point"><img src="/assets/images/calendar/info_popup.png" alt="">포인트 적립 기준은?</p>
            <p class="desc_point">감사를 통해<br>
                상품을 구매할 수 있는 포인트를 5Point 획득 할 수 있습니다.<br>
				평일은 70Point , 주말은 80Point 까지 획득하실 수 있습니다.<br>
				</p>
            <p class="point_type_info">
                <span><img src="/assets/images/calendar/thanks_popup.png" alt="">감사</span>감사에 대한 설명
			 
            </p>
    </div>
</div>
<script>
  $(".pop_btn").click(function () {
                $(".pop_info_point").show();
                $(".pop_info_point .close_pop").click(function () {
                    $(".pop_info_point").hide();
                });
                return false;
            });
 function list_more_view(){
                var start = $('.history_area li').length;
                 console.log(start);
                $.ajax({
             type: "POST",
              
             data:{start : start},
             url: "/api/point_more_view.php",
             success: function(response){
               if(response!=null){
                var cnt = response.length;
                }else{
                var cnt = 0;
                }
                  if(cnt<3){
				$('.more_history').addClass('none');
				}else{
				$('.more_history').removeClass('none');
				}
                 
                 
                for(var i=0; i<response.length;i++){
                $('.history_area').append(response[i]);

                }
              
                          
             },
             });
            }
</script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>