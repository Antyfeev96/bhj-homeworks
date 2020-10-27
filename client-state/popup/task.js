let popup = document.querySelector('.modal')

let closeButton = popup.querySelector('.modal__close')

window.addEventListener('load', () => {
    if (localStorage.popup === 'false') {
        return false
    } else if (localStorage.popup === 'true' || !localStorage.popup) {
        popup.classList.add('modal_active')
    }
})

closeButton.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    localStorage.popup = 'false'
})