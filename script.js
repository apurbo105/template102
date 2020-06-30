var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("grad");
function addAction(){
	body.style.background = "linear-gradient(90deg, "+ color1.value + ","+ color2.value + ")";
}

color1.addEventListener("input" , addAction);
color2.addEventListener("input" , addAction);

