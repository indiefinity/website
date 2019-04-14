var left = 100;
var hit = new Audio("hit.mp3");
var yip = new Audio("yipii.mp3");
function fuu() {
    if (left <= 1) {
        document.getElementById('pepe').innerHTML = 'yipii';
        yip.play()
    }
    else {
        hit.play();
        left = left - 1;
        document.getElementById('pepe').innerHTML = left;
    }
}