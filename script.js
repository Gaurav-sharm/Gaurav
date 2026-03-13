const text = [
  "Computer Science Student",
  "Aspiring Full Stack Developer",
  "Learning Java & Web Development",
];

let index = 0;
let char = 0;

function type() {
  document.getElementById("typing").textContent = text[index].substring(
    0,
    char,
  );

  char++;

  if (char > text[index].length) {
    index++;
    char = 0;

    if (index >= text.length) {
      index = 0;
    }
  }

  setTimeout(type, 100);
}

type();

/* MOBILE MENU */

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.onclick = () =>{
nav.classList.toggle("active");
};

/* SCROLL ANIMATION */

ScrollReveal().reveal(".hero", { delay: 200 });
ScrollReveal().reveal(".projects", { delay: 300 });
ScrollReveal().reveal(".skills", { delay: 400 });
ScrollReveal().reveal(".contact", { delay: 500 });

/* PARTICLES BACKGROUND */

tsParticles.load("particles", {
  particles: {
    number: { value: 60 },

    color: { value: "#4ad1ff" },

    links: {
      enable: true,
      color: "#4ad1ff",
      distance: 150,
    },

    move: {
      enable: true,
      speed: 1,
    },
  },
});
/* 3D CARD TILT */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
/* SKILL BAR ANIMATION */

const bars = document.querySelectorAll(".fill");

function animateSkills() {
  bars.forEach((bar) => {
    const width = bar.dataset.width;

    bar.style.width = width;
  });
}

window.addEventListener("scroll", animateSkills);
/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
