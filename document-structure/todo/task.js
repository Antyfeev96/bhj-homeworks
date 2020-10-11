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
        input.value = ''
    }

    for (let item of document.querySelectorAll('.task__remove')) {
        item.onclick = (e) => {
            e.preventDefault()
            item.closest('.task').remove();
        }
    }

    // Вы писали "Обратите внимание, что у вас при добавлении новой задачи обработчик события добавляется на все элементы даже на те,
    //  на которых уже присутствует обработчик клика. Так как вы добавляете задачи сверху, то после добавления попробуйте находить только
    //  верхний элемент крестика и добавлять обработчик только на него"

    // Я это понял, как нахождение только первого элемента document.querySelector('.task__remove'). Но тогда будет удаляться только первый элемент
    // В итоге я вспомнил, что назначения события через onclick создает только одно событие, так что так я избавился от множественных событий,
    // надеюсь, что это хорошая практика

})

