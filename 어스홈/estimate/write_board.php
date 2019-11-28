<?php require_once('../assets/elements/header.php');?>

<div class="section_write_board">
	<form>
		<div class="area_text_write">
			<input type="text" name="editor_title" class="textbox_title" placeholder="글 제목을 입력하세요">
			<div id="summernote"><p>Hello Summernote</p></div>
		</div>

		<div class="area_photo_upload_board">
			<div class="box_photo_board">
				<p class="title">슬라이드 이미지<span>게시글 상단의 슬라이드에 등록되는 이미지입니다.  (최소 1장 이상)</span></p>
				<div class="upload_photo none">
					<form action="/file-upload" class="dropzone" id="slidePhoto">
						<div class="fallback">
							<input name="file" type="file" multiple />
						</div>
					</form>
				</div>
				<div class="upload_photo">
					<form action="/file-upload" class="dropzone" id="slidePhoto2">
						<div class="fallback">
							<input name="file" type="file" multiple />
						</div>
					</form>
				</div>
			</div>
			<div class="box_photo_board">
				<p class="title">썸네일 이미지<span>썸네일에 등록되는 대표 이미지입니다.  1장만 업로드 하세요.</span></p>
				<div class="upload_photo upload_thumb">
					<form action="/file-upload" class="dropzone" id="thumbnailPhoto">
						<div class="fallback">
							<input name="file" type="file" multiple />
						</div>
					</form>
				</div>
			</div>

		</div>
		<div class="btn_register_board">
			<button class="btn_write">등록</button>
		</div>
	</form>
</div>
<!--summernote-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-lite.js"></script>
<!--//-->
<script>
	/*
	var myDropzone = new Dropzone("#slidePhoto", { 
		url: "/file/post",
		maxFilesize: 250
	});
	*/
	var myDropzone = new Dropzone("#slidePhoto2", { 
		url: "/file/post",
		maxFilesize: 250
	});

	var myDropzone = new Dropzone("#thumbnailPhoto", { 
		url: "/file/post",
		maxFilesize: 250,
		maxFiles:1
	});
	
	/* summernote */
	$('#summernote').summernote({
		height: 500
	});
	
</script>

<?php require_once('../assets/elements/footer.php');?>
