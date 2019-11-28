<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');
$thanksgoods_faq = new thanksgoods_faq();

$page = $_GET['page'];
if(empty($page)){
    $page = 1;
}
$offset = ($page -1)*10;
$key = $_GET['key'];
$limit = 10;
$datas = $thanksgoods_faq->get_lists($offset,$limit,$key);
$cnt = $thanksgoods_faq->get_count($key);
 

?>

    <div class="faq_wra">
        <div class="faq_area">
            <div class="title_area">
                <p class="title">FAQ</p>
                <p class="desc">Thanks Goods 회원님들이 자주 묻는 질문들을 확인하세요</p>
                <div class="search_faq_box">
                    <form action="./faq.php" method="GET">
                        <p>
                            <input type="text" class="search_board" name="key">
                            <button><img src="/assets/images/center/search.png" alt=""></button>
                        </p>
                    </form>
                </div>
            </div>
            <div class="list_faq">
                <?php for($i=0;$i<count($datas);$i++){?>
                <div class="faq_box">
                    <div class="customer_q">
                        <a href="#">Q<?=$i+1?>. <?=$datas[$i]['question']?> <img src="/assets/images/center/drop.png" alt=""></a>
                    </div>
                    <div class="customer_a">
                        <p>A. <?=$datas[$i]['answer']?></p>
                    </div>
                </div>    
                <?php } ?>
                
                 

            </div>
            <div class="pagination">
                  <?php 
                $total_page = ceil($cnt/10);
              
                if($total_page <= $page){
                    $page = $total_page;

                }
                $prev = $page -1;
                $next = $page +1;
                if($prve<1){
                $prve=1;
                }
                if($next>$total_page){
                $next = $total_page;
                }
                ?>
                <a href="./faq.php?page=<?=$prev?>&key=<?=$key?>" class="pageArrow prev"><img class="hover_on" src="/assets/images/common/next.png" alt=""><img class="hover_off" src="/assets/images/common/next_off.png" alt=""></a>
              
                 
                 <?php for($i=1;$i<=$total_page;$i++){?>
                <a href="./faq.php?page=<?=$i?>&key=<?=$key?>" class="page <?php if($page==$i){ echo 'focus'; }?>" ><?=$i?></a>    
                <?php }?>
                
                <a href="./faq.php?page=<?=$next?>&key=<?=$key?>" class="pageArrow next"><img class="hover_on" src="/assets/images/common/next.png" alt=""><img class="hover_off" src="/assets/images/common/next_off.png" alt=""></a>
            </div>
        </div>
    </div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>