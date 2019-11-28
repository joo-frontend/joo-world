<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$thanksgoods_market = new thanksgoods_market();
$datas = $thanksgoods_market->get_order_list();
?>

    <div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">주문 리스트</h4>

                            <div class="row">
                                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                                    <table id="sortable-table-1" class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th class="sortStyle">주문자명<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">연락처<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">합계금액<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">상태<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">주문일<i class="mdi mdi-chevron-down"></i></th>
                                            <th>이 카테고리를..</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($datas as $data) : ?>
                                        <tr>
                                            <td><?php echo $data['id']; ?></td>
                                            <td><?php echo $data['buyer_name']; ?></td>
                                            <td><?php echo $data['buyer_contact']; ?></td>
                                            <td><?php echo $data['total_price']; ?></td>
                                            <td><?php echo $data['status']; ?></td>
                                            <td><?php echo $data['processed_at']; ?></td>
                                            <td>
                                                <a href="/admin/market/order/detail.php?id=<?php echo $data['id']; ?>" class="btn btn-sm btn-dark btn-sm">조회</a>
                                                <?php if ($data['status'] != -1) : ?>
                                                    <a href="/admin/market/order/do/delete.php?id=<?php echo $data['id']; ?>" class="btn btn-danger btn-sm btn-delete">주문취소</a>
                                                <?php endif; ?>
                                            </td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
    $('.btn-delete').click(function () {
        if (!confirm('정말 취소 하시겠습니까?')) {
            return false;
        }
    });
</script>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>