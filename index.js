"strict-mode"

const counterElement = document.getElementById('count-el');
const saveEl =  document.getElementById('save-el');
const incrementButton = document.getElementById('increment-btn');
const saveButton = document.getElementById('save-btn');

 incrementButton.addEventListener('click', () => {
  increment();
 });

saveButton.addEventListener('click', () => {
   saveEntries();
 });

let count = 0;

function increment () {
  count++;
  counterElement.textContent = count;
};

function saveEntries () {
 let countStr = count + " - ";
 saveEl.textContent += countStr;

 count = 0;
 counterElement.textContent = count;
};

