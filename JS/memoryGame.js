// array of inkblots
const cardArray = [
  {
    name: "blot1",
    img: "images/rorschach-blot-1.jpeg",
  },
  {
    name: "blot2",
    img: "images/rorschach-blot-2.jpeg",
  },
  {
    name: "blot3",
    img: "images/rorschach-blot-3.jpeg",
  },
  {
    name: "blot4",
    img: "images/rorschach-blot-4.jpeg",
  },
  {
    name: "blot5",
    img: "images/rorschach-blot-5.jpeg",
  },
  {
    name: "blot6",
    img: "images/rorschach-blot-6.jpeg",
  },
  {
    name: "blot1",
    img: "images/rorschach-blot-1.jpeg",
  },
  {
    name: "blot2",
    img: "images/rorschach-blot-2.jpeg",
  },
  {
    name: "blot3",
    img: "images/rorschach-blot-3.jpeg",
  },
  {
    name: "blot4",
    img: "images/rorschach-blot-4.jpeg",
  },
  {
    name: "blot5",
    img: "images/rorschach-blot-5.jpeg",
  },
  {
    name: "blot6",
    img: "images/rorschach-blot-6.jpeg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/pickMe.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/pickMe.jpg");
    cards[optionTwoId].setAttribute("src", "images/pickMe.jpg");
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/blank.jpg");
    cards[optionTwoId].setAttribute("src", "images/blank.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/pickMe.jpg");
    cards[optionTwoId].setAttribute("src", "images/pickMe.jpg");
    alert("Sorry, try again");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
