// 로드시 실행 할 함수
$(document).ready(function(){

});

// 스크롤 시 실행 할 함수
$(window).on('scroll', function(){
    showSearchAreaScroll();
    showSortingAreaScroll();
    showHeaderAreaScroll();
});

// 하이퍼링크 기능 제어
$(document).on('click', 'a[href="#"]', function(event){
    event.preventDefault();
});

// 메인 하단영역 오픈 기능
$('.area_splash ._toggleActive').on('click', function(e){
    // active 할 대상 파라미터로 넘김
    var target = $(e.currentTarget).parent('.area_splash');
    console.log(target)
    commonToggleClassActive(target)
});

// 검색버튼 기능
$('._toggleSearchBtn').on('click', function(){
    showSearchAreaBtn();
});

// 제품 좋아요 토글 버튼
$('._toggleFav').on('click', function(e){
    $(this).toggleClass('selected')

});

// 자세히 보기 버튼
$('._open_box .detail_more').on('click', function(e){
    $(this).toggleClass('active').siblings('div').toggleClass('open')


});

// 제품라인 아코디언 메뉴
$('._accordionMenu > li > a').on('click', function(e){
    var target = $(e.currentTarget);
    if(!target.parent().hasClass('all')){
        fnAccordionMenu(target);
    }
});
// 채팅 텍스트창 리사이즈
$('.chat_window').on('keydown', function(){
    if($('.chat_window').height() < 90){
        fnChatTextAreaResize();
    }
})
// 텍스트 박스 포커스 시 삭제 버튼 노출
$('input[type="text"], input[type="email"], input[type="password"]').on('focus', function(e){
    var target = $(e.currentTarget);
    target.siblings('.btn_delete').show();
});
// 텍스트 박스 포커스 아웃 시 삭제 버튼 숨김
$('input[type="text"], input[type="email"], input[type="password"]').on('blur', function(e){
    var target = $(e.currentTarget);
    setTimeout(function(){
        target.siblings('.btn_delete').hide();
    },100)
});

// 텍스트 박스 삭제 버튼 기능
$('.btn_delete').on('click', function(e){
    var target = $(e.currentTarget);
    target.siblings('input').val('');
});

// 퀴즈 1개 선택
$('._selectTypeLengthOne li a').on('click', function(e){
    var target = $(e.currentTarget);
    target.parent().addClass('checked').siblings().removeClass('checked')
});
// 퀴즈 3개 선택
$('._selectTypeLengthThree li a').on('click', function(e){
    var target = $(e.currentTarget);
    if($('._selectTypeLengthThree li.checked').length < 3){
        fnSelectCheckedClass(target);
    } else if($('._selectTypeLengthThree li.checked').length == 3){
        target.parent().removeClass('checked')
    }
});
// 퀴즈 5개 선택
$('._selectTypeLengthFive li a').on('click', function(e){
    var target = $(e.currentTarget);
    if($('._selectTypeLengthFive li.checked').length < 5){
        fnSelectCheckedClass(target);
    } else if($('._selectTypeLengthFive li.checked').length == 5){
        target.parent().removeClass('checked')
    }
});
// 퀴즈 10개 선택
$('._selectTypeLengthTen li a').on('click', function(e){
    var target = $(e.currentTarget);
    if($('._selectTypeLengthTen li.checked').length < 10){
        fnSelectCheckedClass(target);
    } else if($('._selectTypeLengthTen li.checked').length == 10){
        target.parent().removeClass('checked')
    }
});
function fnSelectCheckedClass(target){
    if(target.parent().hasClass('checked')){
        target.parent().removeClass('checked')
    } else {
        target.parent().addClass('checked')
    }
}

// 공통 toggle active 기능
function commonToggleClassActive(target){
    target.toggleClass('active');
}
// 스크롤형 검색영역 노출 기능
function showSearchAreaScroll(){
    var nSchollHeight = $('html').scrollTop();
    var welWrapHeader = $('.wrap_header');
    var welWrapContents = $('.wrap_contents');

    if($('.detail_input_search').length > 0){
        if(nSchollHeight > 0){
            welWrapHeader.removeClass('wrap_header_border_bottom');
            welWrapContents.addClass('active_search');
        } else {
            welWrapHeader.addClass('wrap_header_border_bottom');
            welWrapContents.removeClass('active_search');
        }
    }
}
// 스크롤형 검색영역 노출 기능
function showSortingAreaScroll(){
    var nSchollHeight = $('html').scrollTop();
    var welWrapHeader = $('.wrap_header');
    var welWrapContents = $('.wrap_contents');

    if($('.area_select_menu').length > 0 && $('.area_swipe_menu').length > 0){
        if(nSchollHeight > 50){
            welWrapContents.addClass('active_sorting');
        } else {
            welWrapContents.removeClass('active_sorting');
        }
    } else if ($('.area_swipe_menu').length <= 0 && $('.area_select_menu').length > 0){
        if(nSchollHeight > 0){
            welWrapContents.addClass('active_sorting');
        } else {
            welWrapContents.removeClass('active_sorting');
        }
    }
}

// 스크롤형 검색영역 노출 기능
function showHeaderAreaScroll(){
    var nSchollHeight = $('html').scrollTop();
    var welWrapHeader = $('.wrap_header');
    var nObjectHeight = $('.scroll_show_object').height();

    if($('._fnShowHeaderScroll').length > 0){
        if(nSchollHeight > nObjectHeight){
            welWrapHeader.removeClass('bg_none');
        } else {
            welWrapHeader.addClass('bg_none');
        }
    }
}
// 버튼형 검색영역 노출 기능
function showSearchAreaBtn(){
    var welWrapHeader = $('.wrap_header');
    var welWrapContents = $('.wrap_contents');
    welWrapHeader.toggleClass('wrap_header_border_bottom');
    welWrapContents.toggleClass('active_search');
}
// 아코디언 메뉴 기능
function fnAccordionMenu(target){
    if(target.parent().hasClass('open')){
        target.parent().removeClass('open');
    } else {
        target.parent().addClass('open').siblings().removeClass('open')
    }
}

function fnChatTextAreaResize(){
    var box = document.querySelector('.box_chat_window');
    var ta = document.querySelector('.chat_window');
    setTimeout(function() {
        ta.style.cssText = 'height:0px';
        console.log( ta.scrollHeight)
        var height = Math.min(20*3, ta.scrollHeight - 1);

        box.style.cssText = 'height:' + (height + 18) +'px';
        ta.style.cssText = 'height:' + height +'px';
    },0);
}