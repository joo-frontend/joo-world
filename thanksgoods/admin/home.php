<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$thanksgoods_thanks = new thanksgoods_thanks();
?>

    <div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card card-statistics">
                        <div class="row">
                            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                    <i class="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                                    <div class="wrapper text-center text-sm-left">
                                        <p class="card-text mb-0">오늘의 감사 수</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0"><?php echo $thanksgoods_thanks->get_thanks_count('today'); ?></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="mdi mdi-checkbox-marked-circle-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">이달의 감사 수</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0"><?php echo $thanksgoods_thanks->get_thanks_count('month'); ?></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="mdi mdi-trophy-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">이달 지급된 누적 포인트</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0"><?php $received_point = $thanksgoods_thanks->get_point_count('received'); echo empty($received_point) ? 0 : $received_point;  ?></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i class="mdi mdi-target text-primary mr-0 mr-sm-4 icon-lg"></i>
                                <div class="wrapper text-center text-sm-left">
                                    <p class="card-text mb-0">이달 사용된 누적 포인트</p>
                                    <div class="fluid-container">
                                        <h3 class="card-title mb-0"><?php $used_point = $thanksgoods_thanks->get_point_count('used'); echo empty($used_point) ? 0 : $used_point; ?></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>