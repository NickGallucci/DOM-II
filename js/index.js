//1
let btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
  alert('MALICIOUS LINK! GO BACK!')
})

//2
let coolp = document.getElementById("coolp");
coolp.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "purple";
  setTimeout(function() {
    event.target.style.color = "red";
  }, 500);
}, true);

//3
let coolp2 = document.getElementById("coolp2");
coolp2.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "yellow";
  }, 500);
}, false);

//4
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});

//5

const lol = document.querySelectorAll('nav a');
const home = lol[0];
const aboutUs = lol[1];
const blog = lol[2];
const contact = lol[3];


aboutUs.addEventListener('focus', e => e.target.style.backgroundColor = 'red');

//6
home.addEventListener('blur', e => {
   e.target.style.backgroundColor = 'yellow';
   e.stopPropagation();
});

//7
aboutUs.addEventListener('pointerover', ()=> console.log("MALICIOUS LINK!!!"));

//8
window.addEventListener('load', ()=> console.log("Look behind you!"))

//9
const imgContentImg = document.querySelector('.img-content img');
imgContentImg.addEventListener('wheel', zoom);
let scale = 1;

function zoom(e){
	event.preventDefault();
	scale += event.deltaY * -0.91; 
	scale = Math.min(Math.max(1, scale), 4); 
    imgContentImg.style.transform = `scale(${scale})`; 
    
};

//10
function logKey(e){
	console.log(e.code);
}
document.addEventListener('keydown', logKey);
