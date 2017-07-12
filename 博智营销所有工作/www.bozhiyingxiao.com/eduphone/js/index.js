$(function(){
	var H=$('#banner').outerHeight(true);
	var h=$('.title').outerHeight(true);
	$(window).on('scroll',function(){
		if($('body').scrollTop()>=H-h) {
			$('#nav').css({
				position: 'fixed',
				top: '1rem',
				left: 0,
				zIndex: 99
			})
		}else if($('body').scrollTop()<H-h){
			$('#nav').css({
				position:'relative',
				top:'',
				left:'',
				zIndex:''
			})
		}
	});
	$('.title .return').on('click',function(e){
		e.stopPropagation()
		$('.body').addClass('move');
		$('.list').addClass('show')
		$('<div>').addClass('mask').css({
			background:'rgba(0,0,0,0.5)',
			position:'fixed',
			zIndex:99999,
			height:'100%',
			width:'100%',
			left:0,
			top:0
		}).appendTo($('.body'))
	})
	$('.body').on('click',function(){
		$('.body').removeClass('move');
		$('.list').removeClass('show');
		$('.body .mask').remove()
	})
	$('.nav li').on('click',function(){
		$("#inner .swiper-slide").removeClass('swiper-slide-active');
		$('#inner .swiper-slide').eq($(this).index()).addClass('swiper-slide-active')
	})
})