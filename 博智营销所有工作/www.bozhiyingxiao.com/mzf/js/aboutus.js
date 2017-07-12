$(function(){
	var mask=$('.us li span');
	mask.hover(function(){
		$(this).animate({opacity:0},300)
	},function(){
		$(this).animate({opacity:1},300)
	})

	var logo=$('.footer .logo li');
	var ewmBox=$('.footer .fade');
	var ewm=$('.footer .fade li');
	logo.on('mouseenter',function(){
		ewmBox.css({display:'block'})
		ewm.css({zIndex:1});
		ewm.eq($(this).index()).css({zIndex:2})
	})
	logo.on('mouseleave',function(){
		ewmBox.css({display:'none'})
	})

	var W = $(window).outerWidth(true)
	var H = $(window).outerHeight(true)
	$(window).on('scroll', function () {
		if ($('body').scrollTop() > H - 300) {
			$('.head-box').addClass('hide')
		} else {
			$('.head-box').removeClass('hide')
		}
	})
})