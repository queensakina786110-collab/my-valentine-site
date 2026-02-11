// PASSWORD & ATTEMPTS
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const finalText = document.getElementById('finalText');
const oopsMsg = document.getElementById('oops');

const correctPassword = "10august2024";
let attempts = 0;
const maxAttempts = 3;

// Show attempts counter below password box
const attemptsMsg = document.createElement("p");
attemptsMsg.style.color = "#7a1c3a";
attemptsMsg.style.fontWeight = "bold";
attemptsMsg.style.marginTop = "5px";
document.querySelector("#slide1 .card").appendChild(attemptsMsg);

// HEART RAIN
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (10 + Math.random() * 8) + "s";
  heart.style.setProperty("--x", (Math.random() * 120 - 60) + "px");
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 18000);
}, 1200);

// SLIDE CONTROL
function goToSlide(n) {
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById("slide" + n).classList.add("active");

  if (n === 3) startTypingFinal();
}

// PASSWORD CHECK WITH ATTEMPTS
function checkPassword() {
  attempts++;
  if (passwordInput.value.trim() === correctPassword) {
    errorMsg.innerText = "";
    attemptsMsg.innerText = "Attempts used: " + attempts + " / " + maxAttempts;
    goToSlide(2);
  } else {
    if (attempts < maxAttempts) {
      errorMsg.innerText = "Oops… wrong password 😉 Try again!";
      attemptsMsg.innerText = "Attempts used: " + attempts + " / " + maxAttempts;
    } else {
      errorMsg.innerText = "Oops… you’ve used all your 3 attempts 😘";
      attemptsMsg.innerText = "";
      passwordInput.disabled = true;
    }
  }
}

// YES / NO BUTTONS
function yes() {
  oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
  goToSlide(3);
}

function no() {
  oopsMsg.innerText = "Come on now… it’s me 😘 I know you’re teasing❤️!";
}

// LIVE TYPING FINAL TEXT
const finalMessage = [
  "Thank you for choosing me as your Valentine 🙈❤️",
  "I feel so lucky to be yours 😘❤️",
  "I am forever grateful for you ☺️💖",
  "I love you endlessly 😘💕"
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
