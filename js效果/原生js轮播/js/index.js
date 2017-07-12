	window.onload=function(){
	var box=document.getElementsByClassName('banner')[0];
	var imgbox=document.getElementsByClassName('bannerimg')[0];
	var imgs=imgbox.getElementsByTagName('li');
	imgs[0].style.left=0;
	var w=parseInt(getComputedStyle(imgs[0],null)['width'])
	var index=0;
	var next=0;
	var btnbox=document.getElementsByClassName('bannerbtn')[0];
	var btns=btnbox.getElementsByTagName('li');
	btns[0].style.background="#fff";
	var left=document.getElementsByClassName('left')[0];
	var right=document.getElementsByClassName('right')[0];

	function move(){
		next++;
		if(next==imgs.length){next=0}
		imgs[next].style.left=w+"px";
		animate(imgs[index],{left:-w},1000)
		animate(imgs[next],{left:0},1000)
		for (var i = 0; i < imgs.length; i++) {
			btns[i].style.background="#333"
		};
		btns[next].style.background="#fff"
		index=next;
	}
	var t=setInterval(move,2000)

	box.onmouseover=function(){
		clearInterval(t)
		animate(left,{opacity:1})
		animate(right,{opacity:1})
	}
	box.onmouseout=function(){
		t=setInterval(move,2000)
		animate(left,{opacity:0})
		animate(right,{opacity:0})
	}

	right.onclick=function(){
		move()
	}
	left.onclick=function(){
		next--;
		if(next==-1){next=imgs.length-1};
		imgs[next].style.left=-w+"px";
		for (var i = 0; i < btns.length; i++) {
			btns[i].style.background="#333"
		};
		btns[next].style.background="#fff";
		animate(imgs[index],{left:w},500)
		animate(imgs[next],{left:0},500)
		index=next;
	}

	for (var i = 0; i < btns.length; i++) {
            // 关键是这里  保存下标
		btns[i].index=i;
		btns[i].onclick=function(){
			if(index==this.index){
				return
			}
			imgs[this.index].style.left=w+"px";
			for (var i = 0; i < btns.length; i++) {
				btns[i].style.background="#333"
			};
			btns[this.index].style.background="#fff"
			animate(imgs[index],{left:-w},500)
			animate(imgs[this.index],{left:0},500)
			index=this.index;
		}
	};
}
