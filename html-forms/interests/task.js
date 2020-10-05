let main = document.querySelector(".interests_main");

let interests = main.querySelectorAll(".interests_active");

let big = document.querySelector("ul"); // целый список

let medium = big.children; // список всех средних

medium[0].querySelectorAll("input")[0]; // каждый главный radio в каждом списке

let radios = document.querySelectorAll("input");

interests[0].querySelectorAll("input")[0]; // каждая внутренняя клетка

medium[0]; // каждый большой список

for (a = 0; a < radios.length; a++) {
  radios[a].onclick = () => {
    for (let i = 0; i < big.childElementCount; i++) {
      if (medium[i].querySelector("input").checked) {
        for (let k = 0; k < medium.length; k++) {
          interests[i].querySelectorAll("input")[k].checked = true;
        }
      } else {
        for (let k = 0; k < medium.length; k++) {
            interests[i].querySelectorAll("input")[k].checked = false;
          }
      }
    }
  };
}

// Формально это задание работает в базовом варианте, но я его очень сложно реализовал
// обычно, когда что-то получается очень сложно, преподаватели говорят, что что-то не так
// как облегчить мой вариант? Тут проблема в том, что все названия классов каждой строки
// одинаковый, были бы у них разные классы было бы гораздо легче...
