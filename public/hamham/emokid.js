function sleep(ms) {
    var waitUntil = new Date().getTime() + ms;
    while (new Date().getTime() < waitUntil) true;
}
function homoile(id) {
    var homo = document.getElementById(id).value;
    if (homo == "syö") {
        document.getElementById('pepe').innerHTML = '!==!*IIII';
        sleep(500);
        document.getElementById('pepe').innerHTML = '!==!*III';
        sleep(500);
        document.getElementById('pepe').innerHTML = '!==!*II';
        sleep(500);
        
    }
}