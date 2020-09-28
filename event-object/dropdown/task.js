let dropValue = document.querySelector(".dropdown__value")

let item = Array.from(document.querySelectorAll(".dropdown__item"))

dropValue.addEventListener("click", () => {
    document.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
})

for (let i = 0; i < item.length; i++) {
    item[i].onclick = function() {
        console.log(this);
        dropValue.textContent = this.textContent;
        document.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
        return false;
    }
}


// Спросить про возможность сделать такую тему без цикла, чтобы можно было использовать addEventListener