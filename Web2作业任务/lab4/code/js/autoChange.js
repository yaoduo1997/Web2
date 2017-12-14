var Scroll1 = document.getElementById("picScroll1");
var Scroll2 = document.getElementById("picScroll2");
var Scroll = document.getElementById("picScroll");
var up1 = document.getElementById("up1");
var up2 = document.getElementById("up2");
var up = document.getElementById("up");
function ToLeft(){
	Scroll1.style.marginLeft = parseInt(Scroll1.style.marginLeft) - 1 + 'px';
	Scroll2.style.marginLeft = parseInt(Scroll2.style.marginLeft) - 1 + 'px';
}
function changeToLeft(){
	if(parseInt(Scroll1.style.marginLeft)==-4570){
		Scroll1.style.marginLeft = 4560 + "px";
		ToLeft();
	}else if(parseInt(Scroll2.style.marginLeft)==-4560){
		Scroll2.style.marginLeft = 4560 + "px";
		ToLeft();
	}else{
		ToLeft();
	}
}
var change = setInterval(changeToLeft,10);
Scroll.onmouseover = function(){
	clearInterval(change);
}
Scroll.onmouseout = function(){
	change = setInterval(changeToLeft,10);
}

//向上滚动
function ToTop(){
	up1.style.marginTop = parseInt(up1.style.marginTop) - 1 + 'px';
	up2.style.marginTop = parseInt(up2.style.marginTop) - 1 + 'px';
}
function changeToTop(){
	if(parseInt(up1.style.marginTop)==-3010){
		up1.style.marginTop = 3000 + "px";
		ToTop();
	}else if(parseInt(Scroll2.style.marginTop)==-3000){
		up2.style.marginTop = 3000 + "px";
		ToTop();
	}else{
		ToTop();
	}
}
var changeup = setInterval(changeToTop,10);
up.onmouseover = function(){
	clearInterval(changeup);
}
up.onmouseout = function(){
	changeup = setInterval(changeToTop,10);
}

