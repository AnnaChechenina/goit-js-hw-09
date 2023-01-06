import Notiflix from 'notiflix';
// елементи форми
const form = document.querySelector('.form');

// слухач подій
form.addEventListener('submit', onFormSubmit);

// створення промісу
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
// sumbit
function onFormSubmit(event) {
  event.preventDefault();

  let firstDelay = Number(event.currentTarget.elements.delay.value);
  const nextDelay = Number(event.currentTarget.elements.step.value);
  const amount = Number(event.currentTarget.elements.amount.value);
  // лічильник
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += nextDelay;
  }
}
