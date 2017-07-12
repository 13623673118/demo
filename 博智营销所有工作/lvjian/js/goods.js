$(function(){
	function addClassName () {
		$('.nav').toggleClass('rotate');
		$('.inner').toggleClass('active')
		$('.section').toggleClass('active')

	}
	$('.nav .title').on('click',addClassName)
	$('.nav .list li').on('click',addClassName)




	$('.section .mask').on('click',function(){
		$('.nav').toggleClass('rotate');
		$('.section').toggleClass('active');
		$('this').css({display:'none'})
	})

	$('.inner .mask').on('click',function(){
		$('.nav').toggleClass('rotate');
		$('.inner').toggleClass('active');
		$('this').css({display:'none'})

	})


	setInterval(function () {
		var arr = ['直吹式','壁挂式','直吹式'];
		var arr2 = ['移动式商用空气净化机','落地式','移动式商用空气净化机'];
		$('#firsttitle').text(arr[$('#host-banner-2 .swiper-slide-active').index()-1]);
		$('#lasttitle').text(arr2[$('#host-banner-3 .swiper-slide-active').index()-1]);
	}, 200)

	$('.guide').on('touchend',function(){
		$('.video-bg').css({
			display:'block',
			zIndex:9999
		});
		$('<video autoplay="autoplay" controls="controls"><source src="media/one.mp4"/>您的浏览器不支持播放此视频 </video>').css({
			width:'100%',
			position:'absolute',
			left:0,
			right:0,
			top:0,
			bottom:0,
			margin:'auto',
			zIndex:9999,
		}).appendTo('.video-bg');
		$('<p>').css({
			width:'1rem',
			height:'1rem',
			position:'absolute',
			right:0,
			top:0,
			background:'red',
			display:'none'
		}).appendTo('.video-bg');
		var index=0;
		$('.video-bg').on('touchend',function(){
			index++;
			if(index%2!=0){
				$('.video-bg p').css({display:'block'});
			}else{
				$('.video-bg p').css({display:'none'});
			}
		})
		$('.video-bg p').on('touchend',function () {
			$('.video-bg').css({
				display:'none',
				zIndex:-1
			});
			$('.video-bg').empty();
			return false;
		})
	})


})