$(function(){
	var index=0;
	var next=0;
	var flag=true;
	var box=$('.list .sub-banner');
	var imgs=box.find('li');
	var w=box.innerWidth();
	imgs.eq(0).css('left','0');
	function move(){
			next++;	
			if(next==imgs.length){next=0}
			imgs.eq(next).css({left:w});
			imgs.eq(index).animate({left:-w},1000)
			imgs.eq(next).animate({left:0},1000);
			index=next;
	}
	// var t=setInterval(move,2000)
	// box.hover(function(){
	// 	clearInterval(t)
	// },function(){
	// 	t=setInterval(move,2000)
	// })




	var btns=$('.nav-box .navs li');
	var lists=$('.list .news-box .news');
	btns.on('click',function(){
		btns.find('img').css({opacity:0})
		$(this).find('img').animate({opacity:1})

		lists.css({display:'none'})
		lists.eq($(this).index()).css({display:'block'});

		lists.removeClass('this')
		lists.eq($(this).index()).addClass('this')

		// var now=$('.list .news-box .news.this')
		// var p=now.find('p');
		// p.eq(0).addClass('active')
		// var n=0;
		// function addClassName(){
		// 	n++;
		// 	if(n>p.length-1){n=0}
		// 	p.removeClass('active');
		// 	p.eq(n).addClass('active');
		// }
		// setInterval(addClassName,500);
	})

	$('.refresh').on('click',function(){
		$(this).queue(function(){
			$('.refresh').addClass('active');
			$(this).dequeue();
		}).delay(1000).queue(function(){
			$('.refresh').removeClass('active');
			$(this).dequeue();
		})
	})

})