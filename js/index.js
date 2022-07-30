const canvas = document.querySelector('canvas')
canvas.style.border = '4px solid black';
let ctx = canvas.getContext('2d');
let startScreen = document.querySelector('.start')



let score = 0

let intervalId = 0

let background = new Image()
background.src = '../images/board-image.webp';

window.onload = () => {
    canvas.style.display = 'none';
    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    function startGame() {
        canvas.style.display='block';
        startScreen.style.display = 'none';

        ctx.drawImage(background, 0,0,canvas.width, canvas.height);

        intervalId = requestAnimationFrame(startGame);

    }

}