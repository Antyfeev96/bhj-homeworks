let cookie = document.getElementById("cookie");

let counter = +document.getElementById("clicker__counter").textContent;

let arr = [];

let finish = 0;


cookie.onclick = () => {

    let a = new Date().getTime() / 1000;

    counter += 1;
    document.getElementById("clicker__counter").textContent = counter;

    if (cookie.width == 200) {
        cookie.width = 250;
        cookie.heigth = 250;
    } else if (cookie.width == 250) {
        cookie.width = 200;
        cookie.heigth = 200;
    }

    
    if (+document.getElementById("clicker__counter").textContent > 1) {
        let interval = a - finish;
        let speed = 1 / interval;
        arr.push(speed);
        document.getElementById("taps__speed").textContent = (arr.reduce((a,b) => {return a + b}) / arr.length);
    }
        finish = a;

}
