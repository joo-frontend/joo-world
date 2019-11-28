<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$targetId = filter_var(makeitSafe($_GET['id']), FILTER_SANITIZE_NUMBER_INT);

$thanksgoods_market = new thanksgoods_market();
$data = $thanksgoods_market->get_category_detail($targetId);
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">카테고리 수정</h3>
                            <form class="forms-sample" method="POST" action="/admin/market/category/do/modify.php">
                                <input type="hidden" name="id" value="<?php echo $data['id']; ?>">
                                <div class="form-group">
                                    <label for="group_name">카테고리명</label>
                                    <input type="text" class="form-control" id="group_name" name="group_name" value="<?php echo $data['group_name']; ?>">
                                </div>

                                <input type="submit" class="btn btn-success mr-2" value="수정">
                                <input type="button" class="btn btn-light" value="취소" onclick="window.location.href='/admin/market/category/index.php'">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>