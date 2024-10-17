class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx = 15;
    this.r = 2;
  }

  draw() {
    this.ctx.beginPath();
    // TODO: draw circle
    this.ctx.closePath();
  }

  move() {
    // TODO: move circle
  }

  isVisible() {
    // TODO: is inside canvas?
  }
}