function sleep(seconds) {
    var waitUntil = new Date().getTime() + seconds;
    while (new Date().getTime() < waitUntil) true;
}
function homoile(id) {
    var homo = document.getElementById(id).value;
    if (homo == 'eat') {
        setTimeout(function () {
            document.getElementById('pepe').innerHTML = '!==!*IIII';
            setTimeout(function () {
                document.getElementById('pepe').innerHTML = '!==!o.III';
                setTimeout(function () {
                    document.getElementById('pepe').innerHTML = '&nbsp;!==!*III';
                    setTimeout(function () {
                        document.getElementById('pepe').innerHTML = '&nbsp;!==!o.II';
                        setTimeout(function () {
                            document.getElementById('pepe').innerHTML = '&nbsp;&nbsp;!==!*II';
                            setTimeout(function () {
                                document.getElementById('pepe').innerHTML = '&nbsp;&nbsp;!==!o.I';
                                setTimeout(function () {
                                    document.getElementById('pepe').innerHTML = '&nbsp;&nbsp;&nbsp;!==!*I';
                                    setTimeout(function () {
                                        document.getElementById('pepe').innerHTML = '&nbsp;&nbsp;&nbsp;!==!o.';
                                        setTimeout(function () {
                                            document.getElementById('pepe').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;!==!*';
                                            setTimeout(function () {
                                                document.getElementById('pepe').innerHTML = '';
                                            }, 500);
                                        }, 500);
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }
}