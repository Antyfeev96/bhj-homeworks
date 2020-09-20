document.getElementsByClassName("modal")[0].className = "modal modal_active";

let closeRed = document.getElementsByClassName("modal__close modal__close_times")[0];

let closeGreen = document.getElementsByClassName("modal__close modal__close_times")[1];

// let close = document.querySelectorAll(".modal__close_times")[0] || document.querySelectorAll(".modal__close_times")[1]

let successElement = document.getElementsByClassName("show-success")[0];

// close.onclick = () => {
//     Array.from(document.getElementsByClassName("modal")).forEach(item => {
//         item.className = "modal";
//     })
// }

closeRed.onclick = () => {
    document.getElementsByClassName("modal")[0].className = "modal";
}

closeGreen.onclick = () => {
    document.getElementsByClassName("modal")[0].className = "modal";
    document.getElementsByClassName("modal")[1].className = "modal";
}

successElement.onclick = () => {
    document.getElementById("modal_success").className = "modal modal_active";
}

