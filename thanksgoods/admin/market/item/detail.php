<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$targetId = filter_var(makeitSafe($_GET['id']), FILTER_SANITIZE_NUMBER_INT);

$thanksgoods_market = new thanksgoods_market();
$data = $thanksgoods_market->get_item_detail($targetId);
$category_lists = $thanksgoods_market->get_category_lists();
$option_name = $data['option'];
$option_value = $data['option_value'];
$options = explode('|',$option_name);
$values = explode(']',$option_value);
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">상품 상세 조회</h3>
                            <form class="forms-sample">
                                <div class="form-group">
                                   <div style="width:100%; text-align:center;"> <img src="<?php 
                  
                $j = 1;       foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/'.$targetId.'.*') as $value){
                                if($j==1){
                                echo ''.str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value).'';
                                }
    }?>" style="max-width:50%;"></div>
                                    <label for="type">타입</label>
                                    <select class="form-control" name="type" id="type" disabled>
                                        <option value="1" <?php if ($data['type'] == 1) { ?> selected <?php } ?>>신제품</option>
                                        <option value="2" <?php if ($data['type'] == 2) { ?> selected <?php } ?>>스타트업 펀딩</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="category">카테고리</label>
                                    <select class="form-control" name="category" id="category" disabled>
                                        <option value="<?php echo $data['category']; ?>" selected><?php echo $admin->get_category_name($data['category']) ?></option>
                                        <?php foreach ($category_lists as $list) : ?>
                                            <option value="<?php echo $list['id']; ?>" <?php if ($data['category'] == $list['id']) : ?> selected <?php endif; ?>><?php echo $list['group_name']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="price">기본 가격</label>
                                    <input type="number" class="form-control" id="price" name="price" min="0" value="<?php echo $data['price']; ?>" readonly>
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="is_sale" id="is_sale" onclick="return false;" <?php if ($data['is_sale'] == 1) { ?> checked <?php } ?> disabled>
                                        할인 여부
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="sale_price">할인 가격</label>
                                    <input type="number" class="form-control" id="sale_price" name="sale_price" min="0" value="<?php echo $data['sale_price']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="sale_price">옵션</label><br>
                                    <?php for($i=0;$i<count($options)-1;$i++){
                                        $op_val = explode('`',$options[$i]);
                                        $detail_option = explode('`',$values[$i]);
                                        ?>
                                   <?=$op_val[0]?> <?php if(count($op_val)>1){ echo '*필수선택'; }?><br>상세 옵션 <br>
                                        <?php for($y=0;$y<count($detail_option);$y++){
                                        $val = explode('|',$detail_option[$y]);
                                            ?>
                                         <?=$val[0]?> / 추가 포인트 : <?=$val[1]?>P<br>
                                            <?php } ?>
                                    <?php }?>
                                </div>
                                <div class="form-group">
                                    <label for="delivery_price">배송비</label>
                                    <input type="number" class="form-control" id="delivery_price" name="delivery_price" min="0" value="<?php echo $data['delivery_price']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="name">상품명</label>
                                    <input type="text" class="form-control" id="name" name="name" value="<?php echo $data['name']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="description">상품설명</label>
                                     <?php echo $data['description']; ?> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>