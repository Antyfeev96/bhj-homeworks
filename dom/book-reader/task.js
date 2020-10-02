let fonts = document.querySelectorAll('.font-size');

let textColor = document.querySelectorAll('.book__control_color a')

let textActive = document.querySelector('.book__control_color').querySelector('.color_active')

let bgColor = document.querySelectorAll('.book__control_background a')

let bgActive = document.querySelector('.book__control_background').querySelector('.color_active')

let book = document.querySelector('.book__content');

for (let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click', (e) => {

        e.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        fonts[i].classList.add('font-size_active');

        book.classList.remove(book.classList.item(1));
        book.classList.add(`book_fs-${fonts[i].getAttribute('data-size')}`);

    })
}

for (let i = 0; i < textColor.length; i++) {
    textColor[i].addEventListener('click' , (e) => {
        e.preventDefault();
        textActive.classList.remove('color_active');
        textColor[i].classList.add('color_active');
        textActive = document.querySelector('.book__control_color').querySelector('.color_active');

        book.classList.remove(book.classList.item(2));
        book.classList.add(`book_color-${textColor[i].getAttribute('data-text-color')}`);
    })
}

for (let i = 0; i < bgColor.length; i++) {
    bgColor[i].addEventListener('click' , (e) => {
        e.preventDefault();
        bgActive.classList.remove('color_active');
        bgColor[i].classList.add('color_active');
        bgActive = document.querySelector('.book__control_background').querySelector('.color_active');

        book.classList.remove(book.classList.item(3));
        book.classList.add(`book_bg-${bgColor[i].getAttribute('data-bg-color')}`);
    })
}
