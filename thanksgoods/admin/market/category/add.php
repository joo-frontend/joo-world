<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">카테고리 추가</h3>
                            <form class="forms-sample" method="POST" action="/admin/market/category/do/create.php">
                                <div class="form-group">
                                    <label for="group_name">이름</label>
                                    <input type="text" class="form-control" id="group_name" name="group_name">
                                </div>

                                <input type="submit" class="btn btn-success mr-2" value="추가">
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