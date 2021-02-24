if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"V|",
					"V a|",
					"V a l|",
					"V a l e",
					"V a l e r|",
					"V a l e r i|",
					"V a l e r i a|",
					"V a l e r i a _ n|",
					"V a l e r i a _ n a|",
					"V a l e r i a _ n a i|",	
					"V a l e r i a _ n a i l|",	
					"V a l e r i a _ n a i l",	];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}