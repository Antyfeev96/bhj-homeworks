let links = document.querySelectorAll('a');

for (let item of links) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').remove()
        } else {
            item.insertAdjacentHTML(
              "afterend",
              `<div class="tooltip"">Проверка!</div>`
            );
            let tooltip = document.querySelector('.tooltip')
            tooltip.textContent = item.title;
            tooltip.setAttribute('style', `left: ${item.getBoundingClientRect().left}px; top: ${item.getBoundingClientRect().top} - 100px`)
            tooltip.classList.add('tooltip_active')
        }
    })

}

// Найти ссылку

// Нажать на ссылку

// Если links[item] нажата, вывести подсказку

// Пока что непонятно, почему не выставляется подсказка там, где должна, может это из-за стиля по умлочанию?
// Как должна подсказка поставить по элементу, если ей изначально заданы top: 0 и left: 0 ?
