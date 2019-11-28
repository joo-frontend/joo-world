<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');?>

    <div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">상품 리스트</h4>
                            <a href="/admin/market/product/add.php" class="btn btn-sm btn-dark btn-sm add_btn">추가</a>

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
                                        <tr>
                                            <td>1</td>
                                            <td>신제품</td>
                                            <td>리빙</td>
                                            <td>애쉬크로프트의 정수, 류노스케 안경</td>
                                            <td><del>100000</del> → 80000</td>
                                            <td>2018-12-27</td>
                                            <td>
                                                <a href="/admin/market/product/detail.php?id=1" class="btn btn-sm btn-dark btn-sm">조회</a>
                                                <a href="/admin/market/product/modify.php?id=1" class="btn btn-sm btn-dark btn-sm">수정</a>
                                                <a href="/admin/market/product/do/delete.php?id=1" class="btn btn-danger btn-sm btn-delete">삭제</a>
                                            </td>
                                        </tr>
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