let goLeft = document.querySelector(".slider__arrows").children[0]

let goRight = document.querySelector(".slider__arrows").children[1]

let dot = document.querySelectorAll(".slider__dot");

let startNumber = 0;

document.getElementsByClassName("slider__dot")[startNumber].classList.add("slider__dot_active")

// Объявление функций

const givePicRight = function(number) {
    number = Array.from(document.querySelectorAll(".slider__item")).findIndex(a => a.classList.contains("slider__item_active"))
    document.querySelector(".slider__item_active").classList.remove("slider__item_active")
    document.querySelector(".slider__dot_active").classList.remove("slider__dot_active")
    document.querySelectorAll(".slider__item")[number + 1].classList.add("slider__item_active")
    document.querySelectorAll(".slider__dot")[number + 1].classList.add("slider__dot_active")
}

const givePicLeft = function(number) {
    number = Array.from(document.querySelectorAll(".slider__item")).findIndex(a => a.classList.contains("slider__item_active"))
    document.querySelector(".slider__item_active").classList.remove("slider__item_active")
    document.querySelector(".slider__dot_active").classList.remove("slider__dot_active")
    document.querySelectorAll(".slider__item")[number - 1].classList.add("slider__item_active")
    document.querySelectorAll(".slider__dot")[number - 1].classList.add("slider__dot_active")
}

// const givePicDot = function(number) {
//     number = Array.from(document.querySelectorAll(".slider__dot")).findIndex(a => a.classList.contains("slider__dot_active"))
//     document.getElementsByClassName("slider__dot")[number].classList.add("slider__dot_active")
//     dot = document.querySelectorAll(".slider__dot")
// }







// Вызов функций

goRight.onclick = function() {
    if (document.querySelector(".slider__item_active").nextElementSibling !== null) {
    givePicRight()
    } else {
        document.querySelector(".slider__item_active").classList.remove("slider__item_active")
        document.querySelectorAll(".slider__item")[0].classList.add("slider__item_active")
    }
}

goLeft.onclick = function() {
    if (document.querySelector(".slider__item_active").previousElementSibling !== null) {
    givePicLeft();
    } else {
        document.querySelector(".slider__item_active").classList.remove("slider__item_active")
        document.querySelectorAll(".slider__item")[document.querySelectorAll(".slider__item").length - 1].classList.add("slider__item_active")
    }
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