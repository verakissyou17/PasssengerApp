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

let firstName = "Vera";
let lastName = "Ciuca";
const fullName = firstName + " " + lastName;
console.log(fullName);


function displayName () {
  let name = "Linda!";
  let greeting = "Hi there,";
  console.log(greeting + " " + name);
}
displayName();

let myPoints = 3;
function add3Points () {
  myPoints = myPoints += 3;
  console.log(myPoints);
}


function remove1Point () {
  myPoints = myPoints -= 1;
  console.log(myPoints);
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();


console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65 
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) //  4
console.log("11" + "14") //  1114