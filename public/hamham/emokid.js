function sleep(seconds) {
    var waitUntil = new Date().getTime() + seconds;
    while (new Date().getTime() < waitUntil) true;
}
function homoile(id) {
    var homo = document.getElementById(id).value;
    if (homo == 'eat') {
        document.getElementById('pepe').innerHTML = '!==!*IIII';
        sleep(500);
        document.getElementById('pepe').innerHTML = ' !==!*III';
        sleep(500);
        document.getElementById('pepe').innerHTML = '  !==!*II';
        sleep(500);
    }
}