class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;

    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [];
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();

      this.move();
      this.draw();
      
      this.tick ++;

    }, 1000 / 60);
    


    // TODO: loop. clear, draw, move, addObstacle
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.bg.draw();
    this.helicopter.draw();
    // TODO: draw everything
  }

  move() {
    this.bg.move();
    this.helicopter.move();
    // TODO: move everything
  }

  onKeyDown(code) {
    this.helicopter.onKeyDown(code);
    // TODO
  }

  onKeyUp(code) {
    this.helicopter.onKeyUp(code);
    // TODO
  }
}
