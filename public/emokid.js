function muokkaPepe(miksi) {
    document.getElementById('pepe').innerHTML() = miksi;
}
function fuu() {
    var inp = document.getElementById('box').value();
    if (inp == 'kakka') {
        muokkaPepe('Tykk‰‰n sinusta');
    }
    else if (inp == 'egg') {
        muokkaPepe('EGG');
    }
}