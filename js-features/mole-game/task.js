const getHole = index => {
    document.getElementById(`hole${index}`)
}

let deadMole = +document.getElementById("dead").textContent;
let liveMole = +document.getElementById("lost").textContent;

let hole = document.getElementsByClassName("hole");




for (let i = 0; i < 9; i++) {
    hole[i].onclick = () => {
        if (hole[i].className.includes("hole_has-mole")) {
            deadMole += 1;
            document.getElementById("dead").textContent = deadMole;
            if (deadMole == 10) {
                alert("Вы победили!");
                document.getElementById("dead").textContent = "0";
                document.getElementById("lost").textContent = "0";
                return;
            }
        } else {
            liveMole += 1;
            document.getElementById("lost").textContent = liveMole;
            if (liveMole == 5) {
                alert("Вы проиграли...");
                document.getElementById("dead").textContent = "0";
                document.getElementById("lost").textContent = "0";
                return;
            }
        }
    }
}

