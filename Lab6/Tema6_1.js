window.onload=function()
{
	var p1 = document.getElementById('p1');
	var p2 = document.getElementById('p2');
	p1.onmouseover = function(){p2.style.color="red";}
	p2.onmouseover = function(){p1.style.color="blue";}
	p1.onmouseout = function(){p2.style.color = "black";}
	p2.onmouseout = function(){p1.style.color = "black";}
}