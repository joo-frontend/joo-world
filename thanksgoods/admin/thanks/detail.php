<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$targetId = $_GET['id'];

$thanksgoods_thanks = new thanksgoods_thanks();
$data = $thanksgoods_thanks->get_detail($targetId);
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">감사 상세 조회</h3>
                            <form class="forms-sample">
                                <div class="form-group">
                                    <label for="user_id">작성자 <?php if($data['is_anonymous'] == 1) { echo '* 익명'; } ?></label>
                                    <input type="text" class="form-control" id="user_id" name="user_id" value="<?php echo $data['user_id']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="contents">내용</label>
                                    <textarea class="form-control" name="contents" id="contents" rows="10" readonly><?php echo $data['contents']; ?></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="likes">공감수</label>
                                    <input type="text" class="form-control" id="likes" name="likes" value="<?php echo $data['likes']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="created_at">생성일</label>
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