<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php'); ?>

    <div class="market_wra">
        <div class="my_menu">
            <p class="title">후기작성</p>
        </div>
        <div class="review_area">
            <p class="review_desc">후기작성 시 100Point를 추가적립해 드립니다</p>
            <div class="detail_order">
                <dl>
                    <dd class="mypick_list">
                        <p class="imgBox"><img src="/assets/images/mypage/product1.png" alt=""></p>
                        <div class="pd_info">
                            <p class="name">애쉬크로프트의 정수, 류노스케 안경</p>
                            <p class="detail"><span>수량</span>2</p>
                            <p class="detail"><span>옵션</span>Brass, Balck Hard case</p>
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="review_form_area">
                <form>
                    <dl class="clearfix">
                        <dt class="lb_2"><p>평가</p></dt>
                        <dd>
                            <div class="evaluation_pd">
                                <a href="#" class="focus">매우만족</a>
                                <a href="#">만족</a>
                                <a href="#">보통</a>
                                <a href="#">불만족</a>
                            </div>
                        </dd>
                    </dl>
                    <dl class="clearfix">
                        <dt><p>제목</p></dt>
                        <dd>
                            <input type="text" class="textbox_member" name="reviewTitle">
                        </dd>
                    </dl>
                    <dl class="clearfix">
                        <dt><p>내용</p></dt>
                        <dd>
                            <textarea name="txxReview" class="txtarea"></textarea>
                        </dd>
                    </dl>
                    <dl class="clearfix">
                        <dt><p>사진</p></dt>
                        <dd>
                        <span class="filetype">
                            <input type="text" class="file-text"/>
                            <span class="file-btn">찾아보기</span>
                            <span class="file-select"><input type="file" class="input-file" size="3"></span>
                        </span>
                        </dd>
                    </dl>
                    <div class="btn_group btn_group_2">
                        <button class="btn_gray">이전으로</button>
                        <button class="btn_blue">작성완료</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>
        /*파일업로드*/
        var $fileBox = $('.filetype');

        $fileBox.each(function () {
            var $fileUpload = $(this).find('.input-file'),
                $fileText = $(this).find('.file-text')
            $fileUpload.on('change', function () {
                var fileName = $(this).val();
                $fileText.attr('disabled', 'disabled').val(fileName);
            })
        })
        /*만족*/
        $(".evaluation_pd a").click(function () {
            $(".evaluation_pd a").removeClass("focus");
            $(this).addClass("focus");
        });

    </script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>