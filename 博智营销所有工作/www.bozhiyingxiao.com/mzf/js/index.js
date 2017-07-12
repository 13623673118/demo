$(function () {
    // 轮播部分
    var W = $(window).outerWidth(true)
    var H = $(window).outerHeight(true)
    var index = 0;
    var next = 0;
    var flag = true;
    var box = $('.banner');
    var imgs = box.find('li');
    var w = box.innerWidth();
    imgs.eq(0).css('left', '0');
    function move() {
        next++;
        if (next == imgs.length) {
            next = 0
        }
        imgs.eq(next).css({left: w});
        imgs.eq(index).animate({left: -w}, 1000)
        imgs.eq(next).animate({left: 0}, 1000);
        // dots.css('background','');
        dots.eq(next).css('background', '#80cbff');
        index = next;
    }
    // var t=setInterval(move,2000)
    // box.hover(function(){
    // 	clearInterval(t)
    // },function(){
    // 	t=setInterval(move,2000)
    // })
    // box.on('click',function(e){
    // 	if(e.pageX>W/2){
    // 		move()
    // 	}else if(e.pageX<W/2){
    // 		next--;
    // 		if(next<0){next=imgs.length-1};
    // 		imgs.eq(next).css({left:-w});
    // 		imgs.eq(index).animate({left:w},1000)
    // 		imgs.eq(next).animate({left:0},1000);
    // 		dots.css('background','');
    // 		dots.eq(next).css('background','#80cbff');
    // 		index=next;
    // 	}
    // })
    // // 阻止a链接冒泡
    // box.find('a').on('click',function(e){
    // 	  e.stopPropagation();
    // })

    var logo = $('.footer .logo li');
    var ewmBox = $('.footer .fade');
    var ewm = $('.footer .fade li');
    logo.on('mouseenter', function () {
        ewmBox.css({display: 'block'})
        ewm.css({zIndex: 1});
        ewm.eq($(this).index()).css({zIndex: 2})
    })
    logo.on('mouseleave', function () {
        ewmBox.css({display: 'none'})
    })

    $('.show .left li').on('click', function () {
        var index = $(this).index()
        // 插入遮罩层
        $('<div>').addClass('mask').appendTo($('body')).css({
            width: '100%',height: '100%',position: 'fixed',top: 0,left: 0,zIndex: 9999,background: 'rgba(0,0,0,0.6)'
        })
        // 插入照片
        $('<img>').appendTo('.mask').css({
            width: '480px',height: '375px',position: 'absolute',top: 0,right: 0,left: 0,bottom: 0,margin: 'auto'
        }).attr('src', $(this).find('.img').attr('src'))
        //点击照片左侧-->上一张  右侧-->下一张
        $('.mask img').on('click', function (e) {
            e.stopPropagation();
            if (e.pageX < W / 2) {
                index--;
                if (index < 0) {index = $('.show .left li').length - 1}
                $('.mask img').attr('src', $('.show .left li').eq(index).find('.img').attr('src'))
            } else if (e.pageX > W / 2) {
                index++;
                if (index > $('.show .left li').length - 1) {index = 0}
                $('.mask img').attr('src', $('.show .left li').eq(index).find('.img').attr('src'))
            }
        })
        //点击遮罩消失
        $('.mask').on('click', function () {
            $(this).css({
                display: 'none'
            })
        })
    })
    //楼层滑动
    var floor=$(".floor");
    var arr=[];
    floor.each(function(i,v){
        arr.push(v.offsetTop)
    })
    $(window).on('scroll', function () {
        floor.each(function(i,v){
            if($('body').scrollTop()>arr[i]-500){
                $('.floor').eq(i).addClass('active')
            }else if($('body').scrollTop()<arr[i]-500){
                $('.floor').eq(i).removeClass('active')
            }
        })
        //导航栏背景颜色
        if ($('body').scrollTop() > H - 100) {
            $('.header-box').addClass('hide')
        } else {
            $('.header-box').removeClass('hide')
        }
    })
})