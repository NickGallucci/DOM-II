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

//6

//7

//8

//9

//10

