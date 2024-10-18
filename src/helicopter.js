class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.tick = 0;

    this.x = 100;
    this.y = 0;

    this.w = 100;
    this.h = 40;

    this.x = 0;
    this.y = this.ctx.canvas.height / 2;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.ax = 0;
    this.g = 0.1;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.img.frameHeight = this.img.height / this.img.frames;

    this.weapon = new Weapon(this);
  }

  draw() {
    //this.ctx.drawImage(this.img, this.x, 0, this.w, this.h)

    // primer elemento imagen, los 4 siguientes el recorte que haces en la imagen y los siguientes 4 donde lo posiciono en el canvas

    this.ctx.drawImage(
      this.img, // de donde cojo la img
      0, // eje x de la imagen que queremos pintar
      this.img.frameIndex * this.img.frameHeight, // eje y de donde quiero empezar la imagen
      this.img.width, // cogemos el ancho entero de la imagen para seleccionar todo el helicoptero
      this.img.frameHeight, // le decimos el tamaño del recorte de la imagen que queremos recortar 
      this.x,
      this.y,
      this.w, // tamaño del canvas
      this.h
    )
    this.tick ++;
    if(this.tick > 10) {
      this.tick = 0;
      this.img.frameIndex += 1;
      if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0;
      }
    }
    

    this.weapon.draw();
  }

  isFloor() {
      // Verificar si el helicóptero ha tocado el suelo (parte inferior del canvas)
    if (this.y + this.h >= this.ctx.canvas.height) {
      // Si es así, lo posicionamos en el suelo y detenemos el movimiento vertical
      this.y = this.ctx.canvas.height - this.h;  // Ajustar la posición justo en el suelo
      this.vy = 0;  // Detener el movimiento vertical
      return true;
    }
    return false;

  }

  move() {
    
    this.vy += this.g;
    
    
    this.x += this.vx;
    this.y += this.vy;

    // Limitar la posición para que no salga del canvas, si es necesario
    if (this.y > this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height;  // No deja que caiga más allá del borde inferior
      this.vy = 0;             // Evita que siga cayendo indefinidamente
    }
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }
    // Limitar para que no salga del canvas por la izquierda
    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }

    // Limitar para que no salga del canvas por la derecha
    if (this.x > this.ctx.canvas.width - this.w) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }

    if (this.isFloor()) {
      // Si ha tocado el suelo, detener el movimiento vertical
      this.vy = 0;
    }
  
      

    
  }

  onKeyDown(code) {
    switch (code) {
      case UP:          
              this.vy = -10;                                
          break;

      case DOWN:          
              this.vy = 10;         
          
          break;

      case RIGHT:          
              this.vx = 10;                            
          
          break;
      
      case LEFT:
              this.vx = -10;
          break;
   }
  }

  onKeyUp(code) {
    switch (code) {
      case UP:         
            
      case DOWN:          
              this.vy = 0;           
          
          break;

      case RIGHT:          
             
      case LEFT:
              this.vx = 0;
          break;
   }
  }

  checkCollision(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      if (
       ( this.x < obstacle.x + obstacle.w &&
        this.x + this.w > obstacle.x ) &&
        (this.y < obstacle.y + obstacle.h &&
        this.y + this.h > obstacle.y)
      ) {
        return true; // Hay colisión
      }
      
    }
    
    return false; // No hay colisión
  }
  

  
}
