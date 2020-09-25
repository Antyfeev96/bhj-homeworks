let menuMain = document.getElementsByClassName("menu_main")

let menuLink = document.getElementsByClassName("menu__link")

for (let i = 0, k = 0; i < menuLink.length, k < menuMain.length; i++) {

    menuMain[k].getElementsByClassName("menu__link")[i].onclick = function() {
    
    if (this.nextElementSibling.classList.contains("menu_active")) {
        this.nextElementSibling.classList.toggle("menu_active")
    } else if (document.querySelector(".menu_active") != null) {
        document.querySelector(".menu_active").classList.remove("menu_active");
        this.nextElementSibling.classList.add("menu_active");
    } else {
        this.nextElementSibling.classList.toggle("menu_active")
    }

    if (i == menuLink.length - 1) {
        k += 1
    }

    return false
}
}
