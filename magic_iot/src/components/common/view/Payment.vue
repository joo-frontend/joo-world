<template>
  <!-- wrap_contents_area -->
  <div class="wrap_contents_area">
    <!-- section_payment_info -->
    <section class="section_payment_info">
      <div class="area_payment_info">
          <div class="box_row">
          <div class="info_box contract">
            <div class="info_title"><span class="sprite sprite_common sprite_contract_num">?</span>계약번호</div>
            <span class="info_desc">T158CAI07669</span>
          </div>
          <div class="info_box model">
            <div class="info_title"><span class="sprite sprite_common sprite_model">?</span>모델</div>
            <span class="info_desc">WPUA400CREWH</span>
          </div>
        </div>
        <div class="box_row">
          <div class="info_box payment_method">
            <div class="info_title"><span class="sprite sprite_common sprite_payment_method">?</span>수납방식</div>
            <span class="info_desc"></span>
          </div>
          <div class="info_box payment_day">
            <div class="info_title"><span class="sprite sprite_common sprite_payment_day">?</span>수납일자</div>
            <span class="info_desc">20일</span>
          </div>
        </div>
        <div class="box_row">
          <div class="info_box nonpaymen_won">
            <div class="info_title"><span class="sprite sprite_common sprite_won">?</span>미납금액</div>
            <span class="info_desc">19,900원</span>
          </div>
          <div class="info_box nonpaymen_num">
            <div class="info_title"><span class="sprite sprite_common sprite_nonpayment_num">?</span>미납회차</div>
            <span class="info_desc">1회차</span>
          </div>
        </div>
        <div class="box_row">
          <div class="info_box none_history">
            <div class="info_title"><span class="sprite sprite_common sprite_account_info">?</span>계좌정보</div>
            <span class="info_desc">납부 이력이 없습니다.</span>
          </div>
        </div>
      </div>
    </section>
    <!-- //section_payment_info -->

    <!-- section_history_log -->
    <section class="section_history_log">
      <div class="area_history_log">
        <!-- 하단 컨텐츠 열릴 때 active -->
        <button class="arrow_btn active">
          <span class="sprite sprite_common sprite_lower_arrow">?</span>
        </button>
        <div class="box_top">
          <span class="sprite sprite_common sprite_calendar_blue"></span>
          <p>2015.09</p>
          <span class="sprite sprite_common sprite_nonpayment">미납</span>
        </div>
        <div class="box_contents clearfix" style="display:block;">
          <p>▣회차: 1회차</p>
          <p>▣수납일자: 20일</p>
          <p>▣수납액: 19900원</p>
        <p class="txt_highlight_red">▣미납액: 19900원</p>
        </div>
      </div>
    </section>
    <!-- //section_history_log -->
  </div>
  <!-- //wrap_contents_area-->
</template>
<script>
export default {
  name: 'payment'
}
</script>
<style>
.section_payment_info .area_payment_info {
    margin-top: 1px;
}
.section_payment_info .area_payment_info .box_row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
.section_payment_info .area_payment_info .box_row.none_margin_bottom {
    margin-bottom: 0;
}
.section_payment_info .area_payment_info .info_box {
    margin-left: 3px;
    border: 1px solid #c3c3c3;
    width: 48%;
    min-height: 42px;
    position: relative;
    padding: 10px 0 10px 94px;
    -moz-box-shadow:inset 0px 4px 14px 2px #ededed;
    -webkit-box-shadow:inset 0px 4px 14px 2px #ededed;
    box-shadow:inset 0px 4px 14px 2px #ededed;
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #ffffff));
    background:-moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background:-webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background:-o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background:-ms-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background:linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
    background-color:#ffffff;
}
.section_payment_info .area_payment_info .info_box:nth-child(1) {
    margin-left: 0;
}
.section_payment_info .area_payment_info .info_box.none_history {
  width: 100%;
  margin: 0 7px;
}
.section_payment_info .area_payment_info .info_box .info_desc {
    font-size: 1.5rem;
    line-height: 15px;
    width: 73px;
    word-break: break-all;
    display: inline-block;
    vertical-align: middle;
}
.section_payment_info .area_payment_info .info_box.none_history .info_desc {
  font-size: 1.8rem;
  line-height: 20px;
  font-weight: bold;
  width: 235px;
}
.section_payment_info .area_payment_info .info_box .info_title {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -8px;
    padding-left: 29px;
    color: #979797;
    font-size: 1.4rem;
}
.section_payment_info .area_payment_info .info_box .info_title span {
    position: absolute;
    left: 9px;
}
.section_payment_info .area_payment_info .info_box.contract {
    padding: 8px 0 8px 94px;
}
.section_payment_info .area_payment_info .info_box.contract span {
    font-size: 1.2rem;
    line-height: 13px;
}
.section_payment_info .area_payment_info .info_box.model {
    padding: 10px 0 10px 66px;
}
.section_payment_info .area_payment_info .info_box.model .info_desc {
    font-size: 1.3rem;
    width: 93px;
}

.section_history_log {
    padding: 12px 8px 0;
    border-bottom: #020202 1px solid;
}
.section_history_log .area_history_log {
    position: relative;
}
.section_history_log .area_history_log .box_top {
    height: 40px;
}
.section_history_log .area_history_log .box_top p {
    display: inline-block;
    color: #b2b2b2;
    font-size: 1.4rem;
    vertical-align: top;
    padding: 2px 3px 0 4px;
}
.section_history_log .area_history_log .box_top p.schedule {
    color: #000;
}
.section_history_log .area_history_log .box_top .sprite {
    vertical-align: top;
}
.section_history_log .arrow_btn {
    position: absolute;
    right: 10px;
    top: 20px;
}
.section_history_log .arrow_btn.active {
    right: 13px;
    top: 8px;
    height: 21px;
}
.section_history_log .arrow_btn.active .sprite_lower_arrow {
    background-position: 0 -125px;
    width: 14px;
    height: 21px;
}
.section_history_log .area_history_log .box_contents {
    background: #f6f6f6;
    margin-bottom: 5px;
    padding: 3px 0;
}
.section_history_log .area_history_log .box_contents p {
    float:left;
    font-size: 1.3rem;
    padding-left: 8px;
    line-height: 1.5rem;
    display: inline-block;
    width: 50%;
}
.section_history_log .area_history_log .box_log_contents {
    padding: 3px 5px;
    background: #f6f6f6;
    margin-bottom: 5px;
}

</style>
