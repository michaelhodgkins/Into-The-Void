let startBtn = document.querySelector("#start-button");
let splashScreen = document.querySelector("#splash");
let gameOverScreen = document.querySelector("#gameOver");
let resetBtn = document.querySelector("#again-button");
let gameScreen = document.querySelector("#game");
let splashDiv = document.querySelector(".start-div");
let gameScreenContainer = document.querySelector(".game-board");

let playerCardElement = document.querySelector('#player');
let computerCardElement = document.querySelector('#computer');
let buttonElement = document.querySelector('#play');

let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let player1 = 0;
let player2 = 0;

let discardCards = [];
//cards
const playerCards = [
  { name: 'blue', img: '../images/card1.png', value: 1},
  { name: 'cat', img: '../images/card2.jpeg', value: 1},
  { name: 'wolf', img: '../images/card3.jpeg', value: 1 },
  { name: 'dragon', img: '../images/card4.jpeg', value: 1 },
  { name: 'brain', img: '../images/card5.jpeg', value: 1 },
  { name: 'lizard', img: '../images/card6.jpeg', value: 2 },
  { name: 'void', img: '../images/card7.jpeg', value: 2 },
  { name: 'skull', img: '../images/card8.jpeg', value: 2 },
  { name: 'warrior', img: '../images/card9.jpeg', value: 2 },
  { name: 'tree', img: '../images/card10.jpeg', value: 2 },
  { name: 'clouds', img: '../images/card11.jpeg', value: 3 },
  { name: 'robot', img: '../images/card12.jpeg', value: 3 },
  { name: 'joker', img: '../images/card13.jpeg', value: 3 },
  { name: 'batman', img: '../images/card14.jpeg', value: 3 },
  { name: 'robin', img: '../images/card15.jpeg', value: 3 },
];

const computerCards = [
  { name: 'blue', img: '../images/card1.png', value: 1},
  { name: 'cat', img: '../images/card2.jpeg', value: 1},
  { name: 'wolf', img: '../images/card3.jpeg', value: 1 },
  { name: 'dragon', img: '../images/card4.jpeg', value: 1 },
  { name: 'brain', img: '../images/card5.jpeg', value: 1 },
  { name: 'lizard', img: '../images/card6.jpeg', value: 2 },
  { name: 'void', img: '../images/card7.jpeg', value: 2 },
  { name: 'skull', img: '../images/card8.jpeg', value: 2 },
  { name: 'warrior', img: '../images/card9.jpeg', value: 2 },
  { name: 'tree', img: '../images/card10.jpeg', value: 2 },
  { name: 'clouds', img: '../images/card11.jpeg', value: 3 },
  { name: 'robot', img: '../images/card12.jpeg', value: 3 },
  { name: 'joker', img: '../images/card13.jpeg', value: 3 },
  { name: 'batman', img: '../images/card14.jpeg', value: 3 },
  { name: 'robin', img: '../images/card15.jpeg', value: 3 },
];

const cardGame = new CardGame(playerCards);
let playerCard
let computerCard
function getRandomCards() {
let playerRandomIndex = Math.floor(Math.random()* playerCards.length); 
playerCard = playerCards[playerRandomIndex];
discardCards.push(playerCard);
playerCards.splice(playerRandomIndex, 1);
let computerRandomIndex = Math.floor(Math.random()* computerCards.length);
computerCard = computerCards[computerRandomIndex];
discardCards.push(computerCard);
computerCards.splice(playerRandomIndex, 1);
playerCardElement.setAttribute("style", `background-image: url(${playerCard.img})`);
computerCardElement.setAttribute("style", `background-image: url(${computerCard.img})`);
}

function compareCards(card1, card2) {
  if(card1.value > card2.value){
    player1++;
    playerScore.innerHTML = player1.toString();
    if (player1 == 3) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "block";
      splashScreen.style.display = "none";
      gameScreenContainer.style.display = "none";
      splashDiv.style.display = "none";
    }
  } else if(card1.value < card2.value){
    player2++;
    computerScore.innerHTML = player2.toString();
    if (player2 == 3) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "block";
      splashScreen.style.display = "none";
      gameScreenContainer.style.display = "none";
      splashDiv.style.display = "none";
    }
  }
}

// for (let i = 0; i < 15; i++) {
//   getRandomCards();
//   compareCards(playerCard,computerCard);
//   console.log(playerCard,computerCard);
// }



console.log(player1, player2);

let html = "";
window.addEventListener("load", (event) => {
  gameOverScreen.style.display = "none";
  gameScreen.style.display = "none";
  gameScreenContainer.style.display = "none";
}); 

    startBtn.addEventListener("click", () => {
      splashScreen.style.display = "none";
      gameOverScreen.style.display = "none";
      gameScreen.style.display = "flex";
      gameScreenContainer.style.display = "block";
      splashDiv.style.display = "none";
    });

    resetBtn.addEventListener("click", () => {
      player1 = 0;
      player2 = 0;
      splashScreen.style.display = "block";
      gameOverScreen.style.display = "none";
      gameScreen.style.display = "none";
      gameScreenContainer.style.display = "none";
      splashDiv.style.display = "block";
      window.location.reload();
    });

    buttonElement.addEventListener("click", () => {
      getRandomCards()
      compareCards(playerCard, computerCard);

      console.log(player1,player2);
    });