<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$targetId = filter_var(makeitSafe($_GET['id']), FILTER_SANITIZE_NUMBER_INT);

$thanksgoods_market = new thanksgoods_market();
$data = $thanksgoods_market->get_item_detail($targetId);
$category_lists = $thanksgoods_market->get_category_lists();
$option_name = $data['option'];
$option_value = $data['option_value'];
$options = explode('|',$option_name);
$values = explode(']',$option_value);
$op_num = count($options)-1;
if($op_num <0){
    $op_num = 0;
}
?>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 
  <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script> 
  <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote.css" rel="stylesheet">
  <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote.js"></script>
    <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">상품 수정</h3>
                                <form class="forms-sample" method="POST" onsubmit="return val_ck()" action="/admin/market/item/do/modify.php" enctype="multipart/form-data">
                                    <input type="hidden" name="id" value="<?php echo $targetId; ?>">
                                      <div class="form-group">
                                    <label for="type">섬네일</label><br>
                                    <input type="file" name="thumbnail" id="thumbnail">
                                </div>
                                    <div class="form-group">
                                        <label for="type">타입</label>
                                        <select class="form-control" name="type" id="type">
                                            <option value="1" <?php if ($data['type'] == 1) { ?> selected <?php } ?>>신제품</option>
                                            <option value="2" <?php if ($data['type'] == 2) { ?> selected <?php } ?>>스타트업 펀딩</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="category">카테고리</label>
                                        <select class="form-control" name="category" id="category">
                                            <option value="<?php echo $data['category']; ?>" selected><?php echo $admin->get_category_name($data['category']); ?></option>
                                            <?php foreach ($category_lists as $list) : ?>
                                                <?php if ($list['id'] != $data['id']) : ?>
                                                    <option value="<?php echo $list['id']; ?>" <?php if ($data['category'] == $list['id']) : ?> selected <?php endif; ?>><?php echo $list['group_name']; ?></option>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="price">기본 가격</label>
                                        <input type="number" class="form-control" id="price" name="price" min="0" value="<?php echo $data['price']; ?>">
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" name="is_sale" id="is_sale" value="1" <?php if ($data['is_sale'] == 1) { ?> checked <?php } ?>>
                                            할인 여부
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <label for="sale_price">할인 가격</label>
                                        <input type="number" class="form-control" id="sale_price" name="sale_price" min="0" value="<?php echo $data['sale_price']; ?>">
                                    </div>
                                    <div class="form-group" class="add_option" id="op_form">
                                   <!--<button type="button" onclick="ck_option();">옵션 확인</button>-->
                                   <button type="button" onclick="add_option();" id="op_bt" style="margin:10px 0;">옵션추가</button>
                                    <?php for($i=0;$i<count($options)-1;$i++){
                                        $op_val = explode('`',$options[$i]);
                                        if(count($op_val)>1){
                                        $checked = 'checked';
                                        }else{
                                        $checked ='';
                                        }
                                        $detail_option = explode('`',$values[$i]);
                                    echo '<div class="form-group" id="_'.($i+1).'"><label>옵션명</label><br><input type="text" name="option" id="option'.($i+1).'" placeholder="옵션명" value="'.$op_val[0].'"><button type="button" onclick="add_detail_option('.($i+1).');" id="add_op_bt'.($i+1).'" style="margin:10px 0;">상세 옵션 추가</button><label style="vertical-align:middle">필수 선택 옵션</label><input type="checkbox" name="req" id="req'.($i+1).'" value="1" '.$checked.'>';
                                        for($y=0;$y<count($detail_option);$y++){
                                        $val = explode('|',$detail_option[$y]);
                                        echo '<div class="form-group"><label>상세옵션명</label><br><input type="text" name="option" class="detail_option'.($i+1).'" placeholder="상세옵션명" value="'.$val[0].'"> <input type="number" class="detail_price'.($i+1).'" placeholder="추가 포인트" value="'.$val[1].'"></div>';
                                        }


                                    echo '</div>';

                                    }?>
                                </div>

                                    <div class="form-group">
                                        <label for="delivery_price">배송비</label>
                                        <input type="number" class="form-control" id="delivery_price" name="delivery_price" min="0" value="<?php echo $data['delivery_price']; ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="name">상품명</label>
                                        <input type="text" class="form-control" id="name" name="name" value="<?php echo $data['name']; ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="description">상품설명</label>
                                        <textarea class="form-control" name="description" id="summernote" rows="10"><?php echo $data['description']; ?></textarea>
                                    </div>
                                    <input type="hidden" name="option_name" id="option_name">
                                <input type="hidden" name="option_value" id="option_value">
                                    <input type="submit" class="btn btn-success mr-2" value="수정">
                                    <input type="button" class="btn btn-light" value="취소" onclick="window.location.href='/admin/market/item/index.php'">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script>
      var op_num=<?=$op_num?>;
     function add_option(){
     op_num++;
    $('#op_form').append('<div  class="form-group" id="_'+op_num+'"><label>옵션명</label><br><input type="text" name="option" id="option'+op_num+'" placeholder="옵션명"><button type="button" onclick="add_detail_option('+op_num+');" id="add_op_bt'+op_num+'" style="margin:10px 0;">상세 옵션 추가</button><label style="vertical-align:middle">필수 선택 옵션</label><input type="checkbox" name="req" id="req'+op_num+'" value="1"></div>');
   
    }
    function add_detail_option(num){
    $('#_'+num).append('<div  class="form-group"><label>상세옵션명</label><br><input type="text" name="option" class="detail_option'+num+'" placeholder="상세옵션명"> <input type="number" class="detail_price'+num+'" placeholder="추가 포인트"></div>');
    }
    function val_ck(){
      
            ck_option();
      
    
    }

    function ck_option(){
        var option = '';

        var detail = '';
        for(var i=1; i<=op_num;i++){
            if($('#option'+i).val()==''){
                continue;
            }
        if($('#req'+i).is(':checked')){
        option +=$('#option'+i).val()+'`|';
        }else{ 
        option +=$('#option'+i).val()+'|';
        }
        
        var cnt = $('.detail_option'+i).length;
 
        for(var y=0;y<cnt;y++){
        
        if($('.detail_price'+i).eq(y).val()==''){
        var price = 0;
        }else{
        var price = parseInt($('.detail_price'+i).eq(y).val());
        }
       
        if($('.detail_option'+i).eq(y).val()==''){
            continue;
        }
        detail +=$('.detail_option'+i).eq(y).val()+'|';

        if(y==cnt-1){
            detail +=price
        detail +=']';
        }else{
            detail +=price+'`';
        }
        }
        }
         
        $('#option_name').val(option);
        $('#option_value').val(detail);
    }
$(document).ready(function(){
 
 $('#summernote').summernote({
 height:300,
 width:1050,
      fontSizes: ['8', '9', '10', '11', '12', '14','16', '18', '20','22', '24', '36', '48' , '64', '82', '150'],
      toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video', 'hr']],
            ['view', ['codeview']]
        ],
 callbacks: {
        onImageUpload: function(image) {
            uploadImage(image[0]);
        }
    }
 });
 function uploadImage(image) {

    var data = new FormData();
    data.append("image", image);
    console.log(image);
    $.ajax({
        url: '/admin/market/item/do/img_up.php',
        cache: false,
        contentType: false,
        processData: false,
        data: data,
        type: "post",
        success: function(url) {
            console.log(url);
            var image = $('<img>').attr('src', url);
            $('#summernote').summernote("insertNode", image[0]);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

});
</script>
<?php require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/footer.php');?>