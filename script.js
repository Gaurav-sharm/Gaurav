/* typing animation */

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

/* skill animation */

const fills = document.querySelectorAll(".fill");

function animateSkills() {
  fills.forEach((bar) => {
    const width = bar.dataset.width;

    bar.style.width = width;
  });
}

window.addEventListener("scroll", animateSkills);

/* particle background */

tsParticles.load("particles", {
  particles: {
    number: { value: 70 },

    color: { value: "#4ad1ff" },

    links: {
      enable: true,
      distance: 150,
      color: "#4ad1ff",
      opacity: 0.4,
    },

    move: {
      enable: true,
      speed: 1.2,
    },

    size: { value: 3 },

    opacity: { value: 0.6 },
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },

    modes: {
      grab: {
        distance: 200,
      },
    },
  },
});
