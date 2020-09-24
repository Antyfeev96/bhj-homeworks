let menuLink = document.getElementsByClassName("menu__link");

let menuSub = document.querySelectorAll(".menu_sub");

for (let i = 0; i < menuLink.length; i ++) {
    menuLink[i].onclick = function() {

    // if (this.nextElementSibling.classList.contains(".menu_active")) {
    //     console.log(this);
    //     this.nextElementSibling.classList.remove("menu_active");
    // } Это было предназначено для закрытия уже открытого элемента по повторному нажатию
        
    if (document.querySelector(".menu_active")) {
        document.querySelector(".menu_active").classList.remove("menu_active");
    }

    if (menuLink[i].nextElementSibling.classList.contains("menu_active")) {
        menuLink[i].nextElementSibling.classList.remove("menu_active");
    } else {
        menuLink[i].nextElementSibling.classList.add("menu_active");
    }

    return false;
}
}