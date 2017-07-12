$(function(){
	var btnBox=$('.type')
	var btn=$('.type li');
	var floor=$(".show>ul");
	var arr=[];
	floor.each(function(i,v){
		arr.push(v.offsetTop)
	})
	btn.on('click',function(){
		$('body').animate({scrollTop:arr[$(this).index()]},500)
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
})