const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');

let timeLeft = parseInt(timerElement.textContent);

const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = timeLeft;
  } else {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
  }
}, 1000);