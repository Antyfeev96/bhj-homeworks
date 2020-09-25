document.querySelector(".modal").classList.add("modal_active");

let activeTable = document.querySelector(".modal_active");

Array.from(document.querySelectorAll(".modal__close_times")).forEach(item => item.onclick = function() {
    this.closest(".modal_active").classList.remove("modal_active");
})

let successElement = document.getElementsByClassName("show-success")[0];

successElement.onclick = () => {
    document.getElementById("modal_success").className = "modal modal_active";
    document.getElementById("modal_main").className = "modal";
    activeTable = document.querySelector(".modal_active");
    closeElement = Array.from(document.querySelectorAll(".modal__close_times")).forEach(item => item.parentElement.parentElement.classList.contains("modal_active"));
}

