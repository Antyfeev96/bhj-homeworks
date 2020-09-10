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
time = new Date(2020, 8, 10, 15, 45, 30);

const bigCounter = () => {
    seconds = time.getSeconds();
    minutes = time.getMinutes();
    hours = time.getHours()

    newSeconds = seconds;
    newMinutes = minutes;
    newHours = hours;

    if (newSeconds !== 0) {
        newSeconds -= 1;
    } else if (newSeconds === 0) {
        newMinutes -= 1;
        newSeconds = 59;
    } else if (newMinutes === 0) {
        newHours -= 1;
        newMinutes = 59;
    }
    
    fullTime = `${newHours}:${newMinutes}:${newSeconds}`;

    seconds = newSeconds;
    minutes = newMinutes;
    hours = newHours;

    document.getElementById("timer").textContent = fullTime;


}

setInterval(bigCounter, 1000);









