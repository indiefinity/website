let balls = []
function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    balls[0] = new Ball();
  }
  
  function draw() {
    background(0);
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
    }
  }
  class Ball {
    constructor() {
        this.radius = 15;
        this.color = color(0,0,255);
        this.x = 100;
        this.y = 100;
    }
    draw() {
        colorMode(HSB);
        fill(this.color);
        circle(this.x, this.y, 2 * this.radius);

    }
    move() {
        if (this.x <= 900 && this.y <= 100) {
        this.x++
        this.x++
        }
        if (this.x >= 900 && this.y <=900) {
            this.y++
            this.y++
        }
        if (this.x >= 100 && this.y >= 900) {
            console.log("hi")
            this.x = this.x - 1
            this.x = this.x - 1
        }
        if (this.x <= 100 && this.y <=900) {
            this.y = this.y - 1
            this.y = this.y - 1
        }
}
}