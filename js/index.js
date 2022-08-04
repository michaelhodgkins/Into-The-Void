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


let roundTotal = document.querySelector("#round-point");
let endResult = document.querySelector("#verdict");
let winLose = document.querySelector('#final');
let discardCards = [];
//cards
const playerCards = [
  { name: 'blue', img: 'images/set1.1.png', value: 1},
  { name: 'cat', img: '/mages/set1.2.png', value: 1},
  { name: 'wolf', img: 'images/set1.3.png', value: 1 },
  { name: 'dragon', img: 'images/set1.4.png', value: 1 },
  { name: 'brain', img: 'images/set1.5.png', value: 1 },
  { name: 'lizard', img: 'images/set2.1.png', value: 2 },
  { name: 'void', img: 'images/set2.2.png', value: 2 },
  { name: 'skull', img: 'images/set2.3.png', value: 2 },
  { name: 'warrior', img: 'images/set2.4.png', value: 2 },
  { name: 'tree', img: 'images/set2.5.png', value: 2 },
  { name: 'clouds', img: 'images/set3.1.png', value: 3 },
  { name: 'robot', img: 'images/set3.2.png', value: 3 },
  { name: 'joker', img: 'images/set3.3.png', value: 3 },
  { name: 'batman', img: 'images/set3.4.png', value: 3 },
  { name: 'robin', img: 'images/set3.5.png', value: 3 },
];

const computerCards = [
  { name: 'blue', img: 'images/set1.1.png', value: 1},
  { name: 'cat', img: 'images/set1.2.png', value: 1},
  { name: 'wolf', img: 'images/set1.3.png', value: 1 },
  { name: 'dragon', img: 'images/set1.4.png', value: 1 },
  { name: 'brain', img: 'images/set1.5.png', value: 1 },
  { name: 'lizard', img: 'images/set2.1.png', value: 2 },
  { name: 'void', img: 'images/set2.2.png', value: 2 },
  { name: 'skull', img: 'images/set2.3.png', value: 2 },
  { name: 'warrior', img: 'images/set2.4.png', value: 2 },
  { name: 'tree', img: 'images/set2.5.png', value: 2 },
  { name: 'clouds', img: 'images/set3.1.png', value: 3 },
  { name: 'robot', img: 'images/set3.2.png', value: 3 },
  { name: 'joker', img: 'images/set3.3.png', value: 3 },
  { name: 'batman', img: 'images/set3.4.png', value: 3 },
  { name: 'robin', img: 'images/set3.5.png', value: 3 },
];
roundTotal.innerText = 'Please draw your first card!';
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

let playerFinal = player1;
function compareCards(card1, card2) {
  if(card1.value > card2.value){
    player1++;
    playerScore.innerHTML = player1.toString();
    roundTotal.innerHTML = 'You won against the void, this time!';
    if (player1 == 3) {
      winLose.innerText = 'YOU WIN';
      endResult.innerText = 3; 
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      splashScreen.style.display = "none";
      gameScreenContainer.style.display = "none";
      splashDiv.style.display = "none";
    }
  } else if(card1.value < card2.value){
    player2++;
    computerScore.innerHTML = player2.toString();
    roundTotal.innerHTML = 'You lost against the void, try again!';
    if (player2 == 3) {
      winLose.innerText = 'YOU LOSE';
      endResult.innerText = '3';
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      splashScreen.style.display = "none";
      gameScreenContainer.style.display = "none";
      splashDiv.style.display = "none";
    }
  } else {
    roundTotal.innerHTML = 'You Draw, try again!';
  }
}

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
      playerScore.innerText = 0;
      computerScore.innerText = 0;
      splashScreen.style.display = "flex";
      gameOverScreen.style.display = "none";
      gameScreen.style.display = "none";
      gameScreenContainer.style.display = "none";
      splashDiv.style.display = "flex";
      window.location.reload();
    });

    buttonElement.addEventListener("click", () => {
      getRandomCards()
      compareCards(playerCard, computerCard);
      new Audio('music/zapsplat_science_fiction_movement_slimy_weird_005_48737.mp3').play();
      console.log(player1,player2);
    });