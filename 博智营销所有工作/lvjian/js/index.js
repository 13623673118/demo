$(window).on('load', function () {
    $.ajax({
        url:'http://www.bozhiyingxiao.com/lj/',
        beforeSend: function(){
            $('.loading').css({display:'block'})
        },
        complete:function(){
            $('.loading').css({display:'none'})
        }
    });

    // crumb-->click
    $('.one .open').on('click', function () {
        $('.one span').addClass('move');
    })
    $('.nav .crumb').on('click', function () {
        $('.nav').toggleClass('active');
        $('.nav-list').toggleClass('show');
        $('.nav .title').toggleClass('hidden');
        $('.section').find('*').toggleClass('hidden');
    })
    $('.nav-list li').on('click', function () {
        $('.nav').toggleClass('active');
        $('.nav-list').toggleClass('show');
        $('.section').find('*').delay(1000).toggleClass('hidden');
        $('.nav .title').toggleClass('hidden')
    })


    // 公司简介
    // var textBox = $('.three .introduce')
    // var text = $('.three .introduce p');
    // var H = text.innerHeight();
    // var h = textBox.innerHeight();
    // text.on('touchmove',function(e){
    //     console.log(e.originalEvent.changedTouches[0].clientY-e.originalEvent.path[1].clientHeight)
    //     $(this).css({marginTop:-e.originalEvent.changedTouches[0].clientY+e.originalEvent.path[1].clientHeight})
    // })
    var index=0;
    setInterval(function () {
        index--;
        if(index<-250){index=20}
        $('.three .introduce p').css({marginTop:index})
    },50)

    // 背景切换
    setInterval(function () {
        var arr2 = ['img/about-banner-6.jpg', 'img/home-bg.jpg', 'img/yindao-bj.jpg', 'img/about-banner-6.jpg', 'img/home-bg.jpg'];
        $('.three .bg').attr('src', arr2[$('.swiper-slide-active').index()])
    }, 500)


    // 二维码
    var btn = $('.six .team > img');
    var ewm=$('.six .team .ewm li');
    btn.on('click',function(){
        ewm.css({display:'none'});
        ewm.eq($(this).index()).css({display:'block'});
        return false;
    });
    $('body').on('click',function(){
        ewm.css({display:'none'})
    });
})