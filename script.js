// Elements
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');
const oopsMsg = document.getElementById('oops');
const finalText = document.getElementById('finalText');
const slide3Pic = document.getElementById('slide3Pic');

// Password
const correctPassword = "10august2024";
let attempts = 0;
const maxAttempts = 3;

// Heart rain
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

// Slide control
function goToSlide(n){
    document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
    document.getElementById("slide" + n).classList.add("active");
    if(n===3) startTypingFinal();
}

// Password check
function checkPassword(){
    attempts++;
    if(passwordInput.value.trim() === correctPassword){
        errorMsg.innerText = "";
        goToSlide(2);
    } else {
        if(attempts >= maxAttempts){
            errorMsg.innerText = "Oops! No attempts left 😢";
            passwordInput.disabled = true;
        } else {
            errorMsg.innerText = `Wrong password! Attempts left: ${maxAttempts - attempts}`;
        }
    }
}

// Yes/No buttons
function yes(){
    oopsMsg.innerText = "Yay! You said YES 💕 I’m so happy 😘";
    goToSlide(3);
}

function no(){
    oopsMsg.innerText = "Come on now… it’s me 😘 I know you’re teasing❤️!";
}

// Slide 3 messages
const messages = [
    "You make my days brighter ☀️",
    "Being with you is the best adventure 😘",
    "Every moment feels magical ✨",
    "You are my favorite person to laugh with 😄",
    "I can’t wait for all our memories together 🌸",
    "Thank you for choosing me as your Valentine 🙈❤️",
    "I feel so lucky to be yours 😘❤️"
];

let line = 0;
let charIndex = 0;

function startTypingFinal(){
    finalText.innerHTML = "";
    line = 0;
    charIndex = 0;
    typeLine();
}

function typeLine(){
    if(line < messages.length){
        const currentLine = messages[line];
        if(charIndex < currentLine.length){
            finalText.innerHTML += currentLine.charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 60);
        } else {
            finalText.innerHTML += "<br><br>";
            charIndex = 0;
            line++;
            setTimeout(typeLine, 400);
        }
    }
}

// Tap photo to go to slide 4
slide3Pic.addEventListener("click", () => {
    goToSlide(4);
});
