// Найти зеленую кнопку

// Если строка не пустая, добавить элемент с текстом равным значению строки

// найти красный крестик

// удалить элемент, индекс которого равен индексу крестика

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
    }

    for (let item of document.querySelectorAll('.task__remove')) {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            item.closest('.task').remove();
        })
    }

})

