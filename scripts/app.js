const purchaseButton = document.querySelector('.purchase-btn').addEventListener('click', () => {
  displayMessage();
});

function displayMessage () {
  const messageText = document.getElementById('error')
  .innerHTML = "Something went wrong, please try again";

}
