let startBtn = document.querySelector("#start-button");
let splashScreen = document.querySelector("#splash");
let gameOverScreen = document.querySelector("#gameOver");
let gameScreen = document.querySelector("#game");
let splashDiv = document.querySelector(".start-div");
let gameScreenContainer = document.querySelector(".game-board");
let player1 = 0;
let player2 = 0;

//cards
const cards = [
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

const cardGame = new CardGame(cards);
let playerCard = cards[Math.floor(Math.random()* cards.length)];
let computerCard = cards[Math.floor(Math.random()* cards.length)];

let html = "";
window.addEventListener("load", (event) => {
  gameOverScreen.style.display = "none";
  gameScreen.style.display = "none";
  gameScreenContainer.style.display = "none";
  cardGame.shuffleCards(cards);


    
     html += `
       <div class="card" data-card-name="${playerCard.name}">
         <div class="back" name="${playerCard.img}"></div>
         <div class="front" style="background: url(img/${playerCard.img}) no-repeat"></div>
       </div>
       `;
       console.log(playerCard);
  
       
  
    console.log(computerCard);
    
     html += `
       <div class="card" data-card-name="${computerCard.name}">
         <div class="back" name="${computerCard.img}"></div>
         <div class="front" style="background: url(img/${computerCard.img}) no-repeat"></div>
       </div>
       `;
       console.log(computerCard);

console.log(html);
document.querySelector("#game").innerHTML = html;
}); 

const gameBegin = (playerCard, computerCard) => {
  if(playerCard.value >  computerCard.value) {
    player1++;
  }
  if(playerCard.value < computerCard.value){
    player2++
  }

  }
gameBegin(playerCard,computerCard);
console.log(player1);
console.log(player2);





    startBtn.addEventListener("click", () => {
      splashScreen.style.display = "none";
      gameOverScreen.style.display = "none";
      gameScreen.style.display = "flex";
      gameScreenContainer.style.display = "block";
      splashDiv.style.display = "none";
    });
