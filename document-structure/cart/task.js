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
        if (Array.from(document.querySelector('.cart__products').children).find(elem => 
            elem.getAttribute('data-id') === item.closest('.product').getAttribute('data-id')
        ) === undefined) {
            document.querySelector('.cart__products').insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id="${item.closest('.product').getAttribute('data-id')}">
        <img class="cart__product-image" src="${item.closest('.product').querySelector('img').getAttribute('src')}">
        <div class="cart__product-count">${item.previousElementSibling.querySelector('.product__quantity-value').textContent}</div>
    </div>`)
        } else {
            Array.from(document.querySelector('.cart__products').children).forEach(elem => {
                if (elem.getAttribute('data-id') === item.closest('.product').getAttribute('data-id')) {
                    let currentValue = +elem.querySelector('.cart__product-count').textContent
                    elem.querySelector('.cart__product-count').textContent = currentValue + +item.parentElement.querySelector('.product__quantity-value').textContent
                }
            }
        
        )}
        item.parentElement.querySelector('.product__quantity-value').textContent = 1;
        })
}

// вставить onclick внуть Array.from
