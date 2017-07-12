$(function(){
	var menu=$('.header-box .menu');
	menu.on('click',function(){
		$(this).toggleClass('touch');
	})
		var logoBox=$('.footer .logo')
		var logo=$('.footer .logo li');
		var ewmBox=$('.footer .fade');
		var ewm=$('.footer .fade li');
		logo.on('click',function(){
			ewmBox.css({display:'block'})
			ewm.css({zIndex:1});
			ewm.eq($(this).index()).css({zIndex:2})
		})
		logoBox.on('click',function(){
			return false
		})
		menu.on('click',function(){
			return false
		})
		$('body').on('click',function () {
			ewmBox.css({display:'none'})
			menu.removeClass('touch')
		})

	
})