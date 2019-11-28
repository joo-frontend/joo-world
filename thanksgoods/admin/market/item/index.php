<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$thanksgoods_market = new thanksgoods_market();
$datas = $thanksgoods_market->get_item_list();
?>

    <div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">상품 리스트</h4>
                            <a href="/admin/market/item/add.php" class="btn btn-sm btn-dark btn-sm add_btn">추가</a>

                            <div class="row">
                                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                                    <table id="sortable-table-1" class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th class="sortStyle">타입<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">카테고리<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">상품명<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">가격<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">생성일<i class="mdi mdi-chevron-down"></i></th>
                                            <th>이 카테고리를..</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($datas as $data) : ?>
                                        <tr>
                                            <td><?php echo $data['id']; ?></td>
                                            <td><?php echo $thanksgoods_market->get_type_name($data['type']); ?></td>
                                            <td><?php echo $thanksgoods_market->get_category_detail($data['category'])['group_name']; ?></td>
                                            <td><?php echo $data['name']; ?></td>
                                            <td>
                                                <?php if ($data['is_sale'] == 1) { ?> <del><?php echo $data['price']; ?></del> → <?php echo $data['sale_price']; ?> <?php } else { ?>
                                                <?php echo $data['price']; ?> <?php } ?>
                                            </td>
                                            <td><?php echo $data['created_at']; ?></td>
                                            <td>
                                                <a href="/admin/market/item/detail.php?id=<?php echo $data['id']; ?>" class="btn btn-sm btn-dark btn-sm">조회</a>
                                                <a href="/admin/market/item/modify.php?id=<?php echo $data['id']; ?>" class="btn btn-sm btn-dark btn-sm">수정</a>
                                                <a href="/admin/market/item/do/delete.php?id=<?php echo $data['id']; ?>" class="btn btn-danger btn-sm btn-delete">삭제</a>
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
        if (!confirm('정말 삭제 하시겠습니까?')) {
            return false;
        }
    });
</script>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>