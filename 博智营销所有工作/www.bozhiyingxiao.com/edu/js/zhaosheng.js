$(function(){
	// 轮播部分
	var index=0;
	var next=0;
	var flag=true;
	var box=$('.news .carousel');
	var imgs=box.find('a');
	var dots=$('.news .carousel .dot li')
	var w=box.innerWidth();
	imgs.eq(0).css('left','0');
	dots.eq(0).css({background:'#ff751c'})
	function move(){
			next++;	
			if(next==imgs.length){next=0}
			imgs.eq(next).css({left:w});
			imgs.eq(index).animate({left:-w},1000)
			imgs.eq(next).animate({left:0},1000);
			dots.css({background:'#fff'});
			dots.eq(next).css({background:'#ff751c'})
			index=next;
	}
	var t=setInterval(move,2000)
	box.hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,2000)
	})
	// dots.on('click',function(){
		
	// })
})