 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

 const appSettings = {
    databaseURL: "https://realtime-database-f9de1-default-rtdb.europe-west1.firebasedatabase.app/"
 };

 const app = initializeApp(appSettings);
 const database = getDatabase(app);
 const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");



addButtonEl.addEventListener("click", () => {
  let inputValue = inputFieldEl.value; 

   push(shoppingListInDB, inputValue); 

    clearInputFieldEl(); 
});

onValue(shoppingListInDB, function (snapshot) {
  let itemsArray = Object.entries(snapshot.exists());
  
    if (snapshot.exists()) {
      clearShoppingListEl();
  
      for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i];
        let currentItemId = currentItem[0];
        let currentItemValue = currentItem[1];

        appendItemToShoppingListEl(currentItem);
      }
    } else {
      shoppingListEl.innerHTML = "No items here ...yet";
    }


}); 

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function clearInputFieldEl () {
  inputFieldEl.value = "";
};

function appendItemToShoppingListEl (item) {
    let itemID = item[0];
    let itemValue = item[1];

  let newEl = document.createElement('li');
  newEl.textContent = itemValue;
 
  newEl.addEventListener('click', () => {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);

    remove(exactLocationOfItemInDB);
  });
  shoppingListEl.append(newEl);

  console.log(itemValue);
};



//Exercices
let scrimbaUsers = {
  "00": "sindre@scrimba.com",
  "01": "per@scrimba.com",
  "02": "frode@scrimba.com"
};

const keys = Object.keys(scrimbaUsers);
 console.log(keys);

 const values = Object.values(scrimbaUsers);
 console.log(values);

 const entries = Object.entries(scrimbaUsers);
 console.log(entries);
 

