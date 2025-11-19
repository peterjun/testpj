const responseText = document.querySelector("#response-text");
const buttons = document.querySelectorAll(".choice");
const confettiLayer = document.querySelector(".confetti-layer");

const messages = {
  yes: [
    "Heck yes you are! Love that for you 🌈",
    "Welcome to the sparkle squad ✨",
    "Gay and thriving — iconic behavior."
  ],
  no: [
    "Totally valid. Still fabulous 👑",
    "Labels are optional, confidence is mandatory.",
    "Cool cool cool. Carry on being you."
  ]
};

const confettiPalette = ["#ff8ad4", "#ffcf7c", "#9de3ff", "#b98cff", "#7affe0"];

const rand = (min, max) => Math.random() * (max - min) + min;

function setResponse(choice) {
  const options = messages[choice];
  responseText.textContent =
    options[Math.floor(Math.random() * options.length)];
}

function createConfetti() {
  const pieces = 28;
  Array.from({ length: pieces }).forEach(() => {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${rand(-80, 80)}px`);
    piece.style.setProperty("--rotation", `${rand(-90, 90)}deg`);
    piece.style.left = `${rand(20, 80)}%`;
    piece.style.top = `${rand(0, 40)}%`;
    piece.style.background = confettiPalette[Math.floor(rand(0, confettiPalette.length))];
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 1500);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    setResponse(choice);
    if (choice === "yes") {
      createConfetti();
    }
    button.classList.add("active");
    buttons.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove("active");
      }
    });
  });
});

// Initialize the placeholder text for accessibility
responseText.textContent = "Tap a button to answer.";