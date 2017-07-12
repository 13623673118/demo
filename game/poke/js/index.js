$(function(){
	var color=['c','h','d','s'];
	var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'T',11:'J',12:'Q',13:'K'};
	function start(){
		function makePoker(){
			var poker=[];
			var biao={};
			while (poker.length!=52) {		
				var	c=color[Math.floor(Math.random()*4)];
				var n=Math.ceil(Math.random()*13);
				var item={color:c,number:n};
				if (!biao[c+n]) {
					poker.push(item);
					biao[c+n]=true;
				};
			};
			return poker;
		}	
		function getPoker(){
			var poker=makePoker();
			var index=0;
			for (var i = 0; i < 7; i++) {
				for (var j = 0; j <i+1 ; j++) {	
					$('<div>')
				    .addClass('pai shang')
				    .delay(index*50)
				    .css({backgroundImage:'url(img/'+dict[poker[index].number]+poker[index].color+'.png)'})
				    .attr('id',i+'-'+j)
				    .data('number',poker[index].number)
				    .animate({
				    	top:40*i,
				    	left:(6-i)*70+j*140,
				    	opacity:1
			    	})
			    	.appendTo('.desk')
			    	index+=1;
				};	
			};
			for (; index < poker.length; index++) {
				$('<div>')
			    .addClass('pai zuo')
			    .data('number',poker[index].number)
			    .delay(index*50)
			    .css({backgroundImage:'url(img/'+dict[poker[index].number]+poker[index].color+'.png)'})
			    .animate({
			    	top:430,
			    	left:140,
			    	opacity:1
			    })
			    .appendTo('.desk')
			};
		}
		getPoker(makePoker())	
		//动画
		var meiyoubeiyazhu=function(e){
	    	var x=Number($(e).attr('id').split('-')[0]);
	    	var y=Number($(e).attr('id').split('-')[1]);
	  		return $('#'+(x+1)+'-'+y).length||$('#'+(x+1)+'-'+(y+1)).length;
		}

		var shangyizhang=null;
		$('.desk .pai').on('click',function(){
			if($(this).hasClass('shang')&&meiyoubeiyazhu(this)){
				return;
			}
			if($(this).data('number')===13){
				$(this).animate({top:0,left:800,opacity:0}).queue(function(){
					$(this).remove();
				})
				return;
			}
			$(this).toggleClass('chulie');
			if($(this).hasClass('chulie')){
				$(this).animate({top:'-=30'})
			}else{
				$(this).animate({top:'+=30'})
			}
			//第一次点击
			if(!shangyizhang){
				shangyizhang=$(this);
			}else {
				//第二次点击
				if(shangyizhang.data('number')+$(this).data('number')===13){
					$('.desk .chulie').delay(400).animate({
						top:0,
						left:600,
						opacity:0,
					}).queue(function(){
						$(this).remove();
					})
				}else{
					$('.desk .chulie').removeClass('chulie').animate({top:'+=30'})
				}
				shangyizhang=null;
			}
		})
	   	var zIndex=1;
	   	$('.desk .right').on('click',function(){
	       	zIndex+=1;
	       	if($('.desk .pai.zuo').eq(-1).hasClass("chulie")){
	       		$('.desk .pai.zuo').eq(-1).removeClass("chulie");
	       		shangyizhang=null;
	        }
	      	$('.desk .pai.zuo').eq(-1).removeClass("zuo").addClass('you').animate({left:730}).css({zIndex:zIndex}) 
	   	})
		var cishu=0;
	 	$('.desk .left').on('click',function(){
	 		cishu+=1
	 		if($('.desk .zuo').length){
	 			return;
	 		}
	 		if(cishu>3){
	 			return;
	 		}
	   		$('.desk .you').each(function(i,el){
	  			$(this).delay(i*30).animate({left:140}).css({zIndex:0}).removeClass('you').addClass('zuo')
	   		})
	 	})
	}
	$('.start').on('click',function(){
		start()
	})
	$('.reset').on('click',function(){
		start()
	})
})	
