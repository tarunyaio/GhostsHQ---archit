document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".fade-slider .slide");
    var index = 0;

    setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        slides[index].classList.add("active");

        index = index + 1;

        if (index === slides.length) {
            index = 0;
        }

    }, 3000);
});