var left = 100
function fuu() {
    left = left - 1
    document.getElementById('pepe').innerHTML = left;
    if (left < 0) {
        bohe.play()
    }
}