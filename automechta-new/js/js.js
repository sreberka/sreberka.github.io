$(document).ready(function () {
    $('#hamburger').click(function () {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open-menu');
        $('html').toggleClass('fixed-body');
    });

    $('.dropdown-custom-toggle').click(function () {
        $(this).toggleClass('open-dropdown');
    });

    $('#open-filter').click(function () {
        $('#filter').addClass('open-filter');
        $('html, body').css('overflow', 'hidden');
    });

    $('#close-filter').click(function () {
        $('#filter').removeClass('open-filter');
        $('html, body').css('overflow', 'auto');
    });

    $('#call-to-client').click(function () {
        $('.modal-overlay').addClass('open-modal');
        $('html, body').css('overflow', 'hidden');
    });
    $('#close').click(function () {
        $('.modal-overlay').removeClass('open-modal');
        $('html, body').css('overflow', 'auto');
    });
    $('#complay').click(function () {
        $('.complay-form').slideToggle();
    });
    $('#complay-mob').click(function () {
        $('.complay-form-mobile').slideToggle();
    });
});
