const purchaseButton = document.querySelector('.purchase-btn').addEventListener('click', () => {
  displayMessage();
});

function displayMessage () {
  const messageText = document.getElementById('error')
  .textContent = "Something went wrong, please try again";
}


let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

document.querySelector('.add-btn')
.addEventListener('click', () => {
  addNumbers();
});

document.querySelector('.substract-btn')
.addEventListener('click', () => {
 substractNumbers();
});

document.querySelector('.divide-btn')
.addEventListener('click', () => {
 divideNumbers();
});

document.querySelector('.multiply-btn')
.addEventListener('click', () => {
 multiplyNumbers();
});

 let result = document.getElementById('sum-el');

function addNumbers () {
  result.textContent += num1 + num2;
};

function substractNumbers () {
  result.textContent =  "Difference: " + (num1 - num2);
};

function divideNumbers () {
  result.textContent =  "Quotient : " + (num1 / num2);
};

function multiplyNumbers () {
  result.textContent =  "Product : " + (num1 * num2);
};