const xhr = new XMLHttpRequest()

const postRequest = new XMLHttpRequest()

let pollTitle = document.getElementById('poll__title')

let answerBox = document.getElementById('poll__answers')

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')

xhr.setRequestHeader('Content-type','text/xml')

xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const question = Object.values(JSON.parse(xhr.responseText))[1].title
        const answers = Object.values(JSON.parse(xhr.responseText))[1].answers
        pollTitle.innerText += `${question}`
        answers.forEach(item => { answerBox.innerHTML += `
        <button class="poll__answer">
              ${item}
            </button>
        `;

        document.querySelectorAll('.poll__answer').forEach(elem => {
            elem.addEventListener('click', () => {
                const postRequest = new XMLHttpRequest()

                postRequest.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );

                postRequest.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

                postRequest.onreadystatechange = () => {
                    if (postRequest.readyState === postRequest.DONE && postRequest.status === 200) {
                        console.log(Object.values(JSON.parse(postRequest.responseText)))
                    }
                }

                let index = Array.from(document.querySelectorAll('.poll__answer')).indexOf(elem)
                let formData = new FormData()

                formData.append('vote',`${Object.values(JSON.parse(xhr.responseText))[0]}`)
                formData.append('answer',`${index}`)

                postRequest.send(formData)
                alert('Спасибо, ваш голос засчитан!')
            })
        })
        })
    }
}

xhr.send()


// let index = Array.from(document.querySelectorAll('.poll__answer')).indexOf(elem)

