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

      this.draw();
      this.move();
      
      this.tick++;
      this.checkObstaclesStatus();

    }, 1000 / 60);
    


    // TODO: loop. clear, draw, move, addObstacle
  }

  checkObstaclesStatus() {
    this.addObstacle();
    this.clearObstacles(); 
    this.checkCollisions();
     

  }

  addObstacle() {
    if (this.tick >= 100) {
      this.tick = 0;
      const obstacle = new Obstacle(this.ctx);
      this.obstacles.push(obstacle);    
    }
    // TODO: add new Obstacle every 100 ticks
  }
  clearObstacles() {
    this.obstacles = this.obstacles.filter((obstacle)=> obstacle.isVisible());
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);  
  }

  draw() {
    this.bg.draw();
    this.helicopter.draw();
    

    this.obstacles.forEach(obstacle => {
      obstacle.draw();   
    });
    
    // TODO: draw everything
  }
  checkCollisions() {
    if (this.helicopter.checkCollision(this.obstacles) || this.helicopter.isFloor()) {
      this.gameOver();
    }
  }

  move() {
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach(obstacle => {
      
      obstacle.move();     
    });   
  }

  onKeyDown(code) {
    
    this.helicopter.onKeyDown(code);
    // TODO
  }

  onKeyUp(code) {
    this.helicopter.onKeyUp(code);
    // TODO
  }

  gameOver() {
    // Detener el juego
    clearInterval(this.intervalId); 
    this.clear();
    this.bg.draw();
    
    

    this.ctx.fillStyle = 'red';
    this.ctx.font = '48px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);

    this.obstacles = []; 
    this.helicopter = null;
  }
  
}
