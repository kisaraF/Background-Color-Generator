//Getting Elements
let body= document.querySelector('body');
let display = document.querySelector('.displayHere');
let random = document.getElementById('genBtn');
let auto = document.getElementById('autoBtn');
let stop= document.getElementById('stop');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

random.addEventListener('click' , doThis);
auto.addEventListener('click', doThat);

function doThis(){
   //alert('Works bitch');

   let codes= [];

   for (let i = 0; i < 6; i++) {
      let num= Math.floor(Math.random()*256);
      codes.push(num);
      
   }
   console.log(codes);

   body.style.background = `linear-gradient(to left, RGB(${codes[0]} , ${codes[1]}, ${codes[2]}) , RGB(${codes[3]} , ${codes[4]}, ${codes[5]}))`
   display.innerText = `linear-gradient(to left, RGB(${codes[0]} , ${codes[1]}, ${codes[2]}) , RGB(${codes[3]} , ${codes[4]}, ${codes[5]}))`
}

function doThat(){
   setInterval(doThis, 300);
}

stop.addEventListener('click' , stopIt);

function stopIt() {
   location.reload();
}

color1.addEventListener("input", setGradient);
color2.addEventListener('input', setGradient);

function setGradient() {
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
   css.textContent = body.style.background + ";";
}