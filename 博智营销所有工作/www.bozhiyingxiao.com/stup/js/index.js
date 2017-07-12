$(function () {
    $('.body .head li').eq(1).on('click', function () {
        $('.slide-bar').toggleClass('move');
        $('.body').toggleClass('move');
    })
})