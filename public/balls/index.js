let balls = []
function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
if (mouseIsPressed) {
    balls[balls.length] = new Ball(mouseX, mouseY)
}
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
    }
  }
  class Ball {
    constructor(x, y) {
        this.radius = 15;
        this.color = color(0,0,255);
        this.x = x;
        this.y = y;
    }
    draw() {
        colorMode(HSB);
        fill(this.color);
       
        circle(this.x, this.y, 2 * this.radius);

    }

}
