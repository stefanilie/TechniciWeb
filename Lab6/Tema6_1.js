window.onload=function()
{
	var p1 = document.getElementById('p1');
	var p2 = document.getElementById('p2');
	p1.onclick = schimba(p2, 'blue');
	p2.onclick = schimba(p1, 'red');
}

function schimba(p, s)
{
	p.style.color = s;
}