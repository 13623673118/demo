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



	var W = $(window).outerWidth(true)
	var H = $(window).outerHeight(true)
	var floor=$(".floor");
	var floor2=$(".floor2");
	var arr=[];
	var arr2=[];
	floor.each(function(i,v){
		arr.push(v.offsetTop)
	})
	floor2.each(function(i,v){
		arr2.push(v.offsetTop)
	})
	console.log(arr2)
	$(window).on('scroll', function () {
		floor.each(function(i,v){
			if($('body').scrollTop()>arr[i]-500){
				$('.floor').eq(i).addClass('active')
			}else if($('body').scrollTop()<arr[i]-500){
				$('.floor').eq(i).removeClass('active')
			}
		})
		floor2.each(function(i,v){
			if($('body').scrollTop()>arr2[i]+1000){
				$('.floor2').eq(i).addClass('active')
			}else if($('body').scrollTop()<arr2[i]+1000){
				$('.floor2').eq(i).removeClass('active')
			}
		})
		//导航栏背景颜色
		if ($('body').scrollTop() > H - 300) {
			$('.head-box').addClass('hide')
		} else {
			$('.head-box').removeClass('hide')
		}
	})
})