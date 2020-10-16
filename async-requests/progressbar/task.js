const progress = document.getElementById( 'progress' );

const button = document.getElementById('send')

const formData = new FormData();

formData.append('name', 'Mishgangsta')

const postRequest = new XMLHttpRequest()

postRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')

button.addEventListener('click', (e) => {
    e.preventDefault()
    postRequest.send(formData)
})

postRequest.onreadystatechange = () => {
    postRequest.status <= 200 ? progress.value += 0.25 : alert('Ошибка выполнения запроса!')
}

