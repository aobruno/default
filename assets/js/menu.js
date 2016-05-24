$(document).on('click', '.main-menu', function() {
    if ($(this).find('.sub-menu').is(":hidden")) {
        $('.sub-menu').slideUp();
        $('.go-right').removeClass('fa-minus');
        $('.go-right').addClass('fa-plus');
        $(this).find('.go-right').addClass('fa-minus');
        $(this).find('.sub-menu').slideToggle();
    } else {
        $(this).find('.go-right').removeClass('fa-minus');
        $(this).find('.go-right').addClass('fa-plus');
        $(this).find('.sub-menu').slideUp();
    }
});