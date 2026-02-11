const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const attemptsMsg = document.getElementById('attempts');
const oopsMsg = document.getElementById('oops');
const finalText = document.getElementById('finalText');

const correctPassword = "10-august-2024";
let attempts = 3;

/* ❤️ HEART RAIN (SLOW & LESS DISTURBING) */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (10 + Math.random() * 8) + "s"; // slower
  heart.style.setProperty("--x", (Math.random() * 120 - 60) + "px");
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 18000);
}, 1200);

/* SLIDE CONTROL */
function goToSlide(n) {
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById("slide" + n).classList.add("active");

  if (n === 3) startTypingFinal();
}

/* PASSWORD CHECK WITH ATTEMPTS */
function checkPassword() {
  attempts++;
  if (passwordInput.value.trim() === correctPassword) {
    errorMsg.innerText = "";
    attemptsMsg.innerText = "Attempts: " + attempts;
    goToSlide(2);
  } else {
    errorMsg.innerText = "Oops… wrong password 😉 Try again!";
    attemptsMsg.innerText = "Attempts: " + attempts;
  }
}

/* YES / NO BUTTONS */
function yes() {
  oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
  goToSlide(3);
}

function no() {
  oopsMsg.innerText ="Come on now… it’s me 😘 I know you’re teasing❤️!";
}

/* FINAL MESSAGE */
const finalMessage = [
  "Thank you for choosing me as your Valentine ❤️",
  "I feel so lucky to be yours 😘",
  "I am forever grateful to Allah for you 💖",
  "I love you endlessly 💕"
];

let line = 0;
let charIndex = 0;

function startTypingFinal() {
  finalText.innerHTML = "";
  line = 0;
  charIndex = 0;
  typeLine();
}

function typeLine() {
  if (line < finalMessage.length) {
    const currentLine = finalMessage[line];
    if (charIndex < currentLine.length) {
      finalText.innerHTML += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 60);
    } else {
      finalText.innerHTML += "<br><br>";
      charIndex = 0;
      line++;
      setTimeout(typeLine, 500);
    }
  }
}
