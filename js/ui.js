'use strict';

// popup
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

               