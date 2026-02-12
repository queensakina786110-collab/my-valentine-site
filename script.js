const correctPassword = "10-08-2024";

function goToSlide(num) {
    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });

    document.getElementById("slide" + num)
        .classList.add("active");
}

function checkPassword() {
    const input = document.getElementById("passwordInput").value;

    if (input === correctPassword) {
        goToSlide(2);
    } else {
        document.getElementById("errorMsg").innerText =
            "Wrong date 😜 Try again!";
    }
}

function teaseNo() {
    document.getElementById("teaseText").innerText =
        "Oh really? I know you're just teasing 😘 Try again!";
}

const slide3Pic = document.getElementById("slide3Pic");

slide3Pic.addEventListener("click", () => {
    goToSlide(4);
    startPetals();
});

function startPetals() {

    const interval = setInterval(() => {

        const petal = document.createElement("div");
        petal.className = "petal";
        petal.innerText = "🌹";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (4 + Math.random() * 3) + "s";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 7000);

    }, 300);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}
