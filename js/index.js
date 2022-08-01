let startBtn = document.querySelector("#start-button");


//cards
const cards = [
  { name: 'blue', img: 'card1.png' },
  { name: 'cat', img: 'card2.png' },
  { name: 'wolf', img: 'card3.png' },
  { name: 'dragon', img: 'card4.png' },
  { name: 'brain', img: 'card5.png' },
  { name: 'green arrow', img: 'card6.png' },
  { name: 'lizard', img: 'card7.png' },
  { name: 'skull', img: 'card8.png' },
  { name: 'warrior', img: 'card9.png' },
  { name: 'tree', img: 'card10.png' },
  { name: 'clouds', img: 'card11.png' },
  { name: 'robot', img: 'card12.png' },
  { name: 'joker', img: 'card13.png' },
  { name: 'batman', img: 'card14.png' },
  { name: 'robin', img: 'card15.png' },
];

const cardGame = new CardGame(cards);

let score = 0
let intervalId = 0

let background = new Image()
background.src = '../images/board-image.webp';

window.onload = () => {
    memoryGame.shuffleCards(cards);
    }


