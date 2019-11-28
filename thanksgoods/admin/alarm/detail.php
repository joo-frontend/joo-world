<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');?>

<?php $data = array(); ?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">알림 상세 조회</h3>
                            <form class="forms-sample">
                                <div class="form-group">
                                    <label for="type">타입</label>
                                    <select class="form-control" name="type" id="type" readonly>
                                        <option value="1" <?php if ($data['type'] == 1) { ?> selected <?php } ?>>채팅</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="price">받는 사람</label>
                                    <input type="number" class="form-control" id="price" name="price" min="0" value="<?php echo $data['price']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="price">보낸 사람</label>
                                    <input type="number" class="form-control" id="price" name="price" min="0" value="<?php echo $data['price']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="price">메시지</label>
                                    <textarea class="form-control" name="description" id="description" rows="10" readonly><?php echo $data['description']; ?></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="price">전송 시각</label>
                                    <input type="number" class="form-control" id="price" name="price" min="0" value="<?php echo $data['price']; ?>" readonly>
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