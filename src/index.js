const ctx = document.getElementById('canvas').getContext('2d');

const game = new Game(ctx);

game.start();


document.addEventListener('keydown', (event) => {
  game.onKeyDown(event.keyCode);
});

document.addEventListener('keyup', (event) => {
  game.onKeyUp(event.keyCode);
});