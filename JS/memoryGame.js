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

// shortcut to shuffling an array randomly
cardArray.sort(() => 0.5 - Math.random());

// selects the ID in the HTML page and puts it into a variable called gridDisplay
const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    // this will create 10 image tags
    const card = document.createElement("img");
    // attached the blank image to these tags
    card.setAttribute("src", "images/blank.jpg");
    // adds the cards on the page
    gridDisplay.append(card);
  }
}

createBoard();
