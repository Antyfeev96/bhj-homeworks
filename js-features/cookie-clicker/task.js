let cookie = document.getElementById("cookie");

let counter = +document.getElementById("clicker__counter").textContent;

let arr = [];

let finish;

cookie.onclick = () => {

    let start = new Date();

    counter += 1;
    document.getElementById("clicker__counter").textContent = counter;

    if (cookie.width == 200) {
        cookie.width = 250;
        cookie.heigth = 250;
    } else if (cookie.width == 250) {
        cookie.width = 200;
        cookie.heigth = 200;
    }

        let interval = start.getSeconds() - start.getSeconds()
        let speed = 1 / interval;
        arr.push(speed);
        document.getElementById("taps__speed").textContent = speed / arr.length;
        finish = start;
}
