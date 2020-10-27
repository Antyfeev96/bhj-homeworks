
window.addEventListener('beforeunload', () => {
    localStorage.text = document.getElementById('editor').value;
} )

window.addEventListener('load', () => {
    document.getElementById('editor').value = localStorage.text;
})

let clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', () => {
    localStorage.clear();
    document.getElementById('editor').value = ''
})
