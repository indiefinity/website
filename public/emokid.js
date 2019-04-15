function muokkaaPepe(miksi) {
    document.getElementById('pepe').innerHTML = miksi;
}
function fuu() {
    var inp = document.getElementById('box').value;
    if (inp == 'kakka') {
        muokkaaPepe('Tykk‰‰n sinusta');
    }
    else if (inp == 'egg') {
        muokkaaPepe('EGG');
    }
}