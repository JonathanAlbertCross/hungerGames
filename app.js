const nameForm = document.getElementById("nameForm");
const letsPlay = document.querySelector("#letsPlay");
let userName;

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  userName = document.getElementById("name").value;

  // set name
  // get messageDiv in HTML
  const messageDiv = document.getElementById("messageDiv");
  // set messageDiv text
  messageDiv.textContent =
    "Hi there " +
    userName +
    "! Are you a fan of gaming? I've dedicated this week to creating a couple of them. Have fun!";
  // Reset the form
  nameForm.classList.toggle("hidden");
  letsPlay.classList.toggle("hidden");
});
