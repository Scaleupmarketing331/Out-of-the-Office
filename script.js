/* ====================================
   SCALE UP MARKETING
   SCRIPT.JS - PART 1
==================================== */

// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

}

});

// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar Glow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.7)";

header.style.boxShadow="0 0 20px cyan";

}

else{

header.style.background="rgba(0,0,0,.3)";

header.style.boxShadow="none";

}

});

// Search

function searchWebsite(){

const input=document.getElementById("search").value.toLowerCase();

alert("Searching for: "+input);

}

// Digital Clock

function updateClock(){

const clock=document.getElementById("clock");

if(clock){

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

}

}

setInterval(updateClock,1000);
/* ====================================
   SCRIPT.JS - PART 2
   Voice + WhatsApp + Typing + Cursor
==================================== */

/* ===== Voice Command ===== */

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (SpeechRecognition) {

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = true;

function startVoice() {

recognition.start();

}

recognition.onresult = function(event){

const text =
event.results[event.results.length-1][0].transcript.toLowerCase();

if(text.includes("home")){

location.href="#";

}

if(text.includes("about")){

location.href="#about";

}

if(text.includes("services")){

location.href="#services";

}

if(text.includes("contact")){

location.href="#contact";

}

};

}

/* ===== Typing Effect ===== */

const heroTitle =
document.querySelector(".hero h2");

if(heroTitle){

const text =
heroTitle.innerText;

heroTitle.innerText="";

let i=0;

function typing(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}

/* ===== WhatsApp ===== */

function openWhatsApp(){

window.open(

"https://wa.me/923700666959",

"_blank"

);

}

/* ===== Mouse Glow ===== */

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="25px";

glow.style.height="25px";

glow.style.borderRadius="50%";

glow.style.background="cyan";

glow.style.pointerEvents="none";

glow.style.filter="blur(10px)";

glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";

glow.style.top=e.clientY-10+"px";

});
/* ====================================
   SCRIPT.JS - PART 3
   AI Assistant + Search + Theme
==================================== */

/* ===== AI Assistant ===== */

function askAI() {

let question = prompt("Ask Scale Up AI Assistant");

if (question) {

alert(
"AI Assistant:\n\nThank you for your question:\n\n" +
question +
"\n\nOur AI system will answer this feature after backend integration."
);

}

}

/* ===== Search ===== */

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

let value = this.value.toLowerCase();

document.querySelectorAll("section").forEach((section) => {

if (section.innerText.toLowerCase().includes(value)) {

section.style.display = "block";

} else {

section.style.display = "none";

}

});

});

}

/* ===== Dark / Light Mode ===== */

let dark = true;

function toggleTheme() {

if (dark) {

document.body.style.background = "#ffffff";

document.body.style.color = "#000";

dark = false;

} else {

document.body.style.background = "#020617";

document.body.style.color = "#fff";

dark = true;

}

}

/* ===== Scroll Progress ===== */

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "5px";
progress.style.background = "#00ffff";
progress.style.width = "0%";
progress.style.zIndex = "999999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

const total =
document.documentElement.scrollHeight -
window.innerHeight;

const current =
(window.pageYOffset / total) * 100;

progress.style.width = current + "%";

});

/* ===== Facebook ===== */

function openFacebook(){

window.open(
"https://www.facebook.com/share/1U4eQ1uGkE/",
"_blank"
);

}

/* ===== JazzCash ===== */

function payment(){

alert(
"JazzCash Number\n\n03154652092\n\nQR Code will be added in next update."
);

}

/* ===== Welcome ===== */

setTimeout(()=>{

console.log("Welcome to Scale Up Marketing");

},1500);