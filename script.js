// PASSWORD
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const oopsMsg = document.getElementById('oops');
const finalText = document.getElementById('finalText');

const correctPassword = "10august2024";

// HEART RAIN
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";
  heart.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}, 400);

// SLIDE CONTROL
function goToSlide(n){
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById("slide" + n).classList.add("active");

  if(n===3) startTypingFinal();
}

// PASSWORD CHECK
function checkPassword(){
  if(passwordInput.value.trim() === correctPassword){
    errorMsg.innerText = "";
    goToSlide(2);
  } else {
    errorMsg.innerText = "Oops… wrong password 😉 Try again!";
  }
}

// YES / NO BUTTONS
function yes(){
  oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
  goToSlide(3);
}

function no(){
  oopsMsg.innerText = "Aww… don’t be shy 😅❤️ Try again!";
}

// LIVE TYPING FINAL TEXT (fits inside card with spacing)
const finalMessage = [
  "Thank you for choosing me as your Valentine ❤️",
  "I feel so lucky to be yours 😘",
  "I am forever grateful for you 💖",
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
  if(line < finalMessage.length){
    const currentLine = finalMessage[line];
    if(charIndex < currentLine.length){
      finalText.innerHTML += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 60);
    } else {
      finalText.innerHTML += "<br><br>"; // line break between sentences
      charIndex = 0;
      line++;
      setTimeout(typeLine, 400);
    }
  }
}