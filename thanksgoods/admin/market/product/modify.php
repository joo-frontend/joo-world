<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');?>

<?php $data = array(); ?>

    <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">상품 수정</h3>
                                <form class="forms-sample" method="POST" action="/admin/market/product/do/modify.php">
                                    <div class="form-group">
                                        <label for="type">타입</label>
                                        <select class="form-control" name="type" id="type">
                                            <option value="1" <?php if ($data['type'] == 1) { ?> selected <?php } ?>>신제품</option>
                                            <option value="2" <?php if ($data['type'] == 1) { ?> selected <?php } ?>>스타트업 펀딩</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="category">카테고리</label>
                                        <select class="form-control" name="category" id="category">
                                            <option value="1" <?php if ($data['type'] == 1) { ?> selected <?php } ?>>인테리어</option>
                                            <option value="2" <?php if ($data['type'] == 2) { ?> selected <?php } ?>>화장품</option>
                                            <option value="3" <?php if ($data['type'] == 3) { ?> selected <?php } ?>>푸드</option>
                                            <option value="4" <?php if ($data['type'] == 4) { ?> selected <?php } ?>>아이디어</option>
                                            <option value="5" <?php if ($data['type'] == 5) { ?> selected <?php } ?>>리빙</option>
                                            <option value="6" <?php if ($data['type'] == 6) { ?> selected <?php } ?>>전자기기</option>
                                            <option value="7" <?php if ($data['type'] == 7) { ?> selected <?php } ?>>기타</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="price">기본 가격</label>
                                        <input type="number" class="form-control" id="price" name="price" min="0" value="<?php echo $data['price']; ?>">
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" name="is_sale" id="is_sale" <?php if ($data['is_sale'] == 1) { ?> checked <?php } ?>>
                                            할인 여부
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <label for="sale_price">할인 가격</label>
                                        <input type="number" class="form-control" id="sale_price" name="sale_price" min="0" value="<?php echo $data['sale_price']; ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="delivery_price">배송비</label>
                                        <input type="number" class="form-control" id="delivery_price" name="delivery_price" min="0" value="<?php echo $data['delivery_price']; ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="name">상품명</label>
                                        <input type="text" class="form-control" id="name" name="name" value="<?php echo $data['name']; ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="description">상품설명</label>
                                        <textarea class="form-control" name="description" id="description" rows="10"><?php echo $data['description']; ?></textarea>
                                    </div>

                                    <input type="submit" class="btn btn-success mr-2" value="수정">
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