let radios = document.querySelectorAll('input');

// Неудачный вариант с forEach, я посмотрел по дебаггеру, что у меня код срабатывает не по нажатию
// а по загрузке страницы, то есть item.checked всегда будет становиться true, до меня не дошло, как
// только с помощью forEach и одного цикла сделать это :( 
// Если я пытаюсь делать без большого количества циклов, например, как ниже, то

// for (let item of radios) {
//   item.addEventListener('click', () => {
//     radios.forEach(a => {
//       if (item.checked) {
//         item.checked = false
//       }
//     })
//     item.checked = true;
//   })
// }

for (let item of radios) {
  item.onclick = () => {

    if (item.closest('ul').closest('li') === null && item.checked) {
      for (let a of item.closest('li').querySelector('.interests_active').querySelectorAll('input')) {
        a.checked = true
      }
    } else if (item.closest('ul').closest('li') === null && !item.checked) {
      for (let a of item.closest('li').querySelector('.interests_active').querySelectorAll('input')) {
        a.checked = false
      }
    }

    if (item.closest('li').nextElementSibling === null) {
      if (!item.closest('li').previousElementSibling.querySelector('input').checked) {
        item.closest('ul').closest('li').querySelector('input').checked = false
        item.closest('ul').closest('li').querySelector('input').indeterminate = true;
      } else {
        item.closest('ul').closest('li').querySelector('input').indeterminate = false
        item.closest('ul').closest('li').querySelector('input').checked = true
      }

    } else if (item.closest('li').previousElementSibling === null) {
        if (!item.closest('li').nextElementSibling.querySelector('input').checked) {
          item.closest('ul').closest('li').querySelector('input').checked = false
          item.closest('ul').closest('li').querySelector('input').indeterminate = true;
        } else {
          item.closest('ul').closest('li').querySelector('input').indeterminate = false
          item.closest('ul').closest('li').querySelector('input').checked = true
        }
    }

    for (let k of item.closest('.interests_active').querySelectorAll('input')) {
      if (k.checked === false) {
        item.closest('ul').closest('li').querySelector('input').checked = false
        item.closest('ul').closest('li').querySelector('input').indeterminate = true;
      }
    }

    let arr = Array.from(item.closest('ul').querySelectorAll('input'))

    if (arr.every(a => !a.checked) === true) {
      item.closest('ul').closest('li').querySelector('input').indeterminate = false;
      item.closest('ul').closest('li').querySelector('input').checked = false
    }

  }
}
