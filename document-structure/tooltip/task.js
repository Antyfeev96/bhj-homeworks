let links = document.querySelectorAll('a');

for (let item of links) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
            if (document.querySelector('.tooltip_active')) {
                let deleted = document.querySelector('.tooltip_active')
                document.querySelector('.tooltip_active').remove()
                if (deleted.textContent === item.title) {
                    return false
                }
            }

            item.insertAdjacentHTML(
                'afterend',
                `<div class="tooltip"">${item.title}</div>`
            );
            document.querySelector('.tooltip').setAttribute('style', `left: ${item.getBoundingClientRect().left}px; top: ${item.getBoundingClientRect().top} - 100px`)
            document.querySelector('.tooltip').classList.add('tooltip_active');

    })
}


