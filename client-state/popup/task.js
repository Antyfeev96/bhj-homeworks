let popup = document.querySelector('.modal')

let closeButton = popup.querySelector('.modal__close')

window.addEventListener('load', () => {
    if (document.cookie === 'status=false') {
        return false
    } else if (document.cookie === 'status=true' || !document.cookie) {
        popup.classList.add('modal_active')
    }
})

closeButton.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'status=false'
})