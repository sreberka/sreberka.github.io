$(document).ready(function () {
    $('#hamburger').click(function () {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open-menu');
        $('html').toggleClass('fixed-body');
    });

    $('.dropdown-custom-toggle').click(function () {
        $(this).toggleClass('open-dropdown');
    });
});
