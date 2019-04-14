function sleep(seconds) {
    var waitUntil = new Date().getTime() + seconds * 1000;
    while (new Date().getTime() < waitUntil) true;
}
function homoile(id) {
    var homo = document.getElementById(id).value;
    if (homo == "eat") {
        document.getElementById('pepe').innerHTML = '!==!*IIII';
        sleep(0.5);
        document.getElementById('pepe').innerHTML = ' !==!*III';
        sleep(0.5);
        document.getElementById('pepe').innerHTML = '  !==!*II';
        sleep(0.5);
    }
}