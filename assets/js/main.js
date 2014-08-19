(function($) {
    "use strict";

    // Default tooltip
    $('[data-toogle="tooltip"]').tooltip();

    // Magnific Popup
    $('a').filter(function() {
        if (typeof $(this).attr('href') === 'undefined') return false;
        return $(this).attr('href').match(/\.(jpg|jpeg|png|gif)/i);
    }).magnificPopup({type: 'image', closeOnContentClick: true });

    // Smooth Hash Link Scroll
    $('.smooth-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    $('#contactform').submit(function() {

        var contactform = $(this);

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            dataType: 'xml',
            data: $(this).serialize(),
        })
        .always(function() {
            contactform.find('.results').hide().slideDown('slow');
            contactform.find('.form-control').val('');
        });

        return false;
    });

    $(".owl-carousel-team").owlCarousel({
        dots: false,
        items: 3,
        margin: 15
    });

    $(".owl-carousel-banners").owlCarousel({
        dots: false,
        items: 6
    });

})(jQuery);
