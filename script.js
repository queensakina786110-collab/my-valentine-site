function goToSlide(slideNumber) {
    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });

    document.getElementById("slide" + slideNumber)
        .classList.add("active");
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
