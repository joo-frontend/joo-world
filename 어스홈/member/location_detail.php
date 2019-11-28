<?php require_once('../assets/elements/header.php');?>
<!-- google map -->
<script async defer	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAACZx8pPW6EhBFg9-itoo8YCpJEA4XJB0&callback=initMap"></script>
<div class="wra_m wra_location">
	<div class="section_map">
		<div class="area_location">
			<p class="back_service"><a href="support_user.php"></a></p>
			<div class="box_location">
				<p class="logo_ushome"><img src="/assets/images/header/header_logo.png"></p>
				<div class="location_info">
					<p class="title">주소</p>
					<p class="desc">서울특별시 마포구 양화로10길 45 (서교동)</p>
				</div>
				<div class="location_info">
					<p class="title">오시는길</p>
					<p class="desc">지하철 2호선 강남역 11,12번 출구</p>
					<p class="desc">지하철 9호선 신논현역 4,5번출구 → 도보 10분</p>
				</div>
				<div class="location_info">
					<p class="title">고객센터</p>
					<p class="tel">1644-0560</p>
				</div> 
			</div>

		</div>
		<div class="area_map">
			<div id="ushome_map"></div>
		</div>
	</div>
</div>
<script type="text/javascript">
	/* 지도 */
	function initMap() {
		var uluru = {lat: 37.550548, lng: 126.918845};
		var map = new google.maps.Map(document.getElementById('ushome_map'), {
			zoom: 17,
			center: {lat: 37.550548, lng: 126.915261},
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map,
			icon: {
				url: "/assets/images/sub/location_1.png",
				scaledSize: new google.maps.Size(59, 80)
			}
		});
	}
</script>
<?php require_once('../assets/elements/footer.php');?>