// smooth scroll
function scrollToSec(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// alert
function showAlert(){
  alert("Welcome jani 🔥 Website fully interactive hai!");
}

// typing effect
let text = "Build Modern Websites with JavaScript";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
type();

// counter animation
function counter(id, end){
  let el = document.getElementById(id);
  let count = 0;

  let interval = setInterval(()=>{
    count++;
    el.innerText = count;

    if(count == end){
      clearInterval(interval);
    }
  }, 20);
}

// trigger counters after load
window.onload = () => {
  counter("clients", 120);
  counter("projects", 75);
  counter("awards", 15);
};