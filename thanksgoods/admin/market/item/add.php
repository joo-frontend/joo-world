<?php
require_once ('/DK/hosting_users/thanksgoods/www/public_html/admin/assets/elements/header.php');

$thanksgoods_market = new thanksgoods_market();

$category_lists = $thanksgoods_market->get_category_lists();
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
                            <h3 class="card-title">상품 추가</h3>
                            <form class="forms-sample" method="POST" onsubmit="return val_ck()" action="/admin/market/item/do/create.php" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="type">섬네일</label><br>
                                    <input type="file" name="thumbnail" id="thumbnail">
                                </div>
                                <div class="form-group">
                                    <label for="type">타입</label>
                                    <select class="form-control" name="type" id="type">
                                        <option value="1">신제품</option>
                                        <option value="2">스타트업 펀딩</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="category">카테고리</label>
                                    <select class="form-control" name="category" id="category">
                                        <?php foreach ($category_lists as $list) : ?>
                                            <option value="<?php echo $list['id']; ?>"><?php echo $list['group_name']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="price">기본 가격</label>
                                    <input type="number" class="form-control" id="price" name="price" min="0">
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="is_sale" id="is_sale" value="1">
                                        할인
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="sale_price">할인 가격</label>
                                    <input type="number" class="form-control" id="sale_price" name="sale_price" min="0">
                                </div>
                                <div class="form-group" class="add_option" id="op_form">
                                   <button type="button" onclick="ck_option();">옵션 확인</button>
                                   <button type="button" onclick="add_option();" id="op_bt" style="margin:10px 0;">옵션추가</button>

                                </div>
                                
                                <div class="form-group">
                                    <label for="delivery_price">배송비</label>
                                    <input type="number" class="form-control" id="delivery_price" name="delivery_price" min="0">
                                </div>
                                <div class="form-group">
                                    <label for="name">상품명</label>
                                    <input type="text" class="form-control" id="name" name="name">
                                </div>
                                <div class="form-group">
                                    <label for="description">상품설명</label>

                                    <textarea class="form-control" name="description" id="summernote" rows="10"></textarea>
                                   
                                </div>
                                <input type="hidden" name="option_name" id="option_name">
                                <input type="hidden" name="option_value" id="option_value">
                                <input type="submit" class="btn btn-success mr-2" value="추가">
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
    var op_num=0;
    function add_option(){
     op_num++;
    $('#op_form').append('<div  class="form-group" id="_'+op_num+'"><label>옵션명</label><br><input type="text" name="option" id="option'+op_num+'" placeholder="옵션명"><button type="button" onclick="add_detail_option('+op_num+');" id="add_op_bt'+op_num+'" style="margin:10px 0;">상세 옵션 추가</button><label style="vertical-align:middle">필수 선택 옵션</label><input type="checkbox" name="req" id="req'+op_num+'" value="1"></div>');
   
    }
    function add_detail_option(num){
    $('#_'+num).append('<div  class="form-group"><label>상세옵션명</label><br><input type="text" name="option" class="detail_option'+num+'" placeholder="상세옵션명"> <input type="number" class="detail_price'+num+'" placeholder="추가 포인트"></div>');
    }
    function val_ck(){
        if($('#thumbnail').val()==''){
        alert('상품 섬네일을 등록해주시기 바랍니다.');
        return false;        
        }else{
            ck_option();
        return true;
        }
    
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
    </script>
  <script>
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