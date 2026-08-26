/* ==========================================
      PORTFOLIO JAVASCRIPT
========================================== */

// Smooth Scroll for Navigation

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({

            behavior:'smooth'

        });

    });

});



/* ==========================================
       ACTIVE NAVBAR LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ==========================================
        SCROLL REVEAL ANIMATION
========================================== */

const revealElements=document.querySelectorAll(
".card,.project-card,.about-container,.contact-box"
);

function reveal(){

revealElements.forEach(item=>{

const windowHeight=window.innerHeight;

const top=item.getBoundingClientRect().top;

if(top<windowHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


/* ==========================================
      HERO IMAGE PARALLAX
========================================== */

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/45;

let y=(window.innerHeight/2-e.pageY)/45;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});


/* ==========================================
      BACK TO TOP BUTTON
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ==========================================
      CURSOR GLOW EFFECT
========================================== */

const glow=document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* ==========================================
      TYPEWRITER EFFECT
========================================== */

const roles=[
"Frontend Developer",
"MCA Student",
"Java Developer",
"Web Designer"
];

let roleIndex=0;
let charIndex=0;

const roleHeading=document.querySelector(".hero-content h2");

function typeEffect(){

if(charIndex<roles[roleIndex].length){

roleHeading.textContent+=roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex>0){

roleHeading.textContent=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,60);

}else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeEffect,300);

}

}

roleHeading.textContent="";

typeEffect();


/* ==========================================
      LOADER
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log("Premium Portfolio Loaded Successfully 🚀");