let goLeft = document.querySelector(".slider__arrows").children[0]

let goRight = document.querySelector(".slider__arrows").children[1]

const slides =  Array.from(document.querySelectorAll(".slider__item"));

let dot = document.querySelectorAll(".slider__dot");

let startNumber = 0;

document.getElementsByClassName("slider__dot")[startNumber].classList.add("slider__dot_active")

// const givePicDot = function(number) {
//     number = Array.from(document.querySelectorAll(".slider__dot")).findIndex(a => a.classList.contains("slider__dot_active"))
//     document.getElementsByClassName("slider__dot")[number].classList.add("slider__dot_active")
//     dot = document.querySelectorAll(".slider__dot")
// }







// Вызов функций

goRight.onclick = function() {
    number = slides.findIndex(a => a.classList.contains("slider__item_active"));
    slides[number].classList.remove("slider__item_active");
    number = number === slides.length - 1 ? 0 : number + 1;
    slides[number].classList.add("slider__item_active");
}

goLeft.onclick = function() {
    number = slides.findIndex(a => a.classList.contains("slider__item_active"));
    slides[number].classList.remove("slider__item_active");
    number = number === 0 ? slides.length - 1 : number - 1;
    slides[number].classList.add("slider__item_active");
}

for (let i = 0; i < dot.length; i++) {
    dot[i].onclick = function(number) {
        number = Array.from(document.querySelectorAll(".slider__dot")).findIndex(a => a.classList.contains("slider__dot_active"))
        document.querySelector(".slider__dot_active").classList.remove("slider__dot_active")
        document.querySelector(".slider__item_active").classList.remove("slider__item_active")
        this.classList.add("slider__dot_active")
        document.querySelectorAll(".slider__item")[number].classList.add("slider__item_active")
    }
}
