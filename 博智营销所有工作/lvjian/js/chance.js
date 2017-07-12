$(function(){
    var dot=$('.navs div');
    var navs=$('.navs li');
    // var arr=['.44rem','1.78rem','3.15rem','4.48rem'];
    var arr=['.525rem','1.875rem','3.225rem','4.575rem'];
    var arr1=['0','-3.5rem','-7rem','-10.5rem'];
    navs.on('click',function(){
    	dot.animate({left:arr[$(this).index()-1]},500);
    	$('.text-box .text').animate({marginTop:arr1[$(this).index()-1]},500)
    })
})