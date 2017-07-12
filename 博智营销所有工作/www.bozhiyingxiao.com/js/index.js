$(function () {
//页面控制
    var btn = $('.head-box .nav li')
    var floor = $(".floor");
    var arr = [];
    floor.each(function (i, v) {
        arr.push(v.offsetTop)
    })
    btn.on('click', function () {
        $('body').animate({scrollTop: -80 + arr[$(this).index()]}, 500);
        btn.removeClass('active');
        $(this).addClass('active');
    })
//返回顶部
    var toTop = $('.company-box .side .back');
    toTop.on('click', function () {
        $('body').animate({scrollTop: 0}, 500)
    })
//二维码
    var ewmLogo=$('.footer .btm>div');
    ewmLogo.hover(
        function(){
           $(this).find('p').css({
            opacity:1,
            top:'-550%'
        })
        },function(){
           $(this).find('p').css({
            opacity:0,
            top:'-500%'
        })
        }
    )

    // 导航栏缩进
    $(window).on('scroll',function(){
        if(this.scrollY>400){
            $('.head-box').css({
                background: '#2c3038',
                height:'60px'
            })
        }else if(this.scrollY<=400){
            $('.head-box').css({
                background:'transparent',
                height:'90px'
            })
        }
    })
})