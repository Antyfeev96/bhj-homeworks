let xhr = new XMLHttpRequest()

let loader = document.querySelector('.loader_active');

let item = document.getElementById('items')

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')

xhr.setRequestHeader('Content-type','text/xml')

xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        let values = Object.values(JSON.parse(xhr.responseText).response.Valute)
        loader.classList.remove('loader_active');
        for (let elem of values) {
            item.innerHTML += `<div class="item">
            <div class="item__code">
                ${elem.CharCode}
            </div>
            <div class="item__value">
                ${elem.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`
        }
    }
}

xhr.send()

// Возможно, я не совсем правильно сделал задание, т.к. вроде как в начальном html закомментирована только
// только внутренность класса item, но точно я это уже не помню, но возможно в результате моих манипуляций
// я закомментировал лишнее. Если это так, то переделаю, в таком случае нужно будет проверить наличие класса item,
// если он есть, добавить html через document.querySelector(('.item')), если нет, то сделать такой innerHTML,
// как у меня сейчас.
