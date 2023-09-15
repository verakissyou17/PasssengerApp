  let myLeads = [];
  const inputEl = document.getElementById('input-el');
  const inputBtn = document.getElementById('input-btn');
  const ulEl = document.getElementById('ul-el');
  const deleteBtn = document.getElementById('delete-btn');
  const tabBtn = document.getElementById('save-tab-btn');

  const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

  if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
  };


  tabBtn.addEventListener('click', () => {

  chrome.tabs.query({active: true, currentWindow: true}, () => {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
    })
  });

   
  function render (leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
      // My variant
      listItems += `
      <li>
        <a target="_blank" href="https://${leads[i]}">
          ${leads[i]}
        </a>
      </li>`;
      ulEl.innerHTML = listItems;
     }
  };

  inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  });

  deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  myLeads = [];
  url = [];
  ulEl.innerHTML = '';
  });

 

  // Exercices
  const playerName = "Per";
  let credits = 45;
  credits = credits -10;
  console.log(playerName);
  console.log(credits);

  const basePrice = 520;
  const discount = 120;
  let shippingCost = 12;
  let shippingTime = "5-12 days";

  shippingCost = 15;
  shippingTime = "7-14 days";

  const fullPrice = basePrice - discount + shippingCost;

  console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);

  const box = document.getElementById('box');
  box.addEventListener('click', () => {
    box.innerHTML = "Box opened!";
    box.classList.add('box');
  });

 const container =  document.getElementById('container');
 container.innerHTML = '<button id="buy-btn">Buy!</button>';

 const buyBtn = document.getElementById('buy-btn');

 buyBtn.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Thank you for buying!';
  container.append(paragraph);
 });

 /* Per Variant
 const container =  document.getElementById('container');
 container.innerHTML = '<button onclick=buy();>Buy!</button>';
 function buy () {
  container.innnerHTML += "Thank you for buying!";
 };
 */

 const recipient = "James";
 const sender = "Vera";

 //multiple lines template literals
 const email = `
  Hey ${recipient}! 
  How is it going? 
  Cheers ${sender}!
  `;
 console.log(email);

 const credit = 0;

 if (credit) {
  console.log("Let's play!")
 } else {
  console.log("Sorry, you have no credits");
 }

 
 // truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let trueOfFalse = Boolean("");

 console.log(trueOfFalse);

  console.log(  Boolean("")   ) // false
  console.log(  Boolean("0")  ) // true
  console.log(  Boolean(100)  ) // true
  console.log(  Boolean(null) ) // false
  console.log(  Boolean([0])  ) // true
  console.log(  Boolean(-0)   ) // false

  const welcomeEl = document.getElementById('welcome-el');

  function greetUser (greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
  };

  greetUser("Welcome back", "Per Harald Borgen", "🔥");

  //let emoji = "👋";

   function add (num1, num2) {
    return num1 + num2;
   };

   console.log(add(3, 4));
   console.log(add(9, 102));

   function getFirst (arr) {
    return arr[0];
   };

   let firstItem = getFirst(["John", 45, true]);
   console.log(firstItem);

   const myArray = [{name: "Vera", age: 38, isValid: true}];
   const item = myArray[0].name;
   console.log(item);

   let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

   function getCourse (arr) {
    // for (let i = 0; i < arr.length; i++) {
    //   console.log(arr[i]);
    // }
    arr.forEach(element => {
      console.log(element);
    });

   };
   getCourse(myCourses);

   const myLocalStorage = localStorage.setItem('course', JSON.stringify(myCourses));
   console.log(myLocalStorage);
   const getItem = JSON.parse(localStorage.getItem('course'));
   console.log(getItem);

   const text = document.createElement('p');
   text.innerHTML = myCourses;
   document.body.append(text);


   let data = [
    {
      player: "Jane",
      score: 52
    }, {
      player: "Mark",
      score: 41
    }
   ];

   const scoreBtn = document.getElementById('score-btn');
   scoreBtn.addEventListener('click', () => {
    const dataScore = data[0].score;
    const janeScore = document.querySelector('.jane-score');
    janeScore.textContent = dataScore;
   });


   const scoreBtn2 = document.getElementById('score-btn2');
   scoreBtn2.addEventListener('click', () => {
    const dataScore = data[1].score;
   const markScore = document.querySelector('.mark-score');
    markScore.textContent = dataScore;
   });


   function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      if (i === lastIndex) {
        baseString += arr[i];
      } else {
        baseString += arr[i] + ",";
      }
    }
    return baseString;
};

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
console.log(sentence);

console.log(generateSentence("favorite foods", ["pizza", "icecream", "fruits", "cheese"]));

const imgs = [
  "images/hip1.jpg", 
  "images/hip2.jpg",
  "images/hip3.jpg"
];

const container2 = document.getElementById('container2');

function renderImages () {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img  alt="Employee on the company" class="team-img" src="${imgs[i]}">`;
  }
  container2.innerHTML = imgsDOM;
};
renderImages();

const emojis = ['🫶', '❤️', '🔥', '🤪'];

emojis.forEach(emoji => {
  document.querySelector('.emoji-p').textContent += emoji;
});

const totalPrice = "420.69235632455";
const btn = document.getElementById("purchase-btn");
//  btn.textContent = `Buy €${Math.round(totalPrice)}`;
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`;
