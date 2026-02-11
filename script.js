// PASSWORD & ATTEMPTS
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const attemptsMsg = document.getElementById('attempts');
const oopsMsg = document.getElementById('oops');
const finalText = document.getElementById('finalText');

const correctPassword = "10august2024";
let attemptsLeft = 3;

// HEART RAIN (slower & fewer)
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

// PASSWORD CHECK
function checkPassword() {
  if (passwordInput.value.trim() === correctPassword) {
    errorMsg.innerText = "";
    attemptsMsg.innerText = "";
    goToSlide(2);
  } else {
    attemptsLeft--;
    if(attemptsLeft > 0){
      errorMsg.innerText = `Oops… wrong password 😉 Try again!`;
      attemptsMsg.innerText = `Attempts left: ${attemptsLeft}`;
    } else {
      errorMsg.innerText = "No attempts left 😔";
      attemptsMsg.innerText = "";
      passwordInput.disabled = true;
    }
  }
}

// YES / NO
function yes() {
  oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
  goToSlide(3);
}

function no() {
  oopsMsg.innerText = "Come on now… it’s me 😘 I know you’re teasing ❤️!";
}

// FINAL MESSAGES (Slide 3)
const finalMessage = [
  "You make my days brighter ☀️",
  "Being with you is the best adventure 😘",
  "Every moment feels magical ✨",
  "You are my favorite person to laugh with 😄",
  "I can’t wait for all our memories together 🌸"
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
