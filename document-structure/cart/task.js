// выбрать элемент количества

// добавить +/-

// найти зеленую кнопку

// вывести в корзину

// товар в корзине

let products = document.querySelectorAll('.product')

let addProduct = document.querySelectorAll('.product__add')

for (let item of products) {

    item.querySelector('.product__quantity-control_inc').addEventListener('click', (e) => {
        ++item.querySelector('.product__quantity-value').textContent
    })

    item.querySelector('.product__quantity-control_dec').addEventListener('click', (e) => {
        return +item.querySelector('.product__quantity-value').textContent === 0 ? false : --item.querySelector('.product__quantity-value').textContent
    })

}


for (let item of addProduct) {

    item.addEventListener('click', () => {

        document.querySelector('.cart__products').insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id="${item.closest('.product').getAttribute('data-id')}">
        <img class="cart__product-image" src="${item.closest('.product').querySelector('img').getAttribute('src')}">
        <div class="cart__product-count">${item.previousElementSibling.querySelector('.product__quantity-value').textContent}</div>
    </div>`)
        })

}

// Чтобы такой же товар не добавлялся каждый раз, нужно проверить, если ли в корзине элемент с аттрибутом data-id равным добавляемому элементу
// Если data-id совпал, то нужно приплюсовать существующему элементу количество из item.querySelector('.product__quantity-value').textContent
// Только вот чтобы пройтись по cart, нужно создать цикл и получается, что цикл будет находится внутри условия, а это вроде как невозможно
