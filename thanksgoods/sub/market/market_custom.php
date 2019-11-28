<?php
require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/header.php');

$user = new user();
$market = new thanksgoods_market();

// 보유 포인트
$point_info = $user->point_read();
if (count($point_info) < 1) {
    $total_point = 0;
}else{
    $total_point = $point_info[0]['total_point'];
}

// 카테고리
$category = $market->get_category_lists();

// 카테고리 id
$category_id = $_GET['id'] ? $_GET['id'] : $category[0]['id'];

// n포인트만 더 모으면 구매할 수 있는 상품
$need_point_items = $market->get_item_list($category_id, $total_point, ['sale_price' => 'ASC'], 0, 6);

// best items
$best_items = $market->get_best_items($category_id);

// 상품 최신순
$recent_items = $market->get_item_list($category_id, null, ['created_at' => 'DESC'], 0, 4);

$need_point = $need_point_items[0]['sale_price'] - $total_point;
?>
    <div class="market_wra">
    <div class="my_menu my_market">
        <div class="menu_area">
            <a href="/sub/mypage/myorder.php" class="link_chk_my">주문·배송 조회</a>
            <ul class="clearfix">
                <li ><a href="/sub/market/market_home.php">HOME</a></li>
                <li><a href="/sub/market/market_home.php?hash=1">스탠드업펀딩</a></li>
                <li ><a href="/sub/market/market_new.php">신제품</a></li>
                <li class="focus"><a href="/sub/market/market_custom.php">맞춤상품</a></li>
            </ul>

        </div>
    </div>
    <div class="home_cate">
        <ul class="cate_hash">
            <?php foreach ($category as $item) : ?>
                <li <?php if ($item['id'] == $category_id) : ?> class="focus" <?php endif; ?>><a href="/sub/market/market_custom.php?id=<?= $item['id']; ?>">#<?= $item['group_name']; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div class="my_point_area">
        <p class="title"><span>나의 포인트로 구매</span>할 수 있는<br>상품들을 확인하세요</p>
        <p class="mypoint"><?= $total_point; ?></p>
        <p class="txt_point">총 보유포인트</p>
    </div>
    <div class="market_area">
        <div class="point_desc_box">
            <p><span class="want_point"><?= $need_point ?></span><span class="txt_blue">포인트만 더 모으면</span><br>구매할 수 있는 상품들이에요!</p>
            <a href="#" class="charge_point">포인트 충전 +</a>
        </div>
        <div class="slide_recent">
            <p class="title_blue"></p>
            <div class="swiper-container slideMarket slideMarketRecent" id="slideRecent">
                <div class="swiper-wrapper">
                    <?php foreach ($need_point_items as $item) : ?>
                        <div class="swiper-slide">
                            <div class="recent_pd_box">
                                <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" >
                                    <?php foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/' . $item['id'] . '.*') as $value) : ?>
                                        <img src="<?= str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value) ?>" alt="">
                                    <?php endforeach; ?>
                                </a>
                                <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" class="name"><?= $item['name']; ?></a>
                                <div class="sell_info">
                                    <p class="fav">
                                        <span><?= $thanks->get_wist_cnt($item['id']); ?></span>
                                        <input id="favPdC<?= $item['id']; ?>" type="checkbox" class="fav_chk favPdC<?= $item['id']; ?>" data-id="<?= $item['id']; ?>" <?php if ($thanks->my_wish_ck($item['id'])) : ?> checked <?php endif; ?>>
                                        <label for="favPdC<?= $item['id']; ?>" class="shapeChk"></label>
                                    </p>
                                    <p class="cart" data-id="<?= $item['id']; ?>"></p>
                                </div>
                            </div>
                            <div class="slidePd_info">
                                <a href="#" class="charge_point">포인트 충전 +</a>
                                <div class="best_pd_price">
                                    <del><?= $item['price']; ?></del>
                                    <span><?= $item['sale_price']; ?></span>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div class="slide_best10">
            <p class="title_blue">Best 10</p>
            <div class="swiper-container slideMarket slideMarket10" id="slideMarket10">
                <div class="swiper-wrapper">
                    <?php foreach ($best_items as $item) : ?>
                        <div class="swiper-slide">
                            <?php foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/' . $item['id'] . '.*') as $value) : ?>
                                <div class="imgBox_best">
                                    <img src="<?= str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value) ?>" alt="">
                                    <div class="info_preview">
                                        <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" class="name"><?= $item['name']; ?></a>
                                        <div class="sell_info">
                                            <p class="fav active">
                                                <span><?= $thanks->get_wist_cnt($item['id']); ?></span>
                                                <input type="checkbox" id="favPdC<?= $item['id']; ?>" class="fav_chk favPdC<?= $item['id']; ?>" data-id="<?= $item['id']; ?>" <?php if ($thanks->my_wish_ck($item['id'])) : ?> checked <?php endif; ?>>
                                                <label for="favPdC<?= $item['id']; ?>" class="shapeChk">
                                            </p>
                                            <p class="cart" data-id="<?= $item['id']; ?>"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slidePd_name">
                                    <p class="name_pd"><?= $item['name']; ?></p>
                                </div>
                                <div class="slidePd_info">
                                    <a href="#" class="charge_point">포인트 충전 +</a>
                                    <div class="best_pd_price">
                                        <del><?= $item['price']; ?></del>
                                        <span><?= $item['sale_price']; ?></span>
                                    </div>
                                    <div class="sell_info">
                                        <p class="fav active">
                                            <span><?= $thanks->get_wist_cnt($item['id']); ?></span>
                                            <input type="checkbox" class="fav_chk favPdC<?= $item['id']; ?>" id="favPdC<?= $item['id']; ?>" data-id="<?= $item['id']; ?>" <?php if ($thanks->my_wish_ck($item['id'])) : ?> checked <?php endif; ?>>
                                            <label for="favPdC<?= $item['id']; ?>" class="shapeChk">
                                        </p>
                                        <p class="cart" data-id="<?= $item['id']; ?>"></p>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

        </div>
        <div class="list_market_pd">
            <div class="sort_pd">
                <a data-tap="list_recent" href="#" class="recent focus">최신순</a>
                <a data-tap="list_popular" href="#" class="popular">인기순</a>
            </div>
            <ul id="recent" class="list_item">
                <span id="list_recent">
                <?php foreach ($recent_items as $item) : ?>
                    <li class="<?php if ($item['sale_price'] > $total_point) : ?> locked <?php endif; ?> clearfix">
                        <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" class="imgPd">
                            <?php foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/' . $item['id'] . '.*') as $value) : ?>
                                <img src="<?= str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value) ?>" alt="">
                            <?php endforeach; ?>
                        </a>
                        <div class="lock_pd">
                            <img src="/assets/images/market/lock_product.png" alt="">
                            <p>포인트가 부족해요</p>
                        </div>
                        <div class="infoPd">
                            <div class="title_pd">
                                <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" class="name"><?= $item['name']; ?></a>
                                <div class="sell_info">
                                    <p class="fav">
                                        <span><?= $thanks->get_wist_cnt($item['id']); ?></span>
                                        <input type="checkbox" id="favPdC<?= $item['id']; ?>" class="fav_chk favPdC<?= $item['id']; ?>" data-id="<?= $item['id']; ?>" <?php if ($thanks->my_wish_ck($item['id'])) : ?> checked <?php endif; ?>>
                                        <label for="favPdC<?= $item['id']; ?>" class="shapeChk">
                                    </p>
                                    <p class="cart" data-id="<?= $item['id']; ?>"></p>
                                </div>
                            </div>
                            <div class="slidePd_info">
                                <a href="#" class="charge_point">포인트 충전 +</a>
                                <div class="best_pd_price">
                                    <del><?= $item['price']; ?></del>
                                    <span><?= $item['sale_price']; ?></span>
                                </div>
                            </div>
                        </div>
                    </li>
                <?php endforeach; ?>
                </span>
                <?php if (count($market->get_item_list($category_id, null, ['created_at' => 'DESC'], 4, 4)) > 0) : ?>
                    <a href="#" class="more_pd more_recent" data-type="recent" data-page="1">MORE +</a>
                <?php endif; ?>
            </ul>

            <ul id="popular" class="list_item">
                <span id="list_popular">
                <?php foreach ($best_items as $key => $item) : ?>
                    <li class="<?php if ($item['sale_price'] > $total_point) : ?> locked <?php endif; ?> clearfix">
                        <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" class="imgPd">
                            <?php foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/market/' . $item['id'] . '.*') as $value) : ?>
                                <img src="<?= str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value) ?>" alt="">
                            <?php endforeach; ?>
                        </a>
                        <div class="lock_pd">
                            <img src="/assets/images/market/lock_product.png" alt="">
                            <p>포인트가 부족해요</p>
                        </div>
                        <div class="infoPd">
                            <div class="title_pd">
                                <a href="/sub/market/market_product.php?target=<?= $item['id']; ?>" class="name"><?= $item['name']; ?></a>
                                <div class="sell_info">
                                    <p class="fav">
                                        <span><?= $thanks->get_wist_cnt($item['id']); ?></span>
                                        <input type="checkbox" id="favPdC<?= $item['id']; ?>" class="fav_chk favPdC<?= $item['id']; ?>" data-id="<?= $item['id']; ?>" <?php if ($thanks->my_wish_ck($item['id'])) : ?> checked <?php endif; ?>>
                                        <label for="favPdC<?= $item['id']; ?>" class="shapeChk">
                                    </p>
                                    <p class="cart" data-id="<?= $item['id']; ?>"></p>
                                </div>
                            </div>
                            <div class="slidePd_info">
                                <a href="#" class="charge_point">포인트 충전 +</a>
                                <div class="best_pd_price">
                                    <del><?= $item['price']; ?></del>
                                    <span><?= $item['sale_price']; ?></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <?php if ($key == 3) break; ?>
                <?php endforeach; ?>
                </span>
                <?php if (count($market->get_best_items($category_id, 4, 4)) > 0) : ?>
                    <a href="#" class="more_pd more_popular" data-type="popular" data-page="1">MORE +</a>
                <?php endif; ?>
            </ul>
        </div>
    </div>
    <script src="/assets/js/swiper-4.3.3/dist/js/swiper.min.js"></script>
    <script>
        $(document).ready(function () {
            $("#recent").css("display","block");
            $("#popular").css("display","none");
        });

        $(".sort_pd a").click(function () {
            $(".sort_pd a").removeClass("focus");
            $(this).addClass("focus");
        });

        $('.sort_pd a').click(function () {
            var tap = $(this).data('tap');
            $(".list_item").stop().fadeOut(200);
            $("#" + tap).stop().fadeIn(200);
            $("#" + tap).parent().stop().fadeIn(200);

            tap = tap.replace(/list_/gi, '');
        });

        var swiper = new Swiper('#slideMarket10', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        var swiper = new Swiper('#slideRecent', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                1024: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                650: {
                    slidesPerView: 'auto',
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                }
            }
        });

        $('.cart').click(function () {
            var id = $(this).data('id');
            alert('옵션 선택이 필요합니다.');
            window.location.href = "/sub/market/market_product.php?target=" + id;
        });

        $('.more_pd').click(function () {
            var type = $(this).data('type');
            var page = $(this).data('page') + 1;

            $.ajax({
                type: "POST",
                dataType: 'json',
                data: {
                    type: type,
                    page: page,
                    category_id: <?= $category_id; ?>,
                },
                url: "/api/more_item.php",
                success: add_items
            });
        });

        function add_items(response) {
            var page = response.page;
            var type = response.type;
            var lists = response.lists;
            var has_next = response.has_next;

            for (var cnt = 0; cnt < lists.length; cnt++) {
                var add_li = '<li class="';
                if (lists[cnt].sale_price > <?= $total_point ?>) {
                    add_li += 'locked ';
                }
                add_li += 'clearfix">';
                // 이미지
                add_li += '<a href="/sub/market/market_product.php?target=' + lists[cnt].id + '" class="imgPd">';
                add_li += '<img src="' + lists[cnt].image_url + '" alt="">';
                add_li += '</a>';
                add_li += '<div class="lock_pd">';
                add_li += '<img src="/assets/images/market/lock_product.png" alt="">';
                add_li += '<p>포인트가 부족해요</p>';
                add_li += '</div>';
                add_li += '<div class="infoPd">';
                add_li += '<div class="title_pd">';
                add_li += '<a href="/sub/market/market_product.php?target=' + lists[cnt].id + '" class="name">' + lists[cnt].name + '</a>';
                add_li += '<div class="sell_info">';
                add_li += '<p class="fav">';
                add_li += '<span>' + lists[cnt].favorite_count + '</span>';
                add_li += '<input type="checkbox" id="favPdC' + lists[cnt].id + '" class="fav_chk favPdC' + lists[cnt].id + '" data-id="' + lists[cnt].name + '"';
                if (lists[cnt].is_my_favorite) {
                    add_li += ' checked';
                }
                add_li += '>';
                add_li += '<label for="favPdC' + lists[cnt].id + '" class="shapeChk">';
                add_li += '</p>';
                add_li += '<p class="cart"></p>';
                add_li += '</div>';
                add_li += '</div>';
                add_li += '<div class="slidePd_info">';
                add_li += '<a href="#" class="charge_point">포인트 충전 +</a>';
                add_li += '<div class="best_pd_price">';
                add_li += '<del>' + lists[cnt].price + '</del>';
                add_li += '<span>' + lists[cnt].sale_price + '</span>';
                add_li += '</div>';
                add_li += '</div>';
                add_li += '</div>';
                add_li += '</li>';

                $('#list_' + type).append(add_li);
            }
            $('.more_' + type).data('page', page + 1);

            if (has_next == 0) {
                $('.more_' + type).css("display", "none");
            }
        }

        /**
         * 찜
         */
        $('.fav_chk').click(function () {
            var ck =  $(this).is(':checked');
            var id = $(this).data('id');
            var numLike = $('.favPdC' + id).parent().find('span').html();

            $.ajax({
                type: "POST",
                dataType: 'json',
                data: {
                    target: id
                },
                url: "/api/ck_wish.php",
                success: function(response) {
                    if (response == 200) {
                        if (ck == true) {
                            numLike ++;
                            $('.favPdC' + id).parent().find('span').html(numLike);
                            $('.favPdC' + id).parent().find('label').attr("style", 'background-image: url("/assets/images/market/heart.png")');
                        } else {
                            numLike --;
                            $('.favPdC' + id).parent().find('span').html(numLike);
                            $('.favPdC' + id).parent().find('label').attr("style", 'background-image: url("/assets/images/market/heart_off.png")');
                        }
                    }else if(response == 400) {
                        alert("해당기능은 로그인 후 이용하실 수 있습니다.");
                        location.href = "/";
                    }
                },
            });
        });
    </script>
<?php require_once('/DK/hosting_users/thanksgoods/www/public_html/assets/elements/footer.php'); ?>