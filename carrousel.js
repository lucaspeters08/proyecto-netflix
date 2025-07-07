document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".tendencias");
    const peliculas = document.querySelectorAll(".tendencia");
    const btnIzq = document.querySelector(".left");
    const btnDer = document.querySelector(".right");

    let slidesToShow = getSlidesToShow();
    let currentSlide = 0;

    function getSlidesToShow() {
        if (window.innerWidth < 425) {
            return 1;
        } 
        else {
            return 4;
        }
    }

    function updateSlideWidth() {
        slidesToShow = getSlidesToShow();
        const slideWidth = 100 / slidesToShow;

        peliculas.forEach((pelicula) => {
            pelicula.style.flex = `0 0 ${slideWidth}%`;
        });

        updateCarrousel();
    }

    function updateCarrousel() {
        const slideWidth = carrousel.offsetWidth / slidesToShow;
        carrousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function siguiente() {
        const maxSlide = peliculas.length - slidesToShow;
        if (currentSlide < maxSlide) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateCarrousel();
    }

    function anterior() {
        const maxSlide = peliculas.length - slidesToShow;
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = maxSlide;
        }
        updateCarrousel();
    }

    btnIzq.addEventListener("click", anterior);
    btnDer.addEventListener("click", siguiente);

    window.addEventListener("resize", () => {
        updateSlideWidth();
    });

    updateSlideWidth();
});
