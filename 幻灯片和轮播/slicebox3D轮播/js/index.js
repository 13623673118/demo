$(function(){

    var navArrows = $('.nav-arrows'),
        navOptions = $('.nav-options'),
        navDots = $('.nav-dots span'),
        slicebox = $('.sb-slider').slicebox({
            onReady: function() {
                console.log("页面准备完成时触发的函数")
            },
            onBeforeChange: function(beforeIndex) {
                console.log(beforeIndex)
            },
            onAfterChange: function(afterIndex) {
                navDots.eq(afterIndex).addClass('nav-dot-current').siblings().removeClass('nav-dot-current');
            },
            // 幻灯片切换的方向 h:水平;v:垂直;r:随机.
            orientation: 'r',
            // 幻灯片切片的数量
            cuboidsCount: 10,
            // 是否开启随机幻灯片切片的数量
            cuboidsRandom: true,
            // 开启随机幻灯片切片数量时,允许出现的最大数量
            maxCuboidsCount: 5,
            //切片动画时每个切片之间的间隔距离
            disperseFactor: 30,
            // 每个切片依次运动的时间差
            sequentialFactor: 100,
            // 每个切片运动的时长
            spped: 600,
            // 切片运动的动画
            easing: 'ease',
            // 每隔多长时间进行轮播
            interval: 2000,
            // 隐藏的幻灯片的颜色
            colorHiddenSides: '#222',
            fallbackFadeSpeed: 300,
            // 是否开启动画
            autoplay: false
        }),
        init = function() {
            initEvents();
            // init others...
        };

    function initEvents() {
        // click prev||next
        navArrows.children(':first').on('click', function() {
            slicebox.previous();
            return false;
        });
        navArrows.children(':last').on('click', function() {
            slicebox.next();
            return false;
        });
        // click to play or pause
        navOptions.on('click', function() {
            $(this).toggleClass('run');
            if ($(this).hasClass('run')) {
                slicebox.play();
                $(this).css({
                    backgroundPosition: 'top left'
                })
                return false;
            } else {
                slicebox.pause();
                $(this).css({
                    backgroundPosition: ''
                })
                return false;
            }
        });
        // click navigation bar to control the carousel
        navDots.on('click', function() {
            if (!slicebox.isActive()) {
                $(this).addClass('nav-dot-current').siblings().removeClass('nav-dot-current');
            }
            slicebox.jump($(this).index() + 1);
            slicebox.play();
            return false;
        })
    };
    init();
})
