const text=[
"Computer Science Student",
"Aspiring Full Stack Developer",
"Learning Java & Web Development"
];

let index=0;
let char=0;

function type(){

document.getElementById("typing").textContent=
text[index].substring(0,char);

char++;

if(char>text[index].length){

index++;
char=0;

if(index>=text.length){
index=0;
}

}

setTimeout(type,100);

}

type();

/* mobile menu */

const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-links");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});

/* particles */

tsParticles.load("particles",{

particles:{
number:{value:60},
color:{value:"#4ad1ff"},
links:{enable:true,color:"#4ad1ff",distance:150},
move:{enable:true,speed:1}
}

});

/* glow */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

/* skill animation */

const bars=document.querySelectorAll(".fill");

function animateSkills(){
bars.forEach(bar=>{
bar.style.width=bar.dataset.width;
});
}

window.addEventListener("scroll",animateSkills);
