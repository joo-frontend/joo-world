(function($){
$(document).ready(function(){
	if(location.pathname.indexOf('business') != -1){
		$(".clearfix").find("li").removeClass("focus");
		$(".clearfix").find("li").eq(1).addClass("focus");
	};
	if(location.pathname.indexOf('press') != -1){
		$(".clearfix").find("li").removeClass("focus");
		$(".clearfix").find("li").eq(2).addClass("focus");
	};
	if(location.pathname.indexOf('contact') != -1){
		$(".clearfix").find("li").removeClass("focus");
		$(".clearfix").find("li").eq(3).addClass("focus");
	};
	
	var mySwiper = new Swiper ('.detail_container_rolling', {
		direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
		loopAdditionalSlides: 1,
		centeredSlides:false,
        autoplay: 1500,  
		spaceBetween: 15,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
	
	$(window).resize(function(){
		var header_height = $('.header').height();
		$(".contents").css("padding",header_height + "px 0 0");
	}).resize();


	$(".link_family_site").click(function () {
		$(this).toggleClass("open");
		$(".family_site ul").toggle();
		return false;
    });
});
})(jQuery);