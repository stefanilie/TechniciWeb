window.onload = myMain;

function myMain(){
	//document.getElementById('submitButton').onclick = faCeva;
	document.getElementById('submitButton').onclick = verif;

}

function faCeva(){
	alert("merge!");
}



function verif(){
	var text = document.getElementById('inputText').value;

	if(text == "schimba"){
		interschimba();
	}
	else{
		newText(text);
	}
}

function interschimba(){
	var text1 = document.getElementById('schimb1').innerHTML;
	var text2 = document.getElementById('schimb2').innerHTML;

	document.getElementById('schimb1').innerHTML = text2;
	document.getElementById('schimb2').innerHTML = text1;
}

function newText(text){
    var newP = document.createElement("p");
	var toAdd = document.createTextNode(text);
	newP.appendChild(toAdd);
	document.getElementById("paragrafe").appendChild(newP);

}