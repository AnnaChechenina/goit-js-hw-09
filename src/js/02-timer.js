import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Елементи форми
const startBtn = document.querySelector('[data-start]');
const boxTimer = document.querySelector('.timer');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
// Стилі
boxTimer.setAttribute(
  'style',
  'display:flex; gap:20px; border:2px solid blue; width: 300px;margin:10px; padding:15px; '
);
// активність кнопки
startBtn.setAttribute('disabled', 'true');
// поточна та майбутня дати
let futureDate = null;
let isActiveDate = false;

// алерт та активний старт
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
    futureDate = selectedDates[0];
  },
};
// інпут календар
flatpickr('input#datetime-picker', options);
// старт слухач
startBtn.addEventListener('click', onStartBtnClick);

// Клік на майбутню дату
function onStartBtnClick() {
  if (isActiveDate) {
    return;
  }

  isActiveDate = true;

  // Таймер
  const timer = setInterval(() => {
    if (Date.now() >= futureDate) {
      clearInterval(timer);
      return;
    }
    const deltaTime = futureDate - Date.now();
    const convertTime = convertMs(deltaTime);
    const { days, hours, minutes, seconds } = convertTime;
    daysTimer.textContent = days;
    hoursTimer.textContent = hours;
    minutesTimer.textContent = minutes;
    secondsTimer.textContent = seconds;
  }, 500);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
