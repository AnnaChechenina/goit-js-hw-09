// натискання кнопки «Start», раз на секунду змінює
// колір фону < body > на випадкове значення,
//   використовуючи інлайн стиль.

// кнопку «Start» можна натиснути нескінченну
//   кількість разів.Зроби так, щоб доки зміна теми
// запущена, кнопка «Start» була неактивною(disabled)

// Натисканням на кнопку «Stop» зміна кольору фону
//    повинна зупинятися.

// Для генерування випадкового кольору
// використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerSwitch = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.setAttribute('disabled', 'true');

function onStartBtnClick() {
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  timerSwitch = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onStopBtnClick() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
  clearInterval(timerSwitch);
}
