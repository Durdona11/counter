let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');


incrementBtn.addEventListener('click', () => {
	counter+=5;
	counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
	counter-=5;
	counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', reset);

function reset() {
	counter = 0;
	counterValue.innerHTML = counter;
}
