let revealItem = document.querySelectorAll(".reveal");

let windowHeigth = window.innerHeight;

for (let i = 0; i < revealItem.length; i++) {
window.addEventListener("scroll", function() {
    console.log(windowHeigth)
    console.log(revealItem[i].getBoundingClientRect().top)
    if (windowHeigth > revealItem[i].getBoundingClientRect().top) {
        revealItem[i].classList.toggle("reveal_active")
    }
})
}
