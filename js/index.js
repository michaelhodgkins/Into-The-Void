let startBtn = document.querySelector("#start-button");
let splashScreen = document.querySelector("#splash");
let gameOverScreen = document.querySelector("#gameOver");
let gameScreen = document.querySelector("#game");
let splashDiv = document.querySelector(".start-div");



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


window.addEventListener("load", (event) => {
  gameoverScreen.style.display = "none";
  cardGame.shuffleCards(cards);

  let html = "";
  cardGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
      `;
  });
});
  
    startBtn.addEventListener("click", () => {
      splashScreen.style.display = "none";
      gameOverScreen.style.display = "none";
      gameScreen.style.display = "block";
      splashDiv.style.display = "none";
    });
