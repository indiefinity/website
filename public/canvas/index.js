const c = document.getElementById('canvas');
const g = c.getContext("2d");

var char = {"x":100,"y":200}
var main = setInterval(function() {
    c.width = c.width;
    g.fillStyle = "#000000"
    g.fillRect(char.x, c.height - char.y, 50, 50);
    if (char.y > 550) {
        char.y = 10
    }
}, 4)

var gravity = setInterval(function() {
    if (char.y < 50) {
        char.y = 50
    }
        if (char.y > 50) {
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
        velocity *= 0.95;
        if (velocity < 0.1) {
            clearInterval(jump);
        }
}, 10)
}