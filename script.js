const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const attemptsMsg = document.getElementById('attempts');
const oopsMsg = document.getElementById('oops');
const finalText = document.getElementById('finalText');
const finalText4 = document.getElementById('finalText4');

const correctPassword = "10august2024";
let attempts = 0;
const maxAttempts = 3;

/* ❤️ HEART RAIN (SLOW & FEW) */
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

/* SLIDE CONTROL */
function goToSlide(n) {
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById("slide" + n).classList.add("active");

  if(n === 3) startTypingSlide3();
  if(n === 4) startTypingSlide4();
}

/* PASSWORD CHECK WITH 3 ATTEMPTS */
function checkPassword() {
  attempts++;
  if(passwordInput.value.trim() === correctPassword){
    errorMsg.innerText = "";
    attemptsMsg.innerText = "";
    attempts = 0;
    goToSlide(2);
  } else {
    errorMsg.innerText = "Oops… wrong password 😉 Try again!";
    attemptsMsg.innerText = `Attempts: ${attempts}/${maxAttempts}`;
    if(attempts >= maxAttempts){
      errorMsg.innerText = "Oops… maximum attempts reached 😔";
      passwordInput.disabled = true;
    }
  }
}

/* YES / NO */
function yes(){
  oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
  goToSlide(3);
}

function no(){
  oopsMsg.innerText ="Come on now… it’s me 😘";
}

/* SLIDE 3 TYPING MESSAGES */
const finalMessageSlide3 = [
  "You make my days brighter ☀️",
  "Being with you is the best adventure 😘",
  "Every moment feels magical ✨",
  "You are my favorite person to laugh with 😄",
  "I can’t wait for all our memories together 🌸",
  "(Tap the photo for the next little magic 💖)"
];

let line3 = 0, charIndex3 = 0;

function startTypingSlide3(){
  finalText.innerHTML = "";
  line3 = 0; charIndex3 = 0;
  typeLine3();
}

function typeLine3(){
  if(line3 < finalMessageSlide3.length){
    const currentLine = finalMessageSlide3[line3];
    if(charIndex3 < currentLine.length){
      finalText.innerHTML += currentLine.charAt(charIndex3);
      charIndex3++;
      setTimeout(typeLine3, 60);
    } else {
      finalText.innerHTML += "<br><br>";
      charIndex3 = 0;
      line3++;
      setTimeout(typeLine3, 500);
    }
  }
}

/* CLICK PHOTO TO GO TO SLIDE 4 */
document.querySelector("#slide3 .clickable").addEventListener("click", () => {
  goToSlide(4);
});

/* SLIDE 4 TYPING */
const finalMessageSlide4 = [
  "I am forever grateful for Allah for you ☺️💖",
  "I love you endlessly 😘💕"
];

let line4 = 0, charIndex4 = 0;

function startTypingSlide4(){
  finalText4.innerHTML = "";
  line4 = 0; charIndex4 = 0;
  typeLine4();
}

function typeLine4(){
  if(line4 < finalMessageSlide4.length){
    const currentLine = finalMessageSlide4[line4];
    if(charIndex4 < currentLine.length){
      finalText4.innerHTML += currentLine.charAt(charIndex4);
      charIndex4++;
      setTimeout(typeLine4, 60);
    } else {
      finalText4.innerHTML += "<br><br>";
      charIndex4 = 0;
      line4++;
      setTimeout(typeLine4, 500);
    }
  }
}
