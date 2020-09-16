// Обратный счетчик на конкурс

const timeRun = (timeValue) => {

    timeValue = +document.getElementById("timer").textContent - 1;
    document.getElementById("timer").textContent = timeValue;

    if (timeValue === 0) {
        alert("Вы победили в конкурсе!");
        return;
    }
}

// setInterval(timeRun, 1000)

// Обратный счетчик hh:mm:ss 
time = new Date(2020, 8, 10, 0, 0, 5);



const bigCounter = () => {

    if (time.getHours() === 23 && time.getMinutes() === 59 && time.getSeconds() === 59) {
        // alert ("Поздравляем! Вы победили в конкурсе!");
        document.location.href = "https://www.google.ru/"
        clearInterval(timer);
        return;
    }

    let fullTime = time.getSeconds() + time.getMinutes() * 60 + time.getHours() * 3600;

    let hours = Math.floor(fullTime / 3600);

    let minutes = Math.floor((fullTime - time.getHours() * 3600) / 60);

    let seconds = fullTime - time.getHours() * 3600 - time.getMinutes() * 60;

    if (hours.toString().length < 2) {
        hours = "0" + hours;
    } 
    if (minutes.toString().length < 2) {
        minutes = "0" + minutes;
    } 
    if (seconds.toString().length < 2) {
        seconds = "0" + seconds;
    }

    document.getElementById("timer").textContent = `${hours}`+ ":" +`${minutes}` + ":" +`${seconds}`

    time.setSeconds(time.getSeconds() - 1);
}

let timer = setInterval(bigCounter, 1000);









