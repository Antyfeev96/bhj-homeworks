let signForm = document.getElementById('signin');

let button = document.getElementById('signin__btn');

window.addEventListener('load', () => {
    signForm.classList.add('signin_active');
    if (localStorage.id) {
        document.getElementById('user_id').textContent = localStorage.getItem('id');
        signForm.classList.remove('signin_active');
        document.getElementById('welcome').classList.add('welcome_active');
    }
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    let formData = new FormData(document.forms.signin__form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            if (JSON.parse(xhr.responseText).success) {
                localStorage.id = JSON.parse(xhr.responseText).user_id;
                document.getElementById('user_id').textContent = localStorage.getItem('id');
                signForm.classList.remove('signin_active');
                document.getElementById('welcome').classList.add('welcome_active');
            } else {
                alert('Неверный логин или пароль.')
                document.getElementsByTagName('input')[0].value = ''
                document.getElementsByTagName('input')[1].value = ''
            }
        }
    }
    xhr.send(formData);
})



