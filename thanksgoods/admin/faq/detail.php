<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$thansgoods_faq = new thanksgoods_faq();

$targetId = filter_var(makeitSafe($_GET['id']), FILTER_SANITIZE_NUMBER_INT);

$data = $thansgoods_faq->get_detail($targetId);

?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">FAQ 상세 조회</h3>
                            <form class="forms-sample">
                                <div class="form-group">
                                    <label for="question">질문</label>
                                    <input type="text" class="form-control" id="question" name="question" value="<?php echo $data['question']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="answer">답변</label>
                                    <textarea class="form-control" name="answer" id="answer" rows="10" readonly><?php echo $data['answer']; ?></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="created_at">생성시각</label>
                                    <input type="text" class="form-control" id="created_at" name="created_at" value="<?php echo $data['created_at']; ?>" readonly>
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