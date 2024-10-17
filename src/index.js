const ctx = document.getElementById('canvas').getContext('2d');

const game = new Game(ctx);

game.start();


document.addEventListener('keydown', (event) => {
  console.log("tecla presionada: ", event.keyCode);
  game.onKeyDown(event.keyCode);
});

document.addEventListener('keyup', (event) => {
  console.log("tecla soltada: ", event.keyCode);
  game.onKeyUp(event.keyCode);
});