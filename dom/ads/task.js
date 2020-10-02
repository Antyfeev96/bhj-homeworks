let rotators = document.querySelectorAll(".rotator__case")

let rotator = document.querySelector(".rotator__case_active")

let attribute = rotator.getAttribute("data-color")

rotator.style.color = attribute;

setInterval(() => {

    rotator.classList.toggle("rotator__case_active")
    if (rotator.nextElementSibling !== null) {
        rotator.nextElementSibling.classList.toggle("rotator__case_active")
        rotator.nextElementSibling.style.color = attribute;

    } else {
        Array.from(rotators)[0].classList.add("rotator__case_active")
    }
    rotator = document.querySelector(".rotator__case_active");
    attribute = rotator.getAttribute("data-color")
    rotator.style.color = attribute;
    interval = +rotator.getAttribute("data-speed")

}, 1000)


