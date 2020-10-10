let rightWidget = document.querySelector(".chat-widget__side");

let widget = document.querySelector(".chat-widget");

let input = document.querySelector("input");

let messages = document.getElementById("chat-widget__messages");

let container = document.getElementsByClassName("chat-widget__messages-container")

let widgetArea = document.querySelector('.chat-widget__area')


const getAnswer = () => {
    const robotAnswers = [
        'Здравствуйте, до свидания!',
        'Где ваша совесть?!',
        'Все наши сотрудники сейчас заняты, не пишите нам больше никогда, спасибо!',
        'Добрый день, с удовольствием вам не помогу!',
        'Кто тут?',
        'Вы не купили у нас ни одного товара, чтобы так с нами разговаривать!!!',
        'Мы ничего не будем вам продавать!'
    ];
      
    let word = Math.floor(Math.random() * robotAnswers.length);

    input.value = ''

    return robotAnswers[word];
    
  }

rightWidget.addEventListener("click", () => {
  widget.classList.toggle("chat-widget_active");
});

widgetArea.addEventListener("keydown", (event) => {
  let time = new Date();
  if (event.key === "Enter" && input.value !== '') {
    messages.innerHTML += `Сообщение от клиента
        <div class="message message_client">
    <div class="message__time">${
      time.getHours() + ":" + time.getMinutes()
    }</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>`;
  }
});

widgetArea.onchange = () => {
  let time = new Date();
    messages.innerHTML += `Сообщение от робота
        <div class="message">
    <div class="message__time">${
      time.getHours() + ":" + time.getMinutes()
    }</div>
    <div class="message__text">
      ${getAnswer()}
    </div>
  </div>`;
}
