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


    let age = 22;

    if (age < 21) {
      console.log("you cann't enter the club!");
    } else {
      console.log("Welcome!");
    }

    let age2 = 100;
    
    if (age2 < 100) {
      console.log("Not eligible");
    } else if(age2 === 100) {
      console.log("Here is your birthday card from the King!");
    } else {
      console.log("Not elegible, you have already gotten one");
    }


    let firstCard = getRandomCard();
    let secondCard  = getRandomCard();
    let cards =[firstCard, secondCard];
    let sum = firstCard + secondCard;
    let hasBlackJack = false;
    let isAlive = false;
    let message = "";

    let player = {
      name: "Per", 
      chips: 145
    };

    let playerEl = document.getElementById('player-el').textContent = `${player.name}: $${player.chips}`;
   

    let cardsEl = document.querySelector('.text-cards');
    let sumCards = document.querySelector('.text-sum');

    const startButton = document.getElementById('start-game-btn').addEventListener('click', () => {
      startGame();
    });

    const newCardButton = document.getElementById('new-card-btn').addEventListener('click', () => {
      newCard();
    });


    
    function startGame () {
      isAlive = true;
      let firstCard = getRandomCard();
      let secondCard  = getRandomCard();
      let cards =[firstCard, secondCard];
      let sum = firstCard + secondCard;
      renderGame();
    };

      
    function getRandomCard () {
      let randomNumber = Math.floor(Math.random() * 13) + 1;
      if (randomNumber > 10) {
        return 10;
      } else if (randomNumber === 1) {
        return 11;
      } else {
        return randomNumber;
      }
    };

    function newCard () {
      if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card; 
        cards.push(card);
        renderGame();
      } else {
       console.log("Stop the game!");
      }
     };
    

  function renderGame () {
      cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
       }
        sumCards.textContent = "Sum: " + sum;

    if(sum <= 20) {
          message = "Do you want to draw a new card?";
        } else if(sum === 21) {
          message = "Wohoo! You've got Blackjack!";
          hasBlackJack = true;
        } else {
          message = "You're out of the game! :(((";
        isAlive = false;
        }
        document.getElementById('message-el').textContent = message;
    };

     let card = getRandomCard();

     let featuredPosts = [
    "Check out my Netflix clone", 
    "Here's the code for my project",  
     "I've just relaunched my portfolio"
    ];
   
    console.log(featuredPosts.length);
    console.log(featuredPosts[1]);
    console.table(featuredPosts);

const aboutMe = [
  "Vera", 
  38,
  true
];
console.log(aboutMe);

let cards2 = [7, 3, 9];
cards2.push(6);
console.log(cards2);

for (let i = 0; i < cards2.length; i++) {
  console.log(cards2[i]);
}

let messages = [
  "Hey,how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portofolio lately."
];


for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}

let newMessage = "Same here!"
messages.push(newMessage);
console.log(messages);

messages.pop();
console.log(messages);

for (let count = 10; count < 21; count += 1) {
  console.log(count);
};

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
};

let sentence = ["Hello,", "my", "name", "is", "Per"];
let greetingEl = document.getElementById('greeting-el');

for (let i = 0; i < sentence.length; i++) {
greetingEl.textContent += sentence[i] + " ";
};

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime () {
  if (player1Time < player2Time) {
    return player1Time;
  } else {
    return player2Time;
  }
}
console.log(getFastestRaceTime());

//What does Math.random() do?
// Your answer: it generates a random number between 0 and 1 //(not inclusive of 1)
let randomNumber = Math.random() * 6;
console.log(randomNumber);
console.log(randomNumber);

let flooredNumber = Math.floor(4.99);
console.log(flooredNumber);
console.log(flooredNumber);

function rollDice() {
  let newNumber = Math.floor(Math.random() * 6) + 1;
  return newNumber;
};

