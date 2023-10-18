const nameForm = document.getElementById("nameForm");

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
    "! Want to play games? Here are a few games I have made over the course of the week.";
});
