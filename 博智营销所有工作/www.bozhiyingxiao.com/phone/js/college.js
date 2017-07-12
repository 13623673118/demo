$(function(){
	var btnBox=$('.list-box')
	var btn=$('.list-box li');
	var floor=$(".introduce>ul");
	var returnTop=$('.to-top');
	var arr=[];
	floor.each(function(i,v){
		arr.push(v.offsetTop)
	})
	btn.on('click',function(){
		$('body').animate({scrollTop:arr[$(this).index()]},500)
	})
	returnTop.on('click',function(){
		$('body').animate({scrollTop:0})
		// $('body').animate({scrollTop:btn.offset().top})

	})


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