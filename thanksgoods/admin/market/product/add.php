<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$thanksgoods_market = new thanksgoods_market();

$category_lists = $thanksgoods_market->get_category_lists();
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">상품 추가</h3>
                            <form class="forms-sample" method="POST" action="/admin/market/product/do/create.php">
                                <div class="form-group">
                                    <label for="type">타입</label>
                                    <select class="form-control" name="type" id="type">
                                        <option value="1">신제품</option>
                                        <option value="2">스타트업 펀딩</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="category">카테고리</label>
                                    <select class="form-control" name="category" id="category">
                                        <?php foreach ($category_lists as $list) : ?>
                                            <option value="<?php echo $list['id']; ?>"><?php echo $list['group_name']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="price">기본 가격</label>
                                    <input type="number" class="form-control" id="price" name="price" min="0">
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="is_sale" id="is_sale" value="1">
                                        할인
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="sale_price">할인 가격</label>
                                    <input type="number" class="form-control" id="sale_price" name="sale_price" min="0">
                                </div>
                                <div class="form-group">
                                    <label for="delivery_price">배송비</label>
                                    <input type="number" class="form-control" id="delivery_price" name="delivery_price" min="0">
                                </div>
                                <div class="form-group">
                                    <label for="name">상품명</label>
                                    <input type="text" class="form-control" id="name" name="name">
                                </div>
                                <div class="form-group">
                                    <label for="description">상품설명</label>
                                    <textarea class="form-control" name="description" id="description" rows="10"></textarea>
                                </div>

                                <input type="submit" class="btn btn-success mr-2" value="추가">
                                <input type="button" class="btn btn-light" value="취소" onclick="window.location.href='/admin/market/product/index.php'">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>