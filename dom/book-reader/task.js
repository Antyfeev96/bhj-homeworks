let fonts = document.querySelectorAll('.font-size');

let textColor = document.querySelectorAll('.book__control_color a')

let bgColor = document.querySelectorAll('.book__control_background a')

let book = document.querySelector('.book__content');

for (let item of textColor) {
    item.addEventListener('click' , (e) => {

        e.preventDefault();
        document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active')
        item.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-black', 'book_color-whitesmoke');
        book.classList.add(`book_color-${item.getAttribute('data-text-color')}`);

    })
}


for (let item of bgColor) {
    item.addEventListener('click' , (e) => {

        e.preventDefault();
        document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active')
        item.classList.add('color_active');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${item.getAttribute('data-bg-color')}`);
    })
}


for (let item of fonts) {
    item.addEventListener('click', (e) => {

        e.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        item.classList.add('font-size_active');

        book.classList.remove('book_fs-big', 'book_fs-small');
        book.classList.add(`book_fs-${item.getAttribute('data-size')}`);

    })
}
