'use strict';

// mouse enter/leave event
const actList = $('.all-menu');
const actTarget = $('.all-menu-list');
function mouseEvent() {
    actList.on('mouseenter', function () {
        actTarget.addClass('on');
    });
    actList.on('mouseleave', function () {
        actTarget.removeClass('on');
    })
}
mouseEvent();


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

               