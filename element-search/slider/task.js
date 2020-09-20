let goLeft = document.querySelector(".slider__arrows").children[0]

let goRight = document.querySelector(".slider__arrows").children[1]

let item = document.querySelector(".slider__item_active");

let dot = document.getElementsByClassName("slider__dot");

goRight.onclick = () => {
    if (item.nextElementSibling !== null) {
        item.className = "slider__item";
        item.nextElementSibling.className = "slider__item slider__item_active"
    } else {
        document.querySelector(".slider__dots").firstElementChild.className = "slider__dot slider__dot_active";
        document.querySelector(".slider__dots").lastElementChild.className = "slider__dot";
        document.querySelector(".slider__items").firstElementChild.className = "slider__item slider__item_active";
        document.querySelector(".slider__items").lastElementChild.className = "slider__item";
        }
    item = document.querySelector(".slider__item_active");

    for (let i = 0; i < dot.length; i++) {
        if (document.querySelector(".slider__items").children[i].className == "slider__item slider__item_active") {
            dot[i].className = "slider__dot slider__dot_active";
            dot[i].previousElementSibling.className = "slider__dot";
        }
    }
}

goLeft.onclick = () => {
    if (item.previousElementSibling !== null) {
        item.className = "slider__item";
        item.previousElementSibling.className = "slider__item slider__item_active";
    } else {
        document.querySelector(".slider__dots").lastElementChild.className = "slider__dot slider__dot_active";
        document.querySelector(".slider__dots").firstElementChild.className = "slider__dot";
        item.className = "slider__item";
        document.querySelector(".slider__items").lastElementChild.className = "slider__item slider__item_active";
    }
    item = document.querySelector(".slider__item_active");

    for (let i = 0; i < dot.length; i++) {
        if (document.querySelector(".slider__items").children[i].className == "slider__item slider__item_active") {
            dot[i].className = "slider__dot slider__dot_active";
            dot[i].nextElementSibling.className = "slider__dot";
        }
    }
}

for (let i = 0; i < dot.length; i++) {
    dot[i].onclick = () => {
        if (document.querySelector(".slider__dot_active") !== null) {
            document.querySelector(".slider__dot_active").className = "slider__dot";
        }

        if (dot[i].className == "slider__dot") {
            document.querySelector(".slider__item_active").className = "slider__item";
            dot[i].className = "slider__dot slider__dot_active";
            document.getElementsByClassName("slider__item")[i].className = "slider__item slider__item_active";
        }
    }
}