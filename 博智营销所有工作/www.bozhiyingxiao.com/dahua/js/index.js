$(function () {
    $('#index').find('img').eq(1).on('click', function (e) {
        e.stopPropagation();
            $('<div class="mask">').css({
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.4)'
            }).appendTo($('#index'));
        $('#index >img').css({opacity: 0});
        $('#nav-bar .line').addClass('run');
        $('#nav-bar').css({display: 'block'}).addClass('bounceIn');
    });
    $('#index').find('img').eq(1).delay(300).queue(function(){
        $(this).trigger('click')
    })
    $('#nav-bar li').on('click',function(e){
        e.stopPropagation();
    })
    $('#nav-bar .close').on('click', function (e) {
        e.stopPropagation();
        $('#nav-bar').removeClass('bounceIn');
        $('#index >img').css({opacity: 1});
        $('#nav-bar .line').removeClass('run');
        $('.mask').remove()
    });

    $('#peitao .pro img').each(function (i, v) {
        $(v).click(function () {
            $(this).next('p').toggleClass('show')

        })
    });
    $('#survey .pro img').each(function (i, v) {
        $(v).click(function () {
            $(this).next('p').toggleClass('show')
        })
    })


    $('.header a').each(function (i, v) {
        $(v).click(function () {
            window.location.href = "http://www.bozhiyingxiao.com/dahua";
        })
        $('#index').find('img').eq(1).trigger('click')
    });
})