$(document).ready(function () {
    $('#hamburger').click(function () {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-body');
    });
});
