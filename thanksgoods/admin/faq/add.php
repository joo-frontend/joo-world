<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');?>

<?php $data = array(); ?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">FAQ 추가</h3>
                            <form class="forms-sample" method="POST" action="/admin/faq/do/create.php">
                                <div class="form-group">
                                    <label for="question">질문</label>
                                    <input type="text" class="form-control" id="question" name="question">
                                </div>
                                <div class="form-group">
                                    <label for="answer">답변</label>
                                    <textarea class="form-control" name="answer" id="answer" rows="10"></textarea>
                                </div>

                                <input type="submit" class="btn btn-success mr-2" value="추가">
                                <input type="button" class="btn btn-light" value="취소" onclick="window.location.href='/admin/faq/index.php'">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>