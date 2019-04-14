var left = 1000;
var bohe = new Audio("hit.mp3");
function fuu() {
    bohe.play();
    left = left - 1;
    document.getElementById('pepe').innerHTML = left;
    if (left < 0) {
        document.getElementById('pepe').innerHTML = 'yipii';
    }
}