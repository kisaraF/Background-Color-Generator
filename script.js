var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

window.onload = function(){
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input" , setGradient);
color2.addEventListener('input' , setGradient);

random.addEventListener('click' , addColors);

var red = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
var blue = Math.floor(Math.random()*256);

var red2 = Math.floor(Math.random()*256);
var green2 = Math.floor(Math.random()*256);
var blue2 = Math.floor(Math.random()*256);


var colorCon1 = "rgb(" + red + "," + green + "," + blue + ")";
var colorCon2 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")";

function addColors(){
	body.style.background = "linear-gradient(to right, " + colorCon1 + ", " + colorCon2 + ")";
	css.textContent = "linear-gradient(to right, " + colorCon1.value + ", " + colorCon2.value + ")"
}

