<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">알림 리스트</h4>
                            <a href="/admin/alarm/add.php" class="btn btn-sm btn-dark btn-sm add_btn">추가</a>

                            <div class="row">
                                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                                    <table id="sortable-table-1" class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th class="sortStyle">타입<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">받는 사람<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">보낸 사람<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">메시지<i class="mdi mdi-chevron-down"></i></th>
                                            <th class="sortStyle">전송 시각<i class="mdi mdi-chevron-down"></i></th>
                                            <th>이 카테고리를..</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>채팅</td>
                                            <td>테스트1</td>
                                            <td>테스트2</td>
                                            <td style="max-width:200px; overflow-x: hidden; text-overflow: ellipsis;">메시지내용내용메시지내용내용메시지내용내용메시지내용내용메시지내용내용메시지내용내용메시지내용내용</td>
                                            <td>2018-12-27</td>
                                            <td>
                                                <a href="/admin/alarm/detail.php?id=1" class="btn btn-sm btn-dark btn-sm">조회</a>
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