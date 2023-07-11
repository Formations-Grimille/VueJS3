const counterValueText = document.querySelector('#counter-value');
const counterIncrement = document.querySelector('#btn-increment');
const counterDecrement = document.querySelector('#btn-decrement');

let counter = 0;

const increment = () => {
  counter++;
  updateCounterRender();
}

const decrement = () => {
  counter--;
  updateCounterRender();
}

const updateCounterRender = () => {
  counterValueText.textContent = counter;
}

counterIncrement.addEventListener('click', increment);
counterDecrement.addEventListener('click', decrement);