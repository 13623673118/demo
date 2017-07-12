$(function(){
	var btn=$('.type div');
	var formBox=$('.input-box form');
	var submit=$('.submit-box form')
	btn.on('click',function(){
		formBox.css({display:'none'})
		formBox.eq($(this).index()).css({display:'block'})
		submit.css({display:'none'})
		submit.eq($(this).index()).css({display:'block'})

		btn.removeClass('active');
		$(this).addClass('active');
	})
})