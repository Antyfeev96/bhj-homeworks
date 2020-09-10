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
time = new Date(2020, 8, 10, 15, 0, 5);

seconds = time.getSeconds();
minutes = time.getMinutes();
hours = time.getHours()

if (hours.toString().length < 2) {
    hours = "0" + hours;
} if (minutes.toString().length < 2) {
    minutes = "0" + minutes;
} if (seconds.toString().length < 2) {
    seconds = "0" + seconds;
}

document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;; // установка начального таймера

const bigCounter = () => {
    
    newSeconds = seconds;
    newMinutes = minutes;
    newHours = hours;

    if (newHours.toString().length < 2) {
        newHours = "0" + newHours;
    } if (newMinutes.toString().length < 2) {
        newMinutes = "0" + newMinutes;
    } if (newSeconds.toString().length < 2) {
        newSeconds = "0" + newSeconds;
    }

    if (newSeconds !== -1) {
        newSeconds -= 1;
    } else if (newSeconds < 0) {
        newSeconds = 59;
    } 
    
    if (newSeconds == -1 && newMinutes !== 0) {
        newSeconds = 59;
        newMinutes -= 1;
    }
    if (newSeconds == -1 && newMinutes == 0) {
        newMinutes = 59;
        newSeconds = 59;
    } 
    
    if (newSeconds == 59 && newMinutes == 59) {
        newHours -= 1;
       }
    
       if (newHours === 0 && newMinutes === 0 && newSeconds === 0) {
        alert("Вы победили в конкурсе!");
        return;
    }

    if (newHours.toString().length < 2) {
        newHours = "0" + newHours;
    } if (newMinutes.toString().length < 2) {
        newMinutes = "0" + newMinutes;
    } if (newSeconds.toString().length < 2) {
        newSeconds = "0" + newSeconds;
    }
    
    seconds = newSeconds;
    minutes = newMinutes;
    hours = newHours;

    document.getElementById("timer").textContent = `${newHours}:${newMinutes}:${newSeconds}`;


}

setInterval(bigCounter, 1000);









