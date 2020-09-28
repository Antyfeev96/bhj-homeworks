let tabs = document.querySelectorAll(".tab")

let content = document.querySelectorAll(".tab__content")

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
      document.querySelector(".tab_active").classList.remove("tab_active");
      tabs[i].classList.add("tab_active")
      document.querySelector(".tab__content_active").classList.remove("tab__content_active")
      content[i].classList.add("tab__content_active")
    })
}

