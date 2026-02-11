const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const oopsMsg = document.getElementById('oops');
const finalText = document.getElementById('finalText');
const finalText4 = document.getElementById('finalText4');
const tapPhoto = document.getElementById('tapPhoto');

const correctPassword = "10august2024";
let attempts = 0;
const maxAttempts = 3;

// HEART RAIN
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (10 + Math.random()*8) + "s";
  heart.style.setProperty("--x", (Math.random()*120 - 60) + "px");
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),18000);
}, 1200);

// SLIDE CONTROL
function goToSlide(n){
  document.querySelectorAll(".slide").forEach(s=>s.classList.remove("active"));
  document.getElementById("slide"+n).classList.add("active");

  if(n===3) startTypingFinal();
  if(n===4) startTypingFinal4();
}

// PASSWORD CHECK
function checkPassword(){
  attempts++;
  if(passwordInput.value.trim() === correctPassword){
    errorMsg.innerText = "";
    goToSlide(2);
  } else {
    if(attempts >= maxAttempts){
      errorMsg.innerText = `Oops! No attempts left 😢`;
      passwordInput.disabled = true;
    } else {
      errorMsg.innerText = `Wrong password! Attempts left: ${maxAttempts - attempts}`;
    }
  }
}

// YES / NO
function yes(){
  oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
  goToSlide(3);
}
function no(){
  oopsMsg.innerText ="Come on now… it’s me 😘 I know you’re teasing❤️!";
}

// SLIDE 3 MESSAGES
const finalMessageSlide3 = [
  "You make my days brighter ☀️",
  "Being with you is the best adventure 😘",
  "Every moment feels magical ✨",
  "You are my favorite person to laugh with 😄",
  "I can’t wait for all our memories together 🌸",
  "<span style='display:block; margin-top:20px; font-weight:bold; color:#e75480;'>Tap the photo for a little surprise 💖</span>"
];

let line=0, charIndex=0;

function startTypingFinal(){
  finalText.innerHTML="";
  line=0; charIndex=0;
  typeLineFinal();
}

function typeLineFinal(){
  if(line<finalMessageSlide3.length){
    const currentLine = finalMessageSlide3[line];
    if(charIndex<currentLine.length){
      finalText.innerHTML += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeLineFinal,50);
    } else {
      finalText.innerHTML += "<br><br>";
      charIndex=0;
      line++;
      setTimeout(typeLineFinal,400);
    }
  }
}

// TAP PHOTO TO GO TO SLIDE 4
tapPhoto.addEventListener('click',()=>goToSlide(4));

// SLIDE 4 MESSAGES
const finalMessageSlide4 = [
  "I am forever grateful for Allah for you ☺️💖",
  "I love you endlessly 😘💕"
];

let line4=0, charIndex4=0;
function startTypingFinal4(){
  finalText4.innerHTML="";
  line4=0; charIndex4=0;
  typeLineFinal4();
}
function typeLineFinal4(){
  if(line4<finalMessageSlide4.length){
    const currentLine = finalMessageSlide4[line4];
    if(charIndex4<currentLine.length){
      finalText4.innerHTML += currentLine.charAt(charIndex4);
      charIndex4++;
      setTimeout(typeLineFinal4,60);
    } else {
      finalText4.innerHTML += "<br><br>";
      charIndex4=0;
      line4++;
      setTimeout(typeLineFinal4,400);
    }
  }
}
