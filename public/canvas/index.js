const c = document.getElementById('canvas');
const g = c.getContext("2d");
const c2 = document.getElementById('pipes')
const g2 = c2.getContext('2d');
var bird

var img = new Image();
img.onload = function(){
    bird = img
    //ctx.drawImage(img,0,0);
};
img.src = "./bird.png";  

var char = {"x":100,"y":200}
var main = setInterval(function() {
    c.width = c.width
    g.fillStyle = "#000000"
    g.drawImage(bird, char.x, c.height - char.y,);
    g.fillStyle = "#40b320"
    g.fillRect(0, 550, c.width, 50);
}, 10)
var timer2 = setInterval(function() {
    pipe()
}, 4000)

var gravity = setInterval(function() {
    if (char.y < 100) {
        char.y = 100
    }
        if (char.y > 100) {
        char.y *= 0.98
        }
}, 10)

window.addEventListener( "keypress", doKeyDown, false);
c.addEventListener( "keydown", doKeyDown, true);
function doKeyDown(e) {
    switch(e.keyCode) {
        case 32:
            jump();
            break;
    };
};

function jump() {
    let velocity = 10
    var jump = setInterval(function() {
        char.y += velocity;
        velocity *= 0.96;
        if (velocity < 0.1) {
            clearInterval(jump);
        }
}, 10)
}
function pipe() {
    let pipe = {"x": 860, "y":r(200,450)}
    let pipes = setInterval(function() {
        c2.width = c2.width
        g2.fillStyle = "#0d7a23"
        g2.fillRect(pipe.x,c.height - pipe.y, 80, pipe.y)
        g2.fillStyle = "#0d7a23"
        g2.fillRect(pipe.x,c.height - pipe.y - pipe.y - 100, 80, pipe.y)
        pipe.x -= 2
        if (pipe.x < 0) {
            clearInterval(pipes)
        }
    }, 10)
}
function r(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}