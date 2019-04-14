var hit = new Audio("hit.mp3");
var hit2 = new Audio("hit2.mp3");
var hit3 = new Audio("hit3.mp3");
var ran;
function fuu() {
    ran = Math.floor(Math.random() * 3); 
    if (ran = 0) {
        hit.play()
    }
    else if (ran = 1) {
        hit2.play()
    }
    else if (ran = 2) {
        hit3.play()
    }
}