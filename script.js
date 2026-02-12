const reveals = document.querySelectorAll(".card, .section-title, .green-section");

window.addEventListener("scroll", () => {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("reveal", "active");
        }
    });
});
