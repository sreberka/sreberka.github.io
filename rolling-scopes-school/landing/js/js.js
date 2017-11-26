$(document).ready(function() {
    $("nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 107}, 1000);
        return false;
    });

    $('#hamburger').click(function () {
        $(this).toggleClass('open');
        $('nav').slideToggle('slow')
    });
});