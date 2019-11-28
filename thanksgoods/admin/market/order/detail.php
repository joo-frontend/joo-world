<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$targetId = filter_var(makeitSafe($_GET['id']), FILTER_SANITIZE_NUMBER_INT);

$thanksgoods_market = new thanksgoods_market();
$data = $thanksgoods_market->get_order_detail($targetId);
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">주문 상세 조회</h3>
                            <div class="form-group">
                                <?php if ($data['status'] == 0) : ?> <a href="/admin/market/order/do/payment_complete.php?id=<?php echo $data['id']; ?>" class="btn btn-sm btn-dark btn-sm">입금 확인 완료</a> <?php endif; ?>
                                <?php if ($data['status'] == 1) : ?> <a href="/admin/market/order/do/send_complete.php?id=<?php echo $data['id']; ?>" class="btn btn-sm btn-dark btn-sm">발송 완료</a> <?php endif; ?>
                            </div>
                            <?php if ($data['status'] == 2 && empty($data['delivery_number'])) : ?>
                                <form method="POST" action="/admin/market/order/do/register_tracknum.php">
                                    <input type="hidden" name="id" value="<?php echo $targetId; ?>">
                                    <div class="form-group row">
                                        <div class="col-sm-2">
                                            <input class="form-control" type="text" name="delivery_number" id="delivery_number">
                                        </div>
                                        <div class="col-sm-2">
                                            <input type="submit" class="btn btn-sm btn-dark btn-sm" value="운송장 번호 등록">
                                        </div>
                                    </div>
                                </form>
                            <?php endif; ?>
                            <form class="forms-sample">
                                <div class="form-group">
                                    <label for="payment_id">결제고유번호</label>
                                    <input type="text" class="form-control" id="payment_id" name="payment_id" value="<?php echo $data['payment_id']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="target_item">주문 상품</label>
                                    <input type="text" class="form-control" id="target_item" name="target_item" value="<?php echo $data['target_item']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="qty">개수</label>
                                    <input type="text" class="form-control" id="qty" name="qty" value="<?php echo $data['qty']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="option">메인옵션</label>
                                    <input type="text" class="form-control" id="option" name="option" value="<?php echo $data['option']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="sub_option">서브옵션</label>
                                    <input type="text" class="form-control" id="sub_option" name="sub_option" value="<?php echo $data['sub_option']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="buyer_name">주문자명</label>
                                    <input type="text" class="form-control" id="buyer_name" name="buyer_name" value="<?php echo $data['buyer_name']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="buyer_contact">연락처</label>
                                    <input type="text" class="form-control" id="buyer_contact" name="buyer_contact" value="<?php echo $data['buyer_contact']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="buyer_email">이메일</label>
                                    <input type="text" class="form-control" id="buyer_email" name="buyer_email" value="<?php echo $data['buyer_email']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="total_price">합계금액</label>
                                    <input type="text" class="form-control" id="total_price" name="total_price" value="<?php echo $data['total_price']; ?>원" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="original_price">기본가격</label>
                                    <input type="text" class="form-control" id="original_price" name="original_price" value="<?php echo $data['original_price']; ?>원" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="delivery_price">배송비</label>
                                    <input type="text" class="form-control" id="delivery_price" name="delivery_price" value="<?php echo $data['delivery_price']; ?>원" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="status">주문상태</label>
                                    <input type="text" class="form-control" id="status" name="status" value="<?php echo $data['status']; ?>" readonly>
                                </div>
                                <?php if ($data['delivery_number']) : ?>
                                <div class="form-group">
                                    <label for="delivery_number">운송장 번호</label>
                                    <input type="text" class="form-control" id="delivery_number" name="delivery_number" value="<?php echo $data['delivery_number']; ?>" readonly>
                                </div>
                                <?php endif; ?>
                                <div class="form-group">
                                    <label for="processed_at">결제일</label>
                                    <input type="text" class="form-control" id="processed_at" name="processed_at" value="<?php echo $data['processed_at']; ?>" readonly>
                                </div>

                                <h3 class="card-title">배송지 정보</h3>
                                <div class="form-group">
                                    <label for="receiver_name">이름</label>
                                    <input type="text" class="form-control" id="receiver_name" name="receiver_name" value="<?php echo $data['receiver_name']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <label for="receiver_contact">연락처</label>
                                    <input type="text" class="form-control" id="receiver_contact" name="receiver_contact" value="<?php echo $data['receiver_contact']; ?>" readonly>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2">
                                        <label for="postcode">주소</label>
                                        <input type="text" class="form-control" id="postcode" name="postcode" value="<?php echo $data['postcode']; ?>" readonly>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="address1" name="address1" value="<?php echo $data['address1']; ?>" readonly>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="address2" name="address2" value="<?php echo $data['address2']; ?>" readonly>
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