function sleep(seconds) {
    var waitUntil = new Date().getTime() + seconds;
    while (new Date().getTime() < waitUntil) true;
}
function homoile(id) {
    var homo = document.getElementById(id).value;
    if (homo == 'eat') {
        setTimeout(function () {
            document.getElementById('pepe').innerHTML = '!==!*IIII';
        }, 500);
        setTimeout(function () {
            document.getElementById('pepe').innerHTML =  ' !==!*III';
        }, 500);
        setTimeout(function () {
            document.getElementById('pepe').innerHTML =  '  !==!*II';
        }, 500);
    }
}