document.addEventListener('DOMContentLoaded', init);
var myInterval = setInterval(changeSlide, 2000);

function init() {
    
    const back_btn = document.querySelector(".back-btn");
    const next_btn = document.querySelector(".next-btn");
    const frame = document.querySelector(".frame");
    const slides = document.querySelector(".slides");

    slides.forEach((slide) => {
        slide.classList.add("hide");
    });

    slides[0].classList.remove("hide");

    next_btn.addEventListener("click", changeSlide);
    back_btn.addEventListener("click", changeSlide);
}

function changeSlide(e) {

    if(e) {
        e.preventDefault();
        clearInterval(myInterval);
    }

    const frame = document.querySelector(".frame");
    const slides = document.querySelectorAll("img");
    let showing = document.querySelector(".current");
    let nextUp = "";

    if(!e || e.target.className == 'next-btn') {
        nextUp = showing.nextElementSibling;
    } else {
        nextUp = showing.previousElementSibling;
    }

    showing.classList.add("hide");
    showing.classList.remove("current");

    if (!nextUp) {
        nextup = slides[slides.length - 1];
    }

    if (nextUp.nodeName !== "IMG") {
        nextUp = slides[0];
    }

    nextUp.classList.remove("hide");

    nextUp.classList.add("current");
}