console.log(rollDice());

   console.log(cards);
    console.log(sum);

    let hasCompletedCourse = true;
    let givesCertificate = true;
    
    function generateCertificate () {
      if (hasCompletedCourse && givesCertificate) {
        console.log("Generating certificate...");
      } else {
        console.log("Continue learning...");
      }
    };

    generateCertificate();


   let hasSolvedChallenge = false;
   let hasHintsLeft = false;
   
   function showSolution () {
    if (hasSolvedChallenge || hasHintsLeft) {
      console.log("Show  the solution...")
    } else {
      console.log("Continue the challenge...");
    }
   };

  showSolution();

  let likesDocumentaries = false;
  let likesStartups = false;

function recommendMovie (movie) {
  if (!(likesDocumentaries) || likesStartups) {
    console.log(`Hey, check out this new film we think you will like! - ${movie}`);
  } else {
    console.log("Check out for more movies online!");
  }
};

recommendMovie("Interstellar");

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"]
}

  console.log(course.length);
  console.log(course.creator);
  console.log(course["tags"]);


  let airbnbList = {
    city: "Rasnov",
    country: "Romania",
    name: "Peace of Heaven",
    price: 353,
    isAvailable: true,
    facilities: ["lake access", "breakfast", "pool", "free parking"]
  }

  console.log(airbnbList.name);
  console.log(airbnbList.city);
  console.log(airbnbList.country);
  console.log(airbnbList.facilities);
  console.log(airbnbList.price);
  console.log(airbnbList.isAvailable);

 let person = {
    name: "Vera",
    age: 38,
    country: "Romania"
  };

  function logData (person) {
    return person.name  + " is " +  person.age  +  " years old and lives in " + person.country;
  };

 console.log(logData({name: "Vera", age: 38, country: "Romania"})) ;


 let personAge = 15;

 if (personAge < 6) {
  console.log("Free pass");
 } else if(personAge > 6 || personAge < 17) {
  console.log("Child discount");
 } else if(personAge > 17 || personAge < 26) {
  console.log("Student discount");
 } else if(personAge < 26 || personAge > 66) {
  console.log("Full price");
 } else {
  console.log("Senior citizen discount");
 };

 let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

console.log("The 5 largest countries in the world: ");
 for (let i = 0; i < largeCountries.length; i++) {
  console.log(" -" + largeCountries[i]);
 }

 let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

 largeCountries2.shift();
 console.log(largeCountries2);
 largeCountries2.pop();
 console.log(largeCountries2);
 largeCountries2.unshift("China");
 console.log(largeCountries2);
 largeCountries2.push("Pakistan");
 console.log(largeCountries2);

 let dayOfMonth = 13;
 let weekDay = "Friday";
 if(dayOfMonth === 13 && weekDay === "Friday") {
  console.log("Spooky face!!! :O");
 } 

 let hands = ["Rock", "Paper", "Scissors"];

 function chooseHand () {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  for (let i = 0; i < hands.length; i++) {
    if (i === randomNumber) {
      return hands[i];
    }
  }
 }

 console.log(chooseHand());

 function getHand () {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex);
  return hands[randomIndex];
 }

 console.log(getHand());

 let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];
 console.log(fighters);

 let stageEl = document.getElementById("stage");
 let fightButton = document.getElementById("fightButton");

 fightButton.addEventListener('click', () => {
 getEmojiFighters();
 });

 function getEmojiFighters () {
  let randomFighter = Math.floor(Math.random() * fighters.length);
  let playerTwo =  Math.floor(Math.random() * fighters.length);
  let versus = "VS";
  return stageEl.textContent = `${fighters[randomFighter]} ${versus} ${fighters[playerTwo]}`;
 }

 let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
 let appleShelf = document.getElementById('apple-shelf');
 let orangeShelf = document.getElementById("orange-shelf");

 function sortFruit () {
 for (let i = 0; i < fruit.length; i++) {
  if (fruit[i] === "🍎") {
    appleShelf.textContent += fruit[i];
  } else if (fruit[i] === "🍊") {
    orangeShelf.textContent += fruit[i];
  }
 }
 }

 sortFruit();