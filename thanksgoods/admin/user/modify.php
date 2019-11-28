<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$targetId = filter_var(makeitSafe($_GET['id']), FILTER_SANITIZE_NUMBER_INT);

$thanksgoods_user = new thanksgoods_user();
$data = $thanksgoods_user->get_detail($targetId);
?>

<div class="container-fluid page-body-wrapper">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">유저 정보 수정</h3>
                            <form class="forms-sample" enctype="multipart/form-data" method="POST" action="/admin/user/do/modify.php">
                                <input type="hidden" name="id" value="<?php echo $data['id'];?>">
                                
                                <h4 class="card-title">[필수 정보]</h4>
                                <div class="form-group">
                                    <label for="email">이메일</label>
                                    <input type="text" class="form-control" id="userid" name="userid" value="<?php echo $data['userid']; ?>">
                                </div>
                                <div class="form-group">
                                    <label for="contact">연락처</label>
                                    <input type="text" class="form-control" id="contact" name="contact" value="<?php echo $data['contact']; ?>">
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2">
                                        <label>주소</label>
                                        <input class="form-control" type="text" name="postcode" id="postcode" value="<?php echo $data['postcode']; ?>" placeholder="우편번호">
                                    </div>
                                    <div class="col-sm-2">
                                        <label></label>
                                        <a class="btn btn-sm btn-dark form-control" href="#" id="search_addr" name="search_addr" onclick="join_addr();">조회</a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="address1" name="address1" value="<?php echo $data['address1']; ?>">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="address2" name="address2" value="<?php echo $data['address2']; ?>">
                                </div>

                                <br><h4 class="card-title">[선택 정보]</h4>
                                <div class="form-group">
                                    <label for="nickname">닉네임</label>
                                    <input type="text" class="form-control" id="nickname" name="nickname" value="<?php echo $data['nickname']; ?>">
                                </div>
                                <div class="form-group">
                                    <label for="profile">프로필 사진</label><br>
                                    <div class="profile_image" style="background-size: 100%; background-image:url(	<?php
                                    $ck = 0;
                                    foreach(glob('/DK/hosting_users/thanksgoods/www/public_html/assets/images/profile/' . $data['id'] . '.*') as $value) {
                                        if(file_exists($value)) {
                                            echo str_replace('/DK/hosting_users/thanksgoods/www/public_html', '', $value);
                                            $ck = 1;
                                        }
                                    }
                                    ?>); background-size:cover; <?php if ($ck != 0) : ?> width:130px; height:130px; <?php endif; ?>border-radius:100%; display:inline-block;">
                                    </div>
                                    <input type="file" class="form-control" id="profile" name="profile">
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2">
                                        <label>성별</label>
                                        <div class="form-radio">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="gender" id="gender" value="1" <?php if ($data['gender'] == 1) : ?> checked <?php endif; ?>>
                                                남
                                                <i class="input-helper"></i></label>
                                        </div>
                                    </div>
                                    <div class="col-sm-2">
                                        <label></label>
                                        <div class="form-radio">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="gender" id="gender" value="2" <?php if ($data['gender'] == 2) : ?> checked <?php endif; ?>>
                                                여
                                                <i class="input-helper"></i></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="age">나이대</label>
                                    <select class="form-control" name="age" id="age">
                                        <option value="10" <?php if ($data['age'] == 10) { ?> selected <?php } ?>>10대</option>
                                        <option value="20" <?php if ($data['age'] == 20) { ?> selected <?php } ?>>20대</option>
                                        <option value="30" <?php if ($data['age'] == 30) { ?> selected <?php } ?>>30대</option>
                                        <option value="40" <?php if ($data['age'] == 40) { ?> selected <?php } ?>>40대</option>
                                        <option value="50" <?php if ($data['age'] == 50) { ?> selected <?php } ?>>50대 이상</option>
                                    </select>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-1">
                                        <label for="interests">주요관심사</label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="v">
                                                뷰티
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <label for="interests"></label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="f">
                                                맛집
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <label for="interests"></label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="t">
                                                여행
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <label for="interests"></label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="p">
                                                사진
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <label for="interests"></label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="l">
                                                숙박
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <label for="interests"></label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="b">
                                                도서
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <label for="interests"></label>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input interests" name="interests" value="g">
                                                모임
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <input type="hidden" name="interests_value" id="interests_value" value="">

                                <input type="submit" class="btn btn-success mr-2 btn-submit" value="수정">
                                <input type="button" class="btn btn-light" value="취소" onclick="window.location.href='/admin/user'">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<script>
    /** 이미 선택된 관심사 선택 **/
    $(document).ready(function () {
        var interests = '<?php echo $data['interests'] ?>';
        interests = interests.split(',');

        $('.interests').each(function (key, value) {
            if (interests.indexOf($(value).val()) != -1) {
                $(value).attr('checked', true);
            }
        });
    });

    function join_addr() {
        new daum.Postcode({
            oncomplete: function(data) {
                var fullAddr = '';
                var extraAddr = '';
                if (data.userSelectedType === 'R') {
                    fullAddr = data.roadAddress;
                } else {
                    fullAddr = data.jibunAddress;
                }

                if(data.userSelectedType === 'R'){
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                document.getElementById('postcode').value = data.zonecode;
                document.getElementById('address1').value = fullAddr;
                document.getElementById('address2').value = '';
                document.getElementById('address2').focus();
            }
        }).open();
    };

    $('.btn-submit').click(function () {
        var select_value = new Array;
        $('.interests').each(function (key, value) {
            if ($(value).is(':checked')) {
                select_value.push($(value).val())
            }
        });

        $('#interests_value').val(select_value.join(','));
    });
</script>

<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>