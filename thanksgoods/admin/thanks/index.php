<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$search_date = empty($_GET['search_date']) ? date('Y-m-d') : $_GET['search_date'];

$thanksgoods_thanks = new thanksgoods_thanks();
$datas = $thanksgoods_thanks->get_lists($search_date);
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">감사 리스트</h4>

                            <form method="GET" action="">
                                <div class="form-group row">
                                    <div class="col-sm-2">
                                        <input class="form-control" type="date" name="search_date" value="<?php echo $search_date; ?>">
                                    </div>
                                    <div class="col-sm-2">
                                        <input type="submit" class="btn btn-dark" value="조회">
                                    </div>
                                </div>
                            </form>

                            <div class="row">
                                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                                    <table id="sortable-table-1" class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th class="sortStyle">작성자<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">내용<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">공감수<i class="mdi mdi-chevron-down"></i></th>
                                            <th>이 카테고리를..</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($datas as $data) : ?>
                                        <tr>
                                            <td><?php echo $data['id']; ?></td>
                                            <td><?php echo $data['user_id']; ?></td>
                                            <td style="max-width:200px; overflow-x: hidden; text-overflow: ellipsis;"><?php echo $data['contents']; ?></td>
                                            <td><?php echo $data['likes']; ?></td>
                                            <td>
                                                <a href="/admin/thanks/detail.php?id=<?php echo $data['id']; ?>" class="btn btn-sm btn-dark btn-sm">조회</a>
                                                <a href="/admin/thanks/do/delete.php?id=<?php echo $data['id']; ?>" class="btn btn-danger btn-sm btn-delete">삭제</a>
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
        if (!confirm('정말 삭제 처리 하시겠습니까?')) {
            return false;
        }
    });
</script>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>