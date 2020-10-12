let addButton = document.querySelector('.tasks__add');

let input = document.querySelector('input');

let list = document.querySelector('.tasks__list')


addButton.addEventListener('click', (e) => {

    e.preventDefault();

    if (input.value !== '') {
        list.insertAdjacentHTML('afterbegin', `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`)
        input.value = ''
    }

    let arr = Array.from(document.querySelectorAll('.task__remove'))

    let newItem = arr[0]

    newItem.addEventListener('click', (e) => {
        e.preventDefault()
        newItem.closest('.task').remove()
    })

})

