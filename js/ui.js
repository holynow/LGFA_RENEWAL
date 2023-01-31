'use strict';

// mouse enter/leave event
const actList = $('.cate-link-box .item');
const actTarget = $('.cate-sub-list');
actTarget.hide();
function mouseEvent() {
    actList.on('mouseenter', function () {
        $(this).find('.cate-sub-list').show();
    });
    actList.on('mouseleave', function () {
        $(this).find('.cate-sub-list').hide();
    });
   
}
mouseEvent();

if ($('.accord-wrap').length > 0) {
    const accordBtn = $('.item button');
    const reply = $('.item .reply');
    reply.hide();
    accordBtn.on('click', function () {
        $(this).siblings('.reply').stop().slideToggle();
        $(this).parent().siblings().find('.reply').slideUp();
    })
}

if ($('.layer-pop').length > 0) {
    $('button, a').on('click', function () {
        const targetId = $('.layer-pop').attr('id');
        const popClose = $(this).data('close');
        const popOpen = $(this).data('open');
        const $dim = "<div class='dim'></div>";
        // popup open
        if (popOpen === targetId) {
            $('body').prepend($dim);
            $('#' + targetId).show();

        };
        // popup close
        if (popClose === targetId) {
            $('#' + targetId).hide();
            $('.dim').remove();
        };
    })
}
const swiper = new Swiper('.swiper', {
    // If we need pagination
    autoHeight : true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// tab control
if ($('.tab-wrap').length > 0) {
    const tabBtn = $('.tab-btn button');
    const tabItem = $('.tab-item');
    tabBtn.on('click', function () {
        let inx = $(this).index();
        tabBtn.eq(inx).siblings().removeClass('active');
        tabItem.eq(inx).siblings().removeClass('active');
        tabBtn.eq(inx).addClass('active');
        tabItem.eq(inx).addClass('active');
    })
}

$(window).scroll(function () {
    let scrollY = $(this).scrollTop();
    if (scrollY >= 80) {
        
    }
})