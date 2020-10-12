for (let item of document.querySelectorAll('.product')) {

    item.querySelectorAll('.product__quantity-control').forEach(elem => {
        if (elem.classList.contains('product__quantity-control_inc')) {
            elem.addEventListener('click', () => {
                ++item.querySelector('.product__quantity-value').textContent
            })
        } else if (elem.classList.contains('product__quantity-control_dec')) {
            elem.addEventListener('click', () => {
                +item.querySelector('.product__quantity-value').textContent === 1 ? false : --item.querySelector('.product__quantity-value').textContent
            })
        }

    })

    let addProduct = item.querySelectorAll('.product__add')

    for (let element of addProduct) {

        element.addEventListener('click', () => {

            if (Array.from(document.querySelector('.cart__products').children).find(elem =>
                elem.getAttribute('data-id') === item.getAttribute('data-id')) === undefined) {
                document.querySelector('.cart__products').insertAdjacentHTML(
                    'afterbegin', `<div class="cart__product" data-id="${item.getAttribute('data-id')}">
        <img class="cart__product-image" src="${item.querySelector('img').getAttribute('src')}" alt="Картинка товара">
        <div class="cart__product-count">${item.querySelector('.product__quantity-value').textContent}</div>
    </div>`)
            } else {
                Array.from(document.querySelectorAll('.cart__product')).forEach(elem => {
                    if (item.getAttribute('data-id') === elem.getAttribute('data-id')) {
                        let currentValue = +elem.querySelector('.cart__product-count').textContent;
                        elem.querySelector('.cart__product-count').textContent = currentValue + +item.querySelector('.product__quantity-value').textContent
                        item.querySelector('.product__quantity-value').textContent = '1';
                    }
                })
            }
        })
    }
}