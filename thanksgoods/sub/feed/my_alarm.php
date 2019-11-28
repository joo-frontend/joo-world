<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');?>

  <div class="feed_wra">
        <div class="feed_profile_area feed_setting_area">
            <p class="imgBox">
                <img src="/assets/images/feed/myfeed_profile.png" alt="">
            </p>
            <div class="profile_feedbox">
                <p class="name">doflwl</p>
                <a href="/sub/feed/my_profile_edit.php" class="setting_info">내정보 수정</a>
                <a href="/sub/feed/my_alarm.php" class="setting_alarm focus">알림 설정</a>
            </div>
            <div class="my_post_info">
                <div class="each_info">
                    <p class="num">5800</p>
                    <p class="desc">보유 <span>포인트</span></p>
                </div>
                <div class="each_info">
                    <p class="num">30</p>
                    <p class="desc">감사 <span>카드</span></p>
                </div>
                <div class="each_info">
                    <p class="num">60</p>
                    <p class="desc">공감 <span>카드</span></p>
                </div>
            </div>
            <a href="/sub/feed/make_feed.php" class="write_card"><img src="/assets/images/feed/write.png" alt=""></a>
        </div>
      <div class="feed_profile_area feed_profile_edit_area">
          <p class="type_info type_info_2">알림 설정</p>
          <div class="alarm_edit_box">
              <p class="alarm_type">댓글</p>
              <div class="group_alarm">
                  <span class="alarm_status">ON</span>
                  <p class="box_icon_alarm active">
                      <span></span>
                  </p>
                  <span class="alarm_status">OFF</span>
              </div>
              <p class="guide_txt">※  가이드 텍스트입니다</p>
          </div>
          <div class="alarm_edit_box last">
              <p class="alarm_type">이벤트</p>
              <div class="group_alarm">
                  <span class="alarm_status">ON</span>
                  <p class="box_icon_alarm">
                      <span></span>
                  </p>
                  <span class="alarm_status">OFF</span>
              </div>
              <p class="guide_txt">※  가이드 텍스트입니다</p>
          </div>
      </div>
      <div class="btn_group">
          <button class="btn_blue btn_alone">설정완료</button>
      </div>
  </div>

   <script>
        $(".box_icon_alarm").click(function () {
            $(this).toggleClass("active");
        });
    </script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php');?>