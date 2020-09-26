let menuMain = document.getElementsByClassName("menu_main")

let menuLink = document.getElementsByClassName("menu__link")

for (let k = 0; k < menuMain.length; k++) {
for (let i = 0; i < menuLink.length / menuMain.length; i++) {

    menuMain[k].getElementsByClassName("menu__link")[i].onclick = function() {
    
    if (this.nextElementSibling.classList.contains("menu_active")) {
        this.nextElementSibling.classList.toggle("menu_active")
    } else if (document.querySelector(".menu_active") != null) {
        document.querySelector(".menu_active").classList.remove("menu_active");
        this.nextElementSibling.classList.add("menu_active");
    } else {
        this.nextElementSibling.classList.toggle("menu_active")
    }

    return false

}
}
}
