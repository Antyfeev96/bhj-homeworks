let menuLink = document.getElementsByClassName("menu__link");

let menuSub = document.getElementsByClassName("menu_sub");

for (let i = 0; i < menuLink.length; i ++) {

    menuLink[i].onclick = () => {

    if (document.querySelector(".menu_active") !== null) {
        document.querySelector(".menu_active").className = "menu menu_sub";
    }

    if (menuLink[i].nextElementSibling.className === "menu menu_sub") {
        menuLink[i].nextElementSibling.className += " menu_active";
    } else if (menuLink[i].nextElementSibling.className === "menu menu_sub menu_active") {
        menuLink[i].nextElementSibling.className = "menu menu_sub";
    }

    return false;
}
}