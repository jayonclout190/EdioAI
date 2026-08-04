const bubble = document.querySelector(".bubble");
const card = document.querySelector(".customer-card");
const notification = document.querySelector(".notification");

function playAnimation(){

bubble.style.opacity = 0;
card.style.opacity = 0;
notification.style.opacity = 0;

bubble.style.transform = "translateY(25px)";
card.style.transform = "translateY(25px)";
notification.style.transform = "translateY(25px)";

setTimeout(()=>{

bubble.style.opacity = 1;
bubble.style.transform = "translateY(0px)";

},400);

setTimeout(()=>{

card.style.opacity = 1;
card.style.transform = "translateY(0px)";

},1500);

setTimeout(()=>{

notification.style.opacity = 1;
notification.style.transform = "translateY(0px)";

},2600);

}

playAnimation();

setInterval(playAnimation,7000);