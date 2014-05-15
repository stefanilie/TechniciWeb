

function myMain() {
 document.getElementById('buton').onmouseover = schimbaStil; // fara paranteze
 document.getElementById('buton').onclick = schimbaStil2;
}



function schimbaStil() {
 //document.getElementById('schimb').style.color = "blue"; 
 //document.getElementById('schimb').style.backgroundColor = "yellow"; 
document.getElementById('schimb').className = "stilnou"; //preferat
}

function schimbaStil2() {
 //document.getElementById('schimb').style.color = "blue"; 
 //document.getElementById('schimb').style.backgroundColor = "yellow"; 
document.getElementById('schimb').className = "stilnou2"; //preferat
}

