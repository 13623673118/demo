$(function(){
	var bannerBox=$('.banner-box');
	var imgs=bannerBox.find('li');
	var w=bannerBox.outerWidth();//1280
	imgs.width(w/4);
	var n=imgs.length;//轮播个数
	$('.banner').width(w/4*n)//ul总长度
	var left=$('.left');
	var right=$('.right');
	var flag=true;

	var num=0;
	var move=function(){
		if (!flag) {return} 
		flag=false;
		num++;
		if(num>2){num=2}
			$('.banner').animate({marginLeft:-w/4*num},1000,function(){
				flag=true
			})
	}
	var t=setInterval(move,3000)

	bannerBox.on('mouseenter',function(){
		clearInterval(t)
	});
	bannerBox.on('mouseleave',function(){
		t=setInterval(move,3000)
	});
	right.on('click',function(){
		move()
	})
	left.on('click',function(){
		if (!flag) {return} 
		flag=false;
		num--;
		if(num<0){num=0}
		$('.banner').animate({marginLeft:-w/4*num},1000,function () {
			flag=true;
		})
	})
	imgs.hover(function(){
		$(this).find('.mask').css({display:"none"})
	},function(){
		$(this).find('.mask').css({display:"block"})
	})
	imgs.on('click',function(){
		$.ajax({
			
		})
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