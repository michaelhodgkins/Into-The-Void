let startBtn = document.querySelector("#start-button");
let splashScreen = document.querySelector("#splash");
let gameOverScreen = document.querySelector("#gameOver");
let gameScreen = document.querySelector("#game");
let splashDiv = document.querySelector(".start-div");
let gameScreenContainer = document.querySelector(".game-board");


//cards
const cards = [
  { name: 'blue', img: '../images/card1.png'},
  { name: 'cat', img: '../images/card2.jpeg' },
  { name: 'wolf', img: '../images/card3.jpeg' },
  { name: 'dragon', img: '../images/card4.jpeg' },
  { name: 'brain', img: '../images/card5.jpeg' },
  { name: 'lizard', img: '../images/card6.jpeg' },
  { name: 'void', img: '../images/card7.jpeg' },
  { name: 'skull', img: '../images/card8.jpeg' },
  { name: 'warrior', img: '../images/card9.jpeg' },
  { name: 'tree', img: '../images/card10.jpeg' },
  { name: 'clouds', img: '../images/card11.jpeg' },
  { name: 'robot', img: '../images/card12.jpeg' },
  { name: 'joker', img: '../images/card13.jpeg' },
  { name: 'batman', img: '../images/card14.jpeg' },
  { name: 'robin', img: '../images/card15.jpeg' },
];

const cardGame = new CardGame(cards);

let html = "";
window.addEventListener("load", (event) => {
  gameOverScreen.style.display = "none";
  gameScreen.style.display = "none";
  gameScreenContainer.style.display = "none";
  cardGame.shuffleCards(cards);


     let randomCard = cards[Math.floor(Math.random()* cards.length)];
     
    console.log(randomCard);
    
     html += `
       <div class="card" data-card-name="${randomCard.name}">
         <div class="back" name="${randomCard.img}"></div>
         <div class="front" style="background: url(img/${randomCard.img}) no-repeat"></div>
       </div>
       `;
       console.log(randomCard);
  

console.log(html);
document.querySelector("#game").innerHTML = html;
}); 
    startBtn.addEventListener("click", () => {
      splashScreen.style.display = "none";
      gameOverScreen.style.display = "none";
      gameScreen.style.display = "block";
      gameScreenContainer.style.display = "block";
      splashDiv.style.display = "none";
    });
